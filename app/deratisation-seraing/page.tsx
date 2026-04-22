import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Seraing — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Seraing. Élimination rats et souris sous 24h. Devis gratuit, techniciens certifiés, résultat garanti 30 jours.",
};

const faqs = [
  {
    q: "Intervenez-vous rapidement à Seraing ?",
    a: "Oui. Seraing fait partie de notre zone d'intervention principale. Nous intervenons généralement le jour même ou le lendemain de votre demande.",
  },
  {
    q: "Quels nuisibles traitez-vous à Seraing ?",
    a: "Rats, souris, cafards, punaises de lit, frelons, guêpes et fourmis. Pour chaque type, nous adaptons le traitement.",
  },
  {
    q: "Le traitement est-il adapté aux maisons avec jardin ?",
    a: "Oui. Nous intervenons aussi bien à l'intérieur qu'à l'extérieur. Les jardins et remises sont souvent des points d'entrée pour les rongeurs.",
  },
  {
    q: "Quel est le prix d'une dératisation à Seraing ?",
    a: "Entre 90 € et 200 € selon la superficie. Devis gratuit sous 24h, sans engagement.",
  },
  {
    q: "Y a-t-il plus de rongeurs à Seraing qu'ailleurs ?",
    a: "Les zones industrielles et les bords de Meuse à Seraing favorisent la présence de rats. Les quartiers résidentiels proches de ces zones sont plus exposés.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Seraing",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Seraing",
  serviceType: "PestControl",
};

export default function DeratisationSeraingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Seraing
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Seraing — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Problème de rongeurs à Seraing ? Un dératiseur professionnel intervient chez vous
            sous 24h. Traitement certifié, produits homologués, suivi garanti 30 jours.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Dératisation à Seraing : une zone à risque
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Seraing, avec ses anciennes zones industrielles, ses égouts et la proximité de la Meuse,
          est une commune particulièrement exposée aux infestations de rongeurs. Les rats musqués
          et les rats bruns y sont fréquemment signalés.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Notre réseau de techniciens certifiés intervient dans tout Seraing : centre-ville,
          Jemeppe, Ougrée, Ramioul. Diagnostic gratuit sur place, traitement adapté à chaque
          situation.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
          <p className="font-semibold text-gray-800">📊 Zone industrielle et rongeurs</p>
          <p className="text-sm text-gray-700 mt-1">
            Les friches industrielles de Seraing abritent des colonies de rats qui migrent vers
            les habitations en période froide (octobre–mars). Une intervention préventive en
            automne réduit le risque de 70%.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Seraing
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
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Seraing ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
