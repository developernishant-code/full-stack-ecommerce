import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItem = ({
    badge,
    title,
    price,
    image,
    shipping,
    extra,
    stock,
}) => {
    return (
        <div className="bg-gray-50 rounded-xl p-6 flex gap-6">

            {/* Image */}
            <div className="relative w-32 h-32 bg-white rounded-lg p-2">
                {badge && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        {badge}
                    </span>
                )}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-3">
                <h4 className="font-medium">{title}</h4>
                <p className="text-red-600 font-semibold">${price}.00</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 border rounded-md w-max px-3 py-1">
                    <FaMinus className="cursor-pointer" />
                    <span>1</span>
                    <FaPlus className="cursor-pointer" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                        {shipping}
                    </span>

                    {extra && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                            {extra}
                        </span>
                    )}
                </div>

                {/* Stock */}
                {stock && (
                    <p className="text-sm text-green-600">● In stock</p>
                )}
            </div>

            {/* Color dots */}
            <div className="flex flex-col gap-2">
                <span className="w-4 h-4 rounded-full bg-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-pink-200"></span>
            </div>

        </div>
    );
};

export default CartItem;
