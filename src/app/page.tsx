
import HeroSection from "@/components/HeroSection/index";
import ClientService from '@/components/ClientService/index'
import CurrentWay from '@/components/CurrentWay/index'
import {GradientCardDemo} from '@/components/GrippInvesment/index'
import FocusCards, { cards } from '@/components/Gallary';
import AboutOwner from '@/components/AboutOwner'
// import ContactForm from '@/components/ContactUs'


export default function Home() {
  return (
    <>
  <HeroSection />
  <ClientService />
  <CurrentWay />
  <GradientCardDemo />
  <FocusCards cards={cards} />
  <AboutOwner />
  {/* <ContactForm /> */}
  </>
  );
}
