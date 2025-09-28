// app/components/AboutSplit.tsx
"use client";

import Image from "next/image";

type AboutSplitProps = {
  /** Main heading text */
  title?: string;
  /** Paragraph under the heading */
  paragraph?: string;
  /** Right-side image src and alt */
  imageSrc?: string;
  imageAlt?: string;
  /** Tailwind classes for heading & dots (optional) */
  headingClassName?: string;
  dotColorClassName?: string; // uses currentColor
};

export default function AboutSplit({
  title = "About Creative Planning",
  paragraph = "Helping clients simplify their journey to financial wellness, one personalized plan at a time.",
  imageSrc = "/about-building.jpg",
  imageAlt = "Creative Planning HQ",
  headingClassName = "text-[#f3a84f]",
  dotColorClassName = "text-[#333333] dark:text-white",
}: AboutSplitProps) {
  return (
    <section className="relative isolate pt-[62px] md:pt-0 lg:pt-0 bg-white dark:bg-[#192132]">
      {/* Right half image (full height on desktop, stacked on mobile) */}
      <div className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
        <div className="relative aspect-[16/9] w-full md:h-full md:aspect-auto">
          <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
        </div>
      </div>

      {/* Left content area */}
      <div className="relative mx-auto flex items-center container min-h-[450px] px-6 py-28 sm:py-20 lg:px-8">
        <div className="md:pr-12 lg:pr-24 xl:pr-32">
          {/* Dotted motif on the far left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[78px] left-0 hidden h-full w-48 select-none opacity-20 md:block"
          >
            <svg
              className={`h-64 w-64 ${dotColorClassName}`}
              viewBox="0 0 320 320"
              aria-hidden="true"
            >
              <defs>
                <pattern id="dotPattern" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="6" cy="6" r="4" className="fill-current" />
                </pattern>
                <clipPath id="triClip">
                  <polygon points="0,0 320,0 0,320" />
                </clipPath>
              </defs>
              <rect width="320" height="320" fill="url(#dotPattern)" clipPath="url(#triClip)" />
            </svg>
          </div>

          {/* Card */}
          <div className="relative z-10 max-w-4xl bg-white/80 p-6 shadow-sm backdrop-blur-sm ring-1 ring-black/5 md:-mr-20 lg:-mr-28">
            <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${headingClassName}`}>
              {title}
            </h2>
            <p className="mt-6 text-lg text-[#333333]">{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
