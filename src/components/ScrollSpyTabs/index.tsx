"use client";

import { useEffect, useMemo, useRef, useState, Fragment,ComponentType } from "react";
import { Card } from "@/components/GrippInvesment/card";
import {
  ShieldCheck,
  LineChart,
  Gift,
  Wallet,
  Shield,
  ReceiptText,
  HeartHandshake,
  Globe2,
  Scale,
  Venus,
  Briefcase,
  HandCoins,
  Stethoscope,
  Calculator,
  UsersRound,
  Brain,
  PiggyBank,
  Target,
  ClipboardList,
  Building,
  FileBarChart,
  Factory,
  Rocket,
  Landmark,
  MessageSquareText,
} from "lucide-react";
function DividerLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 55"
      className={`w-full h-auto text-[#f3a84f]/50 dark:text-[#f3a84f]/40 ${className}`}
      preserveAspectRatio="none"
      aria-hidden
      role="presentation"
    >
      {[2, 12, 22, 32, 42, 52].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="1440"
          y2={y}
          stroke="currentColor"
          strokeWidth="4"
        />
      ))}
    </svg>
  );
}
type SectionDef = { id: string; title: string; content: React.ReactNode };

interface Props {
  sections: SectionDef[];
  /** Height of your fixed site header in px (your navbar). */
  headerOffset?: number;
  className?: string;
}
interface IconProps {
  className: string;
}

