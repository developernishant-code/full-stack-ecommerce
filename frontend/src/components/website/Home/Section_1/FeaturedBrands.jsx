import Image from 'next/image'

const brands = [
    { name: 'Digitek', logo: '/brands/digitek.png' },
    { name: 'Grafbase', logo: '/brands/grafbase.png' },
    { name: 'Jamx', logo: '/brands/jamx.png' },
    { name: 'Logo9', logo: '/brands/Logo9.png' },
    { name: 'Logo10', logo: '/brands/Logo10.png' },
    { name: 'MSI', logo: '/brands/msi.png' },
    { name: 'OAK', logo: '/brands/oak.png' },
    { name: 'Ohbear', logo: '/brands/ohbear.png' },
    { name: 'Snyk', logo: '/brands/snyk.png' },
    { name: 'Tekreact', logo: '/brands/tekreact.png' },
]

export default function FeaturedBrands() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Featured Brands</h3>
                <span className="text-sm text-gray-500 cursor-pointer hover:text-teal-500">
                    View All
                </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 items-center">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-14 rounded-lg hover:shadow transition bg-white"
                    >
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            width={90}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
