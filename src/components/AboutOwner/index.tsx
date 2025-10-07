import React from "react";
import Image from "next/image";
import BorderButton from '@/components/BorderButton'

const App = () => {
  return (
    <div className='dark:bg-[#1a2333]'>
    <div className="container mx-auto py-12">
     
      <div className=" flex flex-col md:flex-row lg:flex-row justify-center">
        <div className="testimonial-container container mx-auto lg:px-0 sm:px-2 px-4 w-full  md:space-x-8 items-start">
           <h1 className="text-3xl md:text-4xl lg:text-6xl text-[#f3a84f] text-left mb-12 lg:mb-24 font-bold ">About Mazco</h1>
          <div className='flex gap-4 flex-col lg:flex-row md:flex-row'>
          <div className="relative   rounded-lg flex-1 md:mb-0 mb-8">
             <div className="bg-[#f4f4f4] block lg:hidden md:hidden  dark:bg-[#0f131b]">
                  <svg
                    width="230"
                    height="174"
                    viewBox="0 0 230 174"
                    fill="none"
                    className="bg-white dark:bg-[#1a2333]   p-[13px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M122.812 154.05C124.79 152.348 127.163 151.499 129.929 151.499L177.664 151.499C181.223 151.499 184.091 150.398 186.262 148.199C188.439 145.997 189.524 143.099 189.524 139.5L189.524 124.5C189.524 120.9 188.439 117.997 186.262 115.8C184.088 113.596 181.223 112.5 177.664 112.5L129.926 112.5C127.16 112.5 124.788 111.647 122.809 109.949C120.835 108.247 119.845 106.095 119.845 103.499L119.845 9.00147C119.845 6.40288 120.835 4.25362 122.809 2.5512C124.788 0.853751 127.16 5.20835e-05 129.926 5.23253e-05L188.043 5.7406e-05C200.497 5.84948e-05 210.531 3.85423 218.139 11.5501C225.751 19.256 229.555 29.4032 229.555 42.0042L229.555 132.001C229.555 144.602 225.751 154.749 218.139 162.45C210.531 170.146 200.497 174 188.043 174L129.926 174C127.16 174 124.788 173.146 122.809 171.449C120.835 169.746 119.845 167.597 119.845 164.999L119.845 160.198C119.845 157.799 120.835 155.745 122.809 154.048L122.812 154.05Z"
                      fill="#f3a84f"
                    ></path>
                    <path
                      d="M2.96683 154.05C4.94544 152.348 7.3178 151.499 10.0839 151.499L57.8207 151.499C61.3793 151.499 64.2469 150.398 66.4187 148.199C68.5954 145.997 69.68 143.099 69.68 139.5L69.68 124.5C69.68 120.9 68.5954 117.997 66.4187 115.8C64.2444 113.596 61.3793 112.5 57.8207 112.5L10.0839 112.5C7.3178 112.5 4.94544 111.647 2.96683 109.949C0.99317 108.247 0.00261519 106.095 0.00261542 103.499L0.00262368 9.00147C0.0026239 6.40288 0.993179 4.25362 2.96684 2.5512C4.94545 0.853751 7.31781 5.20837e-05 10.0839 5.23255e-05L68.1992 5.74061e-05C80.6528 5.84949e-05 90.687 3.85423 98.2944 11.5501C105.907 19.251 109.71 29.4007 109.71 41.9992L109.71 132.001C109.71 144.599 105.907 154.749 98.2944 162.45C90.6846 170.146 80.6503 174 68.1967 174L10.0814 174C7.31532 174 4.94296 173.146 2.96435 171.449C0.990685 169.746 0.000130259 167.597 0.000130487 164.999L0.000130906 160.198C0.000131116 157.799 0.990686 155.745 2.96435 154.048L2.96683 154.05Z"
                       fill="#f3a84f"
                    ></path>
                  </svg>
                </div>
            <div className="bg-[#f4f4f4] dark:bg-[#0f131b] p-4 lg:p-16 md:p-12 sm:rounded-tl-0 sm:rounded-tr-none sm:rounded-bl-none rounded-tl-lg rounded-tr-lg rounded-bl-lg border-b-0 border-r-0">
              <blockquote className="relative z-10 text-md md:text-2xl font-medium text-[#555555] pb-12 lg:pb-34 dark:text-white leading-snug">
                My name is Alain Mazaira and I have been licensed in the field of Financial Services since early 2019. I help my clients with retirement planning, estate planning, asset protection, infinite banking, and other areas of financial planning. I oversee a team of licensed agents. Our mission is to help as many families and individuals as possible. Retirement and financial well‑being shouldn’t be a luxury—it should be attainable for everyone.
              </blockquote>
            </div>
            <div className="flex">
              <div className="flex items-center ">
                <div className="bg-[#f4f4f4] hidden lg:block md:block  dark:bg-[#0f131b] rounded-tl-[35px] rounded-bl-[35px] rounded-br-[35px]">
                  <svg
                    width="230"
                    height="174"
                    viewBox="0 0 230 174"
                    fill="none"
                    className="bg-white dark:bg-[#1a2333] rounded-[23px] p-[13px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M122.812 154.05C124.79 152.348 127.163 151.499 129.929 151.499L177.664 151.499C181.223 151.499 184.091 150.398 186.262 148.199C188.439 145.997 189.524 143.099 189.524 139.5L189.524 124.5C189.524 120.9 188.439 117.997 186.262 115.8C184.088 113.596 181.223 112.5 177.664 112.5L129.926 112.5C127.16 112.5 124.788 111.647 122.809 109.949C120.835 108.247 119.845 106.095 119.845 103.499L119.845 9.00147C119.845 6.40288 120.835 4.25362 122.809 2.5512C124.788 0.853751 127.16 5.20835e-05 129.926 5.23253e-05L188.043 5.7406e-05C200.497 5.84948e-05 210.531 3.85423 218.139 11.5501C225.751 19.256 229.555 29.4032 229.555 42.0042L229.555 132.001C229.555 144.602 225.751 154.749 218.139 162.45C210.531 170.146 200.497 174 188.043 174L129.926 174C127.16 174 124.788 173.146 122.809 171.449C120.835 169.746 119.845 167.597 119.845 164.999L119.845 160.198C119.845 157.799 120.835 155.745 122.809 154.048L122.812 154.05Z"
                      fill="#f3a84f"
                    ></path>
                    <path
                      d="M2.96683 154.05C4.94544 152.348 7.3178 151.499 10.0839 151.499L57.8207 151.499C61.3793 151.499 64.2469 150.398 66.4187 148.199C68.5954 145.997 69.68 143.099 69.68 139.5L69.68 124.5C69.68 120.9 68.5954 117.997 66.4187 115.8C64.2444 113.596 61.3793 112.5 57.8207 112.5L10.0839 112.5C7.3178 112.5 4.94544 111.647 2.96683 109.949C0.99317 108.247 0.00261519 106.095 0.00261542 103.499L0.00262368 9.00147C0.0026239 6.40288 0.993179 4.25362 2.96684 2.5512C4.94545 0.853751 7.31781 5.20837e-05 10.0839 5.23255e-05L68.1992 5.74061e-05C80.6528 5.84949e-05 90.687 3.85423 98.2944 11.5501C105.907 19.251 109.71 29.4007 109.71 41.9992L109.71 132.001C109.71 144.599 105.907 154.749 98.2944 162.45C90.6846 170.146 80.6503 174 68.1967 174L10.0814 174C7.31532 174 4.94296 173.146 2.96435 171.449C0.990685 169.746 0.000130259 167.597 0.000130487 164.999L0.000130906 160.198C0.000131116 157.799 0.990686 155.745 2.96435 154.048L2.96683 154.05Z"
                       fill="#f3a84f"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col bg-[#f4f4f4]  dark:bg-[#0f131b] w-full rounded-bl-lg rounded-br-lg  border-t-0 p-6">
                <span className="text-lg text-[#f3a84f] font-semibold dark:text-white">Alain Mazaira </span>
                <span className="text-sm font-medium text-[#555555] dark:text-white">
                  Financial Services Manager
                </span>
                <div className="mt-8 flex flex-col md:flex-row md:items-center justify-end space-y-4 md:space-y-0 items-end">
                      <BorderButton text="Read the full review" variant="filled" onClick={() => alert("Filled Clicked!")} />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full  h-full md:w-32 md:h-32 lg:w-48 lg:h-48 flex-shrink-0">
            <Image
              src="/owner-pic.jpg"
              width={300}
              height={400}
              alt="Alex S."
              className="rounded-lg w-full h-full object-cover shadow-lg"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
