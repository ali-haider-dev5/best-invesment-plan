// app/components/Faq.tsx
"use client";
import React, { useId, useState } from "react";
import BorderButton from "@/components/BorderButton";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

const DEFAULT_ITEMS: FaqItem[] = [
  {
    question: "What does Mazco LLC specialize in?",
    answer:
      "Tax-advantaged wealth strategies that prioritize downside protection and lifetime income: Fixed Indexed Annuities (FIAs), Infinite/Family Banking structures, and comprehensive planning for retirement, legacy, and business owners.",
  },
  {
    question: "How do Fixed Indexed Annuities fit into a portfolio?",
    answer:
      "FIAs credit interest linked to an external index (subject to caps/participation) while providing principal protection from market losses. They can complement equities by smoothing sequence-of-returns risk and offering optional lifetime income riders.",
  },
  {
    question: "What is Infinite (Family) Banking and when is it appropriate?",
    answer:
      "It’s a cash-value life insurance strategy designed for liquidity, control, and multi-generational planning. Properly structured, it can create a private reserve to fund opportunities, manage cash flow, and enhance estate outcomes—often attractive to entrepreneurs and families with variable income.",
  },
  {
    question: "Do you work with business owners preparing for an exit?",
    answer:
      "Yes. We coordinate pre- and post-liquidity planning—income replacement, tax-aware allocation, asset protection, and legacy/estate coordination—so more of your proceeds support long-term goals.",
  },
  {
    question: "How does Mazco differ from large annuity providers and RIAs?",
    answer:
      "We’re product-agnostic and planning-first. We evaluate carriers and crediting methods across the market to align with your objectives (income, accumulation, or legacy), then integrate solutions into an overall plan rather than selling a single product.",
  },
  {
    question: "Do you provide tax or legal advice?",
    answer:
      "We do not provide tax or legal advice. We’ll collaborate with your CPA/attorney and can introduce vetted professionals as needed to implement strategies correctly.",
  },
  {
    question: "What type of client is a good fit for Mazco?",
    answer:
      "Affluent individuals and business owners seeking downside protection, pension-like income options, and tax-efficient accumulation/transfer strategies—especially if approaching retirement, planning an exit, or focused on multi-generational wealth.",
  },
  {
    question: "How quickly can I get recommendations?",
    answer:
      "After a discovery call and data review, initial strategy outlines are typically provided within 1–2 weeks, depending on case complexity and coordination with outside advisors.",
  },
];

function PlusToX({ open }: { open: boolean }) {
  return (
    <span
      className="relative mr-4 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-[#f4a950] transition-all duration-300"
      aria-hidden="true"
    >
      <span className={`absolute h-[2px] w-5 bg-[#f4a950] transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
      <span className={`absolute h-[2px] w-5 bg-[#f4a950] transition-transform duration-300 ${open ? "-rotate-45" : "rotate-90"}`} />
    </span>
  );
}

function FaqRow({
  item, index, open, onToggle, baseId,
}: {
  item: FaqItem; index: number; open: boolean; onToggle: (i: number) => void; baseId: string;
}) {
  const headingId = `${baseId}-q-${index}`;
  const panelId = `${baseId}-a-${index}`;

  return (
    <div className="mb-4 relative">
      {/* gradient hairlines */}
      <div className="pointer-events-none absolute left-0 top-2 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="pointer-events-none absolute left-0 bottom-2 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="pointer-events-none absolute left-2 top-0 h-full w-px bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
      <div className="pointer-events-none absolute right-2 top-0 h-full w-px bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />

      <div className="overflow-hidden pt-6 pb-6 px-6">
        <h3 id={headingId} className="sr-only">{item.question}</h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-2 text-left focus:outline-none hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-[#f4a950] focus-visible:ring-offset-2 rounded-md"
          onClick={() => onToggle(index)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggle(index); } }}
        >
          <PlusToX open={open} />
          <span className="text-base lg:text-lg font-semibold leading-snug text-[#f4a950]">{item.question}</span>
        </button>

        <div id={panelId} role="region" aria-labelledby={headingId} className={`${open ? "mt-4 pl-14" : "hidden"}`}>
          <div className="text-base text-[#555555] dark:text-white leading-relaxed">
            {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq({ items = DEFAULT_ITEMS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="bg-[#f4f4f4] dark:bg-[#1a2334] py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left panel */}
          <div className="lg:w-1/4 flex flex-col justify-start">
            <p className="text-[#555555] dark:text-white font-medium text-sm uppercase tracking-wider mb-4">
              About Mazco LLC
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f4a950] mb-6">FAQs</h2>
            <p className="text-[#555555] dark:text-white text-lg leading-relaxed mb-8">
              Answers to common questions about our tax-advantaged wealth strategies,
              downside protection, and planning for business owners and families.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-400 my-6" />

            <div className="space-y-4 text-lg">
              <div>
                <span className="font-semibold text-[#f4a950]">General:</span>
                <a href="mailto:info@mazcollc.com" className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors">
                  info@mazcollc.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#f4a950]">Consultations:</span>
                <a href="mailto:advisory@mazcollc.com" className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors">
                  advisory@mazcollc.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-[#f4a950]">Disclosures:</span>
                <a href="/disclosures" className="ml-2 text-[#555555] dark:text-white hover:text-[#f4a950] transition-colors">
                  View policies &amp; disclosures
                </a>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:w-3/4">
            <div className="space-y-6">
              {items.map((item, i) => (
                <FaqRow
                  key={i}
                  item={item}
                  index={i}
                  open={openIndex === i}
                  onToggle={toggle}
                  baseId={baseId}
                />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#f4a950] mb-2">Still have questions?</h3>
              <p className="text-[#555555] dark:text-white mb-4">
                Let’s review your goals and determine whether FIAs, Family Banking, or comprehensive planning fits best.
              </p>
              <BorderButton text="Talk to an Advisor" variant="filled" />
              <p className="mt-3 text-xs text-[#6b7280] dark:text-gray-400">
                Mazco LLC does not provide tax or legal advice. Please consult your tax or legal advisor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
