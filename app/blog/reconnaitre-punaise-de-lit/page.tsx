import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/reconnaitre-punaise-de-lit" },
  title: "Comment reconnaître une punaise de lit ? Les signes — Sayonarat Liège",
  description:
    "Piqûres, taches, odeur : voici comment reconnaître une punaise de lit avec certitude. Guide complet pour Liège.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment reconnaître une punaise de lit ? Les signes à ne pas ignorer",
  description: "Identifier les punaises de lit : piqûres, taches, odeur, œufs. Guide complet pour Liège.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://www.sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.sayonarat.be/blog/reconnaitre-punaise-de-lit" },
};

const faq = [
  {
    q: "Les punaises de lit piquent-elles uniquement la nuit ?",
    a: "Principalement oui. Les punaises de lit sont photophobes — elles fuient la lumière et sortent surtout entre 3h et 5h du matin quand la victime est immobile. En cas d'infestation massive ou de forte faim, elles peuvent piquer en plein jour dans une pièce sombre.",
  },
  {
    q: "Les piqûres de punaises de lit sont-elles dangereuses ?",
    a: "Non directement. Les punaises de lit ne transmettent pas de maladies. Mais leurs piqûres provoquent des réactions allergiques (démangeaisons, urticaire), des troubles du sommeil et un impact psychologique significatif (anxiété, phobie du lit). Des infections cutanées secondaires peuvent survenir en cas de grattage intense.",
  },
  {
    q: "Peut-on avoir des punaises de lit dans un logement propre ?",
    a: "Oui. Les punaises de lit ne sont pas liées à la saleté — elles se nourrissent uniquement de sang humain. Elles arrivent via les bagages (hôtel infesté), les meubles d'occasion, les vêtements ou les voisins en immeuble. Un logement impeccable peut être infesté.",
  },
  {
    q: "Combien de temps peut-on avoir des punaises sans le savoir ?",
    a: "Plusieurs mois. Au stade initial (1 à 5 individus), les piqûres peuvent être confondues avec des piqûres de moustiques ou des réactions allergiques. La population double toutes les 2 à 3 semaines — à 50+ individus, les signes deviennent évidents.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Liège ?",
    a: "Entre 200 € et 500 € selon la superficie et la méthode (traitement thermique ou chimique). Le traitement thermique (chaleur à 55°C) est plus efficace en un passage mais plus coûteux. Devis gratuit sous 24h chez Sayonarat.",
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

export default function ArticlePunaisesReconnaitrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Reconnaître punaise de lit
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Punaises de lit</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Comment reconnaître<br />une punaise de lit ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Les 4 signes qui confirment les punaises de lit : <strong>piqûres en ligne ou en groupe</strong>
            sur les zones découvertes, <strong>taches brun-rouille</strong> sur le matelas ou les draps,
            <strong> petits points noirs</strong> (excréments) dans les coutures, et une
            <strong> odeur douce et écœurante</strong> en cas d'infestation avancée.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            À quoi ressemble une punaise de lit ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Taille", val: "4 à 7 mm (grain de riz aplati)" },
              { label: "Couleur", val: "Brun clair à jeun, brun-rouge après repas" },
              { label: "Forme", val: "Ovale, très plate, sans ailes" },
              { label: "Vitesse", val: "Rapide mais ne saute pas et ne vole pas" },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-xs font-bold uppercase text-green-700 mb-1">{item.label}</p>
                <p className="font-medium text-sm" style={{ color: "#1B4332" }}>{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les 5 signes d'une infestation
          </h2>
          <div className="space-y-5">
            {[
              {
                num: "1",
                titre: "Piqûres caractéristiques",
                texte: "Les piqûres de punaises apparaissent en ligne, en zigzag ou en groupe de 3 (surnommé « petit-déjeuner, déjeuner, dîner »). Elles touchent les zones découvertes pendant le sommeil : cou, épaules, bras, chevilles. Rouges, gonflées, très démangeantes.",
              },
              {
                num: "2",
                titre: "Taches brun-rouille sur le matelas",
                texte: "Les punaises laissent des traces de sang sur les draps quand on les écrase dans son sommeil. Des taches brun-rouille apparaissent aussi sur le matelas, les coutures et le sommier.",
              },
              {
                num: "3",
                titre: "Points noirs dans les coutures",
                texte: "Les excréments de punaises forment de petits points noirs dans les coutures du matelas, les recoins du sommier, les têtes de vis du lit et derrière la tête de lit. C'est le signe le plus fiable d'une infestation active.",
              },
              {
                num: "4",
                titre: "Mues et œufs blancs",
                texte: "Les punaises muent 5 fois avant l'âge adulte. Leurs exuvies (peaux vides) sont translucides, en forme de punaise. Les œufs sont blancs, de 1 mm, collés dans les recoins — pratiquement invisibles à l'œil nu.",
              },
              {
                num: "5",
                titre: "Odeur douce et écœurante",
                texte: "En cas d'infestation massive, les punaises dégagent une odeur caractéristique souvent décrite comme une odeur de coriandre écrasée, de framboises acides ou d'amande amère. Si vous sentez cette odeur dans votre chambre, l'infestation est avancée.",
              },
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
            Où chercher dans la chambre ?
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { lieu: "Coutures du matelas", icone: "🛏️" },
              { lieu: "Sommier et lattes", icone: "🪵" },
              { lieu: "Tête de lit et vis", icone: "🔩" },
              { lieu: "Cadre photo et prises électriques", icone: "🖼️" },
              { lieu: "Plinthes et parquet fissuré", icone: "🏠" },
              { lieu: "Revers des rideaux", icone: "🪟" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <span className="text-xl">{item.icone}</span>
                <span className="text-sm font-medium" style={{ color: "#1B4332" }}>{item.lieu}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Punaises de lit à Liège — Intervention rapide</p>
          <p className="text-sm text-gray-600 mb-4">
            Vous pensez avoir des punaises ? N'attendez pas — la population double en 3 semaines.
            Diagnostic gratuit, devis sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/punaises-de-lit-liege" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Voir le service punaises de lit
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
            <li><Link href="/blog/punaises-de-lit-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Punaises de lit : que faire en cas d'infestation ?</Link></li>
            <li><Link href="/blog/cafards-cuisine-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Cafards dans la cuisine : que faire ?</Link></li>
            <li><Link href="/punaises-de-lit-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Service punaises de lit Liège</Link></li>
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
