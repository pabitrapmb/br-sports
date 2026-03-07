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
    accent: "#0ea5e9",
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
    accent: "#f59e0b",
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
    accent: "#8b5cf6",
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
    accent: "#a855f7",
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
    date: "To Be Decided",
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
        accent: "#3b82f6",
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
    date: "To Be Decided",
    contacts: [
      { name: "Jitendra", phone: "70309 36272" },
      { name: "Chanchal", phone: "80870 50514" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Cycling",
    emoji: "🚴",
    accent: "#3b82f6",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "To Be Decided",
    contacts: [{ name: "Satilal", phone: "99224 59784" }],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Mini Marathon",
    emoji: "🏃",
    accent: "#16a34a",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "To Be Decided",
    contacts: [{ name: "Abhishek", phone: "99308 44415" }],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Pickleball",
    emoji: "🥏",
    accent: "#f97316",
    subtitle: "Season 3 · 2026",
    status: "tbd",
    date: "To Be Decided",
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
];

/* ── Contact chip — light themed ───────────────────────────────── */
function ContactChip({ name, phone, accent }: { name: string; phone: string; accent: string }) {
  return (
    <a
      href={`tel:${phone.replace(/\s/g, "")}`}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold
                 transition-all duration-200 hover:brightness-95 active:scale-[0.97]"
      style={{ borderColor: accent + "35", color: accent, background: accent + "0c" }}
    >
      📞 <span className="font-bold">{name}</span>
      <span className="text-[10px] opacity-60 tabular-nums">{phone}</span>
    </a>
  );
}

/* ── Single event card ──────────────────────────────────────────── */
function EventCard({ event, isFeatured }: { event: Event; isFeatured?: boolean }) {
  const [open, setOpen] = useState(false);

  const cardId = "event-" + event.sport.toLowerCase().replace(/\s+/g, "-");
  const isTbd  = event.status === "tbd";

  return (
    <div>
      {/* "Next Up" label row — only for the featured/soonest event */}
      {isFeatured && (
        <div className="flex items-center gap-2.5 mb-2 px-1">
          <span className="relative flex-shrink-0 w-2 h-2">
            <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#0057B7]"
                  style={{ color: "#0057B7" }} />
            <span className="relative block w-2 h-2 rounded-full bg-[#0057B7]" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-[2.5px] text-[#0057B7]">
            Next Up · {event.date}
          </span>
          <div className="flex-1 h-px bg-[#0057B7]/20" />
        </div>
      )}

    <div
      id={cardId}
      className="rounded-2xl overflow-hidden transition-all duration-300 bg-white"
      style={{
        border: open
          ? `1px solid ${event.accent}45`
          : isFeatured
          ? `1.5px solid ${event.accent}55`
          : "1px solid #e2e8f0",
        boxShadow: open
          ? `0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)`
          : isFeatured
          ? `0 4px 20px ${event.accent}20`
          : "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex">
        {/* Left accent bar — always visible */}
        <div
          className="w-1 flex-shrink-0 rounded-l-2xl"
          style={{
            background: `linear-gradient(to bottom, ${event.accent}, ${event.accent}55)`,
          }}
        />

        <div className="flex-1 min-w-0">
          {/* Header row */}
          <button
            className="w-full text-left px-5 py-4 flex items-center gap-4"
            onClick={() => setOpen(!open)}
          >
            {/* Emoji icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: event.accent + "12" }}
            >
              {event.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-base leading-tight">{event.sport}</p>
              {event.subtitle && (
                <p
                  className="text-[11px] font-semibold tracking-widest uppercase mt-0.5"
                  style={{ color: event.accent }}
                >
                  {event.subtitle}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {event.date && (
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium"
                    style={
                      isTbd
                        ? { background: event.accent + "12", color: event.accent }
                        : { background: "#f1f5f9", color: "#64748b" }
                    }
                  >
                    📅 {event.date}
                  </span>
                )}
                {event.time && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px]
                                   font-medium bg-slate-100 text-slate-500">
                    ⏰ {event.time}
                  </span>
                )}
              </div>
            </div>

            {/* Chevron */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                background: open ? event.accent + "15" : "#f1f5f9",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2.5 4.5l4 4 4-4"
                  stroke={open ? event.accent : "#94a3b8"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* ── Expanded body ─────────────────────────────────── */}
          {open && (
            <div className="px-5 pb-6 pt-4 space-y-5 border-t border-slate-100">

              {/* Sub-events (Cricket + Legends Cricket) */}
              {event.subEvents ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.subEvents.map((sub, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4 space-y-3"
                      style={{
                        background: sub.accent + "08",
                        border: `1px solid ${sub.accent}28`,
                      }}
                    >
                      <p className="font-bold text-sm" style={{ color: sub.accent }}>
                        {sub.subtitle}
                      </p>
                      {sub.note && (
                        <p className="text-xs text-slate-500">{sub.note}</p>
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
                /* TBD event — compact view */
                <div className="space-y-4">
                  <div
                    className="flex items-start gap-3 text-sm text-slate-500 rounded-xl px-4 py-3"
                    style={{ background: event.accent + "08" }}
                  >
                    <span className="mt-0.5">🔜</span>
                    <span>Schedule &amp; registration details will be announced soon. Contact the coordinator for updates.</span>
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
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm bg-slate-100">
                        📍
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[2px] mb-0.5 text-slate-400">
                          Venue
                        </p>
                        <p className="text-slate-800 text-sm">{event.venue}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.categories && (
                      <div className="rounded-xl p-4 bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-[2px] mb-2.5 text-slate-400">
                          Categories
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {event.categories.map((c) => (
                            <span
                              key={c}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold border"
                              style={{
                                borderColor: event.accent + "40",
                                color: event.accent,
                                background: event.accent + "0d",
                              }}
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {event.fees && (
                      <div className="rounded-xl p-4 bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-[2px] mb-2.5 text-slate-400">
                          Registration Fees
                        </p>
                        <div className="space-y-1.5">
                          {event.fees.map((f) => (
                            <p key={f.label} className="text-sm">
                              <span className="text-slate-400">{f.label}: </span>
                              <span className="text-slate-900 font-semibold">{f.amount}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {event.rules && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2px] mb-3 text-slate-400">
                        Tournament Rules
                      </p>
                      <ul className="space-y-2.5">
                        {event.rules.map((r, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate-600">
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center
                                         text-[10px] font-bold flex-shrink-0 mt-0.5"
                              style={{ background: event.accent + "15", color: event.accent }}
                            >
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
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold
                                   text-white transition-all duration-200 hover:scale-[1.03]
                                   hover:brightness-110 active:scale-100"
                        style={{
                          background: `linear-gradient(135deg, ${event.accent}, ${event.accent}cc)`,
                          boxShadow: `0 4px 16px ${event.accent}30`,
                        }}
                      >
                        📋 Register Now →
                      </a>
                      <p className="text-[10px] text-slate-400 mt-2 ml-1">
                        Opens Google Form in a new tab
                      </p>
                    </div>
                  )}

                  {/* Contacts — confirmed events */}
                  {event.contacts && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[2px] mb-2.5 text-slate-400">
                        Coordinators
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {event.contacts.map((c) => (
                          <ContactChip key={c.name} name={c.name} phone={c.phone} accent={event.accent} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* WhatsApp — always shown when expanded */}
              {event.whatsapp && (
                <div className="pt-1 border-t border-slate-100">
                  <a
                    href={event.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                               transition-all duration-200 hover:brightness-95"
                    style={{
                      background: "rgba(22,163,74,0.08)",
                      border: "1px solid rgba(22,163,74,0.25)",
                      color: "#16a34a",
                    }}
                  >
                    💬 WhatsApp Group →
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────── */
export default function Schedule() {
  /* The soonest event with a real confirmed date — gets a "Next Up" badge */
  const featuredSport = events.find(
    (e) =>
      e.status === "confirmed" &&
      e.date &&
      !e.date.toLowerCase().includes("decided") &&
      !e.date.toLowerCase().includes("tbd"),
  )?.sport;

  return (
    <section id="schedule" className="relative py-24 px-6 bg-[#f1f5f9] dot-grid overflow-hidden">

      {/* Subtle top stripe */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200 pointer-events-none" />

      <div className="relative z-10">
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#0057B7] mb-2">
          Season 3
        </p>
        <h2 className="font-barlow font-black text-slate-900 uppercase text-center
                       text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
          Event Schedule
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-[#0057B7] to-[#F0B429] rounded-full mx-auto mb-5" />
        <p className="text-slate-500 text-center text-sm mb-10 max-w-xl mx-auto">
          Click on any event to see full details, rules, fees and register.
        </p>

        <div className="max-w-3xl mx-auto space-y-3">
          {events.map((e) => (
            <EventCard
              key={e.sport}
              event={e}
              isFeatured={e.sport === featuredSport}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
