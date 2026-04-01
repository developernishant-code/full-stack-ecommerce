import ProductCard from "./ProductCard";

const BestSellerRow = () => {
    const products = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        name: "Best Seller Product",
        price: 979,
        oldPrice: 1259,
        badge: "SAVE $59",
        status: "PRE-ORDER",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    }));

    return (
        <div>
            <h3 className="font-semibold mb-4">
                BEST SELLER IN THIS CATEGORY
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestSellerRow;
