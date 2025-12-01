// components/FeaturesSection.jsx
"use client";

import Image from "next/image";

const defaultItems = [
  {
    id: 1,
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    text:
      "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.",
    img: "/natural.jpg",
    imgAlt: "fruits and ingredients",
  },
  {
    id: 2,
    title: "Research-Backed Formulations",
    subtitle: "Formulated with Clinically Tested Ingredients",
    text:
      "We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.",
    img: "/research.jpg",
    imgAlt: "laboratory beakers",
  },
  {
    id: 3,
    title: "Eco-Conscious Manufacturing",
    subtitle: "Sustainable from Source to Shelf",
    text:
      "Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.",
    img: "/manufacture.jpg",
    imgAlt: "manufacturing line",
  },
];

export default function FeaturesSection({ items = defaultItems }) {
  return (
    // bigger design width and less horizontal padding to reduce side-gaps
    <section className="w-full max-w-[1294px] mx-auto px-4 md:px-6 py-14">
      {/* Page heading */}
      <header className="text-center mb-12 px-2">
        <h1 className="text-[43.19px] md:text-[40px] lg:text-[44px] font-bold leading-tight">
          Health Care Desk
          <br />
          The Future Of Smart Health
        </h1>

        <p className="max-w-3xl text-[21.59px] font-light md:text-[20px] text-black mx-auto mt-4">
          At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
        </p>
      </header>

      {/* Feature rows - alternate image/text */}
      <div className="flex flex-col gap-12">
        {items.map((it, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={it.id}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-10"
              aria-labelledby={`feature-${it.id}-title`}
            >
              {/* Image column: span 5 / align to edge depending on order */}
              <div
                className={`md:col-span-5 ${isEven ? "md:order-2 md:justify-end" : "md:order-1 md:justify-start"} flex`}
              >
                {/* make image take full column width (no small max-width) */}
                <div className="w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={it.img}
                    alt={it.imgAlt || it.title}
                    width={920} // large source size — will be responsive via layout
                    height={600}
                    className="object-cover w-full h-[220px] md:h-[260px] lg:h-[300px]"
                    priority={idx === 0}
                  />
                </div>
              </div>

              {/* Text column: span 7 */}
              <div className={`md:col-span-7 ${isEven ? "md:order-1 text-left" : "md:order-2 text-left"}`}>
                <h3 id={`feature-${it.id}-title`} className="text-[33.59px] md:text-[32px] lg:text-[34px] font-bold text-black">
                  {it.title}
                </h3>
                <p className="text-[21.59px] md:text-[18px] text-black font-medium mt-2">{it.subtitle}</p>

                <p className="mt-4 text-[21.59px] md:text-[15px] text-black font-light leading-relaxed">
                  {it.text}
                </p>

                <button
                  type="button"
                  className="mt-6 text-[#1A69BE] inline-block text-[21.59px] font-normal rounded border border-slate-300 px-4 py-2 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
                  aria-label={`Learn more about ${it.title}`}
                >
                  Learn More
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
