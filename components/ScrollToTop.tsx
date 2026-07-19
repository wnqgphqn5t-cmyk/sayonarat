"use client";
import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Remonter en haut de page"
      style={{ backgroundColor: "#1B4332" }}
      className={`fixed right-4 bottom-20 sm:right-6 sm:bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-[opacity,transform] duration-200 ease-out hover:bg-green-700 motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
