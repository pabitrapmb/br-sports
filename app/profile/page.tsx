"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/app/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

type Registration = {
  id: string;
  sport: string;
  team_name: string | null;
  player1: string | null;
  player2: string | null;
  flat_number: string | null;
  status: string;
  created_at: string;
};

type Profile = {
  full_name: string;
  flat_number: string;
  tower: string;
  phone: string;
};

const sports9 = [
  { emoji: "🏸", name: "Badminton",     accent: "#22d3ee", open: true  },
  { emoji: "🏓", name: "Table Tennis",  accent: "#F0B429", open: true  },
  { emoji: "♟",  name: "Chess",         accent: "#a78bfa", open: true  },
  { emoji: "🎱", name: "Carrom",        accent: "#f472b6", open: true  },
  { emoji: "🏏", name: "Cricket",       accent: "#ef4444", open: false },
  { emoji: "⚽", name: "Football",      accent: "#22c55e", open: false },
  { emoji: "🚴", name: "Cycling",       accent: "#60a5fa", open: false },
  { emoji: "🏃", name: "Mini Marathon", accent: "#4ade80", open: false },
  { emoji: "🥏", name: "Pickleball",    accent: "#fb923c", open: false },
];

const statusStyle: Record<string, { bg: string; color: string }> = {
  pending:   { bg: "#fef9c3", color: "#92400e" },
  confirmed: { bg: "#dcfce7", color: "#166534" },
  rejected:  { bg: "#fee2e2", color: "#991b1b" },
};

