"use client";

const tiers = [
  {
    id: "gold",
    label: "Gold Partners",
    color: "#F0B429",
    slots: 2,
    reach: "Logo on all event materials + stage mention",
  },
  {
    id: "silver",
    label: "Silver Partners",
    color: "#94a3b8",
    slots: 3,
    reach: "Logo on banners + event shout-out",
  },
  {
    id: "community",
    label: "Community Partners",
    color: "#60a5fa",
    slots: 4,
    reach: "Listed on event website & notice boards",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 px-6 bg-[#080808] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px]
                      bg-[#F0B429]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px]
                      bg-[#0057B7]/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#F0B429] mb-3">
          Our Sponsors
        </p>
        <h2 className="font-barlow font-black text-white text-center uppercase
                       text-[clamp(1.8rem,5vw,3rem)] tracking-wide mb-4">
          Proudly Supported By
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-4"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-gray-500 text-center text-sm mb-14 max-w-md mx-auto">
          Brands and organisations backing Blue Ridge's biggest annual sporting celebration.
        </p>

        {/* ── Title Sponsor ── */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#F0B429]">
              👑 Title Sponsor
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Gradient-border card */}
          <div className="relative rounded-3xl p-[2px] max-w-sm mx-auto"
               style={{ background: "linear-gradient(135deg, #0057B7 0%, #F0B429 50%, #0057B7 100%)" }}>
            <div className="rounded-[22px] bg-[#0a0a0a] px-10 py-10 text-center">
              {/* Crown icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                   style={{ background: "linear-gradient(135deg, rgba(0,87,183,0.3), rgba(240,180,41,0.3))" }}>
                👑
              </div>
              <p className="font-barlow font-black text-white uppercase tracking-[2px]"
                 style={{ fontSize: "clamp(1.4rem,3.5vw,1.9rem)" }}>
                Blueridge Residents
              </p>
              <p className="text-[#F0B429] text-xs font-semibold tracking-[3px] uppercase mt-1">
                Associations
              </p>
              <span className="inline-flex items-center gap-1.5 mt-5 px-3 py-1 rounded-full text-[10px]
                               font-bold uppercase tracking-widest"
                    style={{ background: "rgba(240,180,41,0.12)", color: "#F0B429", border: "1px solid rgba(240,180,41,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0B429] inline-block" />
                Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* ── Partner Tiers ── */}
        {tiers.map((tier) => (
          <div key={tier.id} className="mb-12">

            {/* Tier label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/8" />
              <span className="text-[10px] font-bold uppercase tracking-[3px]"
                    style={{ color: tier.color }}>
                {tier.label}
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/8" />
            </div>

            {/* Available slot cards */}
            <div className={`grid gap-4 mx-auto
              ${tier.slots === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-xl" : ""}
              ${tier.slots === 3 ? "grid-cols-1 sm:grid-cols-3 max-w-3xl" : ""}
              ${tier.slots === 4 ? "grid-cols-2 sm:grid-cols-4 max-w-4xl" : ""}`}>
              {Array.from({ length: tier.slots }).map((_, i) => (
                <div key={i}
                     className="rounded-2xl border-2 border-dashed p-6 text-center
                                transition-all duration-300 group hover:scale-[1.02]"
                     style={{
                       borderColor: tier.color + "35",
                       background: tier.color + "06",
                     }}>
                  {/* Plus icon circle */}
                  <div className="w-11 h-11 rounded-full border-2 border-dashed flex items-center justify-center
                                  text-xl mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                       style={{ borderColor: tier.color + "50", color: tier.color + "70" }}>
                    +
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-1"
                     style={{ color: tier.color + "90" }}>
                    Slot Available
                  </p>
                  <p className="text-gray-600 text-[10px] leading-relaxed mt-1">
                    {tier.reach}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── Become a Sponsor CTA ── */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] p-8 sm:p-10 text-center max-w-2xl mx-auto"
             style={{ background: "linear-gradient(145deg, rgba(0,87,183,0.08), rgba(255,255,255,0.02))" }}>

          {/* Stats row */}
          <div className="flex justify-center gap-8 sm:gap-12 mb-8">
            {[
              { num: "500+", label: "Residents" },
              { num: "9",    label: "Sports"    },
              { num: "3",    label: "Days"      },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-barlow font-black text-white text-2xl leading-none">{s.num}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="font-barlow font-bold text-white text-xl uppercase tracking-wide mb-2">
            Become a Sponsor
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-md mx-auto">
            Put your brand in front of the entire Blue Ridge community across 9 exciting sports events.
            Multiple tiers available — reach out to discuss.
          </p>
          <a href="#contacts"
             className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold
                        text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
             style={{
               background: "linear-gradient(135deg, #0057B7, #0070e0)",
               boxShadow: "0 4px 24px rgba(0,87,183,0.4)",
             }}>
            Get in Touch →
          </a>
        </div>

      </div>
    </section>
  );
}
