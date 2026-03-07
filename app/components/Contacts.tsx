"use client";

const contacts = [
  { sport: "Badminton",          emoji: "🏸", name: "Soham",    phone: "97555 52414", color: "#22d3ee" },
  { sport: "Badminton",          emoji: "🏸", name: "Prashant", phone: "91600 55003", color: "#22d3ee" },
  { sport: "Table Tennis",       emoji: "🏓", name: "Prashant", phone: "91600 55003", color: "#F0B429" },
  { sport: "Table Tennis",       emoji: "🏓", name: "Soham",    phone: "97555 52414", color: "#F0B429" },
  { sport: "Chess",              emoji: "♟",  name: "Manoj",    phone: "97730 22017", color: "#a78bfa" },
  { sport: "Chess",              emoji: "♟",  name: "Bhaskar",  phone: "77200 32006", color: "#a78bfa" },
  { sport: "Carrom",             emoji: "🎱", name: "Manoj",    phone: "97730 22017", color: "#f472b6" },
  { sport: "Carrom",             emoji: "🎱", name: "Bhaskar",  phone: "77200 32006", color: "#f472b6" },
  { sport: "Cricket",            emoji: "🏏", name: "Rohan",    phone: "99607 59184", color: "#ef4444" },
  { sport: "Cricket",            emoji: "🏏", name: "Upen",     phone: "99750 83121", color: "#ef4444" },
  { sport: "Football",           emoji: "⚽", name: "Jitendra", phone: "70309 36272", color: "#22c55e" },
  { sport: "Football",           emoji: "⚽", name: "Chanchal", phone: "80870 50514", color: "#22c55e" },
  { sport: "Cycling",            emoji: "🚴", name: "Satilal",  phone: "99224 59784", color: "#60a5fa" },
  { sport: "Mini Marathon",      emoji: "🏃", name: "Abhishek", phone: "99308 44415", color: "#4ade80" },
  { sport: "BR Legends Cricket", emoji: "🏏", name: "Pabitra",  phone: "98810 91733", color: "#3a86ff" },
  { sport: "BR Legends Cricket", emoji: "🏏", name: "Manoj",    phone: "97730 22017", color: "#3a86ff" },
];

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07
               9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361
               1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0
               012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
  );
}

export default function Contacts() {
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {contacts.map((c, i) => (
            <a key={i}
               href={`tel:${c.phone.replace(/\s/g, "")}`}
               aria-label={`Call ${c.name} for ${c.sport}`}
               className="group flex flex-col items-center text-center rounded-2xl px-4 py-6
                          border border-white/[0.07] hover:border-white/20
                          transition-all duration-300 hover:-translate-y-1"
               style={{ background: `linear-gradient(160deg, ${c.color}0d, rgba(10,10,10,0.95))` }}>

              {/* Sport badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                               text-[10px] font-bold uppercase tracking-widest mb-4"
                    style={{ background: c.color + "18", color: c.color }}>
                {c.emoji} {c.sport}
              </span>

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center
                              text-xl font-black mb-3 transition-transform duration-300
                              group-hover:scale-110"
                   style={{
                     background: `linear-gradient(135deg, ${c.color}30, ${c.color}10)`,
                     color: c.color,
                     boxShadow: `0 0 20px ${c.color}20`,
                   }}>
                {c.name[0]}
              </div>

              {/* Name */}
              <p className="font-bold text-white text-sm mb-1">{c.name}</p>

              {/* Phone */}
              <p className="text-gray-500 text-xs tabular-nums mb-4">{c.phone}</p>

              {/* Call button */}
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg
                               text-[11px] font-bold uppercase tracking-wide
                               transition-all duration-200 group-hover:scale-105"
                    style={{
                      background: c.color + "20",
                      color: c.color,
                      border: `1px solid ${c.color}35`,
                    }}>
                <PhoneIcon /> Call
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
