import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Élimination de Nuisibles en Belgique — Sayonarat",
  description:
    "Spécialiste en élimination de nuisibles en Belgique. Dératisation, désinsectisation, punaises de lit, guêpes, fourmis, cafards. Intervention sous 24h, techniciens certifiés SPF, garantie 30 jours.",
  alternates: { canonical: "https://sayonarat.be/nuisibles" },
  openGraph: {
    title: "Élimination de Nuisibles en Belgique — Sayonarat",
    description:
      "Intervention rapide contre tous les nuisibles en Belgique. Techniciens certifiés SPF, garantie 30 jours, disponible 7j/7.",
    url: "https://sayonarat.be/nuisibles",
    siteName: "Sayonarat",
    locale: "fr_BE",
    type: "website",
  },
};

const services = [
  {
    title: "Dératisation",
    description:
      "Élimination professionnelle des rats et souris. Appâts homologués SPF, colmatage des accès inclus.",
    price: "dès 150€",
    icon: "🐀",
    href: "/deratisation-liege",
    cities: [
      { label: "Liège", href: "/deratisation-liege" },
      { label: "Bruxelles", href: "/deratisation-bruxelles" },
      { label: "Charleroi", href: "/deratisation-charleroi" },
      { label: "Namur", href: "/deratisation-namur" },
    ],
  },
  {
    title: "Désinsectisation",
    description:
      "Traitement contre cafards, fourmis, puces et autres insectes rampants. Produits homologués sans danger.",
    price: "dès 120€",
    icon: "🪳",
    href: "/desinsectisation-liege",
    cities: [
      { label: "Liège", href: "/desinsectisation-liege" },
      { label: "Bruxelles", href: "/desinsectisation-bruxelles" },
      { label: "Charleroi", href: "/desinsectisation-charleroi" },
      { label: "Namur", href: "/desinsectisation-namur" },
    ],
  },
  {
    title: "Punaises de Lit",
    description:
      "Traitement thermique ou chimique contre les punaises de lit. Résultat garanti dès la 1ère intervention.",
    price: "dès 150€",
    icon: "🛏️",
    href: "/punaises-de-lit-liege",
    cities: [
      { label: "Liège", href: "/punaises-de-lit-liege" },
      { label: "Bruxelles", href: "/punaises-de-lit-bruxelles" },
      { label: "Charleroi", href: "/punaises-de-lit-charleroi" },
      { label: "Namur", href: "/punaises-de-lit-namur" },
    ],
  },
  {
    title: "Guêpes & Frelons",
    description:
      "Destruction de nids de guêpes et frelons en toute sécurité. Intervention rapide sous 24h.",
    price: "dès 89€",
    icon: "🐝",
    href: "/guepes-frelons-liege",
    cities: [
      { label: "Liège", href: "/guepes-frelons-liege" },
      { label: "Seraing", href: "/guepes-frelons-seraing" },
      { label: "Herstal", href: "/guepes-frelons-herstal" },
      { label: "Ans", href: "/guepes-frelons-ans" },
    ],
  },
  {
    title: "Fourmis",
    description:
      "Traitement ciblé contre les fourmis domestiques et fourmis pharaon. Élimination de la colonie complète.",
    price: "dès 120€",
    icon: "🐜",
    href: "/fourmis-liege",
    cities: [{ label: "Liège", href: "/fourmis-liege" }],
  },
  {
    title: "Cafards",
    description:
      "Élimination des blattes et cafards. Gel insecticide professionnel, résultat visible sous 72h.",
    price: "dès 120€",
    icon: "🪲",
    href: "/cafards-liege",
    cities: [{ label: "Liège", href: "/cafards-liege" }],
  },
];

