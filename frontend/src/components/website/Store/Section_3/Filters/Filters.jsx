const Filters = () => {

    const filterData = {
        categories: {
            title: "CATEGORIES",
            main: "Cell Phones & Tablets",
            items: [
                "All",
                "Iphone",
                "Samsung",
                "Xiaomi",
                "Asus",
                "Oppo",
                "Gaming Smartphone",
                "Ipad",
                "Window Tablets",
                "eReader",
                "Smartphone Chargers",
                "5G Support Smartphone",
                "Smartphone Accessories",
                "Tablets Accessories",
                "Cell Phones  $200",
            ],
        },

        price: {
            min: 0,
            max: 10000,
        },

        rating: ["(52)", "(24)", "(5)", "(1)"],

        screenSize: [
            '7" & Under',
            '7.1" - 8.9"',
            '9" - 10.9"',
            '11" & Greater',
        ],

        colors: [
            "bg-red-600",
            "bg-blue-600",
            "bg-sky-400",
            "bg-gray-900",
            "bg-white border",
            "bg-green-500",
            "bg-gray-400",
            "bg-indigo-600",
        ],

        memory: [
            "12GB (4)",
            "8GB (3)",
            "6GB (12)",
            "4GB (6)",
            "3GB (7)",
            "1.5GB (1)",
            "1GB (1)",
            "512MB (2)",
        ],

        conditions: ["New (21)", "Like New (2)", "Open Box (38)"],
    };


    return (
        <div className="bg-[#f3f4f8] rounded-xl p-5 text-sm space-y-6">

            {/* CATEGORIES */}
            <div>
                <h4 className="font-semibold mb-3">{filterData.categories.title}</h4>

                <button className="w-full bg-white border rounded-md py-2 mb-4 font-medium">
                    All Categories
                </button>

                <p className="font-medium text-black mb-1">
                    {filterData.categories.main}
                </p>

                <div className="space-y-1 text-gray-600">
                    {filterData.categories.items.map((item) => (
                        <p key={item} className="ml-3 hover:text-black cursor-pointer">
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY PRICE */}
            <div>
                <h4 className="font-semibold mb-3">BY PRICE</h4>

                <div className="relative h-2 bg-gray-300 rounded mb-3">
                    <div className="absolute left-2 right-2 h-2 bg-green-500 rounded"></div>
                    <span className="absolute left-2 -top-1 w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="absolute right-2 -top-1 w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        className="w-full border rounded px-2 py-1"
                        value={`$ ${filterData.price.min}`}
                        readOnly
                    />
                    <span>-</span>
                    <input
                        className="w-full border rounded px-2 py-1"
                        value={`$ ${filterData.price.max}`}
                        readOnly
                    />
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                        Go
                    </button>
                </div>
            </div>

            <hr />

            {/* BY RATING */}
            <div>
                <h4 className="font-semibold mb-3">BY RATING</h4>

                <div className="space-y-2 text-gray-600">
                    {filterData.rating.map((r) => (
                        <label key={r} className="flex items-center gap-2">
                            <input type="checkbox" />
                            {r}
                        </label>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY SCREEN SIZE */}
            <div>
                <h4 className="font-semibold mb-3">BY SCREEN SIZE</h4>

                <div className="flex flex-wrap gap-2">
                    {filterData.screenSize.map((size) => (
                        <button
                            key={size}
                            className="bg-white border px-3 py-1 rounded text-xs hover:border-green-500"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY COLOR */}
            <div>
                <h4 className="font-semibold mb-3">BY COLOR</h4>

                <div className="flex flex-wrap gap-2">
                    {filterData.colors.map((color, i) => (
                        <span
                            key={i}
                            className={`w-6 h-6 rounded cursor-pointer ${color}`}
                        ></span>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY MEMORY */}
            <div>
                <h4 className="font-semibold mb-3">BY MEMORY</h4>

                <div className="grid grid-cols-2 gap-2 text-gray-600">
                    {filterData.memory.map((m) => (
                        <label key={m} className="flex items-center gap-2">
                            <input type="checkbox" />
                            {m}
                        </label>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY CONDITIONS */}
            <div>
                <h4 className="font-semibold mb-3">BY CONDITIONS</h4>

                <div className="space-y-2 text-gray-600">
                    {filterData.conditions.map((c) => (
                        <label key={c} className="flex items-center gap-2">
                            <input type="checkbox" />
                            {c}
                        </label>
                    ))}
                </div>
            </div>

            <hr />

            {/* PROMO CARD */}
            <div className="bg-black text-white rounded-xl p-4">
                <h4 className="font-semibold mb-1">OKOdo hero 11+</h4>
                <p className="text-xs opacity-80 mb-2">5K wireless</p>
                <p className="text-green-400 text-lg font-bold">$169</p>
            </div>

        </div>
    );
};

export default Filters;
