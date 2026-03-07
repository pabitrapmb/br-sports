"use client";

import { useState, useEffect, useCallback } from "react";

// ─── ADD YOUR PHOTOS & VIDEOS HERE ──────────────────────────────────────────
// Put files in /public/gallery/, then list them below.
// { type: "image", src: "/gallery/filename.jpg",  season: "Season 1", caption: "..." }
// { type: "video", src: "/gallery/filename.mp4",  season: "Season 2", caption: "..." }

const media = [
  { type: "image", src: "/gallery/photo7.jpg",                       season: "Season 1", caption: "Opening Ceremony" },
  { type: "image", src: "/gallery/photo6.jpg",                       season: "Season 1", caption: "Opening Ceremony" },
  { type: "image", src: "/gallery/photo3.jpg",                       season: "Season 2", caption: "Carrom" },
  { type: "image", src: "/gallery/photo4.jpg",                       season: "Season 2", caption: "Carrom" },
  { type: "image", src: "/gallery/photo1.jpg",                       season: "Season 2", caption: "Chess" },
  { type: "image", src: "/gallery/photo2.jpg",                       season: "Season 2", caption: "Chess" },
  { type: "image", src: "/gallery/photo5.jpg",                       season: "Season 2", caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight1.jpg",     season: "Season 2", caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight2.jpg",     season: "Season 2", caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight3.jpg",     season: "Season 2", caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight4.jpg",     season: "Season 2", caption: "Awards Night" },
  { type: "video", src: "/gallery/AwardsNight/AwardsNight5.mp4",     season: "Season 2", caption: "Awards Night" },
  // Add more here...
];

type MediaItem = typeof media[number];

const seasons = ["All", ...Array.from(new Set(media.map((m) => m.season)))];

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
         stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="3" y1="3" x2="17" y2="17" />
      <line x1="17" y1="3" x2="3" y2="17" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
         stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left"
        ? <polyline points="14 5 8 11 14 17" />
        : <polyline points="8 5 14 11 8 17" />}
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="white">
      <polygon points="8,4 22,13 8,22" />
    </svg>
  );
}

export default function Gallery() {
  const [active,   setActive]   = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? media : media.filter((m) => m.season === active);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  }, [lightbox, filtered.length]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filtered.length);
  }, [lightbox, filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  const item: MediaItem | null = lightbox !== null ? filtered[lightbox] : null;

  return (
    <section id="gallery" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-100 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#F0B429] mb-2">
          Memories
        </p>
        <h2 className="font-barlow font-black text-slate-900 uppercase text-center
                       text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
          Previous Seasons
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-[#F0B429] to-red-500 rounded-full mx-auto mb-5" />
        <p className="text-slate-500 text-center text-sm mb-10">
          Relive the excitement from Season 1 &amp; Season 2
        </p>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {seasons.map((s) => {
            const isActive = active === s;
            return (
              <button
                key={s}
                onClick={() => setActive(s)}
                className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest
                           border transition-all duration-200"
                style={{
                  background:  isActive ? "#0057B7"    : "white",
                  borderColor: isActive ? "#0057B7"    : "#e2e8f0",
                  color:       isActive ? "#ffffff"    : "#64748b",
                  boxShadow:   isActive ? "0 2px 12px rgba(0,87,183,0.25)" : "none",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-3">
          {filtered.map((item, i) => (
            <div
              key={`${active}-${i}`}
              className="break-inside-avoid mb-3 relative rounded-xl overflow-hidden
                         cursor-pointer group border border-slate-100
                         shadow-[0_2px_8px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                         transition-shadow duration-300"
              onClick={() => setLightbox(i)}
            >
              {item.type === "video" ? (
                <>
                  <video src={item.src} className="w-full h-auto block" muted playsInline
                         onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }} />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm
                                    border border-white/30 flex items-center justify-center">
                      <PlayIcon />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300
                              flex flex-col justify-end"
                   style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)" }}>
                <div className="p-3">
                  <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest mb-1"
                        style={{ background: "rgba(240,180,41,0.28)", color: "#F0B429" }}>
                    {item.season}
                  </span>
                  {item.caption && (
                    <p className="text-white text-xs font-semibold leading-tight">{item.caption}</p>
                  )}
                </div>
              </div>

              {/* Video badge always visible */}
              {item.type === "video" && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px]
                                font-bold uppercase tracking-wider bg-black/50 text-white/90 backdrop-blur-sm">
                  Video
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center"
             style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(12px)" }}
             onClick={() => setLightbox(null)}>

          {/* Close */}
          <button onClick={() => setLightbox(null)}
                  className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center
                             justify-center text-white/60 hover:text-white hover:bg-white/10
                             transition-all duration-200"
                  aria-label="Close">
            <CloseIcon />
          </button>

          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 z-10 w-11 h-11 rounded-full flex items-center
                             justify-center text-white/50 hover:text-white hover:bg-white/10
                             transition-all duration-200"
                  aria-label="Previous">
            <ChevronIcon dir="left" />
          </button>

          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 z-10 w-11 h-11 rounded-full flex items-center
                             justify-center text-white/50 hover:text-white hover:bg-white/10
                             transition-all duration-200"
                  aria-label="Next">
            <ChevronIcon dir="right" />
          </button>

          {/* Media */}
          <div className="max-w-[90vw] max-h-[82vh] flex items-center justify-center"
               onClick={(e) => e.stopPropagation()}>
            {item.type === "video" ? (
              <video src={item.src} controls autoPlay
                     className="max-w-full max-h-[82vh] rounded-2xl shadow-2xl" />
            ) : (
              <img src={item.src} alt={item.caption}
                   className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl" />
            )}
          </div>

          {/* Caption bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between
                          px-6 py-4 pointer-events-none"
               style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase
                               tracking-widest mr-2"
                    style={{ background: "rgba(240,180,41,0.22)", color: "#F0B429" }}>
                {item.season}
              </span>
              {item.caption && (
                <span className="text-white/80 text-sm font-medium">{item.caption}</span>
              )}
            </div>
            <span className="text-white/30 text-xs tabular-nums">
              {(lightbox ?? 0) + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
