import Image from 'next/image'

export default function PreOrderBanner() {
  return (
    <section className="relative overflow-hidden rounded-xl h-35 md:h-40">

      {/* Background Image */}
      <Image
        src="/images/home/4.png"
        alt="Oppo Watch Sport Series 8"
        fill
        className="object-cover"
        priority
      />
    </section>
  )
}
