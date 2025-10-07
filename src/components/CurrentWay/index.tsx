"use client";
import React from "react";
import Image from "next/image";

// SVG Icons for the features
const IconPowerfulAutomation = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-[#f3a84f]"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
  </svg>
);

const IconUnlimitedScale = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-[#f3a84f]"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
  </svg>
);

const IconConsistentCX = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-[#f3a84f]"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
  </svg>
);

const IconRichData = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-[#f3a84f]"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
  </svg>
);

const IconAgileExcellence = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-[#f3a84f]"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
  </svg>
);

const IconSecureReliability = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-[#f3a84f]"
  >
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
  </svg>
);

// Updated features data with icon components
const featuresData = [
  {
    id: 1,
    title: "$182,100",
    description:
      "Average retirement balance for ages 60–69.",
    icon: <IconPowerfulAutomation />,
  },
  {
    id: 2,
    title: "40%",
    description:
      "Estimated divorces linked to financial problems.",
    icon: <IconUnlimitedScale />,
  },
  {
    id: 3,
    title: "60%",
    description:
      "Will be diagnosed with an illness; financial stress is a leading factor.",
    icon: <IconConsistentCX />,
  },
  {
    id: 4,
    title: "63%",
    description:
      "Living paycheck to paycheck.",
    icon: <IconRichData />,
  },
  {
    id: 5,
    title: "67%",
    description:
      "Have never made a financial plan.",
    icon: <IconAgileExcellence />,
  },
  {
    id: 6,
    title: "68%",
    description:
      "Say they’re not on track to retire.",
    icon: <IconSecureReliability />,
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="bg-[#f4f4f4] dark:bg-[#0f131b] text-white relative font-sans
             py-16 lg:py-0 lg:min-h-[720px]"
    >
      <div className="lg:px-0 sm:px-2 px-4 container mx-auto flex  justify-between h-full gap-10 lg:gap-12">
        <div className="flex  flex-col justify-center pt-20 pb-20 ">
          <h2 className="text-4xl lg:text-5xl text-[#f3a84f] font-bold mb-8 leading-tight">
            The Current Way Isn’t Working
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {featuresData.map((feature) => (
              <div key={feature.id}>
                {/* <div className="mb-2 text-[#f3a84f]">{feature.icon}</div> */}
                <h3 className="text-xl text-[#f3a84f] font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#555555] dark:text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: fills the rest (full height, full width) */}
        <div
          className="relative hidden lg:block w-full h-[320px] lg:h-auto lg:min-h-[720px] pr-[calc(50vw-635px)]"
          style={{
            backgroundImage: "url('/texture-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src="/plans.jpg"
            alt="A person using a phone"
            width={480}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
