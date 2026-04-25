import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Punaises de lit Awans — Traitement garanti",
  description:
    "Traitement punaises de lit à Awans. Thermique ou chimique. Résultat garanti. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Les punaises de lit existent-elles aussi dans les zones rurales comme Awans ?",
    a: "Oui, absolument. Les punaises de lit ne sont pas liées à un type de logement ou à un environnement urbain ou rural. Elles se propagent via les voyages, les meubles et vêtements d'occasion, et peuvent s'installer dans n'importe quelle habitation, qu'elle soit en ville ou à la campagne.",
  },
  {
    q: "Quel est le prix du traitement punaises de lit à Awans ?",
    a: "Le tarif minimum est de 150 € pour un traitement chimique standard. Le traitement thermique est généralement plus coûteux. Devis gratuit sous 24h, prix définitif après diagnostic.",
  },
  {
    q: "Quelle méthode de traitement choisir ?",
    a: "Le traitement thermique (55-60°C) est le plus efficace en une seule intervention, sans produits chimiques. Le traitement chimique est une alternative solide lorsque le thermique n'est pas adapté. Nous vous conseillons la méthode appropriée après le diagnostic de votre logement.",
  },
  {
    q: "Combien de temps dure le traitement ?",
    a: "Le traitement thermique dure généralement une demi-journée à une journée selon la superficie. Le traitement chimique est plus rapide à appliquer mais nécessite une ou plusieurs visites. Dans tous les cas, vous recevez des instructions claires avant, pendant et après le traitement.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Awans",
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
    "Traitement punaises de lit à Awans. Méthode thermique ou chimique. Garantie 30 jours, retour sans frais si réinfestation.",
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

export default function PunaisesLitAwansPage() {
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
            <Link href="/punaises-de-lit-liege" className="hover:text-white">
              Punaises de lit Liège
            </Link>{" "}
            &rsaquo; Awans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Awans — Traitement garanti
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Awans ? Un technicien certifié intervient sous 24h.
            Traitement thermique ou chimique selon votre logement. Garantie 30 jours,
            retour sans frais si réinfestation.
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

      {/* Image + intro */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="md:flex md:gap-10 items-start">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/chambre-punaises.jpg"
              alt="Traitement punaises de lit Awans"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Punaises de lit à Awans : agissez sans attendre
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les punaises de lit (Cimex lectularius) s&apos;introduisent dans les
              logements par les voyages, les achats de meubles ou de vêtements
              d&apos;occasion, ou via des voisins infestés. Elles ne font pas de
              distinction entre les logements urbains et ruraux.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Une femelle peut pondre jusqu&apos;à 500 oeufs dans sa vie. Sans
              traitement professionnel, une infestation légère devient rapidement
              incontrôlable. Les produits du commerce sont rarement efficaces
              contre les oeufs, qui résistent aux insecticides classiques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous intervenons dans toute la commune d&apos;Awans avec un diagnostic
              préalable pour choisir la méthode la plus adaptée à votre situation.
              Garantie 30 jours sur tous nos traitements.
            </p>
          </div>
        </div>
      </section>

      {/* Méthodes */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Deux méthodes de traitement
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div
              className="bg-white rounded-xl p-6 shadow-sm border-2"
              style={{ borderColor: "#1B4332" }}
            >
              <h3 className="font-bold text-lg mb-3" style={{ color: "#1B4332" }}>
                Traitement thermique
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                La chaleur est portée à 55-60°C dans toutes les pièces traitées.
                Les punaises adultes, larves et oeufs sont éliminés en une seule
                intervention. Aucun résidu chimique. Idéal pour les maisons de campagne
                avec de grandes surfaces.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>&#10003; Efficace dès la première intervention</li>
                <li>&#10003; Sans produits chimiques</li>
                <li>&#10003; Résultat en une journée</li>
              </ul>
            </div>
            <div
              className="bg-white rounded-xl p-6 shadow-sm border-2"
              style={{ borderColor: "#2D6A4F" }}
            >
              <h3 className="font-bold text-lg mb-3" style={{ color: "#2D6A4F" }}>
                Traitement chimique
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Application de produits insecticides homologués sur les zones infestées
                et leurs abords. Effet résiduel prolongé. Option adaptée lorsque le
                traitement thermique n&apos;est pas possible ou souhaité.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>&#10003; Coût généralement inférieur</li>
                <li>&#10003; Effet résiduel prolongé</li>
                <li>&#10003; Adapté à tous types de logements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Punaises de lit Awans
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
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>
              Liège
            </Link>
            ,{" "}
            <Link href="/punaises-de-lit-ans" className="underline" style={{ color: "#1B4332" }}>
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
        <h2 className="text-2xl font-bold mb-3">Punaises de lit à Awans ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Diagnostic sous 24h. Traitement garanti 30 jours. Retour sans frais si réinfestation.
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
