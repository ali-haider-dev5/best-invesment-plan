"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Inbox,
  MapPin,
  CalendarDays,
} from "lucide-react";

/**
 * ContactInfoStagger
 * - 1→4 col responsive layout
 * - Staggered enter animation (200ms steps)
 * - Animates once, when scrolled ~20% into view
 */
export default function ContactInfoStagger() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect(); // animate once
        }
      },
      { threshold: 0.2 }
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  const items = [
    {
      Icon: Phone,
      title: "Phone + Fax",
      body: (
        <>
          <p className="leading-relaxed">
            On market days, we are available from 8:30 AM ET – 7:00 PM ET,
            except on Fridays when we close at 5:30 PM ET.
          </p>
          <p className="mt-4">
            phone:{" "}
            <a className="text-[#f3a84f] underline" href="tel:+18775752742">
              (877) 575-2742
            </a>
            <br />
            fax:{" "}
            <a className="text-[#f3a84f] underline" href="tel:+15028826040">
              (502) 882-6040
            </a>
          </p>
        </>
      ),
    },
    {
      Icon: Inbox,
      title: "Email",
      body: (
        <>
          <p className="leading-relaxed">
            Correspond with us at this email address, or use the form above.
          </p>
          <p className="mt-4">
            <a className="underline" href="mailto:alex.lee@retireone.com">
              alex.lee@retireone.com
            </a>
          </p>
        </>
      ),
    },
    {
      Icon: MapPin,
      title: "Mailing Addresses",
      body: (
        <>
          <p className="leading-relaxed">
            Advisor Solutions Team: 222 South First Street. Suite 600.
            Louisville, KY 40202
          </p>
          <p className="mt-3 leading-relaxed">
            Headquarters: 505 Montgomery Street. 11th Floor. San Francisco, CA
            94111
          </p>
          <a
            className="mt-4 inline-block text-[#f3a84f] underline"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            View On Google Map
          </a>
        </>
      ),
    },
    {
      Icon: CalendarDays,
      title: "Schedule Follow-Up",
      body: (
        <a
          href="#book"
          className="inline-flex items-center justify-center rounded-lg bg-[#f3a84f] px-5 py-3 font-semibold text-white shadow-sm hover:opacity-95"
        >
          Book a Meeting
        </a>
      ),
    },
  ];

  return (
    <section ref={rootRef} className="py-12 sm:py-16 dark:bg-[#1a2333] bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }, i) => {
            const delay = i * 300; 
            return (
              <div
                key={title}
                style={{ transitionDelay: `${delay}ms` }}
                className={[
                  // base
                  "transition-all duration-700 will-change-transform",
                  // enter animation
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
              >
                <Icon className="h-10 w-10 dark:text-white text-[#555555]" />
                <h3 className="mt-8 text-xl dark:text-white font-semibold text-[#f3a84f]">
                  {title}
                </h3>
                <div className="mt-5 text-[17px] dark:text-white leading-7 text-[#555555]/80">
                  {body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
