"use client";

import { useEffect, useMemo, useRef, useState, Fragment, ComponentType } from "react";
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

/* ---------------------------- Divider decoration ---------------------------- */
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
        <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="currentColor" strokeWidth="4" />
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

/* ------------------------------ Tabs + Sections ----------------------------- */
function ServicesTabsSection({ sections, headerOffset = 0, className = "" }: Props) {
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
    let ro: ResizeObserver | null = null;
    if (typeof window !== "undefined" && "ResizeObserver" in window && tabsRef.current) {
      ro = new ResizeObserver(update);
      ro.observe(tabsRef.current);
    }
    window.addEventListener("resize", update);
    return () => {
      ro?.disconnect();
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
        .map((el) => ({ id: el.dataset.next!, top: el.getBoundingClientRect().top + window.scrollY }))
        .sort((a, b) => a.top - b.top);

    const onScroll = () => {
      if (isProgrammaticScroll.current || ticking) return;
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
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
          current = sections[sections.length - 1]?.id ?? current;
        }
        if (current && current !== activeId) setActiveId(current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
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
    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
      window.dispatchEvent(new Event("scroll"));
    }, duration + 20);
  };

  return (
    <section className={`w-full ${className}`}>
      {/* Sticky Tabs */}
      <div
        ref={tabsRef}
        className="sticky z-40 bg-white/90 backdrop-blur border-b border-t border-gray-200 dark:bg-[#0b111a]/90"
        style={{ top: headerOffset }}
      >
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <ul
            className="flex gap-3 sm:gap-8 overflow-x-auto no-scrollbar py-3 sm:py-4 scroll-px-3 sm:scroll-px-4 snap-x snap-mandatory"
            aria-label="Services tabs"
          >
            {sections.map(({ id, title }, idx) => {
              const isActive = id === activeId;
              const number = String(idx + 1).padStart(2, "0");
              return (
                <li key={id} className="shrink-0 snap-start">
                  <button
                    type="button"
                    onClick={() => scrollToId(id)}
                    aria-current={isActive ? "page" : undefined}
                    className="relative group pb-1 text-left"
                  >
                    <div className="text-[10px] sm:text-xs dark:text-[#f3a84f] text-[#f3a84f] mb-0.5 sm:mb-1">
                      {number}
                    </div>
                    <div
                      className={`font-semibold text-[14px] text-base sm:text-lg ${
                        isActive ? "text-[#f3a84f] dark:text-[#f3a84f]" : "text-[#555555]/80 dark:text-white/70"
                      }`}
                    >
                      {title}
                    </div>
                    <span
                      className={`absolute left-0 right-0 -bottom-[14px] h-[2px] transition-colors ${
                        isActive ? "bg-[#f3a84f] dark:bg-white" : "bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Sections */}
      <div className="pt-16 sm:pt-20 pb-20 dark:bg-[#1a2333f0]">
        {sections.map(({ id, title, content }, idx) => (
          <Fragment key={id}>
            <div id={id} className="mx-auto max-w-6xl px-3 sm:px-4 pt-8 sm:pt-10 md:pt-14" style={{ scrollMarginTop: headerOffset + tabsH + 12 }}>
              <h2 className="text-sm sm:text-base text-[#555555] font-bold dark:text-white">{title}</h2>
              <div className="mt-4 sm:mt-6">{content}</div>
            </div>

            {idx < sections.length - 1 && (
              <div className="relative my-10 sm:my-12 select-none pointer-events-none">
                <DividerLines />
                <span data-next={sections[idx + 1].id} className="absolute bottom-0 left-0 h-0 w-0" aria-hidden />
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
            title: "Individuals & Families",
            content: (
              <>
                <header className="mb-8 sm:mb-10">
                  <p className="text-2xl sm:text-3xl tracking-[0.08em] sm:tracking-[0.14em] dark:text-[#f4a950] text-[#f4a950]">
                    Tax-Advantaged Wealth Protection & Growth
                  </p>
                  <p className="mt-3 sm:mt-4 max-w-3xl text-[#555555] dark:text-white">
                    Planning that prioritizes downside protection, dependable income, and multigenerational outcomes—so your money
                    works harder through every cycle.
                  </p>
                </header>

                <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {(
                    [
                      {
                        name: "Fixed Indexed Annuities (FIAs)",
                        desc: "Participate in market-linked growth (caps/participation apply) while protecting principal from market losses; optional riders for lifetime income.",
                        Icon: ShieldCheck,
                      },
                      {
                        name: "Portfolio Construction",
                        desc: "Goals-based allocation that blends protected accumulation with growth—built to manage sequence-of-returns risk and longevity needs.",
                        Icon: LineChart,
                      },
                      {
                        name: "Estate & Wealth Transfer",
                        desc: "Beneficiary designations, trusts, and gifting strategies coordinated to help pass more to heirs, tax-aware.",
                        Icon: Gift,
                      },
                      {
                        name: "Comprehensive Financial Planning",
                        desc: "Cash-flow, goals, education, risk, insurance, and retirement modeled into a single, actionable plan.",
                        Icon: Wallet,
                      },
                      {
                        name: "Risk Management & Insurance",
                        desc: "Right-sizing coverage for life, disability, long-term care, and liability to protect what you’ve built.",
                        Icon: Shield,
                      },
                      {
                        name: "Tax Planning Coordination",
                        desc: "Projections and strategy reviews in collaboration with your CPA; we do not provide tax advice.",
                        Icon: ReceiptText,
                      },
                      {
                        name: "Life Events & Transitions",
                        desc: "Clarity around marriage, divorce, inheritance, liquidity events, and relocation—before decisions lock in.",
                        Icon: HeartHandshake,
                      },
                      {
                        name: "Cross-Border Considerations",
                        desc: "Guidance on US/international complexities; coordinate with legal and tax counsel for compliant structures.",
                        Icon: Globe2,
                      },
                      {
                        name: "Trust & Fiduciary Alignment",
                        desc: "Investment and beneficiary intent aligned with duty of care and loyalty; liaison with trustees and counsel.",
                        Icon: Scale,
                      },
                      {
                        name: "Women & Wealth",
                        desc: "Planning that reflects career arcs, caregiving, longevity, and purpose—on your timeline.",
                        Icon: Venus,
                      },
                      {
                        name: "Entrepreneur Households",
                        desc: "Income variability, liquidity timing, and asset protection integrated into the family plan.",
                        Icon: Briefcase,
                      },
                      {
                        name: "Family Banking (IBC-style)",
                        desc: "Properly structured cash-value policies for liquidity, opportunity funding, and intergenerational control.",
                        Icon: HandCoins,
                      },
                      {
                        name: "Professionals & Practice Owners",
                        desc: "Coordinated planning for medical, dental, legal, and other practices—entity structure through exit.",
                        Icon: Stethoscope,
                      },
                      {
                        name: "Personal CFO & Accounting",
                        desc: "Bill-pay, bookkeeping coordination, and decision support where complexity demands it.",
                        Icon: Calculator,
                      },
                      {
                        name: "Family Office Lite",
                        desc: "A coordinated team and process for families who want multi-asset oversight without full family office overhead.",
                        Icon: UsersRound,
                      },
                    ] as { name: string; desc: string; Icon: ComponentType<IconProps> }[]
                  ).map(({ name, desc, Icon }, i) => (
                    <Card key={i} variant="gradient" className="flex cursor-pointer flex-col items-start rounded-xl inner-none">
                      <div className="pl-2 lg:pl-0 md:pl-0">
                        <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-[#0b111a]">
                          <Icon className="h-5 w-5 text-[#f4a950]" />
                        </div>
                        <h3 className="font-semibold items-center text-base sm:text-lg">
                          {name}
                          
                        </h3>
                        <p className="mt-2 text-sm text-neutral-700 dark:text-white">{desc}</p>
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
            title: "Business Owners & Corporations",
            content: (
              <>
                <header className="mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl tracking-[0.08em] sm:tracking-[0.14em] font-semibold dark:text-[#f4a950] text-[#f4a950]">
                    Owner-Focused Planning from Build to Exit
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-3xl text-[#555555] dark:text-white">
                    Pre- and post-liquidity strategies that align enterprise goals with your personal plan—income, taxes, asset protection,
                    and legacy.
                  </p>
                </header>

                <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Executive/Owner Financial Counseling",
                      desc: "Personal CFO approach for founders and executives: simplify decisions, model trade-offs, and keep focus on value creation.",
                      Icon: Briefcase,
                    },
                    {
                      name: "Beneficiary & Survivor Counseling",
                      desc: "Support families and key staff navigating financial steps after a loss; coordination with counsel and HR.",
                      Icon: HeartHandshake,
                    },
                    {
                      name: "Compensation & Equity Strategy",
                      desc: "ISOs/NSOs/RSUs, 83(b) elections, and liquidity timing integrated with your broader plan.",
                      Icon: UsersRound,
                    },
                    {
                      name: "Financial Wellness for Teams",
                      desc: "Reduce money stress with coaching that improves morale and retention—customized to your benefits stack.",
                      Icon: Brain,
                    },
                    {
                      name: "Qualified Plan Consulting",
                      desc: "Design and monitor 401(k)/403(b) to fit cash-flow, match policy, and fiduciary oversight.",
                      Icon: PiggyBank,
                    },
                    {
                      name: "Defined Contribution Oversight",
                      desc: "Investment menus, fee reviews, QDIA selection, and participant education with measurable outcomes.",
                      Icon: Target,
                    },
                    {
                      name: "Nonqualified & Deferred Comp",
                      desc: "Custom NQDC design for recruiting, retention, and tax-timing advantages for key talent.",
                      Icon: ClipboardList,
                    },
                    {
                      name: "PEO/MEP/PEP Evaluations",
                      desc: "Right-size admin complexity with pooled/employer plan analysis; align with growth stage.",
                      Icon: Building,
                    },
                    {
                      name: "ESOP Feasibility & Ongoing",
                      desc: "Assess, implement, and monitor ESOPs to drive engagement and succession goals.",
                      Icon: FileBarChart,
                    },
                    {
                      name: "Defined Benefit De-Risking",
                      desc: "Mitigate DB plan risk—investment policy, glidepaths, and termination strategies.",
                      Icon: ShieldCheck,
                    },
                    {
                      name: "Corporate Liquidity & Reserves",
                      desc: "Protected reserve and treasury solutions to stabilize operating risk and fund growth.",
                      Icon: Factory,
                    },
                    {
                      name: "Exit & Post-Sale Design",
                      desc: "Valuation prep, tax-aware proceeds planning, and pension-like income solutions after the deal.",
                      Icon: Rocket,
                    },
                  ].map(({ name, desc, Icon }, i) => (
                    <Card key={i} variant="gradient" className="flex cursor-pointer flex-col items-start rounded-xl inner-none">
                      <div className="pl-2 lg:pl-0 md:pl-0">
                        <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-[#0b111a]">
                          <Icon className="h-5 w-5 text-[#f4a950]" />
                        </div>
                        <h3 className="font-semibold items-center text-base sm:text-lg">
                          {name}
                          
                        </h3>
                        <p className="mt-2 text-sm text-neutral-700 dark:text-white">{desc}</p>
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
            title: "Foundations & Nonprofits",
            content: (
              <>
                <header className="mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.08em] sm:tracking-[0.14em] dark:text-[#f4a950] text-[#f4a950]">
                    Mission-Aligned Investment & Oversight
                  </h2>
                  <p className="mt-3 sm:mt-4 max-w-3xl text-[#555555] dark:text-white">
                    Policy, process, and portfolios tailored to spending needs and fiduciary duty—delivered with clear governance and reporting.
                  </p>
                </header>

                <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Nonprofit Investment Advisory",
                      desc: "OCIO-style oversight or consultative support for endowments, foundations, and charities.",
                      Icon: HeartHandshake,
                    },
                    {
                      name: "Financial Administration",
                      desc: "Augment staff capacity—process gifts, track restrictions, and manage payouts in line with policy.",
                      Icon: Landmark,
                    },
                    {
                      name: "Board Education & Consulting",
                      desc: "IPS design, spending policy, risk budgeting, and committee facilitation to align stakeholders.",
                      Icon: MessageSquareText,
                    },
                    {
                      name: "OCIO & Manager Research",
                      desc: "Scale with an outsourced team for asset allocation, manager selection, and continuous monitoring.",
                      Icon: LineChart,
                    },
                  ].map(({ name, desc, Icon }, i) => (
                    <Card key={i} variant="gradient" className="flex cursor-pointer flex-col items-start rounded-xl inner-none">
                      <div className="pl-2 lg:pl-0 md:pl-0">
                        <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-[#0b111a]">
                          <Icon className="h-5 w-5 text-[#f4a950]" />
                        </div>
                        <h3 className="font-semibold items-center text-base sm:text-lg">
                          {name}
                          
                        </h3>
                        <p className="mt-2 text-sm text-neutral-700 dark:text-white">{desc}</p>
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
