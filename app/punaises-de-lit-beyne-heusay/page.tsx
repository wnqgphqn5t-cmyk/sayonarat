import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/punaises-de-lit-beyne-heusay" },
  title: "Punaises de lit Beyne-Heusay — Traitement garanti",
  description:
    "Traitement punaises de lit à Beyne-Heusay. Thermique ou chimique. Résultat garanti. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Comment savoir si j'ai des punaises de lit à Beyne-Heusay ?",
    a: "Les signes principaux sont des piqûres alignées sur le corps (souvent en 3), des taches rougeâtres ou noires sur le matelas et le sommier, et de petites mues translucides. Si vous suspectez une infestation, ne tardez pas : les punaises se reproduisent rapidement.",
  },
  {
    q: "Quelle méthode de traitement est la plus efficace ?",
    a: "Le traitement thermique (chaleur à 55-60°C) est le plus radical : il élimine les punaises à tous les stades en une seule intervention, sans produits chimiques. Le traitement chimique est une alternative efficace pour les logements où la chaleur n'est pas applicable. Nous vous conseillons la méthode adaptée lors du diagnostic.",
  },
  {
    q: "Quel est le prix du traitement punaises de lit à Beyne-Heusay ?",
    a: "Le tarif minimum est de 150 € pour un traitement chimique standard. Le traitement thermique est plus coûteux selon la superficie. Devis gratuit sous 24h.",
  },
  {
    q: "Dois-je quitter mon logement pendant le traitement ?",
    a: "Pour le traitement thermique, une absence de quelques heures est recommandée. Pour le traitement chimique, nous vous indiquons précisément la durée d'absence nécessaire. Vos animaux de compagnie doivent également être sortis pendant l'intervention.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Beyne-Heusay",
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
  areaServed: "Beyne-Heusay",
  description:
    "Traitement punaises de lit à Beyne-Heusay. Méthode thermique ou chimique. Résultat garanti, retour sans frais si réinfestation.",
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

export default function PunaisesLitBeyneHeusayPage() {
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
            &rsaquo; Beyne-Heusay
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Beyne-Heusay — Traitement garanti
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Beyne-Heusay ? Un technicien certifié intervient sous 24h.
            Traitement thermique ou chimique selon votre situation. Garantie 30 jours,
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
              alt="Traitement punaises de lit Beyne-Heusay"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Punaises de lit : agissez rapidement
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les punaises de lit ne sont pas liées à un manque d&apos;hygiène. Elles
              s&apos;introduisent dans les logements via les voyages, les meubles
              d&apos;occasion ou les voisins. Une fois installées, elles se reproduisent
              très rapidement : une femelle peut pondre jusqu&apos;à 500 oeufs dans
              sa vie.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              À Beyne-Heusay, nous intervenons dans les maisons individuelles des
              villages de Beyne, Queue-du-Bois et Bellaire. Diagnostic préalable
              obligatoire pour choisir la méthode la plus adaptée à votre logement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous garantissons le résultat : retour sans frais si réinfestation
              constatée dans les 30 jours suivant le traitement.
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
            <div className="bg-white rounded-xl p-6 shadow-sm border-2" style={{ borderColor: "#1B4332" }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#1B4332" }}>
                Traitement thermique
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                La chaleur est portée à 55-60°C dans toutes les pièces traitées.
                Les punaises, larves et oeufs sont éliminés en une seule intervention,
                sans résidu chimique. Idéal pour les familles avec enfants en bas âge.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>&#10003; Efficace dès la première intervention</li>
                <li>&#10003; Sans produits chimiques</li>
                <li>&#10003; Résultat en une journée</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-2" style={{ borderColor: "#2D6A4F" }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#2D6A4F" }}>
                Traitement chimique
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Application de produits insecticides homologués sur les zones infestées.
                Effet résiduel qui continue d&apos;agir après l&apos;intervention.
                Option privilégiée lorsque le traitement thermique n&apos;est pas possible.
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
            Questions fréquentes — Punaises de lit Beyne-Heusay
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
            ,{" "}
            <Link href="/punaises-de-lit-herstal" className="underline" style={{ color: "#1B4332" }}>
              Herstal
            </Link>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section
        style={{ backgroundColor: "#1B4332" }}
        className="py-14 px-4 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Punaises de lit à Beyne-Heusay ?</h2>
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
