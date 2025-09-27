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
    title: "Character",
    text:
      "Our actions are rooted in respect and honesty. We make time for others and constantly seek what is best for the client.",
  },
  {
    icon: <Flame className="h-9 w-9 text-[#f3a84f]" />,
    title: "Passion",
    text:
      "We're driven to create results with a can-do philosophy that inspires those around us. Whatever task we start, we see it through until it's completed.",
  },
  {
    icon: <UsersRound className="h-9 w-9 text-[#f3a84f]" />,
    title: "Teamwork",
    text:
      "We move quickly with purpose. Our teams continually strive to achieve excellency and work together to better each other.",
  },
  {
    icon: <Leaf className="h-9 w-9 text-[#f3a84f]" />,
    title: "Growth",
    text:
      "We foster an environment that encourages growth—professionally and personally. We believe in hard work, self-improvement, and leading by example.",
  },
];

export default function ValuesSection() {
  return (
    <section className="dark:bg-[#192131] bg-white">
      <div className="container  mx-auto py-16 px-4  border-x-0 border-b-0 ">
        {/* Eyebrow */}
        <p className="mb-3 text-sm tracking-[0.2em] text-[#f3a84f]">
          WHAT DRIVES AND DEFINES US
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#333333] dark:text-white">
          Our Values
        </h2>

        {/* Intro */}
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#3d3d3d] dark:text-white/80">
          No matter what stage of your financial journey, you’ll be partnering with
          professionals who embody our core values. These values define our work and
          empower our decision-making to provide an elevated client experience and culture
          unlike anywhere else.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className=" bg-neutral-100/60 dark:bg-[#0f131b] px-6 py-8
                          cursor-pointer transition-shadow "
              style={{ animation: "fadeUp .6s ease both", animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Icon in a subtle ring to match the reference */}
                {/* <span className="inline-grid place-items-center h-16 w-16 rounded-full ring-1 ring-[#f3a84f]/40 bg-white dark:bg-transparent"> */}
                  {v.icon}
                {/* </span> */}
                <h3 className="text-xl font-semibold text-[#333333] dark:text-white">
                  {v.title}
                </h3>
              </div>

              <p className="mt-5 text-[17px] leading-8 text-[#2f2f2f] dark:text-white/80">
                {v.text}
              </p>
            </article>
          ))}
        </div>
      </div>
      </section>
  );
}
