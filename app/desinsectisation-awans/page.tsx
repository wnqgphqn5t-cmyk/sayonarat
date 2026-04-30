import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/desinsectisation-awans" },
  title: "Désinsectisation Awans — Cafards, fourmis, guêpes",
  description:
    "Désinsectisation professionnelle à Awans. Cafards, fourmis, guêpes. Zones rurales et résidentielles. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Pourquoi les guêpes sont-elles fréquentes à Awans ?",
    a: "Le milieu rural d'Awans offre de nombreux sites de nidification aux guêpes : haies bocagères, talus enherbés, arbres creux et combles de maisons de campagne. En été, les colonies atteignent plusieurs milliers d'individus et les nids installés près des habitations représentent un danger réel.",
  },
  {
    q: "Quel est le prix d'une désinsectisation à Awans ?",
    a: "Le tarif minimum est de 120 € pour une intervention standard. Pour la destruction de nids de guêpes ou de frelons, le prix varie selon la hauteur, l'accessibilité et la taille du nid. Devis gratuit sous 24h.",
  },
  {
    q: "J'ai des fourmis dans ma maison de campagne à Awans, que faire ?",
    a: "Les fourmis dans les maisons rurales entrent généralement par les murs, les dalles et les fondations. Un traitement adapté consiste à appâter les colonies avec des produits transmis à la reine. Nous traitons aussi les abords extérieurs (terrasse, bordures) pour couper les voies d'accès.",
  },
  {
    q: "Intervenez-vous aussi dans les fermes et bâtiments agricoles à Awans ?",
    a: "Oui. Nous traitons les insectes nuisibles dans les bâtiments agricoles, granges et hangars d'Awans. Nous utilisons des produits adaptés aux milieux agricoles, compatibles avec la présence d'animaux (sur indication préalable).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Awans",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Liège",
      postalCode: "4000",
      addressCountry: "BE",
    },
  },
  areaServed: "Awans",
  description:
    "Désinsectisation professionnelle à Awans. Guêpes en haies et talus, fourmis en maisons de campagne, cafards. Zones rurales et résidentielles couvertes.",
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

export default function DesinsectisationAwansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> &rsaquo;{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">
              Désinsectisation Liège
            </Link>{" "}
            &rsaquo; Awans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Awans — Cafards, fourmis, guêpes
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Insectes nuisibles à Awans ? Guêpes dans les haies et les combles, fourmis
            en maison de campagne, cafards — un technicien certifié intervient sous 24h.
            Zones rurales et résidentielles couvertes. Garantie 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center"
            >
              Devis gratuit sous 24h →
            </Link>
            <a
              href="tel:+32466442454"
              style={{ backgroundColor: "white", color: "#1B4332" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Image + texte local */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="md:flex md:gap-10 items-start">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/cuisine-desinsectisation.jpg"
              alt="Désinsectisation Awans zone rurale"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Le contexte rural d&apos;Awans favorise certains insectes nuisibles
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              À Awans, le milieu semi-rural crée des conditions particulières pour les
              insectes nuisibles. Les haies bocagères et les talus enherbés qui bordent
              les habitations sont des sites de nidification privilégiés pour les guêpes
              et les frelons. En juillet-août, ces colonies peuvent compter plusieurs
              milliers d&apos;individus.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les fourmis constituent également un problème récurrent dans les maisons
              de campagne d&apos;Awans. Elles s&apos;installent sous les dalles, dans
              les murs et remontent vers les cuisines à la recherche de nourriture.
              Les cafards, quant à eux, profitent de l&apos;humidité des caves pour
              se reproduire discrètement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous intervenons dans toute la commune, y compris les fermes et
              bâtiments agricoles. Produits homologués, techniciens certifiés.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Nos interventions à Awans
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Cafards et blattes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Traitement par gel insecticide ciblé dans les zones d&apos;activité.
                Efficace sur toutes les espèces. Sans évacuation obligatoire pour le
                traitement par gel.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Fourmis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Traitement à la source : appâts transmis aux colonies entières.
                Traitement extérieur des bordures, terrasses et haies pour couper
                les voies d&apos;accès aux habitations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Guêpes et frelons
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Destruction sécurisée des nids de guêpes dans les haies, talus,
                combles et bâtiments agricoles. Intervention en tenue de protection,
                même sur nids difficiles d&apos;accès.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Mites et autres insectes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mites alimentaires (farine, céréales) fréquentes dans les maisons
                rurales avec réserves. Traitement également sur puces, tiques et
                autres insectes rampants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Désinsectisation Awans
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-sm text-center">
            Autres communes couvertes :{" "}
            <Link href="/desinsectisation-liege" className="underline" style={{ color: "#1B4332" }}>
              Liège
            </Link>
            ,{" "}
            <Link href="/desinsectisation-ans" className="underline" style={{ color: "#1B4332" }}>
              Ans
            </Link>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section
        style={{ backgroundColor: "#1B4332" }}
        className="py-14 px-4 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Insectes nuisibles à Awans ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Intervention sous 24h. Devis gratuit. Garantie 30 jours.
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
