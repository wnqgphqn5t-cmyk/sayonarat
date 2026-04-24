import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos de Sayonarat — Experts dératisation & désinsectisation Liège",
  description:
    "Sayonarat est une équipe d'experts de la lutte antiparasitaire à Liège. Notre mission : mettre en relation les particuliers et entreprises avec les meilleurs techniciens certifiés de la région.",
};

const valeurs = [
  {
    emoji: "🎯",
    titre: "Résultat garanti",
    desc: "Chaque intervention est couverte par une garantie 30 jours. Si le problème persiste, nous revenons gratuitement.",
  },
  {
    emoji: "📍",
    titre: "Ancrage 100% local",
    desc: "Exclusivement à Liège et ses 5 communes voisines. Pas de sous-traitance à l'autre bout du pays.",
  },
  {
    emoji: "🔒",
    titre: "Transparence totale",
    desc: "Prix annoncé avant intervention, aucun frais caché. Vous savez exactement ce que vous payez et pourquoi.",
  },
  {
    emoji: "🏅",
    titre: "Techniciens certifiés",
    desc: "Tous nos intervenants possèdent l'agrément phytosanitaire belge. Produits professionnels homologués.",
  },
  {
    emoji: "⚡",
    titre: "Réactivité",
    desc: "Premier contact dans la journée, intervention sous 24 à 48h dans la majorité des cas urgents.",
  },
  {
    emoji: "🤝",
    titre: "Discrétion",
    desc: "Véhicules banalisés, intervention sans signalétique visible. Votre situation reste confidentielle.",
  },
];

