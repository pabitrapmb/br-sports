"use client";

const sportGroups = [
  {
    sport: "Badminton",
    emoji: "🏸",
    color: "#22d3ee",
    coordinators: [
      { name: "Soham",    phone: "97555 52414" },
      { name: "Prashant", phone: "91600 55003" },
    ],
  },
  {
    sport: "Table Tennis",
    emoji: "🏓",
    color: "#F0B429",
    coordinators: [
      { name: "Prashant", phone: "91600 55003" },
      { name: "Soham",    phone: "97555 52414" },
    ],
  },
  {
    sport: "Chess",
    emoji: "♟",
    color: "#a78bfa",
    coordinators: [
      { name: "Manoj",   phone: "97730 22017" },
      { name: "Bhaskar", phone: "77200 32006" },
    ],
  },
  {
    sport: "Carrom",
    emoji: "🎱",
    color: "#f472b6",
    coordinators: [
      { name: "Manoj",   phone: "97730 22017" },
      { name: "Bhaskar", phone: "77200 32006" },
    ],
  },
  {
    sport: "Cricket",
    emoji: "🏏",
    color: "#ef4444",
    coordinators: [
      { name: "Rohan", phone: "99607 59184" },
      { name: "Upen",  phone: "99750 83121" },
    ],
  },
  {
    sport: "Football",
    emoji: "⚽",
    color: "#22c55e",
    coordinators: [
      { name: "Jitendra", phone: "70309 36272" },
      { name: "Chanchal", phone: "80870 50514" },
    ],
  },
  {
    sport: "Cycling",
    emoji: "🚴",
    color: "#60a5fa",
    coordinators: [
      { name: "Satilal", phone: "99224 59784" },
    ],
  },
  {
    sport: "Mini Marathon",
    emoji: "🏃",
    color: "#4ade80",
    coordinators: [
      { name: "Abhishek", phone: "99308 44415" },
    ],
  },
  {
    sport: "BR Legends Cricket",
    emoji: "🏏",
    color: "#3a86ff",
    coordinators: [
      { name: "Pabitra", phone: "98810 91733" },
      { name: "Manoj",   phone: "97730 22017" },
    ],
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">

      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px]
                      bg-[#0057B7]/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <p className="text-center text-[10px] font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          Need Help?
        </p>
        <h2 className="font-barlow font-black text-white text-center uppercase
                       text-[clamp(1.8rem,5vw,2.8rem)] tracking-wide mb-3">
          Coordinators
        </h2>
        <div className="w-12 h-1 rounded-full mx-auto mb-4"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-gray-600 text-center text-sm mb-12 max-w-md mx-auto">
          Reach out to your sport coordinator for registration, queries, or event info.
        </p>

        {/* Sport rows */}
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {sportGroups.map((group, i) => (
            <div
              key={i}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6
                         py-4 px-1 transition-colors duration-200 hover:bg-white/[0.02]
                         first:rounded-t-xl last:rounded-b-xl"
            >
              {/* Sport label */}
              <div className="flex items-center gap-2.5 sm:w-44 shrink-0">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
                  style={{ background: group.color + "15" }}
                >
                  {group.emoji}
                </span>
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{ color: group.color }}
                >
                  {group.sport}
                </span>
              </div>

              {/* Coordinator chips */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.coordinators.map((c, j) => (
                  <a
                    key={j}
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    aria-label={`Call ${c.name} for ${group.sport}`}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl
                               border border-white/[0.09] hover:border-white/[0.2]
                               transition-all duration-200 hover:bg-white/[0.05]
                               active:scale-[0.97] group/chip"
                  >
                    {/* Avatar */}
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center
                                 text-[10px] font-black shrink-0"
                      style={{
                        background: group.color + "20",
                        color: group.color,
                      }}
                    >
                      {c.name[0]}
                    </span>

                    {/* Name + phone */}
                    <span className="text-xs text-white/80 font-medium">{c.name}</span>
                    <span className="text-white/20 text-[10px]">·</span>
                    <span className="text-[11px] text-white/35 tabular-nums">
                      {c.phone}
                    </span>

                    {/* Phone icon — shown on chip hover */}
                    <svg
                      width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                      className="opacity-0 group-hover/chip:opacity-100 transition-opacity"
                      style={{ color: group.color }}
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5
                               19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012
                               1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0
                               006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122
                               14.92z"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[11px] text-white/20 mt-8">
          Tap any name to call directly
        </p>
      </div>
    </section>
  );
}
