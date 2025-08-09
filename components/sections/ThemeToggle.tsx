// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     setDark(document.documentElement.classList.contains("dark"));
//   }, []);

//   function toggle() {
//     const root = document.documentElement;
//     const nowDark = !root.classList.contains("dark");
//     root.classList.toggle("dark", nowDark);
//     setDark(nowDark);
//     try { localStorage.setItem("theme", nowDark ? "dark" : "light"); } catch {}
//   }

//   return (
//     <button
//       onClick={toggle}
//       className="rounded-2xl border px-3 py-1.5 text-sm hover:shadow focus-visible:focus-ring bg-white/70 dark:bg-white/5 backdrop-blur border-gray-200 dark:border-white/10"
//       aria-label="Toggle theme"
//     >
//       {dark ? "light mode" : "dark mode"}
//     </button>
//   );
// }