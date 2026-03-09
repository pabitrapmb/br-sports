"use client";

import { useState } from "react";
import Image from "next/image";

const sports = [
  { emoji: "🏸", name: "Badminton",     accent: "#22d3ee", image: null,          scheduleId: "event-badminton",     registrationOpen: true  },
  { emoji: "🏓", name: "Table Tennis",  accent: "#F0B429", image: null,          scheduleId: "event-table-tennis",  registrationOpen: true  },
  { emoji: "♟",  name: "Chess",         accent: "#a78bfa", image: null,          scheduleId: "event-chess",         registrationOpen: true  },
  { emoji: "🎱", name: "Carrom",        accent: "#f472b6", image: "/gallery/Sports/Carrom.jpg", scheduleId: "event-carrom", registrationOpen: true },
  { emoji: "🏏", name: "Cricket",       accent: "#ef4444", image: null,          scheduleId: "event-cricket",       registrationOpen: false },
  { emoji: "⚽", name: "Football",      accent: "#22c55e", image: null,          scheduleId: "event-football",      registrationOpen: false },
  { emoji: "🚴", name: "Cycling",       accent: "#60a5fa", image: null,          scheduleId: "event-cycling",       registrationOpen: false },
  { emoji: "🏃", name: "Mini Marathon", accent: "#4ade80", image: null,          scheduleId: "event-mini-marathon", registrationOpen: false },
  { emoji: "🥏", name: "Pickleball",    accent: "#fb923c", image: null,          scheduleId: "event-pickleball",    registrationOpen: false },
];

export default function Sports() {
  const [hoveredOpen, setHoveredOpen] = useState<number | null>(null);
  const [hoveredTbd,  setHoveredTbd]  = useState<number | null>(null);

  const handleClick = (scheduleId: string) => {
    const el = document.getElementById(scheduleId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => (el.querySelector("button") as HTMLButtonElement)?.click(), 600);
    } else {
      const section = document.getElementById("schedule");
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const registrationOpen = sports.filter((s) => s.registrationOpen);
  const detailsTbd       = sports.filter((s) => !s.registrationOpen);

  return (
    <section id="sports" className="relative py-24 px-6 bg-[#0a1628] overflow-hidden">

      {/* Subtle depth glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px]
                      bg-[#0057B7]/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px]
                      bg-[#F0B429]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#F0B429] mb-3">
          Season 3 Lineup
        </p>
        <h2 className="font-barlow font-black text-white text-center uppercase
                       text-[clamp(2.2rem,6vw,3.5rem)] tracking-wide mb-4">
          Sports &amp; Activities
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto mb-5"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-white/40 text-center text-sm mb-14">
          Click any sport to jump straight to its schedule &amp; registration
        </p>

        {/* Registration open divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="relative flex-shrink-0 w-2 h-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#16a34a]"
                    style={{ color: "#16a34a" }} />
              <span className="relative w-2 h-2 rounded-full bg-[#16a34a] block" />
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#4ade80] whitespace-nowrap">
              Registration Open
            </p>
          </div>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Registration-open cards — white on dark for maximum pop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {registrationOpen.map((s, i) => (
            <button
              key={s.name}
              onClick={() => handleClick(s.scheduleId)}
              onMouseEnter={() => setHoveredOpen(i)}
              onMouseLeave={() => setHoveredOpen(null)}
              className="group relative rounded-2xl p-6 text-center bg-white
                         shadow-[0_4px_20px_rgba(0,0,0,0.30)]
                         hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                         hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              style={{
                border: hoveredOpen === i
                  ? `1.5px solid ${s.accent}70`
                  : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                   style={{ background: s.accent }} />

              {/* OPEN badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-[1.5px]"
                   style={{ background: "#16a34a15", color: "#16a34a", border: "1px solid #16a34a30" }}>
                <span className="relative flex-shrink-0 w-1.5 h-1.5">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#16a34a]"
                        style={{ color: "#16a34a" }} />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-[#16a34a] block" />
                </span>
                Open
              </div>

              {s.image ? (
                <div className="w-14 h-14 mx-auto mb-3">
                  <Image src={s.image} alt={s.name} width={56} height={56}
                    className="w-full h-full object-contain rounded-xl" />
                </div>
              ) : (
                <span className="text-5xl mb-3 block">{s.emoji}</span>
              )}
              <p className="font-barlow font-bold text-slate-800 text-base uppercase tracking-wide">
                {s.name}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-2 opacity-0
                            group-hover:opacity-100 transition-opacity duration-200"
                 style={{ color: s.accent }}>
                View Schedule →
              </p>
            </button>
          ))}
        </div>

        {/* Details TBD divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-white/30 whitespace-nowrap">
            Details TBD
          </p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* TBD cards — dark glass */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {detailsTbd.map((s, i) => (
            <button
              key={s.name}
              onClick={() => handleClick(s.scheduleId)}
              onMouseEnter={() => setHoveredTbd(i)}
              onMouseLeave={() => setHoveredTbd(null)}
              className="group rounded-2xl p-5 text-center
                         transition-all duration-200 hover:-translate-y-1"
              style={{
                background: hoveredTbd === i ? `${s.accent}0d` : "rgba(255,255,255,0.04)",
                border: hoveredTbd === i
                  ? `1.5px solid ${s.accent}45`
                  : "1.5px dashed rgba(255,255,255,0.12)",
              }}
            >
              <span className="text-4xl mb-2.5 block opacity-45 group-hover:opacity-90 transition-opacity">
                {s.emoji}
              </span>
              <p className="font-semibold text-white/40 text-xs uppercase tracking-wide group-hover:text-white/80 transition-colors">
                {s.name}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider mt-1.5 text-white/20 group-hover:text-white/35 transition-colors">
                Date TBD
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
