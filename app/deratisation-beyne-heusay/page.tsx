import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation Beyne-Heusay — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Beyne-Heusay. Rats, souris, rongeurs. Maisons individuelles et jardins. Devis gratuit sous 24h, techniciens certifiés.",
};

const faqs = [
  {
    q: "Quels rongeurs trouve-t-on à Beyne-Heusay ?",
    a: "Les boisements entourant Beyne, Queue-du-Bois et Bellaire attirent principalement des campagnols des champs et des mulots. En automne, ces rongeurs migrent vers les habitations pour se mettre au chaud. Les rats bruns (Rattus norvegicus) sont aussi présents dans les caves et sous-sols anciens.",
  },
  {
    q: "Quel est le prix d'une dératisation à Beyne-Heusay ?",
    a: "Le tarif minimum est de 150 € pour une intervention standard. Le prix final dépend de la superficie, du type de rongeur et de l'étendue de l'infestation. Devis gratuit sous 24h.",
  },
  {
    q: "Intervenez-vous dans tous les villages de la commune ?",
    a: "Oui, nous couvrons l'ensemble de la commune de Beyne-Heusay : Beyne, Queue-du-Bois et Bellaire. Délai d'intervention maximum de 24h.",
  },
  {
    q: "Les jardins et espaces extérieurs sont-ils traités ?",
    a: "Absolument. Les jardins des maisons individuelles de Beyne-Heusay sont souvent une zone d'entrée des rongeurs. Nous traitons les abords, les composteurs, les potagers et les annexes (garages, abris de jardin) en plus de l'intérieur.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Beyne-Heusay",
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
    "Dératisation professionnelle à Beyne-Heusay. Rats, souris, campagnols, mulots. Intervention sous 24h, garantie 30 jours.",
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

export default function DeratisationBeyneHeusayPage() {
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
            &rsaquo; Beyne-Heusay
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Beyne-Heusay — Intervention rapide
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rongeurs à Beyne-Heusay ? Campagnols, mulots, rats ou souris — un dératiseur
            certifié intervient sous 24h. Traitement adapté aux maisons individuelles et
            jardins. Garantie 30 jours, retour sans frais si réinfestation.
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
              alt="Dératisation cave Beyne-Heusay"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Pourquoi Beyne-Heusay est particulièrement exposée aux rongeurs
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Perchée sur les hauteurs de Liège, la commune de Beyne-Heusay est entourée
              de boisements importants. Ces zones arborées constituent un habitat naturel
              pour les campagnols des champs et les mulots, qui migrent vers les habitations
              dès l&apos;automne lorsque les températures chutent.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les maisons individuelles avec jardins de Beyne, Queue-du-Bois et Bellaire
              présentent de nombreux points d&apos;entrée potentiels : composteurs, potagers,
              abris de jardin et surtout les caves anciennes dont les maçonneries laissent
              parfois passer les rongeurs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Notre équipe intervient dans toute la commune avec un diagnostic complet :
              intérieur et extérieur, identification des points d&apos;entrée et sécurisation
              durable.
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
                Inspection intérieure et extérieure : caves, combles, jardins, annexes.
                Identification du type de rongeur et des points d&apos;entrée.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4"
                style={{ backgroundColor: "#2D6A4F" }}
              >
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Traitement ciblé</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pose d&apos;appâts rodenticides homologués, pièges mécaniques selon les zones.
                Traitement adapté aux maisons avec jardins et caves.
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
                Retour sans frais si réinfestation dans les 30 jours. Sécurisation des
                points d&apos;entrée et conseils de prévention fournis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Beyne-Heusay
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
            <Link href="/deratisation-herstal" className="underline" style={{ color: "#1B4332" }}>
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
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Beyne-Heusay ?</h2>
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
