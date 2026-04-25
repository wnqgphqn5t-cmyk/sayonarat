import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Guêpes et frelons Ans — Destruction nid rapide",
  description:
    "Nid de guêpes ou frelons à Ans ? Destruction professionnelle sous 48h. Intervention nocturne sécurisée, garantie résultat. Devis gratuit.",
};

const faqs = [
  {
    q: "Combien coûte la destruction d'un nid de guêpes à Ans ?",
    a: "Entre 90 € et 180 € pour un nid accessible (combles, haie, façade). Les nids en toiture haute peuvent nécessiter un accès par nacelle ou échelle spécialisée. Devis gratuit sous 24h.",
  },
  {
    q: "Les guêpes à Ans : quelles zones sont les plus touchées ?",
    a: "Les quartiers résidentiels avec jardins de Loncin, Montegnée et Alleur sont particulièrement exposés. Les haies vives, potagers et terrasses créent des zones d'activité idéales pour les guêpes germaniques entre juillet et septembre.",
  },
  {
    q: "Mon voisin a un nid de guêpes, que faire ?",
    a: "Si le nid est sur la propriété voisine mais représente un danger pour vous (proximité d'une entrée, d'un terrain de jeux), signalez-le à votre voisin en priorité. S'il n'agit pas, la commune peut intervenir dans certains cas. Sayonarat peut traiter les deux propriétés en une seule intervention.",
  },
  {
    q: "Le frelon asiatique est-il présent à Ans ?",
    a: "Oui. Le frelon asiatique est désormais établi dans toute la région liégeoise, y compris Ans. Son nid, souvent perché à plus de 5 mètres de hauteur dans les arbres, est plus difficile à traiter qu'un nid de guêpes classique. Une intervention professionnelle avec équipement adapté est indispensable.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Destruction nid guêpes et frelons à Ans",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Ans",
  description: "Service de destruction de nids de guêpes et frelons à Ans. Intervention nocturne sécurisée, résultat garanti.",
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

export default function GuepesAnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/guepes-frelons-liege" className="hover:text-white">Guêpes & frelons Liège</Link> › Ans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guêpes et frelons à Ans — Destruction nid | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Nid de guêpes dans vos combles ou jardin à Ans ? Intervention nocturne
            professionnelle sous 48h. Techniciens certifiés, garantie 30 jours.
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
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-72 mb-10">
          <Image src="/nid-guepes.jpg" alt="Nid de guêpes traité à Ans" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Destruction de nid de guêpes — commune d&apos;Ans</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">⚠️ N&apos;approchez pas le nid</p>
          <p className="text-sm text-red-700">Gardez vos enfants et animaux éloignés. Ne tentez pas de boucher l&apos;entrée du nid — cela provoque une attaque immédiate.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Ans et les nids de guêpes : un enjeu résidentiel</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Commune résidentielle à forte densité de maisons individuelles et jardins, Ans est particulièrement exposée aux nids de guêpes chaque été. Les quartiers de Loncin, Montegnée et Alleur concentrent la majorité des signalements entre juillet et septembre, période où les colonies atteignent leur taille maximale.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Un nid non traité en été peut abriter jusqu&apos;à 15 000 guêpes. En automne, le nid meurt mais les reines survivantes cherchent un abri dans votre habitation pour hiverner et fonder de nouveaux nids au printemps suivant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🌙", t: "Intervention nocturne", d: "Sécurité maximale — guêpes au repos, colonie regroupée." },
            { emoji: "🛡️", t: "Équipement certifié", d: "Protection intégrale. Produits professionnels homologués." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour sans frais si reprise d'activité constatée." },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-3xl mb-2">{c.emoji}</div>
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
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Guêpes Ans</h2>
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Destruction nid guêpes dans les communes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Guêpes et frelons Liège", href: "/guepes-frelons-liege" },
            { label: "Guêpes et frelons Seraing", href: "/guepes-frelons-seraing" },
            { label: "Guêpes et frelons Herstal", href: "/guepes-frelons-herstal" },
            { label: "Guêpes et frelons Saint-Nicolas", href: "/guepes-frelons-saint-nicolas" },
            { label: "Guêpes et frelons Flémalle", href: "/guepes-frelons-flemalle" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Nid de guêpes à Ans ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervenez avant que le nid ne grossisse davantage. Devis gratuit, réponse sous 24h.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Devis gratuit →
        </Link>
      </section>
    </>
  );
}
