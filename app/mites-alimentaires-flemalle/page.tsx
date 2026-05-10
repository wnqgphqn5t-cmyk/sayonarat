import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/mites-alimentaires-flemalle" },
  title: "Mites alimentaires Flémalle — Traitement professionnel",
  description:
    "Mites alimentaires à Flémalle ? Traitement professionnel contre les mites des denrées. Intervention sous 48h, devis gratuit. Garantie 30 jours.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement mites alimentaires à Flémalle",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Flémalle", postalCode: "4400", addressCountry: "BE" },
  },
  areaServed: "Flémalle",
  description: "Service de traitement contre les mites alimentaires à Flémalle. Intervention rapide, produits homologués.",
  serviceType: "PestControl",
};

const faqs = [
  {
    q: "Comment savoir si j'ai des mites alimentaires à Flémalle ?",
    a: "Les signes sont : des petits papillons beige-gris qui volent dans la cuisine, des larves ou fils de soie dans les placards, des denrées sèches (farine, céréales, fruits secs, épices) agglomérées ou avec des toiles. Les œufs sont microscopiques — une infestation peut passer inaperçue pendant plusieurs semaines.",
  },
  {
    q: "Comment les mites alimentaires arrivent-elles dans un logement à Flémalle ?",
    a: "L'humidité des caves des maisons ouvrières de Flémalle crée des conditions idéales pour l'éclosion et la prolifération des larves. Via des produits alimentaires secs stockés en cave dans des emballages non hermétiques.",
  },
  {
    q: "Peut-on éliminer les mites alimentaires soi-même ?",
    a: "Partiellement. Il faut vider et laver tous les placards, jeter tous les produits secs potentiellement contaminés. Mais les œufs résistent au nettoyage classique. Un traitement professionnel avec insecticide de contact est nécessaire pour les cas avancés ou récurrents.",
  },
  {
    q: "Combien coûte un traitement mites alimentaires à Flémalle ?",
    a: "Entre 120 € et 380 € selon la superficie et l'ampleur de l'infestation. Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Les mites alimentaires reviennent-elles après traitement ?",
    a: "Oui si la source n'est pas éliminée. Un produit contaminé non jeté suffit à relancer une infestation. Le technicien identifie toutes les sources lors de l'intervention. Notre garantie 30 jours couvre un retour sans frais en cas de réapparition.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function MitesAlimentairesFlemallePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/mites-alimentaires-liege" className="hover:text-white">Mites alimentaires Liège</Link> ›{" "}
            Flémalle
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mites alimentaires à Flémalle — Traitement professionnel
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Larves dans la farine, papillons dans les placards ? Sayonarat intervient pour
            éliminer les mites des denrées à Flémalle. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center">
              +32 466 44 24 54
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Mites alimentaires à Flémalle
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Les maisons ouvrières de Flémalle avec leurs sous-sols parfois humides et leurs provisions en cave sont exposées aux mites alimentaires. L'humidité ambiante due à la proximité de la Meuse favorise l'éclosion rapide des larves.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Une seule femelle pond jusqu'à 400 œufs dans les produits alimentaires. Les larves
          se développent en 2 à 3 semaines et filent des toiles caractéristiques dans les
          placards. L'infestation peut contaminer l'ensemble d'une cuisine en moins d'un mois
          si rien n'est fait.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: "🔍", titre: "Diagnostic complet", desc: "Identification de toutes les sources : placards, réserves, cave, garde-manger. Les œufs sont souvent dans des produits en apparence intacts." },
            { icon: "🧪", titre: "Traitement ciblé", desc: "Insecticide de contact appliqué dans les fissures, joints et recoins des placards. Traitement des zones de ponte et de transit des larves." },
            { icon: "✅", titre: "Garantie 30 jours", desc: "Retour sans frais si les mites réapparaissent dans le mois suivant. Conseils de prévention inclus." },
          ].map((s) => (
            <div key={s.titre} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{s.titre}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-12">
          <p className="font-semibold text-gray-800">Erreur fréquente</p>
          <p className="text-sm text-gray-700 mt-1">
            Jeter uniquement les produits visiblement infestés ne suffit pas. Les œufs de mites
            sont microscopiques et peuvent se trouver dans des emballages en apparence intacts.
            Sans vider et traiter l'intégralité des placards, l'infestation reprend systématiquement.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Des mites alimentaires à Flémalle ?</h2>
          <p className="text-green-200 mb-5 text-sm">Devis gratuit sous 24h. Intervention sous 48h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Appeler maintenant
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors">
              Demander un devis →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Traitement mites dans les villes voisines :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/mites-alimentaires-liege" className="underline" style={{ color: "#1B4332" }}>Mites alimentaires Liège</Link>
            <Link href="/mites-alimentaires-liege" className="underline" style={{ color: "#1B4332" }}>Mites alimentaires Liège</Link>
            <Link href="/mites-alimentaires-seraing" className="underline" style={{ color: "#1B4332" }}>Mites alimentaires Seraing</Link>
            <Link href="/mites-alimentaires-grace-hollogne" className="underline" style={{ color: "#1B4332" }}>Mites alimentaires Grâce-Hollogne</Link>
            <Link href="/mites-alimentaires-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Mites alimentaires Saint-Nicolas</Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Mites alimentaires à Flémalle ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Devis gratuit sous 24h. Un technicien certifié intervient rapidement.
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
