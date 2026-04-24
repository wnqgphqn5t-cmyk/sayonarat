import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dératisation & Désinsectisation Belgique — Intervention rapide | Sayonarat",
  description:
    "Dératisation, désinsectisation et punaises de lit partout en Belgique. Rats, cafards, guêpes, mites. Techniciens certifiés, devis gratuit sous 24h, garantie 30 jours.",
};

const services = [
  {
    icon: "🐀",
    title: "Dératisation",
    desc: "Élimination de rats et souris. Traitement des nids, pose de pièges, sécurisation des accès.",
    href: "/deratisation-liege",
  },
  {
    icon: "🪲",
    title: "Désinsectisation",
    desc: "Traitement contre cafards, fourmis, blattes. Produits homologués et sans danger.",
    href: "/desinsectisation-liege",
  },
  {
    icon: "🛏️",
    title: "Punaises de lit",
    desc: "Traitement thermique ou chimique des punaises. Résultat garanti dès la première intervention.",
    href: "/punaises-de-lit-liege",
  },
  {
    icon: "🐝",
    title: "Guêpes & frelons",
    desc: "Destruction de nids de guêpes et frelons. Intervention nocturne sécurisée sous 48h.",
    href: "/guepes-frelons-liege",
  },
  {
    icon: "🐜",
    title: "Fourmis",
    desc: "Traitement par gel transmissible. Fourmis pharaon, charpentières ou des jardins.",
    href: "/fourmis-liege",
  },
  {
    icon: "🦋",
    title: "Mites alimentaires",
    desc: "Traitement contre les mites des denrées. Placards, réserves, garde-manger.",
    href: "/mites-alimentaires-liege",
  },
];

const stats = [
  { val: "+500", label: "Interventions réalisées" },
  { val: "24h", label: "Délai d'intervention moyen" },
  { val: "98%", label: "Clients satisfaits" },
  { val: "7j/7", label: "Disponibilité" },
];

const provinces = [
  { label: "Liège", href: "/deratisation-liege" },
  { label: "Seraing", href: "/deratisation-seraing" },
  { label: "Herstal", href: "/deratisation-herstal" },
  { label: "Ans", href: "/deratisation-ans" },
  { label: "Flémalle", href: "/deratisation-flemalle" },
  { label: "Grâce-Hollogne", href: "/deratisation-grace-hollogne" },
  { label: "Beyne-Heusay", href: "/deratisation-beyne-heusay" },
  { label: "Awans", href: "/deratisation-awans" },
  { label: "Oupeye", href: "/deratisation-oupeye" },
];

