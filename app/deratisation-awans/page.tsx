import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation Awans — Intervention rapide",
  description:
    "Dératisation professionnelle à Awans. Rats, souris, rongeurs des champs. Zones rurales couvertes. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Quels rongeurs sont fréquents à Awans ?",
    a: "Awans est une commune semi-rurale avec des champs et des fermes. On y trouve principalement des campagnols des champs (Microtus arvalis) qui causent des dégâts aux cultures, des rats de ferme dans les granges et dépendances agricoles, et des souris domestiques qui migrent vers les habitations en automne.",
  },
  {
    q: "Quel est le prix d'une dératisation à Awans ?",
    a: "Le tarif minimum est de 150 € pour une intervention résidentielle standard. Pour les dépendances agricoles (granges, hangars), le prix est établi sur devis selon la superficie. Devis gratuit sous 24h.",
  },
  {
    q: "Couvrez-vous toute la commune d'Awans ?",
    a: "Oui. Nous intervenons dans l'ensemble de la commune d'Awans, y compris les villages de Fosse-la-Ville, Awans-centre et les hameaux environnants. Délai maximum de 24h.",
  },
  {
    q: "Comment les rongeurs entrent-ils dans les maisons à Awans en automne ?",
    a: "En automne, les campagnols et les souris des champs migrent vers les habitations lorsque les températures baissent. Ils entrent par les fissures de soubassement, les passages de canalisations, les joints de porte et les ouvertures autour des câbles. Notre diagnostic identifie et sécurise tous ces points d'entrée.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Awans",
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
    "Dératisation professionnelle à Awans. Campagnols des champs, rats de ferme, souris. Zones rurales et résidentielles. Intervention sous 24h, garantie 30 jours.",
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

export default function DeratisationAwansPage() {
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
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link>{" "}
            &rsaquo; Awans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Awans — Intervention rapide
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rongeurs à Awans ? Campagnols des champs, rats de ferme, souris — un
            dératiseur professionnel certifié intervient sous 24h dans toute la commune.
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
              src="/cave-deratisation.jpg"
              alt="Dératisation zone rurale Awans"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Awans : une commune rurale particulièrement exposée aux rongeurs
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Awans est une commune semi-rurale au nord-ouest de Liège, caractérisée par
              ses champs agricoles, ses fermes et ses hameaux peu denses. Cette
              configuration crée des conditions propices à la présence de nombreux
              rongeurs : campagnols des champs dans les cultures, rats dans les granges
              et dépendances, souris dans les habitations.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              En automne, les migrations des rongeurs des champs vers les habitations
              sont particulièrement importantes à Awans. Les maisons de campagne avec
              cave, grange ou hangar adjacent sont les plus exposées. Les rats de ferme
              (Rattus norvegicus) peuvent coloniser rapidement les dépendances agricoles
              non traitées.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous intervenons aussi bien dans les habitations résidentielles que dans
              les exploitations agricoles de la commune. Diagnostic complet, traitement
              adapté et sécurisation durable.
            </p>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Notre méthode en 3 étapes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4"
                style={{ backgroundColor: "#1B4332" }}
              >
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Diagnostic complet</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inspection des habitations, granges, dépendances et abords. Identification
                du type de rongeur et des points d&apos;entrée. Évaluation de l&apos;étendue
                de l&apos;infestation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Traitement adapté</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Appâts rodenticides homologués, pièges mécaniques selon les zones.
                Traitement spécifique pour les milieux ruraux : granges, silos, hangars
                et dépendances agricoles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4"
                style={{ backgroundColor: "#FBBF24" }}
              >
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Garantie 30 jours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Retour sans frais si réinfestation dans les 30 jours. Sécurisation
                des points d&apos;entrée et conseils de prévention spécifiques
                au milieu rural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Awans
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
            <Link href="/deratisation-liege" className="underline" style={{ color: "#1B4332" }}>
              Liège
            </Link>
            ,{" "}
            <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>
              Ans
            </Link>
            ,{" "}
            <Link href="/deratisation-grace-hollogne" className="underline" style={{ color: "#1B4332" }}>
              Grâce-Hollogne
            </Link>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section
        style={{ backgroundColor: "#1B4332" }}
        className="py-14 px-4 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Awans ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Intervention sous 24h. Devis gratuit et sans engagement. Garantie 30 jours.
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
