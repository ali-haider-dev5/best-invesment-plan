import HeroSection from "@/components/HeroSection/index";
import ClientService from "@/components/ClientService/index";
import CurrentWay from "@/components/CurrentWay/index";
import { GradientCardDemo } from "@/components/GrippInvesment/index";
import FocusCards, { cards } from "@/components/Gallary";
import AboutOwner from "@/components/AboutOwner";
import Faq from "@/components/Faq";
import ContactUsHeroSection from "@/components/ContactUsHeroSection";
import { Gallery6 } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientService />
      <CurrentWay />
      <GradientCardDemo />
      <FocusCards cards={cards} />
      <AboutOwner />
      <ContactUsHeroSection />
      <Faq />
      <Gallery6 />
    </>
  );
}
