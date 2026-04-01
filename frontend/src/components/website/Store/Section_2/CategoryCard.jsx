const CategoryCard = ({ title, items }) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer">
            {/* Image */}
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md">
                <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                    alt={title}
                    className="h-10 object-contain"
                />
            </div>

            {/* Text */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900">
                    {title}
                </h4>
                <p className="text-xs text-gray-500">
                    {items} Items
                </p>
            </div>
        </div>
    );
};

export default CategoryCard;
