"use client";

const contacts = [
  { sport: "Badminton",     name: "Soham",    phone: "97555 52414", color: "#22d3ee" },
  { sport: "Badminton",     name: "Prashant", phone: "91600 55003", color: "#22d3ee" },

  { sport: "Table Tennis",  name: "Prashant", phone: "91600 55003", color: "#F0B429" },
  { sport: "Table Tennis",  name: "Soham",    phone: "97555 52414", color: "#F0B429" },

  { sport: "Chess",         name: "Manoj",    phone: "97730 22017", color: "#a78bfa" },
  { sport: "Chess",         name: "Bhaskar",  phone: "77200 32006", color: "#a78bfa" },

  { sport: "Carrom",        name: "Manoj",    phone: "97730 22017", color: "#f472b6" },
  { sport: "Carrom",        name: "Bhaskar",  phone: "77200 32006", color: "#f472b6" },

  { sport: "Cricket",       name: "Rohan",    phone: "99607 59184", color: "#ef4444" },
  { sport: "Cricket",       name: "Upen",     phone: "99750 83121", color: "#ef4444" },

  { sport: "Football",      name: "Jitendra", phone: "70309 36272", color: "#22c55e" },
  { sport: "Football",      name: "Chanchal", phone: "80870 50514", color: "#22c55e" },

  { sport: "Cycling",       name: "Satilal",  phone: "99224 59784", color: "#60a5fa" },
  { sport: "Mini Marathon", name: "Abhishek", phone: "99308 44415", color: "#4ade80" },

  { sport: "BR Legends Cricket", name: "Pabitra", phone: "98810 91733", color: "#3a86ff" },
  { sport: "BR Legends Cricket", name: "Manoj",   phone: "97730 22017", color: "#3a86ff" },
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

export default function Contacts() {
  const grouped = contacts.reduce((acc, c) => {
    if (!acc[c.sport]) acc[c.sport] = [];
    acc[c.sport].push(c);
    return acc;
  }, {} as Record<string, typeof contacts>);

  const sports = Object.keys(grouped);

  return (
    <section id="contacts" className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px]
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
            const meta  = sportMeta[sport] ?? { emoji: "🏅" };
            const color = grouped[sport][0].color;
            const people = grouped[sport];

            return (
              <div key={sport}
                   className="rounded-2xl overflow-hidden border border-white/[0.07] transition-all duration-300 hover:border-white/[0.14]"
                   style={{
                     background: `linear-gradient(145deg, ${color}0c 0%, rgba(255,255,255,0.02) 100%)`,
                   }}>

                {/* Sport header */}
                <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06]"
                     style={{ borderLeftWidth: "3px", borderLeftStyle: "solid", borderLeftColor: color }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                       style={{ background: color + "20" }}>
                    {meta.emoji}
                  </div>
                  <p className="font-bold text-white text-sm tracking-wide">{sport}</p>
                </div>

                {/* Contact rows */}
                <div className="divide-y divide-white/[0.05]">
                  {people.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3.5 group">

                      {/* Avatar */}
                      <div className="w-9 h-9 rounded-full flex items-center justify-center
                                      text-sm font-black flex-shrink-0 transition-all duration-200"
                           style={{ background: color + "25", color }}>
                        {c.name[0]}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm leading-tight">{c.name}</p>
                        <a href={`tel:${c.phone.replace(/\s/g, "")}`}
                           className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                          {c.phone}
                        </a>
                      </div>

                      {/* Call button */}
                      <a href={`tel:${c.phone.replace(/\s/g, "")}`}
                         title={`Call ${c.name}`}
                         className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                                    text-sm transition-all duration-200 opacity-50 group-hover:opacity-100"
                         style={{ background: color + "20", color }}>
                        📞
                      </a>
                    </div>
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
