"use client";

export default function Hero() {
  const tags = [
    { label: "🏏 Cricket",       color: "#ef4444" },
    { label: "⚽ Football",      color: "#22c55e" },
    { label: "🏸 Badminton",     color: "#22d3ee" },
    { label: "🏓 Table Tennis",  color: "#F0B429" },
    { label: "♟ Chess",          color: "#a78bfa" },
    { label: "🎱 Carrom",        color: "#f472b6" },
    { label: "🚴 Cycling",       color: "#60a5fa" },
    { label: "🏃 Mini Marathon", color: "#4ade80" },
    { label: "🥏 Pickleball",    color: "#fb923c" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Left-side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[700px]
                      bg-[#0057B7]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Right-side warm glow behind logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px]
                      bg-[#F0B429]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6
                      pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">

        {/* ── LEFT: Text ── */}
        <div className="flex flex-col items-start order-2 lg:order-1">

          {/* Location pill */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7
                           bg-white/[0.06] border border-white/[0.1]
                           text-gray-400 text-xs font-semibold uppercase tracking-[2.5px]
                           animate-fade-down">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] animate-pulse inline-block" />
            Blueridge Township · Hinjawadi · Pune
          </span>

          {/* Season label */}
          <p className="text-[#F0B429] text-xs font-bold tracking-[5px] uppercase mb-4 animate-fade-down">
            Games Event – Season 3
          </p>

          {/* Giant headline */}
          <h1 className="font-barlow font-black uppercase leading-[0.88] mb-6 animate-fade-down-2"
              style={{ fontSize: "clamp(4rem,9.5vw,7.5rem)", color: "#ffffff" }}>
            Blue Ridge<br />
            <span style={{
              background: "linear-gradient(90deg, #ffffff 0%, #F0B429 45%, #ff8c00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Champions<br />Trophy
            </span>
          </h1>

          {/* Year */}
          <p className="font-barlow font-black text-white/20 text-[clamp(2rem,5vw,3.5rem)]
                        tracking-[10px] mb-6 animate-fade-down-3">
            2026
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md animate-fade-up">
            Bigger, better, and more energetic than ever — 9 sports, all age groups,
            pure community spirit. Brought to you by{" "}
            <span className="text-white font-semibold">Blueridge Residents</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up">
            <button
              onClick={() => {
                const el = document.querySelector("#schedule");
                if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-xl text-white font-bold text-sm uppercase tracking-widest
                         transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #0057B7, #0070e0)",
                boxShadow: "0 0 30px rgba(0,87,183,0.45)",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(0,87,183,0.7)"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,87,183,0.45)"}
            >
              View Schedule
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#sports");
                if (el) window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/50
                         text-white font-bold text-sm uppercase tracking-widest
                         transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              All Sports →
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 animate-fade-up-2">
            {tags.map((t) => (
              <span key={t.label} className="px-3 py-1 rounded-full text-[11px] font-semibold border"
                    style={{ borderColor: t.color + "45", color: t.color, background: t.color + "0f" }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Logo image — no box, blends into background ── */}
        <div className="flex items-center justify-center order-1 lg:order-2 animate-slide-left">
          <div className="relative w-full max-w-[520px]">

            {/* Atmospheric glow rings behind the logo */}
            <div className="absolute inset-[10%] rounded-full blur-3xl pointer-events-none animate-float"
                 style={{ background: "radial-gradient(circle, rgba(240,180,41,0.12) 0%, rgba(0,87,183,0.08) 50%, transparent 80%)" }} />

            {/*
              mix-blend-mode: screen makes the WHITE background of the PNG disappear on black/dark bg.
              The colourful illustration pops through beautifully with no box.
            */}
            <img
              src="/BRPPL_BG_HiRes.jpg"
              alt="Blue Ridge Champions Trophy 2026"
              className="w-full h-auto relative z-10 animate-float"
              style={{
                mixBlendMode: "screen",
                filter: "drop-shadow(0 0 60px rgba(240,180,41,0.2))",
              }}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.mixBlendMode = "normal";
                el.style.opacity = "0";
                const parent = el.parentElement as HTMLElement;
                if (parent) {
                  parent.innerHTML = `
                    <div style="width:100%;aspect-ratio:1;display:flex;flex-direction:column;
                                align-items:center;justify-content:center;gap:16px;
                                border:2px dashed rgba(240,180,41,0.25);border-radius:24px;">
                      <div style="font-size:90px;filter:drop-shadow(0 0 30px rgba(240,180,41,0.5))">🏆</div>
                      <p style="color:rgba(240,180,41,0.7);font-weight:700;font-size:13px;text-align:center;
                                font-family:'Barlow Condensed',sans-serif;letter-spacing:3px;text-transform:uppercase">
                        Add logo.png to /public
                      </p>
                    </div>`;
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40
                      bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                      text-gray-600 animate-fade-up-2">
        {/* <span className="text-[10px] font-semibold uppercase tracking-[3px]">Scroll</span> */}
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
