'use client';

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header/index";
import Footer from '@/components/Footer/index'
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This will prevent the "dark" class from being added on SSR
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" className="dark">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className='mt-[80px]'>
          {children}
          </main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
