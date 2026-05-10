import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/fourmis-verviers" },
  title: "Fourmis Verviers — Traitement professionnel garanti",
  description:
    "Invasion de fourmis à Verviers ? Fourmis charpentières, pharaon, des jardins. Traitement par gel transmissible. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Comment identifier l'espèce de fourmis dans mon logement à Verviers ?",
    a: "La fourmi pharaon est minuscule (1,5–2 mm), jaune-orangée, se déplace en longues files dans les fissures. La fourmi noire des jardins est plus grande (3–5 mm) et entre par les portes et fenêtres. La fourmi charpentière (6–12 mm) creuse les boiseries humides. L'identification est cruciale car le traitement diffère selon l'espèce.",
  },
  {
    q: "Les fourmis pharaon sont-elles présentes à Verviers ?",
    a: "Les fourmis des jardins sont très présentes dans les jardins d'Heusy et Ensival. Les fourmis pharaon habitent les murs creux des bâtiments anciens du centre de Verviers. Les fourmis charpentières sont signalées dans les vieilles charpentes en bois humide des maisons textiles.",
  },
  {
    q: "Combien coûte un traitement fourmis à Verviers ?",
    a: "Entre 120 € et 280 € selon le type de fourmi et la superficie. Fourmis des jardins : dès 120 €. Fourmis pharaon : 180–280 € selon l'étendue de la colonie. Devis gratuit sous 24h.",
  },
  {
    q: "Combien de temps pour éliminer les fourmis ?",
    a: "Pour les fourmis des jardins : 1 à 2 semaines après application du gel. Pour les fourmis pharaon : 3 à 6 semaines — les ouvrières rapportent le gel à la reine. Une garantie 30 jours est incluse dans tous nos traitements à Verviers.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement fourmis à Verviers",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Verviers", postalCode: "4800", addressCountry: "BE" },
  },
  areaServed: "Verviers",
  description: "Traitement professionnel contre les fourmis à Verviers. Fourmis pharaon, charpentières, des jardins. Gel transmissible, garantie 30 jours.",
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

export default function FourmisVerviersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/fourmis-liege" className="hover:text-white">Fourmis Liège</Link> ›{" "}
            Verviers
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fourmis à Verviers — Traitement professionnel garanti
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Fourmis pharaon, charpentières ou des jardins ? Traitement par gel transmissible,
            la seule méthode qui élimine la reine et la colonie entière. Garantie 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Devis gratuit sous 24h →
            </Link>
            <a
              href="tel:+32466442454"
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
            <p className="font-bold text-red-800 mb-1">N'utilisez pas de spray insecticide avant d'appeler</p>
            <p className="text-sm text-red-700">
              Pour les fourmis pharaon, un spray provoque le <strong>budding</strong> :
              la colonie se divise en plusieurs nids avec de nouvelles reines. L'infestation empire. Attendez le diagnostic professionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image
            src="/cuisine-desinsectisation.jpg"
            alt={"Traitement fourmis Verviers"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement fourmis par gel professionnel — Verviers</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Fourmis à Verviers : un problème fréquent
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Les jardins des quartiers résidentiels d'Heusy et Ensival, les parcs de la ville et les rives de la Vesdre offrent des conditions idéales pour les fourmis des jardins. Les bâtiments anciens du centre-ville présentent souvent des fourmis pharaon dans les espaces creux entre les murs.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Le gel insecticide professionnel fonctionne par <strong>trophallaxie</strong> : les ouvrières
          rapportent le gel au nid et le partagent avec la reine via l'échange de nourriture.
          Toute la colonie est éliminée de l'intérieur en 1 à 6 semaines selon l'espèce. Aucune évacuation requise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic d'espèce", d: "Identification précise de l'espèce avant toute intervention — le traitement diffère selon qu'il s'agit de fourmis pharaon, charpentières ou communes." },
            { emoji: "🧪", t: "Gel en micro-doses", d: "Application ciblée derrière les plinthes, sous les appareils, dans les fissures. Aucune odeur, aucune évacuation requise." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Si des fourmis réapparaissent dans les 30 jours, retour sans frais. Inclus dans toutes nos interventions à Verviers." },
          ].map((card) => (
            <div key={card.t} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-2">{card.emoji}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{card.t}</h3>
              <p className="text-sm text-gray-600">{card.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800 mb-3">Tarifs indicatifs — Fourmis Verviers</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { type: "Fourmis des jardins (maison)", prix: "dès 120 €" },
              { type: "Fourmis noires (appartement)", prix: "dès 130 €" },
              { type: "Fourmis pharaon (appartement)", prix: "180 – 250 €" },
              { type: "Fourmis charpentières", prix: "160 – 280 €" },
            ].map((t) => (
              <div key={t.type} className="flex justify-between bg-white rounded-lg px-4 py-2 border border-yellow-200">
                <span className="text-gray-700">{t.type}</span>
                <span className="font-bold" style={{ color: "#1B4332" }}>{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Devis gratuit et précis sous 24h selon diagnostic sur place.</p>
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
            Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Fourmis Verviers
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Traitement fourmis dans les villes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Fourmis Liège", href: "/fourmis-liege" },
            { label: "Fourmis Liège", href: "/fourmis-liege" },
            { label: "Fourmis Beyne-Heusay", href: "/fourmis-beyne-heusay" },
            { label: "Fourmis Seraing", href: "/fourmis-seraing" },
            { label: "Fourmis Namur", href: "/fourmis-namur" }
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Fourmis à Verviers ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Diagnostic gratuit sous 24h — gel transmissible, garantie 30 jours.
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
