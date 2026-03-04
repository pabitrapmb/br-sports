"use client";

import { useState } from "react";

type Event = {
  sport: string;
  emoji: string;
  accent: string;
  subtitle?: string;
  status: "confirmed" | "soon";
  date?: string;
  time?: string;
  venue?: string;
  categories?: string[];
  fees?: { label: string; amount: string }[];
  rules?: string[];
  contacts?: { name: string; phone: string }[];
  whatsapp?: string;
};

const events: Event[] = [
  {
    sport: "Badminton",
    emoji: "🏸",
    accent: "#00b4d8",
    subtitle: "Smashers Cup 2026",
    status: "confirmed",
    date: "Saturday, 7th March 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "Unity Shuttle Arena, Hinjewadi, Pune",
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
      { name: "Soham", phone: "97555 52414" },
      { name: "Prashant", phone: "91600 55003" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Table Tennis",
    emoji: "🏓",
    accent: "#ff6b35",
    subtitle: "TT Championship 2026",
    status: "confirmed",
    date: "Sunday, 8th March 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Unity Shuttle Arena, Hinjewadi, Pune",
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
      { name: "Soham", phone: "97555 52414" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Chess",
    emoji: "♟",
    accent: "#f5a623",
    subtitle: "Champions Trophy 2026",
    status: "confirmed",
    date: "14th April 2026",
    venue: "BR Unit C Club House",
    categories: ["Open for All"],
    fees: [{ label: "Entry Fee", amount: "₹300 per player" }],
    rules: [
      "Swiss League Tournament Format",
      "Limited entries – First 40 players only!",
      "Share details: Player Name – Tower/Flat No – Mobile No – Age",
    ],
    contacts: [
      { name: "Manoj", phone: "97730 22017" },
      { name: "Bhaskar", phone: "77200 32006" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  {
    sport: "Carrom",
    emoji: "🎱",
    accent: "#7b2d8b",
    subtitle: "Champions Trophy 2026",
    status: "confirmed",
    date: "21st April 2026",
    venue: "BR Unit C Club House",
    categories: ["Open for All"],
    fees: [{ label: "Entry Fee", amount: "₹350 per player" }],
    rules: [
      "4-6-8 Boards | 28 Points format",
      "Knockout format",
      "Share details: Player Name – Tower/Flat No – Mobile No – Age",
    ],
    contacts: [
      { name: "Manoj", phone: "97730 22017" },
      { name: "Bhaskar", phone: "77200 32006" },
    ],
    whatsapp: "https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET",
  },
  { sport: "Cricket",       emoji: "🏏", accent: "#2dc653", status: "soon" },
  { sport: "Football",      emoji: "⚽", accent: "#e63946", status: "soon" },
  { sport: "Cycling",       emoji: "🚴", accent: "#3a86ff", status: "soon" },
  { sport: "Mini Marathon", emoji: "🏃", accent: "#2dc653", status: "soon" },
  { sport: "Pickleball",    emoji: "🥏", accent: "#f5a623", status: "soon" },
];

function EventCard({ event }: { event: Event }) {
  const [open, setOpen] = useState(false);

  if (event.status === "soon") {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 flex items-center gap-4">
        <span className="text-4xl">{event.emoji}</span>
        <div>
          <p className="font-bold text-white text-base">{event.sport}</p>
          <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            Schedule Coming Soon
          </span>
        </div>
      </div>
    );
  }

  // ✅ This id is what Sports.tsx uses to scroll & auto-open the card
  const cardId = "event-" + event.sport.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      id={cardId}
      className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300"
      style={{ borderColor: open ? event.accent + "60" : undefined }}
    >
      {/* Card header — always visible */}
      <button
        className="w-full text-left p-6 flex items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: event.accent + "20" }}
        >
          {event.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-white text-lg leading-tight">{event.sport}</p>
          {event.subtitle && (
            <p
              className="text-xs font-semibold tracking-widest uppercase mt-0.5"
              style={{ color: event.accent }}
            >
              {event.subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-400">
            {event.date && <span>📅 {event.date}</span>}
            {event.time && <span>⏰ {event.time}</span>}
          </div>
        </div>
        {/* Expand arrow */}
        <span
          className="text-gray-500 text-xl transition-transform duration-300 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      {/* Expanded details */}
      {open && (
        <div className="px-6 pb-6 border-t border-white/[0.06] pt-5 space-y-5">

          {/* Venue */}
          {event.venue && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">📍 Venue</p>
              <p className="text-white text-sm">{event.venue}</p>
            </div>
          )}

          {/* Categories & Fees side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {event.categories && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {event.categories.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{ borderColor: event.accent + "60", color: event.accent, background: event.accent + "15" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {event.fees && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Registration Fees</p>
                {event.fees.map((f) => (
                  <p key={f.label} className="text-sm text-white">
                    <span className="text-gray-400">{f.label}: </span>{f.amount}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Rules */}
          {event.rules && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Tournament Rules</p>
              <ul className="space-y-1.5">
                {event.rules.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <span style={{ color: event.accent }} className="mt-0.5 flex-shrink-0">›</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contacts & WhatsApp */}
          <div className="flex flex-wrap gap-3 pt-1">
            {event.contacts?.map((c) => (
              <a
                key={c.name}
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition hover:opacity-80"
                style={{ borderColor: event.accent + "50", color: event.accent, background: event.accent + "10" }}
              >
                📞 {c.name}: {c.phone}
              </a>
            ))}
            {event.whatsapp && (
              <a
                href={event.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25d366]/15 border border-[#25d366]/40 text-[#25d366] text-sm font-semibold transition hover:opacity-80"
              >
                WhatsApp Group →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Schedule() {
  const confirmed = events.filter((e) => e.status === "confirmed");
  const soon      = events.filter((e) => e.status === "soon");

  return (
    <section id="schedule" className="py-24 px-6 bg-[#0b0b1e]">
      <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#f5a623] mb-2">
        Season 3
      </p>
      <h2 className="font-bebas gradient-text-white-gold text-center text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
        Event Schedule
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-[#f5a623] to-red-500 rounded-full mx-auto mb-5" />
      <p className="text-gray-400 text-center text-sm mb-14 max-w-xl mx-auto">
        Click on any event to see full details, rules, fees and contacts.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Confirmed events */}
        {confirmed.map((e) => <EventCard key={e.sport} event={e} />)}

        {/* Coming soon divider */}
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">More Coming Soon</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Coming soon sports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {soon.map((e) => <EventCard key={e.sport} event={e} />)}
        </div>
      </div>
    </section>
  );
}
