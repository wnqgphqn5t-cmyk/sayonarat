import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Souris ou rat : comment faire la différence ? — Sayonarat Liège",
  description:
    "Bruits, crottes, traces : comment savoir si vous avez des rats ou des souris ? Les différences clés et ce que ça change pour le traitement.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Souris ou rat : comment faire la différence ?",
  description: "Distinguer rats et souris par leurs traces, crottes et comportements. Ce que ça change pour le traitement.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/souris-ou-rat-difference" },
};

const faq = [
  {
    q: "Les rats et les souris peuvent-ils cohabiter ?",
    a: "Non. Les rats (Rattus norvegicus) sont des prédateurs naturels des souris. Quand les rats s'installent, les souris fuient. Si vous avez les deux, c'est que la propriété est très grande ou que les populations sont séparées dans des zones distinctes.",
  },
  {
    q: "Les souris sont-elles moins dangereuses que les rats ?",
    a: "Non — les deux sont des vecteurs de maladies. Les souris transmettent la salmonellose, la leptospirose et le virus Hanta. Elles contaminent les aliments avec leurs excréments (jusqu'à 80 crottes par nuit). Une souris peut causer autant de dégâts qu'un rat dans un logement.",
  },
  {
    q: "Les pièges du commerce sont-ils efficaces ?",
    a: "Pour une souris isolée, oui. Pour une colonie établie ou des rats, non — les rongeurs sont néophobes (méfiants envers tout objet nouveau) et contournent facilement les pièges mal placés. Un professionnel positionne les appâts aux points de passage réels identifiés lors du diagnostic.",
  },
  {
    q: "Combien coûte une dératisation à Liège ?",
    a: "Entre 150 € et 350 € pour une maison unifamiliale. Pour les souris seules, entre 100 € et 250 €. Le tarif varie selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h chez Sayonarat.",
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

export default function ArticleSourisRatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Souris ou rat
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Dératisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 4 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Souris ou rat :<br />comment faire la différence ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Le signe le plus fiable : la taille des crottes. <strong>Crottes de 3–6 mm</strong>
            (grain de riz) = souris. <strong>Crottes de 10–20 mm</strong> (olive) = rat.
            Les bruits aussi diffèrent : grattements légers et rapides = souris,
            déplacements lourds et lents = rats.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Tableau comparatif : rat vs souris
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Critère</th>
                  <th className="px-4 py-2 text-left">Souris</th>
                  <th className="px-4 py-2 text-left">Rat brun</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Taille du corps", "6–9 cm", "20–25 cm"],
                  ["Poids", "15–30 g", "200–500 g"],
                  ["Crottes", "3–6 mm (grain de riz)", "10–20 mm (olive)"],
                  ["Oreilles", "Grandes par rapport à la tête", "Petites et rondes"],
                  ["Queue", "Fine, longue, poilue", "Épaisse, courte, écailleuse"],
                  ["Comportement", "Curieux, explore facilement", "Méfiant, évite le nouveau"],
                  ["Zone de vie", "Intérieur, hauteur", "Sol, cave, égouts"],
                ].map(([crit, souris, rat], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 font-medium">{crit}</td>
                    <td className="px-4 py-2">{souris}</td>
                    <td className="px-4 py-2">{rat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Pourquoi c&apos;est important de savoir lequel ?
          </h2>
          <p className="mb-3">
            Le traitement n&apos;est pas le même. Les rats sont beaucoup plus méfiants (néophobes) :
            ils évitent tout nouvel objet pendant plusieurs jours. Un piège mal placé ou un appât
            trop visible ne sera jamais touché. Le professionnel identifie les couloirs de passage
            réels (traces de frottement, urine fluorescente sous UV) avant de poser les dispositifs.
          </p>
          <p>
            Les souris, à l&apos;inverse, sont curieuses et explorent rapidement. Elles sont plus
            faciles à capturer mais se reproduisent plus vite — une femelle peut avoir
            8 à 10 portées de 5 à 8 petits par an.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Les indices dans votre logement
          </h2>
          <div className="space-y-4">
            {[
              { signe: "Crottes", souris: "Nombreuses (80/nuit), grain de riz, éparpillées", rat: "Moins nombreuses, olives, souvent groupées près des passages" },
              { signe: "Traces de morsure", souris: "Petites incisions nettes sur emballages et fils", rat: "Morsures larges, câbles rongés, dégâts structurels" },
              { signe: "Bruits", souris: "Grattements rapides et légers, souvent la nuit", rat: "Déplacements lourds, couinements, bruits dans les murs" },
              { signe: "Odeur", souris: "Urine forte et musquée dans les zones infestées", rat: "Odeur plus intense, visible même à faible effectif" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="font-bold text-sm mb-2" style={{ color: "#1B4332" }}>{item.signe}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50 rounded p-2"><span className="font-semibold">Souris : </span>{item.souris}</div>
                  <div className="bg-orange-50 rounded p-2"><span className="font-semibold">Rat : </span>{item.rat}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Rats ou souris à Liège — Intervention sous 48h</p>
          <p className="text-sm text-gray-600 mb-4">
            Diagnostic complet, identification de l&apos;espèce, traitement adapté. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/deratisation-liege" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Voir le service dératisation
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
            <li><Link href="/blog/comment-savoir-si-on-a-des-rats" className="underline font-medium" style={{ color: "#1B4332" }}>Comment savoir si on a des rats ? Les 7 signes</Link></li>
            <li><Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>Prix d&apos;une dératisation à Liège en 2026</Link></li>
            <li><Link href="/deratisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Dératisation Liège — service principal</Link></li>
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
