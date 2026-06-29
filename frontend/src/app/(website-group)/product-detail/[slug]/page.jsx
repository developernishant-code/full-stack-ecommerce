import React from 'react';
import { 
    FiShoppingCart, 
    FiHeart, 
    FiShield, 
    FiTruck, 
    FiRotateCcw, 
    FiCheck, 
    FiMinus, 
    FiPlus,
    FiInfo
} from 'react-icons/fi';
import { GetProductById } from '@/api/Product'; 

export default async function ProductDetailPage({ params }) {
    
    const { slug } = await params;
    const response = await GetProductById(slug);
    const product = response?.data?.allProduct || response?.allProduct || {};

    // --- Currency Formatter Utility Function ---
    const formatCurrency = (value) => {
        if (!value) return "₹0";
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    // Safe color arrays fallback parser matching data object response matrices
    const colorIds = product.color_ids || [];

    return (
        <main className="min-h-screen bg-slate-50/50 py-8 md:py-16 text-slate-800 antialiased">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Master Grid Layout Framework (Split Panel Layout Viewports) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* ================= LEFT SIDE COLUMN: IMAGE GALLERY DISPLAY ================= */}
                    <div className="lg:col-span-6 space-y-4 lg:sticky lg:top-8">
                        <div className="bg-white rounded-[24px] border border-slate-100 p-6 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.01)] flex items-center justify-center relative aspect-square overflow-hidden group">
                            
                            {/* Stock Inventory Status Label Badge */}
                            <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                product.stock ? 'bg-teal-50 text-teal-600 border border-teal-100' : 'bg-red-50 text-red-500 border border-red-100'
                            }`}>
                                {product.stock ? 'In Stock' : 'Out of Stock'}
                            </div>

                            <img 
                                src={`${process.env.NEXT_PUBLIC_PRODUCT_IMAGE || ''}${product.thumbnail}`}
                                alt={product.name || "Product Display Showcase"}
                                className="w-full h-full object-contain max-h-[400px]"
                            />
                        </div>

                        {/* Array Variant Reference Thumbnails Grid */}
                        {product.images && product.images.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                                <div className="w-20 h-20 bg-white rounded-xl border border-black p-2 flex items-center justify-center relative shadow-sm">
                                    <img 
                                        src={`${process.env.NEXT_PUBLIC_PRODUCT_IMAGE || ''}${product.thumbnail}`}
                                        alt="Thumbnail default config view"
                                        className="w-full h-full object-contain mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ================= RIGHT SIDE COLUMN: TEXT METADATA CONFIGURATOR ================= */}
                    <div className="lg:col-span-6 space-y-6 bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                        
                        {/* Title Section Typography Stack */}
                        <div className="space-y-2 border-b border-slate-100 pb-4">
                            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 uppercase">
                                {product.name || "Untitled Product"}
                            </h1>
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                                SKU ID: {product._id ? product._id.substring(0, 8) : "N/A"}
                            </p>
                        </div>

                        {/* Financial Ledger Calculation Metrics Panel */}
                        <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-100/50 flex flex-wrap items-center justify-between gap-4">
                            <div className="space-y-1">
                                <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase block">Special Sale Price</span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-black text-slate-900 tracking-tight">
                                        {formatCurrency(product.final_price)}
                                    </span>
                                    {product.original_price > product.final_price && (
                                        <span className="text-sm font-bold text-slate-400 line-through">
                                            {formatCurrency(product.original_price)}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Relative Value Percentage Discount Flag Pill */}
                            {product.discount_price > 0 && (
                                <div className="bg-red-500 text-white font-black text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-sm">
                                    {product.discount_price}% OFF
                                </div>
                            )}
                        </div>

                        {/* Short Abstract Statement Text Block */}
                        {product.short_description && (
                            <div className="text-sm text-slate-600 leading-relaxed font-medium">
                                {product.short_description}
                            </div>
                        )}

                        {/* Custom Color Palette Selection Variant Elements */}
                        {colorIds.length > 0 && (
                            <div className="space-y-2.5">
                                <label className="text-[11px] font-black tracking-wider text-slate-400 uppercase block">
                                    Available Color Matrix Variants
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {colorIds.map((color, index) => {
                                        // Static placeholder hex mapping index logic 
                                        const sampleHexColors = ["#0f172a", "#2563eb", "#dc2626", "#e2e8f0"];
                                        const computedHex = sampleHexColors[index % sampleHexColors.length];

                                        return (
                                            <div
                                                key={color._id || index}
                                                className={`w-9 h-9 rounded-full border relative flex items-center justify-center cursor-pointer shadow-sm ${
                                                    index === 0 ? 'ring-2 ring-black ring-offset-2 scale-105' : 'border-slate-200'
                                                }`}
                                                style={{ backgroundColor: computedHex }}
                                                title={`Variant option entry config ${index + 1}`}
                                            >
                                                {index === 0 && <FiCheck size={14} strokeWidth={3} className="text-white drop-shadow-sm" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Quantity UI Box Controls Placeholder Frame */}
                        <div className="space-y-2.5 pt-2">
                            <label className="text-[11px] font-black tracking-wider text-slate-400 uppercase block">Purchase Quantity</label>
                            <div className="flex items-center gap-2 w-fit bg-slate-50 border border-slate-100 p-1.5 rounded-xl">
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 cursor-not-allowed">
                                    <FiMinus size={12} strokeWidth={2.5} />
                                </div>
                                <span className="w-10 text-center text-xs font-black text-slate-800">1</span>
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-slate-400 cursor-not-allowed">
                                    <FiPlus size={12} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* --- Action Control Arrays Button Panels --- */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-4 border-t border-slate-100">
                            <button className="sm:col-span-9 w-full bg-slate-900 hover:bg-black text-white py-3.5 px-6 rounded-xl font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md shadow-slate-900/10 transition-colors duration-200">
                                <FiShoppingCart size={14} strokeWidth={2.5} />
                                Add to Shopping Cart
                            </button>
                            
                            <button className="sm:col-span-3 w-full py-3.5 px-4 rounded-xl font-bold border bg-white border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-700 flex items-center justify-center transition-all">
                                <FiHeart size={16} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Brand Value Propositions / Guarantees Grid Block */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-50 text-[11px] text-slate-500 font-bold">
                            <div className="flex items-center gap-2 p-2 bg-slate-50/50 rounded-xl">
                                <FiTruck className="text-teal-600 shrink-0" size={14} />
                                <span>Free Logistics Delivery</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-slate-50/50 rounded-xl">
                                <FiShield className="text-teal-600 shrink-0" size={14} />
                                <span>1 Year Brand Warranty</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-slate-50/50 rounded-xl">
                                <FiRotateCcw className="text-teal-600 shrink-0" size={14} />
                                <span>7-Day Return Scheme</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= BOTTOM ROW LAYOUT PANEL: TECHNICAL DESCRIPTION OVERVIEWS ================= */}
                {product.long_description && (
                    <div className="mt-12 bg-white rounded-[24px] border border-slate-100 p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-6">
                            <FiInfo className="text-slate-900" size={15} strokeWidth={2.5} />
                            <h3 className="text-xs font-black tracking-wider text-slate-900 uppercase">
                                Technical Product Information Specifications
                            </h3>
                        </div>

                        {/* Renders Long Rich Text markup seamlessly inside the Server layout node */}
                        <div 
                            className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-4 font-medium"
                            dangerouslySetInnerHTML={{ __html: product.long_description }}
                        />
                    </div>
                )}

            </div>
        </main>
    );
}