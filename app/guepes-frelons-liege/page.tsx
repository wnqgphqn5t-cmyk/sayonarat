import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destruction nid guêpes et frelons Liège — Intervention rapide | Sayonarat",
  description:
    "Nid de guêpes ou frelons à Liège ? Destruction sécurisée par technicien certifié. Intervention nocturne sous 48h, devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Destruction nid guêpes et frelons à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Liège",
  description: "Service de destruction de nids de guêpes et frelons à Liège. Intervention nocturne sécurisée, produits homologués.",
  serviceType: "PestControl",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quand faut-il appeler un professionnel pour un nid de guêpes ?",
      acceptedAnswer: { "@type": "Answer", text: "Dès que le nid est en zone de passage (entrée, terrasse, jardin fréquenté) ou à proximité d'enfants, d'animaux ou de personnes allergiques. Ne jamais tenter de détruire un nid soi-même de jour — les guêpes attaquent en masse." },
    },
    {
      "@type": "Question",
      name: "Quel est le prix de la destruction d'un nid de guêpes à Liège ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 90 € et 180 € pour un nid accessible (combles, sous-toit, arbuste). Les nids en hauteur ou difficiles d'accès (toiture, façade haute) peuvent nécessiter un tarif majoré. Devis gratuit sous 24h." },
    },
    {
      "@type": "Question",
      name: "Comment se déroule l'intervention pour un nid de frelons ?",
      acceptedAnswer: { "@type": "Answer", text: "L'intervention se fait de nuit, quand toutes les guêpes sont dans le nid. Le technicien injecte un insecticide professionnel dans le nid puis le retire si accessible. Le port d'une combinaison de protection est obligatoire pour les frelons." },
    },
    {
      "@type": "Question",
      name: "Le frelon asiatique est-il présent à Liège ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Le frelon asiatique (Vespa velutina) est signalé en progression en Wallonie depuis 2019. Il est reconnaissable à sa couleur brun-noir avec une bande orangée. C'est une espèce invasive protocolée par l'AFSCA — son nid doit être signalé et traité par un professionnel." },
    },
    {
      "@type": "Question",
      name: "Doit-on obligatoirement détruire un nid de guêpes ?",
      acceptedAnswer: { "@type": "Answer", text: "Pas systématiquement. Un nid éloigné de toute zone de passage peut être laissé en place — les guêpes meurent naturellement au premier gel. Mais un nid actif en zone habitée, en intérieur ou à proximité d'allergiques doit être traité." },
    },
  ],
};

const faqs = [
  {
    q: "Quand faut-il appeler un professionnel pour un nid de guêpes ?",
    a: "Dès que le nid est en zone de passage (entrée, terrasse, jardin fréquenté) ou à proximité d'enfants, d'animaux ou de personnes allergiques. Ne jamais tenter de détruire un nid soi-même de jour — les guêpes attaquent en masse.",
  },
  {
    q: "Quel est le prix de la destruction d'un nid de guêpes à Liège ?",
    a: "Entre 90 € et 180 € pour un nid accessible (combles, sous-toit, arbuste). Les nids en hauteur ou difficiles d'accès (toiture, façade haute) peuvent nécessiter un tarif majoré. Devis gratuit sous 24h.",
  },
  {
    q: "Comment se déroule l'intervention pour un nid de frelons ?",
    a: "L'intervention se fait de nuit, quand toutes les guêpes sont dans le nid. Le technicien injecte un insecticide professionnel dans le nid puis le retire si accessible. Le port d'une combinaison de protection est obligatoire pour les frelons.",
  },
  {
    q: "Le frelon asiatique est-il présent à Liège ?",
    a: "Oui. Le frelon asiatique (Vespa velutina) est signalé en progression en Wallonie depuis 2019. Il est reconnaissable à sa couleur brun-noir avec une bande orangée. C'est une espèce invasive protocolée par l'AFSCA — son nid doit être signalé et traité par un professionnel.",
  },
  {
    q: "Doit-on obligatoirement détruire un nid de guêpes ?",
    a: "Pas systématiquement. Un nid éloigné de toute zone de passage peut être laissé en place — les guêpes meurent naturellement au premier gel. Mais un nid actif en zone habitée, en intérieur ou à proximité d'allergiques doit être traité.",
  },
];

