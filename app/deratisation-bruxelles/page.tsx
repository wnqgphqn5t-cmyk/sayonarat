import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation Bruxelles — Intervention rapide",
  description:
    "Dératisation professionnelle à Bruxelles. Rats dans immeubles, caves, canaux. Quartiers Ixelles, Schaerbeek, Molenbeek, Anderlecht couverts. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Pourquoi Bruxelles est-elle particulièrement exposée aux rats ?",
    a: "La forte densité urbaine, les nombreux immeubles anciens, le réseau de canaux (canal de Bruxelles, canal de Willebroeck) et les sous-sols interconnectés des quartiers comme Molenbeek et Anderlecht créent un environnement idéal pour les rats bruns. Les travaux du métro et les chantiers de rénovation déplacent régulièrement les colonies vers les habitations voisines.",
  },
  {
    q: "Combien coûte une dératisation à Bruxelles ?",
    a: "Entre 150 € et 400 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h. Pour les immeubles collectifs ou les établissements Horeca de la capitale, tarif établi sur devis spécifique.",
  },
  {
    q: "Les rats peuvent-ils se déplacer entre appartements dans un immeuble bruxellois ?",
    a: "Oui. Dans les immeubles anciens de Schaerbeek, Ixelles ou le quartier européen, les gaines techniques, les faux-plafonds et les vieux conduits permettent aux rongeurs de circuler librement entre étages. Un traitement efficace doit couvrir l'ensemble du bâtiment et colmater tous les points d'entrée.",
  },
  {
    q: "Intervenez-vous dans toutes les communes de la Région bruxelloise ?",
    a: "Oui : Bruxelles-Ville, Ixelles, Schaerbeek, Molenbeek, Anderlecht, Etterbeek, Jette, Koekelberg, Forest, Uccle, Saint-Gilles, Woluwe et toutes les communes bruxelloises. Délai d'intervention sous 24h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Bruxelles",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Bruxelles",
  description: "Service de dératisation professionnelle à Bruxelles. Rats, souris, rongeurs dans immeubles et quartiers urbains. Techniciens certifiés, garantie 30 jours.",
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

export default function DeratisationBruxellesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Bruxelles
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Bruxelles — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Bruxelles ? Intervention sous 24h dans tous les quartiers —
            Ixelles, Schaerbeek, Molenbeek, Anderlecht. Techniciens certifiés, garantie 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Devis gratuit sous 24h →
            </Link>
            <a href="tel:+32466442454" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image src="/cave-deratisation.jpg" alt="Dératisation Bruxelles immeubles et caves" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Bruxelles, Région capitale</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Bruxelles et la problématique des rongeurs en milieu urbain dense</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Bruxelles concentre sur son territoire une densité de population et de bâtiments parmi les plus élevées de Belgique.
          Les immeubles anciens de Schaerbeek, les cave interconnectées d&apos;Ixelles et les sous-sols des quartiers populaires
          de Molenbeek et d&apos;Anderlecht constituent des zones de prolifération idéales pour les rats bruns. Le canal de Bruxelles
          et ses abords sont également des vecteurs de colonisation permanents.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Les chantiers de rénovation urbaine et les travaux d&apos;infrastructure métro déplacent régulièrement les colonies de
          rongeurs vers les habitations voisines. Un diagnostic professionnel sur site permet d&apos;identifier les espèces présentes,
          les couloirs de déplacement et les points d&apos;entrée pour adapter le traitement à la réalité de chaque bâtiment bruxellois.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce (rat brun, souris domestique), repérage des couloirs et points d'entrée dans l'immeuble." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable contre les réinfestations en milieu urbain dense." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour sans frais si les rongeurs réapparaissent dans le mois suivant l'intervention." },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-3xl mb-2">{c.emoji}</div>
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
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Bruxelles</h2>
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
            { label: "Dératisation Namur", href: "/deratisation-namur" },
            { label: "Dératisation Charleroi", href: "/deratisation-charleroi" },
            { label: "Dératisation Mons", href: "/deratisation-mons" },
            { label: "Dératisation Verviers", href: "/deratisation-verviers" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Bruxelles ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
