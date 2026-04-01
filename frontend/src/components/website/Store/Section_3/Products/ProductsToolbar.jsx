const ProductsToolbar = () => {
    return (
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-600">
            <p>1–40 of 120 results</p>

            <div className="flex gap-4">
                <select className="border rounded px-2 py-1">
                    <option>24</option>
                    <option>48</option>
                    <option>72</option>
                </select>

                <select className="border rounded px-2 py-1">
                    <option>Default</option>
                    <option>Price Low → High</option>
                    <option>Price High → Low</option>
                </select>
            </div>
        </div>
    );
};

export default ProductsToolbar;
