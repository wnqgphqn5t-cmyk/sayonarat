import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation Mons — Intervention rapide",
  description:
    "Dératisation professionnelle à Mons. Rats dans le centre historique, Grand-Place, quartiers mixtes. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Pourquoi Mons est-elle exposée aux rongeurs ?",
    a: "Le centre historique de Mons, avec ses ruelles pavées, ses sous-sols anciens et ses bâtiments patrimoniaux autour de la Grand-Place, offre de nombreux refuges aux rats et aux souris. La cohabitation de quartiers résidentiels, commerciaux et d'anciens secteurs industriels dans l'agglomération montoise crée des conditions favorables à la prolifération des rongeurs.",
  },
  {
    q: "Combien coûte une dératisation à Mons ?",
    a: "Entre 150 € et 400 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h. Pour les établissements Horeca du centre-ville ou les bâtiments institutionnels, tarif établi sur devis.",
  },
  {
    q: "Les bâtiments anciens du centre de Mons sont-ils plus exposés ?",
    a: "Oui. Les bâtiments historiques du centre de Mons présentent souvent des caves communicantes, des fondations en pierres naturelles avec de nombreuses fissures et des sous-sols mal isolés qui facilitent l'intrusion des rongeurs. Un traitement efficace doit inclure le colmatage systématique de tous les points d'entrée identifiés.",
  },
  {
    q: "Intervenez-vous dans toute l'agglomération montoise ?",
    a: "Oui : Mons-Centre, Jemappes, Cuesmes, Ghlin, Nimy, Maisières, Saint-Symphorien, Flénu et toutes les sections de la commune. Délai d'intervention sous 24h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Mons",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Mons",
  description: "Service de dératisation professionnelle à Mons. Rats et souris dans le centre historique et les quartiers résidentiels. Techniciens certifiés, garantie 30 jours.",
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

export default function DeratisationMonsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Mons
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Mons — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Mons ? Intervention sous 24h dans le centre historique et tous les
            quartiers montois. Techniciens certifiés, garantie 30 jours.
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
          <Image src="/cave-deratisation.jpg" alt="Dératisation Mons centre historique" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Mons, centre historique</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Mons et la problématique des rongeurs en centre historique</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le cœur historique de Mons, avec ses ruelles médiévales et ses bâtiments séculaires autour de la Grand-Place
          et de la collégiale Sainte-Waudru, présente de nombreuses vulnérabilités aux intrusions de rongeurs.
          Les sous-sols anciens, les caves communicantes et les fondations en pierres naturelles offrent des passages
          naturels aux rats et aux souris qui migrent depuis les espaces verts environnants.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Les quartiers mixtes de Jemappes et Cuesmes, héritage de l&apos;industrie charbonnière, présentent également
          des bâtiments anciens avec des sous-sols propices à l&apos;infestation. Un diagnostic complet permet d&apos;identifier
          les espèces présentes et d&apos;établir un plan de traitement adapté à chaque type de bâtiment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce (rat brun, souris domestique), repérage des couloirs et points d'entrée dans les bâtiments montois anciens et modernes." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable contre les réinfestations depuis les espaces verts et sous-sols." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Mons</h2>
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
            { label: "Dératisation Namur", href: "/deratisation-namur" },
            { label: "Dératisation Verviers", href: "/deratisation-verviers" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Mons ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
