import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { BoltIcon, CheckCircleIcon, FlameIcon, PillIcon, TargetIcon } from "@/components/Icons";
export const metadata: Metadata = {
  alternates: { canonical: "/punaises-de-lit-ans" },
  title: "Punaises de lit Ans — Traitement professionnel",
  description:
    "Punaises de lit à Ans ? Technicien certifié, traitement thermique ou chimique. Intervention sous 48h, devis gratuit sous 24h.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Ans",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Ans",
  description: "Service de traitement contre les punaises de lit à Ans. Méthode thermique ou chimique, résultat garanti.",
  serviceType: "PestControl",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment les punaises de lit arrivent-elles dans une maison à Ans ?",
      acceptedAnswer: { "@type": "Answer", text: "Les sources principales à Ans : retour de voyage (valise posée sur un lit d'hôtel), achat de mobilier ou vêtements d'occasion, visite dans un logement infesté. Une seule punaise femelle fécondée suffit à déclencher une infestation." },
    },
    {
      "@type": "Question",
      name: "Combien coûte un traitement punaises de lit à Ans ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Devis gratuit sous 24h chez Sayonarat." },
    },
    {
      "@type": "Question",
      name: "Le traitement est-il sans danger pour les enfants et animaux ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui, avec les précautions d'usage. Pour le traitement thermique, pas de produit chimique — retour possible le soir même. Pour le traitement chimique, le logement doit être ventilé 2 à 4 heures avant de réintégrer. Les animaux et plantes sont sortis pendant l'intervention." },
    },
  ],
};

const faqs = [
  {
    q: "Comment les punaises de lit arrivent-elles dans une maison à Ans ?",
    a: "Les sources principales à Ans : retour de voyage (valise posée sur un lit d'hôtel), achat de mobilier ou vêtements d'occasion, visite dans un logement infesté. Une seule punaise femelle fécondée suffit à déclencher une infestation.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Ans ?",
    a: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Le traitement est-il sans danger pour les enfants et animaux ?",
    a: "Oui, avec les précautions d'usage. Pour le traitement thermique, pas de produit chimique — retour possible le soir même. Pour le traitement chimique, le logement doit être ventilé 2 à 4 heures avant de réintégrer. Les animaux et plantes sont sortis pendant l'intervention.",
  },
  {
    q: "Dois-je jeter mon matelas après une infestation ?",
    a: "Non, dans la plupart des cas. Jeter le matelas ne résout pas le problème car les punaises se logent aussi dans le cadre de lit, les plinthes et les prises électriques. Un traitement professionnel est indispensable et suffit à éliminer l'infestation.",
  },
];

export default function PunaisesAnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/punaises-de-lit-liege" className="hover:text-white">Punaises de lit Liège</Link> › Ans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Ans — Traitement professionnel
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Ans ? Sayonarat met en contact les habitants d&apos;Ans
            avec un technicien certifié disponible sous 48h. Traitement thermique ou chimique,
            résultat garanti.
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
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
          <Image src="/chambre-punaises.jpg" alt="Chambre saine après traitement punaises de lit à Ans" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement punaises de lit à Ans — intervention rapide</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Punaises de lit à Ans : ce qu&apos;il faut savoir
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Ans est une commune résidentielle avec une majorité de maisons individuelles et de
          petits immeubles. Si la propagation entre appartements est moins fréquente qu&apos;en ville,
          les infestations se déclarent souvent après un voyage ou un achat de seconde main.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Les punaises de lit ne discriminent pas : une maison propre et bien entretenue peut être
          infestée. Ce n&apos;est pas une question d&apos;hygiène mais de contact avec un objet ou
          un logement contaminé. À Ans, les marchés aux puces de Loncin et Alleur sont des sources
          de contamination régulièrement citées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="mb-3"><FlameIcon className="w-8 h-8" style={{ color: "#1B4332" }} /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C dans tout le logement. Élimine punaises et œufs en une seule intervention. Idéal pour les maisons individuelles.</p>
            <div className="text-sm font-medium text-green-700">Résultat en 1 passage · Dès le soir même</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="mb-3"><PillIcon className="w-8 h-8" style={{ color: "#1B4332" }} /></div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticides professionnels à effet rémanent sur toutes les zones de ponte. Alternative moins coûteuse, efficace sur les infestations de surface limitée.</p>
            <div className="text-sm font-medium text-green-700">Moins coûteux · Adapté aux petites surfaces</div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Intervention à Ans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Sous 48h", desc: "Technicien certifié disponible rapidement à Ans et communes voisines." },
              { icon: "🎯", titre: "Diagnostic complet", desc: "Inspection du lit, du cadre, des plinthes et prises électriques." },
              { icon: "✅", titre: "Garantie 30 jours", desc: "Retour sans frais si les punaises réapparaissent dans le mois suivant." },
            ].map((item) => (
              <div key={item.titre} className="text-center">
                <div className="mb-3">{item.icon === "⚡" ? <BoltIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : item.icon === "🎯" ? <TargetIcon className="w-8 h-8" style={{ color: "#1B4332" }} /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}</div>
                <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{item.titre}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
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

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes à Ans</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Loncin", "Alleur", "Xhendremael", "Ghlin", "Ans-centre", "Hermée"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Punaises de lit à Ans ?</h2>
          <p className="text-green-200 mb-5 text-sm">Chaque nuit compte. Devis gratuit sous 24h, intervention sous 48h.</p>
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
          <p className="text-sm text-gray-500 mb-3">Autres services à Ans et dans la région :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
            <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>Dératisation Ans</Link>
            <Link href="/desinsectisation-ans" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Ans</Link>
            <Link href="/blog/reconnaitre-punaise-de-lit" className="underline" style={{ color: "#1B4332" }}>Comment reconnaître une punaise de lit ?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
