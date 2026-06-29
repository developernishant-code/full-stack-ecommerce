'use client'

import React from 'react'
import Image from 'next/image'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from 'react-icons/fa'
import { FiPhoneCall, FiMail, FiGlobe, FiChevronDown, FiInbox } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-12 text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ================= TOP GRID MATRIX ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-slate-100 pb-12">

          {/* Core Brand Engine Descriptor Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black tracking-widest text-slate-900 uppercase">
              SWOO – 1st NYC Tech Online Market
            </h4>
            
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-400 tracking-wider uppercase">Hotline 24/7</p>
              <p className="text-xl font-black text-slate-950 tracking-tight inline-flex items-center gap-2">
                (025) 3686 25 16
              </p>
            </div>

            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide leading-relaxed">
              257 Thatcher Road St, Brooklyn,<br />
              Manhattan, NY 10092<br />
              <span className="text-slate-900 font-bold lowercase">contact@swootechmart.com</span>
            </p>

            {/* Social Communications Anchor Icons */}
            <div className="flex gap-2.5 pt-2">
              {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={12} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Programmatic Navigation Grid Dynamic Generation */}
          {[
            {
              title: 'Top Categories',
              items: [
                'Laptops',
                'PC & Computers',
                'Cell Phones',
                'Tablets',
                'Gaming & VR',
                'Networks',
                'Cameras',
                'Sounds',
                'Office',
              ],
            },
            {
              title: 'Company',
              items: [
                'About Swoo',
                'Contact',
                'Career',
                'Blog',
                'Sitemap',
                'Store Locations',
              ],
            },
            {
              title: 'Help Center',
              items: [
                'Customer Service',
                'Policy',
                'Terms & Conditions',
                'Track Order',
                'FAQs',
                'My Account',
                'Product Support',
              ],
            },
            {
              title: 'Partner',
              items: ['Become Seller', 'Affiliate', 'Advertise', 'Partnership'],
            },
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-xs font-black tracking-widest text-slate-900 uppercase">{col.title}</h4>
              <ul className="space-y-2.5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-teal-600 transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= MIDDLE SETTINGS & NEWSLETTER CONTEXT LAYER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10 border-b border-slate-100">

          {/* Regional Localization Parameters Inputs Selector Row */}
          <div className="lg:col-span-4 flex gap-3">
            <div className="relative flex-1 max-w-[120px]">
              <select className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-700 outline-none focus:border-slate-900 transition-all cursor-pointer">
                <option>USD</option>
                <option>INR</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={12} />
            </div>

            <div className="relative flex-1 max-w-[120px]">
              <select className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-700 outline-none focus:border-slate-900 transition-all cursor-pointer">
                <option>Eng</option>
                <option>Fr</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={12} />
            </div>
          </div>

          {/* High-Performance Conversion Newsletter Subscription Box */}
          <div className="lg:col-span-8 space-y-3">
            <h4 className="text-xs font-black tracking-widest text-slate-900 uppercase">
              Subscribe & get <span className="text-teal-600">10% OFF</span> for your first order
            </h4>

            <div className="flex items-center bg-slate-50 border border-slate-100 focus-within:border-slate-900 rounded-xl px-3 transition-all max-w-xl">
              <FiInbox className="text-slate-400 shrink-0 ml-1" size={16} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent py-3 px-3 text-xs font-semibold text-slate-800 outline-none placeholder:text-slate-400 uppercase tracking-wider"
              />
              <button className="text-xs font-black tracking-widest text-slate-900 hover:text-teal-600 px-2 transition-colors shrink-0 cursor-pointer">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              By subscribing, you are accepting our{' '}
              <span className="underline text-slate-600 cursor-pointer hover:text-slate-900">Policy guidelines</span>
            </p>
          </div>
        </div>

        {/* ================= MASTER COPYRIGHT BOTTOM TERMINAL BAR ================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-wider">

          <p>
            © 2026 <span className="font-black text-slate-900">Shawonetc3</span>. All Rights Reserved
          </p>

          {/* Secure Payment Processing Pipeline Gateway Badges */}
          <div className="flex items-center gap-3">
            {[
              'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
              'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png',
              'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
              'https://upload.wikimedia.org/wikipedia/commons/3/3f/Stripe_Logo%2C_revised_2016.svg',
              'https://upload.wikimedia.org/wikipedia/commons/9/9e/Klarna_Logo_black.svg',
            ].map((src, i) => (
              <div key={i} className="h-8 w-14 bg-slate-50 border border-slate-100 rounded-lg p-1.5 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-slate-200 cursor-pointer">
                <img src={src} alt="payment gateway context node" className="w-full h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>

          <span className="text-slate-900 hover:text-teal-600 underline font-black transition-colors cursor-pointer tracking-widest">
            Mobile Site Viewport
          </span>
        </div>
      </div>
    </footer>
  )
}