"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Eye,
  Wrench,
  LayoutDashboard,
  LineChart,
  Database,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const cx = (...s: (string | false | undefined)[]) =>
  s.filter(Boolean).join(" ");
const norm = (s: string) => (s ?? "").replace(/\/+$/, "");

/* ------------------------------- Active Link ------------------------------- */
function ActiveLink({
  href,
  children,
  className,
  onClick,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const isActive = norm(usePathname() ?? "/") === norm(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        mobile ? "block w-full py-3" : "text-sm md:text-md lg:text-lg",
        "font-semibold uppercase transition-colors",
        isActive
          ? "text-[#f3a84f]"
          : "text-[#555555] dark:text-white hover:text-[#f3a84f] dark:hover:text-[#f3a84f]",
        className
      )}
    >
      {children}
    </Link>
  );
}

function MegaItem({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-white/40 transition"
    >
      <div className="mt-1 text-[#555555] dark:text-white">{icon}</div>
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-[#555555] dark:text-white">
            {title}
          </h4>
        </div>
        <p className="text-sm text-[#333333]/80 dark:text-white mt-1">{desc}</p>
      </div>
    </Link>
  );
}

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // trigger & panel refs to detect pointer transitions
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ----- delayed close management -----
  const CLOSE_DELAY = 300; // ms (tweak to 2000–3000 as you like)
  const closeTO = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTO.current) {
      window.clearTimeout(closeTO.current);
      closeTO.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTO.current = window.setTimeout(() => {
      setMegaOpen(false);
      closeTO.current = null;
    }, CLOSE_DELAY);
  };

  const openMega = () => {
    cancelClose();
    setMegaOpen(true);
  };

  // Close on Esc
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // If mobile menu opens, ensure mega is closed
  useEffect(() => {
    if (mobileOpen) setMegaOpen(false);
  }, [mobileOpen]);

  // Leave trigger: close unless moving into the panel
  const onTriggerLeave: React.MouseEventHandler = (e) => {
    const to = e.relatedTarget as Node | null;
    if (to && panelRef.current?.contains(to)) {
      // moving into panel -> keep open
      cancelClose();
      return;
    }
    // not into panel -> schedule a delayed close
    scheduleClose();
  };

  // Leave panel: close unless moving back to trigger
  const onPanelLeave: React.MouseEventHandler = (e) => {
    const to = e.relatedTarget as Node | null;
    if (to && triggerRef.current?.contains(to)) {
      // back to trigger -> keep open
      cancelClose();
      return;
    }
    scheduleClose();
  };

  return (
    <div className="relative">
      <header
        className={cx(
          "fixed container top-0 left-1/2 -translate-x-1/2 z-50 w-full",
          "px-3 sm:px-4 py-4 bg-white dark:bg-[#0f131b]",
          megaOpen || mobileOpen ? "rounded-b-none" : "rounded-b-2xl",
          "shadow-sm"
        )}
      >
        <div className="flex items-center justify-between md:block md:items-start md:justify-start">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/mazo-logo.png"
                  alt="Logo"
                  width={160}
                  height={44}
                  className="h-11 w-auto"
                />
              </Link>
              <nav className="hidden md:flex items-center gap-4  md:gap-5 lg:gap-8">
                <ActiveLink href="/">HOME</ActiveLink>

                {/* Services trigger */}
                <button
                  ref={triggerRef}
                  type="button"
                  onMouseEnter={openMega}
                  onMouseLeave={onTriggerLeave}
                  onFocus={openMega}
                  onBlur={(e) => {
                    const to = e.relatedTarget as Node | null;
                    if (to && panelRef.current?.contains(to)) return; // focus into panel, keep open
                    scheduleClose();
                  }}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                  className="flex items-center gap-1 font-semibold text-sm md:text-md lg:text-lg uppercase dark:text-white text-[#555555] hover:text-[#f3a84f] dark:hover:text-[#f3a84f] transition"
                >
                  SERVICES
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      megaOpen && "rotate-180"
                    )}
                  />
                </button>

                <ActiveLink href="/aboutus">ABOUT US</ActiveLink>
                <ActiveLink href="/contactus">CONTACT US</ActiveLink>
              </nav>
            </div>
            <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#get-started"
              className="text-white px-4 py-2 bg-[#f3a84f] dark:text-white uppercase font-semibold rounded-lg hover:opacity-95"
            >
              Get Started
            </a>
            </div>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((s) => !s)}
              className="text-[#0a3b2f] dark:text-[#f3a84f]"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mega panel (desktop) */}
        <div
          ref={panelRef}
          onMouseEnter={openMega}
          onMouseLeave={onPanelLeave}
          className={cn(
            "absolute inset-x-0 top-full z-[60] transition-all duration-200",
            megaOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="rounded-t-none rounded-b-3xl border border-t-0 border-[#0a3b2f]/15 bg-white dark:bg-[#0f131b] shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8">
              <div className="md:col-span-5">
                <div className="rounded-xl bg-[#f3a84f] text-white p-6 md:p-7">
                  <h3 className="text-2xl font-semibold mb-2">
                    Mode is the intelligence layer for your data stack
                  </h3>
                  <div className="mt-6 space-y-3">
                    <Link
                      href="/platform"
                      className="group inline-flex items-center gap-2 font-semibold"
                    >
                      Platform overview{" "}
                      <span className="transition group-hover:translate-x-0.5">
                        ›
                      </span>
                    </Link>
                    <Link
                      href="/tour"
                      className="group inline-flex items-center gap-2 font-semibold"
                    >
                      Product tour{" "}
                      <span className="transition group-hover:translate-x-0.5">
                        ›
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right features */}
              <div className="md:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <MegaItem
                    icon={<Wrench className="h-5 w-5" />}
                    title="Ad Hoc Analysis"
                    desc="Standalone reports for key questions"
                    href="/services/ad-hoc"
                  />
                  <MegaItem
                    icon={<Eye className="h-5 w-5" />}
                    title="Advanced Analytics"
                    desc="Model & analyze on one platform"
                    href="/services/advanced-analytics"
                  />
                  <MegaItem
                    icon={<LayoutDashboard className="h-5 w-5" />}
                    title="Self-Serve Reporting"
                    desc="Governed datasets & metrics"
                    href="/services/self-serve"
                  />
                  <MegaItem
                    icon={<LineChart className="h-5 w-5" />}
                    title="Interactive Dashboards"
                    desc="Drag-and-drop visual tools"
                    href="/services/dashboards"
                  />
                  <MegaItem
                    icon={<Database className="h-5 w-5" />}
                    title="Custom Data Apps"
                    desc="Internal tools at scale"
                    href="/services/data-apps"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden absolute left-0 right-0 top-full z-[70] transition-all duration-300",
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          )}
        >
          <div className="rounded-b-2xl  bg-white dark:bg-[#0f131b] shadow-lg overflow-hidden">
            <nav className="flex flex-col px-4 py-3">
              <ActiveLink mobile href="/" onClick={() => setMobileOpen(false)}>
                Home
              </ActiveLink>

              {/* Accordion: Services */}
              <button
                type="button"
                onClick={() => setServicesOpen((s) => !s)}
                className="flex w-full items-center justify-between py-3 dark:text-white font-semibold uppercase text-[#555555]"
                aria-expanded={servicesOpen}
                aria-controls="mobile-services"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                id="mobile-services"
                className={cn(
                  "overflow-hidden transition-[max-height,opacity] duration-300",
                  servicesOpen
                    ? "max-h-[700px] opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <ul className="pl-3 pb-2 space-y-2">
                  <li>
                    <Link
                      href="/services/ad-hoc"
                      className="block py-2 dark:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Ad Hoc Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/advanced-analytics"
                      className="block py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Advanced Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/self-serve"
                      className="block py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Self-Serve Reporting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/dashboards"
                      className="block py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Interactive Dashboards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/data-apps"
                      className="block py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Custom Data Apps
                    </Link>
                  </li>
                </ul>
              </div>

              <ActiveLink
                mobile
                href="/aboutus"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </ActiveLink>
              <ActiveLink
                mobile
                href="/contactus"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </ActiveLink>

              {/* Theme + CTA on mobile */}
              <div className="mt-2 flex items-center justify-between gap-3">
                <ThemeToggle />
                <a
                  href="#get-started"
                  onClick={() => setMobileOpen(false)}
                  className="text-white px-4 py-2 bg-[#f3a84f] rounded-full font-semibold uppercase"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
