import HeroSection from "@/components/HeroSection/index";
import ClientService from "@/components/ClientService/index";
import CurrentWay from "@/components/CurrentWay/index";
import { GradientCardDemo } from "@/components/GrippInvesment/index";
import Gallery from "@/components/Gallery";
import AboutOwner from "@/components/AboutOwner";
import Faq from "@/components/Faq";
import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import { Gallery6 } from "@/components/Testimonial";
import HeroChecklist from "@/components/HeroChecklist";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientService />
      <CurrentWay />
      <HeroChecklist />
      <GradientCardDemo />
      <Gallery />
      <AboutOwner />
      <Faq />
      <Gallery6 />
    </>
  );
}
