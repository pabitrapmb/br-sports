const cards = [
  {
    icon: "🤝",
    title: "Camaraderie",
    desc: "More than competition — it's about building bonds and friendships within our Blue Ridge community.",
  },
  {
    icon: "🏅",
    title: "Sportsmanship",
    desc: "Celebrate fair play, cheer for one another, and create unforgettable sporting memories together.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "All Age Groups",
    desc: "Sports and activities designed to bring together residents of every age — young and old alike.",
  },
  {
    icon: "💪",
    title: "Healthy Living",
    desc: "Promoting fitness, teamwork, and an active lifestyle for every resident of Blue Ridge.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0d0d1a 0%, #111128 100%)" }}
    >
      <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#f5a623] mb-2">
        About the Event
      </p>
      <h2 className="font-bebas gradient-text-white-gold text-center text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
        Games Event – Season 3
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-[#f5a623] to-red-500 rounded-full mx-auto mb-5" />
      <p className="text-gray-400 text-center max-w-2xl mx-auto leading-relaxed text-sm mb-14">
        With immense excitement and community spirit, we proudly introduce{" "}
        <strong className="text-white">Games Event – Season 3</strong> at Blue Ridge! After the tremendous
        success of the previous seasons, we&apos;re back — bigger, better, and more energetic than ever.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 text-center
                       transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f5a623]/60"
          >
            <div className="text-4xl mb-3">{c.icon}</div>
            <h3 className="font-bold text-white mb-2">{c.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
