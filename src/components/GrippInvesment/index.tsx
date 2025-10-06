"use client";
import React from "react";
import { cn } from "@/lib/utils";

type Item = {
  id: number;
  title: string;
  description: string[]; // array of lines
};

const items: Item[] = [
  {
    id: 1,
    title: "From Variable (Unprotected) to Indexed (Protected)",
    description: [
      "Capture upside to a cap with protection from market downturns.",
      "Avoid sequence-of-returns risk in retirement.",
      "Accumulation value links to an external index, not invested directly in the stock market.",
      "Optional riders may provide lifetime income guarantees.",
    ],
  },
  {
    id: 2,
    title: "G R I P P",
    description: [
      "Guarantees",
      "Rate of Return (indexed crediting methods)",
      "Indexed Growth",
      "Pension-like Income",
      "Potential Bonuses",
    ],
  },
];

const HairlineBorder = () => (
  <>
    <div className="pointer-events-none absolute -left-[12px] top-[3px] h-px w-[110%] bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="pointer-events-none absolute bottom-[3px] h-px w-[110%] -left-[12px] h-px bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="pointer-events-none absolute h-[110%] inset-y-0 -top-[12px]  left-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="pointer-events-none absolute i h-[110%] inset-y-0 -top-[12px] -right-[2px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
  </>
);

export function GradientCardDemo() {
  return (
    <div className="dark:bg-[#1a2333]">
      <div className="max-w-7xl w-full text-center py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl text-[#f4a950] font-semibold mb-2">
            Putting a GRIPP on Investments
          </h1>
          <p className="text-[20px] mt-4 text-[#555555] dark:text-white">
            Fixed Indexed Annuity concepts summarized.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row  items-stretch justify-center">
          {items.map((content) => (
            <div
              key={content.id}
              className={cn(
                "relative bg-white dark:bg-[#0f131b] rounded-md p-8 text-left",
                "w-full sm:w-[48%] md:w-[45%] lg:w-[400px] max-w-[400px] flex-1"
              )}
            >
              <HairlineBorder />
              <h3 className="text-lg font-semibold text-[#f4a950] mb-3">
                {content.title}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#555555] dark:text-white">
                {content.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
