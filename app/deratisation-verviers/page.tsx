import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation Verviers — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Verviers. Rats dans la vallée de la Vesdre, anciens bâtiments textiles, proximité Liège. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Pourquoi Verviers est-elle exposée aux rongeurs ?",
    a: "La vallée de la Vesdre, qui traverse Verviers, constitue un corridor naturel pour les rats bruns qui colonisent les berges et les sous-sols des habitations riveraines. De plus, les nombreux anciens bâtiments textiles — fabriques, filatures et entrepôts reconvertis ou abandonnés — offrent des espaces souterrains idéaux pour l'installation de colonies de rongeurs.",
  },
  {
    q: "Combien coûte une dératisation à Verviers ?",
    a: "Entre 150 € et 400 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h. Pour les anciens bâtiments industriels reconvertis ou les entrepôts de la région verviétoise, tarif établi sur devis.",
  },
  {
    q: "Les anciens bâtiments textiles de Verviers sont-ils des foyers à risque ?",
    a: "Oui. Les anciennes filatures et manufactures textiles de la région verviétoise, qu'elles soient reconverties en logements ou encore en friche, présentent des caractéristiques propices aux rongeurs : grands sous-sols, anciens canaux d'amenée d'eau, murs épais avec de nombreux interstices. Ces bâtiments requièrent souvent un traitement plus approfondi.",
  },
  {
    q: "Intervenez-vous dans toute la région verviétoise ?",
    a: "Oui : Verviers-Centre, Ensival, Stembert, Heusy, Lambermont, Petit-Rechain, Dison, Pepinster et toutes les communes de l'arrondissement. Proximité avec Liège garantit un délai d'intervention sous 24h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Verviers",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Verviers", postalCode: "4800", addressCountry: "BE" },
  },
  areaServed: "Verviers",
  description: "Service de dératisation professionnelle à Verviers. Rats dans la vallée de la Vesdre et anciens bâtiments textiles. Techniciens certifiés, garantie 30 jours.",
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

export default function DeratisationVerviersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Verviers
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Verviers — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Verviers ? Intervention sous 24h dans la vallée de la Vesdre
            et tous les quartiers verviétois. Techniciens certifiés, garantie 30 jours.
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
          <Image src="/cave-deratisation.jpg" alt="Dératisation Verviers vallée de la Vesdre" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention dératisation — Verviers, vallée de la Vesdre</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Verviers et la problématique des rongeurs dans la vallée de la Vesdre</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          La Vesdre, qui donne son caractère à la ville de Verviers, constitue un corridor naturel de déplacement
          pour les rats bruns. Les berges de la rivière, les anciens canaux d&apos;amenée d&apos;eau des manufactures textiles
          et les sous-sols des filatures reconverties créent un réseau souterrain complexe que les rongeurs
          exploitent pour se déplacer et s&apos;installer dans les habitations riveraines.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          La proximité de Liège, à moins de 30 km, et le tissu dense d&apos;anciens bâtiments industriels dans
          les quartiers d&apos;Ensival, Stembert et Heusy renforcent les risques d&apos;infestation. Un diagnostic
          professionnel permet d&apos;identifier les espèces présentes et les couloirs d&apos;accès spécifiques au bâtiment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic précis", d: "Identification de l'espèce (rat brun, campagnol, souris), repérage des couloirs liés à la Vesdre et aux anciens bâtiments textiles." },
            { emoji: "🎯", t: "Traitement ciblé", d: "Appâts rodenticides certifiés, colmatage des accès, protection durable contre les réinfestations depuis les berges et sous-sols industriels." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Dératisation Verviers</h2>
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
            { label: "Dératisation Seraing", href: "/deratisation-seraing" },
            { label: "Dératisation Bruxelles", href: "/deratisation-bruxelles" },
            { label: "Dératisation Namur", href: "/deratisation-namur" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Verviers ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h, devis gratuit, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
