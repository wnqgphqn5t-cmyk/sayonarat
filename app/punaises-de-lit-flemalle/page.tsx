import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/punaises-de-lit-flemalle" },
  title: "Punaises de lit Flémalle — Traitement professionnel",
  description:
    "Punaises de lit à Flémalle ? Technicien certifié, traitement thermique ou chimique. Intervention sous 48h, devis gratuit sous 24h.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement punaises de lit à Flémalle",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Flémalle",
  description: "Service de traitement contre les punaises de lit à Flémalle. Méthode thermique ou chimique, résultat garanti.",
  serviceType: "PestControl",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Les gîtes et locations à Flémalle sont-ils à risque de punaises de lit ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Les locations de courte durée et les gîtes sont particulièrement exposés car les punaises voyagent avec les bagages des occupants successifs. Un contrôle régulier et un traitement préventif sont recommandés pour les propriétaires de locations." },
    },
    {
      "@type": "Question",
      name: "Combien coûte un traitement punaises de lit à Flémalle ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Pour les maisons individuelles typiques de Flémalle, le traitement thermique est souvent la solution la plus rapide. Devis gratuit sous 24h." },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure le traitement thermique ?",
      acceptedAnswer: { "@type": "Answer", text: "Le traitement thermique dure généralement 6 à 8 heures. Le technicien monte progressivement la température à 60°C+ dans toutes les pièces. Vous pouvez réintégrer le logement le soir même." },
    },
  ],
};

const faqs = [
  {
    q: "Les gîtes et locations à Flémalle sont-ils à risque de punaises de lit ?",
    a: "Oui. Les locations de courte durée et les gîtes sont particulièrement exposés car les punaises voyagent avec les bagages des occupants successifs. Un contrôle régulier et un traitement préventif sont recommandés pour les propriétaires de locations.",
  },
  {
    q: "Combien coûte un traitement punaises de lit à Flémalle ?",
    a: "Entre 150 € et 400 € selon la superficie et la méthode (thermique ou chimique). Pour les maisons individuelles typiques de Flémalle, le traitement thermique est souvent la solution la plus rapide. Devis gratuit sous 24h.",
  },
  {
    q: "Combien de temps dure le traitement thermique ?",
    a: "Le traitement thermique dure généralement 6 à 8 heures. Le technicien monte progressivement la température à 60°C+ dans toutes les pièces. Vous pouvez réintégrer le logement le soir même.",
  },
  {
    q: "Le traitement est-il garanti si les punaises reviennent ?",
    a: "Oui. Sayonarat offre une garantie 30 jours : si les punaises réapparaissent dans le mois suivant l'intervention, un technicien revient sans frais supplémentaires.",
  },
];

export default function PunaisesFlEmallePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/punaises-de-lit-liege" className="hover:text-white">Punaises de lit Liège</Link> › Flémalle
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Punaises de lit Flémalle — Traitement professionnel
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Punaises de lit à Flémalle ? Sayonarat met en contact les habitants de Flémalle
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
          <Image src="/chambre-punaises.jpg" alt="Chambre saine après traitement punaises de lit à Flémalle" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement punaises de lit à Flémalle — intervention rapide sous 48h</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Punaises de lit à Flémalle : maisons et locations
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Flémalle est une commune semi-rurale avec un tissu résidentiel composé principalement
          de maisons individuelles à Flémalle-Grande, Ivoz-Ramet, Chokier et Mons-lez-Liège.
          Si la densité résidentielle est plus faible qu&apos;à Liège, les infestations de punaises
          de lit touchent toutes les communes — et les maisons individuelles peuvent être
          difficiles à traiter entièrement sans matériel professionnel.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Les propriétaires de locations saisonnières ou de gîtes à Flémalle sont particulièrement
          concernés : les punaises voyagent dans les bagages et s&apos;installent discrètement entre
          deux occupants. Un contrôle après chaque séjour prolongé est recommandé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement thermique</h3>
            <p className="text-sm text-gray-600 mb-3">Chaleur portée à 60°C dans tout le logement. Élimine punaises et œufs en une seule intervention. Idéal pour les maisons individuelles de Flémalle.</p>
            <div className="text-sm font-medium text-green-700">✅ Résultat en 1 passage · Sans chimique</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💊</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Traitement chimique</h3>
            <p className="text-sm text-gray-600 mb-3">Insecticides professionnels à effet rémanent sur toutes les zones de ponte. Alternative moins coûteuse pour les petites surfaces.</p>
            <div className="text-sm font-medium text-green-700">✅ Moins coûteux · Efficace et ciblé</div>
          </div>
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Intervention à Flémalle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Sous 48h", desc: "Technicien certifié disponible rapidement à Flémalle et communes voisines." },
              { icon: "🎯", titre: "Diagnostic complet", desc: "Inspection approfondie : matelas, sommier, plinthes, cadres de portes." },
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

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes à Flémalle</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Flémalle-Grande", "Ivoz-Ramet", "Chokier", "Mons-lez-Liège", "Flémalle-Haute", "Gleixhe"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Punaises de lit à Flémalle ?</h2>
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
          <p className="text-sm text-gray-500 mb-3">Autres services à Flémalle et dans la région :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
            <Link href="/deratisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Dératisation Flémalle</Link>
            <Link href="/desinsectisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Flémalle</Link>
            <Link href="/blog/reconnaitre-punaise-de-lit" className="underline" style={{ color: "#1B4332" }}>Comment reconnaître une punaise de lit ?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
