import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Désinsectisation Beyne-Heusay — Cafards, fourmis, guêpes | Sayonarat",
  description:
    "Désinsectisation professionnelle à Beyne-Heusay. Cafards, fourmis, guêpes. Intervention rapide, garantie 30 jours.",
};

const faqs = [
  {
    q: "Pourquoi y a-t-il autant de guêpes et frelons à Beyne-Heusay ?",
    a: "Les zones boisées entourant Beyne-Heusay sont un habitat idéal pour les guêpes et les frelons européens. Ils nichent dans les arbres creux, les combles et les avancées de toit des maisons individuelles. Entre juillet et septembre, les nids atteignent leur taille maximale et les risques de piqûres augmentent significativement.",
  },
  {
    q: "Quel est le tarif pour une désinsectisation à Beyne-Heusay ?",
    a: "Le tarif minimum est de 120 € pour une intervention standard. Pour la destruction de nids de guêpes ou de frelons, le prix varie selon la hauteur et l'accessibilité. Devis gratuit sous 24h.",
  },
  {
    q: "Comment savoir si j'ai des cafards dans ma maison ?",
    a: "Les premiers signes sont des crottes noires de la taille d'une tête d'épingle dans les placards de cuisine, une odeur légèrement musquée, et des traces brunes sur les parois. Les cafards sont nocturnes : si vous en voyez le jour, l'infestation est souvent déjà avancée.",
  },
  {
    q: "Le traitement est-il sans danger pour mes enfants et animaux ?",
    a: "Oui. Nous utilisons des produits biocides homologués en Belgique, appliqués par des techniciens certifiés. Nous vous indiquons les précautions à prendre pendant et après le traitement (aération, absence temporaire si nécessaire).",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Beyne-Heusay",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beyne-Heusay",
      postalCode: "4610",
      addressCountry: "BE",
    },
  },
  areaServed: "Beyne-Heusay",
  description:
    "Désinsectisation professionnelle à Beyne-Heusay. Cafards, fourmis, guêpes, mites. Intervention rapide, garantie 30 jours.",
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

export default function DesinsectisationBeyneHeusayPage() {
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
            &rsaquo; Beyne-Heusay
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Beyne-Heusay — Cafards, fourmis, guêpes
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Insectes nuisibles à Beyne-Heusay ? Guêpes dans les combles, cafards en
            cuisine, fourmis dans le jardin — un technicien certifié intervient sous 24h.
            Garantie 30 jours, retour sans frais si réinfestation.
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
              alt="Désinsectisation cuisine Beyne-Heusay"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Insectes nuisibles à Beyne-Heusay : le contexte boisé explique tout
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les zones boisées qui entourent la commune de Beyne-Heusay créent des
              conditions idéales pour la prolifération des guêpes et des frelons. Ces
              insectes établissent leurs nids dans les arbres creux, mais aussi dans les
              combles, les greniers et sous les avancées de toit des maisons individuelles
              de Beyne, Queue-du-Bois et Bellaire.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les jardins exposés favorisent également la prolifération des fourmis, qui
              s&apos;installent sous les dalles de terrasse et migrent vers les cuisines.
              Les cafards, quant à eux, profitent des caves humides des maisons
              plus anciennes pour se reproduire discrètement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous intervenons sur l&apos;ensemble de la commune avec des produits
              biocides homologués et des méthodes adaptées à chaque type d&apos;insecte.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Nos interventions à Beyne-Heusay
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Cafards et blattes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Traitement par gel insecticide (sans odeur, sans évacuation) ou pulvérisation.
                Efficace sur toutes les espèces, y compris la blatte orientale fréquente
                dans les caves humides.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Fourmis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Traitement des colonies à la source : appâts spécifiques transmis aux
                reines. Traitement extérieur des bordures et des dalles de terrasse
                pour éviter les intrusions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Guêpes et frelons
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Destruction sécurisée des nids de guêpes et de frelons, y compris en
                hauteur. Intervention en tenue de protection complète, traitement nocturne
                si nécessaire.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2" style={{ color: "#1B4332" }}>
                Mites et autres insectes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Traitement des mites alimentaires (farine, riz) et textiles.
                Intervention également sur puces, punaises de lit légères, et autres
                insectes rampants ou volants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Désinsectisation Beyne-Heusay
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
            ,{" "}
            <Link href="/desinsectisation-herstal" className="underline" style={{ color: "#1B4332" }}>
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
        <h2 className="text-2xl font-bold mb-3">Insectes nuisibles à Beyne-Heusay ?</h2>
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
