import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/desinsectisation-liege" },
  title: "Désinsectisation Liège — Cafards, fourmis, blattes",
  description:
    "Désinsectisation professionnelle à Liège. Traitement cafards, fourmis, blattes, moustiques. Intervention sous 24h, produits homologués, résultat garanti.",
};

const insectes = [
  { icon: "🪳", label: "Cafards" },
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
    a: "Entre 120 € et 400 € selon la superficie et le type d'insecte. Devis gratuit sous 24h.",
  },
  {
    q: "Faut-il une deuxième intervention ?",
    a: "Le nombre de passages est déterminé lors du diagnostic selon l'ampleur de l'infestation. La garantie 30 jours couvre un retour sans frais si nécessaire.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Liège",
  description: "Service de désinsectisation professionnelle à Liège. Cafards, fourmis, guêpes, frelons — produits homologués, résultat garanti.",
  serviceType: "PestControl",
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

export default function DesinsectisationLiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Désinsectisation Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Liège — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-4">
            Cafards, fourmis ou guêpes à Liège ? Gel insecticide professionnel <strong>sans évacuation requise</strong>.
            Technicien certifié sous 24h, produits homologués SPF, dès 120€. Garantie 30 jours.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {[
              { val: "< 24h", label: "Intervention" },
              { val: "dès 120€", label: "Tarif" },
              { val: "30j", label: "Garantie" },
              { val: "✓ SPF", label: "Homologué" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-center">
                <div className="font-bold text-yellow-300">{s.val}</div>
                <div className="text-green-200 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
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
          <p className="font-semibold text-gray-800">Le cas Liège</p>
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
            Appeler maintenant
          </a>
        </div>
      </section>


      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Traitements spécialisés à Liège
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link href="/cafards-liege" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Cafards à Liège →</h3>
            <p className="text-sm text-gray-600">Gel insecticide professionnel sans évacuation. Colonie éliminée à la source, résultat en 72h.</p>
          </Link>
          <Link href="/fourmis-liege" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Fourmis à Liège →</h3>
            <p className="text-sm text-gray-600">Traitement adapté à l&apos;espèce : fourmis noires, pharaons, charpentières.</p>
          </Link>
          <Link href="/guepes-frelons-liege" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Guêpes &amp; frelons à Liège →</h3>
            <p className="text-sm text-gray-600">Destruction de nid garantie sous 24h. Intervention sécurisée.</p>
          </Link>
          <Link href="/mites-alimentaires-liege" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Mites alimentaires à Liège →</h3>
            <p className="text-sm text-gray-600">Traitement des placards et denrées contaminées. Garantie 30 jours incluse.</p>
          </Link>
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
