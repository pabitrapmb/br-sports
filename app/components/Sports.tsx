"use client";

import Image from "next/image";

const sports = [
  { emoji: "🏏", name: "Cricket",       accent: "#ef4444", image: null,          scheduleId: null },
  { emoji: "⚽", name: "Football",      accent: "#22c55e", image: null,          scheduleId: null },
  { emoji: "🏸", name: "Badminton",     accent: "#22d3ee", image: null,          scheduleId: "event-badminton" },
  { emoji: "🏓", name: "Table Tennis",  accent: "#F0B429", image: null,          scheduleId: "event-table-tennis" },
  { emoji: "♟",  name: "Chess",         accent: "#a78bfa", image: null,          scheduleId: "event-chess" },
  { emoji: "🎱", name: "Carrom",        accent: "#f472b6", image: "/gallery/Sports/Carrom.jpg", scheduleId: "event-carrom" },
  { emoji: "🚴", name: "Cycling",       accent: "#60a5fa", image: null,          scheduleId: null },
  { emoji: "🏃", name: "Mini Marathon", accent: "#4ade80", image: null,          scheduleId: null },
  { emoji: "🥏", name: "Pickleball",    accent: "#fb923c", image: null,          scheduleId: null },
];

export default function Sports() {

  const handleClick = (scheduleId: string | null) => {
    if (scheduleId) {
      const el = document.getElementById(scheduleId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        setTimeout(() => (el.querySelector("button") as HTMLButtonElement)?.click(), 600);
      }
    } else {
      const el = document.getElementById("schedule");
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const confirmed = sports.filter((s) => s.scheduleId !== null);
  const comingSoon = sports.filter((s) => s.scheduleId === null);

  return (
    <section id="sports" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#F0B429] mb-3">
          Season 3 Lineup
        </p>
        <h2 className="font-barlow font-black text-white text-center uppercase
                       text-[clamp(2.2rem,6vw,3.5rem)] tracking-wide mb-4">
          Sports &amp; Activities
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-5"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-gray-400 text-center text-sm mb-14">
          Click any sport to jump straight to its schedule &amp; registration
        </p>

        {/* Confirmed sports */}
        <p className="text-xs font-bold uppercase tracking-[3px] text-[#0057B7] mb-4 text-center">
          Registration Open
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {confirmed.map((s) => (
            <button
              key={s.name}
              onClick={() => handleClick(s.scheduleId)}
              className="group relative rounded-2xl p-6 text-center border border-white/10
                         bg-[#080808] hover:border-transparent transition-all duration-250
                         hover:-translate-y-1.5 overflow-hidden"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${s.accent}30, 0 0 0 1px ${s.accent}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(0,0,0,0)";
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0
                              group-hover:opacity-100 transition-opacity duration-200"
                   style={{ background: s.accent }} />

              {/* Icon */}
              {s.image ? (
                <div className="w-14 h-14 mx-auto mb-3">
                  <Image src={s.image} alt={s.name} width={56} height={56}
                    className="w-full h-full object-contain rounded-xl" />
                </div>
              ) : (
                <span className="text-5xl mb-3 block">{s.emoji}</span>
              )}

              <p className="font-barlow font-bold text-white text-base uppercase tracking-wide">
                {s.name}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-1.5 opacity-0
                            group-hover:opacity-100 transition-opacity duration-200"
                 style={{ color: s.accent }}>
                View Schedule →
              </p>
            </button>
          ))}
        </div>

        {/* Coming soon */}
        <p className="text-xs font-bold uppercase tracking-[3px] text-gray-500 mb-4 text-center">
          Coming Soon
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {comingSoon.map((s) => (
            <button
              key={s.name}
              onClick={() => handleClick(s.scheduleId)}
              className="group rounded-2xl p-5 text-center border border-dashed border-white/10
                         bg-[#080808]/60 hover:border-white/25 transition-all duration-200"
            >
              <span className="text-4xl mb-2.5 block opacity-60 group-hover:opacity-100 transition-opacity">
                {s.emoji}
              </span>
              <p className="font-semibold text-gray-400 text-xs uppercase tracking-wide group-hover:text-white transition-colors">
                {s.name}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider mt-1.5 text-gray-600">
                Coming Soon
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
