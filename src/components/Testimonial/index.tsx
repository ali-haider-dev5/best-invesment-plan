
"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight,MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "@/components/GrippInvesment/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Trusted by product builders",
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: "/testimonial.webp",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: "/testimonial.webp",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image: "/testimonial.webp",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image: "/testimonial.webp",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image: "/testimonial.webp",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap()); // left-most visible card
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    setSnapCount(carouselApi.scrollSnapList().length);
    onSelect();

    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", () => {
      setSnapCount(carouselApi.scrollSnapList().length);
      onSelect();
    });

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  function LeftCardFrame() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* top line */}
      <div className="absolute left-0 right-0 top-8 h-px bg-black via-slate-300 to-transparent dark:via-white/20" />
      {/* bottom line */}
      <div className="absolute left-0 right-0 bottom-8 h-px bg-black via-slate-300 to-transparent dark:via-white/20" />
      {/* left vertical */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-black via-slate-300 to-transparent dark:via-white/20" />
      {/* right vertical */}
      <div className="absolute right-8 top-0 bottom-0 w-px bg-black via-slate-300 to-transparent dark:via-white/20" />
    </div>
  );
}

  return (
    <section className="bg-[#f4f4f4] dark:bg-[#0b111a] py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-16 flex items-start flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="text-3xl font-semibold md:text-5xl lg:text-6xl text-[#0f172a] dark:text-[#f3a84f]">
            {heading}
          </h2>
          <div className="max-w-xl">
            <p className="text-[#555555] dark:text-white/80 mb-4 text-sm sm:text-base">
              Streamline is built on the habits that make the best product teams
              successful: staying focused, moving quickly, and always aiming for
              high-quality work.
            </p>
            <button
              className="flex gap-2 items-center text-white px-4 sm:px-5 py-2 bg-[#f3a84f] uppercase text-xs sm:text-sm font-semibold rounded-lg hover:brightness-95"
            >
              <span>Read our Customer Stories</span> <MoveRight />
            </button>
          </div>
        </div>

        {/* Carousel (bleed right on xl for the marquee look) */}
        <div className="">
          <Carousel
            setApi={setCarouselApi}
            className="overflow-hidden relative -mr-[max(1rem,calc((100vw-103rem)/2+5rem))]  md:-mr-[max(2rem,calc((100vw-103rem)/2+5rem))] lg:-mr-[max(2rem,calc((100vw-128rem)/2+5rem))]"
            opts={{
              loop: true,
              align: "start",
              containScroll: "trimSnaps",
              slidesToScroll: 1, // default
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
          >
            <CarouselContent className="-ml-2 sm:-ml-3 relative ">
              {items.map((item, idx) => {
                const isLeftMost = idx === selectedIndex;

                return (
                  <CarouselItem
                    key={item.id}
                    className="
                     min-w-0 shrink-0 grow-0 pl-0 basis-4/5 md:basis-1/2 lg:basis-[34%]
                    "
                  >
                    <Card  variant="gradient"
                      className="flex cursor-pointer ml-[26px] flex-col items-start rounded-xl inner-none">
                    <a
                      href={item.url}
                      className="group relative flex h-full flex-col rounded-xl  dark:bg-[#0f131b] transition "
                    >
                      <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        {idx !== selectedIndex && (
                          <div className="absolute inset-0 bg-[#f5a84b]/30 dark:bg-black/50 transition-opacity duration-300 pointer-events-none" />
                        )}
                      </div>

                      <div className="p-4 sm:p-5">
                        <h3
                          className={[
                            "mb-2 pt-2 text-sm md:text-lg  sm:text-xl lg:text-2xl font-medium",
                            isLeftMost
                              ? "text-[#0f172a] dark:text-white"
                              : "text-[#f5a84b]",
                          ].join(" ")}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={[
                            "mb-4 text-xs sm:text-base",
                            isLeftMost
                              ? "text-slate-600 dark:text-white/80"
                              : "text-[#f5a84b]",
                          ].join(" ")}
                        >
                          {item.summary}
                        </p>

                        <span
                          className={[
                            "inline-flex items-center text-sm sm:text-base",
                            isLeftMost
                              ? "text-[#0f172a] dark:text-white"
                              : "text-[#f5a84b]",
                          ].join(" ")}
                        >
                          Read more
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Dots */}
          <div className="order-2 sm:order-1 flex items-center justify-center gap-2 md:gap-3">
            {Array.from({ length: snapCount }).map((_, i) => {
              const active = i === selectedIndex;
              return (
                <button
                  key={i}
                  onClick={() => carouselApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={active ? "true" : undefined}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition-all",
                    active ? "bg-[#f3a84f] scale-110" : "bg-white",
                  ].join(" ")}
                />
              );
            })}
          </div>

          {/* Arrows */}
          <div className="order-1 sm:order-2 flex items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Previous"
              className="
                h-10 w-10 sm:h-12 sm:w-12 rounded-full
                bg-white/80 text-black ring-1 ring-black/5
                shadow-[0_1px_0_rgba(0,0,0,0.05),0_10px_25px_rgba(0,0,0,0.06)]
                backdrop-blur transition
                hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
                active:scale-95
                disabled:opacity-60 disabled:shadow-none disabled:pointer-events-auto
                dark:bg-white/10 dark:text-white dark:ring-white/10 dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                dark:hover:bg-white/15
              "
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Next"
              className="
                h-10 w-10 sm:h-12 sm:w-12 rounded-full
                bg-white/80 text-black ring-1 ring-black/5
                shadow-[0_1px_0_rgba(0,0,0,0.05),0_10px_25px_rgba(0,0,0,0.06)]
                backdrop-blur transition
                hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]
                active:scale-95
                disabled:opacity-60 disabled:shadow-none disabled:pointer-events-auto
                dark:bg-white/10 dark:text-white dark:ring-white/10 dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]
                dark:hover:bg-white/15
              "
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery6 };
