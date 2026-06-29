import CategoryShowcaseCard from './CategoryShowcaseCard'

export default function SectionSix() {
    const data = [
        {
            title: 'AUDIOS & CAMERAS',
            bannerImage: '/images/home/spa.png',
            bannerText: 'Best Speaker 2023',
            categories: [
                { name: 'Speaker', items: 12, icon: '/images/home/spea.png' },
                { name: 'DSLR Camera', items: 9, icon: '/images/home/camera.png' },
                { name: 'Earbuds', items: 5, icon: '/images/home/earphone.png' },
                { name: 'Microphone', items: 12, icon: '/images/home/micro.png' },
            ],
        },
        {
            title: 'GAMING',
            bannerImage: '/images/home/gaming.png',
            bannerText: 'Wireless RGB Gaming Mouse',
            categories: [
                { name: 'Monitors', items: 28, icon: '/images/home/monitor.png' },
                { name: 'Chair', items: 12, icon: '/images/home/chair.png' },
                { name: 'Controller', items: 9, icon: '/images/home/controller.png' },
                { name: 'Keyboards', items: 30, icon: '/images/home/keyboard.png' },
            ],
        },
        {
            title: 'OFFICE EQUIPMENTS',
            bannerImage: '/images/home/office.png',
            bannerText: 'Laser Projector',
            categories: [
                { name: 'Printers', items: 9, icon: '/images/home/printer.png' },
                { name: 'Network', items: 90, icon: '/images/home/router.png' },
                { name: 'Security', items: 12, icon: '/images/home/security.png' },
                { name: 'Projectors', items: 12, icon: '/images/home/projector.png' },
            ],
        },
    ]

    return (
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {data.map((item, index) => (
                    <CategoryShowcaseCard key={index} {...item} />
                ))}
            </div>
        </section>
    )
}