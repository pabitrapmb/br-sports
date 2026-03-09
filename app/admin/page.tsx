"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/app/lib/supabase/client";

type Registration = {
  id: string;
  sport: string;
  team_name: string | null;
  player1: string | null;
  player2: string | null;
  flat_number: string | null;
  status: string;
  created_at: string;
  profiles: { full_name: string | null; phone: string | null } | null;
};

type TabKey = "registrations" | "halloffame";

/* ── Status badge ─────────────────────────────────────────────── */
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    pending:   { bg: "#fef9c3", color: "#92400e", label: "Pending"   },
    confirmed: { bg: "#dcfce7", color: "#166534", label: "Confirmed" },
    rejected:  { bg: "#fee2e2", color: "#991b1b", label: "Rejected"  },
  };
  const s = map[status] ?? map["pending"];
  return (
    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[1.5px]"
          style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}

export default function AdminDashboard() {
  const supabase = createClient();
  const [tab,          setTab]          = useState<TabKey>("registrations");
  const [regs,         setRegs]         = useState<Registration[]>([]);
  const [loading,      setLoading]      = useState(true);
  const [updating,     setUpdating]     = useState<string | null>(null);
  const [hofSeason,    setHofSeason]    = useState<1 | 2>(2);
  const [hofSport,     setHofSport]     = useState("Badminton");
  const [hofWinner,    setHofWinner]    = useState("");
  const [hofRunnerup,  setHofRunnerup]  = useState("");
  const [hofSaving,    setHofSaving]    = useState(false);
  const [hofMsg,       setHofMsg]       = useState("");

  const sports9 = ["Cricket","Football","Badminton","Table Tennis","Chess","Carrom","Cycling","Mini Marathon","Pickleball"];

  /* ── Fetch registrations ── */
  const fetchRegs = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("registrations")
      .select("*, profiles(full_name, phone)")
      .order("created_at", { ascending: false });
    setRegs((data as Registration[]) ?? []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => { fetchRegs(); }, [fetchRegs]);

  /* ── Update registration status ── */
  async function updateStatus(id: string, status: string) {
    setUpdating(id);
    await supabase.from("registrations").update({ status }).eq("id", id);
    setRegs((prev) => prev.map((r) => r.id === id ? { ...r, status } : r));
    setUpdating(null);
  }

  /* ── Save Hall of Fame entry ── */
  async function saveChampion(e: React.FormEvent) {
    e.preventDefault();
    if (!hofWinner.trim()) return;
    setHofSaving(true); setHofMsg("");
    const year = hofSeason === 1 ? 2024 : 2025;
    const { error } = await supabase.from("champions").upsert(
      { season: hofSeason, year, sport: hofSport, winner: hofWinner, runnerup: hofRunnerup },
      { onConflict: "season,sport" },
    );
    setHofMsg(error ? "❌ " + error.message : "✅ Saved!");
    setHofSaving(false);
    if (!error) { setHofWinner(""); setHofRunnerup(""); }
  }

  /* ── Stats ── */
  const total     = regs.length;
  const pending   = regs.filter((r) => r.status === "pending").length;
  const confirmed = regs.filter((r) => r.status === "confirmed").length;

  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Registrations", value: total,     color: "#0057B7" },
          { label: "Pending",             value: pending,   color: "#d97706" },
          { label: "Confirmed",           value: confirmed, color: "#16a34a" },
          { label: "Sports",              value: 9,         color: "#a855f7" },
        ].map((s) => (
          <div key={s.label}
               className="bg-white rounded-2xl p-5 border border-slate-100
                          shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
            <p className="font-barlow font-black text-3xl leading-none mb-1" style={{ color: s.color }}>
              {s.value}
            </p>
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-[1.5px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 p-1 rounded-xl bg-white border border-slate-100
                      w-fit shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
        {(["registrations", "halloffame"] as TabKey[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-[1.5px] transition-all duration-200"
            style={
              tab === t
                ? { background: "#0057B7", color: "#fff" }
                : { color: "#94a3b8" }
            }
          >
            {t === "registrations" ? "Registrations" : "Hall of Fame"}
          </button>
        ))}
      </div>

      {/* ── Registrations tab ── */}
      {tab === "registrations" && (
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden
                        shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-barlow font-black text-slate-900 uppercase tracking-wide text-lg">
              Registrations
            </h2>
            <button onClick={fetchRegs}
                    className="text-xs font-semibold text-[#0057B7] hover:underline">
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="py-16 text-center text-slate-400 text-sm">Loading…</div>
          ) : regs.length === 0 ? (
            <div className="py-16 text-center text-slate-400 text-sm">
              No registrations yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/60">
                    {["Participant", "Sport", "Team / Player", "Flat", "Submitted", "Status", "Actions"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {regs.map((r) => (
                    <tr key={r.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-3">
                        <p className="font-semibold text-slate-800 text-sm">{r.profiles?.full_name ?? "—"}</p>
                        {r.profiles?.phone && <p className="text-slate-400 text-xs">{r.profiles.phone}</p>}
                      </td>
                      <td className="px-5 py-3 font-semibold text-slate-700">{r.sport}</td>
                      <td className="px-5 py-3 text-slate-500 text-xs">
                        {r.team_name && <p>{r.team_name}</p>}
                        {r.player1   && <p>P1: {r.player1}</p>}
                        {r.player2   && <p>P2: {r.player2}</p>}
                      </td>
                      <td className="px-5 py-3 text-slate-500">{r.flat_number ?? "—"}</td>
                      <td className="px-5 py-3 text-slate-400 text-xs">
                        {new Date(r.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                      </td>
                      <td className="px-5 py-3"><StatusBadge status={r.status} /></td>
                      <td className="px-5 py-3">
                        <div className="flex gap-1.5">
                          {r.status !== "confirmed" && (
                            <button
                              onClick={() => updateStatus(r.id, "confirmed")}
                              disabled={updating === r.id}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[1px]
                                         bg-green-50 text-green-700 border border-green-200
                                         hover:bg-green-100 transition disabled:opacity-50"
                            >
                              Confirm
                            </button>
                          )}
                          {r.status !== "rejected" && (
                            <button
                              onClick={() => updateStatus(r.id, "rejected")}
                              disabled={updating === r.id}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[1px]
                                         bg-red-50 text-red-700 border border-red-200
                                         hover:bg-red-100 transition disabled:opacity-50"
                            >
                              Reject
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Hall of Fame tab ── */}
      {tab === "halloffame" && (
        <div className="max-w-lg">
          <div className="bg-white rounded-2xl border border-slate-100 p-6
                          shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            <h2 className="font-barlow font-black text-slate-900 uppercase tracking-wide text-lg mb-1">
              Add / Update Champion
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Set the winner and runner-up for a sport in a given season.
            </p>
            <form onSubmit={saveChampion} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1.5">Season</span>
                  <select
                    value={hofSeason}
                    onChange={(e) => setHofSeason(Number(e.target.value) as 1 | 2)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800
                               focus:outline-none focus:border-[#0057B7] transition-colors"
                  >
                    <option value={1}>Season 1 · 2024</option>
                    <option value={2}>Season 2 · 2025</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1.5">Sport</span>
                  <select
                    value={hofSport}
                    onChange={(e) => setHofSport(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800
                               focus:outline-none focus:border-[#0057B7] transition-colors"
                  >
                    {sports9.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1.5">🥇 Champion / Winner</span>
                <input
                  type="text"
                  value={hofWinner}
                  onChange={(e) => setHofWinner(e.target.value)}
                  placeholder="Name or Team name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm
                             focus:outline-none focus:border-[#0057B7] transition-colors"
                  required
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1.5">🥈 Runner-up</span>
                <input
                  type="text"
                  value={hofRunnerup}
                  onChange={(e) => setHofRunnerup(e.target.value)}
                  placeholder="Name or Team name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm
                             focus:outline-none focus:border-[#0057B7] transition-colors"
                />
              </label>
              {hofMsg && (
                <p className={`text-sm px-3 py-2 rounded-lg ${hofMsg.startsWith("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                  {hofMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={hofSaving}
                className="w-full py-3 rounded-xl text-white text-sm font-bold
                           uppercase tracking-widest transition-all duration-200
                           hover:brightness-110 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #0057B7, #0070e0)" }}
              >
                {hofSaving ? "Saving…" : "Save Champion"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
