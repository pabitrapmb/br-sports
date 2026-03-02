export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 px-6 text-center bg-[#0d0d1a]">
      <p className="text-xs font-bold tracking-[4px] uppercase text-[#f5a623] mb-2">Our Sponsor</p>
      <h2 className="font-bebas gradient-text-white-gold text-center text-[clamp(2rem,6vw,3.5rem)] tracking-wide mb-3">
        Presented By
      </h2>
      <div className="w-14 h-1 bg-gradient-to-r from-[#f5a623] to-red-500 rounded-full mx-auto mb-10" />

      <div className="inline-block border-2 border-[#f5a623]/40 rounded-2xl px-16 py-7 bg-[#f5a623]/[0.06] mb-3">
        <p className="font-bebas text-[#f5a623] text-4xl tracking-widest">Paranjape Schemes</p>
      </div>
      <p className="text-gray-500 text-sm mb-12">
        Title Sponsor – Blue Ridge Champions Trophy 2026
      </p>

      <div className="max-w-xl mx-auto border border-dashed border-white/15 rounded-2xl px-6 py-8 bg-white/[0.03]">
        <h3 className="text-white font-bold text-lg mb-3">🤝 Become a Sponsor or Supporter</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          We&apos;re inviting sponsors and supporters to be a part of this exciting sports celebration
          and help make it a grand success. Join us in bringing the Blue Ridge community together!
          Contact any of our coordinators to know more.
        </p>
      </div>
    </section>
  );
}
