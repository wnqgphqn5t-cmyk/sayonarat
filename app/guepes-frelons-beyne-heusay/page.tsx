import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { CheckCircleIcon, MoonIcon, ShieldCheckIcon } from "@/components/Icons";;
export const metadata: Metadata = {
  alternates: { canonical: "/guepes-frelons-beyne-heusay" },
  title: "Guêpes et frelons Beyne-Heusay — Destruction nid rapide",
  description:
    "Nid de guêpes ou frelons à Beyne-Heusay ? Destruction professionnelle sous 48h. Intervention nocturne sécurisée, garantie résultat. Devis gratuit.",
};

const faqs = [
  {
    q: "Combien coûte la destruction d'un nid de guêpes à Beyne-Heusay ?",
    a: "Entre 90 € et 180 € pour un nid accessible (combles, haie, façade). Les nids en toiture haute peuvent nécessiter un accès par nacelle ou échelle spécialisée. Devis gratuit sous 24h.",
  },
  {
    q: "Les guêpes à Beyne-Heusay : quelles zones sont les plus touchées ?",
    a: "Les maisons de caractère de Beyne et Heusay sont très touchées dans les combles. Queue-du-Bois, avec ses jardins arborés, est propice aux nids dans les arbres creux et les remises. La période critique est juillet–septembre.",
  },
  {
    q: "Mon voisin a un nid de guêpes à Beyne-Heusay, que faire ?",
    a: "Si le nid est sur la propriété voisine mais représente un danger pour vous (proximité d'une entrée, d'un terrain de jeux), signalez-le à votre voisin en priorité. S'il n'agit pas, la commune peut intervenir dans certains cas. Sayonarat peut traiter les deux propriétés en une seule intervention.",
  },
  {
    q: "Le frelon asiatique est-il présent à Beyne-Heusay ?",
    a: "Oui. Le frelon asiatique est désormais établi dans toute la Belgique, y compris à Beyne-Heusay. Son nid, souvent perché à plus de 5 mètres de hauteur dans les arbres, est plus difficile à traiter qu'un nid de guêpes classique. Une intervention professionnelle avec équipement adapté est indispensable.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Destruction nid guêpes et frelons à Beyne-Heusay",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Beyne-Heusay", postalCode: "4610", addressCountry: "BE" },
  },
  areaServed: "Beyne-Heusay",
  description: "Service de destruction de nids de guêpes et frelons à Beyne-Heusay. Intervention nocturne sécurisée, résultat garanti.",
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

export default function GuepesFretonsBeyneHeusayPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-beyne-heusay" className="hover:text-white">Désinsectisation Beyne-Heusay</Link> ›{" "}
            Beyne-Heusay
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guêpes et frelons à Beyne-Heusay — Destruction nid | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Nid de guêpes dans vos combles ou jardin à Beyne-Heusay ? Intervention nocturne
            professionnelle sous 48h. Techniciens certifiés, garantie 30 jours.
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
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-72 mb-10">
          <Image src="/nid-guepes.jpg" alt={"Nid de guêpes traité à Beyne-Heusay"} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Destruction de nid de guêpes — Beyne-Heusay</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">N'approchez pas le nid</p>
          <p className="text-sm text-red-700">Gardez vos enfants et animaux éloignés. Ne tentez pas de boucher l'entrée du nid — cela provoque une attaque immédiate.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Nids de guêpes à Beyne-Heusay : une commune résidentielle à l'est de Liège avec ses maisons de caractère et ses cités résidentielles sur les hauteurs. Les combles des maisons de Beyne et Heusay, ainsi que les jardins arborés de Queue-du-Bois, sont les zones les plus touchées.</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Un nid non traité en été peut abriter jusqu'à 15 000 guêpes. En automne, le nid meurt mais les reines survivantes
          cherchent un abri dans votre habitation pour hiverner et fonder de nouveaux nids au printemps suivant.
          Beyne et Heusay concentrent la plupart des signalements de nids dans les combles des maisons de caractère. Queue-du-Bois est également concerné par les nids dans les jardins arborés.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🌙", t: "Intervention nocturne", d: "Sécurité maximale — guêpes au repos, colonie regroupée au nid." },
            { emoji: "🛡️", t: "Équipement certifié", d: "Protection intégrale. Produits professionnels homologués CE." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour sans frais si reprise d'activité constatée." },
          ].map((card) => (
            <div key={card.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="mb-2">{card.emoji === "🌙" ? <MoonIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : card.emoji === "🛡️" ? <ShieldCheckIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{card.t}</h3>
              <p className="text-sm text-gray-600">{card.d}</p>
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

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Guêpes Beyne-Heusay</h2>
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Destruction nid guêpes dans les villes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Guêpes et frelons Liège", href: "/guepes-frelons-liege" },
            { label: "Guêpes et frelons Seraing", href: "/guepes-frelons-seraing" },
            { label: "Guêpes et frelons Verviers", href: "/guepes-frelons-verviers" },
            { label: "Guêpes et frelons Ans", href: "/guepes-frelons-ans" }
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Nid de guêpes à Beyne-Heusay ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervenez avant que le nid ne grossisse davantage. Devis gratuit, réponse sous 24h.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Devis gratuit →
        </Link>
      </section>
    </>
  );
}
