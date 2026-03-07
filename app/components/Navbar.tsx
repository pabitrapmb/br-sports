"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About",     href: "#about" },
  { label: "Sports",    href: "#sports" },
  { label: "Schedule",  href: "#schedule" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Contacts",  href: "#contacts" },
  { label: "Community", href: "#community" },
  { label: "Sponsors",  href: "#sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Olympic 5-colour stripe */}
      <div className="olympic-stripe" />

      {/* Main nav */}
      <nav
        className={`transition-all duration-300
          ${scrolled
            ? "bg-[#000000]/98 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "bg-[#000000]"}`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-6">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 flex-shrink-0 group"
            aria-label="Back to top"
          >
            {/* Logo image */}
            <div className="h-9 sm:h-10 w-fit rounded-xl overflow-hidden bg-[#111111] flex items-center justify-center px-1.5
                            border border-white/10 group-hover:border-[#F0B429]/60 transition-all duration-200">
              <img
                src="/BRPPL_BG_HiRes.jpg"
                alt="BR Champions Trophy"
                className="h-7 sm:h-8 w-auto object-contain"
                onError={(e) => {
                  const t = e.currentTarget.parentElement as HTMLElement;
                  if (t) t.innerHTML = '<span style="font-size:22px;line-height:1;padding:0 4px">🏆</span>';
                }}
              />
            </div>
            <div className="leading-tight text-left hidden sm:block">
              <p className="font-barlow font-semibold text-white/70 text-xs tracking-[1.5px] uppercase">
                BR Champions Trophy
              </p>
              <p className="text-[#F0B429] text-[10px] font-medium tracking-[2px] uppercase">
                Season 3 · 2026
              </p>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-300
                             hover:text-white hover:bg-white/[0.06] rounded-lg transition-all duration-150"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Register CTA */}
          <button
            onClick={() => handleClick("#schedule")}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-lg flex-shrink-0
                       bg-[#0057B7] hover:bg-[#1a6fd4] text-white text-[11px] font-bold
                       uppercase tracking-[1.5px] transition-all duration-200
                       shadow-[0_0_20px_rgba(0,87,183,0.35)] hover:shadow-[0_0_30px_rgba(0,87,183,0.65)]"
          >
            Register
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-1.5 rounded-lg hover:bg-white/5 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="lg:hidden bg-[#000000] border-t border-white/10 px-5 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleClick(l.href)}
                className="text-left px-4 py-3 text-sm font-semibold uppercase tracking-widest
                           text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#schedule")}
              className="mt-3 w-full py-3 rounded-lg bg-[#0057B7] hover:bg-[#1a6fd4]
                         text-white text-sm font-bold uppercase tracking-widest transition"
            >
              Register Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
