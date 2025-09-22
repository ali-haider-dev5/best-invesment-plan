'use client'
import React from 'react';

// SVG Icons for the features
const IconPowerfulAutomation = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f3a84f]">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
    </svg>
);

const IconUnlimitedScale = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f3a84f]">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
    </svg>
);

const IconConsistentCX = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f3a84f]">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
    </svg>
);

const IconRichData = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f3a84f]">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
    </svg>
);

const IconAgileExcellence = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f3a84f]">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
    </svg>
);

const IconSecureReliability = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#f3a84f]">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8h2v2h-2v-2zm-2-2h6v-2h-6v2zm4 4h-4v2h4v-2zm-6 2h10v-2h-10v2z" />
    </svg>
);

// Updated features data with icon components
const featuresData = [
    {
        id: 1,
        title: "Powerful automation",
        description: "Fully automate your most challenging support conversations to reduce costs, increase capacity, and deliver superior on-brand experiences to your customers.",
        icon: <IconPowerfulAutomation />,
    },
    {
        id: 2,
        title: "Unlimited scale",
        description: "Deploy industry-leading AI to handle enterprise-scale conversation volumes and engage customers instantly – in 45 languages and counting.",
        icon: <IconUnlimitedScale />,
    },
    {
        id: 3,
        title: "Consistent CX",
        description: "Build loyalty, drive revenue, and stand out from the crowd by delivering consistent, connected conversational experiences across voice, chat, SMS, and beyond.",
        icon: <IconConsistentCX />,
    },
    {
        id: 4,
        title: "Rich data",
        description: "Use AI to analyze every call as it happens and surface actionable data for operational improvements and discovering new opportunities.",
        icon: <IconRichData />,
    },
    {
        id: 5,
        title: "Agile excellence",
        description: "Adapt and refine your CX strategy faster than ever before with a user-friendly platform for creating rich, responsive conversational journeys.",
        icon: <IconAgileExcellence />,
    },
    {
        id: 6,
        title: "Secure reliability",
        description: "Automate with confidence thanks to the most advanced AI guardrails and data security protections to ensure that your agents always perform as expected.",
        icon: <IconSecureReliability />,
    },
];

const FeaturesSection = () => {
    return (
        <section
            id="features"
            className="bg-[#f4f4f4] dark:bg-[#1a2334] text-white py-20 relative font-sans"
        >
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
                {/* Left Side: Text and Features */}
                <div className="w-full lg:w-1/2 flex flex-col px-4">
                    <h2 className="text-4xl lg:text-5xl text-[#f3a84f] font-bold mb-12 text-left leading-tight">
                        Earn trust from the first word.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
                        {featuresData.map((feature) => (
                            <div key={feature.id} className="features-item">
                                <div className="mb-2 text-[#f3a84f]">{feature.icon}</div>
                                <h3 className="text-xl text-[#f3a84f] font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#555555] dark:text-white font-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 lg:pl-8">
                    <img
                        src="/path/to/your/image_236752.jpg"
                        alt="A person using a phone"
                        className="w-full h-auto object-cover max-w-2xl rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;