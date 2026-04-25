import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Punaises de lit Saint-Nicolas — Traitement professionnel",
  description:
    "Punaises de lit à Saint-Nicolas ? Technicien certifié, traitement thermique ou chimique. Intervention sous 48h, devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Saint-Nicolas",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Saint-Nicolas",
  description: "Service de traitement contre les punaises de lit à Saint-Nicolas. Méthode thermique ou chimique, résultat garanti.",
  serviceType: "PestControl",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Les punaises de lit se propagent-elles dans les immeubles de Saint-Nicolas ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Les quartiers Tilleur, Montegnée et Renory comportent de nombreux immeubles collectifs où les punaises migrent facilement entre appartements via les murs mitoyens, les prises électriques et les conduits de ventilation. Un traitement coordonné avec les voisins est souvent recommandé." },
    },
    {
      "@type": "Question",
      name: "Combien coûte un traitement punaises de lit à Saint-Nicolas ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Devis gratuit sous 24h chez Sayonarat." },
    },
    {
      "@type": "Question",
      name: "Peut-on éliminer les punaises de lit soi-même ?",
      acceptedAnswer: { "@type": "Answer", text: "Non de manière fiable. Les sprays du commerce tuent les adultes visibles mais pas les œufs. Les œufs éclosent 6 à 10 jours après le traitement et relancent l'infestation. Seul un traitement professionnel (thermique ou chimique avec produits homologués) élimine l'ensemble du cycle." },
    },
  ],
};

const faqs = [
  {
    q: "Les punaises de lit se propagent-elles dans les immeubles de Saint-Nicolas ?",
    a: "Oui. Les quartiers Tilleur, Montegnée et Renory comportent de nombreux immeubles collectifs où les punaises migrent facilement entre appartements via les murs mitoyens, les prises électriques et les conduits de ventilation. Un traitement coordonné avec les voisins est souvent recommandé.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Saint-Nicolas ?",
    a: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Peut-on éliminer les punaises de lit soi-même ?",
    a: "Non de manière fiable. Les sprays du commerce tuent les adultes visibles mais pas les œufs. Les œufs éclosent 6 à 10 jours après le traitement et relancent l'infestation. Seul un traitement professionnel (thermique ou chimique avec produits homologués) élimine l'ensemble du cycle.",
  },
  {
    q: "Dois-je informer mon propriétaire de la présence de punaises de lit ?",
    a: "Oui, si vous êtes locataire — le propriétaire est responsable de délivrer un logement exempt de nuisibles. En pratique, Sayonarat peut intervenir directement sur demande du locataire ou du propriétaire.",
  },
];

export default function PunaiseSaintNicolasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/punaises-de-lit-liege" className="hover:text-white">Punaises de lit Liège</Link> › Saint-Nicolas
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Saint-Nicolas — Traitement professionnel
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Saint-Nicolas ? Sayonarat met en contact les habitants de Saint-Nicolas
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
          <Image src="/chambre-punaises.jpg" alt="Chambre saine après traitement punaises de lit à Saint-Nicolas" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement punaises de lit à Saint-Nicolas — résultat garanti</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Punaises de lit à Saint-Nicolas : un risque réel dans les quartiers denses
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Saint-Nicolas est une commune dense en bordure de Liège, avec des quartiers résidentiels
          compacts à Tilleur, Montegnée et Renory. La proximité de la Meuse et les immeubles
          collectifs créent des conditions propices à la propagation des punaises de lit.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Les piqûres de punaises sont souvent confondues avec des piqûres de moustiques ou d&apos;araignées.
          La différence : les punaises piquent en ligne de 3 à 5 piqûres sur une zone découverte,
          systématiquement au réveil. Si vous observez ce schéma, agissez rapidement — une infestation
          non traitée double de taille toutes les 6 semaines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C dans tout le logement. Élimine punaises et œufs en une seule intervention, sans produit chimique.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat en 1 passage · Dès le soir même</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticides professionnels à effet rémanent. Adapté pour les immeubles collectifs, efficace sur toutes les zones de ponte.</p>
            <div className="text-sm font-medium text-green-700">✅ Moins coûteux · Adapté aux grandes surfaces</div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Intervention à Saint-Nicolas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Sous 48h", desc: "Technicien certifié disponible rapidement à Saint-Nicolas et communes voisines." },
              { icon: "🎯", titre: "Diagnostic complet", desc: "Inspection de toutes les zones de ponte : matelas, cadre, plinthes, prises." },
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

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes à Saint-Nicolas</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Tilleur", "Montegnée", "Renory", "Orgeo", "Fragnée", "Grâce-Berleur"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Punaises de lit à Saint-Nicolas ?</h2>
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
          <p className="text-sm text-gray-500 mb-3">Autres services à Saint-Nicolas et dans la région :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
            <Link href="/deratisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Dératisation Saint-Nicolas</Link>
            <Link href="/desinsectisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Saint-Nicolas</Link>
            <Link href="/blog/reconnaitre-punaise-de-lit" className="underline" style={{ color: "#1B4332" }}>Comment reconnaître une punaise de lit ?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
