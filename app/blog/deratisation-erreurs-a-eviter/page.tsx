import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Dératisation : les 6 erreurs qui aggravent l'infestation — Sayonarat Liège",
  description:
    "Poison en vrac, pièges mal placés, colmatage trop rapide : voici les erreurs les plus fréquentes qui font durer une infestation de rats à Liège.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dératisation : les 6 erreurs qui aggravent l'infestation",
  description: "Les erreurs les plus fréquentes en dératisation amateur et comment les éviter.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/deratisation-erreurs-a-eviter" },
};

const faq = [
  {
    q: "Combien de temps faut-il pour éliminer des rats ?",
    a: "Un traitement professionnel avec rodenticides prend généralement 2 à 4 semaines pour éliminer une colonie établie. Les rats ne meurent pas immédiatement — les anticoagulants agissent en 4 à 10 jours après ingestion. Il faut laisser le temps au produit d'agir et aux rats de consommer les appâts.",
  },
  {
    q: "Les chats éliminent-ils vraiment les rats ?",
    a: "Les chats sont efficaces contre les souris, moins contre les rats adultes qui peuvent peser 500g et se défendre. Un chat peut dissuader des rats de s'installer dans un espace, mais ne résout pas une infestation établie. C'est un moyen de prévention, pas de traitement.",
  },
  {
    q: "Peut-on utiliser du poison de rat acheté en magasin ?",
    a: "Oui, mais avec précautions. Les rodenticides vendus en grande surface contiennent des anticoagulants de première génération (bromadialone, difenacoum). Mal placés, ils peuvent intoxiquer des animaux non-cibles (chats, chiens, rapaces). Les professionnels utilisent des boîtes d'appâts sécurisées inaccessibles aux animaux domestiques.",
  },
  {
    q: "Faut-il quitter le logement pendant la dératisation ?",
    a: "Non, sauf traitement par fumigation (rare pour les rongeurs). Les appâts rodenticides sont placés dans des boîtes sécurisées inaccessibles aux humains. Le technicien vous indique si des précautions spécifiques sont nécessaires selon la méthode choisie.",
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

export default function ArticleErreursDeratisationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Erreurs dératisation
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Dératisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Dératisation : les 6 erreurs<br />qui aggravent l'infestation
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">En résumé</p>
          <p>
            La plupart des infestations qui durent des mois sont la conséquence d'erreurs commises
            dès les premiers jours. Poser des pièges au mauvais endroit, utiliser du poison
            sans diagnostic, colmater avant le traitement — ces réflexes aggravent le problème
            au lieu de le résoudre.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Les 6 erreurs les plus fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                num: "1",
                titre: "Poser des pièges sans diagnostic préalable",
                texte: "Les rats sont néophobes — ils évitent tout objet nouveau pendant plusieurs jours. Un piège posé au hasard au milieu d'une pièce ne sera jamais déclenché. Les professionnels identifient d'abord les couloirs de passage réels (traces de frottement sur les murs, excréments, urine fluorescente sous UV) avant de positionner les dispositifs.",
              },
              {
                num: "2",
                titre: "Colmater les entrées avant le traitement",
                texte: "Boucher les trous dès qu'on les repère semble logique, mais c'est une erreur : les rats piégés à l'intérieur creusent de nouveaux passages, souvent dans des zones plus difficiles d'accès. Le colmatage doit toujours intervenir après l'élimination complète de la colonie.",
              },
              {
                num: "3",
                titre: "Utiliser du poison en vrac sans boîte sécurisée",
                texte: "Le poison répandu en granulés peut être emporté et stocké par les rats dans des zones inaccessibles. Les rats intoxiqués mais pas morts migrent parfois dans les murs avant de décéder — causant des problèmes d'odeurs pendant des semaines. Les boîtes d'appâts sécurisées garantissent une ingestion contrôlée.",
              },
              {
                num: "4",
                titre: "Arrêter le traitement trop tôt",
                texte: "Si les rats semblent avoir disparu après une semaine, l'infestation n'est pas résolue. Les anticoagulants agissent en 4 à 10 jours. Les jeunes rats non encore sortis du nid prennent le relais. Un traitement efficace nécessite 2 à 4 semaines avec vérification des appâts.",
              },
              {
                num: "5",
                titre: "Ne traiter que le logement sans les zones annexes",
                texte: "Un rat éliminé dans la cuisine mais pas dans la cave, le garage ou les espaces mitoyens sera remplacé par ses congénères en quelques semaines. Le diagnostic doit couvrir l'ensemble des espaces reliés : caves communicantes, vide sanitaire, espaces entre mitoyens.",
              },
              {
                num: "6",
                titre: "Laisser des sources alimentaires accessibles",
                texte: "Les poubelles non couvertes, les composteurs sans protection, les sacs de nourriture animale ouverts : ce sont des buffets permanents pour les rongeurs. Sans supprimer ces ressources, aucun traitement n'est durablement efficace.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 border-l-4 pl-5" style={{ borderColor: "#1B4332" }}>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    <span style={{ color: "#1B4332" }}>#{item.num}</span> — {item.titre}
                  </h3>
                  <p className="text-sm">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Dératisation professionnelle à Liège</p>
          <p className="text-sm text-gray-600 mb-4">
            Diagnostic complet, traitement adapté à votre situation, colmatage inclus. Garantie 30 jours.
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
            <li><Link href="/blog/souris-ou-rat-difference" className="underline font-medium" style={{ color: "#1B4332" }}>Souris ou rat : comment faire la différence ?</Link></li>
            <li><Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>Prix d'une dératisation à Liège en 2026</Link></li>
          </ul>
        </section>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Liste des biocides autorisés en Belgique",
              href: "https://www.health.belgium.be/fr/liste-des-biocides-autorises-et-rapport-annuel",
            },
            {
              label: "Sciensano — Leptospirose : surveillance épidémiologique en Belgique",
              href: "https://www.sciensano.be/fr/sujets-sante/leptospirose",
            },
            {
              label: "OMS — Sécurité sanitaire des aliments et rongeurs",
              href: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
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
