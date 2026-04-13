import { GetBrands } from "@/api/Brand";
import { getCategories } from "@/api/Categoryapi";
import { GetColor } from "@/api/Color";
async function Filters() {
    const [cateRes, BrandRes, ColorRes] = await Promise.all([
        getCategories(),
        GetBrands(),
        GetColor()
    ])
    console.log(ColorRes)

    return (

        <div className="bg-[#f3f4f8] rounded-xl p-5 text-sm space-y-6">

            {/* CATEGORIES */}
            <div>

                <button className="w-full bg-white border rounded-md py-2 mb-4 font-medium">
                    All Categories
                </button>

                <div className="space-y-1 text-gray-600">
                    {cateRes?.allcategories?.map((item, index) => (
                        <p key={index} className="ml-3 hover:text-black cursor-pointer">
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY PRICE
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
            {/* <div>
                <h4 className="font-semibold mb-3">BY RATING</h4>

                <div className="space-y-2 text-gray-600">
                    {filterData.rating.map((r) => (
                        <label key={r} className="flex items-center gap-2">
                            <input type="checkbox" />
                            {r}
                        </label>
                    ))}
                </div>
            </div> */}

            <hr />

            <div>

                <button className="w-full bg-white border rounded-md py-2 mb-4 font-medium">
                    All Brands
                </button>

                <div className="space-y-1 text-gray-600">
                    {BrandRes?.allBrand?.map((item, index) => (
                        <p key={index} className="ml-3 hover:text-black cursor-pointer">
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY COLOR */}
            <div>
                <h4 className="font-semibold mb-3">BY COLOR</h4>

                <div className="flex flex-wrap gap-2">
                    {ColorRes?.allColor?.map((color, i) => (
                        <div
                            key={i}
                            className="w-10 h-10 rounded-full"
                            style={{ backgroundColor: color.hex_code }}
                        ></div>
                    ))}
                </div>
            </div>

            <hr />

            {/* BY MEMORY */}
            {/* <div>
                <h4 className="font-semibold mb-3">BY MEMORY</h4>

                <div className="grid grid-cols-2 gap-2 text-gray-600">
                    {filterData.memory.map((m) => (
                        <label key={m} className="flex items-center gap-2">
                            <input type="checkbox" />
                            {m}
                        </label>
                    ))}
                </div>
            </div> */}

            <hr />

            {/* BY CONDITIONS */}
            {/* <div>
                <h4 className="font-semibold mb-3">BY CONDITIONS</h4>

                <div className="space-y-2 text-gray-600">
                    {filterData.conditions.map((c) => (
                        <label key={c} className="flex items-center gap-2">
                            <input type="checkbox" />
                            {c}
                        </label>
                    ))}
                </div>
            </div> */}

            <hr />

            {/* PROMO CARD */}
            {/* <div className="bg-black text-white rounded-xl p-4">
                <h4 className="font-semibold mb-1">OKOdo hero 11+</h4>
                <p className="text-xs opacity-80 mb-2">5K wireless</p>
                <p className="text-green-400 text-lg font-bold">$169</p>
            </div> */} */

        </div>
    );
};

export default Filters;
