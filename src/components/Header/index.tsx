'use client';

import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={`bg-[#FFFFFF] fixed top-0 left-0 w-full dark:bg-[#0f131b] text-[#333333] dark:text-[#f5f5f5] z-50 py-5 shadow-md border-b border-[#DDDDDD]`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" className="w-32" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/" className="text-[#f3a84f] dark:text-white font-semibold uppercase dark:hover:text-[#f3a84f]  hover:text-[#f3a84f]">Home</a>
          <a href="/services" className="text-[#f3a84f] dark:text-white font-semibold uppercase dark:hover:text-[#f3a84f]  hover:text-[#f3a84f]">Services</a>
          <a href="/about" className="text-[#f3a84f] dark:text-white font-semibold uppercase dark:hover:text-[#f3a84f] hover:text-[#f3a84f]">About Us</a>
          <a href="/contactus" className="text-[#f3a84f] dark:text-white font-semibold uppercase dark:hover:text-[#f3a84f] hover:text-[#f3a84f]">Contact Us</a>
          <ThemeToggle />
          <a
            href="#get-started"
            className="text-[#FFFFFF] px-4 py-2 bg-[#f3a84f] uppercase font-semibold rounded-lg hover:bg-[#f3a84f]"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#333333] dark:text-[#f5f5f5] text-2xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } bg-[#FFFFFF] dark:bg-[#1f2937] text-[#333333] dark:text-[#f5f5f5]`}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#DDDDDD] dark:border-[#555555]">
          <span className="text-2xl font-semibold">Wealth & Trust</span>
          <button onClick={toggleMenu} className="text-3xl text-[#f3a84f] hover:text-[#0056b3] dark:text-[#f3a84f] dark:hover:text-[#f3a84f]">
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10">
          <a href="#services" className="text-[#f3a84f] hover:text-[#f3a84f]">Services</a>
          <a href="#about" className="text-[#f3a84f] hover:text-[#f3a84f]">About Us</a>
          <a href="#contact" className="text-[#f3a84f] hover:text-[#f3a84f">Contact Us</a>
          <a
            href="#get-started"
            className="text-[#FFFFFF] px-4 py-2 bg-[#f3a84f] rounded-full hover:bg-[#f3a84f]"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
