"use client";
import React from "react";
import {
  ArrowDownLeft,
  CircleFadingPlus,
  Thermometer,
  BadgeAlert,
  BaggageClaim,
  BookmarkCheck,
  Medal,
} from "lucide-react";
import { Card } from "@/components/GrippInvesment/card";
import Image from "next/image";
const testData: TestItem[] = [
  {
    icon: <CircleFadingPlus />,
    title: "APC",
    description:
      "APC testing measures the total number of aerobic bacteria present in a food sample, providing insights into its overall microbial load and freshness.",
  },
  {
    icon: <BaggageClaim />,
    title: "Y & M",
    description:
      "Y & M analysis detects the presence and levels of yeast and mold in food products, ensuring they meet safety standards and remain free from spoilage.",
  },
  {
    icon: <BookmarkCheck />,
    title: "Salmonella",
    description:
      "Salmonella testing identifies the presence of this harmful bacterium in food, crucial for preventing foodborne illness outbreaks and ensuring consumer safety.",
  },
  {
    icon: <Medal />,
    title: "Staphylococcus",
    description:
      "Staphylococcus is a genus of Gram positive bacteria commonly found on the skin and mucous membranes of humans and animals. These bacteria are part of the normal flora, meaning they naturally exist in and on our bodies.",
  },
  {
    icon: <Thermometer />,
    title: "Water Activity",
    description:
      "Water activity testing determines the amount of free water available for microbial growth, crucial for food preservation and safety.",
  },
  {
    icon: <Medal />, 
    title: "Moisture Content",
    description:
      "Moisture content analysis determines the amount of water present in a food sample, essential for maintaining product texture, stability, and safety.",
  },
];
interface TestItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface TestCardProps {
  item: TestItem;
}

const TestCard = ({ item }: TestCardProps) => (
  <div className="relative">
    <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
    <div className="p-8 bg-white dark:bg-[#0f131b]  flex flex-col h-full ">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center text-gray-700">
          <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
            {item.icon}
          </div>
          <h3 className="text-base font-semibold text-[#f5aa51] dark:text-[#f5aa51]">
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
  const topCards = testData.slice(0, 2);
  const middleCards = testData.slice(2, 6);

  return (
    <div
      className=" bg-right bg-contain dark:bg-[#1a2334] bg-no-repeat px-4 p-4 sm:p-8 lg:p-12 font-inter relative"
      style={{ backgroundImage: "url('/service-transparent.png')" }}
    >
      <div className="container mx-auto">
        <div>
          <div className="flex  items-center justify-center mb-12 gap-4">
            <ArrowDownLeft className="h-12 w-12 text-[#f5aa51]" />
            <h2 className="text-5xl sm:text-6xl text-[#f5aa51] font-extrabold  flex items-center justify-center">
              What You Can Test
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            {topCards.map((item) => (
              <TestCard key={item.title} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {middleCards.map((item) => (
              <TestCard key={item.title} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="relative   bg-white dark:bg-[#0f131b] flex flex-col h-full md:col-start-3 md:col-span-1">
              <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center text-gray-700">
                    <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
                      <Thermometer />
                    </div>
                    <h3 className="text-base font-semibold text-[#f5aa51] dark:text-[#f5aa51]">
                      pH and acidity
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#555555] dark:text-white leading-relaxed mt-2 flex-grow">
                  pH and acidity testing assesses the acidity level of food
                  products, vital for preserving taste, texture, and inhibiting
                  bacterial growth.
                </p>
              </div>
            </div>

            <div className="relative   bg-white dark:bg-[#0f131b] flex flex-col h-full">
              <div className="absolute left-0 -top-[1px] h-px w-full bg-gradient-to-l from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="absolute -bottom-[1px] left-0 h-px w-full bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -left-[px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="absolute inset-y-0 -top-[5px] -bottom-[5px] -right-[1px] w-px bg-gradient-to-t from-zinc-200 via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500" />
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center text-gray-700">
                    <div className="text-[#f5aa51] w-10 h-10 rounded-lg bg-[#555555]/10 dark:bg-[#f5aa51] flex items-center justify-center mr-3 dark:text-white">
                      <BadgeAlert />
                    </div>
                    <h3 className="text-base font-semibold text-[#f5aa51] dark:text-[#f5aa51]">
                      Coliform / E. coli
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#555555] dark:text-white leading-relaxed mt-2 flex-grow">
                  Coliform and E. coli testing identifies the presence of fecal
                  contamination in food products, ensuring they meet hygiene
                  standards and are safe for consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
