"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    productImg: "/testobites.png",
    title: "TestoBites",
    text:
      "TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.",
    author: "Ryan R.",
  },
  {
    id: 2,
    productImg: "/vita-renew.png",
    title: "Vita Renew",
    text:
      "My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.",
    author: "Jamie Fields",
  },
  {
    id: 3,
    productImg: "/nerve-freedom.png",
    title: "Nerve Freedom",
    text:
      "I have been an RN for 20 years and love helping people find solutions to their health issues. NF Product is the best natural product for neuropathy pain hands down.",
    author: "Anonymous",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-14 px-4 mt-[23px] sm:px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">Verified Customer Testimonials</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 mt-24 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="relative bg-[#E9F7FA] rounded-lg overflow-visible p-6 pt-14 min-h-80 flex flex-col justify-between"
              aria-labelledby={`testi-${t.id}-title`}
            >
              <div className="absolute -top-8 left-6 w-[72px] h-[72px] rounded-full bg-transparent z-20 pointer-events-none">
                <Image
                  src={t.productImg}
                  alt={`${t.title} image`}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>

              <div className="absolute left-0 right-0 top-1/2 h-12 bg-white/30 pointer-events-none z-0" />

              <div className="relative z-10">
                <h3 id={`testi-${t.id}-title`} className="pl-2 text-[21.59px] text-left font-bold text-black">
                  {t.title}
                </h3>

                <div className="flex items-center gap-1 mt-3 pl-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB020" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L.132 9.21l8.2-1.192L12 .587z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-4 text-[21.59px] font-light text-balck leading-relaxed">
                  {t.text}
                </p>
              </div>

              <div className="mt-4 font-normal text-[21.59px] text-left text-black z-10">- {t.author}</div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="mb-6">
            <Image src="/healthcare5.png" alt="Health Desk logo" width={238.38} height={113} className="object-contain" />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-2 rounded border border-[#1A69BE] text-[21.59] font-normal hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Follow us"
          >
            Follow Us
          </button>

          {/* social icons */}
          <div className="flex items-center mt-4 gap-4">
            <a href="#" aria-label="facebook" className="inline-flex items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.43 9.93v-7.02H8.62v-2.9h1.67V9.41c0-1.64 1-2.56 2.45-2.56.71 0 1.45.13 1.45.13v1.6h-.82c-.81 0-1.06.5-1.06 1.02v1.22h1.8l-.29 2.9h-1.51V22c4.77-.8 8.43-4.94 8.43-9.93z"/></svg>
            </a>

            <a href="#" aria-label="twitter" className="inline-flex items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.1 1.53-1.9-.68.4-1.43.68-2.23.84C18.7 4.56 17.66 4 16.47 4c-1.82 0-3.3 1.47-3.3 3.29 0 .26.03.51.08.75C9.6 8.86 6.07 6.95 3.9 4.12c-.28.48-.44 1.03-.44 1.62 0 1.12.57 2.11 1.43 2.69-.53-.02-1.03-.16-1.47-.4v.04c0 1.58 1.12 2.9 2.6 3.2-.27.07-.55.11-.84.11-.2 0-.4-.02-.59-.06.4 1.24 1.55 2.15 2.92 2.17C7.76 17.03 5.4 17.9 2.86 17.9c-.37 0-.74-.02-1.09-.06 1.62 1.04 3.55 1.64 5.62 1.64 6.75 0 10.44-5.59 10.44-10.44v-.48c.72-.52 1.34-1.17 1.84-1.91-.66.3-1.36.5-2.1.59z"/></svg>
            </a>

            <a href="#" aria-label="telegram" className="inline-flex items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M21.5 4.5L3 10.9c-.7.2-.68.6-.12.79l4.04 1.27 1.53 4.9c.14.45.43.56.87.35l2.36-1.49 3.34 2.44c.61.44 1.05.21 1.21-.57L23 6.23c.18-.85-.31-1.24-1.5-1.73z"/></svg>
            </a>

            <a href="#" aria-label="linkedin" className="inline-flex items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8 18H6v-7h2v7zM7 9.9a1 1 0 110-2 1 1 0 010 2zM18 18h-2v-3.6c0-1.02-.36-1.72-1.26-1.72-.69 0-1.1.46-1.28.9-.07.16-.09.39-.09.63V18h-2v-7h2v1c.27-.42.74-1.1 1.8-1.1 1.3 0 2.28.84 2.28 2.64V18z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
