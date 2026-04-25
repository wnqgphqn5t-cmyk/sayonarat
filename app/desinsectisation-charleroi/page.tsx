import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Désinsectisation Charleroi — Cafards, fourmis, guêpes",
  description:
    "Désinsectisation professionnelle à Charleroi. Cafards, fourmis, guêpes. Bassin industriel, quartiers résidentiels couverts. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Quels insectes traitez-vous à Charleroi ?",
    a: "Cafards et blattes (fréquents dans les sous-sols humides du bassin industriel), fourmis dont fourmis pharaon, guêpes et frelons (dont frelon asiatique), mites alimentaires et puces. Chaque intervention débute par un diagnostic pour adapter le traitement à l'espèce et au type de bâtiment.",
  },
  {
    q: "Combien coûte une désinsectisation à Charleroi ?",
    a: "Entre 120 € et 350 € selon le type d'insecte et la superficie. Nids de guêpes accessibles à partir de 90 €. Pour les bâtiments industriels ou commerciaux du bassin carolorégien, tarif établi sur devis. Devis gratuit sous 24h.",
  },
  {
    q: "Pourquoi les cafards sont-ils fréquents dans les anciens quartiers de Charleroi ?",
    a: "Les vieux bâtiments ouvriers de Marchienne-au-Pont, Couillet et Gilly présentent des sous-sols humides, des canalisations vieillissantes et de nombreuses fissures structurelles propices aux infestations de blattes. La proximité de la Sambre renforce également l'humidité ambiante dans les caves et rez-de-chaussée.",
  },
  {
    q: "Les traitements sont-ils sans danger pour mes enfants et animaux ?",
    a: "Oui. Nous utilisons exclusivement des produits homologués en Belgique. Pour le gel insecticide cafards : aucune évacuation requise. Pour les pulvérisations : 2 à 4h d'absence suffisent. Le technicien vous communique les consignes exactes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Charleroi",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Charleroi",
  description: "Désinsectisation professionnelle à Charleroi. Cafards, fourmis, guêpes dans le bassin industriel et les quartiers résidentiels. Produits homologués, garantie 30 jours.",
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

export default function DesinsectisationCharleroiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Charleroi
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Charleroi — Cafards, fourmis, guêpes | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Insectes nuisibles à Charleroi ? Intervention rapide dans tout le bassin carolorégien.
            Produits homologués, garantie 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Devis gratuit sous 24h →
            </Link>
            <a href="tel:+32466442454" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image src="/cuisine-desinsectisation.jpg" alt="Désinsectisation Charleroi bassin industriel" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement désinsectisation — Charleroi, bassin carolorégien</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Nos services à Charleroi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { emoji: "🪳", t: "Cafards et blattes", d: "Gel insecticide professionnel sans odeur, sans évacuation. Les sous-sols humides des vieux quartiers ouvriers de Charleroi sont particulièrement propices aux infestations de blattes germaniques." },
            { emoji: "🐜", t: "Fourmis et fourmis pharaon", d: "Appâts transmissibles à toute la colonie. La fourmi pharaon est traitée exclusivement par gel — aucun spray pour éviter la dispersion dans les murs et cloisons." },
            { emoji: "🐝", t: "Guêpes et frelons", d: "Destruction de nid nocturne sous 48h. Frelon asiatique traité en priorité dans toutes les communes du bassin carolorégien." },
            { emoji: "🦋", t: "Mites alimentaires", d: "Traitement des placards et réserves contaminées. Élimination complète des larves, œufs et adultes." },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-3xl mb-2">{c.emoji}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{c.t}</h3>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Désinsectisation Charleroi</h2>
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Désinsectisation dans les communes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Désinsectisation Liège", href: "/desinsectisation-liege" },
            { label: "Désinsectisation Bruxelles", href: "/desinsectisation-bruxelles" },
            { label: "Désinsectisation Namur", href: "/desinsectisation-namur" },
            { label: "Désinsectisation Mons", href: "/desinsectisation-mons" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Insectes à Charleroi ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Devis gratuit sous 24h, intervention rapide, garantie 30 jours.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
