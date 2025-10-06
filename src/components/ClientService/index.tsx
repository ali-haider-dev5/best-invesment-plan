"use client";
import React from "react";
import {
  ArrowDownLeft,
  ArrowRight,
  CircleFadingPlus,
  Thermometer,
  BadgeAlert,
  BaggageClaim,
  BookmarkCheck,
  Medal,
  ScrollText,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BorderButton from '@/components/BorderButton'

interface TestItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface TestCardProps {
  item: TestItem;
}

const testData: TestItem[] = [
  {
    icon: <CircleFadingPlus />,
    title: "Tax-Advantaged Wealth Accumulation Strategies",
    description: "Design growth with a focus on tax efficiency and risk controls.",
  },
  {
    icon: <BaggageClaim />,
    title: "Asset Protection & Qualified Rollovers",
    description: "401(k)/IRA rollovers into protected, indexed strategies when appropriate.",
  },
  {
    icon: <BookmarkCheck />,
    title: "College Education Funds",
    description: "Plan ahead with tax-aware accumulation for education costs.",
  },
  {
    icon: <Medal />,
    title: "Debt Management & Consolidation",
    description: "Clean up cash flow to free up dollars for your future.",
  },
  {
    icon: <Thermometer />,
    title: "Infinite Banking & Family Banks",
    description: "Create liquidity and control using properly structured policies.",
  },
  {
    icon: <Medal />,
    title: "Life Insurance, Living Benefits, & Final Expense",
    description: "Life Insurance, Living Benefits, & Final Expense",
  },
    {
    icon: <Medal />,
    title: "Estate & Legacy Planning",
    description: "Coordinate with legal and tax pros to pass more to heirs.",
  }
];

const HairlineChrome = () => (
  <>
    <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
  </>
);

const TestCard = ({ item }: TestCardProps) => (
  <div className="relative">
    <HairlineChrome />
    <div className="p-8 bg-white dark:bg-[#0f131b] flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center text-gray-700">
          <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
            {item.icon}
          </div>
          <h3 className="text-base font-semibold text-[#f5aa51]">
            {item.title}
          </h3>
        </div>
      </div>
      <p className="text-sm text-[#555555] dark:text-white leading-relaxed mt-2 flex-grow">
        {item.description}
      </p>
    </div>
  </div>
);

export default function App() {
  const topCards = testData.slice(0, 3);
  const middleCards = testData.slice(3, 10);

  return (
    <div
      className="bg-right bg-contain dark:bg-[#1a2334] bg-no-repeat px-4 p-4 sm:p-8 lg:p-12 font-inter relative"
      style={{ backgroundImage: "url('/service-transparent.png')" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex gap-4">
            <ArrowDownLeft className="h-12 w-12 text-[#f5aa51]" />
            <h2 className="text-5xl sm:text-6xl text-[#f5aa51] font-extrabold">
              Client Service Menu
            </h2>
          </div>
          <p>We are here to provide value and make an impact</p>
        </div>

        {/* Top row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {topCards.map((item) => (
            <TestCard key={item.title} item={item} />
          ))}
        </div>

        {/* Middle row: 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {middleCards.map((item) => (
            <TestCard key={item.title} item={item} />
          ))}
        </div>

        {/* Bottom row: 2 cards aligned to the right (cols 3-4 on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Estate & Legacy Planning */}
          <div className="relative bg-white dark:bg-[#0f131b] flex flex-col h-full md:col-start-2">
            <HairlineChrome />
            <div className="p-8">
              <div className="flex items-center text-gray-700 mb-4">
                <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
                  <ScrollText />
                </div>
                <h3 className="text-base font-semibold text-[#f5aa51]">
                  Coordinate with legal and tax pros to pass more to heirs.
                </h3>
              </div>
              <p className="text-sm text-[#555555] dark:text-white leading-relaxed">
                Participate in market gains up to a cap with floor protection.
              </p>
            </div>
          </div>

          {/* Indexed Growth */}
          <div className="relative bg-white dark:bg-[#0f131b] flex flex-col h-full">
            <HairlineChrome />
            <div className="p-8">
              <div className="flex items-center text-gray-700 mb-4">
                <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
                  <TrendingUp />
                </div>
                <h3 className="text-base font-semibold text-[#f5aa51]">
                  Mortgage Protection (Term)
                </h3>
              </div>
              <p className="text-sm text-[#555555] dark:text-white leading-relaxed">
                Safeguard the home with efficient, affordable coverage.
              </p>
            </div>
          </div>
          <div className="relative bg-white dark:bg-[#0f131b] flex flex-col h-full">
            <HairlineChrome />
            <div className="p-8">
              <div className="flex items-center text-gray-700 mb-4">
                <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
                  <TrendingUp />
                </div>
                <h3 className="text-base font-semibold text-[#f5aa51]">
                  Mortgage Protection (Term)
                </h3>
              </div>
              <p className="text-sm text-[#555555] dark:text-white leading-relaxed">
                Safeguard the home with efficient, affordable coverage.
              </p>
            </div>
          </div>
        </div>
        

        {/* CTA to Services page */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            aria-label="View all services"
          >
             <BorderButton text="Explore Services"       onClick={() => console.log("clicked")} />
          </Link>
        </div>
      </div>
    </div>
  );
}
