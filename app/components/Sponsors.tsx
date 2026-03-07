export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-xs font-bold tracking-[4px] uppercase text-[#0057B7] mb-3">
          Our Sponsors
        </p>
        <h2 className="font-barlow font-black text-[#050c18] uppercase
                       text-[clamp(1.8rem,4vw,2.8rem)] tracking-wide mb-4">
          Proudly Supported By
        </h2>
        <div className="w-16 h-1.5 rounded-full mx-auto mb-12"
             style={{ background: "linear-gradient(90deg, #0057B7, #F0B429)" }} />

        {/* Title sponsor */}
        <div className="inline-block">
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400 mb-5">
            Title Sponsor
          </p>
          <div className="bg-[#F0F5FF] border-2 border-[#0057B7]/20 rounded-3xl
                          px-16 py-10 hover:border-[#0057B7]/50 transition-all duration-300
                          hover:shadow-[0_8px_40px_rgba(0,87,183,0.15)]">
            <p className="font-barlow font-black text-[#050c18] text-[clamp(1.8rem,4vw,2.5rem)]
                          uppercase tracking-[3px]">
              Blueridge Residents
            </p>
            <p className="text-gray-400 text-xs tracking-wider mt-2 uppercase font-semibold">
              Associations
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-xs mt-12 tracking-wider">
          Interested in sponsoring?{" "}
          <a href="#contacts" className="text-[#0057B7] font-semibold hover:underline">
            Contact us →
          </a>
        </p>
      </div>
    </section>
  );
}
