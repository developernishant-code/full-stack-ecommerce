import {
    FiMonitor,
    FiCpu,
    FiSmartphone,
    FiTablet,
    FiCamera,
} from 'react-icons/fi'

const categoryIcons = {
    Laptops: <FiMonitor size={18} />,
    'PC & Computers': <FiCpu size={18} />,
    'Cell Phones': <FiSmartphone size={18} />,
    Tablets: <FiTablet size={18} />,
    Cameras: <FiCamera size={18} />,
}

export default function CategorySidebar({ categories }) {
    return (
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4">
            <h3 className="text-lg font-semibold mb-4">Category</h3>

            <ul className="space-y-3">
                {categories.map((cat, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between px-4 py-3 rounded-lg border hover:border-teal-500 transition cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-teal-500">
                                {categoryIcons[cat.name]}
                            </span>

                            <span className="text-sm font-medium">{cat.name}</span>
                        </div>

                        <span className="text-xs bg-teal-100 text-teal-600 w-6 h-6 flex items-center justify-center rounded-full">
                            {cat.count}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
