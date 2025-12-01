import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      aria-label="Hero - healthcare"
      className="mt-8 ml-[72px] mr-[60px]"
      style={{ backgroundColor: "rgba(3,9,50,0.04)" }} // subtle bg (replace with exact value from Figma)
    >
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div className="order-2 md:order-1">
            <h1 className="text-[50.38px] sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
            Health Desk Clinic: <br />All Natural Supplements
            </h1>

            <p className="mt-6 text-[17.51px] font-normal sm:text-lg text-black max-w-xl">
            Health Care Desk is the premier choice for those seeking wellness through wholesome,
          superfood-enriched formulas that actually work. Our all-natural, organic health supplements
          are designed to give your body what it needs to thrive and optimize your health each day!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 pt-4">
              <button
                className="inline-block bg-[#1A69BE] w-[239.93px] h-[74.82px] tracking-[0.6px] text-[21.59px] leading-1 rounded-[47.99px] text-white px-6 py-3 font-bold"
                aria-label="Shop Now"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right column - image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg aspect-4/5">
              <Image
                src="/doctor.png"
                alt="Doctor holding product"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
