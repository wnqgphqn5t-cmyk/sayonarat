import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Punaises de lit Grâce-Hollogne — Traitement garanti",
  description:
    "Traitement punaises de lit à Grâce-Hollogne. Méthode thermique ou chimique. Résultat garanti dès la 1ère intervention. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Comment les punaises de lit arrivent-elles à Grâce-Hollogne ?",
    a: "La proximité de l'aéroport de Liège augmente le risque de contamination via les voyages. Les punaises se transportent dans les valises, vêtements et bagages. Un seul séjour dans un hôtel infesté suffit pour ramener des punaises chez vous. Liège Airport génère un flux de voyageurs important dans la commune.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Grâce-Hollogne ?",
    a: "Entre 150 € et 450 € selon la superficie et la méthode choisie. Traitement thermique (chaleur 60°C) : plus rapide, résultat le soir même. Traitement chimique : moins cher, adapté aux infestations débutantes. Devis gratuit sous 24h.",
  },
  {
    q: "Dois-je jeter mon matelas ?",
    a: "Non. Jeter le matelas ne résout pas le problème — les punaises vivent dans le cadre de lit, les plinthes et les prises électriques, pas seulement dans le matelas. Un traitement professionnel est indispensable pour éliminer la colonie complète.",
  },
  {
    q: "Combien de temps après le traitement puis-je dormir dans ma chambre ?",
    a: "Pour le traitement thermique : le soir même. Pour le traitement chimique : 4 à 6 heures après la fin de l'intervention. Le technicien vous communique les consignes exactes lors du diagnostic.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Grâce-Hollogne",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Grâce-Hollogne",
  description: "Traitement professionnel punaises de lit à Grâce-Hollogne. Méthode thermique ou chimique, résultat garanti.",
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

export default function PunaisesGraceHolognePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/punaises-de-lit-liege" className="hover:text-white">Punaises de lit Liège</Link> › Grâce-Hollogne
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Grâce-Hollogne — Traitement garanti | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Grâce-Hollogne ? Traitement thermique ou chimique,
            résultat garanti dès la première intervention. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Devis gratuit sous 24h →
            </Link>
            <a href="tel:+32466442454" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image src="/chambre-punaises.jpg" alt="Chambre traitée punaises de lit Grâce-Hollogne" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Chambre saine après traitement — Grâce-Hollogne</p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl mb-8">
          <p className="font-semibold text-gray-800">✈️ Grâce-Hollogne et les punaises de lit</p>
          <p className="text-sm text-gray-700 mt-1">
            La proximité de l&apos;aéroport de Liège fait de Grâce-Hollogne une commune
            à risque particulier. Les voyageurs fréquents ramènent involontairement
            des punaises dans leurs bagages. Un seul déplacement dans un hôtel
            infesté peut suffire à contaminer votre domicile.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>Deux méthodes de traitement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C+ pendant 6 à 8h. Tue punaises et œufs en une seule session, sans produit chimique.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat immédiat · Dès le soir même</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticide rémanent professionnel sur toutes les zones de ponte et de transit.</p>
            <div className="text-sm font-medium text-green-700">✅ Moins coûteux · Adapté infestations débutantes</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
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

      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Traitement punaises dans les communes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Punaises de lit Liège", href: "/punaises-de-lit-liege" },
            { label: "Punaises de lit Ans", href: "/punaises-de-lit-ans" },
            { label: "Punaises de lit Seraing", href: "/punaises-de-lit-seraing" },
            { label: "Punaises de lit Herstal", href: "/punaises-de-lit-herstal" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Punaises de lit à Grâce-Hollogne ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Chaque nuit compte. Contactez-nous pour un devis gratuit et une intervention rapide.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
