'use client';

import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((s) => !s);

  function ActiveLink({
    href,
    children,
    className,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }) {
    const rawPathname = usePathname() ?? '';
    const normalize = (s: string) => s.replace(/\/+$/, '');
    const isActive = normalize(rawPathname) === normalize(href);

    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          'font-semibold uppercase transition-colors',
          isActive
            ? 'text-[#555555] dark:text-[#f3a84f]'
            : 'text-[#f3a84f] dark:text-white hover:text-[#555555] dark:hover:text-[#f3a84f]',
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <header className="bg-[#FFFFFF] fixed top-0 left-0 w-full dark:bg-[#0f131b] text-[#333333] dark:text-[#f5f5f5] z-50 py-5 shadow-md border-b border-[#DDDDDD]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" className="w-32" />
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/services">Services</ActiveLink>
          <ActiveLink href="/about">About Us</ActiveLink>
          <ActiveLink href="/contactus">Contact Us</ActiveLink>
          <ThemeToggle />
          <a
            href="#get-started"
            className="text-[#FFFFFF] px-4 py-2 bg-[#f3a84f] uppercase font-semibold rounded-lg hover:bg-[#f3a84f]"
          >
            Get Started
          </a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#333333] dark:text-[#f5f5f5] text-2xl"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            &#9776;
          </button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden fixed top-0 left-0 w-full h-screen z-50 transform transition-transform duration-300',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full',
          'bg-[#FFFFFF] dark:bg-[#1f2937] text-[#333333] dark:text-[#f5f5f5]'
        )}
      >
        <div className="flex justify-between items-center p-4 border-b border-[#DDDDDD] dark:border-[#555555]">
          <span className="text-2xl font-semibold">Wealth & Trust</span>
          <button
            onClick={toggleMenu}
            className="text-3xl text-[#f3a84f] hover:text-[#0056b3] dark:text-[#f3a84f] dark:hover:text-[#f3a84f]"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 mt-10">
          <ActiveLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </ActiveLink>
          <ActiveLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </ActiveLink>
          <ActiveLink href="/contactus" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </ActiveLink>
          <a
            href="#get-started"
            onClick={() => setIsMobileMenuOpen(false)}
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
