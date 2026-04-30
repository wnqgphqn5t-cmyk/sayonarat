import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/guepes-frelons-seraing" },
  title: "Guêpes et frelons Seraing — Destruction nid rapide",
  description:
    "Nid de guêpes ou frelons à Seraing ? Destruction professionnelle sous 48h. Intervention nocturne sécurisée, garantie résultat. Devis gratuit.",
};

const faqs = [
  {
    q: "Combien coûte la destruction d'un nid de guêpes à Seraing ?",
    a: "Entre 90 € et 180 € pour un nid accessible (combles, arbuste, façade basse). Les nids en toiture ou en hauteur peuvent nécessiter un tarif majoré selon les conditions d'accès. Devis gratuit sous 24h.",
  },
  {
    q: "À Seraing, où trouve-t-on le plus souvent des nids de guêpes ?",
    a: "Dans les maisons ouvrières du Val Saint-Lambert et de Jemeppe, les guêpes s'installent souvent dans les combles non isolés et les chevrons anciens. Les zones proches de la Meuse attirent aussi les frelons. Toujours inspecter les avant-toits et les abris de jardin en été.",
  },
  {
    q: "Peut-on détruire un nid de guêpes soi-même à Seraing ?",
    a: "Fortement déconseillé. Une guêpe piquée libère des phéromones d'alarme qui déclenchent une attaque collective. Sans équipement de protection intégrale, le risque est réel. Pour les frelons asiatiques, l'intervention DIY est particulièrement dangereuse.",
  },
  {
    q: "Le frelon asiatique est-il présent à Seraing ?",
    a: "Oui. Le frelon asiatique (Vespa velutina) est désormais présent dans toute la province de Liège, y compris Seraing. Il est plus petit que le frelon commun mais très agressif près du nid. Sa destruction est prioritaire car il représente aussi une menace pour les abeilles locales.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Destruction nid guêpes et frelons à Seraing",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Seraing",
  description: "Service de destruction de nids de guêpes et frelons à Seraing. Intervention nocturne sécurisée, résultat garanti.",
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

export default function GuepesSeraingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/guepes-frelons-liege" className="hover:text-white">Guêpes & frelons Liège</Link> › Seraing
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guêpes et frelons à Seraing — Destruction nid | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Nid de guêpes ou frelon dans vos combles, jardin ou façade à Seraing ?
            Intervention nocturne sécurisée sous 48h. Techniciens équipés et certifiés.
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
          <Image src="/nid-guepes.jpg" alt="Nid de guêpes traité à Seraing" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention nocturne sur nid de guêpes — région de Seraing</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">⚠️ N&apos;approchez pas le nid</p>
          <p className="text-sm text-red-700">
            Toute agitation près d&apos;un nid actif peut provoquer une attaque en masse. Gardez vos enfants et animaux à distance, fermez les fenêtres proches, et appelez un professionnel.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Intervention à Seraing : comment ça se passe ?</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          À Seraing, les zones à risque sont les habitations anciennes de Jemeppe, Ougrée et du Val Saint-Lambert, où les combles non isolés offrent un refuge idéal aux guêpes germaniques. Les terrains proches de la Meuse et les jardins avec haies denses attirent également les frelons en été.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nos techniciens interviennent de nuit, lorsque les guêpes sont toutes rentrées au nid et moins actives. Le nid est traité avec un insecticide professionnel, puis neutralisé. La garantie couvre tout retour d&apos;activité dans les 30 jours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🌙", t: "Intervention nocturne", d: "Quand les guêpes sont au nid et moins agressives. Sécurité maximale." },
            { emoji: "🛡️", t: "Équipement intégral", d: "Combinaison, gants et masque professionnels. Aucun risque pour le technicien." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Si le nid reprend de l'activité, nous revenons sans frais supplémentaires." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Guêpes Seraing</h2>
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
            { label: "Guêpes et frelons Herstal", href: "/guepes-frelons-herstal" },
            { label: "Guêpes et frelons Ans", href: "/guepes-frelons-ans" },
            { label: "Guêpes et frelons Saint-Nicolas", href: "/guepes-frelons-saint-nicolas" },
            { label: "Guêpes et frelons Flémalle", href: "/guepes-frelons-flemalle" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Nid de guêpes à Seraing ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>N&apos;attendez pas — chaque jour, le nid grossit. Contactez-nous pour une intervention rapide.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Devis gratuit →
        </Link>
      </section>
    </>
  );
}
