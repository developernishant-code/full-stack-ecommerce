const OrderSummary = () => {
    return (
        <div className="border border-green-400 rounded-xl p-6 sticky top-24">

            <h3 className="font-semibold mb-6">Order Summary</h3>

            <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                    <span>Sub Total:</span>
                    <span>$1,000.00</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping estimate:</span>
                    <span>$600.00</span>
                </div>

                <div className="flex justify-between">
                    <span>Tax estimate:</span>
                    <span>$137.00</span>
                </div>

                <hr />

                <div className="flex justify-between font-semibold">
                    <span>ORDER TOTAL:</span>
                    <span>$1,737.00</span>
                </div>
            </div>

            <button className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg font-medium">
                CHECKOUT
            </button>
        </div>
    );
};

export default OrderSummary;
