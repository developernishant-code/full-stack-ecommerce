const AccountInfoForm = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-6">Account Info</h2>

            <form className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">First Name *</label>
                        <input
                            name="firstName"
                            required
                            defaultValue="Mark"
                            className="input"
                        />
                    </div>

                    <div>
                        <label className="label">Last Name *</label>
                        <input
                            name="lastName"
                            required
                            defaultValue="Cole"
                            className="input"
                        />
                    </div>
                </div>

                <div>
                    <label className="label">Email Address *</label>
                    <input
                        name="email"
                        type="email"
                        required
                        defaultValue="swoo@gmail.com"
                        className="input"
                    />
                </div>

                <div>
                    <label className="label">
                        Phone Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                        name="phone"
                        defaultValue="+1 0231 4554 452"
                        className="input"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-teal-600 text-white px-10 py-3 rounded-lg font-medium"
                >
                    SAVE
                </button>

            </form>
        </div>
    );
};

export default AccountInfoForm;
