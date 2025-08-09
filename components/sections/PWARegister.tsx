"use client";
import { useEffect } from "react";

export default function PWARegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const register = async () => {
        try {
          await navigator.serviceWorker.register("/sw.js", { scope: "/" });
          // console.log("[PWA] service worker registered");
        } catch (e) {
          // console.warn("[PWA] sw registration failed", e);
        }
      };
      // defer to after first paint
      if (document.readyState === "complete") register();
      else window.addEventListener("load", register);
      return () => window.removeEventListener("load", register);
    }
  }, []);
  return null;
}
