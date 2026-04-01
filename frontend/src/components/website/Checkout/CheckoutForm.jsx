const CheckoutForm = () => {
    return (
        <form className="space-y-8">

            {/* Billing Details */}
            <div>
                <h2 className="font-semibold mb-4">Billing Detail</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="firstName" required placeholder="First Name *" className="input" />
                    <input name="lastName" required placeholder="Last Name *" className="input" />
                </div>

                <input name="company" placeholder="Company Name (Optional)" className="input mt-4" />

                <select name="country" required className="input mt-4">
                    <option>United States (US)</option>
                </select>

                <input
                    name="address1"
                    required
                    placeholder="House number and street name *"
                    className="input mt-4"
                />

                <input
                    name="address2"
                    placeholder="Apartment, suite, unit, etc. (Optional)"
                    className="input mt-4"
                />

                <input name="city" required placeholder="Town / City *" className="input mt-4" />

                <select name="state" required className="input mt-4">
                    <option>Washington</option>
                </select>

                <input name="zip" required placeholder="Zip Code *" className="input mt-4" />

                <input name="phone" required placeholder="Phone Number *" className="input mt-4" />

                <input name="email" type="email" required placeholder="Email Address *" className="input mt-4" />

                <label className="flex items-center gap-2 mt-4 text-sm">
                    <input type="checkbox" name="createAccount" />
                    Create an account?
                </label>
            </div>

            {/* Additional Info */}
            <div>
                <h2 className="font-semibold mb-2">Additional Information</h2>
                <textarea
                    name="orderNotes"
                    placeholder="Note about your order, e.g. special note for delivery"
                    className="input h-28"
                />
            </div>
        </form>
    );
};

export default CheckoutForm;
