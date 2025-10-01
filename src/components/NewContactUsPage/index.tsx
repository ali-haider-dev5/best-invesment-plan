"use client";
import { useState } from "react";
import Image from "next/image";
import BorderButton from "@/components/BorderButton";

export default function Home() {
  const [assets, setAssets] = useState("");
  return (
    <main className="bg-[#f9f8f6] -mb-[100px] grid dark:bg-[#1a2335] py-16 px-4">
      <section className="container mx-auto flex flex-wrap justify-center gap-6 py-10">
        <Image
          src="/contactForm/logo-1.png"
          alt="Barrons Advisor"
          width={120}
          height={60}
        />
        <Image
          src="/contactForm/logo-2.png"
          alt="Top Firms"
          width={140}
          height={60}
        />
        <Image
          src="/contactForm/logo-3.png"
          alt="Best RIAs"
          width={140}
          height={60}
        />
        <Image
          src="/contactForm/logo-4.png"
          alt="America’s Top RIAs"
          width={140}
          height={60}
        />
        <Image
          src="/contactForm/logo-5.webp"
          alt="Barrons 2023"
          width={120}
          height={60}
        />
        <hr className="border-gray-200 w-full max-w-5xl" />
      </section>

      {/* Heading */}
      <h1 className="text-2xl text-[#f5aa51] font-bold dark:text-white md:text-3xl  text-center mt-10 mb-12 px-4">
        Your Introduction to a Trusted Financial Partner Awaits
      </h1>

      {/* Main Content */}
      <section className="bg-white dark:bg-[#0b111a] max-w-4xl w-full mx-auto rounded-md  flex flex-col md:flex-row overflow-hidden border border-[#f4a950]">
        {/* Left block */}
        <div className="md:w-1/2 p-8 pb-0  flex flex-col justify-between border border-r border-r-[#3333333">
          <div>
            <h2 className="text-xl text-[#f5aa51] font-semibold mb-4">
              Our Concierge Program offers a simple, personalized approach to
              finding your ideal financial advisor.
            </h2>
            <p className="text-[#555555] text-sm dark:text-white">
              Schedule your complimentary 30-minute discovery call so we can
              understand your unique financial goals and match you with the
              advisor well suited to your needs.
            </p>
          </div>
          <div className="mt-8 flex items-center relative">
            <Image
              src="/ceo-contact-form.webp"
              alt="Doug Bonqusit"
              width={300}
              height={300}
              className="rounded-md -ml-[35px]"
            />
            <div className="ml-4 absolute px-4 border-0 bottom-[28px] border-l-[8px] border-l-[#f4a950] bg-black">
              <p className="font-semibold tex-sm text-white">Doug Bonquist</p>
              <p className="text-xs  text-[#f3a84f]">Partner</p>
            </div>
          </div>
        </div>

        {/* Right block: Form */}
        <div className="md:w-1/2 p-8">
          <p className="text-sm mb-3 flex items-center gap-2 font-medium border-b border-b-[#ccc] pb-2 text-[#333333] dark:text-white">
            CALL US TO SCHEDULE:
            <a
              href="tel:2122021810"
              className="text-[#f3a84f] text-lg hover:underline"
            >
              (212) 202-1810
            </a>
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                First Name
              </label>
              <input type="text" placeholder="First Name" className="input" />
            </div>
            <div>
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                Last Name
              </label>
              <input type="text" placeholder="Last Name" className="input" />
            </div>
            <div>
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input md:col-span-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                className="input md:col-span-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="ZIP Code"
                className="input md:col-span-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                Investable Assets
              </label>
              <select
                name="investableAssets"
                defaultValue=""
                value={assets}
                className={[
                  "input appearance-none pr-10",
                  assets === "" ? "text-gray-400" : "text-gray-900", // placeholder-like color
                  "[&>option]:text-gray-900", // ensure dropdown options are normal color
                ].join(" ")}
                aria-label="Investable Assets"
                required
              >
                <option value="" disabled>
                  $--
                </option>
                <option value="1m">$1M</option>
                <option value="1-3m">$1M - $3M</option>
                <option value="3-10m">$3M - $10M</option>
                <option value="10-50m">$10M - $50M</option>
                <option value="50m+">$50M+</option>
                <option value="pre-liquidity">Pre-liquidity</option>
              </select>
              {/* dropdown arrow */}
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                ▾
              </span>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="text-xs font-medium text-[#555555] dark:text-white">
                Message (optional)
              </label>
              <textarea
                className="input h-28 w-full resize-none"
                placeholder="Message (optional)"
              />
            </div>

            <div className="col-span-1 md:col-span-1 ">
              <BorderButton
                text=" SCHEDULE NOW"
                variant="filled"
                onClick={() => alert("Filled Clicked!")}
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
