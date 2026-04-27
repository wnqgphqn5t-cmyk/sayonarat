import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  title: "Fourmis dans la maison : que faire ? Guide complet — Sayonarat Liège",
  description:
    "Des fourmis dans votre maison à Liège ? Voici comment identifier l'espèce, les étapes immédiates et quand appeler un professionnel.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fourmis dans la maison : que faire ? Guide complet",
  description: "Identifier l'espèce de fourmis, étapes immédiates, erreurs à éviter et traitement professionnel à Liège.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://sayonarat.be/blog/fourmis-maison-que-faire" },
};

const faq = [
  {
    q: "Pourquoi les fourmis entrent-elles dans la maison ?",
    a: "Les fourmis cherchent de la nourriture (sucres, protéines) et de l'eau. Elles entrent via les fissures, joints de fenêtres, tuyauteries et gaines électriques. Une fois qu'une ouvrière trouve une source alimentaire, elle laisse une piste chimique (phéromones) que toute la colonie suit. C'est pourquoi une invasion peut sembler surgir de nulle part en quelques heures.",
  },
  {
    q: "Les fourmis noires sont-elles dangereuses ?",
    a: "Les fourmis noires de jardin (Lasius niger) ne piquent pas et ne transmettent pas de maladies. Elles sont une nuisance alimentaire et structurelle (elles creusent sous les dalles et fondations). Les fourmis pharaons, en revanche, peuvent contaminer des milieux médicaux et sont vecteurs potentiels de bactéries.",
  },
  {
    q: "Peut-on éliminer les fourmis soi-même ?",
    a: "Partiellement. Les produits du commerce (spray, poudre) tuent les fourmis visibles mais pas la reine. Sans éliminer la reine, la colonie se reconstitue en quelques semaines. Les appâts insecticides (gel ou granulés) sont plus efficaces car les ouvrières les ramènent au nid. Pour les fourmis pharaons, seul un traitement professionnel ciblé fonctionne.",
  },
  {
    q: "Qu'est-ce que la fourmi pharaon et pourquoi est-elle difficile à éliminer ?",
    a: "La fourmi pharaon (Monomorium pharaonis) est une espèce tropicale de 2mm, jaune-orangée, qui colonise les bâtiments chauffés. Elle est particulièrement difficile à éliminer car sa colonie peut avoir plusieurs reines et se diviser (phénomène de scissiparité) si elle se sent menacée par un traitement inadapté. Un spray la dispersera dans tout l'immeuble au lieu de l'éliminer.",
  },
  {
    q: "Combien coûte un traitement anti-fourmis à Liège ?",
    a: "Entre 120 € et 400 € selon l'espèce et la superficie. Les fourmis pharaons nécessitent un traitement plus complexe et plus coûteux. Devis gratuit sous 24h chez Sayonarat.",
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

export default function ArticleFourmisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Fourmis maison
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Fourmis dans la maison :<br />que faire ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Si vous avez des fourmis : <strong>ne vaporisez pas de spray</strong> — ça disperse
            la colonie sans tuer la reine. Identifiez l&apos;espèce, bloquez les points d&apos;entrée,
            posez des appâts insecticides. Pour les fourmis pharaons en immeuble,
            appelez directement un professionnel.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Quelle espèce de fourmi avez-vous ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Espèce</th>
                  <th className="px-4 py-2 text-left">Taille</th>
                  <th className="px-4 py-2 text-left">Couleur</th>
                  <th className="px-4 py-2 text-left">Difficulté</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fourmi noire de jardin", "3–5 mm", "Noire", "Modérée"],
                  ["Fourmi pharaon", "1,5–2 mm", "Jaune-orangée", "Très élevée ⚠️"],
                  ["Fourmi charpentière", "6–12 mm", "Noire", "Élevée"],
                  ["Fourmi d'Argentine", "2–3 mm", "Brun clair", "Élevée"],
                ].map(([esp, taille, couleur, diff], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 font-medium">{esp}</td>
                    <td className="px-4 py-2">{taille}</td>
                    <td className="px-4 py-2">{couleur}</td>
                    <td className="px-4 py-2">{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Ce qu&apos;il ne faut pas faire
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 space-y-3">
            {[
              { titre: "Ne pas vaporiser de spray insecticide", texte: "Le spray tue les ouvrières visibles mais alarme la colonie. Les fourmis pharaons se divisent et colonisent de nouvelles zones — vous aggravez le problème." },
              { titre: "Ne pas boucher les entrées en urgence", texte: "Boucher sans traiter force les fourmis à trouver d'autres passages — souvent à l'intérieur du logement." },
              { titre: "Ne pas utiliser du vinaigre ou du citron", texte: "Ces remèdes maison perturbent temporairement les pistes chimiques mais n'éliminent pas la colonie. Effet garanti : 48h." },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-bold text-red-800 text-sm">✗ {item.titre}</p>
                <p className="text-sm text-gray-700">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les étapes efficaces
          </h2>
          <div className="space-y-4">
            {[
              { num: "1", titre: "Identifier l'espèce", texte: "Petite et jaune-orangée = fourmi pharaon (traitement pro obligatoire). Grande et noire = fourmi charpentière ou de jardin (traitement possible soi-même avec appâts)." },
              { num: "2", titre: "Éliminer les sources alimentaires", texte: "Ranger tous les aliments sucrés dans des boîtes hermétiques. Nettoyer les miettes, taches de miel, jus de fruits. Les fourmis abandonnent les zones sans nourriture." },
              { num: "3", titre: "Poser des appâts insecticides", texte: "Les appâts en gel ou granulés sont rapportés au nid par les ouvrières et empoisonnent la reine. C'est la seule méthode DIY qui élimine la colonie entière. Patience requise : 1 à 3 semaines." },
              { num: "4", titre: "Bloquer les points d'entrée après traitement", texte: "Une fois la colonie éliminée, colmatez les fissures, joints de fenêtres et passages de tuyauteries avec du mastic silicone." },
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
            La fourmi pharaon à Liège : un cas particulier
          </h2>
          <p className="mb-3">
            La fourmi pharaon est l&apos;espèce la plus problématique dans les immeubles liégeois.
            Elle affectionne les bâtiments chauffés toute l&apos;année — résidences, hôpitaux, restaurants.
            Une colonie peut compter plusieurs millions d&apos;individus répartis en sous-colonies
            avec plusieurs reines.
          </p>
          <p>
            Le moindre traitement inadapté (spray, produit répulsif) déclenche la <strong>scissiparité</strong> :
            la colonie se divise en plusieurs sous-colonies qui migrent dans tout le bâtiment.
            Un immeuble de 20 appartements peut être entièrement colonisé en quelques semaines
            après un traitement amateur mal conduit.
          </p>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Fourmis à Liège — Traitement professionnel</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat intervient pour le traitement des fourmis (toutes espèces) dans toute la région liégeoise.
            Devis gratuit sous 24h, intervention sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/fourmis-liege" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Voir le service fourmis Liège
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
            <li><Link href="/blog/mites-alimentaires-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Mites alimentaires : que faire ?</Link></li>
            <li><Link href="/fourmis-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Traitement fourmis Liège — service professionnel</Link></li>
          </ul>
        </section>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Biocides et produits antiparasitaires homologués",
              href: "https://www.health.belgium.be/fr/biocides",
            },
            {
              label: "AFSCA — Nuisibles et hygiène dans l'habitat",
              href: "https://www.afsca.be/autocontrole/guidesautocontrole/",
            },
            {
              label: "ECDC — Pest control in domestic environments",
              href: "https://www.ecdc.europa.eu/en",
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
