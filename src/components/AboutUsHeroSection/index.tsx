// app/components/OurStory.tsx
"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <div className="bg-white dark:bg-[#1a2333f0] px-4">
      <div className="w-full container mx-auto py-32">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          {/* Left column */}
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f3a84f]">
                Our Story
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#333333] dark:text-white">
                Mazco LLC was founded to solve a problem we saw again and again:
                families and business owners were taking more market risk than
                necessary to reach their goals. We built a planning process that
                prioritizes <em>protection first</em>—then pursues growth in a
                disciplined, tax-aware way.
              </p>

              <p className="mt-8 text-base leading-7 text-[#555555] dark:text-white">
                Led by <strong>Alain Mazaira</strong>, our team coordinates
                Fixed Indexed Annuities for downside protection and pension-like
                income, Infinite/Family Banking for liquidity and control, and
                comprehensive wealth strategies for retirement, legacy, and
                post-liquidity life. We work collaboratively with your CPA and
                attorney so more of what you’ve built supports what matters most.
              </p>
            </div>

            {/* Image collage A */}
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Image
                width={400}
                height={500}
                src="/about-us-1.jpg"
                alt="Client conversation in our office"
                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <Image
                  width={400}
                  height={400}
                  src="/about-us-2.jpg"
                  alt="Planning session—building a retirement income map"
                  className="aspect-[1.1] rounded-lg object-cover"
                />
                <Image
                  width={400}
                  height={500}
                  src="/about-us-3.jpg"
                  alt="Reviewing legacy and estate coordination details"
                  className="aspect-[0.7] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:pt-25">
              {/* Image collage B */}
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <Image
                  width={400}
                  height={500}
                  src="/about-us-4.jpg"
                  alt="Values wall—clarity, protection, discipline"
                  className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
                />
                <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                  <Image
                    width={300}
                    height={500}
                    src="/about-us-5.jpg"
                    alt="Collaborating with outside advisors"
                    className="aspect-[0.8] rounded-lg object-cover"
                  />
                  <Image
                    width={300}
                    height={500}
                    src="/about-us-6.jpg"
                    alt="Quiet space for family meetings"
                    className="aspect-[0.9] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Workplace / culture */}
            <div className="px-2 lg:px-8">
              <h1 className="mb-8 text-2xl font-semibold text-[#f3a84f] lg:mb-6">
                Our Workplace
              </h1>

              <p className="mb-9 lg:text-xl text-[#333333] dark:text-white">
                We keep the environment calm and focused so decisions are made
                thoughtfully. Expect plain-English explanations, transparent
                trade-offs, and documented action items after every meeting.
              </p>

              <p className="text-[#555555] dark:text-white">
                As an advice-first firm, we integrate planning, protected
                accumulation, and coordinated execution. We do not provide tax
                or legal advice, but we partner closely with your CPA and
                attorney to implement strategies the right way—so your plan is
                not just designed well, it’s operated well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
