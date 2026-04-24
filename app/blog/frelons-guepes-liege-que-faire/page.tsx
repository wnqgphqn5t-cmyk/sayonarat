import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frelons et guêpes à Liège : que faire en cas de nid ? — Sayonarat",
  description:
    "Vous avez un nid de frelons ou guêpes à Liège ? Voici quand agir, ce qu'il ne faut pas faire et comment un professionnel intervient en sécurité.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Frelons et guêpes à Liège : que faire en cas de nid ?",
  description: "Guide complet : identifier un nid de frelons ou guêpes, quand appeler un professionnel et comment se déroule l'intervention à Liège.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/frelons-guepes-liege-que-faire" },
};

const faq = [
  {
    q: "Comment distinguer un frelon d'une guêpe ?",
    a: "Le frelon commun (Vespa crabro) mesure 2,5 à 3,5 cm, avec une tête rousse et un abdomen jaune-brun. La guêpe germanique mesure 1,2 à 1,7 cm, avec des rayures jaune vif et noir. Le frelon asiatique (Vespa velutina) est entièrement brun-noir avec une bande orangée sur l'abdomen — c'est une espèce invasive à signaler à l'AFSCA.",
  },
  {
    q: "Un nid de guêpes est-il dangereux ?",
    a: "Un nid isolé et peu fréquenté peut être laissé en place jusqu'à la fin de la saison (les guêpes meurent au premier gel). Mais un nid en zone de passage, à proximité d'enfants, d'animaux ou de personnes allergiques est dangereux et doit être traité rapidement. Une guêpe peut piquer plusieurs fois.",
  },
  {
    q: "Peut-on détruire un nid de guêpes ou frelons soi-même ?",
    a: "Fortement déconseillé. Les frelons et guêpes peuvent attaquer en masse si le nid est menacé. Les produits du commerce nécessitent une application nocturne en combinaison de protection. Un nid en hauteur (gouttière, toit, arbre) rend l'intervention encore plus risquée. Pour les frelons asiatiques, l'intervention doit obligatoirement être faite par un professionnel.",
  },
  {
    q: "Combien coûte la destruction d'un nid de frelons à Liège ?",
    a: "Entre 90 € et 220 € selon la hauteur et l'accessibilité du nid. Un nid au sol ou en façade accessible est moins cher à traiter qu'un nid en toiture ou en hauteur nécessitant une nacelle. Devis gratuit chez Sayonarat.",
  },
  {
    q: "Le frelon asiatique est-il présent à Liège ?",
    a: "Oui. Le frelon asiatique (Vespa velutina) est présent en Belgique depuis 2016 et progresse chaque année vers le nord. Il représente un danger pour les abeilles domestiques et peut attaquer les humains si le nid est dérangé. Tout nid suspect de frelon asiatique doit être signalé à l'AFSCA belge.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ArticleFrelonsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Frelons & guêpes Liège
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Frelons et guêpes à Liège :<br />que faire en cas de nid ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Si vous découvrez un nid de frelons ou guêpes : <strong>ne l&apos;approchez pas</strong>,
            <strong> n&apos;utilisez pas d&apos;eau</strong> ni de spray aérosol — cela provoque une attaque massive.
            Appelez un professionnel. Un nid de frelons asiatiques doit être signalé à l&apos;AFSCA
            et traité obligatoirement par un expert certifié.
          </p>
        </div>

        <p>
          Chaque été, les appels pour nids de guêpes et frelons explosent en région liégeoise —
          juillet et août sont les mois de pic. Les nids atteignent leur taille maximale en fin d&apos;été
          (jusqu&apos;à 10 000 individus pour les guêpes germaniques) et les colonies deviennent plus
          agressives à mesure que la saison avance.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Guêpes, frelons, frelon asiatique : comment les distinguer ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Espèce</th>
                  <th className="px-4 py-2 text-left">Taille</th>
                  <th className="px-4 py-2 text-left">Couleur</th>
                  <th className="px-4 py-2 text-left">Danger</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Guêpe germanique", "1,2–1,7 cm", "Jaune vif + noir", "Modéré"],
                  ["Frelon commun", "2,5–3,5 cm", "Roux + jaune-brun", "Élevé"],
                  ["Frelon asiatique", "2–3 cm", "Brun-noir + bande orange", "Très élevé ⚠️"],
                ].map(([esp, taille, couleur, danger], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 font-medium">{esp}</td>
                    <td className="px-4 py-2">{taille}</td>
                    <td className="px-4 py-2">{couleur}</td>
                    <td className="px-4 py-2">{danger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Où se cachent les nids à Liège ?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { lieu: "Combles et greniers", icone: "🏠" },
              { lieu: "Gouttières et avant-toits", icone: "🏗️" },
              { lieu: "Abris de jardin et remises", icone: "🪵" },
              { lieu: "Arbres et haies denses", icone: "🌳" },
              { lieu: "Sous les terrasses en bois", icone: "🪑" },
              { lieu: "Trous dans les murs ou le sol", icone: "🕳️" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <span className="text-xl">{item.icone}</span>
                <span className="text-sm font-medium" style={{ color: "#1B4332" }}>{item.lieu}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Ce qu&apos;il ne faut SURTOUT pas faire
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-3">
            {[
              { titre: "Ne pas boucher l'entrée du nid", texte: "Les guêpes creusent une autre sortie — souvent à l'intérieur du logement." },
              { titre: "Ne pas arroser le nid", texte: "L'eau déclenche une attaque immédiate. Les guêpes interprètent cela comme une agression directe." },
              { titre: "Ne pas utiliser de spray aérosol à distance", texte: "L'odeur des insecticides standard alarme la colonie sans l'éliminer. Résultat : essaim agressif." },
              { titre: "Ne pas intervenir en plein jour", texte: "La colonie est au complet. Une intervention professionnelle se fait de nuit ou à l'aube quand les individus sont dans le nid." },
              { titre: "Ne pas laisser traîner sans agir près d'enfants ou d'allergiques", texte: "Une piqûre de frelon peut provoquer un choc anaphylactique chez les personnes sensibilisées." },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-red-800 text-sm">✗ {item.titre}</p>
                <p className="text-sm text-gray-700">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Comment se déroule une intervention professionnelle ?
          </h2>
          <div className="space-y-4">
            {[
              { num: "1", titre: "Identification de l'espèce et du nid", texte: "Le technicien inspecte le nid, identifie l'espèce et évalue l'accessibilité. Pour les frelons asiatiques, il complète la déclaration obligatoire à l'AFSCA." },
              { num: "2", titre: "Intervention nocturne sécurisée", texte: "En combinaison de protection intégrale, le technicien traite le nid à la tombée de la nuit avec un insecticide professionnel à contact. Toute la colonie est éliminée en une intervention." },
              { num: "3", titre: "Retrait du nid (si accessible)", texte: "Une fois la colonie morte, le nid est retiré et éliminé. Le retrait prévient les nouvelles reines de réutiliser l'emplacement l'année suivante." },
              { num: "4", titre: "Conseils de prévention", texte: "Colmatage des points d'entrée en combles, conseils pour éviter une réinstallation la saison suivante." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: "#1B4332" }}>
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.titre}</h3>
                  <p className="text-sm">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Le frelon asiatique à Liège : une menace croissante
          </h2>
          <p className="mb-3">
            Le frelon asiatique (<em>Vespa velutina nigrithorax</em>) est présent en Belgique depuis 2016.
            Il est facilement reconnaissable : corps entièrement brun-noir, bande orangée sur l&apos;abdomen,
            pattes jaunes à l&apos;extrémité. Contrairement au frelon commun, il construit des nids en hauteur
            dans les arbres — souvent difficiles à repérer avant la fin de l&apos;été.
          </p>
          <p>
            Il représente une menace sérieuse pour les ruchers liégeois (il chasse les abeilles devant
            les ruches). En Wallonie, tout signalement est à faire via le portail{" "}
            <strong>vespawatch.be</strong>. L&apos;intervention est obligatoirement professionnelle.
          </p>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Nid de frelons ou guêpes à Liège ?</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat intervient pour la destruction de nids de guêpes et frelons dans toute la région
            liégeoise. Intervention nocturne sécurisée, devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/contact" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Devis gratuit en ligne
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
          <div className="space-y-5">
            {faq.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Articles liés</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog/cafards-cuisine-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Cafards dans la cuisine : que faire ?</Link></li>
            <li><Link href="/blog/punaises-de-lit-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Punaises de lit : que faire en cas d&apos;infestation ?</Link></li>
            <li><Link href="/guepes-frelons-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Destruction nids guêpes & frelons Liège — service professionnel</Link></li>
          </ul>
        </section>

        <div className="border-t pt-6 text-sm text-gray-500 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>V</div>
          <div>
            <p className="font-semibold text-gray-800">Victor F.</p>
            <p>Fondateur de Sayonarat</p>
          </div>
        </div>

      </article>
    </>
  );
}
