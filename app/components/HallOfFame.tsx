"use client";

import { useState } from "react";

// ─── Season Champion Data ─────────────────────────────────────────────────────
// Fill in actual winner names once available.
// winner / runnerup = flat number, team name, or individual name as needed.

const seasons = [
  {
    id: 1,
    year: 2024,
    label: "Season 1",
    champions: [
      { sport: "Cricket",       emoji: "🏏", accent: "#ef4444", winner: "Team A",    runnerup: "Team B" },
      { sport: "Football",      emoji: "⚽", accent: "#22c55e", winner: "Team C",    runnerup: "Team D" },
      { sport: "Badminton",     emoji: "🏸", accent: "#22d3ee", winner: "Player 1",  runnerup: "Player 2" },
      { sport: "Table Tennis",  emoji: "🏓", accent: "#F0B429", winner: "Player 3",  runnerup: "Player 4" },
      { sport: "Chess",         emoji: "♟",  accent: "#a78bfa", winner: "Player 5",  runnerup: "Player 6" },
      { sport: "Carrom",        emoji: "🎱", accent: "#f472b6", winner: "Player 7",  runnerup: "Player 8" },
      { sport: "Cycling",       emoji: "🚴", accent: "#60a5fa", winner: "Player 9",  runnerup: "Player 10" },
      { sport: "Mini Marathon", emoji: "🏃", accent: "#4ade80", winner: "Player 11", runnerup: "Player 12" },
      { sport: "Pickleball",    emoji: "🥏", accent: "#fb923c", winner: "Player 13", runnerup: "Player 14" },
    ],
  },
  {
    id: 2,
    year: 2025,
    label: "Season 2",
    champions: [
      { sport: "Cricket",       emoji: "🏏", accent: "#ef4444", winner: "Team E",    runnerup: "Team F" },
      { sport: "Football",      emoji: "⚽", accent: "#22c55e", winner: "Team G",    runnerup: "Team H" },
      { sport: "Badminton",     emoji: "🏸", accent: "#22d3ee", winner: "Player A",  runnerup: "Player B" },
      { sport: "Table Tennis",  emoji: "🏓", accent: "#F0B429", winner: "Player C",  runnerup: "Player D" },
      { sport: "Chess",         emoji: "♟",  accent: "#a78bfa", winner: "Player E",  runnerup: "Player F" },
      { sport: "Carrom",        emoji: "🎱", accent: "#f472b6", winner: "Player G",  runnerup: "Player H" },
      { sport: "Cycling",       emoji: "🚴", accent: "#60a5fa", winner: "Player I",  runnerup: "Player J" },
      { sport: "Mini Marathon", emoji: "🏃", accent: "#4ade80", winner: "Player K",  runnerup: "Player L" },
      { sport: "Pickleball",    emoji: "🥏", accent: "#fb923c", winner: "Player M",  runnerup: "Player N" },
    ],
  },
];

export default function HallOfFame() {
  const [activeSeason, setActiveSeason] = useState(0);
  const season = seasons[activeSeason];

  return (
    <section id="halloffame" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-[#f8fafc] pointer-events-none" />

      {/* Very subtle depth glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[350px]
                      bg-[#0057B7]/[0.04] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px]
                      bg-[#F0B429]/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#0057B7] mb-2">
          Legacy
        </p>
        <h2 className="font-barlow font-black text-slate-900 uppercase text-center
                       text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
          Hall of Fame
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-[#0057B7] to-[#F0B429] rounded-full mx-auto mb-5" />
        <p className="text-slate-500 text-center text-sm mb-10">
          Champions &amp; runners-up from previous seasons
        </p>

        {/* ── Season tabs ── */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200">
            {seasons.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveSeason(i)}
                className="px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-[2px] transition-all duration-200"
                style={
                  activeSeason === i
                    ? { background: "#0057B7", color: "#ffffff" }
                    : { color: "#64748b" }
                }
              >
                {s.label} · {s.year}
              </button>
            ))}
          </div>
        </div>

        {/* ── Champions grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {season.champions.map((c) => (
            <div
              key={c.sport}
              className="relative rounded-2xl p-5 overflow-hidden bg-white
                         shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                         transition-all duration-300 hover:-translate-y-1
                         hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
              style={{ border: "1px solid #e2e8f0" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = `1px solid ${c.accent}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = "1px solid #e2e8f0";
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                   style={{ background: c.accent }} />

              {/* Sport header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                     style={{ background: c.accent + "18" }}>
                  {c.emoji}
                </div>
                <p className="font-barlow font-black text-slate-900 uppercase tracking-wide text-base">
                  {c.sport}
                </p>
              </div>

              {/* Winner row */}
              <div className="flex items-start gap-2.5 mb-2">
                <span className="text-[13px] mt-0.5 flex-shrink-0">🥇</span>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#0057B7] mb-0.5">
                    Champion
                  </p>
                  <p className="text-slate-800 font-semibold text-sm leading-tight truncate">{c.winner}</p>
                </div>
              </div>

              {/* Runner-up row */}
              <div className="flex items-start gap-2.5">
                <span className="text-[13px] mt-0.5 flex-shrink-0">🥈</span>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-slate-400 mb-0.5">
                    Runner-up
                  </p>
                  <p className="text-slate-500 font-medium text-sm leading-tight truncate">{c.runnerup}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Season 3 teaser */}
        <div className="mt-10 rounded-2xl p-6 text-center"
             style={{
               background: "rgba(0,87,183,0.04)",
               border: "1px solid rgba(0,87,183,0.15)",
             }}>
          <p className="font-barlow font-black text-[#0057B7] uppercase tracking-wide text-lg mb-1">
            Season 3 · 2026
          </p>
          <p className="text-slate-500 text-sm">
            Champions will be enshrined here after the tournament concludes.
            <br />Will it be you?
          </p>
        </div>

      </div>
    </section>
  );
}
