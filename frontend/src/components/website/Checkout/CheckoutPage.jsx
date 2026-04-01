import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const CheckoutPage = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-lg font-semibold mb-6">CHECKOUT</h1>

                {/* Notices */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-100 rounded-md p-4 text-sm">
                        Returning customer?{" "}
                        <span className="text-red-500 cursor-pointer">
                            Click here to log in
                        </span>
                    </div>
                    <div className="bg-gray-100 rounded-md p-4 text-sm">
                        Have a coupon?{" "}
                        <span className="text-red-500 cursor-pointer">
                            Click here to enter your code
                        </span>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <CheckoutForm />
                    </div>
                    <div className="lg:col-span-4">
                        <div className="sticky top-6">
                            <OrderSummary />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
