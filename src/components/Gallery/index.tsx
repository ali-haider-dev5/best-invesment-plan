"use client";
import Image from "next/image";

const images = [
  "/gallery/gallery-1.webp",
  "/gallery/gallery-2.webp",
  "/gallery/gallery-3.webp",
  "/gallery/gallery-4.webp",
  "/gallery/gallery-5.webp",
  "/gallery/gallery-6.webp",
];

export default function Gallery() {
  return (
    <section className="bg-white dark:bg-[#1a2334] py-12">
    <div className="mx-auto container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden  group"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              width={800}
              height={600}
              className="w-full h-full cursor-pointer object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              priority
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
