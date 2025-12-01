const products = [
  { id: 1, title: "Dent Pure", img: "/dent-pure.png" },
  { id: 2, title: "True Fem", img: "/true-fem.png" },
  { id: 3, title: "Vita Renew", img: "/vita-renew.png" },
  { id: 4, title: "ProstaZen", img: "/prostazen.png" },
  { id: 5, title: "Nerve Freedom", img: "/nerve-freedom.png" },
];

export default function BestSellers() {
  return (
    <section className="w-full flex flex-col items-center py-12">
      {/* Header */}
      <header className="w-[1286px] max-w-full px-2 mb-6">
        <h2 className="text-[43.19px] font-bold text-slate-900">
          Our Best Sellers
        </h2>

        <p className="text-[22.18px] text-black font-normal mt-2">
          Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
        </p>

        {/* Badges row */}
        <div className="mt-4 flex items-center gap-4 text-slate-700">
          <span className="font-bold text-[21.59px]">Results-Driven</span>
          <span className="opacity-40">|</span>
          <span className="font-bold text-[21.59px]">All-Natural</span>
          <span className="opacity-40">|</span>
          <span className="font-bold text-[21.59px]">Non-GMO</span>
          <span className="opacity-40">|</span>
          <span className="font-bold text-[21.59px]">Cruelty-Free</span>
        </div>
      </header>

      
      <div className="w-[1286px] h-[310.71px] overflow-x-auto">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(5, 234.67px)",
            gap: "28.16px",
          }}
        >
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-lg shadow-sm flex flex-col p-[22.28px]"
              style={{
                width: "234.67px",
                height: "310.70px",
              }}
            >
              
              <div className="bg-[#f5f7fb] rounded-lg flex items-center justify-center h-[140px]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

           
              <h3 className="mt-[22.28px] text-[16px] font-semibold text-slate-900">
                {p.title}
              </h3>

             
              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#FFB020"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L.132 9.21l8.2-1.192L12 .587z" />
                  </svg>
                ))}
              </div>

             
              <button
                className="mt-[22.28px] w-full text-[14px] font-medium rounded border border-black py-2 hover:bg-slate-50 transition"
              >
                Shop Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
