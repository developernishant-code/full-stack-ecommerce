import Image from 'next/image';

const CategoryCard = ({ name, image, items = 74 }) => {
    return (
        <div className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-300 cursor-pointer">
            {/* Left Content Column */}
            <div className="flex flex-col gap-0.5">
                <h4 className="text-xs font-black text-slate-800 tracking-tight transition-colors group-hover:text-teal-600">
                    {name}
                </h4>
                <p className="text-[10px] font-semibold text-slate-400">
                    {items} Items
                </p>
            </div>

            {/* Right Side Image Frame Container */}
            <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                <img
                    src={`${process.env.NEXT_PUBLIC_CATEGORY_IMAGE || ''}${image}`}
                    alt={name}
                    className="w-10 h-10 object-contain p-0.5 mix-blend-multiply"
                />
            </div>
        </div>
    );
};

export default CategoryCard;