'use client'

import { getProduct } from '@/api/Product'
import { useEffect, useState } from 'react'
import ProductCard from '../../Store/Section_3/Products/ProductCard'
import Link from 'next/link'

export default function SectionThree() {
    const [activeTab, setActiveTab] = useState('best')
    const [bestProducts, setBestProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await getProduct({ status: true })
            console.log(response, "response data")
            const allProducts = response?.allProduct || []

            setBestProducts(allProducts.filter(product => product.is_home === true))
            setNewProducts(allProducts.filter(product => product.is_top === true))
            setPopularProducts(allProducts.filter(product => product.is_popular === true))
        } catch (error) {
            console.error("Fetch Error:", error)
        } finally {
            setLoading(false)
        }
    }

    const tabs = [
        { id: 'best', label: 'BEST SELLER' },
        { id: 'new', label: 'NEW IN' },
        { id: 'popular', label: 'POPULAR' }
    ]

    let activeProducts = []
    if (activeTab === 'best') activeProducts = bestProducts
    if (activeTab === 'new') activeProducts = newProducts
    if (activeTab === 'popular') activeProducts = popularProducts

    return (
        <section className="max-w-7xl mx-auto px-4 py-10 overflow-hidden">
            {/* --- Tabs Header Bar --- */}
            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <div className="flex gap-6 overflow-x-auto scrollbar-none">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-xs font-bold tracking-wider pb-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                                activeTab === tab.id
                                    ? 'border-black text-black scale-105'
                                    : 'border-transparent text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <Link
                    href="/shop"
                    className="text-xs font-bold text-gray-500 hover:text-black transition-colors hidden md:block"
                >
                    View All
                </Link>
            </div>

            {/* --- Loading and Grid Section Area --- */}
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                    <div className="w-6 h-6 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
                    <p className="text-xs text-gray-400 tracking-wider">Loading Collection...</p>
                </div>
            ) : (
                /* The key={activeTab} forces React to remount this element when state moves. 
                   This unbinds the old classes and retriggers our native CSS animation swipe */
                <div 
                    key={activeTab} 
                    className="animate-swipe grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                >
                    {activeProducts.length > 0 ? (
                        activeProducts.map((product, index) => (
                            <div 
                                key={product._id || index}
                                // Increments the animation execution delay per element position index
                                style={{ animationDelay: `${index * 0.04}s` }}
                                className="opacity-0 animate-swipe"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            <p className="text-sm text-gray-400 font-medium">
                                No Products Found in this section
                            </p>
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}