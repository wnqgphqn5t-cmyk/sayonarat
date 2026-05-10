import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { FlameIcon, PillIcon } from "@/components/Icons";
export const metadata: Metadata = {
  alternates: { canonical: "/punaises-de-lit-oupeye" },
  title: "Punaises de lit Oupeye — Traitement garanti",
  description:
    "Traitement punaises de lit à Oupeye. Méthode thermique ou chimique. Résultat garanti dès la 1ère intervention. Devis gratuit sous 24h.",
};

const faqs = [
  {
    q: "Comment les punaises de lit arrivent-elles à Oupeye ?",
    a: "Principalement via les voyages (valises contaminées), les achats de meubles ou matelas d'occasion, et les déménagements depuis des logements infestés. Dans les immeubles collectifs, les punaises peuvent aussi circuler entre appartements via les fissures et gaines techniques.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Oupeye ?",
    a: "Entre 150 € et 450 € selon la superficie et la méthode choisie. Traitement thermique (chaleur 60°C) : efficace en une session, résultat le soir même. Traitement chimique : moins cher, adapté aux infestations débutantes. Devis gratuit sous 24h.",
  },
  {
    q: "Le traitement thermique est-il possible dans toutes les habitations ?",
    a: "Dans la grande majorité des cas, oui. Certains objets sensibles à la chaleur doivent être retirés avant l'intervention (plantes, médicaments, certains appareils électroniques). Le technicien vous communique une liste précise lors du diagnostic.",
  },
  {
    q: "Combien de temps dure le traitement à Oupeye ?",
    a: "Le traitement thermique dure 6 à 8h — vous pouvez dormir chez vous le soir même. Le traitement chimique dure 1 à 2h avec une absence de 4 à 6h recommandée. Garantie 30 jours incluse dans les deux cas.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Oupeye",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Oupeye",
  description: "Traitement professionnel punaises de lit à Oupeye. Méthode thermique ou chimique, résultat garanti.",
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

export default function PunaisesOupeyePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/punaises-de-lit-liege" className="hover:text-white">Punaises de lit Liège</Link> › Oupeye
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Oupeye — Traitement garanti | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Oupeye ? Traitement thermique ou chimique,
            résultat garanti dès la première intervention. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Devis gratuit sous 24h →
            </Link>
            <a href="tel:+32466442454" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image src="/chambre-punaises.jpg" alt="Chambre traitée punaises de lit Oupeye" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Chambre saine après traitement punaises — Oupeye</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>Deux méthodes de traitement à Oupeye</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="mb-3"><FlameIcon className="w-8 h-8" style={{ color: "#1B4332" }} /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C+ pendant 6 à 8h. Détruit punaises et œufs en une seule session, sans produit chimique résiduel.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat immédiat · Chambre accessible le soir même</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="mb-3"><PillIcon className="w-8 h-8" style={{ color: "#1B4332" }} /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticide rémanent professionnel appliqué sur toutes les zones de ponte et de transit. Efficace et moins coûteux.</p>
            <div className="text-sm font-medium text-green-700">✅ Moins coûteux · Adapté aux infestations débutantes</div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📋 Garantie 30 jours incluse</p>
          <p className="text-sm text-gray-700 mt-1">
            Toutes nos interventions à Oupeye sont couvertes par une garantie 30 jours.
            Si des punaises de lit réapparaissent dans ce délai, nous revenons sans frais supplémentaires.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Punaises de lit Oupeye</h2>
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
            { label: "Punaises de lit Herstal", href: "/punaises-de-lit-herstal" },
            { label: "Punaises de lit Ans", href: "/punaises-de-lit-ans" },
            { label: "Punaises de lit Beyne-Heusay", href: "/punaises-de-lit-beyne-heusay" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Punaises de lit à Oupeye ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Chaque nuit compte. Contactez-nous pour un devis gratuit et une intervention rapide.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
