'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FiCheckCircle, 
  FiShoppingBag, 
  FiTruck, 
  FiMapPin, 
  FiArrowRight, 
  FiCalendar, 
  FiCopy 
} from 'react-icons/fi'
import { useSearchParams } from 'next/navigation'

export default function ThankYouPage() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId')
  // Mock tracking data — replace with dynamic values or state parameters if needed
  const deliveryEstimatedDate = "June 02, 2026"

  const copyOrderReference = () => {
    navigator.clipboard.writeText(orderId)
    // Optional: Integration point for your toast notification system (e.g., notify("Copied Reference ID", true))
  }

  return (
    <div className="min-h-screen bg-slate-50/50 px-4 py-12 md:px-8 lg:px-12 text-slate-800 antialiased flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white border border-slate-100 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.02)] overflow-hidden relative">
        
        {/* TOP GRAPHIC ACCENT LINE */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 via-slate-900 to-teal-500" />

        <div className="p-6 md:p-10 space-y-10 text-center">
          
          {/* ================= SUCCESS HERO HEADER ================= */}
          <div className="space-y-4 max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100/50 shadow-inner animate-bounce">
              <FiCheckCircle size={32} strokeWidth={1.5} />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase">
                Order Logged Successfully
              </h1>
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                Thank you for your transmission request. Your transaction matrix cleared validation filters, and our logistics terminal has accepted the consignment block.
              </p>
            </div>
          </div>

          {/* ================= REFERENCE PARAMETER LAYER ================= */}
          <div className="bg-slate-50 border border-slate-100/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="flex items-center gap-2.5">
              <FiShoppingBag className="text-teal-600 shrink-0" size={14} />
              <span>Reference Hex: <strong className="text-slate-900 select-all">#{orderId}</strong></span>
            </div>
            <button 
              onClick={copyOrderReference}
              className="w-full sm:w-auto bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 px-3 py-2 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer text-[10px] font-black"
            >
              <FiCopy size={12} /> Copy Hash
            </button>
          </div>

          {/* ================= LOGISTICS TIMELINE PIPELINE ================= */}
          <div className="max-w-xl mx-auto space-y-4 text-left">
            <h3 className="text-[10px] font-black tracking-widest text-slate-400 uppercase text-center sm:text-left">
              Pipeline Routing Status
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-100 bg-slate-50/40 p-4 rounded-xl flex gap-3">
                <FiCalendar className="text-teal-600 shrink-0 mt-0.5" size={14} />
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black tracking-wider text-slate-400 uppercase block">Estimated Delivery Target</span>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{deliveryEstimatedDate}</p>
                </div>
              </div>

              <div className="border border-slate-100 bg-slate-50/40 p-4 rounded-xl flex gap-3">
                <FiTruck className="text-teal-600 shrink-0 mt-0.5" size={14} />
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black tracking-wider text-slate-400 uppercase block">Carrier Logistics Group</span>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-tight">Swoo Global Express Terminal</p>
                </div>
              </div>
            </div>

            {/* PIPELINE PROGRESS BAR */}
            <div className="pt-4 px-2">
              <div className="relative w-full h-1 bg-slate-100 rounded-full">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-teal-500 rounded-full" />
                <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-3 h-3 bg-teal-500 rounded-full ring-4 ring-teal-50" />
              </div>
              <div className="flex justify-between items-center mt-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                <span className="text-teal-600">Processed</span>
                <span>In Transit</span>
                <span>Out for Delivery</span>
              </div>
            </div>
          </div>

          {/* ================= ACTIONS AND REDIRECTIONS CONTROL ================= */}
          <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto w-full">
            <Link href="/profile" className="w-full sm:flex-1">
              <button className="w-full bg-slate-900 hover:bg-slate-950 text-white py-4 px-6 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 shadow-md shadow-slate-950/10 inline-flex items-center justify-center gap-2 cursor-pointer group">
                Track Manifest Pipeline
              </button>
            </Link>

            <Link href="/" className="w-full sm:flex-1">
              <button className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 py-4 px-6 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer group">
                Continue Sourcing <FiArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
              </button>
            </Link>
          </div>

          {/* SYSTEM DISPATCH NOTATION FOOTNOTE */}
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider max-w-md mx-auto">
            A confirmation telemetry log containing complete itemized parameter files and electronic payment metadata receipts has been transmitted to your validated system profile email node.
          </p>

        </div>
      </div>
    </div>
  )
}