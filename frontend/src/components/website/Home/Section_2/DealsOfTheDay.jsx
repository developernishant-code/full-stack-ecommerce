import Image from 'next/image'
import { FiClock, FiStar, FiZap } from 'react-icons/fi'

export default function DealsOfTheDay() {
    return (
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-50 h-full">

            {/* --- Header with Zap Icon --- */}
            <div className="bg-slate-900 px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-teal-500 p-1.5 rounded-lg">
                        <FiZap className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">
                        Deals of the Day
                    </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-teal-400 text-xs font-bold">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    LIVE NOW
                </div>
            </div>

            {/* --- Content Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8">

                {/* Left: Product Showcase (5 Cols) */}
                <div className="lg:col-span-5 flex gap-5">
                    {/* Interactive Thumbnails */}
                    <div className="flex flex-col gap-3">
                        {[1, 2, 3].map((_, i) => (
                            <div
                                key={i}
                                className={`w-16 h-16 border-2 rounded-2xl flex items-center justify-center cursor-pointer transition-all ${
                                    i === 0 ? 'border-teal-500 shadow-lg shadow-teal-100' : 'border-slate-100 hover:border-slate-200'
                                }`}
                            >
                                <Image
                                    src="/images/home/phone.png"
                                    alt="thumbnail"
                                    width={45}
                                    height={45}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Hero Image Container */}
                    <div className="relative flex-1 bg-slate-50 rounded-3xl p-6 flex items-center justify-center group">
                        <div className="absolute top-4 left-4 z-10">
                            <span className="bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg shadow-red-200">
                                SAVE $199.00
                            </span>
                        </div>

                        <div className="relative w-full h-64 transform group-hover:scale-110 transition-transform duration-500">
                            <Image
                                src="/images/home/phone.png"
                                alt="Deal Product"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Deal Intelligence (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-2 text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => <FiStar key={s} size={14} fill="currentColor" />)}
                        <span className="text-xs text-slate-400 font-bold ml-2">(12 Reviews)</span>
                    </div>

                    <h4 className="text-2xl font-black text-slate-800 leading-tight mb-4 tracking-tighter">
                        Xiaomi Redmi Note 11 Pro <span className="text-teal-600">256GB</span> Edition, Midnight Black
                    </h4>

                    <div className="flex items-end gap-3 mb-6">
                        <span className="text-3xl font-black text-slate-900">$569.00</span>
                        <span className="text-lg line-through text-slate-300 font-bold mb-1">$759.00</span>
                    </div>

                    <div className="space-y-3 mb-8">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <FiClock className="text-teal-500" /> Offer Ends In:
                        </p>
                        <div className="flex gap-2">
                            {['162', '09', '02', '45'].map((num, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center text-slate-800 font-black text-lg border border-slate-200/50">
                                        {num}
                                    </div>
                                    {i < 3 && <span className="font-bold text-slate-300">:</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stock Progress & CTA */}
                    <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100">
                        <div className="flex justify-between items-end mb-3">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-teal-600 uppercase tracking-wider">Availability</span>
                                <span className="text-sm font-bold text-slate-700">Only 26 items left!</span>
                            </div>
                            <span className="text-xs font-black text-slate-400 uppercase">35% Sold</span>
                        </div>
                        <div className="h-3 bg-white rounded-full overflow-hidden mb-6 border border-teal-100">
                            <div className="h-full bg-teal-500 rounded-full w-[35%] shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                        </div>
                        
                        <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-sm hover:bg-teal-600 transition-all duration-300 transform active:scale-95 shadow-xl shadow-slate-200">
                            ADD TO CART — START SAVING
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}