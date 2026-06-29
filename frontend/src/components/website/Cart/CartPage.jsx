'use client'

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { qtyChange } from "@/redux/features/cartSlice";
import Link from "next/link";
import { FiShoppingBag, FiMinus, FiPlus, FiTrash2, FiTag, FiArrowRight } from "react-icons/fi";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  // Guard clause for an empty cart matrix
  const isCartEmpty = !cart.items || cart.items.length === 0;

  return (
    <div className="min-h-screen bg-slate-50/50 px-4 py-8 md:px-8 lg:px-12 text-slate-800 antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP CONTEXT BAR */}
        <div className="flex items-center gap-2 border-b border-slate-100 pb-5 mb-8">
          <FiShoppingBag className="text-teal-600" size={20} />
          <h1 className="text-base font-black tracking-widest uppercase text-slate-900">
            Shopping Cart Pipeline
          </h1>
          <span className="ml-2 text-[10px] font-black bg-slate-950 text-white px-2 py-0.5 rounded uppercase tracking-wider">
            {cart.items?.length || 0} Batches
          </span>
        </div>

        {isCartEmpty ? (
          <div className="bg-white rounded-[24px] border border-slate-100 p-12 text-center shadow-[0_4px_30px_rgba(0,0,0,0.01)] max-w-md mx-auto space-y-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Your transmission queue is empty.
            </p>
            <Link href="/" className="inline-block bg-slate-900 hover:bg-teal-600 text-white text-xs font-black tracking-widest uppercase px-6 py-3.5 rounded-xl transition-all cursor-pointer">
              Return To Terminal
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ================= LEFT ANCHOR: DYNAMIC CART ENTRIES (8 Columns) ================= */}
            <div className="lg:col-span-8 space-y-4">
              {cart.items.map((item, index) => {
                const hasSaving = item.original_price && item.original_price > 0;
                
                return (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-100 rounded-[22px] p-5 flex flex-col sm:flex-row gap-5 items-center relative shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all hover:border-slate-200/80 group"
                  >
                    {/* DYNAMIC SAVING BADGE */}
                    {hasSaving && (
                      <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 text-[8px] font-black bg-teal-500 text-white px-2 py-0.5 rounded-md uppercase tracking-widest shadow-sm">
                        <FiTag size={8} /> SAVE $199
                      </span>
                    )}

                    {/* PRODUCT VECTOR LOGO */}
                    <div className="w-28 h-28 bg-slate-50 border border-slate-100/60 rounded-xl p-1.5 flex items-center justify-center shrink-0 relative overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* PRODUCT PARAMETER SHEET */}
                    <div className="flex-1 min-w-0 text-center sm:text-left w-full space-y-1.5">
                      <div className="space-y-0.5">
                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight truncate">
                          {item.name}
                        </h3>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <p className="text-sm font-black text-slate-950">${item.original_price}</p>
                          <span className="text-[9px] font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-1.5 py-0.5 rounded">
                            Free Shipping
                          </span>
                        </div>
                      </div>

                      {/* DATA INPUT CONTROL ROWS */}
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden h-8">
                          <button 
                            type="button"
                            onClick={() => dispatch(qtyChange({ id: item.id, flag: 'dec' }))} 
                            className="px-2.5 h-full text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer"
                          >
                            <FiMinus size={10} />
                          </button>
                          <span className="px-3 text-xs font-black text-slate-800 tabular-nums">
                            {item.qty}
                          </span>
                          <button 
                            type="button"
                            className="px-2.5 h-full text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer" 
                            onClick={() => dispatch(qtyChange({ id: item.id, flag: 'inc' }))}
                          >
                            <FiPlus size={10} />
                          </button>
                        </div>

                        {/* AVAILABILITY NODE TERMINAL */}
                        <p className={`text-[10px] font-black uppercase tracking-wider ${
                          item.stock ? "text-emerald-600" : "text-rose-600"
                        }`}>
                          {item.stock ? "● In stock" : "Out of Stock"}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* ================= RIGHT ANCHOR: CRUNCH ORDER SUMMARY (4 Columns) ================= */}
            <div className="lg:col-span-4 bg-white border border-slate-900 rounded-[24px] p-6 shadow-xl shadow-slate-900/5 h-fit relative overflow-hidden">
              
              {/* ACCENT HEADER GRAPHIC */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 via-slate-900 to-teal-500" />

              <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase border-b border-slate-100 pb-4 mb-4">
                Order Manifest Summary
              </h2>

              <div className="space-y-3 text-xs font-bold text-slate-600">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 uppercase tracking-wider">Sub Total</span>
                  <span className="font-black text-slate-900 tabular-nums">${cart.original_total}</span>
                </div>

                <div className="flex justify-between items-center bg-teal-50/40 border border-teal-100/40 p-2 rounded-xl">
                  <span className="text-teal-700 uppercase tracking-wider pl-1">Total Saving</span>
                  <span className="font-black text-teal-600 tabular-nums">-${(cart.original_total - cart.final_total)}</span>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between items-baseline text-slate-900">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Total Payable</span>
                  <span className="text-xl font-black tracking-tight tabular-nums">${cart.final_total}</span>
                </div>
              </div>

              {/* ROUTING GATEWAY BUTTON */}
              <Link href="/checkout" className="block mt-6">
                <button className="w-full bg-slate-900 hover:bg-teal-600 text-white py-4 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 cursor-pointer group">
                  Proceed To Checkout <FiArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
                </button>
              </Link>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;