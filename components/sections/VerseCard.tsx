"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Verse } from "@/lib/verses";

const TEN_MIN_MS = 10 * 60 * 1000;

function pickRandom<T>(arr: T[], exclude?: T): T {
  if (arr.length === 0) throw new Error("empty array");
  if (arr.length === 1) return arr[0];
  let v: T;
  do {
    v = arr[Math.floor(Math.random() * arr.length)];
  } while (v === exclude);
  return v;
}

export default function VerseCard({ verses }: { verses: Verse[] }) {
  const [current, setCurrent] = useState<Verse | null>(null);
  const [since, setSince] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);
  const copiedTimerRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("qvr.current");
      if (raw) {
        const parsed = JSON.parse(raw) as { verse: Verse; ts: number };
        if (Date.now() - parsed.ts < TEN_MIN_MS) {
          setCurrent(parsed.verse);
          setSince(parsed.ts);
          return;
        }
      }
    } catch {}
    const v = pickRandom(verses);
    setCurrent(v);
    const ts = Date.now();
    setSince(ts);
    try {
      localStorage.setItem("qvr.current", JSON.stringify({ verse: v, ts }));
    } catch {}
  }, [verses]);

  useEffect(() => {
    function rotate() {
      setCurrent((prev) => {
        const v = pickRandom(verses, prev ?? undefined);
        const ts = Date.now();
        setSince(ts);
        try {
          localStorage.setItem("qvr.current", JSON.stringify({ verse: v, ts }));
        } catch {}
        return v;
      });
    }
    timerRef.current = window.setInterval(rotate, TEN_MIN_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      if (copiedTimerRef.current) window.clearTimeout(copiedTimerRef.current);
    };
  }, [verses]);

  const remaining = useMemo(() => {
    if (!since) return null;
    const elapsed = Date.now() - since;
    const left = Math.max(0, TEN_MIN_MS - elapsed);
    const m = Math.floor(left / 60000);
    const s = Math.floor((left % 60000) / 1000);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }, [since, current]);

  function nextNow() {
    setSince(Date.now());
    setCurrent((prev) => {
      const v = pickRandom(verses, prev ?? undefined);
      try {
        localStorage.setItem(
          "qvr.current",
          JSON.stringify({ verse: v, ts: Date.now() })
        );
      } catch {}
      return v;
    });
  }

  function copyVerse() {
    if (!current) return;
    const text = `${current.surah} ${current.id}\n\n${current.arabic}\n\n${current.english}\n\n— ${current.story}`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        if (copiedTimerRef.current) window.clearTimeout(copiedTimerRef.current);
        copiedTimerRef.current = window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // ignore
      });
  }

  if (!current) return null;

  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6">
      <div className="relative rounded-3xl border shadow-sm bg-white border-[#BCCCDC]">
        <div className="flex flex-col gap-5 p-4 sm:p-6">
          {/* top row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs sm:text-sm text-[#9AA6B2]">
              {current.surah} • Ayah {current.id.split(":")[1]}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {remaining && (
                <span
                  className="text-[11px] sm:text-xs rounded-full border px-2 py-1 bg-[#D9EAFD] border-[#BCCCDC] text-[#9AA6B2]"
                  title="time until next verse"
                >
                  next in {remaining}
                </span>
              )}
              <button
                onClick={copyVerse}
                className="text-[11px] sm:text-xs rounded-full border px-3 py-1 border-[#BCCCDC] text-[#9AA6B2] bg-[#F8FAFC] active:scale-[0.98] transition"
              >
                copy
              </button>
              <button
                onClick={nextNow}
                className="text-[11px] sm:text-xs rounded-full border px-3 py-1 border-[#BCCCDC] text-[#9AA6B2] bg-[#F8FAFC] active:scale-[0.98] transition"
              >
                next now
              </button>
            </div>
          </div>

          {/* verse content */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p
              dir="rtl"
              className="font-arabic text-2xl sm:text-3xl leading-relaxed sm:leading-loose tracking-wide"
            >
              {current.arabic}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-900">
              {current.english}
            </p>
          </div>

          {/* context */}
          <div className="rounded-xl border bg-[#D9EAFD] border-[#BCCCDC]">
            <div className="flex flex-col gap-1.5 sm:gap-2 p-3 sm:p-4">
              <strong className="text-xs sm:text-sm text-slate-900">
                context
              </strong>
              <p className="text-xs sm:text-sm text-slate-900">
                {current.story}
              </p>
            </div>
          </div>
        </div>

        {/* copied toast */}
        <div
          role="status"
          aria-live="polite"
          className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BCCCDC] bg-white px-3 py-1 text-[11px] text-[#0f172a] shadow-sm">
            copied to clipboard
          </span>
        </div>
      </div>
    </div>
  );
}
