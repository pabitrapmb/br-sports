"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/app/lib/supabase/client";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const supabase = createClient();
  const [tab,       setTab]       = useState<"signin" | "phone">("signin");
  const [phone,     setPhone]     = useState("");
  const [otp,       setOtp]       = useState("");
  const [otpSent,   setOtpSent]   = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");
  const [success,   setSuccess]   = useState("");

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape */
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  /* Reset state on open */
  useEffect(() => {
    if (open) {
      setTab("signin"); setPhone(""); setOtp("");
      setOtpSent(false); setLoading(false);
      setError(""); setSuccess("");
    }
  }, [open]);

  /* ── Google Sign-In ─────────────────────────────────────────── */
  async function handleGoogleSignIn() {
    setLoading(true); setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) { setError(error.message); setLoading(false); }
  }

  /* ── Phone OTP: send ────────────────────────────────────────── */
  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true); setError("");
    const { error } = await supabase.auth.signInWithOtp({
      phone: phone.startsWith("+") ? phone : "+91" + phone.replace(/\s/g, ""),
    });
    if (error) {
      setError(error.message);
    } else {
      setOtpSent(true);
      setSuccess("OTP sent! Check your messages.");
    }
    setLoading(false);
  }

  /* ── Phone OTP: verify ──────────────────────────────────────── */
  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    if (!otp.trim()) return;
    setLoading(true); setError(""); setSuccess("");
    const { error } = await supabase.auth.verifyOtp({
      phone: phone.startsWith("+") ? phone : "+91" + phone.replace(/\s/g, ""),
      token: otp,
      type: "sms",
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Signed in! Redirecting…");
      setTimeout(() => { onClose(); window.location.href = "/profile"; }, 1000);
    }
    setLoading(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(4,7,14,0.85)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{
          background: "#0f1e38",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.70)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Olympic stripe */}
        <div className="olympic-stripe" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                     text-white/30 hover:text-white hover:bg-white/10 transition-all duration-200 z-10"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="2" y1="2" x2="12" y2="12" /><line x1="12" y1="2" x2="2" y2="12" />
          </svg>
        </button>

        <div className="px-7 py-8">
          {/* Brand header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 p-1 flex-shrink-0">
              <img src="/BRPPL_BG_HiRes.jpg" alt="BR Champions Trophy" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-barlow font-black text-white uppercase tracking-[1.5px] text-sm leading-none">
                BR Champions Trophy
              </p>
              <p className="text-[#F0B429] text-[10px] font-bold tracking-[2px] uppercase mt-0.5">
                Season 3 · 2026
              </p>
            </div>
          </div>

          <h2 className="font-barlow font-black text-white uppercase text-2xl tracking-wide mb-1">
            Welcome Back
          </h2>
          <p className="text-white/40 text-sm mb-7">
            Sign in to register for events &amp; track your matches.
          </p>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 p-1 rounded-xl"
               style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {(["signin", "phone"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(""); setSuccess(""); }}
                className="flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-[1.5px] transition-all duration-200"
                style={
                  tab === t
                    ? { background: "#0057B7", color: "#fff" }
                    : { color: "rgba(255,255,255,0.40)" }
                }
              >
                {t === "signin" ? "Google Sign-In" : "Phone / OTP"}
              </button>
            ))}
          </div>

          {/* Error / Success */}
          {error   && <p className="text-red-400   text-xs mb-4 px-3 py-2 rounded-lg bg-red-400/10   border border-red-400/20">{error}</p>}
          {success && <p className="text-green-400 text-xs mb-4 px-3 py-2 rounded-lg bg-green-400/10 border border-green-400/20">{success}</p>}

          {/* ── Google ── */}
          {tab === "signin" && (
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl
                           font-semibold text-sm transition-all duration-200
                           hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "#fff", color: "#1f2937", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {/* Google "G" logo */}
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <p className="text-white/25 text-[10px] text-center">
                Uses your Google account — no password needed.
                Blue Ridge residents only.
              </p>
            </div>
          )}

          {/* ── Phone OTP ── */}
          {tab === "phone" && (
            <div>
              {!otpSent ? (
                <form onSubmit={handleSendOtp} className="space-y-3">
                  <div>
                    <label className="text-white/50 text-[11px] font-semibold uppercase tracking-[1.5px] block mb-1.5">
                      Mobile Number (India)
                    </label>
                    <div className="flex items-center gap-0 rounded-xl overflow-hidden"
                         style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                      <span className="flex-shrink-0 px-3 py-3 text-white/50 text-sm border-r border-white/10 bg-white/5">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98765 43210"
                        maxLength={15}
                        className="flex-1 px-4 py-3 text-white text-sm outline-none"
                        style={{ background: "transparent" }}
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !phone.trim()}
                    className="w-full py-3 rounded-xl text-white text-sm font-bold
                               uppercase tracking-widest transition-all duration-200
                               hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #0057B7, #0070e0)" }}
                  >
                    {loading ? "Sending…" : "Send OTP"}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-3">
                  <p className="text-white/50 text-xs">
                    Enter the 6-digit OTP sent to <strong className="text-white">+91 {phone}</strong>
                  </p>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="_ _ _ _ _ _"
                    maxLength={6}
                    className="w-full px-4 py-3 rounded-xl text-white text-center text-xl
                               tracking-[10px] font-bold outline-none"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading || otp.length < 6}
                    className="w-full py-3 rounded-xl text-white text-sm font-bold
                               uppercase tracking-widest transition-all duration-200
                               hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #0057B7, #0070e0)" }}
                  >
                    {loading ? "Verifying…" : "Verify & Sign In"}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setOtpSent(false); setOtp(""); setError(""); setSuccess(""); }}
                    className="w-full py-2 text-white/35 text-xs hover:text-white/60 transition-colors"
                  >
                    ← Change number
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Footer note */}
          <p className="text-white/20 text-[10px] text-center mt-6 leading-relaxed">
            By signing in you agree to our community terms.
            <br />For Blue Ridge Township residents only.
          </p>
        </div>
      </div>
    </div>
  );
}
