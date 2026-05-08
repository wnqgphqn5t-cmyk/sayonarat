import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/punaises-de-lit-que-faire" },
  title: "Punaises de lit : que faire en cas d'infestation à Liège ? — Sayonarat",
  description:
    "Vous avez trouvé des punaises de lit ? Voici les étapes à suivre immédiatement, ce qu'il ne faut pas faire, et quand appeler un professionnel à Liège.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Punaises de lit : que faire en cas d'infestation à Liège ?",
  description:
    "Étapes à suivre immédiatement, erreurs à éviter et traitement professionnel punaises de lit à Liège.",
  datePublished: "2026-03-20",
  dateModified: "2026-05-08",
  author: { "@type": "Person", name: "Victor F." },
  publisher: {
    "@type": "Organization",
    name: "Sayonarat",
    url: "https://www.sayonarat.be",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.sayonarat.be/blog/punaises-de-lit-que-faire",
  },
};

const faq = [
  {
    q: "Comment savoir si j'ai des punaises de lit et pas autre chose ?",
    a: "Les piqûres de punaises de lit apparaissent en ligne ou en grappe de 3 à 5, souvent sur les zones exposées pendant le sommeil (bras, cou, épaules). On trouve aussi des petites taches noires sur les coutures du matelas (excréments), des mues translucides, ou une odeur légèrement sucrée-écœurante. Une lampe torche le long des coutures du matelas révèle souvent les œufs ou les adultes.",
  },
  {
    q: "Est-ce que les punaises de lit disparaissent sans traitement ?",
    a: "Non. Les punaises de lit ne disparaissent pas d'elles-mêmes. Elles peuvent survivre sans se nourrir jusqu'à 18 mois, donc l'attente ne fait qu'aggraver la situation. Sans traitement professionnel, elles recolonisent la chambre et s'étendent aux pièces voisines.",
  },
  {
    q: "Le traitement thermique est-il efficace contre les punaises ?",
    a: "Oui, le traitement thermique (chaleur à 50–55°C) est l'une des méthodes les plus efficaces car il tue les punaises à tous les stades, y compris les œufs. Il est non-toxique et traite tout un appartement en une journée. Inconvénient : il est plus coûteux qu'un traitement chimique (250–500 € pour un appartement).",
  },
  {
    q: "Peut-on traiter les punaises de lit soi-même ?",
    a: "Les produits du commerce (sprays, poudres) sont peu efficaces sur les œufs et les populations résistantes. Ils peuvent disperser les punaises dans d'autres pièces. Pour une infestation confirmée, un traitement professionnel est indispensable. Les techniques DIY peuvent servir de mesures d'appoint entre deux passages pro.",
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

export default function ArticlePunaisesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Punaises de lit
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">
              Punaises de lit
            </span>
            <span className="text-xs text-green-300">8 mai 2026 · 6 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Punaises de lit : que faire<br />en cas d'infestation à Liège ?
          </h1>
          <p className="text-green-100 text-lg">
            Par <strong>Victor F.</strong> — Expert en lutte antiparasitaire à Liège
          </p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        {/* Réponse directe */}
        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">En résumé</p>
          <p>
            Si vous suspectez des punaises de lit : <strong>1)</strong> vérifiez le matelas et les
            lattes avec une lampe torche, <strong>2)</strong> lavez le linge à 60°C minimum,
            <strong> 3)</strong> ne déplacez surtout pas vos meubles dans d'autres pièces,
            <strong> 4)</strong> appelez un professionnel. Les produits du commerce ne suffisent pas
            pour éradiquer une infestation confirmée.
          </p>
        </div>

        <p>
          Les punaises de lit (<em>Cimex lectularius</em>) sont l'un des problèmes parasitaires les
          plus stressants. À Liège, les signalements ont augmenté ces dernières années, notamment dans
          les appartements étudiants du quartier <strong>Féronstrée, Sainte-Marguerite</strong> et
          autour de l'Université de Liège. Elles se déplacent via les bagages, meubles d'occasion
          et vêtements — le marché de la Batte du dimanche est une voie de diffusion classique.
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
          <p className="font-semibold text-amber-800 text-sm">Été 2026 : pic de contamination via les voyages</p>
          <p className="text-sm text-gray-700 mt-1">
            Mai à août, c'est la saison des voyages — et donc le pic des contaminations aux punaises de lit.
            Hôtels, Airbnb, transports : une seule nuit dans un logement infesté suffit à ramener des punaises dans vos bagages.
            Si vous rentrez de voyage avec des piqûres inexpliquées, inspectez votre matelas et vos valises avant de les ranger.
          </p>
        </div>
        <p>
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Étape 1 — Confirmer l'infestation
          </h2>
          <p className="mb-4">
            Avant d'agir, confirmez que vous avez bien des punaises de lit. Les piqûres de moustiques,
            acariens ou puces peuvent ressembler. Voici comment identifier les punaises :
          </p>
          <ul className="space-y-3 text-sm">
            {[
              "Inspectez les coutures du matelas, le cadre de lit, la tête de lit et les lattes avec une lampe torche",
              "Cherchez des insectes brun-rougeâtre de 4 à 7 mm (adultes) ou translucides (jeunes)",
              "Repérez les taches noires sur les coutures (excréments) et les petits grains blancs allongés (œufs)",
              "Une odeur légèrement sucrée, écœurante, dans la chambre est un signe d'infestation avancée",
              "Les piqûres en série de 3 (\"petit-déjeuner, déjeuner, dîner\") sont caractéristiques",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600 font-bold flex-shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Étape 2 — Ce qu'il faut faire immédiatement
          </h2>
          <div className="space-y-4">
            {[
              {
                titre: "Lavez tout le linge de lit à 60°C minimum",
                texte: "Draps, taies, couvertures, housses de coussin. La chaleur à 60°C tue les punaises et leurs œufs en quelques minutes. Mettez les articles lavés dans des sacs plastiques fermés jusqu'à l'intervention.",
              },
              {
                titre: "Aspirez le matelas, les lattes et le cadre de lit",
                texte: "Insistez sur les coutures et recoins. Après l'aspiration, videz l'aspirateur dans un sac plastique fermé que vous sortirez immédiatement. Ne réutilisez pas l'aspirateur sans l'avoir désinfecté.",
              },
              {
                titre: "Signalez à votre propriétaire si vous êtes locataire",
                texte: "En Belgique, le propriétaire est légalement responsable de la lutte antiparasitaire si l'infestation ne vient pas directement du locataire. Signalez par écrit (email ou lettre recommandée) pour garder une trace.",
              },
              {
                titre: "Contactez un professionnel rapidement",
                texte: "Plus vous attendez, plus l'infestation s'étend. Les punaises de lit se reproduisent vite : une femelle pond 2 à 5 œufs par jour, soit 200 à 500 œufs dans sa vie. Chaque semaine compte.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {i + 1}
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
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Étape 3 — Ce qu'il ne faut SURTOUT PAS faire
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-4">
            {[
              {
                titre: "Ne déplacez pas vos meubles dans d'autres pièces",
                texte: "C'est l'erreur la plus fréquente. En déplaçant un fauteuil ou une armoire infestée dans le salon ou la chambre d'enfant, vous dispersez les punaises dans tout le logement. Gardez tout en place jusqu'à l'intervention.",
              },
              {
                titre: "N'utilisez pas les produits du commerce comme seule solution",
                texte: "Les sprays de supermarché ne pénètrent pas dans les recoins où se cachent les œufs. Ils peuvent déplacer les punaises sans les tuer. Ils créent aussi une résistance aux insecticides.",
              },
              {
                titre: "Ne dormez pas dans une autre pièce",
                texte: "Si vous fuyez la chambre infestée, les punaises vous suivent (elles sont attirées par le CO2 que vous expirez). Vous risquez de contaminer une autre pièce.",
              },
              {
                titre: "Ne jetez pas votre matelas dans le couloir ou l'ascenseur",
                texte: "C'est une source de contamination pour vos voisins. Si vous devez le jeter, enveloppez-le dans du film plastique et indiquez clairement qu'il est infesté.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-red-800 mb-1">✗ {item.titre}</h3>
                <p className="text-sm text-gray-700">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Les méthodes de traitement professionnel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                titre: "Traitement chimique (insecticide)",
                details: ["2 à 3 passages à 2 semaines d'intervalle", "Efficace sur adultes et nymphes", "Ne tue pas tous les œufs (d'où les passages multiples)", "Prix : 200–400 € pour un appartement"],
                note: "Méthode la plus courante",
              },
              {
                titre: "Traitement thermique (chaleur)",
                details: ["1 seul passage (6–8 heures)", "Tue tous les stades dont les œufs", "Non toxique, sans résidu chimique", "Prix : 250–500 € pour un appartement"],
                note: "Plus efficace, plus coûteux",
              },
            ].map((m, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold mb-3" style={{ color: "#1B4332" }}>{m.titre}</h3>
                <ul className="space-y-1 text-sm mb-3">
                  {m.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-green-600">·</span> {d}
                    </li>
                  ))}
                </ul>
                <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-800">
                  {m.note}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Pourquoi les punaises de lit sont si difficiles à éliminer ?
          </h2>
          <p className="mb-3">
            Le problème principal avec les punaises de lit, c'est leur <strong>résistance aux œufs</strong>.
            Les œufs résistent à la plupart des insecticides du commerce. C'est pourquoi un traitement
            professionnel nécessite plusieurs passages espacés de 10 à 14 jours : pour éliminer les
            nouvelles générations qui éclosent après le premier traitement.
          </p>
          <p>
            Une punaise adulte peut aussi <strong>survivre jusqu'à 18 mois sans se nourrir</strong>,
            cachée dans une fissure, une prise électrique ou derrière un interrupteur. Si un logement
            à Liège a été infesté par des locataires précédents et laissé vide, les punaises peuvent
            attendre l'arrivée du prochain occupant.
          </p>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Intervention punaises de lit à Liège</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat intervient pour les traitements punaises de lit dans toute la région liégeoise.
            Traitement chimique ou thermique selon votre situation. Devis gratuit en 24h.
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
              href="/punaises-de-lit-liege"
              className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white"
              style={{ backgroundColor: "#1B4332" }}
            >
              Voir le service punaises de lit
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
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Articles liés
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/comment-savoir-si-on-a-des-rats" className="underline font-medium" style={{ color: "#1B4332" }}>
                Comment savoir si on a des rats chez soi ?
              </Link>
            </li>
            <li>
              <Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>
                Prix d'une dératisation à Liège en 2026
              </Link>
            </li>
            <li>
              <Link href="/punaises-de-lit-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Service traitement punaises de lit Liège
              </Link>
            </li>
            <li>
              <Link href="/desinsectisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Désinsectisation Liège — blattes, fourmis, guêpes
              </Link>
            </li>
          </ul>
        </section>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Liste des biocides autorisés en Belgique",
              href: "https://www.health.belgium.be/fr/liste-des-biocides-autorises-et-rapport-annuel",
            },
            {
              label: "Parlement Européen — Question parlementaire sur les punaises de lit (2023)",
              href: "https://www.europarl.europa.eu/doceo/document/E-9-2023-003026_EN.html",
            },
            {
              label: "Sciensano — Institut de santé publique belge",
              href: "https://www.sciensano.be/fr",
            },
          ]}
        />

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
