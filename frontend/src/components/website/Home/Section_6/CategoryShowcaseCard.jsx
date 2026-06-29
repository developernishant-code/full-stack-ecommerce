import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

export default function CategoryShowcaseCard({
    title,
    bannerImage,
    bannerText,
    categories,
}) {
    return (
        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.035)] transition-all duration-500 flex flex-col gap-6">

            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase">
                    {title}
                </h4>
                <Link
                    href="/shop"
                    className="text-[11px] font-bold text-slate-400 hover:text-teal-600 transition-colors uppercase tracking-widest flex items-center gap-0.5"
                >
                    View All
                    <FiChevronRight size={13} />
                </Link>
            </div>

            {/* Promotional Banner Box */}
            <div className="relative h-[160px] rounded-2xl overflow-hidden group/banner">
                {/* Background Image Layer */}
                <Image
                    src={bannerImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover group-hover/banner:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Text Content Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent flex flex-col justify-center p-6">
                    <h5 className="text-white text-lg font-black leading-tight tracking-tight uppercase max-w-[180px]">
                        {bannerText}
                    </h5>
                </div>
            </div>

            {/* Categories Subgrid Layer */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-2">
                {categories.map((item, index) => (
                    <div 
                        key={index} 
                        className="group flex flex-col items-center text-center cursor-pointer p-1 rounded-2xl hover:bg-slate-50/50 transition-all duration-300"
                    >
                        {/* Standardized Circular Graphic Container */}
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-inner group-hover:scale-105 group-hover:bg-white group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden">
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={46}
                                height={46}
                                className="object-contain relative z-10 transition-transform duration-300 group-hover:rotate-3"
                            />
                        </div>

                        {/* Text Strings */}
                        <p className="text-xs font-bold text-slate-800 tracking-tight mt-3 group-hover:text-teal-600 transition-colors">
                            {item.name}
                        </p>
                        <p className="text-[10px] font-medium text-slate-400 mt-0.5">
                            {item.items} Items
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}