import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Guêpes et frelons Saint-Nicolas — Destruction nid | Sayonarat",
  description:
    "Nid de guêpes ou frelons à Saint-Nicolas ? Destruction professionnelle sous 48h. Intervention nocturne sécurisée, garantie résultat. Devis gratuit.",
};

const faqs = [
  {
    q: "Combien coûte la destruction d'un nid de guêpes à Saint-Nicolas ?",
    a: "Entre 90 € et 180 € pour un nid accessible. Nids en toiture ou en espace difficile d'accès : tarif adapté selon les conditions. Devis gratuit sous 24h.",
  },
  {
    q: "À Saint-Nicolas, où les guêpes s'installent-elles le plus souvent ?",
    a: "À Tilleur et Montegnée, les maisons mitoyennes avec combles anciens sont les sites d'installation les plus courants. Les jardins avec haies naturelles et les abris de jardin sont aussi des zones à risque entre mai et septembre.",
  },
  {
    q: "Est-il dangereux d'avoir un nid de guêpes dans les combles ?",
    a: "Oui, pour plusieurs raisons : les guêpes peuvent trouver un passage vers l'intérieur de la maison à travers les plafonds et encadrements. Un nid de grande taille peut aussi endommager les matériaux d'isolation. Une intervention rapide évite ces complications.",
  },
  {
    q: "Que faire si je trouve un nid de frelons asiatiques à Saint-Nicolas ?",
    a: "N'intervenez pas seul. Le frelon asiatique est une espèce invasive protégée contre la chasse incontrôlée, mais dont la destruction est autorisée si elle menace la sécurité. Appelez Sayonarat : nos techniciens interviennent avec le matériel adapté pour neutraliser le nid en toute sécurité.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Destruction nid guêpes et frelons à Saint-Nicolas",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Saint-Nicolas", postalCode: "4420", addressCountry: "BE" },
  },
  areaServed: "Saint-Nicolas",
  description: "Service de destruction de nids de guêpes et frelons à Saint-Nicolas. Intervention nocturne sécurisée, résultat garanti.",
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

export default function GuepesSaintNicolasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/guepes-frelons-liege" className="hover:text-white">Guêpes & frelons Liège</Link> › Saint-Nicolas
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guêpes et frelons à Saint-Nicolas — Destruction nid | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Nid de guêpes ou frelon détecté à Saint-Nicolas ? Intervention nocturne
            sous 48h, équipement certifié, garantie 30 jours.
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
          <Image src="/nid-guepes.jpg" alt="Nid de guêpes traité à Saint-Nicolas" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Destruction professionnelle de nid — Saint-Nicolas, région liégeoise</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">⚠️ N&apos;approchez pas le nid</p>
          <p className="text-sm text-red-700">Une guêpe piquée émet des phéromones d&apos;alarme qui déclenchent l&apos;attaque collective de toute la colonie. Maintenez au minimum 5 mètres de distance.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Saint-Nicolas : zones à risque en été</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Saint-Nicolas, avec ses quartiers de Tilleur et Montegnée, présente un tissu urbain dense de maisons mitoyennes et de jardins. Cette configuration favorise l&apos;installation de nids de guêpes dans les combles, les espaces entre tuiles et les murs creux. La saison active s&apos;étend de mai à octobre.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Les frelons asiatiques sont également présents dans la commune. Leur nid est caractéristique : sphérique, gris papier, souvent en hauteur dans les arbres ou sous les avant-toits. Sa destruction nécessite un équipement spécialisé et une intervention en début de nuit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🌙", t: "Intervention nocturne", d: "Guêpes regroupées et moins agressives. Sécurité optimale." },
            { emoji: "🛡️", t: "Équipement intégral", d: "Combinaison et masque professionnels. Produits homologués." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour offert sans frais si reprise d'activité." },
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
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Guêpes Saint-Nicolas</h2>
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
            { label: "Guêpes et frelons Ans", href: "/guepes-frelons-ans" },
            { label: "Guêpes et frelons Flémalle", href: "/guepes-frelons-flemalle" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Nid de guêpes à Saint-Nicolas ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Chaque semaine compte. Contactez-nous pour un devis gratuit et une intervention rapide.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Devis gratuit →
        </Link>
      </section>
    </>
  );
}
