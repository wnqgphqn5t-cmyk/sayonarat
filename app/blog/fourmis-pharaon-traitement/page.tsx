import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Fourmis pharaon : pourquoi c'est si difficile à éliminer ?",
  description:
    "La fourmi pharaon est l'insecte le plus difficile à traiter en intérieur. Pourquoi les sprays aggravent l'infestation, et la seule méthode qui fonctionne vraiment.",
};

const faqs = [
  {
    q: "Comment reconnaître une fourmi pharaon ?",
    a: "La fourmi pharaon est minuscule (1,5 à 2 mm), jaune-orangé à brun clair, avec l'abdomen plus sombre. Elle se déplace en longues files dans les murs, derrière les plinthes et dans les cloisons. Contrairement à la fourmi noire des jardins, elle vit exclusivement à l'intérieur dans les pays à climat tempéré.",
  },
  {
    q: "Pourquoi les fourmis pharaon sont-elles si difficiles à éliminer ?",
    a: "Deux raisons principales. Première : elles pratiquent la polycalie — une colonie peut avoir des dizaines de reines et des centaines de sous-nids dans les murs, planchers et gaines. Deuxième : si une reine est menacée, elle fuit avec une partie de la colonie et fonde un nouveau nid ailleurs dans le bâtiment (phénomène de 'budding'). Un spray ou un insecticide de contact aggrave donc l'infestation au lieu de la réduire.",
  },
  {
    q: "Combien coûte un traitement fourmis pharaon à Liège ?",
    a: "Entre 200 € et 450 € selon la superficie et l'étendue de l'infestation. Le traitement par appâts gel requiert parfois des visites espacées pour s'assurer que toutes les colonies ont été atteintes. Devis gratuit sous 24h.",
  },
  {
    q: "Les fourmis pharaon peuvent-elles contaminer les aliments ?",
    a: "Oui, et c'est leur principal danger sanitaire. Elles peuvent porter des bactéries pathogènes (Salmonella, Staphylococcus) en circulant dans les cuisines, les garde-manger et même dans les perfusions hospitalières. Dans les établissements de soins, leur présence est considérée comme une urgence sanitaire.",
  },
  {
    q: "Combien de temps dure un traitement fourmis pharaon ?",
    a: "Le traitement par gel appâtant prend effet en 1 à 3 semaines. L'élimination complète d'une colonie établie peut prendre 4 à 8 semaines selon l'étendue. C'est plus long que pour d'autres insectes, mais c'est la seule méthode fiable. Toute tentative de traitement rapide par spray disperse la colonie et prolonge l'infestation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fourmis pharaon : pourquoi c'est si difficile à éliminer ?",
  description: "Guide spécialisé sur les fourmis pharaon : identification, pourquoi les traitements classiques échouent, et la seule méthode efficace.",
  author: { "@type": "Organization", name: "Sayonarat" },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/fourmis-pharaon-traitement" },
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

export default function FourmisPharaonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Fourmis pharaon
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#1B4332", border: "1px solid #4ade80" }}>Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fourmis pharaon : pourquoi c'est si difficile à éliminer ?
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            La fourmi pharaon est un cas à part dans la lutte antiparasitaire.
            Un spray aggrave l'infestation. Voici pourquoi, et comment agir correctement.
          </p>
        </div>
      </section>

      <article className="py-14 px-4 max-w-3xl mx-auto">

        <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">⚠️ N'utilisez surtout pas de spray</p>
          <p className="text-sm text-red-700">
            Contrairement aux autres fourmis, vaporiser un insecticide sur des fourmis
            pharaon déclenche un mécanisme de survie : les reines fuient avec une partie
            de la colonie et fondent de nouveaux nids dans d'autres zones de l'habitation.
            Vous transformez un problème en cinq.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          La fourmi pharaon : un insecte à part
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <em>Monomorium pharaonis</em> — la fourmi pharaon — est originaire d'Afrique
          tropicale. Introduite en Europe via le commerce, elle s'est parfaitement
          adaptée aux intérieurs chauffés des immeubles. À Liège, elle est
          principalement signalée dans les immeubles d'habitation anciens, les résidences
          étudiantes et les établissements de santé.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Sa particularité biologique la rend exceptionnellement difficile à traiter :
          une colonie peut compter des dizaines de reines et plusieurs milliers
          d'ouvrières réparties en sous-colonies dans les murs, les joints de
          carrelage, les prises électriques et les faux plafonds. Si une reine
          détecte un danger, elle se déplace avec ses ouvrières et fonde
          un nouveau satellite — c'est le phénomène de <strong>budding</strong>.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi les traitements classiques échouent
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ backgroundColor: "#1B4332", color: "white" }}>
                <th className="px-4 py-3 text-left">Méthode</th>
                <th className="px-4 py-3 text-left">Résultat sur fourmis pharaon</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Spray insecticide du commerce", "❌ Déclenche le budding — aggrave l'infestation"],
                ["Poudre insecticide", "❌ Même effet — les fourmis évitent les zones traitées"],
                ["Pièges classiques fourmis", "⚠️ Partiellement efficace sur les ouvrières seulement"],
                ["Gel appâtant professionnel", "✅ Seule méthode efficace — ingéré et transmis aux reines"],
                ["Barrières physiques", "⚠️ Complémentaire seulement — ne détruit pas la colonie"],
              ].map(([m, r], i) => (
                <tr key={m} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{m}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          La seule méthode efficace : le gel appâtant
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le gel insecticide professionnel agit par ingestion et transmission trophallactique :
          une ouvrière mange l'appât, le transporte jusqu'au nid et le partage avec
          les larves, les autres ouvrières et — c'est la clé — avec les reines.
          Sans atteindre les reines, l'infestation ne sera jamais éliminée.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le gel est déposé aux points de passage identifiés lors du diagnostic
          (traçailles, zones de transit, proximité de la source d'eau et de chaleur).
          Les fourmis ne doivent pas être perturbées pendant le traitement —
          c'est pourquoi aucune pulvérisation complémentaire ne doit être réalisée.
        </p>
        <div className="bg-green-50 border-l-4 border-green-400 p-5 rounded-r-xl mb-8">
          <p className="font-semibold text-gray-800">⏱️ Durée du traitement</p>
          <p className="text-sm text-gray-700 mt-1">
            L'effet du gel est visible en 1 à 3 semaines. L'élimination complète d'une
            colonie bien établie peut prendre 4 à 8 semaines. C'est plus long que pour
            d'autres insectes, mais c'est inévitable pour atteindre toutes les reines.
            Toute tentative d'accélérer le traitement par des méthodes complémentaires
            risque de provoquer un budding et de prolonger l'infestation.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Fourmis pharaon dans un immeuble : une urgence collective
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Dans un immeuble de plusieurs appartements, une infestation de fourmis pharaon
          se propage inévitablement de logement en logement via les gaines et canalisations.
          Traiter un seul appartement est insuffisant si les colonies voisines ne sont
          pas atteintes simultanément.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Si vous êtes en copropriété, signalez l'infestation au syndic et demandez
          une intervention coordonnée sur l'ensemble de l'immeuble.
          Sayonarat propose des interventions multi-logements adaptées aux immeubles
          liégeois.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/fourmis-liege"
            style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Voir notre service fourmis Liège →
          </Link>
          <a
            href="tel:+32466442454"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            📞 Devis gratuit sous 24h
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
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
              label: "OMS — Sécurité sanitaire des aliments",
              href: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
            },
            {
              label: "Sciensano — Institut de santé publique belge",
              href: "https://www.sciensano.be/fr",
            },
          ]}
        />

        <div className="border-t border-gray-100 pt-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Articles liés</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/fourmis-maison-que-faire" className="text-sm underline" style={{ color: "#1B4332" }}>Fourmis dans la maison : guide complet</Link>
            <Link href="/blog/cafards-immeuble-responsabilite" className="text-sm underline" style={{ color: "#1B4332" }}>Nuisibles en immeuble : responsabilités</Link>
            <Link href="/fourmis-liege" className="text-sm underline" style={{ color: "#1B4332" }}>Traitement fourmis Liège</Link>
          </div>
        </div>
      </article>
    </>
  );
}
