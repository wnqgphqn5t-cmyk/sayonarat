import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Flémalle — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Flémalle. Rats, souris. Intervention sous 24h, devis gratuit, résultat garanti 30 jours.",
};

const faqs = [
  {
    q: "Intervenez-vous dans tout Flémalle ?",
    a: "Oui. Nous couvrons tout Flémalle : Flémalle-Grande, Flémalle-Haute, Awirs, Chokier, Ivoz-Ramet et Trembleur.",
  },
  {
    q: "Pourquoi Flémalle est exposée aux rongeurs ?",
    a: "La présence de la Meuse, des anciennes carrières et des zones industrielles d'Ivoz-Ramet crée un environnement favorable aux rongeurs qui migrent vers les zones résidentielles.",
  },
  {
    q: "Quel est le délai d'intervention à Flémalle ?",
    a: "Généralement moins de 24h. Pour les urgences, nous faisons notre possible pour intervenir le jour même.",
  },
  {
    q: "Quel est le prix d'une dératisation à Flémalle ?",
    a: "Entre 90 € et 200 € selon la superficie. Devis gratuit sous 24h, sans engagement.",
  },
  {
    q: "Le traitement est-il adapté aux maisons avec cave à Flémalle ?",
    a: "Oui. Les caves sont souvent le premier endroit à traiter. Nous réalisons un diagnostic complet de la cave, des sous-sols et des accès extérieurs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Flémalle",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Flémalle",
  serviceType: "PestControl",
};

export default function DeratisationFlemallePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Flémalle
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Flémalle — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Flémalle ? Un technicien certifié intervient sous 24h.
            Traitement efficace, produits homologués, garantie 30 jours incluse.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Dératisation à Flémalle : une commune en bord de Meuse
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Flémalle, située entre Liège et Huy sur les bords de la Meuse, est exposée aux
          rongeurs par sa géographie et la présence d&apos;anciennes zones industrielles. Les caves
          humides et les maisons anciens sont les premiers touchés.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nos techniciens sont habitués aux problématiques locales de Flémalle. Intervention
          rapide, traitement professionnel et suivi inclus dans chaque prestation.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
          <p className="font-semibold text-gray-800">📊 Bon à savoir pour Flémalle</p>
          <p className="text-sm text-gray-700 mt-1">
            Les périodes de crue de la Meuse déplacent les populations de rongeurs vers les
            zones habitées. Octobre à mars est la période de risque maximale à Flémalle.
            Une intervention préventive en début d&apos;automne est fortement recommandée.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Flémalle
          </h2>
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

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Flémalle ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
