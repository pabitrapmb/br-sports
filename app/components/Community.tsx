const benefits = [
  {
    icon: "🔔",
    title: "Live Score Updates",
    desc: "Real-time match scores as they happen across all 9 sports.",
    color: "#F0B429",
  },
  {
    icon: "📢",
    title: "Announcements",
    desc: "Instant alerts for schedule changes, venue updates and draws.",
    color: "#60a5fa",
  },
  {
    icon: "🏆",
    title: "Results & Standings",
    desc: "Match results, bracket progress and final standings.",
    color: "#4ade80",
  },
  {
    icon: "📸",
    title: "Photos & Highlights",
    desc: "Best moments from every event shared by the community.",
    color: "#f472b6",
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 px-6 bg-[#080808] overflow-hidden">

      {/* WhatsApp green ambient glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px]
                      bg-[#25D366]/6 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px]
                      bg-[#128C7E]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Header ── */}
        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#25D366] mb-3">
          Join the Conversation
        </p>
        <h2 className="font-barlow font-black text-white text-center uppercase
                       text-[clamp(2rem,6vw,3.2rem)] tracking-wide mb-4">
          WhatsApp Community
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-14"
             style={{ background: "linear-gradient(90deg, #25D366, #128C7E)" }} />

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — benefits */}
          <div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Stay in the loop with everything happening at{" "}
              <span className="text-white font-semibold">Blue Ridge Champions Trophy 2026.</span>{" "}
              One group, the whole community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((b) => (
                <div key={b.title}
                     className="rounded-2xl p-4 border border-white/[0.07] transition-all duration-300
                                hover:border-white/[0.14] group"
                     style={{ background: `linear-gradient(145deg, ${b.color}0c, rgba(255,255,255,0.02))` }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3
                                  transition-transform duration-300 group-hover:scale-110"
                       style={{ background: b.color + "20" }}>
                    {b.icon}
                  </div>
                  <p className="font-bold text-white text-sm mb-1">{b.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Join button — desktop */}
            <a href="https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET"
               target="_blank"
               rel="noopener noreferrer"
               className="hidden lg:inline-flex items-center gap-3 px-7 py-3.5 rounded-xl
                          font-bold text-white text-sm uppercase tracking-widest
                          transition-all duration-200 hover:scale-105 hover:brightness-110"
               style={{
                 background: "linear-gradient(135deg, #25D366, #128C7E)",
                 boxShadow: "0 0 30px rgba(37,211,102,0.3)",
               }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join WhatsApp Group
            </a>
          </div>

          {/* Right — QR card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-3xl p-[2px] w-full max-w-[300px]"
                 style={{ background: "linear-gradient(135deg, #25D366, #128C7E, #25D366)" }}>
              <div className="rounded-[22px] bg-[#0a0a0a] p-8 flex flex-col items-center text-center">

                {/* WhatsApp icon header */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                     style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>

                {/* QR code */}
                <div className="w-44 h-44 rounded-2xl bg-white p-2.5 mb-5 shadow-[0_0_30px_rgba(37,211,102,0.15)]">
                  <img
                    src="/qr-code.png"
                    alt="WhatsApp QR Code"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>

                <p className="text-white font-bold text-sm mb-1">Scan to Join</p>
                <p className="text-gray-500 text-xs tracking-wider uppercase mb-6">
                  Point your camera at the QR code
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 w-full mb-6">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-gray-600 text-[10px] uppercase tracking-widest">or</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Join button — mobile / inside card */}
                <a href="https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                              font-bold text-white text-sm uppercase tracking-widest
                              transition-all duration-200 hover:brightness-110"
                   style={{
                     background: "linear-gradient(135deg, #25D366, #128C7E)",
                     boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                   }}>
                  Tap to Join →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
