export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/[0.06]">

      {/* Olympic stripe */}
      <div className="olympic-stripe" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <p className="font-barlow font-black text-white text-xl uppercase tracking-[2px] mb-2">
              BR Champions Trophy
            </p>
            <p className="text-[#F0B429] text-xs font-semibold tracking-[3px] uppercase mb-4">
              Season 3 · 2026
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building community through sport at Blueridge Township, Hinjawadi Phase 1, Pune.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400 mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {["#about","#sports","#schedule","#gallery","#contacts","#community"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-500 text-sm hover:text-white transition-colors capitalize"
                >
                  {href.replace("#", "")}
                </a>
              ))}
            </div>
          </div>

          {/* Venue */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400 mb-4">
              Venue
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-1">
              📍 Blueridge Township<br />
              Hinjawadi Phase 1, Pune
            </p>           
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row
                        items-center justify-between gap-4 text-gray-600 text-xs">
          <p>© 2026 Blue Ridge Champions Trophy – Season 3. All rights reserved.</p>
          <p>
            Title Sponsor:{" "}
            <span className="text-[#F0B429] font-semibold">Blueridge Residents</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
