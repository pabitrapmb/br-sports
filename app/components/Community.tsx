export default function Community() {
  return (
    <section id="community" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-xs font-bold tracking-[4px] uppercase text-[#F0B429] mb-3">
          Join the Conversation
        </p>
        <h2 className="font-barlow font-black text-white uppercase
                       text-[clamp(2rem,6vw,3.2rem)] tracking-wide mb-4">
          WhatsApp Community
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-8"
             style={{ background: "linear-gradient(90deg, #25D366, #128C7E)" }} />

        <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
          Stay updated with live scores, event announcements, schedule changes, and connect
          with fellow participants — all in one place.
        </p>

        {/* QR + action card */}
        <div className="bg-[#000000] border border-white/10 rounded-3xl p-10 inline-block
                        shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

          {/* QR placeholder */}
          <div className="w-48 h-48 rounded-2xl bg-white mx-auto mb-6 flex flex-col
                          items-center justify-center border-4 border-[#25D366]/30">           
            <p className="text-[#25D366] font-bold text-xs text-center px-4 leading-tight">
              <img
                src="/qr-code.png"
                alt="WhatsApp QR Code"
                className="w-40 h-40 mx-auto mb-5 rounded-2xl"
              />
            </p>
          </div>

          <p className="text-gray-400 text-xs mb-5 tracking-wider uppercase font-semibold">
            Scan to join · or click below
          </p>

          <a
            href="https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white
                       text-sm uppercase tracking-widest transition-all duration-200
                       hover:-translate-y-0.5 shadow-[0_0_30px_rgba(37,211,102,0.35)]
                       hover:shadow-[0_0_50px_rgba(37,211,102,0.6)]"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <span className="text-xl">💬</span>
            Join WhatsApp Group
          </a>

          <div className="flex items-center justify-center gap-6 mt-8 text-gray-600 text-xs">
            <span>🔔 Live updates</span>
            <span>📢 Announcements</span>
            <span>🏆 Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}
