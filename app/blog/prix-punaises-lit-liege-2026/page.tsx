import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prix traitement punaises de lit Liège 2026 — Tarifs réels",
  description:
    "Combien coûte un traitement punaises de lit à Liège en 2026 ? Thermique vs chimique, superficie, facteurs de prix. Tarifs réels sans surprise.",
};

const faqs = [
  {
    q: "Quel est le prix moyen d'un traitement punaises de lit à Liège ?",
    a: "Entre 150 € et 450 € selon la superficie et la méthode choisie. Le traitement chimique (insecticide rémanent) est généralement moins cher (150–300 €) que le traitement thermique (250–450 €), mais peut nécessiter une intervention selon le diagnostic. Le traitement thermique est plus rapide et plus efficace sur les œufs.",
  },
  {
    q: "Le traitement thermique vaut-il vraiment son prix plus élevé ?",
    a: "Oui, dans la majorité des cas. Le traitement thermique tue punaises et œufs en une seule session de 6 à 8 heures. Vous pouvez dormir dans la chambre le soir même. Le traitement chimique est moins cher mais l'insecticide n'atteint pas toujours les œufs dans les coutures et recoins profonds. Pour les fortes infestations, le thermique est le choix le plus sûr.",
  },
  {
    q: "Faut-il jeter le matelas ? Est-ce inclus dans le prix ?",
    a: "Non, dans la grande majorité des cas. Jeter le matelas ne résout pas le problème : les punaises vivent dans le cadre de lit, les plinthes, les prises électriques et les fissures murales. Le technicien traite l'ensemble de ces zones. Si le matelas est très endommagé, il peut conseiller son remplacement après traitement.",
  },
  {
    q: "Le traitement punaises de lit est-il remboursé en Belgique ?",
    a: "Non, il n'existe pas de remboursement automatique par les mutuelles belges. Si l'infestation provient d'un logement voisin ou d'une partie commune, la copropriété peut être tenue responsable. Pour les locataires, si le logement était infesté à l'arrivée, le propriétaire peut être mis en cause. Sayonarat fournit un rapport d'intervention sur demande.",
  },
  {
    q: "Y a-t-il des frais cachés dans un traitement punaises de lit ?",
    a: "Chez Sayonarat, le prix communiqué avant intervention est le prix final. Aucun frais de déplacement supplémentaire, aucune facturation à la surprise. La garantie 30 jours est incluse dans toutes nos prestations.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix traitement punaises de lit Liège 2026 — Tarifs réels",
  description: "Guide complet sur les prix des traitements punaises de lit à Liège en 2026. Thermique vs chimique, facteurs de coût, garanties.",
  author: { "@type": "Organization", name: "Sayonarat" },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/prix-punaises-lit-liege-2026" },
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

export default function PrixPunaisesLitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Prix punaises de lit 2026
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#7c3aed" }}>Tarifs</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Prix traitement punaises de lit Liège 2026 — Tarifs réels
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Thermique ou chimique ? Une ou plusieurs sessions ? Ce guide détaille
            les vrais tarifs pratiqués à Liège en 2026, sans langue de bois.
          </p>
        </div>
      </section>

      <article className="py-14 px-4 max-w-3xl mx-auto">

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Tarifs 2026 par type de logement et méthode
        </h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ backgroundColor: "#1B4332", color: "white" }}>
                <th className="px-4 py-3 text-left">Type de logement</th>
                <th className="px-4 py-3 text-left">🧪 Traitement chimique</th>
                <th className="px-4 py-3 text-left">🔥 Traitement thermique</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Studio / chambre (≤ 30 m²)", "150 € – 220 €", "250 € – 320 €"],
                ["Appartement 2 pièces (30–60 m²)", "180 € – 280 €", "300 € – 380 €"],
                ["Appartement 3 pièces (60–90 m²)", "220 € – 320 €", "350 € – 430 €"],
                ["Maison individuelle (> 90 m²)", "280 € – 400 €", "400 € – 600 €"],
                ["Chambre d'hôtel / meublé", "Sur devis", "Sur devis"],
              ].map(([t, c, th], i) => (
                <tr key={t} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{t}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{c}</td>
                  <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{th}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-8 italic">* Tarifs indicatifs pour Liège et communes voisines. Le devis définitif est établi après diagnostic du niveau d&apos;infestation.</p>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          5 facteurs qui font varier le prix
        </h2>
        <div className="space-y-4 mb-10">
          {[
            { n: "1", t: "La méthode choisie", d: "Le traitement thermique (chaleur à 60°C+) est généralement plus coûteux que le traitement chimique, mais détruit punaises et œufs en une seule session. Pour les infestations sévères, c'est souvent le choix le plus économique à terme." },
            { n: "2", t: "La superficie à traiter", d: "Le prix augmente proportionnellement à la surface. Pour une chambre isolée dans un grand appartement, seule la zone infestée peut être traitée — ce qui réduit le coût." },
            { n: "3", t: "L'ampleur de l'infestation", d: "Une infestation débutante (quelques punaises) est moins coûteuse à traiter qu'une infestation installée depuis plusieurs semaines. Agir tôt est toujours moins cher." },
            { n: "4", t: "Le type de mobilier", d: "Cadres de lit en bois massif, têtes de lit rembourrées, bibliothèques encastrées : plus le mobilier est complexe, plus le traitement est long et donc coûteux." },
            { n: "5", t: "La garantie et le suivi", d: "Un traitement professionnel inclut une garantie de 30 jours. Méfiez-vous des offres très basses sans garantie de résultat — elles reviennent souvent plus cher au total." },
          ].map((e) => (
            <div key={e.n} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0" style={{ backgroundColor: "#1B4332", color: "#FBBF24" }}>
                {e.n}
              </div>
              <div>
                <p className="font-bold mb-1" style={{ color: "#1B4332" }}>{e.t}</p>
                <p className="text-sm text-gray-600">{e.d}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Thermique vs chimique : quel traitement choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-3" style={{ color: "#1B4332" }}>Choisir le thermique si…</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Infestation sévère ou installée depuis longtemps", "Vous voulez dormir chez vous dès le soir", "Vous avez des enfants ou des personnes sensibles aux produits chimiques", "Mobilier complexe (têtes de lit, rembourrage)"].map((s) => (
                <li key={s} className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✓</span>{s}</li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🧪</div>
            <h3 className="font-bold text-lg mb-3" style={{ color: "#1B4332" }}>Choisir le chimique si…</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {["Infestation limitée à une zone précise", "Budget plus serré", "Vous pouvez vous absenter 4 à 6h après le traitement", "Logement avec peu de mobilier rembourré"].map((s) => (
                <li key={s} className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✓</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">💡 Méfiez-vous des prix trop bas</p>
          <p className="text-sm text-gray-700 mt-1">
            Un traitement punaises de lit à moins de 100 € est presque toujours un traitement
            partiel, sans garantie, ou réalisé avec des produits non homologués.
            Les punaises de lit sont parmi les nuisibles les plus résistants — un traitement
            incomplet ne fait que déplacer le problème.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/punaises-de-lit-liege"
            style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Voir notre service punaises de lit →
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

        <div className="border-t border-gray-100 pt-8">
          <p className="text-sm font-semibold mb-3" style={{ color: "#1B4332" }}>Articles liés</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/traitement-thermique-vs-chimique-punaises" className="text-sm underline" style={{ color: "#1B4332" }}>Thermique vs chimique : comparatif complet</Link>
            <Link href="/blog/punaises-de-lit-que-faire" className="text-sm underline" style={{ color: "#1B4332" }}>Punaises de lit : que faire ?</Link>
            <Link href="/blog/prix-deratisation-liege-2026" className="text-sm underline" style={{ color: "#1B4332" }}>Prix dératisation 2026</Link>
            <Link href="/punaises-de-lit-liege" className="text-sm underline" style={{ color: "#1B4332" }}>Service punaises Liège</Link>
          </div>
        </div>
      </article>
    </>
  );
}
