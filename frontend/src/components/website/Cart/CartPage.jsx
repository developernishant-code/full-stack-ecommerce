import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const CartPage = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Cart Items */}
                    <div className="lg:col-span-8 space-y-6">
                        <CartItem
                            badge="SAVE $199.00"
                            title="SROK Smart Phone 128GB, Oled Retina"
                            price={579}
                            image="/products/phone-1.png"
                            shipping="FREE SHIPPING"
                            stock
                        />

                        <CartItem
                            badge="NEW"
                            title="aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB"
                            price={979}
                            image="/products/tablet-1.png"
                            shipping="$2.98 SHIPPING"
                            stock
                        />

                        <CartItem
                            badge="NEW"
                            title="Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone"
                            price={659}
                            image="/products/phone-2.png"
                            shipping="FREE SHIPPING"
                            extra="FREE GIFT"
                            stock
                        />
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-4">
                        <OrderSummary />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CartPage;
