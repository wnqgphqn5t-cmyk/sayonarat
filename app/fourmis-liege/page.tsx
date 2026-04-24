import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fourmis Liège — Traitement professionnel garanti | Sayonarat",
  description:
    "Invasion de fourmis à Liège ? Fourmis charpentières, pharaon, des jardins. Traitement par gel ou appâts transmissibles. Devis gratuit sous 24h, garantie 30 jours.",
};

const faqs = [
  {
    q: "Comment savoir si j'ai des fourmis pharaon ou des fourmis communes ?",
    a: "La fourmi pharaon est minuscule (1,5–2 mm), jaune-orangée, et se déplace en longues files dans les fissures et derrière les plinthes. La fourmi noire des jardins est plus grande (3–5 mm) et entre généralement par les portes et fenêtres. La distinction est cruciale : les fourmis pharaon ne doivent JAMAIS être traitées au spray, sous peine de déclencher le 'budding' (éclatement de la colonie en plusieurs reines).",
  },
  {
    q: "Pourquoi les sprays achetés en magasin ne fonctionnent pas ?",
    a: "Les insecticides en vaporisateur tuent les ouvrières visibles mais n'atteignent pas la reine, qui se trouve profondément dans le nid. Pire : pour les fourmis pharaon, le spray déclenche le budding — la colonie se divise en plusieurs sous-colonies avec de nouvelles reines, aggravant l'infestation. Le gel professionnel transmissible est la seule solution durable.",
  },
  {
    q: "Combien coûte un traitement fourmis à Liège ?",
    a: "Entre 120 € et 280 € selon le type de fourmi et la superficie. Fourmis des jardins simples : dès 120 €. Fourmis pharaon en immeuble : 180–280 € selon l'étendue de la colonie. Devis gratuit sous 24h.",
  },
  {
    q: "Le traitement est-il sans danger pour mes enfants et animaux ?",
    a: "Oui. Le gel insecticide professionnel est placé en micro-doses dans des zones inaccessibles aux enfants et animaux (derrière les plinthes, sous les appareils électroménagers). Aucune évacuation n'est requise. Le technicien vous indique les emplacements exacts.",
  },
  {
    q: "Combien de temps pour éliminer la colonie ?",
    a: "Pour les fourmis des jardins : 1 à 2 semaines après application du gel. Pour les fourmis pharaon : 3 à 6 semaines — les ouvrières rapportent le gel à la reine via le trophallaxie (échange de nourriture). Une garantie 30 jours est incluse dans tous nos traitements.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Traitement fourmis à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Liège",
      postalCode: "4000",
      addressCountry: "BE",
    },
  },
  areaServed: "Liège",
  description:
    "Traitement professionnel contre les fourmis à Liège. Fourmis pharaon, charpentières, des jardins. Gel transmissible, garantie 30 jours.",
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

const especes = [
  {
    emoji: "🟡",
    nom: "Fourmi pharaon",
    taille: "1,5–2 mm",
    couleur: "Jaune-orangée",
    danger: "⚠️ Élevé",
    traitement: "Gel uniquement — jamais de spray",
    detail:
      "Espèce tropicale nichant dans les murs et faux-plafonds. Fréquente dans les immeubles anciens de Liège (Outremeuse, Guillemins). Résistante au froid, active toute l'année.",
  },
  {
    emoji: "🪵",
    nom: "Fourmi charpentière",
    taille: "6–12 mm",
    couleur: "Noire, parfois rouge",
    danger: "⚠️ Élevé",
    traitement: "Injection dans le bois + gel",
    detail:
      "Creuse des galeries dans le bois humide (charpentes, encadrements de fenêtres). Peut causer des dégâts structurels si non traitée. Signe possible d'humidité dans les murs.",
  },
  {
    emoji: "⚫",
    nom: "Fourmi noire des jardins",
    taille: "3–5 mm",
    couleur: "Noire",
    danger: "🟢 Modéré",
    traitement: "Gel ou appâts granulés",
    detail:
      "La plus courante en région liégeoise. Entre par les fissures et joints. Attirée par les sucres et les restes alimentaires. Traitement simple et rapide.",
  },
  {
    emoji: "🔴",
    nom: "Fourmi de pavé (rouge)",
    taille: "4–6 mm",
    couleur: "Rouge-brun",
    danger: "🟢 Modéré",
    traitement: "Appâts transmissibles",
    detail:
      "Niche sous les dalles, pavés et bordures de jardins. Peut mordre si dérangée. Très courante dans les jardins et cours intérieures des maisons liégeoises.",
  },
];

