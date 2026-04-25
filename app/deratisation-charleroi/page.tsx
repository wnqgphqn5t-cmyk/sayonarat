import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation Charleroi — Intervention rapide",
  description:
    "Dératisation professionnelle à Charleroi. Rats dans anciens sites industriels, sous-sols, bassin industriel. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Pourquoi Charleroi est-elle particulièrement exposée aux rats ?",
    a: "Le passé industriel de Charleroi a laissé de nombreux sites en friche, sous-sols abandonnés et anciennes galeries dans tout le bassin carolorégien. Ces espaces constituent des refuges permanents pour les rats bruns. Les quartiers ouvriers anciens de Marchienne-au-Pont, Couillet et Gilly présentent également de nombreux bâtiments vieillissants propices aux infestations.",
  },
  {
    q: "Combien coûte une dératisation à Charleroi ?",
    a: "Entre 150 € et 400 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h. Pour les sites industriels, entrepôts ou bâtiments commerciaux du bassin de Charleroi, tarif établi sur devis spécifique.",
  },
  {
    q: "Les anciens sites industriels de Charleroi favorisent-ils les rongeurs ?",
    a: "Oui. Les friches industrielles, galeries souterraines et anciens dépôts du bassin carolorégien offrent des abris permanents et des corridors de déplacement pour les rats bruns. Une infestation dans un tel site peut rapidement s'étendre aux habitations riveraines. Le traitement doit inclure une inspection des accès souterrains.",
  },
  {
    q: "Intervenez-vous dans toute l'agglomération de Charleroi ?",
    a: "Oui : Charleroi-Centre, Marchienne-au-Pont, Couillet, Gilly, Châtelet, Montignies-sur-Sambre, Dampremy, Lodelinsart et toutes les communes de l'arrondissement. Délai d'intervention sous 24h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Charleroi",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Charleroi",
  description: "Service de dératisation professionnelle à Charleroi. Rats dans anciens sites industriels et quartiers résidentiels. Techniciens certifiés, garantie 30 jours.",
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

export default function DeratisationCharleroiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Charleroi
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Charleroi — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Charleroi ? Intervention sous 24h dans tout le bassin carolorégien —
            anciens sites industriels, quartiers résidentiels. Techniciens certifiés, garantie 30 jours.
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
          <Image src="/cave-deratisation.jpg" alt="Dératisation Charleroi anciens sites industriels" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Charleroi, bassin industriel</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Charleroi et la problématique des rongeurs dans le bassin industriel</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le bassin carolorégien cumule plusieurs facteurs favorables à la prolifération des rongeurs : d&apos;anciens sites
          industriels en friche, des sous-sols et galeries hérités de l&apos;ère charbonnière, et des quartiers ouvriers
          anciens aux bâtiments vieillissants. À Marchienne-au-Pont, Couillet et Gilly, les rats bruns bénéficient
          d&apos;un habitat souterrain étendu et difficile à contrôler.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          La Sambre, qui traverse Charleroi, constitue également un corridor naturel pour les colonies de rats bruns
          qui colonisent ensuite les berges et les habitations riveraines. Un diagnostic professionnel permet d&apos;identifier
          précisément les voies d&apos;accès et d&apos;établir un traitement durable adapté au contexte local.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce (rat brun, souris), repérage des couloirs souterrains et points d'entrée dans les bâtiments de Charleroi." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable contre les réinfestations depuis les friches industrielles." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Charleroi</h2>
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
            { label: "Dératisation Namur", href: "/deratisation-namur" },
            { label: "Dératisation Mons", href: "/deratisation-mons" },
            { label: "Dératisation Verviers", href: "/deratisation-verviers" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Charleroi ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
