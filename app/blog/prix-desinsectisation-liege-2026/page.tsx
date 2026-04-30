import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Prix d'une désinsectisation à Liège en 2026 — Sayonarat",
  description:
    "Combien coûte une désinsectisation à Liège ? Tarifs réels par type d'insecte, facteurs qui font varier le prix, sans frais cachés.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prix d'une désinsectisation à Liège en 2026",
  description: "Tarifs réels d'une désinsectisation à Liège selon le type d'insecte et la superficie.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-27",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://www.sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.sayonarat.be/blog/prix-desinsectisation-liege-2026" },
};

const faq = [
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui. Chez Sayonarat, le devis est gratuit et sans engagement. Vous recevez une estimation sous 24h après nous avoir décrit votre situation. Aucun technicien ne se déplace pour établir un devis — tout se fait par téléphone ou formulaire.",
  },
  {
    q: "Faut-il payer si le traitement ne fonctionne pas ?",
    a: "Non. Sayonarat offre une garantie 30 jours : si les insectes réapparaissent dans le mois suivant l'intervention, un technicien revient sans frais supplémentaires.",
  },
  {
    q: "Le prix inclut-il les produits utilisés ?",
    a: "Oui. Le tarif annoncé comprend le déplacement, le diagnostic, les produits insecticides professionnels et le rapport d'intervention. Aucun supplément produit ne s'applique.",
  },
  {
    q: "Pourquoi les prix varient-ils autant selon les prestataires ?",
    a: "Les écarts reflètent la qualité des produits (homologués vs génériques), l'expérience du technicien et les garanties offertes. Un prix très bas signifie souvent l'absence de diagnostic et de garantie — les deux éléments essentiels d'un traitement efficace.",
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

const tarifs = [
  { insecte: "Cafards (appartement)", fourchette: "120 € – 250 €", passages: "Selon diagnostic", note: "Gel professionnel, garantie 30j" },
  { insecte: "Cafards (maison)", fourchette: "180 € – 350 €", passages: "Selon diagnostic", note: "Selon superficie" },
  { insecte: "Fourmis noires", fourchette: "120 € – 250 €", passages: "Selon diagnostic", note: "Appât insecticide ciblé" },
  { insecte: "Fourmis pharaons", fourchette: "200 € – 400 €", passages: "Selon diagnostic", note: "Traitement complexe, multi-passages" },
  { insecte: "Nid de guêpes (accessible)", fourchette: "90 € – 180 €", passages: "1 passage nocturne", note: "Destruction garantie" },
  { insecte: "Nid de frelons", fourchette: "120 € – 220 €", passages: "1 passage nocturne", note: "Frelon asiatique : tarif majoré" },
  { insecte: "Mites alimentaires", fourchette: "120 € – 280 €", passages: "Selon diagnostic", note: "Selon ampleur" },
  { insecte: "Moustiques (jardin)", fourchette: "90 € – 200 €", passages: "1 passage", note: "Traitement larvicide" },
];

export default function ArticlePrixDesinsectisationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Prix désinsectisation
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Tarifs</span>
            <span className="text-xs text-green-300">27 avril 2026 · 4 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Prix d'une désinsectisation<br />à Liège en 2026
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">En résumé</p>
          <p>
            Une désinsectisation à Liège coûte entre <strong>120 € et 400 €</strong> selon le type
            d'insecte et la superficie. Les nids de guêpes sont les moins chers (90–180 €),
            les fourmis pharaons les plus complexes (200–400 €). Devis gratuit sous 24h chez Sayonarat.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Tarifs par type d'insecte à Liège
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Insecte</th>
                  <th className="px-4 py-2 text-left">Fourchette</th>
                  <th className="px-4 py-2 text-left hidden md:table-cell">Passages</th>
                  <th className="px-4 py-2 text-left hidden md:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 font-medium">{t.insecte}</td>
                    <td className="px-4 py-2 font-bold" style={{ color: "#1B4332" }}>{t.fourchette}</td>
                    <td className="px-4 py-2 hidden md:table-cell text-gray-500">{t.passages}</td>
                    <td className="px-4 py-2 hidden md:table-cell text-gray-500">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
          <p className="font-semibold text-amber-800 text-sm">🌿 Printemps 2026 : saison des nids de guêpes et fourmis</p>
          <p className="text-sm text-gray-700 mt-1">
            La saison des guêpes et frelons démarre en avril — les nids traités tôt (avril-mai) coûtent
            moins cher que les nids d'été (colonies plus grandes, intervention plus longue).
            Pour les fourmis, avril-mai est aussi le pic d'invasion : intervenir maintenant limite l'étendue du traitement.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Ce qui fait varier le prix
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              { titre: "Le type d'insecte", desc: "Les fourmis pharaons et les punaises de lit nécessitent plusieurs passages et des produits spécifiques — ce sont les traitements les plus coûteux." },
              { titre: "La superficie du logement", desc: "Un studio de 35m² et une maison de 180m² ne requièrent pas la même quantité de produit ni le même temps d'intervention." },
              { titre: "L'ampleur de l'infestation", desc: "Une infestation détectée tôt (quelques individus) coûte moins cher à traiter qu'une infestation établie depuis plusieurs mois." },
              { titre: "L'accessibilité", desc: "Un nid de guêpes au sol coûte moins cher à traiter qu'un nid en toiture nécessitant une nacelle ou une échelle de toit." },
              { titre: "Le nombre de passages", desc: "Le nombre d'interventions est déterminé après diagnostic selon l'ampleur de l'infestation. La garantie 30 jours couvre un retour sans frais si nécessaire." },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="text-green-600 font-bold flex-shrink-0">→</span>
                <div>
                  <span className="font-semibold" style={{ color: "#1B4332" }}>{item.titre} : </span>
                  <span>{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Devis gratuit sous 24h</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat vous fournit un tarif précis après description de votre situation.
            Aucun déplacement requis pour le devis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/contact" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Devis en ligne gratuit
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
            <li><Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>Prix d'une dératisation à Liège en 2026</Link></li>
            <li><Link href="/blog/cafards-cuisine-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Cafards dans la cuisine : que faire ?</Link></li>
            <li><Link href="/desinsectisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Désinsectisation Liège — service principal</Link></li>
          </ul>
        </section>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Liste des biocides autorisés en Belgique",
              href: "https://www.health.belgium.be/fr/liste-des-biocides-autorises-et-rapport-annuel",
            },
            {
              label: "SPF Économie — Transparence des prix des services en Belgique",
              href: "https://economie.fgov.be/fr/themes/prix",
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
