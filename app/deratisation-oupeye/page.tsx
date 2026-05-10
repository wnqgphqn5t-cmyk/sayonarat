import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { BeakerIcon, CheckCircleIcon, SearchIcon, TargetIcon } from "@/components/Icons";
export const metadata: Metadata = {
  alternates: { canonical: "/deratisation-oupeye" },
  title: "Dératisation Oupeye — Intervention rapide",
  description:
    "Dératisation professionnelle à Oupeye. Rats des berges, souris, rongeurs. Bords de Meuse et canal Albert couverts. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Pourquoi Oupeye est-elle particulièrement exposée aux rats ?",
    a: "La commune d'Oupeye borde la Meuse et le canal Albert. Les berges de la Meuse abritent de grandes populations de rats bruns (Rattus norvegicus) qui colonisent ensuite les habitations proches, en particulier les caves et sous-sols des villages de Haccourt, Vivegnis et Hermalle-sous-Argenteau.",
  },
  {
    q: "Combien coûte une dératisation à Oupeye ?",
    a: "Entre 150 € et 400 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h. Pour les locaux professionnels des zones industrielles, tarif établi sur devis.",
  },
  {
    q: "Les rats des berges sont-ils plus résistants que les rats communs ?",
    a: "Le rat brun des berges est la même espèce que le rat commun (Rattus norvegicus). En revanche, les populations vivant près des cours d'eau sont souvent plus nombreuses et plus difficiles à contenir car les berges constituent un réservoir permanent. Un traitement durable implique de colmater tous les points d'entrée de l'habitation.",
  },
  {
    q: "Intervenez-vous dans toute la commune d'Oupeye ?",
    a: "Oui : Oupeye, Haccourt, Vivegnis, Hermalle-sous-Argenteau, Eben-Emael et tous les hameaux. Délai d'intervention sous 24h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Oupeye",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Oupeye",
  description: "Service de dératisation professionnelle à Oupeye. Rats des berges, souris, rongeurs. Techniciens certifiés, garantie 30 jours.",
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

export default function DeratisationOupeyePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Oupeye
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Oupeye — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats des berges ou souris à Oupeye ? Intervention sous 24h, techniciens
            certifiés, garantie 30 jours. Bords de Meuse et zones résidentielles couverts.
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
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image src="/cave-deratisation.jpg" alt="Dératisation Oupeye bords de Meuse" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Oupeye, bords de Meuse</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Oupeye et les rats des berges</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Oupeye est traversée par la Meuse et le canal Albert, deux voies d&apos;eau qui constituent
          un réservoir naturel permanent de rats bruns. Ces rongeurs colonisent les berges, les
          zones industrielles de Haccourt et Vivegnis, puis migrent vers les caves et sous-sols
          des habitations riveraines dès que les conditions climatiques se dégradent.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          La commune présente aussi des zones résidentielles semi-rurales à Hermalle-sous-Argenteau
          et Eben-Emael où les campagnols des champs causent des dégâts dans les jardins et potagers.
          Un diagnostic professionnel permet d&apos;identifier l&apos;espèce et d&apos;adapter le traitement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce (rat brun, campagnol, souris), repérage des couloirs et points d'entrée." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable contre les réinfestations." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour sans frais si les rongeurs réapparaissent dans le mois suivant l'intervention." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Oupeye</h2>
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
            { label: "Dératisation Herstal", href: "/deratisation-herstal" },
            { label: "Dératisation Ans", href: "/deratisation-ans" },
            { label: "Dératisation Grâce-Hollogne", href: "/deratisation-grace-hollogne" },
            { label: "Dératisation Beyne-Heusay", href: "/deratisation-beyne-heusay" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Oupeye ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
