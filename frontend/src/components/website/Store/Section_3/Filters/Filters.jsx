'use client'

import { useEffect, useState } from "react";
import { GetBrands } from "@/api/Brand";
import { getCategories } from "@/api/Categoryapi";
import { GetColor } from "@/api/Color";
import { useRouter, useSearchParams } from "next/navigation";
import { FiCheck, FiRefreshCw, FiGrid, FiAward, FiSliders } from "react-icons/fi";

function Filters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);

    // ✅ Current selected values parsed directly from the URL
    const selectedCategory = searchParams.get("category_slug");
    const selectedBrand = searchParams.get("brand_slug");
    const selectedColor = searchParams.get("color");

    // 🔄 Fetch data thread
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [cateRes, brandRes, colorRes] = await Promise.all([
                    getCategories(),
                    GetBrands(),
                    GetColor()
                ]);

                setCategories(cateRes?.allcategories || []);
                setBrands(brandRes?.allBrand || []);
                setColors(colorRes?.allColor || []);
            } catch (error) {
                console.error("Error loading filter data:", error);
            }
        };

        fetchData();
    }, []);

    // 🧠 COMMON MERGE FUNCTION
    function updateQuery(key, value) {
        const query = new URLSearchParams(searchParams.toString());

        if (query.get(key) === value) {
            query.delete(key); // toggle off if clicked again
        } else {
            query.set(key, value); // add/update parameter
        }

        router.push(`/products?${query.toString()}`);
    }

    // ❌ Remove specific filter scope
    function removeFilter(key) {
        const query = new URLSearchParams(searchParams.toString());
        query.delete(key);
        router.push(`/products?${query.toString()}`);
    }

    // ❌ Reset filter definitions
    function clearAll() {
        router.push(`/products`);
    }

    return (
        <div className="w-full space-y-6 bg-slate-50/60 p-3 rounded-3xl border border-slate-100">
            
            {/* --- Global Sidebar Action Control Title --- */}
            <div className="flex items-center justify-between px-2 pt-2">
                <div className="flex items-center gap-2 text-slate-900">
                    <FiSliders size={15} strokeWidth={2.5} />
                    <h3 className="text-xs font-black tracking-wider uppercase">Filter Products</h3>
                </div>
                {(selectedCategory || selectedBrand || selectedColor) && (
                    <button
                        onClick={clearAll}
                        className="text-[11px] font-bold text-red-500 hover:text-red-600 flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                        <FiRefreshCw size={11} />
                        Reset All
                    </button>
                )}
            </div>

            {/* ================= CATEGORIES SECTION ================= */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-50">
                    <div className="flex items-center gap-2 text-slate-900">
                        <FiGrid size={13} strokeWidth={2.5} />
                        <h4 className="text-xs font-black tracking-wider uppercase">Categories</h4>
                    </div>
                    {selectedCategory && (
                        <button 
                            onClick={() => removeFilter("category_slug")}
                            className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase"
                        >
                            Clear
                        </button>
                    )}
                </div>

                <div className="space-y-1.5 max-h-[240px] overflow-y-auto pr-1 custom-scrollbar">
                    {categories.map((item) => {
                        const isActive = selectedCategory === item.slug;
                        return (
                            <div
                                key={item._id || item.slug}
                                onClick={() => updateQuery("category_slug", item.slug)}
                                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer border transition-all duration-200 ${
                                    isActive
                                        ? "bg-slate-900 border-slate-900 text-white font-bold shadow-sm shadow-slate-900/10"
                                        : "bg-white border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <span className="text-xs tracking-tight">{item.name}</span>
                                
                                {/* Dynamic Status Count Indicator Badge */}
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full transition-all ${
                                    isActive 
                                        ? "bg-white/15 text-white" 
                                        : "bg-slate-50 text-slate-400 group-hover:bg-slate-200/60 group-hover:text-slate-500"
                                }`}>
                                    {item.productsCount || "74"}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ================= BRANDS SECTION ================= */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-50">
                    <div className="flex items-center gap-2 text-slate-900">
                        <FiAward size={13} strokeWidth={2.5} />
                        <h4 className="text-xs font-black tracking-wider uppercase">Brands</h4>
                    </div>
                    {selectedBrand && (
                        <button 
                            onClick={() => removeFilter("brand_slug")}
                            className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase"
                        >
                            Clear
                        </button>
                    )}
                </div>

                <div className="space-y-1.5 max-h-[240px] overflow-y-auto pr-1 custom-scrollbar">
                    {brands.map((item) => {
                        const isActive = selectedBrand === item.slug;
                        return (
                            <div
                                key={item._id || item.slug}
                                onClick={() => updateQuery("brand_slug", item.slug)}
                                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer border transition-all duration-200 ${
                                    isActive
                                        ? "bg-slate-900 border-slate-900 text-white font-bold shadow-sm shadow-slate-900/10"
                                        : "bg-white border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                            >
                                <span className="text-xs tracking-tight">{item.name}</span>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full transition-all ${
                                    isActive 
                                        ? "bg-white/15 text-white" 
                                        : "bg-slate-50 text-slate-400 group-hover:bg-slate-200/60 group-hover:text-slate-500"
                                }`}>
                                    {item.productsCount || "12"}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ================= COLORS SECTION ================= */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-50">
                    <h4 className="text-xs font-black tracking-wider text-slate-900 uppercase">Colors</h4>
                    {selectedColor && (
                        <button 
                            onClick={() => removeFilter("color")}
                            className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase"
                        >
                            Clear
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2.5 pt-1">
                    {colors.map((color) => {
                        const colorCode = color.hex_code || '#000000';
                        const isActive = selectedColor === colorCode;
                        
                        // Adaptive Contrast Evaluator Layer
                        const isLightColor = colorCode.toLowerCase() === '#ffffff' || colorCode.toLowerCase() === '#fff';

                        return (
                            <button
                                key={color._id || colorCode}
                                onClick={() => updateQuery("color", colorCode)}
                                className={`w-8 h-8 rounded-full border flex items-center justify-center relative shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 ${
                                    isActive 
                                        ? "ring-2 ring-black ring-offset-2 scale-105 border-transparent" 
                                        : "border-slate-200"
                                }`}
                                style={{ backgroundColor: colorCode }}
                                title={color.name || colorCode}
                            >
                                {isActive && (
                                    <FiCheck 
                                        size={13} 
                                        strokeWidth={3}
                                        className={isLightColor ? "text-slate-900" : "text-white drop-shadow-sm"} 
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
            <img src="./images/store/camera.png" alt="Filter Banner" className="w-full h-auto mt-4" />

        </div>
    );
}

export default Filters;