import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const promoData = [
    { 
        image: '/images/home/1.png', 
        tag: 'Gaming Gear', 
        title: 'Level Up Your Setup', 
        color: 'from-purple-600/20' 
    },
    { 
        image: '/images/home/2.png', 
        tag: 'Smart Home', 
        title: 'Future Living Today', 
        color: 'from-teal-600/20' 
    },
    { 
        image: '/images/home/3.png', 
        tag: 'Audio Pro', 
        title: 'Pure Sound Quality', 
        color: 'from-amber-600/20' 
    },
]

export default function SidePromoCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {promoData.map((promo, index) => (
                <Link key={index} href="/products" className="group relative block overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-auto lg:h-[180px] shadow-sm hover:shadow-xl transition-all duration-500">
                    
                    {/* --- Image Layer --- */}
                    <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                    />

                    {/* --- Sophisticated Overlays --- */}
                    {/* Base darkening gradient */}
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500" />
                    
                    {/* Subtle color tint on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${promo.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* --- Content Layer --- */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block bg-teal-500 text-white text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest mb-2 shadow-lg shadow-teal-500/30">
                                {promo.tag}
                            </span>
                            
                            <h4 className="text-white font-black text-lg leading-tight mb-3 drop-shadow-md">
                                {promo.title}
                            </h4>

                            <div className="flex items-center gap-2 text-white text-[11px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500">
                                Shop Collection 
                                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>

                    {/* --- Glass Border Effect (Top) --- */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </Link>
            ))}
        </div>
    )
}