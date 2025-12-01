"use client";
import Image from "next/image";


export default function BrandTrust({
  items = [
    { key: "all-natural", label: "All Natural", icon: "/allnatural.png" },
    { key: "cruelty-free", label: "Cruelty-Free", icon: "/crueltyfree.png" },
    { key: "money-back", label: "Money-back Guarantee", icon: "/moneyback.png" },
    { key: "giving-back", label: "Giving back", icon: "/giveback.png" },
    { key: "lab-tested", label: "Non-GMO", icon: "/nongmo.png" },
  ],
}) {
  return (
    <section className="w-full flex justify-center py-12">
      
      <div
        className="relative rounded-xl overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          width: "1294px",
          height: "414px",
        }}
      >
        
        <Image
          src="/back.jpg"
          alt="Brand trust background"
          fill
          className="object-cover opacity-90"
          priority
        />

        
        <div className="relative z-10 w-full px-10 py-10">
          <h2 className="text-[35.99px] font-bold text-black">
            A Brand That You Can Trust
          </h2>

          <p className="text-[21.59px] text-black mt-2 max-w-[750px] mx-auto">
            Our results-driven supplements are made with premium & safe ingredients
          </p>

          
          <ul className="mt-10 flex items-center justify-center gap-16">
            {items.map((it) => (
              <li key={it.key} className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={it.icon}
                    alt={it.label}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <span className="mt-2 text-[21.59px] font-medium text-[#1A69BE] text-center">
                  {it.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
