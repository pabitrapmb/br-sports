export default function Community() {
  return (
    <section
      id="community"
      className="py-24 px-6 text-center"
      style={{ background: "linear-gradient(135deg, #12123a 0%, #1a1a3e 100%)" }}
    >
      <div className="max-w-lg mx-auto bg-white/[0.04] border border-[#f5a623]/25 rounded-3xl px-9 py-14">
        <div className="text-6xl mb-4">📲</div>
        <h2 className="font-bebas text-white text-3xl tracking-widest mb-3">Join Our Community</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Stay updated with the latest schedules, registrations, match fixtures, and announcements.
          Join the{" "}
          <strong className="text-white">Blue Ridge Premiere League 2026</strong> WhatsApp community group!
        </p>

        {/* QR placeholder */}
        {/* <div className="w-40 h-40 mx-auto mb-5 bg-white rounded-2xl flex items-center justify-center text-center p-4">
          <p className="text-gray-700 text-xs font-bold leading-snug">
            📱 Scan the QR Code<br />from the event flyer<br />to join the<br />WhatsApp Group
          </p>
        </div> */}
        <img
          src="/qr-code.png"
          alt="WhatsApp QR Code"
          className="w-40 h-40 mx-auto mb-5 rounded-2xl"
        />
        <p className="text-gray-500 text-xs mb-6">
          Further registration details and schedules will be shared in the community group soon.
        </p>

        <a
          href="https://chat.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-[#25d366] text-white font-bold
                     px-8 py-3.5 rounded-full text-sm transition hover:-translate-y-1
                     shadow-[0_6px_24px_rgba(37,211,102,.35)] hover:shadow-[0_10px_32px_rgba(37,211,102,.5)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Join WhatsApp Group
        </a>
      </div>
    </section>
  );
}
