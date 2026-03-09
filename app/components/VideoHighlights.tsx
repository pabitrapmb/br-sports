// ─── Video Highlights ─────────────────────────────────────────────────────────
// Replace the YouTube video IDs below with your actual Season 1 & Season 2
// highlight videos. To get the ID, open the YouTube video and copy the part
// after "v=" in the URL: youtube.com/watch?v=XXXXX → ID is "XXXXX"

const videos = [
  {
    youtubeId: "dQw4w9WgXcQ", // ← replace with real video ID
    title: "Season 2 – Opening Ceremony",
    date: "2025",
    duration: "3:42",
  },
  {
    youtubeId: "dQw4w9WgXcQ", // ← replace with real video ID
    title: "Season 2 – Chess Finals",
    date: "2025",
    duration: "8:15",
  },
  {
    youtubeId: "dQw4w9WgXcQ", // ← replace with real video ID
    title: "Season 2 – Badminton Highlights",
    date: "2025",
    duration: "5:30",
  },
  {
    youtubeId: "dQw4w9WgXcQ", // ← replace with real video ID
    title: "Season 1 – Awards Night",
    date: "2024",
    duration: "12:00",
  },
];

export default function VideoHighlights() {
  if (videos.every((v) => v.youtubeId === "dQw4w9WgXcQ")) {
    // Placeholder state — all IDs are still dummy values
    return (
      <section id="highlights" className="relative py-24 px-6 bg-[#0b1120] overflow-hidden">

        {/* Depth glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px]
                        bg-[#0057B7]/[0.08] blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px]
                        bg-[#F0B429]/[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[4px] uppercase text-[#F0B429] mb-2">Watch</p>
          <h2 className="font-barlow font-black text-white uppercase
                         text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
            Season Highlights
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#0057B7] to-[#F0B429] rounded-full mx-auto mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((v, i) => (
              <div key={i}
                   className="rounded-2xl overflow-hidden"
                   style={{
                     background: "rgba(255,255,255,0.05)",
                     border: "1px solid rgba(255,255,255,0.08)",
                   }}>
                {/* Placeholder thumbnail */}
                <div className="aspect-video bg-[#080e1c] flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0057B7]/20 border border-[#0057B7]/30
                                  flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.6">
                      <polygon points="5,3 21,12 5,21" />
                    </svg>
                  </div>
                  <span className="text-white/30 text-[10px] font-bold uppercase tracking-[2px]">
                    Video Coming Soon
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-white text-sm leading-tight mb-1">{v.title}</p>
                  <p className="text-white/40 text-[11px]">{v.date} · {v.duration}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section id="highlights" className="relative py-24 px-6 bg-[#0b1120] overflow-hidden">

      {/* Depth glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px]
                      bg-[#0057B7]/[0.08] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px]
                      bg-[#F0B429]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-center text-[11px] font-bold tracking-[4px] uppercase text-[#F0B429] mb-2">Watch</p>
        <h2 className="font-barlow font-black text-white uppercase text-center
                       text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
          Season Highlights
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-[#0057B7] to-[#F0B429] rounded-full mx-auto mb-4" />
        <p className="text-white/40 text-center text-sm mb-12">
          Relive the best moments from past seasons
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((v, i) => (
            <div key={i}
                 className="rounded-2xl overflow-hidden transition-all duration-300
                            hover:-translate-y-1"
                 style={{
                   background: "rgba(255,255,255,0.05)",
                   border: "1px solid rgba(255,255,255,0.08)",
                 }}>
              {/* 16:9 YouTube embed */}
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4">
                <p className="font-semibold text-white text-sm leading-tight mb-1">{v.title}</p>
                <div className="flex items-center gap-3 text-[11px] text-white/40">
                  <span>📅 {v.date}</span>
                  <span>·</span>
                  <span>⏱ {v.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
