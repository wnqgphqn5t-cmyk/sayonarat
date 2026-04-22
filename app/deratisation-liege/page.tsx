import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Liège — Élimination rats & souris | Sayonarat",
  description:
    "Dératisation professionnelle à Liège. Élimination rats, souris, campagnols. Intervention sous 24h, devis gratuit. Traitement garanti 30 jours.",
};

const faqs = [
  {
    q: "Comment savoir si j'ai des rats chez moi à Liège ?",
    a: "Signes typiques : bruits de grattement la nuit, excréments noirs de 1 à 2 cm, traces de morsures sur câbles ou aliments, trous dans les murs ou planchers.",
  },
  {
    q: "Combien de temps dure une intervention de dératisation ?",
    a: "Entre 1h et 3h selon la superficie. Nous réalisons un diagnostic, posons les appâts et pièges, puis revenons 10 jours plus tard pour vérifier l'efficacité.",
  },
  {
    q: "Les produits utilisés sont-ils dangereux ?",
    a: "Nos techniciens utilisent des rodenticides homologués en Belgique. Ils sont sécurisés dans des boîtiers anti-enfants et anti-animaux de compagnie.",
  },
  {
    q: "Quel est le prix d'une dératisation à Liège ?",
    a: "Entre 90 € et 200 € selon la taille du logement et le degré d'infestation. Devis gratuit et sans engagement sous 24h.",
  },
  {
    q: "La dératisation fonctionne-t-elle dès la première intervention ?",
    a: "Dans la majorité des cas, oui. Nous offrons un suivi de 30 jours avec retour sans frais si les nuisibles réapparaissent.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Liège",
      postalCode: "4000",
      addressCountry: "BE",
    },
  },
  areaServed: "Liège",
  description: "Service de dératisation professionnelle à Liège. Élimination de rats et souris.",
  serviceType: "PestControl",
};

export default function DeratisationLiegePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Dératisation Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Liège — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Vous avez des rats ou des souris à Liège ? Sayonarat vous met en contact avec un
            dératiseur certifié disponible sous 24h. Traitement efficace, produits homologués,
            résultat garanti 30 jours.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi faire appel à un dératiseur professionnel à Liège ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Une infestation de rongeurs est une urgence sanitaire. Les rats et souris peuvent
          contaminer vos aliments, ronger les câbles électriques (risque d&apos;incendie) et transmettre
          des maladies comme la leptospirose. À Liège, les quartiers du centre-ville, les zones
          portuaires et les habitations anciennes sont particulièrement exposés.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Un dératiseur professionnel réalise un diagnostic complet de votre logement, identifie
          les zones d&apos;entrée et de nidification, et met en place un traitement adapté. Les produits
          grand public sont souvent insuffisants et peuvent aggraver la situation.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Notre méthode de dératisation à Liège
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { step: "1", title: "Diagnostic", desc: "Inspection complète du logement pour identifier les traces, nids et points d'entrée." },
            { step: "2", title: "Traitement", desc: "Pose de boîtiers à appâts sécurisés et pièges adaptés au type de rongeur." },
            { step: "3", title: "Suivi", desc: "Retour à J+10 pour vérifier l'efficacité. Garantie 30 jours incluse." },
          ].map((s) => (
            <div key={s.step} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl font-bold mb-2" style={{ color: "#1B4332" }}>Étape {s.step}</div>
              <div className="font-semibold mb-1">{s.title}</div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Le saviez-vous ?</p>
          <p className="text-sm text-gray-700 mt-1">
            Une femelle rat peut donner naissance à 40 à 60 petits par an. Sans intervention rapide,
            une infestation double en moins de 6 semaines. À Liège, les signalements de rongeurs
            ont augmenté de 23% entre 2022 et 2024 selon les services communaux.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Liège
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

      {/* CTA */}
      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rats ou souris détectés à Liège ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Agissez vite. Un technicien certifié peut intervenir chez vous dès demain.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
        >
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
