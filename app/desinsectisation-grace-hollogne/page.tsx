import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { AntIcon, CockroachIcon, MothIcon, WaspIcon } from "@/components/Icons";
export const metadata: Metadata = {
  alternates: { canonical: "/desinsectisation-grace-hollogne" },
  title: "Désinsectisation Grâce-Hollogne — Cafards, fourmis, guêpes",
  description:
    "Désinsectisation professionnelle à Grâce-Hollogne. Cafards, fourmis, guêpes, mites. Intervention rapide, produits homologués, garantie 30 jours.",
};

const faqs = [
  {
    q: "Quels insectes traitez-vous à Grâce-Hollogne ?",
    a: "Cafards (blattes), fourmis dont fourmis pharaon, guêpes et frelons, mites alimentaires, moustiques, puces. Pour les nids de guêpes, intervention nocturne. Devis gratuit selon le type de nuisible.",
  },
  {
    q: "Combien coûte une désinsectisation à Grâce-Hollogne ?",
    a: "Entre 120 € et 350 € selon le type d'insecte et la superficie. Les nids de guêpes accessibles sont traités à partir de 90 €. Devis gratuit sous 24h.",
  },
  {
    q: "Les traitements sont-ils sans danger dans une zone d'activité ?",
    a: "Oui. Nous utilisons exclusivement des produits homologués en Belgique, conformes aux normes professionnelles et aux exigences AFSCA pour les locaux en contact avec des denrées alimentaires. Un rapport d'intervention est fourni sur demande.",
  },
  {
    q: "Faut-il fermer l'établissement pendant le traitement ?",
    a: "Cela dépend du type de traitement et du produit utilisé. Pour le gel insecticide cafards : non, aucune fermeture requise. Pour la pulvérisation : une absence de 2 à 4h est nécessaire. Le technicien adapte l'intervention à vos contraintes d'exploitation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Grâce-Hollogne",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Grâce-Hollogne",
  description: "Désinsectisation professionnelle à Grâce-Hollogne. Cafards, fourmis, guêpes. Produits homologués, garantie 30 jours.",
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

export default function DesinsectisationGraceHolognePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Grâce-Hollogne
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Grâce-Hollogne — Cafards, fourmis, guêpes | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Infestation d&apos;insectes à Grâce-Hollogne ? Intervention rapide chez les particuliers
            et professionnels. Produits homologués, garantie 30 jours.
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
          <Image src="/cuisine-desinsectisation.jpg" alt="Désinsectisation à Grâce-Hollogne" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement professionnel désinsectisation — Grâce-Hollogne</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Nos services à Grâce-Hollogne</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { emoji: "🪳", t: "Cafards et blattes", d: "Traitement par gel insecticide professionnel. Sans évacuation, sans odeur. Résultat en 3 à 7 jours." },
            { emoji: "🐜", t: "Fourmis et fourmis pharaon", d: "Appâts gel transmissibles à toute la colonie, y compris les reines. Seule méthode efficace sur fourmis pharaon." },
            { emoji: "🐝", t: "Guêpes et frelons", d: "Destruction de nid nocturne. Frelon asiatique traité en priorité. Garantie 30 jours." },
            { emoji: "🦋", t: "Mites alimentaires", d: "Traitement des placards et réserves. Élimination des larves et œufs. Conseils de prévention inclus." },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="mb-3">{c.emoji === "🪳" ? <CockroachIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🐜" ? <AntIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : c.emoji === "🐝" ? <WaspIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <MothIcon className="w-8 h-8" style={{ color: "#1B4332" }} />}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{c.t}</h3>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
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


      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Traitements spécialisés à Grâce-Hollogne
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link href="/cafards-grace-hollogne" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Cafards à Grâce-Hollogne →</h3>
            <p className="text-sm text-gray-600">Gel insecticide professionnel sans évacuation. Colonie éliminée à la source, résultat en 72h.</p>
          </Link>
          <Link href="/fourmis-grace-hollogne" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Fourmis à Grâce-Hollogne →</h3>
            <p className="text-sm text-gray-600">Traitement adapté à l&apos;espèce : fourmis noires, pharaons, charpentières.</p>
          </Link>
          <Link href="/guepes-frelons-grace-hollogne" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Guêpes &amp; frelons à Grâce-Hollogne →</h3>
            <p className="text-sm text-gray-600">Destruction de nid garantie sous 24h. Intervention sécurisée.</p>
          </Link>
          <Link href="/mites-alimentaires-grace-hollogne" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Mites alimentaires à Grâce-Hollogne →</h3>
            <p className="text-sm text-gray-600">Traitement des placards et denrées contaminées. Garantie 30 jours incluse.</p>
          </Link>
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Désinsectisation dans les communes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Désinsectisation Liège", href: "/desinsectisation-liege" },
            { label: "Désinsectisation Ans", href: "/desinsectisation-ans" },
            { label: "Désinsectisation Seraing", href: "/desinsectisation-seraing" },
            { label: "Désinsectisation Herstal", href: "/desinsectisation-herstal" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Insectes à Grâce-Hollogne ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Devis gratuit sous 24h, intervention rapide, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
