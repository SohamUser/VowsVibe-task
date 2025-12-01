const plans = [
  {
    id: 1,
    title: "Weight Loss",
    description:
      "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you",
    icon: "/weight-loss.png",
  },
  {
    id: 2,
    title: "Nerve Pain",
    description: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function",
    icon: "/nerve.png",
  },
  {
    id: 3,
    title: "Skin Care",
    description: "Explore premium skincare products that nourish, protect, and enhance your natural glow",
    icon: "/skincare.png",
  },
  {
    id: 4,
    title: "Mens Health",
    description: "Discover mens health products designed to boost energy, strength, and overall well-being.",
    icon: "/menhealth.png",
  },
  {
    id: 5,
    title: "Womens Health",
    description: "Explore womens health products that support hormonal balance, vitality, and overall wellness",
    icon: "/smalldoctor.png",
  },
  {
    id: 6,
    title: "Dental",
    description: "Shop dental care products that keep your smile bright, healthy, and confident",
    icon: "/dental.png",
  }
];

export default function Plans() {
  return (
    <section className="w-full flex flex-col items-center py-20">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center mb-8 px-4">
        <h1 className="text-4xl md:text-[43px] font-bold mb-4 leading-tight">
          Nutrition Solutions
        </h1>
        <h2 className="text-4xl md:text-[43px] font-bold leading-tight">
          for Your Complete Well-Being
        </h2>
      </div>


      <div
        className="w-full max-w-[2081.501px] h-[266.67px] flex flex-row gap-8 items-center justify-start overflow-x-auto px-12"
        aria-label="Plans list"
      >
        {plans.map((p) => (
          <article
            key={p.id}
            className="w-[270px] h-[266.1387px] rounded-[18.66px] p-[24.88px] flex flex-col justify-between shrink-0"
            style={{
              background: "#EDF9F6",
              boxShadow: "0 10px 30px rgba(16,24,40,0.06)",
            }}
          >

            <div className="flex flex-col items-start gap-3 grow">
              <div
                className="w-[62.2px] h-[62.2px] rounded-full flex bg-[#d2cfd7] items-center justify-center"
                aria-hidden="true"
              >
                <img
                  src={p.icon}
                  alt={`${p.title} logo`}
                  className="w-6 h-6 object-contain"
                />
              </div>

              <div>
                <h3 className="text-[18.66px] font-medium text-black">{p.title}</h3>
                <p className="text-[10.88px] text-slate-600 mt-1 font-normal leading-snug">
                  {p.description}
                </p>
              </div>
            </div>



            <button
              className="w-full py-3 rounded-full text-white text-[13.99px] font-semibold shadow-md mt-3"
              style={{
                background: "linear-gradient(90deg,#3A8EF6,#6F3AFA)",
              }}
              aria-label={`Buy ${p.title} plan`}
            >
              Buy now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
