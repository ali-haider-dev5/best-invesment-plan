'use client';

import { ReactNode } from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import ContactUsSection from '@/components/NewContactUsPage';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* If you want Lato in addition to IBM Plex Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      {/* Put the font variable on body (or html) — but only once */}
      <body>
        {/* Set defaultTheme here instead of hardcoding "dark" on <html> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <ContactUsSection />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
