"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <div className='bg-white dark:bg-[#1a2333f0] px-4'>
    <div className="w-full container mx-auto py-32  ">
      <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
          <div className="pr-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f3a84f]">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#333333] dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias
              repellendus perferendis earum facilis est soluta consequatur
              placeat hic aliquid exercitationem, ex molestias nam veniam
              distinctio maxime culpa magnam autem.
            </p>
            <p className="mt-8 text-base leading-7 text-[#555555] dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolore quas placeat expedita aliquam rerum tempore amet, sequi
              ipsa ad quam, adipisci exercitationem nihil, sapiente laborum
              minus doloribus consequuntur sed. Quo repudiandae nihil quas
              voluptates, aut beatae reiciendis aliquid perspiciatis quae
              explicabo inventore temporibus laborum, nostrum omnis quos
              excepturi dolorem reprehenderit vel labore eaque libero
              perferendis?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <Image
                width={400}
                  height={500}
              src="/about-us-1.jpg"
              alt="about 1"
              className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
            />
            <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
              <Image
                  width={400}
                  height={400}
                src="/about-us-2.jpg"
                alt="about 2"
                className="aspect-[1.1] rounded-lg object-cover"
              />
              <Image
                  width={400}
                  height={500}
                src="/about-us-3.jpg"
                alt="about 3"
                className="aspect-[0.7] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2">
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12  lg:pt-25">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Image
                  width={400}
                  height={500}
                src="/about-us-4.jpg"
                alt="about 4"
                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <Image
                    width={300}
                  height={500}
                  src="/about-us-5.jpg"
                  alt="about 5"
                  className="aspect-[0.8] rounded-lg object-cover"
                />
                <Image
                  width={300}
                  height={500}
                  src="/about-us-6.jpg"
                  alt="about 6"
                  className="aspect-[0.9] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="px-2 lg:px-8">
            <h1 className="mb-8 text-2xl font-semibold text-[#f3a84f] lg:mb-6">Our Workplace</h1>
            <p className="mb-9 lg:text-xl text-[#333333] dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quae vel rem tenetur illum aspernatur. Ea, facere soluta cumque
              laboriosam repudiandae quaerat inventore dolores saepe pariatur,
              adipisci atque voluptate doloribus!
            </p>
            <p className="text-muted-foreground text-[#555555] dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              aliquid laudantium minus distinctio exercitationem odio non nihil
              blanditiis quae, beatae assumenda ad reiciendis soluta dolorem.
              Natus repellendus quidem dolorum temporibus!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
