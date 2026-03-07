"use client";

type SponsorItem =
  | { confirmed: true;  name: string; subtitle: string; icon: string }
  | { confirmed: false; label: string };

const sponsorItems: SponsorItem[] = [
  { confirmed: true,  name: "Blueridge Residents", subtitle: "Associations", icon: "👑" },
  { confirmed: false, label: "Your Brand Here" },
  { confirmed: false, label: "Your Brand Here" },
  { confirmed: false, label: "Your Brand Here" },
  { confirmed: false, label: "Your Brand Here" },
  { confirmed: false, label: "Your Brand Here" },
  { confirmed: false, label: "Your Brand Here" },
];

export default function Sponsors() {
  const track = [...sponsorItems, ...sponsorItems];

  return (
    <section id="sponsors" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto mb-14">
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#F0B429] mb-3">
          Our Sponsors
        </p>
        <h2 className="font-barlow font-black text-slate-900 text-center uppercase
                       text-[clamp(1.8rem,5vw,3rem)] tracking-wide mb-4">
          Proudly Supported By
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto mb-4"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
        <p className="text-slate-500 text-center text-sm max-w-md mx-auto">
          Brands and organisations backing Blue Ridge&apos;s biggest annual sporting celebration.
        </p>
      </div>

      {/* ── Marquee strip ── */}
      <div className="relative w-full overflow-hidden border-y border-slate-100 bg-[#f8fafc]">

        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
             style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
             style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }} />

        <div className="flex animate-marquee">
          {track.map((item, i) => (
            <div key={i} className="flex items-stretch flex-shrink-0">

              {/* Item */}
              <div className="flex flex-col items-center justify-center gap-2 px-12 py-7 w-56">
                {item.confirmed ? (
                  <>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl
                                 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                      style={{ background: "linear-gradient(135deg, rgba(0,87,183,0.08), rgba(240,180,41,0.08))" }}
                    >
                      {item.icon}
                    </div>
                    <p className="font-barlow font-black text-slate-800 text-sm uppercase tracking-wide text-center leading-tight">
                      {item.name}
                    </p>
                    <p className="text-[#F0B429] text-[10px] font-bold uppercase tracking-[2px]">
                      {item.subtitle}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-slate-200
                                    flex items-center justify-center text-xl text-slate-300">
                      +
                    </div>
                    <p className="text-slate-300 text-[11px] font-semibold uppercase tracking-widest text-center">
                      {item.label}
                    </p>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest
                                     bg-slate-100 text-slate-400">
                      Available
                    </span>
                  </>
                )}
              </div>

              {/* Divider */}
              <div className="w-px self-stretch my-4 flex-shrink-0 bg-slate-100" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Become a Sponsor CTA ── */}
      <div className="relative z-10 mt-14 rounded-2xl border border-slate-100 p-8 sm:p-10
                      text-center max-w-2xl mx-auto bg-[#f8fafc]
                      shadow-[0_2px_16px_rgba(0,0,0,0.06)]">

        <div className="flex justify-center gap-10 sm:gap-16 mb-8">
          {[
            { num: "500+", label: "Residents" },
            { num: "9",    label: "Sports"    },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-barlow font-black text-slate-900 text-3xl leading-none">{s.num}</p>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="font-barlow font-bold text-slate-900 text-xl uppercase tracking-wide mb-2">
          Become a Sponsor
        </p>
        <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-md mx-auto">
          Put your brand in front of the entire Blue Ridge community across 9 exciting sports events.
          Multiple tiers available — reach out to discuss.
        </p>
        <a
          href="#community"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold
                     text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, #0057B7, #0070e0)",
            boxShadow: "0 4px 20px rgba(0,87,183,0.35)",
          }}
        >
          Get in Touch →
        </a>
      </div>

    </section>
  );
}
