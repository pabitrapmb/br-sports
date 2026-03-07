const cards = [
  {
    icon: "🤝",
    title: "Camaraderie",
    desc: "More than competition — it's about building bonds and friendships within our Blue Ridge community.",
    color: "#0057B7",
  },
  {
    icon: "🏅",
    title: "Sportsmanship",
    desc: "Celebrate fair play, cheer for one another, and create unforgettable sporting memories together.",
    color: "#F0B429",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "All Age Groups",
    desc: "Sports and activities designed to bring together residents of every age — young and old alike.",
    color: "#22c55e",
  },
  {
    icon: "💪",
    title: "Healthy Living",
    desc: "Promoting fitness, teamwork, and an active lifestyle for every resident of Blue Ridge.",
    color: "#ef4444",
  },
];

const stats = [
  { num: "9",    label: "Sports",       color: "#0057B7" },
  { num: "3rd",  label: "Season",       color: "#F0B429" },
  { num: "500+", label: "Participants", color: "#22c55e" },
  { num: "2026", label: "Year",         color: "#ef4444" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#0b1220] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[320px]
                      bg-[#0057B7]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[260px]
                      bg-[#F0B429]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          About the Event
        </p>

        {/* Headline */}
        <h2 className="font-barlow font-black text-white text-center
                       text-[clamp(2.2rem,6vw,3.5rem)] uppercase tracking-wide mb-4">
          Games Event – Season 3
        </h2>

        {/* Accent line */}
        <div className="w-16 h-1.5 rounded-full mx-auto mb-6"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />

        {/* Description */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto leading-relaxed text-sm mb-14">
          With immense excitement and community spirit, we proudly introduce{" "}
          <strong className="text-white">Games Event – Season 3</strong> at Blue Ridge!
          After the tremendous success of the previous seasons, we&apos;re back — bigger, better,
          and more energetic than ever.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label}
                 className="relative rounded-2xl p-6 text-center overflow-hidden
                            border border-white/[0.07] hover:border-white/[0.15]
                            transition-all duration-300 group"
                 style={{ background: `linear-gradient(145deg, ${s.color}10, rgba(255,255,255,0.02))` }}>
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                   style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />

              <p className="font-barlow font-black leading-none mb-1.5
                            transition-transform duration-300 group-hover:scale-105"
                 style={{ fontSize: "clamp(2rem,5vw,2.8rem)", color: s.color }}>
                {s.num}
              </p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[3px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((c) => (
            <div key={c.title}
                 className="relative rounded-2xl p-7 overflow-hidden
                            border border-white/[0.07] hover:border-white/[0.15]
                            transition-all duration-300 group"
                 style={{ background: `linear-gradient(145deg, ${c.color}0d, rgba(255,255,255,0.02))` }}>

              {/* Top accent strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                   style={{ background: `linear-gradient(90deg, transparent, ${c.color}99, transparent)` }} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5
                              transition-all duration-300 group-hover:scale-110"
                   style={{ background: c.color + "20", boxShadow: `0 0 20px ${c.color}20` }}>
                {c.icon}
              </div>

              <h3 className="font-barlow font-bold text-white text-xl uppercase tracking-wide mb-2">
                {c.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
