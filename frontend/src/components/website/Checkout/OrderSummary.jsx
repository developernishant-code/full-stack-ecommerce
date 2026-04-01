const OrderSummary = () => {
    return (
        <div className="bg-gray-100 rounded-xl p-5 space-y-4 text-sm">

            <h2 className="font-semibold">Your Order</h2>

            <div className="flex justify-between text-xs text-gray-500 border-b pb-2">
                <span>PRODUCT</span>
                <span>SUB TOTAL</span>
            </div>

            <div className="flex justify-between">
                <span>
                    Pinnapple Macbook Pro 2022 M1 / 512GB × 3
                </span>
                <span>$1,737.00</span>
            </div>

            <div className="flex justify-between text-red-500">
                <span>Worldwide Standard Shipping</span>
                <span>+ $9.50</span>
            </div>

            <div className="flex justify-between font-semibold text-green-600 text-lg border-t pt-3">
                <span>Order Total</span>
                <span>$1,746.50</span>
            </div>

            {/* Payment Methods */}
            <div className="space-y-2 pt-2">
                <label className="flex items-start gap-2">
                    <input type="radio" name="payment" defaultChecked />
                    <span>
                        <b>Direct Bank Transfer</b>
                        <p className="text-xs text-gray-600">
                            Make your payment directly into our bank account.
                        </p>
                    </span>
                </label>

                <label className="flex items-center gap-2">
                    <input type="radio" name="payment" />
                    Cash on Delivery
                </label>

                <label className="flex items-center gap-2">
                    <input type="radio" name="payment" />
                    PayPal
                </label>
            </div>

            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium">
                PLACE ORDER
            </button>
        </div>
    );
};

export default OrderSummary;
