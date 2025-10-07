"use client";

import { Gem, Flame, UsersRound, Leaf } from "lucide-react";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const VALUES: ValueItem[] = [
  {
    icon: <Gem className="h-9 w-9 text-[#f3a84f]" />,
    title: "Integrity",
    text:
      "Advice first—always. We operate with transparency and fiduciary care so recommendations align with your goals, risk tolerance, and family values.",
  },
  {
    icon: <Flame className="h-9 w-9 text-[#f3a84f]" />,
    title: "Client Advocacy",
    text:
      "We own outcomes. From plan design to implementation, we push projects forward and communicate clearly so you can decide with confidence.",
  },
  {
    icon: <UsersRound className="h-9 w-9 text-[#f3a84f]" />,
    title: "Coordination",
    text:
      "Your plan works best when everyone’s aligned. We collaborate with your CPA and attorney to help execute tax-aware, legally sound strategies.",
  },
  {
    icon: <Leaf className="h-9 w-9 text-[#f3a84f]" />,
    title: "Continuous Improvement",
    text:
      "Markets and lives change. We review, measure, and refine—protecting downside, improving income durability, and adjusting for what’s next.",
  },
];

export default function ValuesSection() {
  return (
    <section className="dark:bg-[#192131] bg-white">
      <div className="container mx-auto py-16 lg:px-0 sm:px-2 px-4 border-x-0 border-b-0 text-[#333333]">
        {/* Eyebrow */}
        <p className="mb-3 text-sm tracking-[0.2em]">
          WHAT GUIDES OUR PRACTICE
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl text-[#f3a84f] md:text-5xl font-semibold dark:text-white">
          Our Values
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#555555] dark:text-white/80">
          We combine protection-first planning, disciplined implementation, and
          clear accountability. These values shape every recommendation—from
          Fixed Indexed Annuities and Family Banking to coordinated retirement,
          estate, and post-liquidity strategies.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className="bg-neutral-100/60 dark:bg-[#0f131b] px-6 py-8 cursor-pointer transition-shadow"
              style={{ animation: "fadeUp .6s ease both", animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-4">
                {v.icon}
                <h3 className="text-xl font-semibold text-[#f3a84f] dark:text-[#f3a84f]">
                  {v.title}
                </h3>
              </div>

              <p className="mt-5 text-[17px] leading-8 text-[#555555] dark:text-white/80">
                {v.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
