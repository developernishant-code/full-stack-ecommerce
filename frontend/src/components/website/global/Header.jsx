'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    FiChevronDown, 
    FiShoppingCart, 
    FiSearch, 
    FiMenu, 
    FiShield, 
    FiTruck, 
    FiRotateCcw, 
    FiHeart, 
    FiX, 
    FiUser 
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { lstocart } from '@/redux/features/cartSlice';

export default function Header({ user }) {
    const cart = useSelector((store) => store.cart);
    const dispatcher = useDispatch();
    
    // --- Mobile Navigation Sidebar Visibility State Controls ---
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        dispatcher(lstocart());
    }, [dispatcher]);

    // Prevent body bounce-scroll when the slide drawer layout active matrix is opened
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isSidebarOpen]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Pages", path: "/pages" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full bg-white sticky top-0 z-40 border-b border-slate-100 shadow-sm">
            {/* --- 1. Top Minimal Utility Bar (Hidden on Mobile Viewports) --- */}
            <div className="bg-slate-50 border-b border-gray-100 hidden lg:block">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-[11px] font-bold tracking-wider text-gray-500">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-1.5"><FiTruck className="text-teal-600" /> FREE SHIPPING OVER $199</span>
                        <span className="flex items-center gap-1.5"><FiRotateCcw className="text-teal-600" /> 30 DAYS MONEY BACK</span>
                        <span className="flex items-center gap-1.5"><FiShield className="text-teal-600" /> 100% SECURE PAYMENT</span>
                    </div>
                    <div className="hover:text-teal-600 cursor-pointer transition-colors uppercase">
                        Help Center
                    </div>
                </div>
            </div>

            {/* --- 2. Main Navigation Interface Container row --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:py-5">
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    {/* 📱 MOBILE VIEW CONTROL: Hamburger Trigger Box (Left-Aligned on Mobile) */}
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="lg:hidden p-2 text-slate-800 hover:text-teal-600 transition-colors cursor-pointer"
                        aria-label="Open Navigation Drawer Menu"
                    >
                        <FiMenu size={24} />
                    </button>

                    {/* 🏷️ BRAND LOGO IDENTITY (Centered on Mobile, Left-Aligned on Desktop Screens) */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-[52px] lg:h-[52px] transform group-hover:scale-105 transition-transform duration-300 ease-out">
                            <Image
                                src="/images/home/logo.png"
                                alt="NexusGrid Logo"
                                fill
                                sizes="(max-width: 1024px) 40px, 52px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-center select-none">
                            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-black leading-none text-slate-800 tracking-tight">
                                NEXUS<span className="text-teal-600">GRID</span>
                            </h1>
                            <span className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-0.5 sm:mt-1">
                                Tech Market
                            </span>
                        </div>
                    </Link>

                    {/* 🔍 DESKTOP VIEW ONLY: Centered Integrated Search Bar Area Component Layout */}
                    <div className="hidden lg:flex flex-1 max-w-xl xl:max-w-2xl relative group ml-4">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 border-r border-gray-100">
                            <button className="text-xs font-bold text-slate-700 flex items-center gap-1 hover:text-teal-600 transition-colors">
                                ALL <FiChevronDown />
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for premium tech..."
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-2.5 pl-20 pr-12 text-xs font-semibold text-slate-800 focus:ring-4 focus:ring-teal-500/5 focus:border-teal-500 focus:bg-white transition-all outline-none"
                        />
                        <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500 text-white rounded-xl flex items-center justify-center hover:bg-teal-600 transition-colors shadow-md shadow-teal-100 cursor-pointer">
                            <FiSearch size={15} />
                        </button>
                    </div>

                    {/* 🛒 ACTION MODULE AREA HUI (Right-Aligned across all screens) */}
                    <div className="flex items-center gap-2 sm:gap-4 z-10">
                        
                        {/* 👤 DESKTOP ONLY: User Auth Segment Configuration Module Layout */}
                        <div className="hidden lg:block">
                            <Link href="/profile">
                                <div className="flex flex-col items-end border-r border-gray-100 pr-4">
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">Account</span>
                                    {user?.name ? (
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <div className="w-6 h-6 rounded-md bg-teal-600 flex items-center justify-center text-white font-black text-[10px] shadow-sm">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="text-xs font-bold text-slate-800 tracking-tight max-w-[80px] truncate">{user.name}</span>
                                        </div>
                                    ) : (
                                        <span className="text-xs font-bold text-slate-600 hover:text-teal-600 transition-colors mt-1 uppercase text-[11px]">Login</span>
                                    )}
                                </div>
                            </Link>
                        </div>

                        {/* ❤️ WISHLIST HOOK BADGE (Visible on all Screen Breakpoints) */}
                        <Link href="/wishlist" className="p-2.5 text-slate-700 hover:text-teal-600 transition-colors relative" aria-label="View Wishlist Options">
                            <FiHeart size={20} strokeWidth={2.2} />
                            <span className="absolute top-1 right-1 bg-slate-900 text-white text-[9px] font-black w-4 h-4 rounded-md flex items-center justify-center border border-white">
                                0
                            </span>
                        </Link>

                        {/* 🛒 SHOPPING CART LINK ICON ACCENT BUTTON PANEL */}
                        <Link href="/cart" aria-label="View Shopping Cart Configuration Matrix">
                            <div className="group bg-slate-900 p-2.5 lg:p-3 rounded-xl lg:rounded-2xl flex items-center gap-2 lg:gap-3 hover:bg-teal-600 transition-all duration-300 shadow-sm cursor-pointer">
                                <div className="relative">
                                    <FiShoppingCart size={18} className="text-white" />
                                    <span className="absolute -top-3.5 -right-3.5 bg-teal-400 border-2 border-slate-900 text-slate-900 text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                                        {cart.items.length}
                                    </span>
                                </div>
                                <div className="hidden xl:block text-left">
                                    <p className="text-[8px] font-bold text-teal-200 uppercase leading-none tracking-wide">Total</p>
                                    <p className="text-xs font-black text-white mt-0.5">${cart.original_total}</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

                {/* --- 3. Lower Horizontal Navigation Links (Desktop System Only) --- */}
                <nav className="hidden lg:flex items-center justify-center gap-8 mt-4 pt-3 border-t border-slate-50">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <div className="flex items-center gap-1 text-xs font-black text-slate-500 hover:text-teal-500 cursor-pointer transition-colors uppercase tracking-wider">
                                {item.name}
                                <FiChevronDown size={12} className="text-slate-300" />
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* ========================================================================= */}
            {/* 📱 SLIDING OVERLAY DRAWER MOBILE NAVIGATION MENU (Smooth Transition Grid Left Align) */}
            {/* ========================================================================= */}
            <div 
                className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 pointer-events-none ${
                    isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                }`}
            >
                {/* Dark Backdrop Glass blur tint sheet */}
                <div 
                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
                    onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sliding Menu Panel Layout Card */}
                <div 
                    className={`absolute inset-y-0 left-0 w-full max-w-[280px] bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out z-10 ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="space-y-6">
                        {/* Sidebar Header Container */}
                        <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-teal-600 text-white font-black rounded-lg flex items-center justify-center text-xs">N</div>
                                <span className="text-xs font-black tracking-widest text-slate-900 uppercase">Navigation</span>
                            </div>
                            <button 
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-1 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Inline Mobile Search field asset */}
                        <div className="relative">
                            <input 
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-4 pr-10 text-xs font-medium focus:outline-none focus:border-teal-500"
                            />
                            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        </div>

                        {/* Navigation Tab Links Mapping Canvas */}
                        <nav className="flex flex-col gap-1.5">
                            {navItems.map((item, index) => (
                                <Link 
                                    key={index} 
                                    href={item.path}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className="px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 uppercase tracking-wider transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Sidebar Footer Profile Account Node */}
                    <div className="border-t border-slate-50 pt-4">
                        <Link 
                            href="/profile" 
                            onClick={() => setIsSidebarOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 transition-colors"
                        >
                            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-sm">
                                <FiUser size={16} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider leading-none">Account Matrix</span>
                                <span className="text-xs font-bold text-slate-800 mt-0.5 truncate max-w-[150px]">
                                    {user?.name ? user.name : "Sign In / Register"}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}