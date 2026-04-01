const ProductCard = ({ product = {} }) => {
    return (
        <div className="bg-white rounded-xl p-4 hover:shadow-md transition">

            {/* Badge */}
            {product.badge && (
                <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mb-2">
                    {product.badge}
                </span>
            )}

            {/* Image */}
            <img
                src={
                    product.image ||
                    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                }
                alt={product.name || "Product"}
                className="h-40 mx-auto object-contain mb-4"
            />

            {/* Title */}
            <h3 className="text-sm font-medium mb-1">
                {product.name || "Sample Product"}
            </h3>

            {/* Price */}
            <div className="text-sm">
                <span className="text-red-500 font-semibold">
                    ${product.price || 579}
                </span>

                {product.oldPrice && (
                    <span className="line-through text-gray-400 ml-2">
                        ${product.oldPrice}
                    </span>
                )}
            </div>

            {/* Status */}
            <p className="text-xs text-green-600 mt-2">
                {product.status || "In stock"}
            </p>

        </div>
    );
};

export default ProductCard;
