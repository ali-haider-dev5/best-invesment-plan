"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
];

function PlusToX({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative mr-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 ring-1 ring-[#0da5ea]"
    >
      <motion.span
        className="absolute h-[2px] w-5 bg-sky-700"
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute h-[2px] w-5 bg-sky-700"
        animate={{ rotate: open ? -45 : 90 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );
}

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
  const contentId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="mb-4 rounded-md border border-[#0da5ea] dark:bg-[#1e2838] bg-[#f0f9ff] p-4 dark:border-neutral-800">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={contentId}
        className="group flex w-full items-center gap-2 py-3 text-left focus:outline-none"
        onClick={() => onToggle(index)}
      >
        <PlusToX open={open} />
        <span className="text-lg font-semibold leading-snug text-gray-900 dark:text-gray-100">
          {item.question}
        </span>
      </button>

      {/* Unmount on close, keep smooth animation with Framer Motion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }} // prevents layout jump
          >
            <motion.div
              className="pb-4 pl-14 text-base text-gray-700 dark:text-gray-300"
              initial={{ y: -4 }}
              animate={{ y: 0 }}
              exit={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {typeof item.answer === "string" ? (
                <p className="max-w-3xl leading-relaxed">{item.answer}</p>
              ) : (
                item.answer
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq({ items = DEFAULT_ITEMS }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className='bg-[#0da5ea2b py-12'>
    <div className="mx-auto  w-full max-w-7xl">
      <h1 className="text-center mb-16 text-4xl font-semibold sm:text-6xl">FAQs</h1>
      <section className=" p-4 dark:border-neutral-800 dark:bg-neutral-950">
        {items.map((item, i) => (
          <FaqRow
            key={i}
            item={item}
            index={i}
            open={openIndex === i}
            onToggle={toggle}
          />
        ))}
      </section>
    </div>
    </div>
  );
}
