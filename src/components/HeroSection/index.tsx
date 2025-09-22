
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Performance",
    description: "Ultra-fast data processing in every situation.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Advanced protection for complete peace of mind.",
  },
  {
    icon: Layers,
    title: "Modularity",
    description: "Easy integration with existing architecture.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Instant response to every command.",
  },
];

const HeroSection = () => {
  return (
<div className="min-h-[795px] w-screen bg-[#313131] dark:bg-[#0f131b] bg-cover bg-center bg-blend-overlay text-white flex flex-col items-center justify-center p-8">
      <div className="w-full relative max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 dark:text-white b border border-[#f3a84f] text-white hover:bg-white/20 px-4 py-2 rounded-full">
            ✨ Next Generation Tools
          </Badge>
          
          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className="text-3xl md:text-6xl text-white    dark:text-white capitalize font-extrabold tracking-tight max-w-3xl">
              Discover minimalism and
            </h1>
               <h1 className="text-3xl md:text-6xl text-[#f3a84f] capitalize font-extrabold tracking-tight max-w-3xl">
               power in one place
            </h1>
            <p className="text-lg text-[#333333 ] dark:text-white  max-w-2xl">
              Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button className="text-sm px-8 py-3 rounded-xl dark:text-white bg-[var(--brand)]  border border-[#f3a84f] text-white  shadow-none hover:bg-[var(--brand-dark)] transition-all">
                Get Started
              </Button>
              <Button className="text-sm px-8 py-3 rounded-xl bg-transparent dark:text-white  border border-[#f3a84f] text-white shadow-none hover:bg-white/10 transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 absolute -bottom-[250px] lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-[#f4f4f4] dark:bg-[#0f131b] border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
            >
              <feature.icon size={18} className=" text-[#f3a84f]   md:w-5 md:h-5" />
              <h3 className="text-sm font-semibold dark:text-white text-[#333333] font-medium">{feature.title}</h3>
              <p className="text-xs md:text-sm dark:text-white  text-[#333333]">{feature.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
