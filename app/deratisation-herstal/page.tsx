import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Herstal — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Herstal. Rats, souris, rongeurs. Intervention sous 24h, devis gratuit, techniciens certifiés.",
};

const faqs = [
  {
    q: "Intervenez-vous à Herstal et ses quartiers ?",
    a: "Oui. Nous couvrons tout Herstal : centre, Milmort, Vottem, Liers. Intervention possible le jour même selon disponibilités.",
  },
  {
    q: "Pourquoi Herstal est-elle exposée aux rongeurs ?",
    a: "La zone industrielle de Milmort et la proximité du port autonome de Liège créent des conditions favorables aux rongeurs. Les entrepôts et zones de stockage sont des foyers fréquents.",
  },
  {
    q: "Que faire en attendant le technicien ?",
    a: "Bloquez les accès visibles (fissures, espaces sous les portes), ne laissez pas de nourriture accessible, et évitez de déplacer les excréments sans protection.",
  },
  {
    q: "Quel est le prix d'une dératisation à Herstal ?",
    a: "Entre 90 € et 200 € selon la superficie. Devis gratuit sous 24h.",
  },
  {
    q: "Intervenez-vous aussi pour les entreprises à Herstal ?",
    a: "Oui. Nous traitons aussi bien les particuliers que les entreprises, restaurants et entrepôts de la zone industrielle de Herstal.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Herstal",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Herstal",
  serviceType: "PestControl",
};

export default function DeratisationHerstalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Herstal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Herstal — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Herstal ? Un technicien certifié intervient chez vous sous 24h.
            Diagnostic gratuit sur place, traitement adapté, garantie 30 jours.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Herstal : une commune industrielle exposée aux nuisibles
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Herstal abrite l&apos;une des plus grandes zones industrielles de Belgique. Cette
          concentration d&apos;entrepôts, de restaurants et d&apos;espaces de stockage en fait un terrain
          propice à la prolifération des rongeurs, qui migrent ensuite vers les habitations
          résidentielles environnantes.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nos techniciens interviennent dans tous les quartiers de Herstal avec un matériel
          professionnel adapté : boîtiers sécurisés, rodenticides homologués et techniques de
          sécurisation des points d&apos;entrée.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
          <p className="font-semibold text-gray-800">📊 Saviez-vous ?</p>
          <p className="text-sm text-gray-700 mt-1">
            Un rat peut passer par un trou de la taille d&apos;une pièce de 2€. Une souris par un
            trou de 5mm. La sécurisation des accès après traitement est essentielle pour éviter
            les récidives — c&apos;est inclus dans toutes nos interventions à Herstal.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Herstal
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
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Herstal ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
