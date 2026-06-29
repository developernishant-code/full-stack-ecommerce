import { getCategories } from "@/api/Categoryapi";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

async function SectionTwo() {
    // Keep exact backend logic, params, and data arrays completely unchanged
    const categories = await getCategories({ limit: 5, status: true, is_home: true });
    const allcategories = categories?.allcategories || [];

    return (
        <section className="bg-[#f3f4f8] py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-[24px] p-6 md:p-8 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)]">

                    {/* --- Theme-Accurate Section Header --- */}
                    <div className="flex justify-between items-center mb-8 pb-3 border-b border-slate-100/80">
                        <h3 className="text-sm font-black text-slate-900 tracking-tight uppercase">
                            POPULAR CATEGORIES
                        </h3>
                        <Link
                            href="/shop"
                            className="text-[11px] font-bold text-slate-400 hover:text-teal-600 transition-colors uppercase tracking-widest flex items-center gap-0.5 group"
                        >
                            View All
                            <FiChevronRight size={13} className="transform group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* --- Highly Responsive Category Grid Framework --- */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
                        {allcategories.map((cat, index) => (
                            <Link 
                                key={index} 
                                href={`/products?category_slug=${cat.slug}`}
                                className="block h-full"
                            >
                                <CategoryCard
                                    name={cat.name}
                                    image={cat.image}
                                />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SectionTwo;