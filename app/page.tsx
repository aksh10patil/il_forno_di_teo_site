import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import MenuSection from "@/components/MenuItems";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MenuSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
