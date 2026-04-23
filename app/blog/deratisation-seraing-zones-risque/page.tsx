import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Seraing : pourquoi cette commune est exposée — Sayonarat",
  description:
    "Seraing est l'une des communes de Liège les plus exposées aux rats. Friches ArcelorMittal, bords de Meuse, caves anciennes : voici pourquoi et comment se protéger.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dératisation Seraing : pourquoi cette commune est particulièrement exposée aux rats",
  description:
    "Analyse des facteurs de risque à Seraing (friches industrielles, Meuse, bâti ancien) et comment protéger son logement.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sayonarat.be/blog/deratisation-seraing-zones-risque",
  },
};

const faq = [
  {
    q: "Pourquoi y a-t-il autant de rats à Seraing ?",
    a: "Seraing cumule plusieurs facteurs de risque : la proximité de la Meuse (les rats bruns remontent par les berges et canalisations), les anciennes friches industrielles ArcelorMittal qui servent de réservoir de population, et le bâti ouvrier du 19e siècle avec caves et sous-sols souvent communicants entre maisons mitoyennes.",
  },
  {
    q: "Les rats de Seraing sont-ils différents de ceux de Liège ?",
    a: "Non, c'est la même espèce (Rattus norvegicus, le rat brun). Mais les populations autour des friches industrielles sont souvent plus importantes et plus méfiantes, car elles évoluent dans des environnements perturbés où les ressources alimentaires sont abondantes (déchets, végétation, eau).",
  },
  {
    q: "Combien coûte une dératisation à Seraing ?",
    a: "Les tarifs sont identiques à Liège : entre 150 € et 350 € pour une maison unifamiliale, selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Le traitement dératisation fonctionne-t-il si les rats viennent du dehors ?",
    a: "Oui, à condition de colmater les points d'entrée en même temps que le traitement. Sans fermeture des accès (canalisations, fissures, vide sanitaire), de nouveaux rats recolonisent l'espace traité en quelques semaines.",
  },
];

