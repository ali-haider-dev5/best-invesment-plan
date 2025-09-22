import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/GrippInvesment/card";
import { Cpu, ShieldCheck, Layers, Zap } from "lucide-react";

type Feature = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  { icon: Cpu,         title: "Performance",    description: "Ultra-fast data processing in every situation." },
  { icon: ShieldCheck, title: "Security",       description: "Advanced protection for complete peace of mind and  Responsiveness" },
  { icon: Layers,      title: "Modularity",     description: "Easy integration with existing architecture and Mind" },
  { icon: Zap,         title: "Responsiveness", description: "Instant response to every command and performance" },
];

const HeroSection = () => {
  return (
    <div
      className="relative min-h-[850px] w-screen bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center p-8"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/80 dark:bg-[#0f131b]/60 pointer-events-none" />

      <div className="w-full relative max-w-6xl space-y-12 z-10">
        {/* Headline + CTA */}
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge
            variant="secondary"
            className="backdrop-blur-sm bg-white/10 dark:text-white border border-[#f3a84f] text-white hover:bg-white/20 px-4 py-2 rounded-full"
          >
            ✨ Next Generation Tools
          </Badge>

          <div className="space-y-6 flex items-center justify-center flex-col">
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
              Discover minimalism and
            </h1>
            <h1 className="text-3xl md:text-6xl text-[#f3a84f] font-extrabold tracking-tight max-w-3xl">
              power in one place
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Designed with aesthetics and performance in mind. Experience
              ultra-fast processing, advanced security, and intuitive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button className="text-sm px-8 py-3 rounded-xl bg-[var(--brand)] border border-[#f3a84f] text-white shadow-none hover:bg-[var(--brand-dark)] transition-all">
                Get Started
              </Button>
              <Button className="text-sm px-8 py-3 rounded-xl bg-transparent border border-[#f3a84f] text-white shadow-none hover:bg-white/10 transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                variant="gradient"
                className="flex flex-col items-start justify-start   rounded-xl inner-none"
              >
                <feature.icon size={24} className="text-[#f3a84f] mb-2" />
                <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                <p className="text-xs md:text-sm text-white/90">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
