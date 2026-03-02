"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About",     href: "#about" },
  { label: "Sports",    href: "#sports" },
  { label: "Contacts",  href: "#contacts" },
  { label: "Community", href: "#community" },
  { label: "Sponsors",  href: "#sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).offsetTop - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-[#f5a623]/40
        ${scrolled ? "bg-[#0d0d1a]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bebas text-[#f5a623] text-xl tracking-widest hover:opacity-80 transition"
        >
          🏆 BR SPORTS
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="text-gray-300 hover:text-[#f5a623] text-xs font-semibold uppercase tracking-widest transition"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#f5a623] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#f5a623] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#f5a623] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d1a]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleClick(l.href)}
              className="text-gray-300 hover:text-[#f5a623] text-sm font-semibold uppercase tracking-widest transition text-left"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
