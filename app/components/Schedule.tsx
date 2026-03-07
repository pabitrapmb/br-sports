"use client";

import { useState } from "react";

type SubEvent = {
  subtitle: string;
  accent: string;
  note?: string;
  contacts?: { name: string; phone: string }[];
};

type Event = {
  sport: string;
  emoji: string;
  accent: string;
  subtitle?: string;
  status: "confirmed" | "tbd";
  date?: string;
  time?: string;
  venue?: string;
  categories?: string[];
  fees?: { label: string; amount: string }[];
  rules?: string[];
  contacts?: { name: string; phone: string }[];
  whatsapp?: string;
  registrationUrl?: string;
  subEvents?: SubEvent[];
};

const events: Event[] = [
  {
    sport: "Badminton",
    emoji: "🏸",
    accent: "#00b4d8",
    subtitle: "Smashers Cup 2026",
    status: "confirmed",
    date: "To be decided",
    time: "9:00 AM – 6:00 PM",
    venue: "Unity Shuttle Arena, PSA , Hinjewadi, Pune",
    categories: ["Men's Singles", "Men's Doubles", "Women's Doubles"],
    fees: [
      { label: "Singles", amount: "₹250 per participant" },
      { label: "Doubles", amount: "₹450 per team" },
    ],
    rules: [
      "Best of 3 sets (15 points each), Finals played to 21 points",
      "Standard knockout format – winner advances each round",
      "Official shuttle: Yonex Mavis 350",
      "Players must bring own rackets, non-marking shoes & sports attire",
      "Doubles partners must belong to the same unit",
      "Proof of residency may be requested",
    ],
    contacts: [
      { name: "Soham",    phone: "97555 52414" },
      { name: "Prashant", phone: "91600 55003" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
    registrationUrl: "https://forms.gle/REPLACE_WITH_BADMINTON_FORM_LINK",
  },
  {
    sport: "Table Tennis",
    emoji: "🏓",
    accent: "#ff6b35",
    subtitle: "TT Championship 2026",
    status: "confirmed",
    date: "Sunday, 8th March 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Unity Shuttle Arena, PSA , Hinjewadi, Pune",
    categories: ["Men's Singles", "Women's Singles", "Men's Doubles", "Women's Doubles"],
    fees: [
      { label: "Singles", amount: "₹200 per participant" },
      { label: "Doubles", amount: "₹300 per team" },
    ],
    rules: [
      "Best of 3 sets (11 points per set)",
      "Standard knockout format",
      "Umpire decisions are final and binding",
      "Players must bring own TT bats, non-marking shoes & sports attire",
      "Doubles partners must belong to the same unit",
      "Proof of residency may be requested",
    ],
    contacts: [
      { name: "Prashant", phone: "91600 55003" },
      { name: "Soham",    phone: "97555 52414" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
    registrationUrl: "https://forms.gle/REPLACE_WITH_TT_FORM_LINK",
  },
  {
    sport: "Chess",
    emoji: "♟",
    accent: "#f5a623",
    subtitle: "Champions Trophy 2026",
    status: "confirmed",
    date: "14th April 2026",
    venue: "BR Unit A Club House",
    categories: ["Open for All"],
    fees: [{ label: "Entry Fee", amount: "₹300 per player" }],
    rules: [
      "Swiss League Tournament Format",
      "Limited entries – First 40 players only!",
      "Share details: Player Name – Tower/Flat No – Mobile No – Age",
    ],
    contacts: [
      { name: "Manoj",   phone: "97730 22017" },
      { name: "Bhaskar", phone: "77200 32006" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
    registrationUrl: "https://forms.gle/REPLACE_WITH_CHESS_FORM_LINK",
  },
  {
    sport: "Carrom",
    emoji: "🎱",
    accent: "#7b2d8b",
    subtitle: "Champions Trophy 2026",
    status: "confirmed",
    date: "21st April 2026",
    venue: "BR Unit A Club House",
    categories: ["Open for All"],
    fees: [{ label: "Entry Fee", amount: "₹350 per player" }],
    rules: [
      "4-6-8 Boards | 28 Points format",
      "Knockout format",
      "Share details: Player Name – Tower/Flat No – Mobile No – Age",
    ],
    contacts: [
      { name: "Manoj",   phone: "97730 22017" },
      { name: "Bhaskar", phone: "77200 32006" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
    registrationUrl: "https://forms.gle/REPLACE_WITH_CARROM_FORM_LINK",
  },
  {
    sport: "Cricket",
    emoji: "🏏",
    accent: "#ef4444",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "Date TBD",
    venue: "BR Sports Ground",
    subEvents: [
      {
        subtitle: "Cricket Tournament",
        accent: "#ef4444",
        note: "Format & schedule to be announced",
        contacts: [
          { name: "Rohan", phone: "99607 59184" },
          { name: "Upen",  phone: "99750 83121" },
        ],
      },
      {
        subtitle: "BR Legends Cricket",
        accent: "#3a86ff",
        note: "Legends format · BR residents only",
        contacts: [
          { name: "Pabitra", phone: "98810 91733" },
          { name: "Manoj",   phone: "97730 22017" },
        ],
      },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Football",
    emoji: "⚽",
    accent: "#e63946",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "Date TBD",
    contacts: [
      { name: "Jitendra", phone: "70309 36272" },
      { name: "Chanchal", phone: "80870 50514" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Cycling",
    emoji: "🚴",
    accent: "#3a86ff",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "Date TBD",
    contacts: [{ name: "Satilal", phone: "99224 59784" }],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Mini Marathon",
    emoji: "🏃",
    accent: "#4ade80",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "Date TBD",
    contacts: [{ name: "Abhishek", phone: "99308 44415" }],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Pickleball",
    emoji: "🥏",
    accent: "#f5a623",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "Date TBD",
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
];

function ContactChip({ name, phone, accent }: { name: string; phone: string; accent: string }) {
  return (
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold
                 transition-all duration-200 hover:opacity-80"
      style={{ borderColor: accent + "45", color: accent, background: accent + "0d" }}
    >
      📞 {name}: {phone}
    </a>
  );
}

function EventCard({ event }: { event: Event }) {
  const [open, setOpen] = useState(false);

  const cardId = "event-" + event.sport.toLowerCase().replace(/\s+/g, "-");
  const isTbd  = event.status === "tbd";

  return (
    <div
      id={cardId}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: open
          ? `linear-gradient(145deg, ${event.accent}10 0%, rgba(255,255,255,0.02) 100%)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${open ? event.accent + "55" : "rgba(255,255,255,0.08)"}`,
        boxShadow: open ? `0 8px 40px ${event.accent}18` : "none",
      }}
    >
      <div className="flex">
        {/* Left accent bar */}
        <div className="w-[3px] flex-shrink-0 transition-all duration-500 rounded-l-2xl"
             style={{ background: open ? `linear-gradient(to bottom, ${event.accent}, ${event.accent}44)` : "transparent" }} />

        <div className="flex-1 min-w-0">
          {/* Header row */}
          <button className="w-full text-left px-5 py-5 flex items-center gap-4"
                  onClick={() => setOpen(!open)}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                 style={{
                   background: event.accent + "1a",
                   boxShadow: open ? `0 0 24px ${event.accent}35` : "none",
                 }}>
              {event.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-lg leading-tight">{event.sport}</p>
              {event.subtitle && (
                <p className="text-[11px] font-semibold tracking-widest uppercase mt-0.5"
                   style={{ color: event.accent }}>
                  {event.subtitle}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2.5">
                {event.date && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium"
                        style={{ background: isTbd ? event.accent + "12" : "rgba(255,255,255,0.05)", color: isTbd ? event.accent : "#9ca3af" }}>
                    📅 {event.date}
                  </span>
                )}
                {event.time && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium text-gray-400"
                        style={{ background: "rgba(255,255,255,0.05)" }}>
                    ⏰ {event.time}
                  </span>
                )}
              </div>
            </div>

            {/* Chevron */}
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                 style={{
                   background: open ? event.accent + "22" : "rgba(255,255,255,0.06)",
                   transform: open ? "rotate(180deg)" : "rotate(0deg)",
                 }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 4.5l4 4 4-4" stroke={open ? event.accent : "#666"}
                      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>

          {/* Expanded body */}
          {open && (
            <div className="px-5 pb-6 pt-4 space-y-5 border-t border-white/[0.06]">

              {/* Sub-events (e.g. Cricket + Legends Cricket) */}
              {event.subEvents ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.subEvents.map((sub, i) => (
                    <div key={i} className="rounded-xl p-4 space-y-3"
                         style={{ background: sub.accent + "0a", border: `1px solid ${sub.accent}25` }}>
                      <p className="font-bold text-sm" style={{ color: sub.accent }}>{sub.subtitle}</p>
                      {sub.note && (
                        <p className="text-xs text-gray-500">{sub.note}</p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {sub.contacts?.map((c) => (
                          <ContactChip key={c.name} name={c.name} phone={c.phone} accent={sub.accent} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : isTbd ? (
                /* TBD event — minimal view */
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm text-gray-400 rounded-xl px-4 py-3"
                       style={{ background: event.accent + "08" }}>
                    <span className="mt-0.5">🔜</span>
                    <span>Schedule & registration details will be announced soon. Contact the coordinator for updates.</span>
                  </div>
                  {event.contacts && (
                    <div className="flex flex-wrap gap-2">
                      {event.contacts.map((c) => (
                        <ContactChip key={c.name} name={c.name} phone={c.phone} accent={event.accent} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Full confirmed event */
                <>
                  {event.venue && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm"
                           style={{ background: event.accent + "18" }}>
                        📍
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] mb-0.5"
                           style={{ color: event.accent + "99" }}>Venue</p>
                        <p className="text-white text-sm">{event.venue}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.categories && (
                      <div className="rounded-xl p-4" style={{ background: event.accent + "0a" }}>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] mb-2.5"
                           style={{ color: event.accent + "99" }}>Categories</p>
                        <div className="flex flex-wrap gap-2">
                          {event.categories.map((c) => (
                            <span key={c} className="px-2.5 py-1 rounded-lg text-xs font-semibold border"
                                  style={{ borderColor: event.accent + "45", color: event.accent, background: event.accent + "12" }}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {event.fees && (
                      <div className="rounded-xl p-4" style={{ background: event.accent + "0a" }}>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] mb-2.5"
                           style={{ color: event.accent + "99" }}>Registration Fees</p>
                        <div className="space-y-1.5">
                          {event.fees.map((f) => (
                            <p key={f.label} className="text-sm">
                              <span className="text-gray-500">{f.label}: </span>
                              <span className="text-white font-semibold">{f.amount}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {event.rules && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2px] mb-3"
                         style={{ color: event.accent + "99" }}>Tournament Rules</p>
                      <ul className="space-y-2.5">
                        {event.rules.map((r, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-300">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center
                                             text-[10px] font-bold flex-shrink-0 mt-0.5"
                                  style={{ background: event.accent + "22", color: event.accent }}>
                              {i + 1}
                            </span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.registrationUrl && (
                    <div>
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold
                                    text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110 active:scale-100"
                         style={{
                           background: `linear-gradient(135deg, ${event.accent}, ${event.accent}bb)`,
                           boxShadow: `0 4px 20px ${event.accent}40`,
                         }}>
                        📋 Register Now →
                      </a>
                      <p className="text-[10px] text-gray-600 mt-2 ml-1">Opens Google Form in a new tab</p>
                    </div>
                  )}
                </>
              )}

              {/* WhatsApp — always shown when expanded */}
              {event.whatsapp && (
                <div className="pt-1">
                  <a href={event.whatsapp} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                                transition-all duration-200 hover:bg-[#25d366]/20"
                     style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25d366" }}>
                    💬 WhatsApp Group →
                  </a>
                </div>
              )}

              {/* Contacts for confirmed events */}
              {!event.subEvents && !isTbd && event.contacts && (
                <div className="flex flex-wrap gap-2">
                  {event.contacts.map((c) => (
                    <ContactChip key={c.name} name={c.name} phone={c.phone} accent={event.accent} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 px-6 bg-[#080d1e] dot-grid overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px]
                      bg-[#F0B429]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#F0B429] mb-2">
          Season 3
        </p>
        <h2 className="font-barlow font-black text-white uppercase text-center
                       text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
          Event Schedule
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-[#F0B429] to-red-500 rounded-full mx-auto mb-5" />
        <p className="text-gray-400 text-center text-sm mb-14 max-w-xl mx-auto">
          Click on any event to see full details, rules, fees and register.
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          {events.map((e) => <EventCard key={e.sport} event={e} />)}
        </div>
      </div>
    </section>
  );
}
