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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
