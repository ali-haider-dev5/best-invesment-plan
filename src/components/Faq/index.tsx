"use client";
import React, { useState } from "react";
import BorderButton from "@/components/BorderButton";
export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question:
      "What kinds of agencies use User Interviews for participant recruitment?",
    answer:
      "Research consultancies, market research agencies, and marketing firms rely on our Recruit panel to source diverse participants quickly without sacrificing quality.",
  },
  {
    question:
      "What is the best participant recruitment tool for research agencies?",
    answer:
      "A platform with advanced screeners, feasibility checks, and API automation—so you can target, schedule, and manage studies at scale.",
  },
  {
    question: "Do you support B2B and accessibility studies?",
    answer:
      "Yes. You can reach niche B2B roles and accessibility participants, with flexible targeting and compliance-friendly workflows.",
  },
  {
    question: "How quickly can I recruit participants?",
    answer:
      "Most studies are filled within 24-48 hours, depending on your targeting criteria and study requirements.",
  },
  {
    question: "What quality assurance measures do you have?",
    answer:
      "We use multi-layered screening, behavioral analysis, and continuous monitoring to ensure high-quality participants for your research.",
  },
  {
    question: "Do you offer international recruitment?",
    answer:
      "Yes, we have participants in over 40 countries and can help you recruit globally for your research studies.",
  },
];

// Plus to X animation component
function PlusToX({ open }: { open: boolean }) {
  return (
    <span className="relative mr-4 inline-flex min-w-9 h-9 w-9 items-center justify-center rounded-full ring-1 ring-[#f4a950] transition-all duration-300">
      <span
        className={`absolute h-[2px] w-5 bg-[#f4a950] transition-transform duration-300 ${
          open ? "rotate-45" : ""
        }`}
      />
      <span
        className={`absolute h-[2px] w-5 bg-[#f4a950] transition-transform duration-300 ${
          open ? "-rotate-45" : "rotate-90"
        }`}
      />
    </span>
  );
}

// Simple FAQ Row Component with Gradient Borders
function FaqRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: (i: number) => void;
}) {
  return (
    <div className="mb-4 relative">
      {/* Gradient Border Lines for each FAQ item */}
      <div className="absolute left-0 top-2 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute left-0 bottom-2 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute left-2 top-0 w-px h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute right-2 top-0 w-px h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />

      <div className="overflow-hidden pt-6 pb-6 px-6">
        <button
          type="button"
          className="group flex w-full items-center gap-2 text-left focus:outline-none hover:opacity-80 transition-opacity"
          onClick={() => onToggle(index)}
        >
          <PlusToX open={open} />
          <span className="text-base lg:text-lg font-semibold leading-snug text-[#f4a950]">
            {item.question}
          </span>
        </button>

        {open && (
          <div className="pt-4 pl-14">
            <div className="text-base text-[#555555] dark:text-white leading-relaxed">
              {typeof item.answer === "string" ? (
                <p>{item.answer}</p>
              ) : (
                item.answer
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Gradient Border Container Component
const GradientBorderContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Gradient Border Lines - Vertical lines extend beyond horizontal */}
      <div className="absolute left-0 top-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute left-0 bottom-8 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />

      {/* Content with proper spacing for border extensions */}
      <div className="px-8 pt-12 pb-12">{children}</div>
    </div>
  );
};

export default function Faq({ items = DEFAULT_ITEMS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="bg-[#f4f4f4] dark:bg-[#1a2334] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Content (25-30%) */}
          <div className="lg:w-1/4 flex flex-col justify-start">
            <p className="text-[#555555] dark:text-white font-medium text-sm uppercase tracking-wider mb-4">
              Help Center
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f4a950] mb-6">
              FAQs
            </h1>
            <p className="text-[#555555] dark:text-white text-lg leading-relaxed mb-8">
              Find answers to the most commonly asked questions about our
              platform and services.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400 my-6"></div>

            <div className="space-y-4 text-lg">
              <div>
                <span className="font-semibold text-[#f4a950]">Support:</span>
                <a
                  href="mailto:support@company.com"
                  className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors"
                >
                  support@company.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#f4a950]">Sales:</span>
                <a
                  href="mailto:sales@company.com"
                  className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors"
                >
                  sales@company.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#f4a950]">
                  Documentation:
                </span>
                <a
                  href="#"
                  className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors"
                >
                  View Guides
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - FAQs (70-75%) */}
          <div className="lg:w-3/4">
            <div className="space-y-6">
              {items.map((item, i) => (
                <FaqRow
                  key={i}
                  item={item}
                  index={i}
                  open={openIndex === i}
                  onToggle={toggle}
                />
              ))}
            </div>

            {/* Still have questions section */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#f4a950] mb-2">
                Still have questions?
              </h3>
              <p className="text-[#555555] dark:text-white mb-4">
                Cant find the answer you are looking for? Our support team is
                here to help.
              </p>
              <BorderButton
                text="Contact Support"
                variant="filled"
                onClick={() => alert("Filled Clicked!")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
