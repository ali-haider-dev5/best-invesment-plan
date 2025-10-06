// app/components/HeroChecklist.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import BorderButton from "@/components/BorderButton";

export default function HeroChecklist() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <section className="relative border border-b-[#ccc] overflow-hidden bg-[#f4f4f4] dark:bg-[#0f131b] text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Left: Copy */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold text-[#f3a84f] leading-tight sm:text-4xl lg:text-5xl">
            Founder’s 10-Point Exit Checklist
          </h1>
          <p className="mt-6 text-lg/7 text-[#555555] dark:text-white">
            For CEO founders and business owners planning a sale — practical steps to
            maximize valuation, reduce taxes, and keep momentum.
          </p>

          <div className="mt-10">
            <BorderButton
              text="Get the 10-Point Checklist"
              variant="filled"
              onClick={() => alert("Request submitted")}
            />
          </div>
        </div>

        {/* Right: Video card */}
        <div className="relative">
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl ">
            {/* Thumbnail state */}
            {!isPlaying && (
              <>
                <Image
                  src="/ceo-image.jpg"
                  alt="Checklist video thumbnail"
                  fill
                  priority
                  className="object-cover"
                />

                {/* Caption */}
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <p className="text-sm/5 text-white/90">
                    Alain Mazaira — Founder, Mazco LLC
                  </p>
                </div>

                {/* Play button */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 bg-white cursor-pointer m-auto h-16 w-16 rounded-full text-sky-900 shadow-lg transition"
                  aria-label="Play video"
                  title="Play video"
                  style={{ height: 64, width: 64 }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="mx-auto h-8 w-8"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}

            {/* Video state */}
            {isPlaying && (
              <video
                ref={videoRef}
                src="/video/introducation-video.mp4"
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                autoPlay
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
