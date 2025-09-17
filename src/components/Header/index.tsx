'use client';

import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`bg-[#f6fafc] fixed top-0 left-0 w-full dark:bg-[#1f2937] text-[#1f2937] dark:text-[#f5f5f5] z-50 py-5 shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" className="w-32" />
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="/services" className="text-lg hover:text-[#0ea5e9]">Services</a>
          <a href="/about" className="text-lg hover:text-[#0ea5e9]">About Us</a>
          <a href="/contactUs" className="text-lg hover:text-[#0ea5e9]">Contact Us</a>
          <ThemeToggle />
          <a href="#get-started" className="text-lg px-4 py-2 bg-[#0ea5e9] font-semibold text-[#ffffff] rounded-lg">Get Started</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1f2937] dark:text-[#f5f5f5] text-2xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-[#f6fafc] dark:bg-[#1f2937] text-[#1f2937] dark:text-[#f5f5f5] fixed top-0 left-0 w-full h-screen z-50 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className="text-2xl font-semibold">Wealth & Trust</span>
          <button
            onClick={toggleMenu}
            className="text-3xl"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10">
          <a href="#services" className="text-lg hover:text-[#0ea5e9]">Services</a>
          <a href="#about" className="text-lg hover:text-[#0ea5e9]">About Us</a>
          <a href="#contact" className="text-lg hover:text-[#0ea5e9]">Contact Us</a>
          <a href="#get-started" className="text-lg px-4 py-2 bg-[#0ea5e9] text-[#ffffff] rounded-full">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
