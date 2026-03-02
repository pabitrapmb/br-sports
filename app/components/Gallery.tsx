"use client";

import { useState } from "react";
import Image from "next/image";

// ─── ADD YOUR PHOTOS HERE ───────────────────────────────────────────────
// Put image files in the /public/gallery/ folder, then list them below.
// Format: { src: "/gallery/filename.jpg", season: "Season 1", caption: "optional caption" }

const photos = [
  { src: "/gallery/photo7.jpg", season: "Season 1", caption: "Opening ceremony" },
  { src: "/gallery/photo6.jpg", season: "Season 1", caption: "Opening ceremony" },
  { src: "/gallery/photo3.jpg", season: "Season 2", caption: "Carrom" },
  { src: "/gallery/photo4.jpg", season: "Season 2", caption: "Carrom" },
  { src: "/gallery/photo1.jpg", season: "Season 2", caption: "Chess" },
  { src: "/gallery/photo2.jpg", season: "Season 2", caption: "Chess" },
  { src: "/gallery/photo5.jpg", season: "Season 2", caption: "Awards Night" },
  // { src: "/gallery/photo7.jpg", season: "Season 1", caption: "Opening ceremony" },
  // { src: "/gallery/photo6.jpg", season: "Season 1", caption: "Opening ceremony" },
  // { src: "/gallery/photo3.jpg", season: "Season 2", caption: "Carrom" },
  // { src: "/gallery/photo4.jpg", season: "Season 2", caption: "Carrom" },
  // { src: "/gallery/photo1.jpg", season: "Season 2", caption: "Chess" },
  // { src: "/gallery/photo2.jpg", season: "Season 2", caption: "Chess" },
  // { src: "/gallery/photo5.jpg", season: "Season 2", caption: "Awards Night" }
  // Add more photos here...
];
const seasons = ["All", ...Array.from(new Set(photos.map((p) => p.season)))];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.season === active);

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

      {/* Photo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
        {filtered.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-white/10 bg-white/[0.04]"
            onClick={() => setLightbox(photo.src)}
          >
            {/* Photo — falls back to placeholder if file missing */}
            <img
              src={photo.src}
              alt={photo.caption || photo.season}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Always-visible placeholder (shows when image is missing) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-3 pointer-events-none">
              <span className="text-3xl">📸</span>
              <span className="text-[#f5a623] text-[10px] font-bold uppercase tracking-widest">{photo.season}</span>
              {photo.caption && (
                <span className="text-gray-400 text-[10px]">{photo.caption}</span>
              )}
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1 p-3">
              <span className="text-white text-2xl">🔍</span>
              <span className="text-[#f5a623] text-xs font-bold uppercase tracking-widest">{photo.season}</span>
              {photo.caption && (
                <span className="text-white text-xs text-center">{photo.caption}</span>
              )}
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
          <img
            src={lightbox}
            alt="Gallery photo"
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
