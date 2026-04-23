import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prix d'une dératisation à Liège en 2026 : tarifs réels — Sayonarat",
  description:
    "Combien coûte une dératisation à Liège ? Tarifs réels 2026, ce qui fait varier le prix, ce que comprend une intervention pro. Sans frais cachés.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix d'une dératisation à Liège en 2026 : ce qu'il faut vraiment savoir",
  description:
    "Tarifs réels, facteurs qui font varier le prix et ce que comprend une intervention professionnelle de dératisation à Liège.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: {
    "@type": "Organization",
    name: "Sayonarat",
    url: "https://sayonarat.be",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sayonarat.be/blog/prix-deratisation-liege-2026",
  },
};

const faq = [
  {
    q: "Quel est le prix moyen d'une dératisation à Liège ?",
    a: "Pour un appartement ou une maison standard, le prix d'une dératisation professionnelle à Liège se situe entre 150 € et 350 € pour 1 à 2 passages. Le prix varie selon la superficie, le type de rongeur et l'accessibilité des zones infestées.",
  },
  {
    q: "La dératisation est-elle remboursée par l'assurance ou la commune de Liège ?",
    a: "En Belgique, la dératisation d'une habitation privée n'est généralement pas remboursée. Cependant, si l'infestation provient d'espaces publics ou est liée à un défaut du propriétaire, le locataire peut se retourner contre lui. Certaines mutuelles couvrent partiellement les frais en cas de leptospirose diagnostiquée.",
  },
  {
    q: "Pourquoi éviter les entreprises trop bon marché ?",
    a: "Une dératisation à moins de 80 € est souvent un traitement partiel ou sans suivi. Les rongeurs recolonisent rapidement si tous les points d'entrée ne sont pas colmatés. Un vrai traitement comprend : diagnostic, pose d'appâts rodenticides certifiés, colmatage, et au moins 1 passage de contrôle.",
  },
  {
    q: "Combien de passages sont nécessaires pour éliminer les rats ?",
    a: "En général, 2 à 3 passages sur 2 à 3 semaines sont nécessaires. Le premier pose les appâts, le deuxième vérifie les captures et renouvelle les stations, le troisième confirme l'éradication et procède au colmatage des entrées.",
  },
];

