import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Mites alimentaires : que faire ? Guide complet — Sayonarat Liège",
  description:
    "Des mites dans vos placards à Liège ? Voici comment les identifier, les étapes à suivre immédiatement et quand appeler un professionnel.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mites alimentaires : que faire ? Guide complet",
  description: "Identifier les mites alimentaires, étapes immédiates, erreurs à éviter et traitement professionnel à Liège.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/mites-alimentaires-que-faire" },
};

const faq = [
  {
    q: "D'où viennent les mites alimentaires ?",
    a: "Elles arrivent presque toujours via un produit acheté déjà infesté (farine, céréales, fruits secs, épices) — souvent en grande surface ou en vrac. Les œufs sont microscopiques et résistent au conditionnement plastique. Une fois dans votre cuisine, elles colonisent rapidement tous les produits secs accessibles.",
  },
  {
    q: "Les mites alimentaires piquent-elles ?",
    a: "Non. Les mites alimentaires adultes ne piquent pas et ne transmettent pas de maladies directement. C'est leurs larves qui contaminent les aliments, les rendant impropres à la consommation. Le risque est alimentaire, pas cutané.",
  },
  {
    q: "Combien de temps dure une infestation de mites sans traitement ?",
    a: "Indéfiniment. Sans élimination complète des sources (produits infestés) et traitement des zones de ponte, le cycle se répète : les adultes pondent dans de nouveaux produits, les larves se développent, de nouveaux adultes émergent. Une infestation peut durer des années si rien n'est fait.",
  },
  {
    q: "Les pièges à phéromones suffisent-ils ?",
    a: "Les pièges à phéromones capturent les mâles adultes et réduisent la reproduction, mais n'éliminent pas les larves ni les œufs déjà présents dans vos aliments. Ils sont utiles en prévention ou pour détecter une infestation naissante, pas pour traiter une infestation établie.",
  },
  {
    q: "Faut-il jeter tous les aliments du placard ?",
    a: "Tous les produits secs non hermétiquement fermés dans des bocaux en verre ou boîtes métalliques doivent être inspectés et probablement jetés. Les conserves, huiles et produits en bocaux hermétiques sont épargnés. En cas de doute, jetez — le coût d'un remplacement est inférieur à celui d'une réinfestation.",
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

export default function ArticleMitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Mites alimentaires
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Mites alimentaires :<br />que faire ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Si vous trouvez des mites alimentaires : <strong>1)</strong> videz tous les placards,
            <strong> 2)</strong> jetez tous les produits secs potentiellement contaminés,
            <strong> 3)</strong> aspirez et lavez l&apos;intérieur des placards avec du vinaigre blanc,
            <strong> 4)</strong> stockez les nouveaux produits dans des bocaux hermétiques.
            Si l&apos;infestation persiste, appelez un professionnel.
          </p>
        </div>

        <p>
          La mite alimentaire adulte est un petit papillon beige-gris de 1 à 2 cm d&apos;envergure.
          Elle ne mange pas — c&apos;est sa larve qui cause les dégâts. Invisible à l&apos;œil nu au stade
          œuf, elle éclot en larve blanchâtre qui s&apos;attaque à vos denrées sèches et file des toiles
          caractéristiques dans les placards.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les aliments les plus touchés
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { aliment: "Farine et semoule", icone: "🌾" },
              { aliment: "Céréales et muesli", icone: "🥣" },
              { aliment: "Fruits secs et noix", icone: "🥜" },
              { aliment: "Épices et herbes", icone: "🌿" },
              { aliment: "Riz et pâtes", icone: "🍚" },
              { aliment: "Chocolat et cacao", icone: "🍫" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <span className="text-xl">{item.icone}</span>
                <span className="text-sm font-medium" style={{ color: "#1B4332" }}>{item.aliment}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les étapes à suivre immédiatement
          </h2>
          <div className="space-y-4">
            {[
              {
                num: "1",
                titre: "Vider tous les placards sans exception",
                texte: "Sortez tout — même les produits en apparence intacts. Les œufs de mites sont microscopiques et peuvent se trouver dans des emballages non ouverts. Ne faites pas confiance à l'apparence.",
              },
              {
                num: "2",
                titre: "Inspecter et jeter les produits contaminés",
                texte: "Cherchez des toiles, larves ou agglomérats dans les paquets. En cas de doute, jetez. Les bocaux en verre et conserves hermétiques peuvent être gardés après nettoyage de l'extérieur.",
              },
              {
                num: "3",
                titre: "Aspirer puis laver les placards",
                texte: "Aspirez les recoins, fissures et joints. Lavez ensuite toutes les surfaces avec du vinaigre blanc dilué — il détruit les œufs résiduels. Séchez bien avant de remettre quoi que ce soit.",
              },
              {
                num: "4",
                titre: "Stocker dans des contenants hermétiques",
                texte: "Transférez tous vos produits secs dans des bocaux en verre ou boîtes hermétiques. Les emballages carton et plastique souple ne protègent pas — les larves peuvent les perforer.",
              },
              {
                num: "5",
                titre: "Poser des pièges à phéromones",
                texte: "Ils capturent les mâles adultes et stoppent la reproduction. Utiles pour surveiller l'efficacité du traitement. Disponibles en jardinerie ou pharmacie.",
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
            Quand appeler un professionnel ?
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-3">
            {[
              { titre: "Infestation récurrente", texte: "Vous avez déjà traité et les mites sont revenues. Les œufs survivent dans des zones que le nettoyage classique n'atteint pas." },
              { titre: "Infestation étendue à plusieurs pièces", texte: "Les mites ont colonisé la cuisine, la cave, le garde-manger. Un traitement insecticide professionnel est nécessaire." },
              { titre: "Logement collectif", texte: "En immeuble, les mites peuvent transiter via les gaines techniques. Sans traiter les parties communes, la réinfestation est inévitable." },
              { titre: "Source impossible à identifier", texte: "Si vous ne trouvez pas d'où vient l'infestation malgré un nettoyage complet, un technicien peut identifier les zones cachées." },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-red-800 text-sm">⚠ {item.titre}</p>
                <p className="text-sm text-gray-700">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Mites alimentaires à Liège ?</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat intervient pour le traitement des mites alimentaires dans toute la région liégeoise.
            Diagnostic complet, traitement ciblé, devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/mites-alimentaires-liege" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Voir le service mites alimentaires
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
            <li><Link href="/mites-alimentaires-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Traitement mites alimentaires Liège — service professionnel</Link></li>
          </ul>
        </section>

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
