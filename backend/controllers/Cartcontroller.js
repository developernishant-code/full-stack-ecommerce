const cartModel = require("../models/Cartmodel")

const SyncCart = async (req, res) => {
    try {
        const userId = req.user._id
        const localCart = JSON.parse(req.body.localCart) || []
        if (localCart.length === 0) {
            const userCart = await cartModel.findOne({ userId }).populate({
                path: "items.productId",
                select: "name _id original_price final_price discount_price price thumbnail "
            })
            return res.status(200).json({
                message: "Fetched cart from server",
                success: true,
                cart: userCart ? userCart.items : []
            })
        }

        let userCart = await cartModel.findOne({ userId })
            .populate({
                path: "items.productId",
                select: "name _id original_price final_price discount_price price thumbnail stock"
            })

        if (!userCart) {
            userCart = new cartModel({
                userId,
                items: []
            })
        }
        localCart.forEach((cartItem) => {
            const { id, qty } = cartItem
            const existingItem = userCart.items.find(
                (item) => {
                    return item.productId._id == id
                }
            )
            if (existingItem) {
                existingItem.qty += qty
            } else {
                userCart.items.push({
                    productId: id,
                    qty
                })
            }
        });

        await userCart.save()
        res.status(200).json({
            message: "Cart Synced Suuccessfully",
            success: true,
            cart: userCart
        })
    } catch (error) {
        console.log(error)
    }
}
const AddtoCart = async (req, res) => {
    try {
        const userId = req.user._id
        const {id,qty} = req.body

        let userCart = await cartModel.findOne({ userId })
            .populate({
                path: "items.productId",
                select: "name _id original_price final_price discount_price price thumbnail stock"
            })

        
        localCart.forEach((cartItem) => {
            const { id, qty } = cartItem
            const existingItem = userCart.items.find(
                (item) => {
                    return item.productId._id == id
                }
            )
            if (existingItem) {
                existingItem.qty += qty
            } else {
                userCart.items.push({
                    productId: id,
                    qty
                })
            }
        });

        await userCart.save()
        res.status(200).json({
            message: "Cart Synced Suuccessfully",
            success: true,
            cart: userCart
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { SyncCart }