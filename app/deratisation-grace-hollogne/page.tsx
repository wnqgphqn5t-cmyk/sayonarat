import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { BeakerIcon, CheckCircleIcon, SearchIcon, TargetIcon } from "@/components/Icons";
export const metadata: Metadata = {
  alternates: { canonical: "/deratisation-grace-hollogne" },
  title: "Dératisation Grâce-Hollogne — Intervention rapide",
  description:
    "Dératisation professionnelle à Grâce-Hollogne. Rats, souris, rongeurs. Zones industrielles et logistiques couvertes. Devis gratuit sous 24h, techniciens certifiés.",
};

const faqs = [
  {
    q: "Pourquoi Grâce-Hollogne est-elle particulièrement exposée aux rongeurs ?",
    a: "La présence de l'aéroport de Liège et des grandes zones logistiques (entrepôts, quais de chargement) crée des conditions idéales pour les rongeurs : stockages alimentaires importants, flux de marchandises quotidiens, et infrastructures souterraines étendues. Les zones résidentielles voisines en subissent les conséquences.",
  },
  {
    q: "Combien coûte une dératisation à Grâce-Hollogne ?",
    a: "Entre 150 € et 400 € pour un logement standard. Pour les locaux professionnels et entrepôts, le tarif est établi sur devis selon la superficie et la nature de l'activité. Devis gratuit sous 24h.",
  },
  {
    q: "Intervenez-vous dans les zones industrielles de Grâce-Hollogne ?",
    a: "Oui. Sayonarat couvre les zones industrielles, entrepôts logistiques et locaux professionnels de Grâce-Hollogne. Pour les établissements soumis aux normes AFSCA, nous fournissons un rapport d'intervention conforme aux exigences de contrôle.",
  },
  {
    q: "Combien de temps dure le traitement ?",
    a: "Entre 1h30 et 3h selon la superficie et l'accessibilité des zones infestées. Le technicien réalise un diagnostic, identifie les couloirs de passage et pose les appâts aux points stratégiques. Garantie 30 jours incluse.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Grâce-Hollogne",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Grâce-Hollogne",
  description: "Service de dératisation professionnelle à Grâce-Hollogne. Rats, souris, rongeurs. Techniciens certifiés, garantie 30 jours.",
  serviceType: "PestControl",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function DeratisationGraceHologgnePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Grâce-Hollogne
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Grâce-Hollogne — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Problème de rats ou souris à Grâce-Hollogne ? Sayonarat intervient sous 24h
            chez les particuliers et les professionnels. Zones logistiques et résidentielles couvertes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Devis gratuit sous 24h →
            </Link>
            <a href="tel:+32466442454" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
          <Image src="/cave-deratisation.jpg" alt="Dératisation professionnelle à Grâce-Hollogne" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Grâce-Hollogne et zone aéroportuaire</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Grâce-Hollogne : un contexte à risque élevé</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Grâce-Hollogne abrite l&apos;aéroport de Liège (Liège Airport) et une concentration importante d&apos;entrepôts logistiques. Ces infrastructures génèrent un flux constant de marchandises — dont des denrées alimentaires — qui attire les rongeurs. Les rats et souris trouvent dans ces zones des conditions idéales : nourriture abondante, espaces souterrains étendus et peu de prédateurs naturels.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Les quartiers résidentiels de Grâce-Hollogne, Velroux et Hollogne-aux-Pierres sont directement exposés à ces populations de rongeurs qui migrent vers les habitations, notamment en automne lorsque les températures baissent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce, des couloirs de passage et des points d'entrée avant tout traitement." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour sans frais si les rongeurs réapparaissent dans le mois suivant." },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="mb-3">{c.emoji === "🔍" ? <SearchIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🎯" ? <TargetIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🧪" ? <BeakerIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{c.t}</h3>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Grâce-Hollogne</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Dératisation dans les communes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Dératisation Liège", href: "/deratisation-liege" },
            { label: "Dératisation Ans", href: "/deratisation-ans" },
            { label: "Dératisation Awans", href: "/deratisation-awans" },
            { label: "Dératisation Seraing", href: "/deratisation-seraing" },
            { label: "Dératisation Herstal", href: "/deratisation-herstal" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rats ou souris à Grâce-Hollogne ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
