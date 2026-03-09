import { createClient } from "@/app/lib/supabase/server";

const SUPABASE_CONFIGURED =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Skip auth entirely when Supabase is not yet configured
  let profile: { is_admin: boolean; full_name: string | null } | null = null;

  if (SUPABASE_CONFIGURED) {
    const { redirect } = await import("next/navigation");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) { redirect("/"); return; }

    const { data } = await supabase
      .from("profiles")
      .select("is_admin, full_name")
      .eq("id", user.id)
      .single();

    if (!data?.is_admin) redirect("/");
    profile = data;
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      {/* Admin nav */}
      <header className="bg-[#080e1c] border-b border-white/[0.07] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <img src="/BRPPL_BG_HiRes.jpg" alt="BR" className="h-8 w-auto object-contain opacity-90" />
            </a>
            <div className="w-px h-5 bg-white/15" />
            <div>
              <p className="font-barlow font-black text-white uppercase tracking-[1.5px] text-sm leading-none">
                Admin Portal
              </p>
              <p className="text-[#F0B429] text-[10px] font-bold tracking-[2px] uppercase mt-0.5">
                BR Champions Trophy · Season 3
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-xs hidden sm:block">
              {profile?.full_name ?? "Admin"}
            </span>
            <a href="/"
               className="px-3 py-1.5 rounded-lg text-white/50 text-xs font-semibold
                          hover:text-white hover:bg-white/10 transition-all duration-150">
              ← Back to Site
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-8">{children}</main>
    </div>
  );
}
