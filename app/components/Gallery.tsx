"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── ADD YOUR PHOTOS & VIDEOS HERE ──────────────────────────────────────────
// Put files in /public/gallery/, then list them below.
// { type: "image", src: "/gallery/filename.jpg", caption: "..." }
// { type: "video", src: "/gallery/filename.mp4", caption: "..." }

const media = [
  { type: "image", src: "/gallery/photo7.jpg",                       caption: "Opening Ceremony" },
  { type: "image", src: "/gallery/photo6.jpg",                       caption: "Opening Ceremony" },
  { type: "image", src: "/gallery/photo3.jpg",                       caption: "Carrom" },
  { type: "image", src: "/gallery/photo4.jpg",                       caption: "Carrom" },
  { type: "image", src: "/gallery/photo1.jpg",                       caption: "Chess" },
  { type: "image", src: "/gallery/photo2.jpg",                       caption: "Chess" },
  { type: "image", src: "/gallery/photo5.jpg",                       caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight1.jpg",     caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight2.jpg",     caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight3.jpg",     caption: "Awards Night" },
  { type: "image", src: "/gallery/AwardsNight/AwardsNight4.jpg",     caption: "Awards Night" },
  { type: "video", src: "/gallery/AwardsNight/AwardsNight5.mp4",     caption: "Awards Night" },
  // Add more here...
];

type MediaItem = typeof media[number];

/* ── Icons ─────────────────────────────────────────────────────────────────── */
function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="10 2 14 2 14 6" />
      <polyline points="6 14 2 14 2 10" />
      <line x1="14" y1="2" x2="9" y2="7" />
      <line x1="2" y1="14" x2="7" y2="9" />
    </svg>
  );
}

function PlayIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <polygon points="5,3 21,12 5,21" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="3" y1="3" x2="15" y2="15" />
      <line x1="15" y1="3" x2="3" y2="15" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left"
        ? <polyline points="14 5 8 11 14 17" />
        : <polyline points="8 5 14 11 8 17" />}
    </svg>
  );
}

/* ── Main component ─────────────────────────────────────────────────────────── */
export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const thumbsRef               = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + media.length) % media.length);
  }, [lightbox]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % media.length);
  }, [lightbox]);

  /* Keyboard nav + body scroll lock */
  useEffect(() => {
    if (lightbox === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  /* Scroll active thumbnail into view */
  useEffect(() => {
    if (lightbox === null || !thumbsRef.current) return;
    const thumb = thumbsRef.current.children[lightbox] as HTMLElement;
    if (thumb) thumb.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [lightbox]);

  const item: MediaItem | null = lightbox !== null ? media[lightbox] : null;

  return (
    <section id="gallery" className="relative py-24 px-6 bg-[#0b1120] overflow-hidden">

      {/* Background depth glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px]
                      bg-[#0057B7]/[0.07] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[280px]
                      bg-[#F0B429]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#F0B429] mb-2">
          Memories
        </p>
        <h2 className="font-barlow font-black text-white uppercase text-center
                       text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
          Photo Gallery
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-[#F0B429] to-[#ef4444] rounded-full mx-auto mb-5" />
        <p className="text-white/35 text-center text-sm mb-14">
          Relive the excitement from past seasons
        </p>

        {/* ── Uniform photo grid — 4 : 3 aspect ratio tiles ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {media.map((it, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group bg-slate-800/60"
              style={{ aspectRatio: "4 / 3" }}
              onClick={() => setLightbox(i)}
            >
              {/* Image / Video */}
              {it.type === "video" ? (
                <video
                  src={it.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted playsInline
                />
              ) : (
                <img
                  src={it.src}
                  alt={it.caption}
                  className="absolute inset-0 w-full h-full object-cover
                             transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
                />
              )}

              {/* Permanent bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Hover darkening */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100
                              transition-opacity duration-300" />

              {/* Expand / Play icon on hover — center */}
              <div className="absolute inset-0 flex items-center justify-center
                              opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-full border border-white/55 bg-black/25
                               flex items-center justify-center text-white
                               scale-75 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm">
                  {it.type === "video" ? <PlayIcon size={16} /> : <ExpandIcon />}
                </div>
              </div>

              {/* Caption — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3
                              translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                {it.caption && (
                  <p className="text-white/90 text-[11px] font-semibold leading-tight">{it.caption}</p>
                )}
              </div>

              {/* Video play badge — always visible top right */}
              {it.type === "video" && (
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full
                                bg-black/55 border border-white/20 backdrop-blur-sm
                                flex items-center justify-center pointer-events-none">
                  <PlayIcon size={11} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ──────────────────────────────────────────────────────────── */}
      {item && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ background: "rgba(4,7,14,0.97)", backdropFilter: "blur(20px)" }}
          onClick={() => setLightbox(null)}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.65), transparent)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {item.caption && (
                <span className="text-white/65 text-sm font-medium truncate">{item.caption}</span>
              )}
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 ml-4">
              <span className="text-white/30 text-xs font-mono tabular-nums">
                {String((lightbox ?? 0) + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(media.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/40
                           hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Close lightbox"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10
                       w-11 h-11 sm:w-12 sm:h-12 rounded-full
                       flex items-center justify-center text-white/40
                       hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10
                       w-11 h-11 sm:w-12 sm:h-12 rounded-full
                       flex items-center justify-center text-white/40
                       hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Next"
          >
            <ChevronIcon dir="right" />
          </button>

          {/* Main media */}
          <div
            className="flex-1 flex items-center justify-center px-14 sm:px-20 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              />
            ) : (
              <img
                src={item.src}
                alt={item.caption}
                className="max-w-full max-h-full object-contain rounded-2xl
                           shadow-[0_0_80px_rgba(0,0,0,0.8)]"
              />
            )}
          </div>

          {/* ── Thumbnail strip ── */}
          <div
            className="flex-shrink-0 px-4 pt-3 pb-5"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={thumbsRef}
              className="flex gap-1.5 overflow-x-auto max-w-3xl mx-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {media.map((t, idx) => {
                const isCurrent = idx === lightbox;
                return (
                  <button
                    key={idx}
                    onClick={() => setLightbox(idx)}
                    className="flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-200"
                    style={{
                      width:   60,
                      height:  44,
                      border:     isCurrent ? "2px solid #F0B429" : "2px solid transparent",
                      opacity:    isCurrent ? 1 : 0.40,
                      transform:  isCurrent ? "scale(1.08)" : "scale(1)",
                    }}
                    aria-label={`View ${t.caption}`}
                  >
                    {t.type === "video" ? (
                      <div className="w-full h-full bg-slate-700/80 flex items-center justify-center">
                        <PlayIcon size={12} />
                      </div>
                    ) : (
                      <img src={t.src} alt="" className="w-full h-full object-cover" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
