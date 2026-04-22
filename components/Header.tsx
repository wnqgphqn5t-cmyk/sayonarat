"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "Dératisation Liège", href: "/deratisation-liege" },
  { label: "Désinsectisation", href: "/desinsectisation-liege" },
  { label: "Punaises de lit", href: "/punaises-de-lit-liege" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1B4332" }} className="text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-1 text-right text-xs text-green-200 border-b border-green-700">
        <a href="tel:+32466442454" className="hover:text-yellow-300 transition-colors font-semibold">
          📞 +32 466 44 24 54 — Disponible 7j/7
        </a>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          🐀 Sayonarat
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-yellow-300 transition-colors">
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded hover:bg-yellow-300 transition-colors"
          >
            Devis gratuit
          </Link>
        </nav>

        {/* Mobile burger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#2D6A4F" }} className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-yellow-300" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