const faqs = [
  {
    q: "Dans quelles régions intervenez-vous en Belgique ?",
    a: "Nous intervenons partout en Belgique francophone : région liégeoise, Namur, Bruxelles, Hainaut, Brabant wallon et Luxembourg. Contactez-nous pour confirmer la disponibilité dans votre commune.",
  },
  {
    q: "Les traitements sont-ils dangereux pour mes animaux ?",
    a: "Non. Nous utilisons des produits homologués en Belgique, sans danger pour les animaux de compagnie et les enfants après le temps de séchage recommandé (généralement 2h).",
  },
  {
    q: "Combien coûte une dératisation en Belgique ?",
    a: "Le prix dépend de la superficie et du type de nuisible. Comptez entre 150 € et 400 € pour une intervention standard. Devis gratuit sous 24h.",
  },
  {
    q: "Revenez-vous si le problème persiste ?",
    a: "Oui. Toutes nos interventions incluent un suivi. Si les nuisibles reviennent dans les 30 jours, nous revenons sans frais supplémentaires.",
  },
  {
    q: "Êtes-vous certifiés pour intervenir en Belgique ?",
    a: "Oui. Nos partenaires disposent de la certification phytosanitaire obligatoire en Belgique pour l'application de produits antiparasitaires.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PestControlService"],
  name: "Sayonarat — Dératisation & Désinsectisation Belgique",
  description:
    "Entreprise de dératisation et désinsectisation en Belgique. Intervention rapide 7j/7, techniciens certifiés, garantie 30 jours.",
  url: "https://sayonarat.be",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Liège",
    postalCode: "4000",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.6326,
    longitude: 5.5797,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "22:00",
  },
  telephone: "+32466442454",
  email: "contact@sayonarat.be",
  priceRange: "€€",
  areaServed: "BE",
  sameAs: ["https://sayonarat.be"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sophie M." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Problème de rats dans le grenier réglé en une intervention. Technicien professionnel et rapide. Je recommande vivement.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "David K." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Punaises de lit dans notre chambre. Sayonarat est intervenu le lendemain. Aucune trace depuis 2 mois. Parfait.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Nathalie B." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Infestation de cafards dans la cuisine. Devis gratuit rapidement, intervention efficace. Prix correct pour la qualité.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "radial-gradient(ellipse at top, #2D6A4F 0%, #1B4332 55%, #0F2E22 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-sm font-medium">Disponible 7j/7 · Partout en Belgique</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
              Dératisation & Désinsectisation<br />
              <span style={{ color: "#FBBF24" }}>partout en Belgique</span>
            </h1>
            <p className="text-lg text-green-100 max-w-2xl mb-8">
              Vous avez un problème de nuisibles ? Sayonarat met en relation particuliers
              et entreprises avec des techniciens certifiés dans toute la Belgique.
              Rats, cafards, punaises, guêpes — devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <Link
                href="/contact"
                style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
                className="font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-lg shadow-lg"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/urgence"
                className="border-2 border-white/40 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                🚨 Urgence 7j/7
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 justify-center md:justify-start text-sm text-green-200">
              <span>✓ Techniciens certifiés</span>
              <span>✓ Garantie 30 jours</span>
              <span>✓ Devis gratuit</span>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-md">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl opacity-30 blur-xl" style={{ background: "#FBBF24" }} />
              <Image
                src="/hero-technicien.jpg"
                alt="Expert dératisation Belgique — diagnostic professionnel"
                width={600}
                height={450}
                className="relative rounded-2xl shadow-2xl object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 border-b border-green-100" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold" style={{ color: "#1B4332" }}>{s.val}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Résultat visuel */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96 w-full">
            <Image
              src="/interieur-cuisine.jpg"
              alt="Intérieur sain après dératisation — résultat Sayonarat"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Un intérieur sain,<br />c&apos;est notre objectif
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Après chaque intervention, notre objectif est simple : vous rendre un espace propre,
              sécurisé et sans nuisibles. Nos techniciens ne repartent pas tant que le problème
              n&apos;est pas réglé — et ils reviennent sans frais si besoin dans les 30 jours.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              {["Produits homologués, sans danger après séchage", "Colmatage des points d'entrée inclus", "Rapport d'intervention remis après chaque passage", "Suivi garanti 30 jours"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: "#1B4332" }}>
          Nos services
        </h2>
        <p className="text-center text-gray-500 mb-10">Traitement professionnel pour tous types de nuisibles</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all group block"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>
                {s.title}
              </h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="py-12 px-4" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1B4332" }}>
            Zone la plus couverte : Liège et sa région
          </h2>
          <p className="text-gray-500 mb-8">Notre réseau est particulièrement dense dans la province de Liège</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {provinces.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="bg-white border border-green-200 font-medium px-5 py-2 rounded-full transition-colors hover:bg-green-50"
                style={{ color: "#1B4332" }}
              >
                {z.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Vous êtes ailleurs en Belgique ?{" "}
            <Link href="/contact" className="underline font-medium" style={{ color: "#1B4332" }}>
              Contactez-nous
            </Link>{" "}
            — nous vérifions la disponibilité dans votre commune sous 24h.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1B4332" }}>
          Pourquoi choisir Sayonarat ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "⚡", title: "Rapidité", desc: "Intervention en moins de 24h, même le week-end. Urgences traitées en priorité." },
            { icon: "🎓", title: "Expertise certifiée", desc: "Techniciens certifiés phytosanitaires. Produits homologués conformes à la réglementation belge." },
            { icon: "✅", title: "Résultat garanti", desc: "Suivi inclus pendant 30 jours. Si les nuisibles reviennent, on revient sans frais." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* En action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: "#1B4332" }}>
            Nos techniciens en action
          </h2>
          <p className="text-center text-gray-500 mb-10">Des professionnels équipés qui interviennent partout en Belgique</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden h-64 shadow-md">
              <Image src="/technicien-van.jpg" alt="Technicien dératisation Belgique" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-semibold">Intervention rapide 24h</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 shadow-md">
              <Image src="/inspection-matelas.jpg" alt="Inspection punaises de lit" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-semibold">Détection punaises de lit</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 shadow-md">
              <Image src="/inspection-cave.jpg" alt="Inspection cave dératisation" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white text-sm font-semibold">Diagnostic cave & sous-sol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: "#1B4332" }}>
          Ce que disent nos clients
        </h2>
        <p className="text-center text-gray-500 mb-10">Plus de 500 interventions réalisées en Belgique</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Sophie M.", ville: "Liège", note: "⭐⭐⭐⭐⭐", texte: "Problème de rats dans le grenier réglé en une intervention. Technicien professionnel et rapide. Je recommande vivement." },
            { name: "David K.", ville: "Seraing", note: "⭐⭐⭐⭐⭐", texte: "Punaises de lit dans notre chambre. Sayonarat est intervenu le lendemain. Aucune trace depuis 2 mois. Parfait." },
            { name: "Nathalie B.", ville: "Herstal", note: "⭐⭐⭐⭐⭐", texte: "Infestation de cafards dans la cuisine. Devis gratuit rapidement, intervention efficace. Prix correct pour la qualité." },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-xl mb-3">{t.note}</div>
              <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{t.texte}&rdquo;</p>
              <div className="font-bold text-sm" style={{ color: "#1B4332" }}>{t.name} — {t.ville}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: "#1B4332" }} className="py-16 px-4 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Un nuisible détecté ? Agissez maintenant.
        </h2>
        <p className="mb-8 max-w-xl mx-auto" style={{ color: "#bbf7d0" }}>
          Plus vous attendez, plus l&apos;infestation s&apos;étend. Contactez-nous pour un devis gratuit
          et une intervention rapide partout en Belgique.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg inline-block"
        >
          Devis gratuit en 24h →
        </Link>
      </section>
    </>
  );
}
