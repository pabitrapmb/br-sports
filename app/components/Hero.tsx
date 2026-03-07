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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Full-bleed background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/BRPPL_BG_HiRes.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.22, filter: "contrast(1.15)" }}
        />
      </div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* Left-side blue glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px]
                      bg-[#0057B7]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Right warm glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px]
                      bg-[#F0B429]/8 blur-[160px] rounded-full pointer-events-none" />

      {/* Content — single column, centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-28 pb-16
                      flex flex-col items-center text-center">

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
        <h1 className="font-barlow font-black uppercase leading-[0.9] mb-6 animate-fade-down-2">
          <span className="block text-white/60"
                style={{ fontSize: "clamp(2rem,5.5vw,4rem)" }}>
            Blue Ridge
          </span>
          <span className="block" style={{
            fontSize: "clamp(3rem,8vw,6rem)",
            background: "linear-gradient(90deg, #ffffff 0%, #F0B429 55%, #ff8c00 100%)",
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
        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg animate-fade-up">
          Bigger, better, and more energetic than ever — 9 sports, all age groups,
          pure community spirit. Brought to you by{" "}
          <span className="text-white font-semibold">Blueridge Residents</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center animate-fade-up">
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

        {/* Sports tags */}
        <div className="flex flex-wrap gap-2 justify-center animate-fade-up-2">
          {tags.map((t) => (
            <span key={t.label} className="px-3 py-1 rounded-full text-[11px] font-semibold border"
                  style={{ borderColor: t.color + "45", color: t.color, background: t.color + "0f" }}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40
                      bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                      text-gray-600 animate-fade-up-2">
        <div className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
