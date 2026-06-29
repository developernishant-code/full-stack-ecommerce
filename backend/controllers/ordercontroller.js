const OrderModel = require("../models/Ordermodel")
const cartModel = require("../models/Cartmodel")
const Razorpay = require('razorpay');
const crypto = require("crypto")
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const createorder = async (req, res) => {
    try {
        const { paymentMethod, address } = req.body
        const userId = req.user._id
        const cart = await cartModel.findOne({ userId })
            .populate({
                path: "items.productId",
                select: "_id final_price"
            })

        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                message: "Cart is empty",
                success: false
            })
        }

        // console.log(cart)


        const productDetails = cart.items.map((item) => {
            const { _id, final_price } = item.productId
            return {
                product_id: _id,
                qty: item.qty,
                price: final_price,
                total: (final_price * item.qty)
            }
        })

        const totalAmount = productDetails.reduce((sum, item) => sum + item.total, 0)


        const UserOrder = await OrderModel.create({
            user: userId,
            items: productDetails,
            shippingAddress: req.body.address,
            paymentMethod,
            totalAmount,
            paymentStatus: "pending"
        })

        if (paymentMethod === "cod") {
            res.status(201).json({
                message: "Order Placed Successfully",
                success: true,
                orderId: UserOrder._id
            })

        } else if (paymentMethod === "online") {
            var options = {
                amount: totalAmount * 100,  // Amount is in currency subunits. 
                currency: "INR",
                receipt: UserOrder._id.toString()
            };
            instance.orders.create(options, function (err, Razorpayorder) {
                if (err) {
                    res.status(500).json({
                        message: "Payment Failed",
                        success: false
                    })
                }
                UserOrder.razorpay_order_id = Razorpayorder.id
                UserOrder.paymentMethod = "online"
                UserOrder.save();
                res.status(200).json({
                    message: "Order Created Successfully",
                    success: true,
                    orderId: UserOrder._id,
                    payment_order_Id: Razorpayorder.id
                })
            })

        } else {
            res.status(500).json({
                message: "Internal Server Error",
                success: false
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}
const paymentVerify = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const order = await OrderModel.findOne({
            razorpay_order_id
        });
        console.log(order)

        if (!order) {
            return res.status(404).json({
                message: "Order not found",
                success: false
            });
        }

        const body =
            razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac(
                "sha256",
                process.env.RAZORPAY_KEY_SECRET
            )
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {



            order.razorpay_payment_id = razorpay_payment_id
            order.paymentStatus = "paid"
            await order.save()
            return res.status(200).json({
                message: "Payment Verified Successfully",
                success: true
            });

        } else {

            return res.status(400).json({
                message: "Invalid Signature",
                success: false
            });
        }

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

module.exports = { createorder, paymentVerify }