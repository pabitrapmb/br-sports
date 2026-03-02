"use client";

const sports = [
  { emoji: "🏏", name: "Cricket",       accent: "#2dc653" },
  { emoji: "⚽", name: "Football",      accent: "#e63946" },
  { emoji: "♟",  name: "Chess",         accent: "#f5a623" },
  { emoji: "🎯", name: "Carrom",        accent: "#7b2d8b" },
  { emoji: "🏸", name: "Badminton",     accent: "#00b4d8" },
  { emoji: "🏓", name: "Table Tennis",  accent: "#ff6b35" },
  { emoji: "🚴", name: "Cycling",       accent: "#3a86ff" },
  { emoji: "🏃", name: "Mini Marathon", accent: "#2dc653" },
  { emoji: "🥏", name: "Pickleball",    accent: "#f5a623" },
];

export default function Sports() {
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
        9 exciting sports for every passion and skill level
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {sports.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl p-8 text-center border border-white/[0.08] relative overflow-hidden
                       transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] cursor-default"
            style={{
              boxShadow: "none",
            }}
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
              style={{
                background: `radial-gradient(circle at top, ${s.accent}, transparent 70%)`,
              }}
            />
            <span className="text-5xl mb-4 block relative z-10">{s.emoji}</span>
            <p className="font-bold text-sm text-white relative z-10">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