export default function ArticleSeraingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Dératisation Seraing
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">
              Dératisation
            </span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Dératisation Seraing :<br />pourquoi cette commune est<br />particulièrement exposée
          </h1>
          <p className="text-green-100 text-lg">
            Par <strong>Victor F.</strong> — Expert en lutte antiparasitaire à Liège
          </p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">En résumé</p>
          <p>
            Seraing est l&apos;une des communes de la région liégeoise les plus touchées par les
            infestations de rats. Trois facteurs expliquent cela : la <strong>Meuse et ses berges</strong>,
            les <strong>friches industrielles</strong> (anciens sites ArcelorMittal) qui servent de
            réservoirs de population, et le <strong>bâti ouvrier dense</strong> avec caves communicantes.
            Un traitement professionnel avec colmatage est indispensable — sans fermer les accès,
            les rats reviennent en moins d&apos;un mois.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les 3 raisons qui font de Seraing une zone à haut risque
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>
                1. La Meuse et le réseau hydrographique
              </h3>
              <p>
                Le rat brun est un excellent nageur. Il colonise naturellement les berges des cours
                d&apos;eau et remonte les canalisations d&apos;égouts. La Meuse traverse Seraing sur
                plusieurs kilomètres, et les quartiers de <strong>Jemeppe</strong> et
                <strong> Ougrée</strong> — directement en bord de fleuve — sont les plus exposés.
                Chaque automne, quand les températures baissent, les rats des berges migrent
                vers les habitations à la recherche de chaleur et de nourriture.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>
                2. Les friches industrielles ArcelorMittal
              </h3>
              <p>
                Les anciens sites sidérurgiques en cours de reconversion représentent des milliers
                de mètres carrés de friches, avec végétation dense, déchets et infrastructures
                abandonnées. Ces zones constituent des <strong>réservoirs de population</strong>
                considérables. Les rats s&apos;y reproduisent sans contrainte et colonisent les quartiers
                résidentiels voisins — notamment <strong>Seraing-centre, Boncelles</strong> et les
                rues longeant l&apos;ancienne zone industrielle.
              </p>
              <p className="mt-3">
                La reconversion progressive de ces sites (logements, commerces) perturbe les
                colonies établies et provoque des migrations vers les habitations voisines.
                Les chantiers de rénovation sont souvent déclencheurs d&apos;infestations dans
                les maisons adjacentes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>
                3. Le bâti ouvrier du 19e siècle
              </h3>
              <p>
                Seraing s&apos;est développée autour de l&apos;industrie sidérurgique dès les années 1820.
                Le parc immobilier est donc largement constitué de maisons ouvrières mitoyennes,
                avec des caves souvent communicantes entre maisons, des murs épais et des
                fondations en pierre qui offrent d&apos;innombrables voies de passage aux rongeurs.
              </p>
              <p className="mt-3">
                Dans ces logements, les rats transitent d&apos;une maison à l&apos;autre sans jamais
                passer par l&apos;extérieur. Un traitement efficace doit donc inclure l&apos;inspection
                et le colmatage des caves et passages entre mitoyens — pas seulement le logement
                directement infesté.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Les quartiers de Seraing les plus touchés
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { quartier: "Jemeppe-sur-Meuse", raison: "Bords de Meuse, égouts anciens" },
              { quartier: "Ougrée", raison: "Proximité friches industrielles" },
              { quartier: "Seraing-centre", raison: "Bâti dense, caves communicantes" },
              { quartier: "Boncelles", raison: "Zone de transition ville/campagne" },
              { quartier: "Rotheux-Rimière", raison: "Jardins, végétation dense" },
              { quartier: "Ramet", raison: "Bords de Meuse et zones humides" },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="font-bold text-sm" style={{ color: "#1B4332" }}>{item.quartier}</p>
                <p className="text-xs text-gray-500 mt-1">{item.raison}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Comment protéger efficacement son logement à Seraing
          </h2>
          <p className="mb-4">
            Face à un environnement aussi propice aux rongeurs, le traitement seul ne suffit pas.
            Voici les mesures indispensables :
          </p>
          <ul className="space-y-3 text-sm">
            {[
              "Colmater toutes les fissures en façade et en caves (mortier, laine d'acier pour les petits passages)",
              "Installer des clapets anti-retour sur les canalisations d'évacuation",
              "Supprimer les sources d'eau stagnante dans le jardin (soucoupes, bâches, etc.)",
              "Stocker les poubelles dans des conteneurs hermétiques — les rats s'y nourrissent la nuit",
              "Entretenir les espaces verts proches : les herbes hautes et tas de bois sont des cachettes idéales",
              "Traiter avec un professionnel certifié qui inclut l'inspection des caves mitoyennes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Quand intervient-on à Seraing ?
          </h2>
          <p>
            Sayonarat intervient à Seraing et dans toutes ses communes sous 24 à 48h. Nos
            techniciens connaissent les spécificités du bâti serésien — caves communicantes,
            canalisations d&apos;époque, accès en sous-sol. Le traitement inclus systématiquement
            un diagnostic des voies d&apos;entrée et un colmatage des points identifiés.
          </p>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Dératisation à Seraing — Intervention sous 48h</p>
          <p className="text-sm text-gray-600 mb-4">
            Devis gratuit, diagnostic complet, colmatage inclus. Garantie 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+32466442454"
              className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900"
              style={{ backgroundColor: "#FFD700" }}
            >
              Appeler — +32 466 44 24 54
            </a>
            <Link
              href="/deratisation-seraing"
              className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white"
              style={{ backgroundColor: "#1B4332" }}
            >
              Page dératisation Seraing
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Questions fréquentes
          </h2>
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
            <li>
              <Link href="/blog/comment-savoir-si-on-a-des-rats" className="underline font-medium" style={{ color: "#1B4332" }}>
                Comment savoir si on a des rats chez soi ? Les 7 signes
              </Link>
            </li>
            <li>
              <Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>
                Prix d&apos;une dératisation à Liège en 2026
              </Link>
            </li>
            <li>
              <Link href="/deratisation-seraing" className="underline font-medium" style={{ color: "#1B4332" }}>
                Service dératisation Seraing
              </Link>
            </li>
            <li>
              <Link href="/deratisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Dératisation Liège — service principal
              </Link>
            </li>
          </ul>
        </section>

        <div className="border-t pt-6 text-sm text-gray-500 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
            style={{ backgroundColor: "#1B4332" }}
          >
            V
          </div>
          <div>
            <p className="font-semibold text-gray-800">Victor F.</p>
            <p>Fondateur de Sayonarat</p>
          </div>
        </div>

      </article>
    </>
  );
}
