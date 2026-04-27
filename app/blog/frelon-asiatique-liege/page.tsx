import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Frelon asiatique à Liège : comment le reconnaître et que faire ?",
  description:
    "Le frelon asiatique est présent dans toute la province de Liège. Comment le distinguer du frelon commun, où il niche, et pourquoi son nid est une urgence. Guide complet.",
};

const faqs = [
  {
    q: "Comment distinguer le frelon asiatique du frelon commun à Liège ?",
    a: "Le frelon asiatique (Vespa velutina) est plus petit (25-30 mm vs 35 mm pour le commun), presque entièrement noir avec une seule bande orange-jaune sur l'abdomen et les pattes jaunes à l'extrémité. Le frelon commun est brun-roux avec des rayures jaunes sur tout l'abdomen. En cas de doute, ne vous approchez pas — appelez un professionnel.",
  },
  {
    q: "Le frelon asiatique est-il plus dangereux que le frelon commun ?",
    a: "Pour l'humain : son venin n'est pas plus toxique. Mais il est plus agressif près du nid et attaque en masse. Pour les abeilles : oui, c'est une menace majeure — il chasse les butineuses à l'entrée des ruches. C'est une espèce invasive classée nuisible en Belgique.",
  },
  {
    q: "Où le frelon asiatique niche-t-il à Liège ?",
    a: "Principalement en hauteur : arbres (souvent entre 5 et 15 mètres), sous les avant-toits, et parfois dans des buissons denses. Contrairement au frelon commun qui niche souvent dans les combles, le frelon asiatique préfère les zones exposées en hauteur. Son nid est sphérique, gris-brun, avec l'entrée sur le côté.",
  },
  {
    q: "Que faire si je vois un frelon asiatique à Liège ?",
    a: "1) Ne pas l'approcher ni essayer de le capturer. 2) Observer où il vole pour repérer l'emplacement du nid. 3) Contacter Sayonarat ou la commune pour signalement. 4) Ne jamais tenter de détruire le nid soi-même — risque d'attaque massive.",
  },
  {
    q: "Le frelon asiatique est-il protégé en Belgique ?",
    a: "Non. Le frelon asiatique est une espèce exotique invasive non protégée. Sa destruction est autorisée et recommandée par les autorités belges, à condition d'être réalisée par un professionnel équipé. Le frelon commun, lui, bénéficie d'une protection partielle comme auxiliaire naturel.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Frelon asiatique à Liège : comment le reconnaître et que faire ?",
  description: "Guide complet sur le frelon asiatique à Liège : identification, différences avec le frelon commun, localisation des nids et procédure d'intervention.",
  author: { "@type": "Organization", name: "Sayonarat" },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/frelon-asiatique-liege" },
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

export default function FrelonAsiatiqueLiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Frelon asiatique Liège
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-amber-600">Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 6 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Frelon asiatique à Liège : comment le reconnaître et que faire ?
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Présent dans toute la province de Liège, le frelon asiatique est plus difficile
            à identifier — et plus dangereux à approcher — que le frelon commun.
            Voici tout ce qu&apos;il faut savoir.
          </p>
        </div>
      </section>

      <article className="py-14 px-4 max-w-3xl mx-auto">

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">⚠️ Urgence frelon asiatique</p>
          <p className="text-sm text-red-700">
            Si vous repérez un nid de frelon asiatique, n&apos;approchez pas. Appelez immédiatement
            le <a href="tel:+32466442454" className="font-bold underline">+32 466 44 24 54</a> —
            intervention prioritaire dans toute la région liégeoise.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Le frelon asiatique : une espèce invasive établie à Liège
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Arrivé en France en 2004 via un chargement de poteries en provenance de Chine,
          le frelon asiatique (<em>Vespa velutina nigrithorax</em>) a colonisé la Belgique
          à partir de 2011. En 2026, il est désormais présent dans toute la province de Liège,
          y compris dans les communes urbaines comme Seraing, Herstal et Ans.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Son expansion pose deux problèmes majeurs : une menace directe pour les personnes
          (attaque en masse si le nid est perturbé) et un impact écologique sévère sur les
          colonies d&apos;abeilles domestiques et sauvages, dont il décime les butineuses
          à l&apos;entrée des ruches.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Comment différencier le frelon asiatique du frelon commun ?
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ backgroundColor: "#1B4332", color: "white" }}>
                <th className="px-4 py-3 text-left">Critère</th>
                <th className="px-4 py-3 text-left">🐝 Frelon asiatique</th>
                <th className="px-4 py-3 text-left">🐝 Frelon commun</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Taille", "25–30 mm", "25–35 mm"],
                ["Couleur thorax", "Entièrement noir", "Brun-roux"],
                ["Abdomen", "Noir + 1 bande orange étroite", "Rayures jaunes larges"],
                ["Pattes", "Jaunes à l'extrémité", "Brun-roux"],
                ["Nid (emplacement)", "Hauteur, arbres (5–15 m)", "Combles, sous-sols"],
                ["Forme du nid", "Sphérique, entrée latérale", "Allongé, entrée basse"],
                ["Agressivité", "Très élevée près du nid", "Modérée"],
                ["Statut Belgique", "Espèce invasive nuisible", "Auxiliaire naturel"],
              ].map(([c, a, b], i) => (
                <tr key={c} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{c}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{a}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Où les nids de frelon asiatique sont-ils localisés à Liège ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Contrairement au frelon commun qui niche souvent dans les combles et greniers,
          le frelon asiatique préfère les emplacements en hauteur et à l&apos;extérieur.
          À Liège et dans les communes voisines, les nids sont principalement trouvés :
        </p>
        <ul className="space-y-2 mb-6 text-gray-700">
          {[
            "Dans les arbres (chênes, platanes, tilleuls) entre 5 et 15 mètres de hauteur",
            "Sous les avant-toits et débords de toiture",
            "Dans les haies denses (lierre, thuyas, lauriers)",
            "Sur les façades exposées au sud ou à l'est",
            "Parfois au sol, dans des buissons bas ou des pierres",
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">📍</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mb-8 leading-relaxed">
          La saison de nidification s&apos;étend d&apos;avril (fondation par la reine) à novembre
          (mort naturelle de la colonie par le gel). Un nid détecté en mai ou juin est
          encore petit (taille d&apos;un poing) et beaucoup plus simple à traiter qu&apos;un nid
          d&apos;août qui peut abriter jusqu&apos;à 6 000 individus.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Que faire si vous repérez un nid ?
        </h2>
        <div className="space-y-4 mb-8">
          {[
            { n: "1", t: "Ne pas approcher", d: "Maintenez au moins 5 mètres de distance. N'agitez pas les bras, ne frappez pas le nid — toute vibration déclenche une attaque." },
            { n: "2", t: "Ne pas traiter soi-même", d: "Les bombes insecticides du commerce sont inefficaces sur les nids en hauteur et peuvent provoquer une attaque massive. Sans combinaison intégrale, le risque est réel." },
            { n: "3", t: "Repérer l'emplacement", d: "Notez la position précise du nid (arbre, hauteur estimée, orientation). Ces informations aident le technicien à préparer son intervention." },
            { n: "4", t: "Appeler un professionnel", d: "Sayonarat intervient sous 48h dans toute la région liégeoise. Intervention nocturne, équipement intégral, garantie 30 jours." },
          ].map((e) => (
            <div key={e.n} className="flex gap-4 p-5 bg-green-50 rounded-xl border border-green-100">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0" style={{ backgroundColor: "#1B4332", color: "#FBBF24" }}>
                {e.n}
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: "#1B4332" }}>{e.t}</p>
                <p className="text-sm text-gray-600">{e.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Combien coûte la destruction d&apos;un nid de frelon asiatique à Liège ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Entre 120 € et 250 € selon la hauteur et l&apos;accessibilité du nid. Un nid en
          arbuste ou en haie basse est moins cher à traiter qu&apos;un nid à 10 mètres dans
          un arbre nécessitant une échelle ou une nacelle. Le devis est gratuit et établi
          sous 24h après description de la situation.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">💡 Conseil pratique</p>
          <p className="text-sm text-gray-700 mt-1">
            Certaines communes de la province de Liège participent aux frais de destruction
            des nids de frelon asiatique. Renseignez-vous auprès de votre administration
            communale avant l&apos;intervention — Sayonarat peut vous fournir un document
            justificatif après l&apos;intervention.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/guepes-frelons-liege"
            style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Voir notre service guêpes & frelons →
          </Link>
          <a
            href="tel:+32466442454"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            📞 Appeler maintenant
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          Questions fréquentes
        </h2>
        <div className="space-y-5 mb-12">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Liste des biocides autorisés en Belgique",
              href: "https://www.health.belgium.be/fr/liste-des-biocides-autorises-et-rapport-annuel",
            },
            {
              label: "Vespa-Watch — Surveillance du frelon asiatique en Belgique",
              href: "https://vespawatch.be/en/issue/",
            },
            {
              label: "Vespa-Watch — FAQ frelon asiatique",
              href: "https://vespawatch.be/en/faq/",
            },
          ]}
        />

        <div className="border-t border-gray-100 pt-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Articles liés</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/frelons-guepes-liege-que-faire" className="text-sm underline" style={{ color: "#1B4332" }}>Guêpes et frelons à Liège : que faire en cas de nid ?</Link>
            <Link href="/guepes-frelons-liege" className="text-sm underline" style={{ color: "#1B4332" }}>Service guêpes & frelons Liège</Link>
            <Link href="/guepes-frelons-seraing" className="text-sm underline" style={{ color: "#1B4332" }}>Guêpes Seraing</Link>
            <Link href="/guepes-frelons-herstal" className="text-sm underline" style={{ color: "#1B4332" }}>Guêpes Herstal</Link>
          </div>
        </div>
      </article>
    </>
  );
}
