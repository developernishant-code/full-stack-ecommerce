import Link from "next/link";
import AddtoCartbtn from "./AddtoCartbtn";
import { Eye, Heart, Star } from "lucide-react";

const ProductCard = ({ product, i }) => {
  return (
    <div
      key={i}
      className="group relative bg-white rounded-[24px] p-5 border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500"
    >
      {/* --- Top Utility Layer --- */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start pointer-events-none">
        {/* Discount/Status Badge */}
        {product.badge ? (
          <span className="pointer-events-auto bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg shadow-lg">
            {product.badge}
          </span>
        ) : (
          <div /> 
        )}

        {/* Wishlist Button */}
        <button className="pointer-events-auto p-2.5 bg-white/90 backdrop-blur-md rounded-xl text-slate-400 hover:text-red-500 hover:bg-white shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <Heart size={18} />
        </button>
      </div>

      {/* --- Image Showcase --- */}
      <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-slate-50/50 mb-5 flex items-center justify-center">
        <Link href={`/product-detail/${product._id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
            alt={product.name || "Product"}
            className="h-[80%] w-[80%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Quick View Hover Overlay */}
          <div className="absolute inset-0 bg-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
              <Eye size={14} /> Quick View
            </div>
          </div>
        </Link>
      </div>

      {/* --- Product Info --- */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-[10px] text-teal-600 uppercase font-black tracking-widest">
            {product.category || "General"}
          </p>
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={10} fill="currentColor" />
            <span className="text-[10px] text-slate-400 font-bold">(4.5)</span>
          </div>
        </div>

        <h3 className="text-slate-800 font-bold text-[15px] leading-tight line-clamp-1 group-hover:text-teal-600 transition-colors">
          {product.name || "Sample Product"}
        </h3>

        {/* Pricing & Status */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-slate-900">
                ${product.final_price || 579}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-slate-300 line-through font-bold">
                  ${product.oldPrice}
                </span>
              )}
            </div>
          </div>

          <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${product.status === 'Out of Stock' ? 'bg-red-50' : 'bg-emerald-50'}`}>
            <span className={`h-1 w-1 rounded-full ${product.status === 'Out of Stock' ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
            <p className={`text-[9px] font-black uppercase tracking-tighter ${product.status === 'Out of Stock' ? 'text-red-600' : 'text-emerald-600'}`}>
              {product.status || "In stock"}
            </p>
          </div>
        </div>
      </div>

      {/* --- Action Section --- */}
      <div className="mt-5 pt-4 border-t border-slate-50">
        <AddtoCartbtn product={product} />
      </div>
    </div>
  );
};

export default ProductCard;