const faqs = [
  {
    q: "Combien coûte une intervention contre les nuisibles en Belgique ?",
    a: "Le tarif varie selon le type de nuisible et la superficie traitée. Comptez dès 89€ pour un nid de guêpes, dès 120€ pour désinsectisation, dès 150€ pour dératisation ou punaises de lit. Devis gratuit sous 24h.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: "Sayonarat intervient dans toute la Belgique : Liège, Bruxelles, Charleroi, Namur, Seraing, Herstal, Ans, Flémalle, Gand, Anvers et leurs environs.",
  },
  {
    q: "Vos produits sont-ils dangereux pour les enfants et les animaux ?",
    a: "Nos techniciens utilisent uniquement des produits homologués par le SPF Santé Publique belge, adaptés à chaque situation. Des consignes de sécurité vous seront données avant et après l'intervention.",
  },
  {
    q: "Combien de temps dure le traitement ?",
    a: "Selon le type d'intervention, de 30 minutes (nid de guêpes) à 2-3 heures (traitement thermique punaises de lit). Un devis précis vous est communiqué avant l'intervention.",
  },
  {
    q: "Y a-t-il une garantie ?",
    a: "Oui, toutes nos interventions sont couvertes par une garantie de 30 jours. En cas de réapparition des nuisibles dans ce délai, nous revenons sans frais supplémentaires.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Élimination de Nuisibles en Belgique",
      description:
        "Services professionnels de dératisation, désinsectisation et traitement des nuisibles en Belgique. Techniciens certifiés SPF, intervention sous 24h, garantie 30 jours.",
      provider: {
        "@type": "LocalBusiness",
        name: "Sayonarat",
        url: "https://sayonarat.be",
        telephone: "+32466442454",
        areaServed: "BE",
      },
      areaServed: "BE",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services nuisibles",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function NuisiblesHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ background: "#1B4332" }} className="text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">
            ✓ SPF Homologué · Intervention sous 24h · Garantie 30 jours
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Élimination de Nuisibles en Belgique
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Rats, cafards, punaises de lit, guêpes… Sayonarat intervient contre
            tous les nuisibles dans toute la Belgique. Techniciens certifiés
            SPF, disponibles 7j/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+32466442454"
              className="bg-yellow-400 text-green-900 font-bold px-8 py-3 rounded-lg text-lg hover:bg-yellow-300 transition-colors"
            >
              📞 +32 466 44 24 54
            </a>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "+500", label: "Interventions" },
            { val: "24h", label: "Délai moyen" },
            { val: "30j", label: "Garantie" },
            { val: "7j/7", label: "Disponibilité" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-yellow-400">{s.val}</div>
              <div className="text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-3">
            Nos Services Antiparasitaires
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Intervention professionnelle contre tous types de nuisibles
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <p className="text-yellow-600 font-bold mb-4">{service.price}</p>
                <Link
                  href={service.href}
                  className="block text-center bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition-colors mb-3 text-sm"
                >
                  En savoir plus
                </Link>
                {service.cities.length > 1 && (
                  <div className="flex flex-wrap gap-1">
                    {service.cities.map((city) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        className="text-xs text-green-700 hover:underline bg-green-50 px-2 py-1 rounded"
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Sayonarat */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-10">
            Pourquoi Choisir Sayonarat ?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎓",
                title: "Techniciens certifiés SPF",
                desc: "Tous nos techniciens sont agréés par le SPF Santé Publique belge. Produits homologués, méthodes professionnelles.",
              },
              {
                icon: "⚡",
                title: "Intervention sous 24h",
                desc: "Nous nous engageons à intervenir dans les 24h suivant votre appel, 7 jours sur 7 dans toute la Belgique.",
              },
              {
                icon: "🛡️",
                title: "Garantie 30 jours",
                desc: "Si les nuisibles réapparaissent dans les 30 jours suivant l'intervention, nous revenons sans frais.",
              },
              {
                icon: "💰",
                title: "Devis gratuit",
                desc: "Estimation gratuite et sans engagement sous 24h. Tarifs transparents, sans mauvaise surprise.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-green-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Zones d'Intervention
          </h2>
          <p className="text-gray-600 mb-8">
            Sayonarat intervient dans toute la Belgique. Voici nos principales
            zones de couverture :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Liège",
              "Bruxelles",
              "Charleroi",
              "Namur",
              "Seraing",
              "Herstal",
              "Ans",
              "Flémalle",
              "Verviers",
              "Gand",
              "Anvers",
              "Mons",
            ].map((city) => (
              <span
                key={city}
                className="bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-200"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 text-center mb-10">
            Questions Fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-green-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: "#1B4332" }} className="text-white py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Un Nuisible Chez Vous ?
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Contactez Sayonarat maintenant. Devis gratuit, intervention sous 24h,
          garantie 30 jours incluse.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+32466442454"
            className="bg-yellow-400 text-green-900 font-bold px-8 py-3 rounded-lg text-lg hover:bg-yellow-300 transition-colors"
          >
            📞 Appeler maintenant
          </a>
          <Link
            href="/contact"
            className="border border-white/40 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Formulaire de contact
          </Link>
        </div>
      </section>
    </>
  );
}
