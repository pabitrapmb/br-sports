"use client";

const contacts = [
  { sport: "Football",              name: "Jitendra", phone: "70309 36272", emoji: "⚽", accent: "#e63946" },
  { sport: "Football",              name: "Chanchal", phone: "80870 50514", emoji: "⚽", accent: "#e63946" },
  { sport: "Badminton | TT",        name: "Soham",    phone: "97555 52414", emoji: "🏸", accent: "#00b4d8" },
  { sport: "Badminton | TT",        name: "Prashant", phone: "91600 55003", emoji: "🏓", accent: "#00b4d8" },
  { sport: "Carrom | Chess",        name: "Manoj",    phone: "97730 22017", emoji: "♟",  accent: "#7b2d8b" },
  { sport: "Carrom | Chess",        name: "Bhaskar",  phone: "77200 32006", emoji: "🎱", accent: "#7b2d8b" },
  { sport: "Running | Cycling",     name: "Satilal",  phone: "99224 59784", emoji: "🚴", accent: "#2dc653" },
  { sport: "Running | Cycling",     name: "Abhishek", phone: "99308 44415", emoji: "🏃", accent: "#2dc653" },
  { sport: "Cricket",               name: "Rohan",    phone: "99607 59184", emoji: "🏏", accent: "#f5a623" },
  { sport: "Cricket",               name: "Upen",     phone: "99750 83121", emoji: "🏏", accent: "#f5a623" },
  { sport: "BR Legends Cricket",    name: "Pabitra",  phone: "98810 91733", emoji: "🏆", accent: "#3a86ff" },
  { sport: "BR Legends Cricket",    name: "Manoj",    phone: "97730 22017", emoji: "🏆", accent: "#3a86ff" },
];

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0b0b1e 0%, #0d0d1a 100%)" }}
    >
      <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#f5a623] mb-2">
        Connect With Us
      </p>
      <h2 className="font-bebas gradient-text-white-gold text-center text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
        Sport Coordinators
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-[#f5a623] to-red-500 rounded-full mx-auto mb-5" />
      <p className="text-gray-400 text-center max-w-xl mx-auto text-sm leading-relaxed mb-3">
        Reach out for nominations, team registrations, and collaborations. Cricket &amp; Football
        captains — form your team and get in touch today!
      </p>
      <p className="text-center text-gray-400 text-xs mb-12">
        📋 Team details format:{" "}
        <span className="text-white font-semibold">
          Team Name &amp; Player Name – Tower/Flat No – Mobile No – Age
        </span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {contacts.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-5
                       flex items-center gap-4 transition-all duration-300 hover:-translate-y-1"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = c.accent;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${c.accent}20` }}
            >
              {c.emoji}
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-gray-500 mb-0.5">
                {c.sport}
              </p>
              <p className="font-bold text-white">{c.name}</p>
              <p className="text-[#f5a623] text-sm">📞 {c.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
