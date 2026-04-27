import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Cafards dans un appartement : que faire ? Guide complet Liège",
  description:
    "Cafards dans votre appartement à Liège ? Les erreurs à éviter, les causes réelles, et la seule méthode qui fonctionne vraiment. Guide pratique.",
};

const faqs = [
  {
    q: "Pourquoi ai-je des cafards dans mon appartement même propre ?",
    a: "La propreté limite les cafards mais ne les empêche pas. Ils arrivent via les colis, les meubles d'occasion, les gaines techniques communes, ou les voisins infestés. Dans un immeuble, une infestation sur un palier peut se propager à tout l'étage en quelques semaines via les canalisation et les fissures.",
  },
  {
    q: "Mon propriétaire doit-il payer le traitement cafards ?",
    a: "Si l'infestation existait avant votre emménagement ou provient des parties communes, c'est au propriétaire ou à la copropriété d'agir. Si l'infestation est liée à vos habitudes (mauvaise hygiène), c'est à votre charge. En cas de doute, documentez l'infestation dès sa découverte et signalez-la par écrit à votre propriétaire.",
  },
  {
    q: "Combien de temps dure un traitement cafards dans un appartement ?",
    a: "L'intervention elle-même dure entre 1h et 2h pour un appartement standard. Les résultats du gel insecticide apparaissent en 3 à 7 jours. Pour une infestation importante, une vérification est faite selon le diagnostic initial. La garantie couvre 30 jours.",
  },
  {
    q: "Faut-il vider les placards avant le traitement cafards ?",
    a: "Pour un traitement au gel insecticide : non, il n'est pas nécessaire de tout vider. Le technicien applique le gel dans les zones de transit et de ponte (charnières, joins, dessous des appareils). Pour un traitement par pulvérisation : oui, les placards de cuisine doivent être vidés et les denrées alimentaires mises à l'abri.",
  },
  {
    q: "Les cafards peuvent-ils revenir après le traitement ?",
    a: "Si l'infestation provient de voisins ou des parties communes non traitées, oui. C'est pourquoi la garantie 30 jours est importante. Si des cafards réapparaissent dans ce délai, une nouvelle intervention est réalisée gratuitement. Pour éviter la récidive, signalez l'infestation à votre syndicat si vous êtes en immeuble.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cafards dans un appartement : que faire ? Guide complet",
  description: "Guide pratique sur les cafards en appartement à Liège : causes, erreurs à éviter, méthodes efficaces et démarches pour les locataires.",
  author: { "@type": "Organization", name: "Sayonarat" },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/cafards-appartement-que-faire" },
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

export default function CafardsAppartementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Cafards appartement
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#1B4332", border: "1px solid #4ade80" }}>Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cafards dans un appartement : que faire ? Guide complet
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Un appartement n&apos;est pas une maison individuelle — les cafards circulent entre
            logements via les gaines et les cloisons. Ce guide vous explique comment agir
            vite et efficacement.
          </p>
        </div>
      </section>

      <article className="py-14 px-4 max-w-3xl mx-auto">

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          La première erreur : le spray
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Réflexe naturel mais contre-productif. En vaporisant un insecticide en aérosol,
          vous tuez les cafards visibles — soit 10 à 20 % de la colonie au maximum.
          Le reste se disperse dans les murs, les gaines et les logements voisins.
          48 heures plus tard, les cafards recolonisent les zones traitées.
        </p>
        <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-xl mb-8">
          <p className="font-bold text-red-800 mb-1">❌ Ce qu&apos;il ne faut pas faire</p>
          <ul className="text-sm text-red-700 space-y-1 mt-2">
            <li>• Spray insecticide du commerce (disperse la colonie)</li>
            <li>• Boucher les interstices avant le traitement (emprisonne les cafards dans les murs)</li>
            <li>• Attendre que ça passe (ça ne passe pas — la colonie double toutes les 6 semaines)</li>
            <li>• Traiter uniquement la cuisine (les cafards sont aussi dans les prises, les gaines, les plinthes)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi les cafards s&apos;installent en appartement à Liège
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Les immeubles liégeois des quartiers Sainte-Marguerite, Bressoux, Outremeuse
          et Glain — souvent construits avant les années 80 — présentent des
          caractéristiques qui facilitent la propagation des cafards : gaines
          techniques communes, isolation déficiente entre appartements, et
          canalisations vieillissantes où les cafards circulent librement.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Les cafards arrivent souvent via :
        </p>
        <ul className="space-y-2 mb-8 text-gray-700">
          {[
            "Des colis en carton ondulé (les oothèques adhèrent parfaitement au carton)",
            "Des meubles ou électroménagers d'occasion achetés sur Marketplace ou aux puces",
            "Les appartements voisins infestés (via les gaines, joints et fissures)",
            "Les poubelles communes de l'immeuble",
            "Les livraisons de courses ou de repas à domicile",
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">→</span>
              <span className="text-sm">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          La méthode qui fonctionne : le gel insecticide professionnel
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le gel insecticide professionnel est la méthode de référence pour les
          appartements. Contrairement aux sprays, il agit par ingestion et transmission :
          un cafard qui mange le gel contamine d&apos;autres individus en les touchant,
          en partageant de la nourriture ou simplement via ses excréments. La colonie
          est détruite de l&apos;intérieur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {[
            { emoji: "✅", t: "Avantages du gel", items: ["Pas d'odeur, pas d'évacuation du logement", "Efficace sur les zones inaccessibles", "Action en 3 à 7 jours", "Cible toute la colonie, y compris les œufs"] },
            { emoji: "⚙️", t: "Application professionnelle", items: ["Diagnostic des zones de transit et de ponte", "Application ciblée dans les recoins", "Produits homologués en Belgique", "Garantie 30 jours sur le résultat"] },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl mb-2">{c.emoji}</div>
              <h3 className="font-bold mb-3" style={{ color: "#1B4332" }}>{c.t}</h3>
              <ul className="space-y-1">
                {c.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-green-600">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          En immeuble : coordonner avec la copropriété
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Traiter un seul appartement dans un immeuble infesté est rarement suffisant.
          Si vous êtes en copropriété, signalez l&apos;infestation au syndic par écrit
          (mail avec accusé de réception). La copropriété a l&apos;obligation de traiter
          les parties communes si elles sont source de contamination.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Sayonarat peut coordonner une intervention multi-logements : traitement
          simultané de plusieurs appartements + parties communes pour éliminer
          définitivement la source. <Link href="/blog/cafards-immeuble-responsabilite" className="underline font-medium" style={{ color: "#1B4332" }}>Voir notre guide sur les responsabilités en immeuble →</Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/cafards-liege"
            style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Voir notre service cafards Liège →
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
              label: "SPF Santé Publique — Biocides et produits antiparasitaires homologués",
              href: "https://www.health.belgium.be/fr/biocides",
            },
            {
              label: "AFSCA — Hygiène alimentaire et nuisibles",
              href: "https://www.afsca.be/autocontrole/guidesautocontrole/",
            },
            {
              label: "Sciensano — Maladies transmises par les insectes",
              href: "https://www.sciensano.be/fr/maladies-infectieuses",
            },
          ]}
        />

        <div className="border-t border-gray-100 pt-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Articles liés</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/cafards-cuisine-que-faire" className="text-sm underline" style={{ color: "#1B4332" }}>Cafards dans la cuisine</Link>
            <Link href="/blog/cafards-immeuble-responsabilite" className="text-sm underline" style={{ color: "#1B4332" }}>Cafards en immeuble : responsabilités</Link>
            <Link href="/cafards-liege" className="text-sm underline" style={{ color: "#1B4332" }}>Service cafards Liège</Link>
            <Link href="/desinsectisation-liege" className="text-sm underline" style={{ color: "#1B4332" }}>Désinsectisation Liège</Link>
          </div>
        </div>
      </article>
    </>
  );
}
