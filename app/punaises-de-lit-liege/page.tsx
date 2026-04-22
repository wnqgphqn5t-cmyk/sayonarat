import type { Metadata } from "next";
import Link from "next/link";

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
    a: "Le traitement thermique (chaleur à 60°C+) est la méthode la plus efficace : il tue punaises et œufs en une seule intervention. Le traitement chimique est une alternative moins coûteuse mais nécessite généralement 2 passages.",
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

export default function PunaisesLiegePage() {
  return (
    <>
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Punaises de lit Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Traitement Punaises de lit Liège — Élimination garantie | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Les punaises de lit sont l&apos;une des infestations les plus difficiles à éliminer sans
            aide professionnelle. Sayonarat vous met en contact avec un spécialiste certifié
            à Liège, disponible sous 24h.
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
          Signes d&apos;une infestation de punaises de lit
        </h2>
        <ul className="space-y-3 mb-10">
          {signes.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">⚠️</span>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          Deux méthodes de traitement à Liège
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C dans tout le logement. Tue punaises et œufs en une seule intervention.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat en 1 passage · Pas de produit chimique</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Application d&apos;insecticides homologués sur les zones infestées. 2 passages nécessaires à J et J+15.</p>
            <div className="text-sm font-medium text-green-700">✅ Moins coûteux · Efficace sur grandes surfaces</div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl">
          <p className="font-semibold text-gray-800">📊 Le saviez-vous ?</p>
          <p className="text-sm text-gray-700 mt-1">
            Les punaises de lit se propagent principalement via les voyages, les meubles d&apos;occasion
            et les vêtements de seconde main. En Belgique, les signalements ont augmenté de 65%
            entre 2019 et 2024. À Liège, les résidences étudiantes et les hôtels sont les zones
            les plus touchées.
          </p>
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