const timeline = [
  { annee: "2023", titre: "La frustration", desc: "Victor F. constate que trouver un technicien disponible à Liège relève du parcours du combattant — délais longs, prix opaques, qualité variable." },
  { annee: "2024", titre: "Le déclic", desc: "Réunion d'une équipe de techniciens phytosanitaires expérimentés autour d'un objectif commun : un service local, rapide et transparent." },
  { annee: "2025", titre: "Le lancement", desc: "Ouverture du service à Liège et aux 5 communes voisines : Seraing, Herstal, Ans, Saint-Nicolas, Flémalle." },
  { annee: "2026", titre: "L'expansion", desc: "Plus de 500 interventions réalisées, extension aux services guêpes/frelons et mites alimentaires. Couverture étendue à toute la Belgique francophone." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sayonarat",
  url: "https://sayonarat.be",
  description: "Plateforme de mise en relation avec des techniciens certifiés en dératisation et désinsectisation à Liège.",
  foundingDate: "2023",
  founder: { "@type": "Person", name: "Victor F." },
  address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  telephone: "+32466442454",
  email: "contact@sayonarat.be",
  areaServed: ["Liège", "Seraing", "Herstal", "Ans", "Saint-Nicolas", "Flémalle"],
};

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › À propos
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            À propos de Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Une équipe d&apos;experts de la lutte antiparasitaire au service des habitants
            et entreprises de Liège et sa région.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96 mb-14">
          <Image
            src="/pexels-tima-miroshnichenko-6196234.jpg"
            alt="Technicien Sayonarat prêt à intervenir à Liège"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <p className="text-white font-semibold text-lg">Nos techniciens certifiés, prêts à intervenir sous 24h</p>
          </div>
        </div>

        {/* Fondateur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-16">
          <div className="md:col-span-1">
            <div className="rounded-2xl p-6 border-2 border-green-100 bg-green-50">
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "#FBBF24" }}>Fondateur</p>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1B4332" }}>Victor F.</h3>
              <p className="text-sm text-gray-600 mb-4">Expert antiparasitaire · Liège</p>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2"><span>🏅</span> Agréé phytosanitaire</div>
                <div className="flex items-center gap-2"><span>📍</span> 10+ ans sur le terrain liégeois</div>
                <div className="flex items-center gap-2"><span>🎓</span> Formation continue CEPA</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "#1B4332" }}>
              Notre mission
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sayonarat a été fondé par Victor F. et une équipe d&apos;experts de la lutte
              antiparasitaire avec un constat simple : trouver un technicien certifié
              et disponible rapidement à Liège est souvent un parcours du combattant.
              Les délais sont longs, les prix peu transparents, et la qualité variable.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Notre réponse : créer une plateforme de mise en relation qui connecte
              les particuliers et entreprises de Liège avec des techniciens certifiés
              phytosanitaires, disponibles sous 24h, aux tarifs clairs et avec une
              garantie de résultat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous connaissons le terrain liégeois — ses quartiers, son bâti ancien,
              ses zones industrielles et les spécificités de chaque commune. Cette
              connaissance locale fait la différence dans la qualité des interventions
              que nous coordonnons.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2 text-center" style={{ color: "#FBBF24" }}>Notre parcours</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1B4332" }}>
            Quatre années pour bâtir un service local de confiance
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ backgroundColor: "#D1FAE5" }} />

            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={t.annee} className={`md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm inline-block">
                      <div className="text-3xl font-bold mb-2" style={{ color: "#FBBF24" }}>{t.annee}</div>
                      <h3 className="font-bold mb-2" style={{ color: "#1B4332" }}>{t.titre}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valeurs grid */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2 text-center" style={{ color: "#FBBF24" }}>Ce qui nous guide</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1B4332" }}>
            Nos engagements concrets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h3 className="font-bold mb-2" style={{ color: "#1B4332" }}>{v.titre}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Méthodologie */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest font-semibold mb-2 text-center" style={{ color: "#FBBF24" }}>Notre méthode</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: "#1B4332" }}>
            Comment se déroule une intervention
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { n: "1", t: "Contact", d: "Vous appelez ou remplissez le formulaire. Qualification gratuite." },
              { n: "2", t: "Diagnostic", d: "Le technicien identifie l'espèce, l'ampleur et les points d'entrée." },
              { n: "3", t: "Traitement", d: "Intervention adaptée : appâts, pulvérisation, chaleur, piégeage." },
              { n: "4", t: "Suivi", d: "Garantie 30 jours. Recommandations pour éviter la récidive." },
            ].map((e) => (
              <div key={e.n} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm mb-3"
                  style={{ backgroundColor: "#1B4332", color: "#FBBF24" }}
                >
                  {e.n}
                </div>
                <h3 className="font-bold mb-1 text-sm" style={{ color: "#1B4332" }}>{e.t}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{e.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20 rounded-2xl p-8 md:p-10" style={{ backgroundColor: "#F9FAFB" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: "#FBBF24" }}>Certifications & conformité</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1B4332" }}>
                Un cadre réglementaire strict
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tous nos techniciens possèdent l&apos;agrément phytosanitaire délivré par le
                SPF Santé publique. Les produits utilisés sont homologués en Belgique et
                appliqués dans le respect des doses et des zones autorisées.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Nos interventions sont conformes aux exigences AFSCA pour les clients
                professionnels (HoReCa, commerces alimentaires, collectivités).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { t: "Agrément phytosanitaire", s: "SPF Santé publique" },
                { t: "Produits homologués", s: "Biocides autorisés BE" },
                { t: "Conformité AFSCA", s: "Pros de l'alimentaire" },
                { t: "Formation continue", s: "Mise à jour annuelle" },
              ].map((c) => (
                <div key={c.t} className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-xl mb-2">✅</div>
                  <div className="font-bold text-sm" style={{ color: "#1B4332" }}>{c.t}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{c.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 border-t border-b border-gray-100">
          {[
            { val: "+500", label: "Interventions réalisées" },
            { val: "30j", label: "Garantie incluse" },
            { val: "24h", label: "Délai d'intervention" },
            { val: "7j/7", label: "Disponibilité" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#1B4332" }}>{s.val}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Un problème de nuisibles à Liège ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contactez-nous pour un devis gratuit. Un technicien certifié intervient
            chez vous sous 24h dans toute la région liégeoise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{ backgroundColor: "#1B4332", color: "white" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Demander un devis gratuit →
            </Link>
            <a
              href="tel:+32466442454"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
