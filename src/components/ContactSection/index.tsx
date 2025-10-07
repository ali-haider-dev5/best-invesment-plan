"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BorderButton from "@/components/BorderButton";
import { Phone, Inbox, MapPin, CalendarDays } from "lucide-react";

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
          io.disconnect();
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
      title: "Phone",
      body: (
        <>
          <p className="leading-relaxed">
            Monday–Friday, 9:00 AM – 5:30 PM ET. After-hours by appointment.
          </p>
          <p className="mt-4">
            phone:{" "}
            <a className="text-[#f3a84f] underline" href="tel:+12122021810">
              (212) 202-1810
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
            Share a few details about your goals and we’ll route you to the right advisor.
          </p>
          <p className="mt-4">
            <a className="underline text-[#f3a84f]" href="mailto:info@mazcollc.com">
              info@mazcollc.com
            </a>
          </p>
        </>
      ),
    },
    {
      Icon: MapPin,
      title: "Meetings",
      body: (
        <>
          <p className="leading-relaxed">
            Virtual-first. In-person by appointment in South Florida and New York City.
          </p>
          <a
            className="mt-4 inline-block text-[#f3a84f] underline"
            href="https://www.google.com/maps/search/?api=1&query=Mazco%20LLC"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
          {/* TODO: Replace the Maps link/query with your exact address when finalized */}
        </>
      ),
    },
    {
      Icon: CalendarDays,
      title: "Schedule Follow-Up",
      body: (
        // Prefer a real scheduling link if you have one:
        // <a href="https://calendly.com/your-handle/intro-call" target="_blank" rel="noreferrer">
        //   <BorderButton text="Book a Meeting" fullWidth variant="filled" />
        // </a>
        <Link href="/contact">
          <BorderButton text="Book a Meeting" fullWidth variant="filled" />
        </Link>
      ),
    },
  ];

  return (
    <section ref={rootRef} className="py-12 sm:py-16 dark:bg-[#1a2333] bg-white">
      <div className="mx-auto container lg:px-0 sm:px-2 px-4">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }, i) => {
            const delay = i * 300;
            return (
              <div
                key={title}
                style={{ transitionDelay: `${delay}ms` }}
                className={[
                  "transition-all duration-700 will-change-transform",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
              >
                <Icon className="h-10 w-10 dark:text-white text-[#555555]" />
                <h3 className="mt-8 text-xl dark:text-white font-semibold text-[#f3a84f]">
                  {title}
                </h3>
                <div className="mt-5 text-[17px] dark:text-white leading-7 text-[#555555]/80">{body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
