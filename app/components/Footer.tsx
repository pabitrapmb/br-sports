export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 relative overflow-hidden">

      {/* Ghost logo — large, right-aligned background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <img
          src="/BRPPL_BG_HiRes.jpg"
          alt=""
          aria-hidden="true"
          className="w-[420px] object-contain"
          style={{
            opacity: 0.10,
            filter: "grayscale(40%) contrast(0.85) brightness(1.3)",
          }}
        />
      </div>

      {/* Olympic stripe */}
      <div className="olympic-stripe" />

      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            {/* Visible logo in footer brand column */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl overflow-hidden flex-shrink-0
                              border border-white/10 bg-white/5 flex items-center justify-center p-1">
                <img
                  src="/BRPPL_BG_HiRes.jpg"
                  alt="BR Champions Trophy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-barlow font-black text-white text-base uppercase tracking-[2px] leading-tight">
                  BR Champions Trophy
                </p>
                <p className="text-[#F0B429] text-[10px] font-bold tracking-[3px] uppercase">
                  Season 3 · 2026
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building community through sport at Blueridge Township, Hinjawadi Phase 1, Pune.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-slate-500 mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {["#about","#sports","#schedule","#gallery","#community","#sponsors"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="text-slate-500 text-sm hover:text-white transition-colors capitalize
                             w-fit hover:translate-x-0.5 inline-block transition-transform duration-150"
                >
                  {href.replace("#", "")}
                </a>
              ))}
            </div>
          </div>

          {/* Venue */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-slate-500 mb-4">
              Venue
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mb-1">
              📍 Blueridge Township<br />
              Hinjawadi Phase 1, Pune
            </p>
          </div>
        </div>

        {/* Bottom bar — with WhatsApp link on the right */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-4 text-slate-600 text-xs">
          <p>© 2026 Blue Ridge Champions Trophy – Season 3. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/BBWiHD9d3I338tpO50LpFZLET"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: "#25D366" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-semibold" style={{ color: "#25D366" }}>Join WhatsApp Community</span>
            </a>
            <span className="text-slate-700">·</span>
            <p>
              Title Sponsor:{" "}
              <span className="text-[#F0B429] font-semibold">Blueridge Residents</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