export default function ArticlePrixPage() {
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
            <Link href="/blog" className="hover:text-white">Blog</Link> › Prix dératisation 2026
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">
              Tarifs
            </span>
            <span className="text-xs text-green-300">23 avril 2026 · 4 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Prix d&apos;une dératisation à Liège en 2026 :<br />
            ce qu&apos;il faut vraiment savoir
          </h1>
          <p className="text-green-100 text-lg">
            Par <strong>Victor F.</strong> — Expert en lutte antiparasitaire à Liège
          </p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        {/* Réponse directe */}
        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Le prix d&apos;une dératisation professionnelle à Liège varie entre <strong>150 € et 450 €</strong>,
            selon la superficie du logement, le type de rongeur et le nombre de passages nécessaires.
            Une intervention sérieuse comprend toujours un diagnostic, le traitement, un ou deux passages
            de contrôle et le colmatage des points d&apos;entrée.
          </p>
        </div>

        <p>
          La première question que posent nos clients, c&apos;est toujours le prix. C&apos;est normal.
          Mais avant de comparer des devis, il faut comprendre ce qui justifie les écarts — parfois
          du simple au triple pour une même prestation. Voici une grille tarifaire réelle, sans
          langue de bois.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Tarifs indicatifs par type de logement (Liège, 2026)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-3 text-left">Type de bien</th>
                  <th className="px-4 py-3 text-left">Fourchette</th>
                  <th className="px-4 py-3 text-left">Passages inclus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Studio / appartement", "150 € – 220 €", "2 passages"],
                  ["Maison unifamiliale", "220 € – 350 €", "2–3 passages"],
                  ["Maison avec cave / jardin", "300 € – 450 €", "3 passages"],
                  ["Commerce / restaurant", "350 € – 600 €", "3 passages + contrat"],
                  ["Cave ou sous-sol seul", "120 € – 200 €", "2 passages"],
                ].map(([type, prix, passages], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-900">{type}</td>
                    <td className="px-4 py-3 font-semibold" style={{ color: "#1B4332" }}>{prix}</td>
                    <td className="px-4 py-3 text-gray-600">{passages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Tarifs indicatifs pour la région de Liège. Prix hors TVA. Devis gratuit pour votre situation exacte.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Les 5 facteurs qui font varier le prix
          </h2>
          <div className="space-y-5">
            {[
              {
                titre: "1. La superficie et l'accessibilité",
                texte:
                  "Un appartement de 60 m² en rez-de-chaussée est plus rapide à traiter qu'une maison de 200 m² avec cave, grenier et jardin. L'accessibilité des zones infestées (faux-plafonds, vide sanitaire, combles non aménagés) influence directement le temps de travail.",
              },
              {
                titre: "2. Le type de rongeur",
                texte:
                  "Les rats sont plus difficiles à éliminer que les souris : plus méfiants, ils testent les nouvelles stations avant de consommer l'appât. Un traitement contre les rats nécessite généralement plus de passages qu'un traitement souris.",
              },
              {
                titre: "3. L'ampleur de l'infestation",
                texte:
                  "Une colonie établie depuis plusieurs mois avec terriers multiples dans le jardin est plus complexe à traiter qu'une présence récente. La saison joue aussi : les infestations automnales (migration vers l'intérieur) sont souvent plus étendues.",
              },
              {
                titre: "4. Le colmatage inclus ou non",
                texte:
                  "Certains prestataires proposent un traitement sans colmatage des entrées. C'est une erreur : sans fermeture des points de passage (tuyaux, fissures, joints détériorés), les rongeurs reviennent. Vérifiez que le colmatage est inclus dans le devis.",
              },
              {
                titre: "5. Le nombre de passages de contrôle",
                texte:
                  "Un seul passage ne suffit presque jamais. Un traitement professionnel sérieux comprend un diagnostic initial, le traitement, puis 1 à 2 passages de contrôle à 1 semaine d'intervalle pour vérifier l'efficacité et renouveler les stations si nécessaire.",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 pl-4" style={{ borderColor: "#1B4332" }}>
                <h3 className="font-bold text-gray-900 mb-1">{item.titre}</h3>
                <p className="text-sm">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Ce que comprend une vraie intervention professionnelle
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              "Diagnostic sur place : identification du rongeur, cartographie des points d'entrée et de passage",
              "Pose de stations d'appâtage sécurisées (conformes à la réglementation biocides belge)",
              "Utilisation de rodenticides certifiés, efficaces dès 5 à 7 jours",
              "Conseils immédiats : stockage des aliments, hygiène, zones à risque",
              "Passage de contrôle à J+7 ou J+10 : vérification, renouvellement si nécessaire",
              "Colmatage des principaux points d'entrée identifiés",
              "Rapport d'intervention (utile pour les propriétaires et commerces)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600 font-bold flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Méfiez-vous des prix trop bas
          </h2>
          <p>
            À Liège, on voit régulièrement des offres à 79 € ou 99 € pour une &quot;dératisation complète&quot;.
            Dans la plupart des cas, il s&apos;agit d&apos;un passage unique sans diagnostic sérieux ni colmatage.
            Résultat : les rongeurs recolonisent en 4 à 8 semaines et il faut recommencer — souvent
            plus cher que si on avait fait un travail sérieux dès le départ.
          </p>
          <p className="mt-3">
            Un prestataire certifié vous remettra systématiquement une <strong>fiche de données de sécurité</strong>
            des produits utilisés et un rapport d&apos;intervention. C&apos;est une obligation légale en Belgique.
          </p>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Obtenez votre devis gratuit</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat vous répond sous 24h. Pas de frais cachés, pas de traitement partiel.
            Intervention possible sous 48h dans toute la région liégeoise.
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
              href="/contact"
              className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white"
              style={{ backgroundColor: "#1B4332" }}
            >
              Devis gratuit en ligne
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Questions fréquentes sur les prix
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
                Comment savoir si on a des rats chez soi ? Les 7 signes
              </Link>
            </li>
            <li>
              <Link href="/blog/punaises-de-lit-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>
                Punaises de lit : que faire en cas d&apos;infestation à Liège ?
              </Link>
            </li>
            <li>
              <Link href="/deratisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Dératisation Liège — service professionnel
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
            <p>Fondateur de Sayonarat — Spécialiste en lutte antiparasitaire à Liège depuis 2022.</p>
          </div>
        </div>

      </article>
    </>
  );
}
