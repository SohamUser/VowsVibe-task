import BestSellers from "@/components/Bestseller";
import BrandTrust from "@/components/BrandTrust";
import CharitySection from "@/components/CharitySection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="shadow-md p-4 pt-1.5">
      <Navbar/>
      </div>
      <HeroSection/>
      <Plans/>
      <BestSellers/>
      <BrandTrust/>
      <FeaturesSection/>
      <CharitySection/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
