'use client'
import React from "react";
import { ChevronsRight } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Core Planning",
    description:
      "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    imageUrl: "https://i.ibb.co/fV0GzDqj/construction.png",
    link: "https://www.fiverr.com/s/8zElN2v",
  },
  {
    id: 2,
    title: "Traditional Designs",
    description:
      "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    imageUrl: "https://i.ibb.co/KjGz3dmZ/skyline.png",
    link: "https://www.fiverr.com/s/8zElN2v",
  },
  {
    id: 3,
    title: "Quality Materials",
    description:
      "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    imageUrl: "https://i.ibb.co/whkhVgQz/best-practice.png",
    link: "https://www.fiverr.com/s/8zElN2v",
  },
  {
    id: 4,
    title: "Quality Materials",
    description:
      "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    imageUrl: "https://i.ibb.co/whkhVgQz/best-practice.png",
    link: "https://www.fiverr.com/s/8zElN2v",
  },
  {
    id: 5,
    title: "Quality Materials",
    description:
      "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    imageUrl: "https://i.ibb.co/whkhVgQz/best-practice.png",
    link: "https://www.fiverr.com/s/8zElN2v",
  },
  {
    id: 6,
    title: "Quality Materials",
    description:
      "Lorem ipsum dolor sit amet, consectne auctor aliquet. Aenean sollicitudi bibendum auctor.",
    imageUrl: "https://i.ibb.co/whkhVgQz/best-practice.png",
    link: "https://www.fiverr.com/s/8zElN2v",
  },
];

const CreativeCards = () => {
  return (
    <section className="creative-cards py-24   relative dark:bg-[#1a2333f0] px-4">
      <div className="text-center">
        <h1 className="font-bold text-[#f3a84f]  dark:text-[#f3a84f] text-4xl lg:text-6xl mb-2">Client Service Menu</h1>
        <p className="text-[#555555] dark:text-white">We are here to provide value and make an impact.</p>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-wrap">
          {cardData.slice(0,3).map((card) => (
            <div
              key={card.id}
              className="card-column w-full sm:w-1/2 lg:w-1/3 p-4"
            >
              <div className="card-details before:bg-[#f4f4f4] w-4/5 mx-auto relative transition-all duration-300 ease-in-out">
                <div className="card-icons w-36 h-36 relative mx-auto flex items-center justify-center group-hover:bg-[#0185c7]">
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-[#f3a84f] transform skew-x-[-20deg] transition-all duration-300 ease-in-out" />
                  <img
                    className="light-icon relative w-16 h-16"
                    src={card.imageUrl}
                    alt={`${card.title} Icon`}
                  />
                </div>
                <h3 className="mt-12 mb-4 text-2xl font-bold text-center">
                  <a href={card.link} className="text-[#333333] no-underline dark:text-white">
                    {card.title}
                  </a>
                </h3>
                <p className="text-md dark:text-white text-[#555555] mb-8 font-normal leading-[30px] text-center">
                  {card.description}
                </p>
                <a
                  className="read-more-btn flex justify-center items-center w-12 h-12 border-2 border-yellow-200 rounded-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                  href={card.link}
                >
                  <ChevronsRight className='dark:text-black' />
                </a>
              </div>
            </div>
          ))}
            {cardData.slice(3,6).map((card,index) => (
            <div
              key={card.id}
              className={`${index === 0 ? "" : "" } card-column w-full sm:w-1/2 lg:w-1/3 p-4`}
            >
              <div className="card-details before:bg-[#f4f4f4] w-4/5 mx-auto relative transition-all duration-300 ease-in-out">
                <div className="card-icons w-36 h-36 relative mx-auto flex items-center justify-center group-hover:bg-[#0185c7]">
                  <div className="absolute top-0 left-0 w-full h-full border-2 border-[#f3a84f] transform skew-x-[-20deg] transition-all duration-300 ease-in-out" />
                  <img
                    className="light-icon relative w-16 h-16"
                    src={card.imageUrl}
                    alt={`${card.title} Icon`}
                  />
                </div>
                <h3 className="mt-12 mb-4 text-2xl font-bold text-center">
                  <a href={card.link} className="text-[#333333] no-underline dark:text-white">
                    {card.title}
                  </a>
                </h3>
                <p className="text-md dark:text-white text-[#555555] mb-8 font-normal leading-[30px] text-center">
                  {card.description}
                </p>
                <a
                  className="read-more-btn flex justify-center items-center w-12 h-12 border-2 border-yellow-200 rounded-full bg-white opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300"
                  href={card.link}
                >
                  <ChevronsRight className='dark:text-black' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .creative-cards .container {
          max-width: 1320px;
        }
        .card-details:before {
          content: "";
          width: 190px;
          height: 380px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) skew(-20deg, 0deg);
          z-index: -1;
          transition: 0.3s ease-in-out;
        }
        .card-details:hover:before {
          background-color: #f4a95061;
        } 


        .dark .card-details::before {
          background: #333!important;
        }
        .card-icons:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          border: 1px solid;
          width: 100%;
          height: 100%;
          transform: skew(-20deg, 0deg);
          background: #fff;
          border-color: #ffee02;
          transition: 0.3s ease-in-out;
        }
        .card-details:hover .card-icons:before {
          background-color: #f3a84f;
        }
        .read-more-btn {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid;
          border-radius: 100%;
          margin: auto;
          background: #fff;
          transform: translateX(-10px);
          opacity: 0;
          visibility: hidden;
          border-color: #f3a84f;
          transition: 0.3s ease-in-out;
          text-decoration: none;
        }
        .card-details:hover .read-more-btn {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </section>
  );
};

export default CreativeCards;
