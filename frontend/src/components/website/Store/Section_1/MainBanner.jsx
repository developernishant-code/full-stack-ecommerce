import React from 'react'

export default function MainBanner() {
    return (
        <div>
            <div className="bg-white rounded-xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Large Banner */}
                    <div className="lg:col-span-2 bg-[#a9adb6] rounded-xl relative overflow-hidden flex items-center">
                        <div className="p-8 max-w-md z-10">
                            <h3 className="text-3xl font-bold text-white leading-tight">
                                Noise Cancelling
                            </h3>
                            <h4 className="text-2xl text-white font-light mb-4">
                                Headphone
                            </h4>

                            <p className="text-white text-sm leading-relaxed">
                                Boso Over-Ear Headphone <br />
                                Wifi, Voice Assistant, <br />
                                Low Latency Game Mode
                            </p>

                            <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                                BUY NOW
                            </button>
                        </div>

                        {/* Image */}
                        <img
                            src="./images/store/headphone.png"
                            alt="Headphone"
                            className="absolute right-0 top-0 h-full object-cover"
                        />

                        {/* Slider Indicator */}
                        <div className="absolute bottom-4 right-6 bg-white text-xs px-3 py-1 rounded-full shadow">
                            3 / 3
                        </div>
                    </div>

                    {/* Right Small Banner */}
                    <div className="relative rounded-2xl overflow-hidden h-[350px] w-full">
  {/* Background Image */}
  <img
    src="./images/store/redmi.png"
    alt="Redmi Note 12 Pro+ 5G"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#dcdff1]/90 to-[#f3d7a6]/80" />

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-between h-full p-6">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold leading-tight mb-2 text-black">
          Redmi Note 12 <br /> Pro+ 5G
        </h3>

        <p className="text-sm text-gray-700">
          Rise to the challenge
        </p>
      </div>

      <button className="bg-black text-white text-xs px-5 py-2 rounded-full hover:bg-gray-800 transition">
        SHOP NOW
      </button>
    </div>

    {/* Bottom spacing */}
    <div />
  </div>
</div>

                </div>
            </div>
        </div>
    )
}
