"use client";

import { useState } from "react";

// ─── ADD YOUR PHOTOS & VIDEOS HERE ──────────────────────────────────────
// Put files in the /public/gallery/ folder, then list them below.
// For images: { type: "image", src: "/gallery/filename.jpg",  season: "Season 1", caption: "..." }
// For videos: { type: "video", src: "/gallery/filename.mp4",  season: "Season 2", caption: "..." }

const media = [
  { type: "image",src: "/gallery/photo7.jpg", season: "Season 1", caption: "Opening ceremony" },
  { type: "image",src: "/gallery/photo6.jpg", season: "Season 1", caption: "Opening ceremony" },
  { type: "image",src: "/gallery/photo3.jpg", season: "Season 2", caption: "Carrom" },
  { type: "image",src: "/gallery/photo4.jpg", season: "Season 2", caption: "Carrom" },
  { type: "image",src: "/gallery/photo1.jpg", season: "Season 2", caption: "Chess" },
  { type: "image",src: "/gallery/photo2.jpg", season: "Season 2", caption: "Chess" },
  { type: "image",src: "/gallery/photo5.jpg", season: "Season 2", caption: "Awards Night" },
  { type: "image",src: "/gallery/AwardsNight/AwardsNight1.jpg", season: "Season 2", caption: "Awards Night" },
  { type: "image",src: "/gallery/AwardsNight/AwardsNight2.jpg", season: "Season 2", caption: "Awards Night" },
  { type: "image",src: "/gallery/AwardsNight/AwardsNight3.jpg", season: "Season 2", caption: "Awards Night" },
  { type: "image",src: "/gallery/AwardsNight/AwardsNight4.jpg", season: "Season 2", caption: "Awards Night" },
  { type: "video", src: "/gallery/AwardsNight/AwardsNight5.mp4", season: "Season 2", caption: "Awards Night" },
  
  // Add more photos here...
];

type MediaItem = { type: string; src: string; season: string; caption: string };

const seasons = ["All", ...Array.from(new Set(media.map((m) => m.season)))];

export default function Gallery() {
  const [active, setActive]   = useState("All");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  const filtered = active === "All" ? media : media.filter((m) => m.season === active);

  return (
    <section id="gallery" className="py-24 px-6 bg-[#0d0d1a]">
      <p className="text-center text-xs font-bold tracking-[4px] uppercase text-[#f5a623] mb-2">
        Memories
      </p>
      <h2 className="font-bebas gradient-text-white-gold text-center text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
        Previous Seasons
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-[#f5a623] to-red-500 rounded-full mx-auto mb-5" />
      <p className="text-gray-400 text-center text-sm mb-10">
        Relive the excitement from Season 1 &amp; Season 2
      </p>

      {/* Season filter tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border-2 transition-all
              ${active === s
                ? "bg-[#f5a623] border-[#f5a623] text-black"
                : "border-white/20 text-gray-400 hover:border-[#f5a623]/60 hover:text-[#f5a623]"
              }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-white/10 bg-white/[0.04]"
            onClick={() => setLightbox(item as MediaItem)}
          >
            {item.type === "video" ? (
              /* ── Video thumbnail ── */
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
                />
                {/* Play badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/60 border-2 border-white/80 flex items-center justify-center">
                    <span className="text-white text-xl ml-1">▶</span>
                  </div>
                </div>
              </>
            ) : (
              /* ── Image thumbnail ── */
              <img
                src={item.src}
                alt={item.caption || item.season}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            )}

            {/* Placeholder when file is missing */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-3 pointer-events-none">
              <span className="text-3xl">{item.type === "video" ? "🎬" : "📸"}</span>
              <span className="text-[#f5a623] text-[10px] font-bold uppercase tracking-widest">{item.season}</span>
              {item.caption && <span className="text-gray-400 text-[10px]">{item.caption}</span>}
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
              <span className="text-white text-2xl">{item.type === "video" ? "▶" : "🔍"}</span>
              <span className="text-[#f5a623] text-xs font-bold uppercase tracking-widest">{item.season}</span>
              {item.caption && <span className="text-white text-xs text-center">{item.caption}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-3xl font-bold hover:text-[#f5a623] transition z-10"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>

          {lightbox.type === "video" ? (
            <video
              src={lightbox.src}
              controls
              autoPlay
              className="max-w-full max-h-[85vh] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {lightbox.caption && (
            <p className="absolute bottom-6 text-white/70 text-sm text-center px-4">
              {lightbox.caption}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