export default function GuepesFrellonsLiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Guêpes et frelons
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Destruction nid guêpes et frelons à Liège
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-4">
            Nid de guêpes ou frelons à Liège ? <strong>Intervention nocturne sécurisée sous 48h</strong>, dès 90€.
            Frelon asiatique traité en priorité. Technicien équipé, garantie 30 jours.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {[
              { val: "< 48h", label: "Intervention" },
              { val: "dès 90€", label: "Tarif" },
              { val: "30j", label: "Garantie" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-center">
                <div className="font-bold text-yellow-300">{s.val}</div>
                <div className="text-green-200 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center">
              📞 +32 466 44 24 54
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">

        <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-red-800">⚠️ Ne jamais traiter un nid soi-même de jour</p>
          <p className="text-sm text-gray-700 mt-1">
            Une guêpe peut piquer plusieurs fois. Un nid actif contient entre 3 000 et 15 000 individus
            (frelons : jusqu&apos;à 700). Une attaque de masse peut être mortelle pour une personne allergique.
            L&apos;intervention doit se faire de nuit avec équipement de protection.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          Guêpes ou frelons : quelle différence ?
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                <th className="px-4 py-2 text-left">Critère</th>
                <th className="px-4 py-2 text-left">Guêpe germanique</th>
                <th className="px-4 py-2 text-left">Frelon commun</th>
                <th className="px-4 py-2 text-left">Frelon asiatique ⚠️</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Taille", "1,2–1,7 cm", "2,5–3,5 cm", "2–3 cm"],
                ["Couleur", "Jaune et noir vif", "Brun-roux et jaune", "Brun-noir, bande orange"],
                ["Nid", "Papier gris, sol ou combles", "Papier brun, arbres ou combles", "Sphérique, haut perché"],
                ["Dangerosité", "Modérée", "Élevée", "Très élevée, espèce invasive"],
                ["Signalement", "Non obligatoire", "Non obligatoire", "Obligatoire (AFSCA)"],
              ].map(([crit, guepe, frelon, asiatique], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-2 font-medium">{crit}</td>
                  <td className="px-4 py-2">{guepe}</td>
                  <td className="px-4 py-2">{frelon}</td>
                  <td className="px-4 py-2 text-orange-700 font-medium">{asiatique}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Comment se déroule l&apos;intervention ?
        </h2>
        <div className="space-y-4 mb-10">
          {[
            { num: "1", titre: "Prise de rendez-vous", texte: "Décrivez l'emplacement et la taille du nid par téléphone ou formulaire. Le technicien évalue le niveau de risque et planifie l'intervention nocturne." },
            { num: "2", titre: "Intervention nocturne", texte: "Le technicien intervient de nuit, équipé d'une combinaison de protection. Il injecte un insecticide professionnel homologué dans le nid — toutes les guêpes sont présentes et l'agressivité est minimale." },
            { num: "3", titre: "Retrait du nid (si accessible)", texte: "Le nid est retiré si son emplacement le permet. Pour les nids encastrés (dans un mur, sous une toiture), le retrait physique n'est pas toujours possible mais le traitement suffit à éliminer la colonie." },
            { num: "4", titre: "Conseils de prévention", texte: "Le technicien identifie les points d'entrée potentiels et vous conseille sur les mesures à prendre pour éviter la reformation d'un nid la saison suivante." },
          ].map((item) => (
            <div key={item.num} className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: "#1B4332" }}>
                {item.num}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.titre}</h3>
                <p className="text-sm text-gray-600">{item.texte}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: "🌙", titre: "Intervention nocturne", desc: "Le traitement se fait de nuit pour maximiser l'efficacité et minimiser le risque d'attaque." },
            { icon: "🎯", titre: "Produits homologués", desc: "Insecticides professionnels à action rapide, autorisés en Belgique pour le traitement des hyménoptères." },
            { icon: "✅", titre: "Résultat garanti", desc: "La colonie est éliminée en une seule intervention dans la grande majorité des cas." },
          ].map((s) => (
            <div key={s.titre} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{s.titre}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl mb-12">
          <p className="font-semibold text-gray-900 mb-2">Nid de guêpes ou frelons à Liège ?</p>
          <p className="text-sm text-gray-600 mb-4">
            Devis gratuit sous 24h. Intervention nocturne sous 48h dans toute la région liégeoise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/contact" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Devis en ligne gratuit
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Autres services :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/desinsectisation-liege" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Liège</Link>
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
            <Link href="/blog/frelons-guepes-liege-que-faire" className="underline" style={{ color: "#1B4332" }}>Guide : frelons et guêpes à Liège</Link>
          </div>
        </div>
      </section>
    </>
  );
}