export default function FourmisLiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Fourmis
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fourmis à Liège — Traitement professionnel garanti
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
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Alerte spray */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
            <p className="font-bold text-red-800 mb-1">⚠️ N'utilisez pas de spray insecticide avant d'appeler</p>
            <p className="text-sm text-red-700">
              Pour les fourmis pharaon (très fréquentes dans les immeubles liégeois), un spray provoque le <strong>budding</strong> :
              la colonie se divise en plusieurs nids avec de nouvelles reines. L'infestation empire. Attendez le diagnostic professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Image + espèces */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 mb-10">
          <Image
            src="/cuisine-desinsectisation.jpg"
            alt="Traitement fourmis Liège — gel professionnel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement fourmis par gel professionnel — Liège</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          4 espèces de fourmis à Liège — laquelle avez-vous ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {especes.map((e) => (
            <div key={e.nom} className="bg-green-50 border border-green-100 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{e.emoji}</span>
                <h3 className="font-bold text-lg" style={{ color: "#1B4332" }}>{e.nom}</h3>
              </div>
              <div className="grid grid-cols-2 gap-1 text-xs text-gray-500 mb-3">
                <span>Taille : <strong className="text-gray-700">{e.taille}</strong></span>
                <span>Couleur : <strong className="text-gray-700">{e.couleur}</strong></span>
                <span>Risque : <strong className="text-gray-700">{e.danger}</strong></span>
                <span>Traitement : <strong className="text-gray-700">{e.traitement}</strong></span>
              </div>
              <p className="text-sm text-gray-600">{e.detail}</p>
            </div>
          ))}
        </div>

        {/* Méthode */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Notre méthode : le gel transmissible
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le gel insecticide professionnel fonctionne par <strong>trophallaxie</strong> : les ouvrières
          rapportent le gel au nid et le partagent avec la reine et les larves via l&apos;échange de nourriture.
          Toute la colonie est éliminée de l&apos;intérieur en 1 à 6 semaines selon l&apos;espèce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🔍", t: "Diagnostic d'espèce", d: "Identification précise de l'espèce avant toute intervention — fourmis pharaon, charpentière ou commune. Le traitement diffère selon l'espèce." },
            { emoji: "🧪", t: "Gel en micro-doses", d: "Application ciblée derrière les plinthes, sous les appareils, dans les fissures. Aucune odeur, aucune évacuation requise." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Si des fourmis réapparaissent dans les 30 jours, retour sans frais. Inclus dans toutes nos interventions à Liège." },
          ].map((c) => (
            <div key={c.t} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-2">{c.emoji}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{c.t}</h3>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>

        {/* Tarifs */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800 mb-3">💶 Tarifs indicatifs — Fourmis Liège</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { type: "Fourmis des jardins (maison)", prix: "dès 120 €" },
              { type: "Fourmis noires (appartement)", prix: "dès 130 €" },
              { type: "Fourmis pharaon (appartement)", prix: "180 – 250 €" },
              { type: "Fourmis pharaon (immeuble)", prix: "250 – 400 €" },
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
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Fourmis Liège
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

      {/* Liens internes */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Services liés</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Désinsectisation Liège", href: "/desinsectisation-liege" },
            { label: "Cafards Liège", href: "/cafards-liege" },
            { label: "Mites alimentaires Liège", href: "/mites-alimentaires-liege" },
            { label: "Désinsectisation Seraing", href: "/desinsectisation-seraing" },
            { label: "Désinsectisation Herstal", href: "/desinsectisation-herstal" },
            { label: "Blog : fourmis pharaon traitement", href: "/blog/fourmis-pharaon-traitement" },
            { label: "Blog : fourmis maison que faire", href: "/blog/fourmis-maison-que-faire" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles liés */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>
          📖 Sur le même sujet
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Fourmis dans la maison : que faire ?", href: "/blog/fourmis-maison-que-faire" },
            { label: "Fourmis pharaon : traitement professionnel", href: "/blog/fourmis-pharaon-traitement" },
          ].map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="bg-green-50 border border-green-200 text-sm font-medium px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
              style={{ color: "#1B4332" }}
            >
              {a.label} →
            </Link>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Fourmis à Liège ?</h2>
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
