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

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          About the Event
        </p>

        {/* Headline */}
        <h2 className="font-barlow font-black text-[#050c18] text-center
                       text-[clamp(2.2rem,6vw,3.5rem)] uppercase tracking-wide mb-4">
          Games Event – Season 3
        </h2>

        {/* Accent line */}
        <div className="w-16 h-1.5 rounded-full mx-auto mb-6"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />

        {/* Description */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed text-sm mb-14">
          With immense excitement and community spirit, we proudly introduce{" "}
          <strong className="text-[#050c18]">Games Event – Season 3</strong> at Blue Ridge!
          After the tremendous success of the previous seasons, we&apos;re back — bigger, better,
          and more energetic than ever.
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { num: "9",    label: "Sports" },
            { num: "3rd",  label: "Season" },
            { num: "500+", label: "Participants" },
            { num: "2026", label: "Year" },
          ].map((s) => (
            <div key={s.label}
                 className="text-center py-6 px-4 rounded-2xl bg-[#F0F5FF] border border-[#0057B7]/10">
              <p className="font-barlow font-black text-[#0057B7] text-4xl leading-none mb-1">
                {s.num}
              </p>
              <p className="text-[#050c18] text-xs font-semibold uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-7
                         shadow-sm hover:shadow-xl hover:border-transparent"
              style={{ "--hover-color": c.color } as React.CSSProperties}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                   style={{ background: c.color + "15" }}>
                {c.icon}
              </div>
              <h3 className="font-barlow font-bold text-[#050c18] text-xl uppercase tracking-wide mb-2">
                {c.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