export default function ProfilePage() {
  const supabase = createClient();
  const [user,        setUser]        = useState<User | null>(null);
  const [profile,     setProfile]     = useState<Profile>({ full_name: "", flat_number: "", tower: "", phone: "" });
  const [regs,        setRegs]        = useState<Registration[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [saving,      setSaving]      = useState(false);
  const [saveMsg,     setSaveMsg]     = useState("");
  const [regSport,    setRegSport]    = useState<string | null>(null);
  const [regForm,     setRegForm]     = useState({ team_name: "", player1: "", player2: "", flat_number: "" });
  const [regLoading,  setRegLoading]  = useState(false);
  const [regMsg,      setRegMsg]      = useState("");

  const load = useCallback(async (u: User) => {
    const [{ data: p }, { data: r }] = await Promise.all([
      supabase.from("profiles").select("*").eq("id", u.id).single(),
      supabase.from("registrations").select("*").eq("user_id", u.id).order("created_at", { ascending: false }),
    ]);
    if (p) setProfile({ full_name: p.full_name ?? "", flat_number: p.flat_number ?? "", tower: p.tower ?? "", phone: p.phone ?? "" });
    setRegs((r as Registration[]) ?? []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { window.location.href = "/"; return; }
      setUser(user);
      load(user);
    });
  }, [supabase, load]);

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSaving(true); setSaveMsg("");
    const { error } = await supabase.from("profiles").upsert({ id: user.id, ...profile });
    setSaveMsg(error ? "❌ " + error.message : "✅ Profile saved!");
    setSaving(false);
  }

  async function submitRegistration(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !regSport) return;
    setRegLoading(true); setRegMsg("");
    const { error } = await supabase.from("registrations").insert({
      user_id:     user.id,
      sport:       regSport,
      team_name:   regForm.team_name || null,
      player1:     regForm.player1   || null,
      player2:     regForm.player2   || null,
      flat_number: regForm.flat_number || profile.flat_number || null,
    });
    if (error) {
      setRegMsg("❌ " + error.message);
    } else {
      setRegMsg("✅ Registration submitted! An organiser will confirm it soon.");
      setRegSport(null);
      setRegForm({ team_name: "", player1: "", player2: "", flat_number: "" });
      load(user);
    }
    setRegLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center">
        <div className="text-slate-400 text-sm">Loading your profile…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] py-8 px-4">

      {/* ── Top bar ── */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#0057B7] mb-0.5">My Account</p>
          <h1 className="font-barlow font-black text-slate-900 uppercase tracking-wide text-2xl">
            {profile.full_name || "Welcome"}
          </h1>
        </div>
        <a href="/"
           className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600
                      hover:bg-white hover:shadow-sm transition-all">
          ← Back to Site
        </a>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Profile form ── */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-slate-100 p-6
                          shadow-[0_2px_12px_rgba(0,0,0,0.05)]">

            {/* Avatar */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-white mb-4"
                 style={{ background: "linear-gradient(135deg, #0057B7, #F0B429)" }}>
              {profile.full_name ? profile.full_name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() : "BR"}
            </div>

            <h2 className="font-barlow font-black text-slate-900 uppercase tracking-wide text-base mb-0.5">
              Profile Details
            </h2>
            <p className="text-slate-400 text-xs mb-5">
              {user?.email ?? user?.phone ?? ""}
            </p>

            <form onSubmit={saveProfile} className="space-y-3">
              {[
                { key: "full_name",    label: "Full Name",    placeholder: "Rahul Sharma" },
                { key: "flat_number",  label: "Flat No.",     placeholder: "A-1203" },
                { key: "tower",        label: "Tower / Wing", placeholder: "Tower A" },
                { key: "phone",        label: "Mobile",       placeholder: "98765 43210" },
              ].map((f) => (
                <label key={f.key} className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1">
                    {f.label}
                  </span>
                  <input
                    type="text"
                    value={(profile as Record<string, string>)[f.key]}
                    onChange={(e) => setProfile((p) => ({ ...p, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm
                               focus:outline-none focus:border-[#0057B7] transition-colors"
                  />
                </label>
              ))}
              {saveMsg && (
                <p className={`text-xs px-3 py-2 rounded-lg ${saveMsg.startsWith("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                  {saveMsg}
                </p>
              )}
              <button type="submit" disabled={saving}
                      className="w-full py-2.5 rounded-xl text-white text-sm font-bold uppercase tracking-widest
                                 transition-all hover:brightness-110 disabled:opacity-60"
                      style={{ background: "linear-gradient(135deg, #0057B7, #0070e0)" }}>
                {saving ? "Saving…" : "Save Profile"}
              </button>
            </form>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="lg:col-span-2 space-y-6">

          {/* Registration form */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6
                          shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <h2 className="font-barlow font-black text-slate-900 uppercase tracking-wide text-base mb-1">
              Register for a Sport
            </h2>
            <p className="text-slate-400 text-xs mb-5">
              Select a sport and submit your registration. The organiser will confirm your spot.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mb-4">
              {sports9.map((s) => (
                <button
                  key={s.name}
                  onClick={() => { setRegSport(regSport === s.name ? null : s.name); setRegMsg(""); }}
                  disabled={!s.open}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center
                              transition-all duration-200 text-xs font-semibold
                              ${!s.open ? "opacity-35 cursor-not-allowed" : "cursor-pointer hover:-translate-y-0.5"}`}
                  style={
                    regSport === s.name
                      ? { border: `2px solid ${s.accent}`, background: s.accent + "12", color: s.accent }
                      : { border: "1px solid #e2e8f0", color: "#64748b" }
                  }
                >
                  <span className="text-xl">{s.emoji}</span>
                  <span className="leading-tight">{s.name}</span>
                  {!s.open && <span className="text-[9px] uppercase tracking-wide">TBD</span>}
                </button>
              ))}
            </div>

            {regSport && (
              <form onSubmit={submitRegistration} className="space-y-3 border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-700 text-sm">
                  Registering for: <strong style={{ color: sports9.find((s) => s.name === regSport)?.accent }}>{regSport}</strong>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1">Team Name (optional)</span>
                    <input type="text" value={regForm.team_name}
                           onChange={(e) => setRegForm((f) => ({ ...f, team_name: e.target.value }))}
                           placeholder="e.g. BR Warriors"
                           className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0057B7] transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1">Player 1 Name</span>
                    <input type="text" value={regForm.player1}
                           onChange={(e) => setRegForm((f) => ({ ...f, player1: e.target.value }))}
                           placeholder="Your name"
                           className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0057B7] transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1">Player 2 Name (doubles)</span>
                    <input type="text" value={regForm.player2}
                           onChange={(e) => setRegForm((f) => ({ ...f, player2: e.target.value }))}
                           placeholder="Partner's name"
                           className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0057B7] transition-colors" />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 block mb-1">Flat No.</span>
                    <input type="text" value={regForm.flat_number || profile.flat_number}
                           onChange={(e) => setRegForm((f) => ({ ...f, flat_number: e.target.value }))}
                           placeholder="A-1203"
                           className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0057B7] transition-colors" />
                  </label>
                </div>
                {regMsg && (
                  <p className={`text-xs px-3 py-2 rounded-lg ${regMsg.startsWith("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {regMsg}
                  </p>
                )}
                <div className="flex gap-2">
                  <button type="submit" disabled={regLoading}
                          className="px-6 py-2.5 rounded-xl text-white text-sm font-bold uppercase tracking-widest
                                     transition-all hover:brightness-110 disabled:opacity-60"
                          style={{ background: `linear-gradient(135deg, ${sports9.find((s) => s.name === regSport)?.accent}, #0057B7)` }}>
                    {regLoading ? "Submitting…" : "Submit Registration"}
                  </button>
                  <button type="button" onClick={() => setRegSport(null)}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold
                                     text-slate-500 hover:bg-slate-50 transition">
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* My registrations */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden
                          shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="font-barlow font-black text-slate-900 uppercase tracking-wide text-base">
                My Registrations
              </h2>
            </div>
            {regs.length === 0 ? (
              <p className="px-6 py-8 text-slate-400 text-sm text-center">
                No registrations yet. Select a sport above to register.
              </p>
            ) : (
              <div className="divide-y divide-slate-50">
                {regs.map((r) => {
                  const style = statusStyle[r.status] ?? statusStyle["pending"];
                  return (
                    <div key={r.id} className="px-6 py-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{r.sport}</p>
                        <p className="text-slate-400 text-xs mt-0.5">
                          {[r.team_name, r.player1, r.player2].filter(Boolean).join(" · ") || "Individual"} · {r.flat_number ?? profile.flat_number}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-slate-400 text-xs hidden sm:block">
                          {new Date(r.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[1.5px]"
                              style={{ background: style.bg, color: style.color }}>
                          {r.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
