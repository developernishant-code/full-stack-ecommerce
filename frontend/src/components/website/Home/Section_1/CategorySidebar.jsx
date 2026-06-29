import { getCategories } from '@/api/Categoryapi'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

export default async function CategorySidebar() {
    const allcategories = await getCategories({ limit: 4, status: true, is_top: true })
    const categories = allcategories.allcategories

    return (
        <aside className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 px-2">
                Categories
            </h3>

            <ul className="flex flex-col gap-1">
                {categories.map((cat, index) => (
                    <Link key={index} href={`/products?category_slug=${cat.slug}`}>
                        <li className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 cursor-pointer">
                            <div className="flex items-center gap-4">
                                {/* Soft rounded image container without harsh borders */}
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 p-2 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                                    <img 
                                        src={process.env.NEXT_PUBLIC_CATEGORY_IMAGE + cat.image} 
                                        className="w-full h-full object-contain" 
                                        alt={cat.name} 
                                    />
                                </div>
                                
                                <div className="flex flex-col">
                                    <span className="text-[15px] font-bold text-slate-700 group-hover:text-teal-600 transition-colors">
                                        {cat.name}
                                    </span>
                                    <span className="text-[11px] text-gray-400 font-medium uppercase">
                                        Explore Items
                                    </span>
                                </div>
                            </div>

                            {/* Minimal Count Badge */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {cat.count || 2}
                                </span>
                                <FiChevronRight className="text-gray-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>

            {/* View All Button */}
            <button className="w-full mt-6 py-3 text-xs font-bold text-slate-500 border-2 border-dashed border-slate-100 rounded-xl hover:border-teal-200 hover:text-teal-600 transition-all">
                VIEW ALL CATEGORIES
            </button>
        </aside>
    )
}