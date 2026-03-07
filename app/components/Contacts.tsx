"use client";

const contacts = [
  { sport: "Badminton",          name: "Soham",    phone: "97555 52414", color: "#22d3ee" },
  { sport: "Badminton",          name: "Prashant", phone: "91600 55003", color: "#22d3ee" },
  { sport: "Table Tennis",       name: "Prashant", phone: "91600 55003", color: "#F0B429" },
  { sport: "Table Tennis",       name: "Soham",    phone: "97555 52414", color: "#F0B429" },
  { sport: "Chess",              name: "Manoj",    phone: "97730 22017", color: "#a78bfa" },
  { sport: "Chess",              name: "Bhaskar",  phone: "77200 32006", color: "#a78bfa" },
  { sport: "Carrom",             name: "Manoj",    phone: "97730 22017", color: "#f472b6" },
  { sport: "Carrom",             name: "Bhaskar",  phone: "77200 32006", color: "#f472b6" },
  { sport: "Cricket",            name: "Rohan",    phone: "99607 59184", color: "#ef4444" },
  { sport: "Cricket",            name: "Upen",     phone: "99750 83121", color: "#ef4444" },
  { sport: "Football",           name: "Jitendra", phone: "70309 36272", color: "#22c55e" },
  { sport: "Football",           name: "Chanchal", phone: "80870 50514", color: "#22c55e" },
  { sport: "Cycling",            name: "Satilal",  phone: "99224 59784", color: "#60a5fa" },
  { sport: "Mini Marathon",      name: "Abhishek", phone: "99308 44415", color: "#4ade80" },
  { sport: "BR Legends Cricket", name: "Pabitra",  phone: "98810 91733", color: "#3a86ff" },
  { sport: "BR Legends Cricket", name: "Manoj",    phone: "97730 22017", color: "#3a86ff" },
];

const sportMeta: Record<string, { emoji: string }> = {
  "Badminton":           { emoji: "🏸" },
  "Table Tennis":        { emoji: "🏓" },
  "Chess":               { emoji: "♟"  },
  "Carrom":              { emoji: "🎱" },
  "Cricket":             { emoji: "🏏" },
  "Football":            { emoji: "⚽" },
  "Cycling":             { emoji: "🚴" },
  "Mini Marathon":       { emoji: "🏃" },
  "BR Legends Cricket":  { emoji: "🏏" },
};

function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81
               19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81
               a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45
               c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

export default function Contacts() {
  const grouped = contacts.reduce((acc, c) => {
    if (!acc[c.sport]) acc[c.sport] = [];
    acc[c.sport].push(c);
    return acc;
  }, {} as Record<string, typeof contacts>);

  const sports = Object.keys(grouped);

  return (
    <section id="contacts" className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px]
                      bg-[#0057B7]/8 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[300px]
                      bg-[#F0B429]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          Need Help?
        </p>
        <h2 className="font-barlow font-black text-white text-center uppercase
                       text-[clamp(2rem,6vw,3.2rem)] tracking-wide mb-4">
          Coordinators
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-5"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-gray-500 text-center text-sm mb-14 max-w-lg mx-auto">
          Reach out to your sport coordinator for registration help, queries, or any event info.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sports.map((sport) => {
            const meta   = sportMeta[sport] ?? { emoji: "🏅" };
            const color  = grouped[sport][0].color;
            const people = grouped[sport];

            return (
              <div key={sport}
                   className="rounded-2xl overflow-hidden border border-white/[0.07]
                              hover:border-white/[0.15] transition-all duration-300 group/card"
                   style={{ background: `linear-gradient(160deg, ${color}0e 0%, rgba(10,10,10,0.9) 60%)` }}>

                {/* Sport header */}
                <div className="relative flex items-center gap-3 px-5 py-4 overflow-hidden"
                     style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  {/* Accent left bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r"
                       style={{ background: `linear-gradient(to bottom, ${color}, ${color}55)` }} />

                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0
                                  transition-transform duration-300 group/card-hover:scale-110"
                       style={{ background: color + "22", boxShadow: `0 0 16px ${color}18` }}>
                    {meta.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm leading-tight">{sport}</p>
                    <p className="text-[10px] uppercase tracking-widest mt-0.5"
                       style={{ color: color + "99" }}>
                      {people.length} coordinator{people.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Contact rows — full row is a tap-to-call link */}
                <div className="divide-y divide-white/[0.05]">
                  {people.map((c, i) => (
                    <a key={i}
                       href={`tel:${c.phone.replace(/\s/g, "")}`}
                       className="flex items-center gap-3 px-5 py-4 transition-all duration-200
                                  hover:bg-white/[0.04] group/row"
                       aria-label={`Call ${c.name} on ${c.phone}`}>

                      {/* Avatar */}
                      <div className="w-9 h-9 rounded-full flex items-center justify-center
                                      text-sm font-black flex-shrink-0 transition-all duration-200
                                      group-hover/row:scale-110"
                           style={{ background: color + "28", color }}>
                        {c.name[0]}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm leading-tight">{c.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5 tabular-nums">{c.phone}</p>
                      </div>

                      {/* Call pill */}
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px]
                                       font-bold uppercase tracking-wide flex-shrink-0 transition-all duration-200
                                       opacity-60 group-hover/row:opacity-100 group-hover/row:scale-105"
                            style={{ background: color + "20", color }}>
                        <PhoneIcon size={11} />
                        Call
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
