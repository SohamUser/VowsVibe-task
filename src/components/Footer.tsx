"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full text-slate-800">
      {/* Top info area */}
      <div className="bg-[#f3f5f6] w-full">
        <div className="max-w-[1100px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-[28.79px] text-black font-semibold mb-3">Have a Question?</h4>
            <p className="text-[21.59px] text-black font-light mb-4 max-w-sm">
              Check out our FAQs where we answer the most commonly asked questions
            </p>
            <a className="inline-block border border-[#1A69BE] text-[#1A69BE] px-4 py-1.5 text-[19.9px] rounded hover:bg-slate-50" href="/faqs">
              Read FAQs
            </a>
          </div>

          <div>
            <h4 className="text-[28.79px] font-medium mb-3">Connect With Us</h4>
            <p className="text-[21.59px] font-light text-black mb-2">Enjoy free shipping for all orders.</p>
            <div className="text-[23.99px] font-bold">1-800-822-7777</div>
          </div>

          <div>
            <h4 className="text-[28.79px] font-medium mb-3">We're Social</h4>
            <p className="text-[21.59px] text-black font-light">Like us, love us, follow us!</p>
          </div>
        </div>
      </div>


      <div className="bg-[#1968b9]">
        <div className="max-w-[1100px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 text-white">
            <h3 className="text-[34.31px] md:text-2xl font-semibold">Let's Grow Together</h3>
            <p className="text-[17.58px] opacity-90 mt-1">We'll keep it simple. Only the news and updates you need.</p>
          </div>

          <form className="flex gap-2 items-center w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email</label>
            <input id="footer-email" type="email" placeholder="Please Enter Your Email" className="px-4 py-2 rounded-sm border border-white text-white md:w-[420px] focus:outline-none" />
            <button type="submit" className="px-4 py-2 bg-white text-[#0b5aa7] font-medium rounded-sm">Submit</button>
          </form>
        </div>
      </div>


      <div className="bg-white border-t border-slate-200">
        <div className="max-w-[1100px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">

          <div className="flex flex-col gap-4">
            <div className="w-[120px]">
              <Image src="/healthcare5.png" alt="Health Desk" width={206} height={63} className="object-contain" />
            </div>

            <address className="not-italic text-[17px] text-[#5C5C5C]">
              Address: 7823 Red Oak Trail, Austin, TX, 78745, United States<br />
              Phone: (512) 555-2376<br />
              Email: Ereforce@outlook.com
            </address>
          </div>


          <div className="border-l-[1.2px] border-[#000000] pl-6">
            <h4 className="text-[19.9px] font-semibold text-[#1A69BE] mb-4">Our Products</h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-700">
              <ul className="space-y-1">
                <li className=" text-[16.79px] text-[#5C5C5C]">Vita Renew</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Testobites</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Audizen</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Nerve Flow</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Uro flow</li>
              </ul>

              <ul className="space-y-1">
                <li className=" text-[16.79px] text-[#5C5C5C]">Vita Renew</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Testobites</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Audizen</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Nerve Flow</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Memof</li>
              </ul>

              <ul className="space-y-1">
                <li className=" text-[16.79px] text-[#5C5C5C]">Vita Renew</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Testobites</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Audizen</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Nerve Flow</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Derma care</li>
              </ul>

              <ul className="space-y-1">
                <li className=" text-[16.79px] text-[#5C5C5C]">Vita Renew</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Testobites</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Audizen</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">Nerve Flow</li>
                <li className=" text-[16.79px] text-[#5C5C5C]">TestoZen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f1f1f1]">
        <div className="max-w-[1100px] mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col items-center">

          <p className="max-w-3xl text-center text-[15.5px] text-[#5C5C5C] leading-relaxed">
            These statements have not been evaluated by the Food and Drug Administration.
            These products are not intended to diagnose, treat, cure or prevent any disease.
            Individual results may vary.
          </p>

          <div className="mt-4">
            <Image
              src="/cards.png"
              alt="Accepted payment methods"
              width={255}
              height={36}
              className="object-contain mx-auto"
            />
          </div>
        </div>

        <div className="">
          <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between text-sm text-slate-600">

            <div className="text-[15.5px] text-[#434343]">
              © 2025, Health Desk Clinic. All Rights Reserved.
            </div>

            <div className="flex items-center gap-6">
              <a href="/terms" className="hover:underline text-[15.88px] text-[#434343]">Terms And Conditions</a>
              <a href="/privacy" className="hover:underline text-[15.88px] text-[#434343]">Privacy Policy</a>
              <a href="/contact" className="hover:underline text-[15.88px] text-[#434343]">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
