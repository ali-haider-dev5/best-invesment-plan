import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  logo?: { url: string; src: string; alt: string; title: string };
  sections?: Array<{ title: string; links: Array<{ name: string; href: string }> }>;
  description?: string;
  socialLinks?: Array<{ icon: React.ReactElement; href: string; label: string }>;
  copyright?: string;
  legalLinks?: Array<{ name: string; href: string }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/aboutus" },
      { name: "Services", href: "services" },
      { name: "Contact us", href: "/contactus" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Mazo.com. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="py-24 sm:py-28 bg-[#f4f4f4] dark:bg-[#0f131b]  ">
      <div className="container mx-auto lg:px-0 sm:px-2 px-4">
        {/* Top: brand + sections */}
        <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand column */}
          <div className="flex w-full flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <a href={logo.url} aria-label={logo.title}>
                <img src="/mazo-logo.png" alt="Logo" className="w-32" />
              </a>
            </div>

            <p className="max-w-xl text-sm text-[#555555] dark:text-white">
              {description}
            </p>

            {/* Social: wrap on small screens */}
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-[#1e2939] dark:text-white">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium text-[#555555] hover:text-primary dark:text-white transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections grid: 1→2→3 columns */}
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-center sm:text-left">
                <h3 className="mb-4 font-bold text-[#f4a950]">{section.title}</h3>
                <ul className="space-y-3 text-sm text-[#555555] dark:text-white">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary transition-colors">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-black/10 dark:border-white/10" />

        <div className="mt-6 md:mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 text-xs font-medium">
          <p className="text-center md:text-left text-[#555555] dark:text-white">
            {copyright}
          </p>

          {/* Legal links: wrap nicely */}
          <ul className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary text-[#555555] dark:text-white transition-colors">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