function ServicesTabsSection({
  sections,
  headerOffset = 0,
  className = "",
}: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [tabsH, setTabsH] = useState(0);
  const isProgrammaticScroll = useRef(false);

  const sectionRefs = useMemo(
    () =>
      sections.reduce<Record<string, HTMLElement | null>>((acc, s) => {
        acc[s.id] = null;
        return acc;
      }, {}),
    [sections.map((s) => s.id).join("|")]
  );

  useEffect(() => {
    const update = () => setTabsH(tabsRef.current?.offsetHeight ?? 0);
    update();
    const ro = new ResizeObserver(update);
    if (tabsRef.current) ro.observe(tabsRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    sections.forEach((s) => {
      sectionRefs[s.id] = document.getElementById(s.id);
    });
  }, [sections, sectionRefs]);

  useEffect(() => {
    const spyOffset = headerOffset + tabsH;
    let ticking = false;

    const getSentinelPositions = () =>
      Array.from(document.querySelectorAll<HTMLSpanElement>("[data-next]"))
        .map((el) => ({
          id: el.dataset.next!, // next section id
          top: el.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((a, b) => a.top - b.top);

    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;

        const positions = getSentinelPositions();
        const y = window.scrollY + spyOffset;

        let current = sections[0]?.id ?? "";
        for (let i = 0; i < positions.length; i++) {
          if (positions[i].top <= y) current = positions[i].id;
          else break;
        }

        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2
        ) {
          current = sections[sections.length - 1]?.id ?? current;
        }

        if (current && current !== activeId) setActiveId(current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll(); // initial
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections, headerOffset, tabsH, activeId]);
  const scrollToId = (id: string) => {
    const el = sectionRefs[id];
    if (!el) return;

    setActiveId(id);
    const offset = headerOffset + tabsH;
    const targetY = Math.max(el.offsetTop - offset + 4, 0); 

    isProgrammaticScroll.current = true;
    window.scrollTo({ top: targetY, behavior: "smooth" });

    const travel = Math.abs(window.scrollY - targetY);
    const duration = Math.min(1200, Math.max(400, travel * 0.6));
    setTimeout(() => {
      isProgrammaticScroll.current = false;
      window.dispatchEvent(new Event("scroll")); // resync
    }, duration + 20);
  };

  return (
    <section className={`w-full   ${className}`}>
      {/* Sticky Tabs */}
      <div
        ref={tabsRef}
        className="sticky z-40 bg-white/90 backdrop-blur border-b border-t border-gray-200 dark:bg-[#0b111a]"
        style={{ top: headerOffset }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <ul className="gap-8 overflow-x-auto no-scrollbar py-4 hidden  md:hidden lg:flex">
            {sections.map(({ id, title }, idx) => {
              const isActive = id === activeId;
              const number = String(idx + 1).padStart(2, "0");
              return (
                <li key={id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollToId(id)}
                    aria-current={isActive ? "page" : undefined}
                    className="relative group pb-1 text-left"
                  >
                    <div className="text-xs dark:text-[#f3a84f] text-gray-400  mb-1">
                      {number}
                    </div>
                    <div
                      className={`font-semibold text-xl ${
                        isActive
                          ? "text-[#333333] dark:text-[#f3a84f]"
                          : "text-gray-500 opacity-50 dark:text-white"
                      }`}
                    >
                      {title}
                    </div>
                    <span
                      className={`absolute left-0 right-0 -bottom-[16px] h-[2px] transition-colors ${
                        isActive
                          ? "bg-[#f3a84f] dark:bg-white"
                          : "bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sections + Dividers (with sentinels) */}
      <div className="pt-24 pb-24 dark:bg-[#1a2333f0]">
        {sections.map(({ id, title, content }, idx) => (
          <Fragment key={id}>
            <div
              id={id}
              className="mx-auto max-w-6xl px-4 pt-10 md:pt-14"
              style={{ scrollMarginTop: headerOffset + tabsH + 12 }}
            >
              <h2 className="text-md text-[#555555] font-bold dark:text-white">
                {title}
              </h2>
              <div className="mt-6">{content}</div>
            </div>

            {/* Divider BETWEEN sections only; sentinel at its bottom activates NEXT tab */}
            {idx < sections.length - 1 && (
              <div className="relative my-12 select-none pointer-events-none">
                <DividerLines />
                <span
                  data-next={sections[idx + 1].id}
                  className="absolute bottom-0 left-0 h-0 w-0"
                  aria-hidden
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- PAGE ------------------------------------ */
export default function Page() {
  return (
    <main className="min-h-screen">
      <ServicesTabsSection
        headerOffset={72}
        sections={[
          /* -------------------- Individuals & Families -------------------- */
          {
            id: "wealth",
            title: "Individuals and Families",
            content: (
              <>
                <header className="mb-10">
                  <p className="text-3xl tracking-[0.14em] dark:text-white text-[#333333]">
                    Wealth Protection for Individuals and Families
                  </p>
                  <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">
                    Impactful advice and extensive oversight for your entire
                    financial life.
                  </p>
                </header>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {(
                    [
                      {
                        name: "Wealth Management",
                        desc: "The financial lives of high-net-worth individuals are complicated. We understand the unique challenges you face and offer integrated planning solutions to grow, protect, and preserve your wealth across generations.",
                        Icon: ShieldCheck,
                      },
                      {
                        name: "Investment Solutions",
                        desc: "Investing is a long-term commitment to your financial well-being. It’s about growing and safeguarding your wealth. Our disciplined, goal-oriented approach ensures your portfolio remains resilient in the face of market and economic fluctuations.",
                        Icon: LineChart,
                      },
                      {
                        name: "Estate & Gift Planning",
                        desc: "Our sophisticated estate and wealth transfer strategies help you preserve your legacy while minimizing tax burdens. Every recommendation is tailored to your specific needs, leveraging our extensive knowledge of estate, trust, gift, and tax regulations.",
                        Icon: Gift,
                      },
                      {
                        name: "Financial Planning",
                        desc: "Relevant advice across life events with an advisor in your corner.",
                        Icon: Wallet,
                      },
                      {
                        name: "Insurance Planning & Risk Management",
                        desc: "Protect what you’ve built by addressing key risk exposures.",
                        Icon: Shield,
                      },
                      {
                        name: "Tax Planning & Preparation",
                        desc: "Personal, trust, and business tax strategies and projections.",
                        Icon: ReceiptText,
                      },
                      {
                        name: "Marital Financial Planning",
                        desc: "Navigate financial complexity around divorce with clarity and control.",
                        Icon: HeartHandshake,
                      },
                      {
                        name: "Cross-Border Financial Planning",
                        desc: "US & global tax/regulatory guidance for international lives.",
                        Icon: Globe2,
                      },
                      {
                        name: "Trust Services",
                        desc: "Fiduciary support focused on duty of care and loyalty.",
                        Icon: Scale,
                      },
                      {
                        name: "Women’s Wealth",
                        desc: "Comprehensive wealth management tailored to women’s needs.",
                        Icon: Venus,
                      },
                      {
                        name: "Business Owner Advisory",
                        desc: "Plan and execute ownership transitions for successful exits.",
                        Icon: Briefcase,
                      },
                      {
                        name: "Business Owner Financial Planning",
                        desc: "Specialized planning for owners of privately held businesses.",
                        Icon: HandCoins,
                      },
                      {
                        name: "Practice Owner Financial Planning",
                        desc: "Planning for medical, dental, legal, and other professional practices.",
                        Icon: Stethoscope,
                      },
                      {
                        name: "CFO & Accounting Services",
                        desc: "Decision support to streamline costs and drive outcomes.",
                        Icon: Calculator,
                      },
                      {
                        name: "Family Office",
                        desc: "A coordinated team dedicated to preserving and growing family prosperity.",
                        Icon: UsersRound,
                      },
                    ] as {
                      name: string;
                      desc: string;
                      Icon: ComponentType<IconProps>;
                    }[]
                  ).map(({ name, desc, Icon }, i) => (
                    <Card
                      key={i}
                      variant="gradient"
                      className="flex cursor-pointer flex-col items-start ${className} rounded-xl inner-none"
                    >
                      <div className="pl-2 lg:pl-0 md:pl-0">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-[#0b111a]">
                          <Icon className="h-5 w-5 text-[#f4a950]" />
                        </div>
                        <h3 className="font-semibold items-center text-lg">
                          {name}
                          <span className="ml-2">{">"}</span>
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-white">
                          {desc}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            ),
          },

          /* ----------------------------- Corporations ----------------------------- */
          {
            id: "corporations",
            title: "Corporations",
            content: (
              <>
                <header className="mb-10">
                  <h2 className="text-3xl tracking-[0.14em] dark:text-white text-[#333333]">
                    A Wealth of Financial Solutions for Every Employee
                  </h2>
                  <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">
                    We assist with all aspects of fund strategy, harmonizing
                    corporate objectives with investment strategies to ensure
                    meaningful impact.
                  </p>
                </header>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Executive Financial Counseling as a Corporate Benefit",
                      desc: "Help senior leaders realize executive benefit plans and boost ROI while improving retention.",
                      Icon: Briefcase,
                    },
                    {
                      name: "Beneficiary Financial Counseling",
                      desc: "Support beneficiaries navigating financial challenges after the death of a loved one.",
                      Icon: HeartHandshake,
                    },
                    {
                      name: "Executive Financial Counseling for Individuals & Families",
                      desc: "Serve as a personal CFO for executives to simplify and manage their growing wealth.",
                      Icon: UsersRound,
                    },
                    {
                      name: "Financial Wellness Coaching",
                      desc: "Reduce employee financial stress to improve morale, productivity, and focus at work.",
                      Icon: Brain,
                    },
                    {
                      name: "Retirement Plan Consulting",
                      desc: "Design and manage premier retirement plans aligned with company goals and employee needs.",
                      Icon: PiggyBank,
                    },
                    {
                      name: "Defined Contribution Services",
                      desc: "Optimize 401(k) and similar plans with fiduciary oversight and effectiveness reviews.",
                      Icon: Target,
                    },
                    {
                      name: "Nonqualified Plan Management",
                      desc: "Develop custom nonqualified plans that enhance recruitment, retention, and executive compensation.",
                      Icon: ClipboardList,
                    },
                    {
                      name: "The Cerity Partners Pooled Employer Plan",
                      desc: "Provide a retirement benefit that makes sense for employees and simplifies plan management for the company.",
                      Icon: Building,
                    },
                    {
                      name: "Employee Stock Ownership Plans",
                      desc: "Help implement and manage ESOPs for employee ownership and engagement.",
                      Icon: FileBarChart,
                    },
                    {
                      name: "Defined Benefit Plans",
                      desc: "Guide plan sponsors through active, frozen, or terminating defined benefit plans to mitigate risk and control costs.",
                      Icon: ShieldCheck,
                    },
                    {
                      name: "Corporate Venture Capital for Corporations",
                      desc: "Create a unique venture capital offering to drive innovation and strategic growth.",
                      Icon: Factory,
                    },
                    {
                      name: "Corporate Venture Capital for Entrepreneurs & Investors",
                      desc: "Connect startups with well-funded corporate partners for growth and new revenue.",
                      Icon: Rocket,
                    },
                  ].map(({ name, desc, Icon }, i) => (
                    <Card
                      key={i}
                      variant="gradient"
                      className="flex cursor-pointer flex-col items-start rounded-xl inner-none"
                    >
                      <div className="pl-2 lg:pl-0 md:pl-0">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-[#0b111a]">
                          <Icon className="h-5 w-5 text-[#f4a950]" />
                        </div>
                        <h3 className="font-semibold items-center text-lg">
                          {name}
                          <span className="ml-2">{">"}</span>
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-white">
                          {desc}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            ),
          },

          /* ------------------------------ Nonprofits ----------------------------- */
          {
            id: "nonprofits",
            title: "Nonprofits",
            content: (
              <>
                <header className="mb-10">
                  <h2 className="text-3xl tracking-[0.14em] dark:text-white text-[#333333]">
                    A Wealth of Financial Solutions for Nonprofit Organizations
                  </h2>
                  <p className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">
                    Impactful advice and extensive oversight for foundations,
                    endowments, and charities.
                  </p>
                </header>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Investment Advisory for Nonprofit Organizations",
                      desc: "Impactful advice and extensive oversight for foundations, endowments, and charities.",
                      Icon: HeartHandshake,
                    },
                    {
                      name: "Financial Administration",
                      desc: "An extension of your administrative team—organizing and executing the financial tasks needed to keep your vision thriving for generations.",
                      Icon: Landmark,
                    },
                    {
                      name: "Investment Consulting Services",
                      desc: "We work with your board to design and implement a comprehensive investment strategy aligned with mission, long-term goals, and cash-flow needs.",
                      Icon: MessageSquareText,
                    },
                    {
                      name: "Outsourced Chief Investment Office (OCIO)",
                      desc: "A cost-effective way to balance short-term operating needs with long-term funding—bringing expertise and infrastructure without the overhead.",
                      Icon: LineChart,
                    },
                  ].map(({ name, desc, Icon }, i) => (
                    <Card
                      key={i}
                      variant="gradient"
                      className="flex cursor-pointer flex-col items-start rounded-xl inner-none"
                    >
                      <div className="pl-2 lg:pl-0 md:pl-0">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center dark:bg-[#0b111a] rounded-xl bg-neutral-100 text-neutral-700">
                          <Icon className="h-5 w-5 text-[#f4a950]" />
                        </div>
                        <h3 className="font-semibold items-center text-lg">
                          {name}
                          <span className="ml-2">{">"}</span>
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600 dark:text-white">
                          {desc}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            ),
          },
        ]}
      />
    </main>
  );
}
