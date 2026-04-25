import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Traitement thermique vs chimique : lequel choisir contre les punaises ? — Sayonarat",
  description:
    "Traitement thermique ou chimique contre les punaises de lit ? Comparatif complet : efficacité, prix, durée, contraintes. Pour bien choisir.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Traitement thermique vs chimique : lequel choisir contre les punaises de lit ?",
  description: "Comparatif complet traitement thermique vs chimique pour les punaises de lit. Efficacité, prix, durée, contraintes.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/traitement-thermique-vs-chimique-punaises" },
};

const faq = [
  {
    q: "Le traitement thermique est-il vraiment efficace en un seul passage ?",
    a: "Oui, dans la grande majorité des cas. La chaleur à 60°C+ tue les punaises et leurs œufs quel que soit le stade de développement. C'est l'avantage principal sur le chimique : les insecticides ne pénètrent pas dans les œufs. Un traitement thermique bien conduit donne un résultat complet en une intervention.",
  },
  {
    q: "Le traitement chimique est-il moins efficace ?",
    a: "Non — il est efficace, mais plus lent. Les insecticides professionnels à effet rémanent tuent les punaises qui passent dessus pendant plusieurs semaines. Ils ne détruisent pas les œufs directement, mais les larves qui éclosent sont tuées au contact de la surface traitée. C'est pourquoi on parle parfois de plusieurs semaines pour éradiquer complètement une infestation.",
  },
  {
    q: "Quelle méthode est la moins chère ?",
    a: "Le traitement chimique est généralement moins coûteux que le thermique. Le traitement thermique nécessite du matériel spécialisé (soufflantes, sondes thermiques) qui représente un investissement. Pour un studio ou une chambre, l'écart est souvent de 50 à 150 €.",
  },
  {
    q: "Peut-on combiner les deux méthodes ?",
    a: "Oui, et c'est parfois recommandé pour les infestations sévères. Le thermique élimine la masse des insectes et des œufs, l'insecticide rémanent protège contre les éventuelles réintroductions pendant les semaines suivantes. Cette approche combinée est proposée pour les cas les plus avancés.",
  },
  {
    q: "Le traitement thermique abîme-t-il les meubles ?",
    a: "Certains objets sensibles doivent être retirés avant le traitement : plantes, médicaments, bougies, certains appareils électroniques, vinyles, CD. Le technicien vous fournit une liste complète. Les meubles standards (bois, tissu, métal) supportent sans problème les températures utilisées.",
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

export default function ArticleThermiquVsChimiquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Thermique vs chimique
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Punaises de lit</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Traitement thermique vs chimique :<br />lequel choisir ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">En résumé</p>
          <p>
            <strong>Thermique</strong> = plus rapide (résultat en 1 jour), plus cher, idéal si vous
            voulez en finir vite. <strong>Chimique</strong> = moins coûteux, efficace mais sur
            plusieurs semaines, adapté aux grandes surfaces. Les deux sont fiables entre les mains
            d&apos;un professionnel.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Tableau comparatif
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Critère</th>
                  <th className="px-4 py-2 text-left">🔥 Thermique</th>
                  <th className="px-4 py-2 text-left">💊 Chimique</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Principe", "Chaleur à 60°C+ dans tout le logement", "Insecticides rémanents sur zones de ponte"],
                  ["Efficacité sur les œufs", "Oui — détruits par la chaleur", "Indirecte — larves tuées à l'éclosion"],
                  ["Durée de l'intervention", "6 à 8 heures", "1 à 3 heures"],
                  ["Retour dans le logement", "Le soir même", "2 à 4 heures après"],
                  ["Nombre de passages", "1 dans la majorité des cas", "Selon diagnostic"],
                  ["Prix indicatif", "250 € – 500 €", "150 € – 380 €"],
                  ["Produits chimiques", "Aucun", "Oui (homologués)"],
                  ["Objets à retirer", "Quelques sensibles", "Zones traitées accessibles"],
                  ["Idéal pour", "Résultat rapide, petits logements", "Grandes surfaces, budget serré"],
                ].map(([crit, therm, chim], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 font-medium">{crit}</td>
                    <td className="px-4 py-2">{therm}</td>
                    <td className="px-4 py-2">{chim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Comment fonctionne le traitement thermique ?
          </h2>
          <p className="mb-3">
            Le technicien installe des soufflantes électriques dans le logement et monte progressivement
            la température à 55–60°C. Des sondes thermiques placées dans les zones les plus froides
            (intérieur des matelas, dessous des meubles) garantissent que la chaleur pénètre partout.
          </p>
          <p>
            À 56°C pendant 30 minutes, toutes les punaises de lit et leurs œufs sont détruits quel que
            soit le stade de développement. C&apos;est la seule méthode qui élimine les œufs directement —
            et c&apos;est pourquoi elle donne un résultat complet en une seule intervention dans la grande
            majorité des cas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Comment fonctionne le traitement chimique ?
          </h2>
          <p className="mb-3">
            Le technicien applique un insecticide professionnel à effet rémanent (pyréthrines de synthèse
            ou néonicotinoïdes homologués) sur toutes les zones de ponte identifiées lors du diagnostic :
            coutures de matelas, cadre de lit, plinthes, prises électriques, fissures.
          </p>
          <p>
            Les insecticides ne pénètrent pas dans les œufs déjà pondus. Les larves qui éclosent
            dans les 2 à 3 semaines suivantes sont tuées au contact de la surface traitée.
            L&apos;élimination complète prend donc plusieurs semaines — mais le résultat est fiable
            avec les produits professionnels, contrairement aux sprays du commerce.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-3" style={{ color: "#1B4332" }}>🔥 Choisissez le thermique si…</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Vous voulez en finir en une journée",
                "Vous préférez éviter les produits chimiques",
                "Vous avez des enfants en bas âge ou des animaux",
                "L'infestation est récente et localisée",
                "Vous avez un locataire ou une revente prévue",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-orange-500">→</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-3" style={{ color: "#1B4332" }}>💊 Choisissez le chimique si…</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Votre budget est plus serré",
                "Le logement est grand (150 m²+)",
                "L'infestation est légère à modérée",
                "Vous pouvez vous absenter pendant le traitement",
                "Il n'y a pas d'objets thermosensibles à retirer",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-blue-500">→</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Punaises de lit à Liège — Quel traitement pour vous ?</p>
          <p className="text-sm text-gray-600 mb-4">
            Le technicien vous conseille la méthode adaptée après diagnostic. Devis gratuit sous 24h.
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
            <li><Link href="/blog/reconnaitre-punaise-de-lit" className="underline font-medium" style={{ color: "#1B4332" }}>Comment reconnaître une punaise de lit ?</Link></li>
            <li><Link href="/blog/punaises-lit-voyage-eviter" className="underline font-medium" style={{ color: "#1B4332" }}>Punaises de lit en voyage : comment éviter de les ramener ?</Link></li>
            <li><Link href="/punaises-de-lit-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Traitement punaises de lit Liège</Link></li>
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
