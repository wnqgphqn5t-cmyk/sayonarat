import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Punaises de lit Seraing — Traitement professionnel | Sayonarat",
  description:
    "Punaises de lit à Seraing ? Traitement thermique ou chimique par technicien certifié. Intervention sous 48h, devis gratuit sous 24h.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Seraing",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Seraing",
  description: "Service de traitement contre les punaises de lit à Seraing. Méthode thermique ou chimique, résultat garanti.",
  serviceType: "PestControl",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi les punaises de lit sont-elles fréquentes à Seraing ?",
      acceptedAnswer: { "@type": "Answer", text: "Le parc immobilier ancien de Seraing (immeubles ouvriers, logements collectifs à Ougrée et Jemeppe) favorise la propagation des punaises via les murs mitoyens et les gaines techniques. Les achats de mobilier d'occasion et la densité résidentielle augmentent le risque de contamination." },
    },
    {
      "@type": "Question",
      name: "Combien coûte un traitement punaises de lit à Seraing ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Devis gratuit sous 24h chez Sayonarat." },
    },
    {
      "@type": "Question",
      name: "Le traitement thermique est-il disponible à Seraing ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Le traitement thermique (60°C+) est disponible à Seraing. Il élimine punaises et œufs en une seule intervention, sans produit chimique. Le logement est de nouveau habitable le soir même." },
    },
  ],
};

const faqs = [
  {
    q: "Pourquoi les punaises de lit sont-elles fréquentes à Seraing ?",
    a: "Le parc immobilier ancien de Seraing (immeubles ouvriers, logements collectifs à Ougrée et Jemeppe) favorise la propagation des punaises via les murs mitoyens et les gaines techniques. Les achats de mobilier d'occasion et la densité résidentielle augmentent le risque de contamination.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Seraing ?",
    a: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Le traitement thermique est-il disponible à Seraing ?",
    a: "Oui. Le traitement thermique (60°C+) est disponible à Seraing. Il élimine punaises et œufs en une seule intervention, sans produit chimique. Le logement est de nouveau habitable le soir même.",
  },
  {
    q: "Dois-je prévenir mon propriétaire ou mon syndic ?",
    a: "En immeuble collectif, oui — les punaises se propagent aux appartements voisins via les prises électriques et les fissures. Informer le syndic permet de coordonner un traitement global et éviter une recontamination rapide.",
  },
];

export default function PunaisesSeraingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/punaises-de-lit-liege" className="hover:text-white">Punaises de lit Liège</Link> › Seraing
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Seraing — Traitement professionnel
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Des punaises de lit à Seraing ? Sayonarat met en contact les habitants de Seraing
            avec un technicien certifié disponible sous 48h. Traitement thermique ou chimique,
            résultat garanti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center">
              📞 +32 466 44 24 54
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
          <Image src="/chambre-punaises.jpg" alt="Chambre saine après traitement punaises de lit à Seraing" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement punaises de lit à Seraing — résultat garanti dès la première intervention</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Punaises de lit à Seraing : un risque lié au bâti ancien
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Seraing concentre un parc immobilier majoritairement ancien — immeubles ouvriers du 19e siècle,
          logements collectifs à Ougrée, Jemeppe-sur-Meuse et Boncelles. Ce type de bâti favorise
          la propagation des punaises de lit : les murs mitoyens, les faux plafonds et les gaines
          techniques non étanchéifiées permettent aux insectes de se déplacer d&apos;un appartement à l&apos;autre
          sans être traités.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Une intervention dans un seul appartement sans coordination avec les voisins mène souvent
          à une recontamination en 4 à 8 semaines. Le technicien évalue lors du diagnostic si un
          traitement coordonné est nécessaire.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C dans tout le logement. Élimine punaises et œufs en une seule intervention, sans produit chimique. Logement habitable le soir même.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat en 1 passage</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticides professionnels à effet rémanent appliqués sur toutes les zones de ponte. Efficace sur grandes surfaces et immeubles collectifs.</p>
            <div className="text-sm font-medium text-green-700">✅ Adapté aux logements collectifs</div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Intervention à Seraing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Sous 48h", desc: "Technicien certifié disponible rapidement à Seraing et communes voisines." },
              { icon: "🎯", titre: "Diagnostic complet", desc: "Identification des zones infestées, voies de propagation entre appartements." },
              { icon: "✅", titre: "Garantie 30 jours", desc: "Retour sans frais si les punaises réapparaissent dans le mois suivant." },
            ].map((item) => (
              <div key={item.titre} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
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

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes à Seraing</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Ougrée", "Jemeppe-sur-Meuse", "Boncelles", "Rotheux-Rimière", "Ramet", "Ivoz-Ramet"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Punaises de lit à Seraing ?</h2>
          <p className="text-green-200 mb-5 text-sm">Chaque nuit compte. Devis gratuit sous 24h, intervention sous 48h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              📞 Appeler maintenant
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors">
              Demander un devis →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Autres services à Seraing et dans la région :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
            <Link href="/deratisation-seraing" className="underline" style={{ color: "#1B4332" }}>Dératisation Seraing</Link>
            <Link href="/desinsectisation-seraing" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Seraing</Link>
            <Link href="/blog/reconnaitre-punaise-de-lit" className="underline" style={{ color: "#1B4332" }}>Comment reconnaître une punaise de lit ?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
