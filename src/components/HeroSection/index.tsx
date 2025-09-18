
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
    <div className="min-h-screen w-screen bg-gradient-to-br dark:bg-[#1f2937] bg-[#0da7ec26]  text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 b border border-[#0185c7] text-[#1e2939] hover:bg-white/20 px-4 py-2 rounded-full">
            ✨ Next Generation Tools
          </Badge>
          
          <div className="space-y-6 flex items-center justify-center flex-col ">
            <h1 className="text-3xl md:text-6xl text-[#1e2939] font-semibold tracking-tight max-w-3xl">
              Discover minimalism and power in one place
            </h1>
            <p className="text-lg text-[#1e2939]  max-w-2xl">
              Designed with aesthetics and performance in mind. Experience ultra-fast processing, advanced security, and intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button className="text-sm px-8 py-3 rounded-xl bg-[var(--brand)] text-[#1e2939] border border-[#0185c7]  shadow-none hover:bg-[var(--brand-dark)] transition-all">
                Get Started
              </Button>
              <Button className="text-sm px-8 py-3 rounded-xl bg-transparent text-[#1e2939] border border-[#0185c7] shadow-none hover:bg-white/10 transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm bg-[#0185c7] border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
            >
              <feature.icon size={18} className=" md:w-5 md:h-5" />
              <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
              <p className="text-xs md:text-sm text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
