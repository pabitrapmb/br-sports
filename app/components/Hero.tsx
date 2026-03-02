"use client";

export default function Hero() {
  const tags = [
    { label: "🏏 Cricket",       cls: "border-red-500   text-red-400   bg-red-500/10" },
    { label: "⚽ Football",      cls: "border-green-500 text-green-400 bg-green-500/10" },
    { label: "🏸 Badminton",     cls: "border-cyan-400  text-cyan-400  bg-cyan-400/10" },
    { label: "🏓 Table Tennis",  cls: "border-[#f5a623] text-[#f5a623] bg-[#f5a623]/10" },
    { label: "♟ Chess",          cls: "border-purple-500 text-purple-400 bg-purple-500/10" },
    { label: "🎯 Carrom",        cls: "border-red-400   text-red-400   bg-red-400/10" },
    { label: "🚴 Cycling",       cls: "border-blue-400  text-blue-400  bg-blue-400/10" },
    { label: "🏃 Mini Marathon", cls: "border-green-400 text-green-400 bg-green-400/10" },
    { label: "🥏 Pickleball",    cls: "border-[#f5a623] text-[#f5a623] bg-[#f5a623]/10" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(26,58,143,.55) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 30%, rgba(123,45,139,.45) 0%, transparent 55%),
          radial-gradient(ellipse at 60% 80%, rgba(0,180,216,.35) 0%, transparent 50%),
          linear-gradient(160deg, #0d0d1a 0%, #111130 100%)
        `,
      }}
    >
      {/* Floating shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#f5a623]/8 animate-float pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-48 h-48 rounded-full bg-cyan-400/8 animate-float-delay-3 pointer-events-none" />
      <div className="absolute top-[40%] left-[3%] w-36 h-36 rounded-full bg-purple-500/8 animate-float-delay-6 pointer-events-none" />

      {/* Season badge */}
      <span className="inline-block bg-gradient-to-r from-[#f5a623] to-orange-500 text-black font-bold text-xs px-5 py-1.5 rounded-full tracking-[3px] uppercase mb-5 animate-fade-down">
        🏅 Season 3 · 2026
      </span>

      {/* Org */}
      <p className="text-cyan-400 text-sm tracking-[4px] uppercase mb-2 animate-fade-down">
        Blue Ridge Sports Association
      </p>

      {/* Title */}
      <h1 className="font-bebas gradient-text leading-none text-[clamp(3.5rem,10vw,7.5rem)] mb-2 animate-fade-down-2">
        Champions<br />Trophy
      </h1>

      {/* Year */}
      <p className="font-bebas text-white text-[clamp(1.6rem,5vw,3rem)] tracking-[6px] mb-4 animate-fade-down-3">
        2026
      </p>

      {/* Sponsor */}
      <p className="text-gray-400 italic text-sm mb-8 animate-fade-down-3">
        Brought to you by <span className="text-[#f5a623] font-bold not-italic">BR RESIDENTS</span>
      </p>

      {/* Sports strip */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-10 animate-fade-up max-w-2xl">
        {tags.map((t) => (
          <span
            key={t.label}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border-2 ${t.cls}`}
          >
            {t.label}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-block bg-gradient-to-r from-[#f5a623] to-orange-500 text-black font-bold text-base px-10 py-3.5 rounded-full tracking-wide animate-fade-up-2 transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(245,166,35,.6)] shadow-[0_6px_30px_rgba(245,166,35,.4)]"
      >
        Explore Season 3 ↓
      </a>
    </section>
  );
}
