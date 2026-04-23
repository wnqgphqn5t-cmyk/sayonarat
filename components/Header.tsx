"use client";
import Link from "next/link";
import { useState } from "react";

const menu = [
  {
    categorie: "Dératisation",
    liens: [
      { label: "Dératisation Liège", href: "/deratisation-liege" },
      { label: "Dératisation Seraing", href: "/deratisation-seraing" },
      { label: "Dératisation Herstal", href: "/deratisation-herstal" },
      { label: "Dératisation Ans", href: "/deratisation-ans" },
      { label: "Dératisation Saint-Nicolas", href: "/deratisation-saint-nicolas" },
      { label: "Dératisation Flémalle", href: "/deratisation-flemalle" },
    ],
  },
  {
    categorie: "Désinsectisation",
    liens: [
      { label: "Désinsectisation Liège", href: "/desinsectisation-liege" },
      { label: "Désinsectisation Seraing", href: "/desinsectisation-seraing" },
      { label: "Désinsectisation Herstal", href: "/desinsectisation-herstal" },
      { label: "Désinsectisation Ans", href: "/desinsectisation-ans" },
      { label: "Désinsectisation Saint-Nicolas", href: "/desinsectisation-saint-nicolas" },
      { label: "Désinsectisation Flémalle", href: "/desinsectisation-flemalle" },
    ],
  },
  {
    categorie: "Punaises de lit",
    liens: [
      { label: "Punaises de lit Liège", href: "/punaises-de-lit-liege" },
      { label: "Punaises de lit Seraing", href: "/punaises-de-lit-seraing" },
      { label: "Punaises de lit Herstal", href: "/punaises-de-lit-herstal" },
      { label: "Punaises de lit Ans", href: "/punaises-de-lit-ans" },
      { label: "Punaises de lit Saint-Nicolas", href: "/punaises-de-lit-saint-nicolas" },
      { label: "Punaises de lit Flémalle", href: "/punaises-de-lit-flemalle" },
      { label: "Guêpes et frelons Liège", href: "/guepes-frelons-liege" },
      { label: "Mites alimentaires Liège", href: "/mites-alimentaires-liege" },
    ],
  },
  {
    categorie: "Informations",
    liens: [
      { label: "Urgence 7j/7", href: "/urgence" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
    ],
  },
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
        <Link href="/" className="text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>
          🐀 Sayonarat
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded hover:bg-yellow-300 transition-colors text-sm hidden sm:inline-block"
          >
            Devis gratuit
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-green-700 transition-colors"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div style={{ backgroundColor: "#2D6A4F" }} className="border-t border-green-700 px-4 py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {menu.map((section) => (
              <div key={section.categorie}>
                <p className="text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3">
                  {section.categorie}
                </p>
                <ul className="space-y-2">
                  {section.liens.map((lien) => (
                    <li key={lien.href}>
                      <Link
                        href={lien.href}
                        className="text-green-100 hover:text-white text-sm transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {lien.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-green-600 sm:hidden">
            <Link
              href="/contact"
              className="block bg-yellow-400 text-green-900 font-bold px-4 py-3 rounded text-center text-sm"
              onClick={() => setOpen(false)}
            >
              Devis gratuit →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
