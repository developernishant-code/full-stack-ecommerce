import CategoryCard from "./CategoryCard";

const SectionTwo = () => {
    // Temporary static data (will be replaced by API later)
    const categories = [
        { title: "iPhone (iOS)", items: 74 },
        { title: "Android", items: 35 },
        { title: "5G Support", items: 12 },
        { title: "Apple Tablets", items: 22 },
        { title: "Smartphone Chargers", items: 33 },
        { title: "Gaming", items: 9 },
        { title: "Xiaomi", items: 52 },
        { title: "Accessories", items: 29 },
        { title: "Samsung Tablets", items: 26 },
        { title: "eReader", items: 5 },
    ];

    return (
        <section className="bg-[#f2f3f7] py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-xl p-6">

                    {/* Section Title */}
                    <h3 className="text-sm font-semibold mb-6">
                        POPULAR CATEGORIES
                    </h3>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4">
                        {categories.map((cat, index) => (
                            <CategoryCard
                                key={index}
                                title={cat.title}
                                items={cat.items}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
