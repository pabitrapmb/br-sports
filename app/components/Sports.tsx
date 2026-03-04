"use client";

import Image from "next/image";

// scheduleId must match the id set on the EventCard in Schedule.tsx
// null means "coming soon" — clicking shows a toast instead
const sports = [
  { emoji: "🏏", name: "Cricket",       accent: "#2dc653", image: null,           scheduleId: null },
  { emoji: "⚽", name: "Football",      accent: "#e63946", image: null,           scheduleId: null },
  { emoji: "♟",  name: "Chess",         accent: "#f5a623", image: null,           scheduleId: "event-chess" },
  { emoji: "🎱", name: "Carrom",        accent: "#7b2d8b", image: "/gallery/Sports/Carrom.jpg",  scheduleId: "event-carrom" },
  { emoji: "🏸", name: "Badminton",     accent: "#00b4d8", image: null,           scheduleId: "event-badminton" },
  { emoji: "🏓", name: "Table Tennis",  accent: "#ff6b35", image: null,           scheduleId: "event-table-tennis" },
  { emoji: "🚴", name: "Cycling",       accent: "#3a86ff", image: null,           scheduleId: null },
  { emoji: "🏃", name: "Mini Marathon", accent: "#2dc653", image: null,           scheduleId: null },
  { emoji: "🥏", name: "Pickleball",    accent: "#f5a623", image: null,           scheduleId: null },
];

export default function Sports() {

  const handleClick = (scheduleId: string | null) => {
    if (scheduleId) {
      // Scroll to the specific event card and trigger it to open
      const el = document.getElementById(scheduleId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        // Auto-open the card after scrolling
        setTimeout(() => el.querySelector("button")?.click(), 600);
      }
    } else {
      // Coming soon — scroll to schedule section
      const el = document.getElementById("schedule");
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="sports" className="py-24 px-6 bg-[#0b0b1e]">
      <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#f5a623] mb-2">
        This Season&apos;s Lineup
      </p>
      <h2 className="font-bebas gradient-text-white-gold text-center text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
        Sports &amp; Activities
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-[#f5a623] to-red-500 rounded-full mx-auto mb-5" />
      <p className="text-gray-400 text-center text-sm mb-14">
        Click any sport to view its schedule &amp; details
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {sports.map((s) => (
          <div
            key={s.name}
            onClick={() => handleClick(s.scheduleId)}
            className="rounded-2xl p-8 text-center border border-white/[0.08] relative overflow-hidden
                       transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer group"
            style={{ boxShadow: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = s.accent;
              (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 50px rgba(0,0,0,.5)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Glow overlay */}
            <div
              className="absolute inset-0 opacity-[0.08] rounded-2xl pointer-events-none"
              style={{ background: `radial-gradient(circle at top, ${s.accent}, transparent 70%)` }}
            />

            {s.image ? (
              <div className="w-14 h-14 mx-auto mb-4 relative z-10">
                <Image src={s.image} alt={s.name} width={56} height={56}
                  className="w-full h-full object-contain rounded-xl" />
              </div>
            ) : (
              <span className="text-5xl mb-4 block relative z-10">{s.emoji}</span>
            )}

            <p className="font-bold text-sm text-white relative z-10">{s.name}</p>

            {/* Confirmed badge */}
            {s.scheduleId ? (
              <p className="text-[9px] font-bold uppercase tracking-widest mt-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ color: s.accent }}>
                View Schedule →
              </p>
            ) : (
              <p className="text-[9px] font-bold uppercase tracking-widest mt-2 relative z-10 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Coming Soon
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
