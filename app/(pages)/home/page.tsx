import VerseCard from "@/components/sections/VerseCard";
import { VERSES } from "@/lib/verses";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-2 sm:px-6">
      <VerseCard verses={VERSES} />

      <footer className="max-w-xs sm:max-w-3xl text-xs text-gray-500 text-center">
        rotates every 10 minutes. content is a short, reflective context, not a
        formal tafsīr. please verify for study use.
      </footer>
    </main>
  );
}
