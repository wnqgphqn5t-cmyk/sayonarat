import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désinsectisation Liège — Cafards, fourmis, blattes | Sayonarat",
  description:
    "Désinsectisation professionnelle à Liège. Traitement cafards, fourmis, blattes, moustiques. Intervention sous 24h, produits homologués, résultat garanti.",
};

const insectes = [
  { icon: "🪳", label: "Cafards & blattes" },
  { icon: "🐜", label: "Fourmis" },
  { icon: "🦟", label: "Moustiques" },
  { icon: "🪰", label: "Mouches" },
  { icon: "🐝", label: "Guêpes" },
  { icon: "🦂", label: "Araignées" },
];

const faqs = [
  {
    q: "Comment savoir si j'ai des cafards chez moi ?",
    a: "Présence d'excréments noirs (comme du poivre), odeur musquée caractéristique, traces de mue, et insectes actifs la nuit dans la cuisine ou les sanitaires.",
  },
  {
    q: "Les traitements désinsectisation sont-ils efficaces contre tous les insectes ?",
    a: "Oui. Nos techniciens adaptent le traitement au type d'insecte : gel anti-cafards, poudres insecticides, fumigation ou traitement biologique selon les cas.",
  },
  {
    q: "Combien de temps après le traitement dois-je quitter le logement ?",
    a: "Généralement 2 à 4 heures selon le produit utilisé. Le technicien vous indique le délai précis avant l'intervention.",
  },
  {
    q: "Combien coûte une désinsectisation à Liège ?",
    a: "Entre 80 € et 180 € selon la superficie et le type d'insecte. Devis gratuit sous 24h.",
  },
  {
    q: "Faut-il une deuxième intervention ?",
    a: "Pour les cafards, une deuxième passage à J+15 est recommandé pour éliminer les œufs éclos. Elle est incluse dans nos formules garanties.",
  },
];

export default function DesinsectisationLiegePage() {
  return (
    <>
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Désinsectisation Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Liège — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Cafards, fourmis, blattes ou moustiques à Liège ? Un technicien certifié intervient
            chez vous sous 24h avec des produits homologués et sans danger pour votre famille.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          Insectes traités à Liège
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {insectes.map((i) => (
            <div key={i.label} className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
              <span className="text-2xl">{i.icon}</span>
              <span className="font-medium text-sm" style={{ color: "#1B4332" }}>{i.label}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi choisir un professionnel pour la désinsectisation ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Les produits disponibles en grande surface traitent les insectes visibles mais n&apos;éliminent
          pas les nids, œufs et colonies cachées. À Liège, la densité des immeubles anciens et
          les caves humides favorisent la prolifération des cafards et fourmis.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Un professionnel identifie les zones infestées, applique un traitement ciblé et réalise
          un suivi pour s&apos;assurer de l&apos;élimination complète. Le gel anti-cafards est par exemple
          10 fois plus efficace que les sprays du commerce.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
          <p className="font-semibold text-gray-800">📊 Données Liège</p>
          <p className="text-sm text-gray-700 mt-1">
            Les cafards (blattes germaniques) peuvent se reproduire à raison de 300 individus par
            femelle par an. À Liège, 1 immeuble sur 8 en centre-ville signale une infestation
            chaque année selon les données de la Ville.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Désinsectisation Liège
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Insectes détectés dans votre logement ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          N&apos;attendez pas que l&apos;infestation s&apos;étende. Devis gratuit sous 24h.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
        >
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
