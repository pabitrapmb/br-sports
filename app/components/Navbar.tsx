"use client";

import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/app/lib/supabase/client";
import AuthModal from "./AuthModal";

const links = [
  { label: "About",        href: "#about" },
  { label: "Sports",       href: "#sports" },
  { label: "Schedule",     href: "#schedule" },
  { label: "Highlights",   href: "#highlights" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Hall of Fame", href: "#halloffame" },
  { label: "Community",    href: "#community" },
  { label: "Sponsors",     href: "#sponsors" },
];

export default function Navbar() {
  const supabase = createClient();

  const [scrolled,      setScrolled]      = useState(false);
  const [open,          setOpen]          = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [user,          setUser]          = useState<User | null>(null);
  const [isAdmin,       setIsAdmin]       = useState(false);
  const [authOpen,      setAuthOpen]      = useState(false);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers  = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: "-64px 0px -30% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  /* Auth state */
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) fetchAdminStatus(user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const u = session?.user ?? null;
        setUser(u);
        if (u) fetchAdminStatus(u.id);
        else    setIsAdmin(false);
      },
    );
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchAdminStatus(userId: string) {
    const { data } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", userId)
      .single();
    setIsAdmin(data?.is_admin === true);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
    window.location.href = "/";
  }

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  /* User avatar initials */
  const initials = user?.user_metadata?.full_name
    ? (user.user_metadata.full_name as string).split(" ").map((w: string) => w[0]).slice(0, 2).join("").toUpperCase()
    : user?.email?.slice(0, 2).toUpperCase()
    ?? "BR";

  return (
    <>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

      <header className="fixed top-0 w-full z-50">
        {/* Olympic 5-colour stripe */}
        <div className="olympic-stripe" />

        <nav
          className={`bg-white transition-all duration-300
            ${scrolled
              ? "shadow-[0_2px_16px_rgba(0,0,0,0.10)] border-b border-slate-100"
              : "border-b border-slate-100"}`}
        >
          <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-6">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 flex-shrink-0 group"
              aria-label="Back to top"
            >
              <div className="h-9 sm:h-10 w-fit rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center px-1.5
                              border border-slate-200 group-hover:border-[#0057B7]/50 transition-all duration-200">
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
                <p className="font-barlow font-semibold text-slate-600 text-xs tracking-[1.5px] uppercase">
                  BR Champions Trophy
                </p>
                <p className="text-[#F0B429] text-[10px] font-bold tracking-[2px] uppercase">
                  Season 3 · 2026
                </p>
              </div>
            </button>

            {/* Desktop links — xl breakpoint to fit all 8 links */}
            <ul className="hidden xl:flex items-center gap-0.5">
              {links.map((l) => {
                const isActive = activeSection === l.href.replace("#", "");
                return (
                  <li key={l.href}>
                    <button
                      onClick={() => handleClick(l.href)}
                      className="relative px-3 py-2 text-[10px] font-semibold uppercase tracking-[1.5px]
                                 rounded-lg transition-all duration-150"
                    >
                      <span className={isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}>
                        {l.label}
                      </span>
                      {isActive && (
                        <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full"
                              style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />
                      )}
                    </button>
                  </li>
                );
              })}
              {isAdmin && (
                <li>
                  <a href="/admin"
                     className="px-3 py-2 text-[10px] font-bold uppercase tracking-[1.5px]
                                rounded-lg text-[#F0B429] hover:bg-[#F0B429]/10 transition-colors">
                    Admin
                  </a>
                </li>
              )}
            </ul>

            {/* Auth area */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              {user ? (
                <>
                  <a href="/profile"
                     className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                                hover:bg-slate-50 transition-colors duration-150 group">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center
                                    text-[10px] font-black text-white flex-shrink-0"
                         style={{ background: "linear-gradient(135deg, #0057B7, #F0B429)" }}>
                      {initials}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 group-hover:text-slate-900
                                     transition-colors max-w-[90px] truncate">
                      {user.user_metadata?.full_name ?? user.email?.split("@")[0]}
                    </span>
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[1.5px]
                               text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-50
                               transition-all duration-150"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg flex-shrink-0
                             bg-[#0057B7] hover:bg-[#1a6fd4] text-white text-[11px] font-bold
                             uppercase tracking-[1.5px] transition-all duration-200
                             shadow-[0_2px_12px_rgba(0,87,183,0.30)] hover:shadow-[0_4px_20px_rgba(0,87,183,0.45)]
                             btn-shimmer"
                >
                  Register
                </button>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="xl:hidden flex flex-col gap-[5px] p-1.5 rounded-lg hover:bg-slate-50 transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-slate-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="xl:hidden bg-white border-t border-slate-100 px-5 py-5 flex flex-col gap-1
                            shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-left px-4 py-3 text-sm font-semibold uppercase tracking-widest
                             text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
                >
                  {l.label}
                </button>
              ))}
              {isAdmin && (
                <a href="/admin"
                   className="px-4 py-3 text-sm font-bold uppercase tracking-widest
                              text-[#F0B429] hover:bg-[#F0B429]/10 rounded-lg transition">
                  Admin Portal
                </a>
              )}
              <div className="mt-3 border-t border-slate-100 pt-3">
                {user ? (
                  <div className="flex items-center justify-between">
                    <a href="/profile"
                       className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                           style={{ background: "linear-gradient(135deg, #0057B7, #F0B429)" }}>
                        {initials}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 truncate max-w-[120px]">
                        {user.user_metadata?.full_name ?? user.email?.split("@")[0]}
                      </span>
                    </a>
                    <button onClick={handleSignOut}
                            className="text-xs font-semibold text-slate-400 hover:text-red-500 px-3 py-2 transition">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => { setOpen(false); setAuthOpen(true); }}
                    className="w-full py-3 rounded-lg bg-[#0057B7] hover:bg-[#1a6fd4]
                               text-white text-sm font-bold uppercase tracking-widest transition
                               shadow-[0_2px_12px_rgba(0,87,183,0.30)]"
                  >
                    Sign In / Register
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
