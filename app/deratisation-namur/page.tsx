import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { BeakerIcon, CheckCircleIcon, SearchIcon, TargetIcon } from "@/components/Icons";
export const metadata: Metadata = {
  alternates: { canonical: "/deratisation-namur" },
  title: "Dératisation Namur — Intervention rapide",
  description:
    "Dératisation professionnelle à Namur. Rats des bords de Sambre et Meuse, citadelle, quartiers résidentiels. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Pourquoi Namur est-elle particulièrement exposée aux rongeurs ?",
    a: "La confluence de la Sambre et de la Meuse au cœur de Namur crée un habitat naturel idéal pour les rats bruns. Les berges, les quais et les abords de la citadelle abritent des populations importantes qui migrent vers les caves des quartiers résidentiels et les bâtiments historiques du centre-ville dès que les conditions climatiques se dégradent.",
  },
  {
    q: "Combien coûte une dératisation à Namur ?",
    a: "Entre 150 € et 400 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h. Pour les établissements Horeca ou les bâtiments institutionnels du centre de Namur, tarif établi sur devis.",
  },
  {
    q: "Les rongeurs sont-ils fréquents près de la citadelle de Namur ?",
    a: "Oui. Les sous-sols et anciennes fortifications des abords de la citadelle, ainsi que les parcs environnants, offrent de nombreux abris naturels aux rats et aux souris. Les habitations situées dans les rues en pente du vieux Namur sont particulièrement exposées aux intrusions venant des espaces verts.",
  },
  {
    q: "Intervenez-vous dans toute la province de Namur ?",
    a: "Oui : Namur-Ville, Jambes, Salzinnes, Belgrade, Champion, Wépion, Malonne et l'ensemble des sections de la commune. Délai d'intervention sous 24h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Namur",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Namur",
  description: "Service de dératisation professionnelle à Namur. Rats des bords de Sambre et Meuse, rongeurs en milieu urbain. Techniciens certifiés, garantie 30 jours.",
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

export default function DeratisationNamurPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Namur
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Namur — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Namur ? Intervention sous 24h, bords de Sambre et Meuse,
            citadelle et quartiers résidentiels couverts. Techniciens certifiés, garantie 30 jours.
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
          <Image src="/cave-deratisation.jpg" alt="Dératisation Namur bords de Sambre et Meuse" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Namur, confluence Sambre-Meuse</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Namur et la problématique des rongeurs à la confluence</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          La confluence de la Sambre et de la Meuse au cœur de Namur constitue l&apos;un des points chauds de prolifération des
          rats bruns en Wallonie. Les berges aménagées, les quais historiques et les espaces verts au pied de la citadelle
          offrent des conditions idéales : eau à proximité, abris naturels et sources de nourriture abondantes.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Les quartiers résidentiels comme Jambes, Salzinnes et les secteurs en pente autour du vieux Namur sont
          particulièrement exposés aux intrusions de rongeurs provenant des berges et des espaces verts. Un diagnostic
          professionnel sur site permet d&apos;identifier précisément les couloirs de déplacement et d&apos;adapter le traitement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce (rat brun, campagnol, souris), repérage des couloirs et points d'entrée spécifiques aux bâtiments namurois." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable contre les réinfestations depuis les berges." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Namur</h2>
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
            { label: "Dératisation Bruxelles", href: "/deratisation-bruxelles" },
            { label: "Dératisation Charleroi", href: "/deratisation-charleroi" },
            { label: "Dératisation Mons", href: "/deratisation-mons" },
            { label: "Dératisation Verviers", href: "/deratisation-verviers" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Namur ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
