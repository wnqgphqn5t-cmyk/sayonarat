import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Traitement Punaises de lit Liège — Élimination garantie | Sayonarat",
  description:
    "Traitement punaises de lit à Liège. Méthode thermique ou chimique. Résultat garanti dès la 1ère intervention. Devis gratuit sous 24h.",
};

const signes = [
  "Piqûres en ligne sur la peau au réveil",
  "Taches rouges ou noires sur le matelas",
  "Odeur sucrée et musquée dans la chambre",
  "Petites taches de sang sur les draps",
  "Mues (peaux translucides) dans les coutures du matelas",
];

const faqs = [
  {
    q: "Comment savoir si j'ai des punaises de lit à Liège ?",
    a: "Les signes principaux : piqûres en ligne sur les bras et le dos au réveil, petites taches noires sur le matelas (excréments), et présence d'insectes plats et ovales de 4-5 mm dans les coutures.",
  },
  {
    q: "Quelle est la méthode la plus efficace contre les punaises de lit ?",
    a: "Le traitement thermique (chaleur à 60°C+) est la méthode la plus efficace : il tue punaises et œufs en une seule intervention. Le traitement chimique est une alternative moins coûteuse, adaptée selon l'ampleur de l'infestation.",
  },
  {
    q: "Dois-je jeter mon matelas ?",
    a: "Non, dans la plupart des cas. Jeter le matelas ne résout pas le problème car les punaises se logent aussi dans les cadres de lit, plinthes et prises électriques. Un traitement professionnel est indispensable.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Liège ?",
    a: "Entre 150 € et 400 € selon la superficie et la méthode choisie. Le traitement thermique est plus cher mais plus rapide. Devis gratuit sous 24h.",
  },
  {
    q: "Combien de temps après le traitement puis-je dormir dans ma chambre ?",
    a: "Pour le traitement thermique : le soir même. Pour le traitement chimique : 4 à 6 heures après la fin de l'intervention.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Liège",
  description: "Service de traitement contre les punaises de lit à Liège. Méthode thermique ou chimique, résultat garanti.",
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

export default function PunaisesLiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Punaises de lit Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Traitement Punaises de lit Liège — Élimination garantie | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-4">
            Punaises de lit à Liège : traitement thermique à 60°C ou chimique. <strong>Chambre accessible le soir même</strong>.
            Technicien certifié sous 24h, dès 150€. Garantie 30 jours incluse.
          </p>
          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            {[
              { val: "< 24h", label: "Intervention" },
              { val: "dès 150€", label: "Tarif" },
              { val: "30j", label: "Garantie" },
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
            src="/chambre-punaises.jpg"
            alt="Chambre saine après traitement punaises de lit à Liège"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Objectif : vous rendre une chambre propre et saine après chaque traitement</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Comment reconnaître les punaises de lit ?
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Les punaises de lit piquent la nuit, exclusivement sur les zones de peau découverte.
          Le matin, vous trouvez des séries de 3 à 5 piqûres en ligne — c&apos;est leur signature.
          Elles ne volent pas, ne sautent pas : elles se déplacent à la vitesse d&apos;un homme
          qui marche et se cachent dans un rayon de 2 mètres autour de votre lit.
        </p>
        <ul className="space-y-3 mb-10">
          {signes.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">⚠️</span>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi c&apos;est si difficile à éliminer seul ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Les œufs de punaises résistent aux insecticides classiques. Un spray du commerce
          tue les adultes visibles — mais laisse des centaines d&apos;œufs intacts dans les coutures
          du matelas, les plinthes et les prises électriques. 3 semaines plus tard, une
          nouvelle génération éclôt et l&apos;infestation repart de zéro.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          À Liège, les résidences étudiantes (Outremeuse, Sart-Tilman), les meublés et les
          achats de meubles d&apos;occasion sur les marchés de la Batte sont les principales sources
          de contamination. Une valise posée sur un lit d&apos;hôtel suffit à ramener
          des punaises chez vous.
        </p>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          Deux méthodes de traitement à Liège
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C dans tout le logement pendant 6 à 8 heures. Tue punaises et œufs en une seule intervention, sans produit chimique.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat en 1 passage · Dès le soir même</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticides professionnels à effet rémanent sur toutes les zones de ponte. Intervention ciblée sur toutes les zones de ponte, résultat garanti.</p>
            <div className="text-sm font-medium text-green-700">✅ Moins coûteux · Efficace sur grandes surfaces</div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Situation en Belgique</p>
          <p className="text-sm text-gray-700 mt-1">
            Les signalements de punaises de lit en Belgique sont en forte hausse depuis 2019.
            Liège est l&apos;une des villes les plus touchées en Wallonie, notamment en raison
            de la forte densité étudiante et du parc immobilier ancien du centre-ville.
          </p>
        </div>

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
            Questions fréquentes — Punaises de lit Liège
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

      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Traitement punaises de lit dans les communes voisines
        </h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Punaises de lit Seraing", href: "/punaises-de-lit-seraing" },
            { label: "Punaises de lit Herstal", href: "/punaises-de-lit-herstal" },
            { label: "Punaises de lit Ans", href: "/punaises-de-lit-ans" },
            { label: "Punaises de lit Saint-Nicolas", href: "/punaises-de-lit-saint-nicolas" },
            { label: "Punaises de lit Flémalle", href: "/punaises-de-lit-flemalle" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Punaises de lit à Liège ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Chaque nuit compte. Contactez-nous pour un devis gratuit et une intervention rapide.
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
