import Image from 'next/image'

export default function HeroBanner() {
    return (
        <div className="lg:col-span-3 relative overflow-hidden rounded-2xl group min-h-[450px] md:min-h-[500px] bg-black flex flex-col justify-end">
            {/* Background Image with Zoom Effect */}
            <Image
                src="/images/home/banner45.jpg" // Ensure your generated image is saved here
                alt="Model X Pro Smartphone Banner"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
            />

            {/* Subtle Modern Gradient Overlay to blend edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

            {/* Content & Action Overlay */}
            {/* Kept perfectly aligned to work with the image layout */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-8 md:pb-12 z-10">
                
                {/* Interactive CTA Buttons styled to match the teal & dark aesthetic */}
                <div className="flex gap-4 mt-4">
                    <button className="bg-teal-500 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-teal-400 transition-all duration-300 shadow-lg shadow-teal-500/20 active:scale-95">
                        Shop Now
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-all active:scale-95">
                        View Deals
                    </button>
                </div>
            </div>

            {/* Technical Pulsing Decorative Element */}
            <div className="absolute top-6 right-6 z-10">
                <div className="w-12 h-12 border border-teal-500/30 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-teal-400 rounded-full shadow-lg shadow-teal-400"></div>
                </div>
            </div>
        </div>
    )
}