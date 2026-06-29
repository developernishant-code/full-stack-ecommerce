'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import ProductCard from '../../Store/Section_3/Products/ProductCard'
import { getProduct } from '@/api/Product'

import {
    Smartphone,
    Cpu,
    Radio,
    Gamepad2,
    Layers,
    PlugZap,
    ChevronRight
} from 'lucide-react'

export default function TopCellphonesSection() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const allProducts = await getProduct({
                status: true
            })

            setProducts(allProducts?.allProduct || [])
        }

        loadProducts()
    }, [])

    const categories = [
        {
            name: 'iPhone (iOS)',
            items: '74 Items',
            icon: Smartphone,
        },
        {
            name: 'Android',
            items: '35 Items',
            icon: Cpu,
        },
        {
            name: '5G Support',
            items: '12 Items',
            icon: Radio,
        },
        {
            name: 'Gaming',
            items: '9 Items',
            icon: Gamepad2,
        },
        {
            name: 'Xiaomi',
            items: '52 Items',
            icon: Layers,
        },
        {
            name: 'Accessories',
            items: '29 Items',
            icon: PlugZap,
        },
    ]

    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                    Top Cellphones & Tablets
                </h2>

                <Link
                    href="/shop"
                    className="group flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors uppercase tracking-widest"
                >
                    View All

                    <ChevronRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </Link>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">

                {/* LEFT BANNER */}
                <div className="lg:col-span-5 relative overflow-hidden rounded-3xl h-[320px] border border-blue-300 bg-gradient-to-r from-gray-100 via-gray-200 to-orange-100 px-8 py-8">

                    {/* Content */}
                    <div className="relative z-10 max-w-[220px]">
                        <h3 className="text-[38px] leading-[1.05] font-black text-black uppercase">
                            REDMI NOTE
                            <br />
                            12 PRO+ 5G
                        </h3>

                        <p className="text-gray-500 text-base mt-5 mb-8 font-medium">
                            Rise to the challenge
                        </p>

                        <button className="bg-black text-white px-7 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300">
                            SHOP NOW
                        </button>
                    </div>

                    {/* Image */}
                    <div className="absolute right-0 bottom-0 h-full flex items-end">
                        <Image
                            src="/images/home/redmif.png"
                            alt="Redmi Note 12 Pro Plus"
                            width={520}
                            height={300}
                            priority
                            className="object-contain h-[290px] w-auto"
                        />
                    </div>
                </div>

                {/* RIGHT CATEGORIES */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {categories.map((cat, i) => {

                        const Icon = cat.icon

                        return (
                            <div
                                key={i}
                                className="group bg-white p-5 rounded-[22px] border border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-between"
                            >

                                {/* Text */}
                                <div className="space-y-1">
                                    <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                                        {cat.name}
                                    </h4>

                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">
                                            {cat.items.split(' ')[0]}
                                        </span>

                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                            Items
                                        </span>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300">
                                    <Icon
                                        size={20}
                                        strokeWidth={2.2}
                                        className="text-slate-500"
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.slice(0, 5).map((product, i) => (
                    <ProductCard
                        key={i}
                        product={product}
                    />
                ))}
            </div>

        </section>
    )
}