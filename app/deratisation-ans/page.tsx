import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Ans — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Ans. Rats, souris. Intervention sous 24h, devis gratuit, résultat garanti 30 jours.",
};

const faqs = [
  {
    q: "Couvrez-vous toute la commune d'Ans ?",
    a: "Oui. Nous intervenons dans tout Ans : Ans-centre, Alleur, Loncin, Xhovemont. Délai maximum de 24h.",
  },
  {
    q: "Quel type de rongeurs trouve-t-on à Ans ?",
    a: "Principalement des rats bruns (Rattus norvegicus) et des souris domestiques. Les sous-sols et les cuisines sont les zones les plus touchées.",
  },
  {
    q: "La dératisation est-elle possible en appartement ?",
    a: "Oui. Nous adaptons notre méthode aux appartements, maisons unifamiliales et immeubles. Pour les copropriétés, nous recommandons un traitement collectif plus efficace.",
  },
  {
    q: "Quel est le prix d'une dératisation à Ans ?",
    a: "Entre 150 € et 350 € selon la superficie. Devis gratuit sous 24h.",
  },
  {
    q: "Comment prévenir le retour des rongeurs après le traitement ?",
    a: "Notre technicien identifie et sécurise les points d'entrée (fissures, passages de câbles, joints de porte). Nous vous donnons aussi des conseils pratiques pour éviter les récidives.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Ans",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Ans",
  serviceType: "PestControl",
};

export default function DeratisationAnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Ans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Ans — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Ans ? Un dératiseur professionnel certifié intervient chez vous
            sous 24h. Traitement adapté, produits homologués, garantie 30 jours.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Dératisation à Ans : le profil résidentiel qui trompe
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Ans est perçue comme une commune calme et résidentielle — ce qui fait que les
          habitants signalent souvent les infestations trop tard. Pourtant, la proximité
          de l&apos;aéroport de Liège-Bierset, les zones agricoles de Loncin et Alleur,
          et les nombreuses maisons quatre façades avec caves créent des conditions
          idéales pour les rongeurs, notamment les souris domestiques qui s&apos;installent
          discrètement dans les isolations de combles.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          À Ans, le problème le plus fréquent est la souris (pas le rat) : elle passe
          par les joints de fenêtre, les passages de câbles et les fissures de soubassement.
          Elle s&apos;installe dans l&apos;isolation des murs et des combles, loin des yeux,
          et peut causer des dégâts importants avant d&apos;être détectée.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nous intervenons dans tout Ans : Ans-centre, Alleur, Loncin, Xhovemont, Xhendremael.
          Diagnostic complet, traitement adapté (souris ou rats), sécurisation et suivi J+10.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Chiffre clé</p>
          <p className="text-sm text-gray-700 mt-1">
            La grande majorité des infestations de rongeurs commencent par un seul point d&apos;entrée non sécurisé.
            À Ans, ce sont souvent les passages de câbles de fibre optique installés récemment
            qui créent des ouvertures non rebouchées dans les murs.
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-8">
          Autres communes :{" "}
          <Link href="/deratisation-seraing" className="underline" style={{ color: "#1B4332" }}>Seraing</Link>,{" "}
          <Link href="/deratisation-herstal" className="underline" style={{ color: "#1B4332" }}>Herstal</Link>,{" "}
          <Link href="/deratisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Saint-Nicolas</Link>,{" "}
          <Link href="/deratisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Flémalle</Link>,{" "}
          <Link href="/deratisation-liege" className="underline" style={{ color: "#1B4332" }}>Liège</Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Ans
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
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Ans ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
