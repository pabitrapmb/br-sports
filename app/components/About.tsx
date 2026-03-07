"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const cards = [
  {
    icon: "🤝",
    title: "Camaraderie",
    desc: "More than competition — it's about building bonds and friendships within our Blue Ridge community.",
    color: "#0057B7",
  },
  {
    icon: "🏅",
    title: "Sportsmanship",
    desc: "Celebrate fair play, cheer for one another, and create unforgettable sporting memories together.",
    color: "#F0B429",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "All Age Groups",
    desc: "Sports and activities designed to bring together residents of every age — young and old alike.",
    color: "#22c55e",
  },
  {
    icon: "💪",
    title: "Healthy Living",
    desc: "Promoting fitness, teamwork, and an active lifestyle for every resident of Blue Ridge.",
    color: "#ef4444",
  },
];

const stats = [
  { num: "9",    suffix: "",  label: "Sports",       color: "#0057B7" },
  { num: "3rd",  suffix: "",  label: "Season",       color: "#F0B429", noCount: true },
  { num: "500",  suffix: "+", label: "Participants", color: "#22c55e" },
  { num: "2026", suffix: "",  label: "Year",         color: "#ef4444", noCount: true },
];

/* ── Scroll-reveal hook ──────────────────────────────────────────── */
function useInView(threshold = 0.3) {
  const ref     = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSeen(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, seen };
}

/* ── Count-up stat card ──────────────────────────────────────────── */
function StatCard({
  num, suffix, label, color, noCount, delay,
}: {
  num: string; suffix: string; label: string; color: string;
  noCount?: boolean; delay: number;
}) {
  const { ref, seen } = useInView(0.35);
  const [displayed, setDisplayed] = useState("0" + suffix);

  const runCountUp = useCallback(() => {
    const target   = parseInt(num, 10);
    const duration = 1100;
    const steps    = 36;
    const stepMs   = duration / steps;
    let step       = 0;

    const id = setInterval(() => {
      step++;
      const val = Math.round((target * step) / steps);
      if (step >= steps) {
        setDisplayed(num + suffix);
        clearInterval(id);
      } else {
        setDisplayed(val + suffix);
      }
    }, stepMs);

    return () => clearInterval(id);
  }, [num, suffix]);

  useEffect(() => {
    if (!seen) return;
    if (noCount) {
      const t = setTimeout(() => setDisplayed(num + suffix), delay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(runCountUp, delay);
    return () => clearTimeout(t);
  }, [seen, noCount, num, suffix, delay, runCountUp]);

  return (
    <div
      ref={ref}
      style={{
        opacity:    seen ? 1 : 0,
        transform:  seen ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      <div className="relative rounded-2xl p-6 text-center overflow-hidden bg-white
                      border border-slate-100
                      shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
                      hover:-translate-y-1 transition-all duration-300 group">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
             style={{ background: color }} />

        <p className="font-barlow font-black leading-none mb-1.5
                      transition-transform duration-300 group-hover:scale-105"
           style={{ fontSize: "clamp(2rem,5vw,2.8rem)", color }}>
          {seen ? (num + suffix) : displayed}
        </p>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[3px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px
                      bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none" />

      {/* Ghost logo — large centered watermark behind stats & cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/BRPPL_BG_HiRes.jpg"
          alt=""
          aria-hidden="true"
          className="w-[600px] max-w-[80vw] object-contain"
          style={{
            opacity: 0.045,
            filter: "grayscale(60%) contrast(0.9)",
            transform: "translateY(8%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          About the Event
        </p>

        {/* Headline */}
        <h2 className="font-barlow font-black text-slate-900 text-center
                       text-[clamp(2.2rem,6vw,3.5rem)] uppercase tracking-wide mb-4">
          Games Event – Season 3
        </h2>

        {/* Accent line */}
        <div className="w-16 h-1 rounded-full mx-auto mb-6"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />

        {/* Description */}
        <p className="text-slate-500 text-center max-w-2xl mx-auto leading-relaxed text-sm mb-14">
          With immense excitement and community spirit, we proudly introduce{" "}
          <strong className="text-slate-800 font-semibold">Games Event – Season 3</strong> at Blue Ridge!
          After the tremendous success of the previous seasons, we&apos;re back — bigger, better,
          and more energetic than ever.
        </p>

        {/* Stats — with count-up on scroll */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              num={s.num}
              suffix={s.suffix}
              label={s.label}
              color={s.color}
              noCount={s.noCount}
              delay={i * 90}
            />
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c) => (
            <div key={c.title}
                 className="relative rounded-2xl p-7 overflow-hidden bg-white
                            border border-slate-100
                            shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                            hover:shadow-[0_8px_28px_rgba(0,0,0,0.10)]
                            hover:-translate-y-1 transition-all duration-300 group">

              {/* Top accent strip */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                   style={{ background: c.color }} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5
                              transition-all duration-300 group-hover:scale-110"
                   style={{ background: c.color + "15" }}>
                {c.icon}
              </div>

              <h3 className="font-barlow font-bold text-slate-900 text-xl uppercase tracking-wide mb-2">
                {c.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
