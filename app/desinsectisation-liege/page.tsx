import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Désinsectisation Liège — Cafards, fourmis, blattes | Sayonarat",
  description:
    "Désinsectisation professionnelle à Liège. Traitement cafards, fourmis, blattes, moustiques. Intervention sous 24h, produits homologués, résultat garanti.",
};

const insectes = [
  { icon: "🪳", label: "Cafards / blattes" },
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
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
          <Image
            src="/cuisine-desinsectisation.jpg"
            alt="Cuisine saine après désinsectisation à Liège — traitement blattes et fourmis"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Cuisines, sous-éviers et plinthes : les zones prioritaires du traitement désinsectisation</p>
          </div>
        </div>

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
          Pourquoi les cafards reviennent toujours à Liège ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          La blatte germanique — l&apos;espèce la plus répandue à Liège — résiste aux insecticides
          classiques du commerce. Elle se cache dans les joints de cuisine, derrière les plaques
          chauffantes et dans les faux plafonds. Un spray visible ne touche que 5 à 10% de la colonie.
          Le reste survit, s&apos;adapte et se reproduit : une femelle pond jusqu&apos;à 300 œufs par an.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          À Liège, les immeubles anciens du centre (Féronstrée, rue Saint-Gilles, quartier Saint-Léonard)
          cumulent les problèmes : caves humides communicantes entre appartements, canalisations
          vétustes, isolation insuffisante. Une infestation dans un appartement contamine
          souvent tout l&apos;immeuble en 2 à 3 mois si rien n&apos;est fait.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Le gel insecticide professionnel est posé aux points de passage réels — pas en spray
          général. Les cafards le transportent au nid et contaminent toute la colonie.
          C&apos;est pour ça qu&apos;un passage professionnel règle le problème là où 6 mois de produits
          du commerce ont échoué.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Le cas Liège</p>
          <p className="text-sm text-gray-700 mt-1">
            Les fourmis charpentières sont également en forte progression dans les habitations
            liégeoises depuis 2022 — elles s&apos;installent dans le bois humide des charpentes et
            caves. Contrairement aux fourmis de jardin, elles causent des dégâts structurels
            et nécessitent un traitement spécifique à la colonie reine.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Zones d&apos;intervention désinsectisation à Liège
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Nous intervenons dans tous les quartiers de Liège et dans les communes voisines :
          {" "}<Link href="/desinsectisation-seraing" className="underline" style={{ color: "#1B4332" }}>Seraing</Link>,
          {" "}<Link href="/desinsectisation-herstal" className="underline" style={{ color: "#1B4332" }}>Herstal</Link>,
          {" "}<Link href="/desinsectisation-ans" className="underline" style={{ color: "#1B4332" }}>Ans</Link>,
          {" "}<Link href="/desinsectisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Saint-Nicolas</Link> et
          {" "}<Link href="/desinsectisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Flémalle</Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Demander un devis gratuit →
          </Link>
          <a
            href="tel:+32466442454"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            📞 Appeler maintenant
          </a>
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
