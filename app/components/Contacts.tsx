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

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          Need Help?
        </p>
        <h2 className="font-barlow font-black text-[#050c18] text-center uppercase
                       text-[clamp(2rem,6vw,3.2rem)] tracking-wide mb-4">
          Coordinators
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-5"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-gray-500 text-center text-sm mb-14 max-w-lg mx-auto">
          Reach out to your sport coordinator for registration help, queries, or any event info.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-5
                         flex items-center gap-4 shadow-sm"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center
                              text-lg font-black text-white flex-shrink-0"
                   style={{ background: c.color }}>
                {c.name !== "TBA" ? c.name[0] : "?"}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[2px] mb-0.5"
                   style={{ color: c.color }}>
                  {c.sport}
                </p>
                <p className="font-bold text-[#050c18] text-sm truncate">{c.name}</p>
                {c.phone !== "—" ? (
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="text-gray-400 text-xs hover:text-[#0057B7] transition-colors"
                  >
                    {c.phone}
                  </a>
                ) : (
                  <p className="text-gray-300 text-xs">To be announced</p>
                )}
              </div>

              {c.phone !== "—" && (
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                             border border-gray-100 hover:border-transparent transition-all duration-200
                             hover:text-white text-lg"
                  style={{
                    color: c.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = c.color;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = c.color;
                  }}
                >
                  📞
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
