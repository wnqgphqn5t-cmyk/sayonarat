import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Urgence nuisibles Belgique — Intervention rapide 7j/7 | Sayonarat",
  description:
    "Situation urgente avec des nuisibles en Belgique ? Nid de guêpes actif, rats dans la maison, punaises de lit : intervention rapide 7j/7. Appelez le +32 466 44 24 54.",
};

const scenarios = [
  {
    emoji: "🐝",
    titre: "Nid de guêpes ou frelons actif",
    desc: "Nid visible avec va-et-vient, proche d'une entrée, d'une fenêtre ou d'un lieu de passage. Risque réel de piqûres multiples.",
    delai: "Intervention prioritaire",
  },
  {
    emoji: "🐀",
    titre: "Rats aperçus en journée",
    desc: "Voir un rat en pleine journée signifie une infestation déjà installée. Risque sanitaire immédiat (leptospirose, hantavirus).",
    delai: "Sous 24 à 48h",
  },
  {
    emoji: "🛏️",
    titre: "Piqûres nocturnes multiples",
    desc: "Traces de sang sur les draps, piqûres en ligne au réveil. Chaque nuit d'attente, la colonie double son territoire.",
    delai: "Sous 24 à 48h",
  },
  {
    emoji: "🪳",
    titre: "Cafards en cuisine",
    desc: "Présence visible de cafards la nuit ou en journée. Contamination alimentaire et propagation rapide dans l'immeuble.",
    delai: "Sous 24 à 48h",
  },
  {
    emoji: "🐜",
    titre: "Invasion de fourmis ou mites",
    desc: "Colonie visible dans les placards, cuisine, ou denrées contaminées. Traitement rapide pour éviter l'expansion.",
    delai: "Sous 48h",
  },
  {
    emoji: "🏢",
    titre: "Urgence professionnelle",
    desc: "Commerce alimentaire, restaurant, HoReCa : toute présence de nuisibles impose une intervention immédiate pour rester conforme AFSCA.",
    delai: "Intervention prioritaire",
  },
];

const etapes = [
  { num: "1", titre: "Appelez", desc: "Décrochez et composez le +32 466 44 24 54. Disponible 7j/7." },
  { num: "2", titre: "Diagnostic", desc: "Nous qualifions la situation et confirmons le créneau d'intervention." },
  { num: "3", titre: "Intervention", desc: "Un technicien certifié se déplace avec le matériel adapté." },
  { num: "4", titre: "Suivi", desc: "Garantie 30 jours incluse. Retour offert si réinfestation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  name: "Sayonarat — Urgence nuisibles Belgique",
  telephone: "+32466442454",
  areaServed: "BE",
  availableService: {
    "@type": "Service",
    name: "Intervention d'urgence nuisibles",
    serviceType: "PestControl",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "22:00",
  },
};

export default function UrgencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero with live indicator */}
      <section
        className="relative overflow-hidden text-white px-4 py-16 md:py-20"
        style={{
          background: "radial-gradient(ellipse at top, #2D6A4F 0%, #1B4332 50%, #0F2E22 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />

        <div className="relative max-w-5xl mx-auto">
          <p className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Accueil</Link> › Urgence
          </p>

          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="text-sm font-medium">Équipe disponible maintenant · 7j/7</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Urgence nuisibles<br />
            <span style={{ color: "#FBBF24" }}>en Belgique ?</span>
          </h1>

          <p className="text-green-100 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Nid de guêpes actif, rats aperçus, punaises de lit, cafards :
            chaque heure compte. Nos techniciens certifiés interviennent
            rapidement partout en Belgique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:+32466442454"
              className="group relative overflow-hidden rounded-2xl font-bold px-8 py-5 text-center text-lg transition-all hover:scale-[1.02] shadow-2xl"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span>
                <span>+32 466 44 24 54</span>
              </span>
            </a>
            <Link
              href="/contact"
              className="rounded-2xl font-semibold px-8 py-5 text-center text-lg border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Demander un rappel →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "7j/7", label: "Disponibilité" },
              { val: "24-48h", label: "Délai moyen" },
              { val: "BE", label: "Zone d'intervention" },
              { val: "30j", label: "Garantie résultat" },
            ].map((s) => (
              <div key={s.label} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <div className="text-2xl font-bold" style={{ color: "#FBBF24" }}>{s.val}</div>
                <div className="text-xs text-green-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations d'urgence */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FBBF24" }}>
              Situations traitées en urgence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1B4332" }}>
              Dans quels cas appeler immédiatement ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {scenarios.map((s) => (
              <div
                key={s.titre}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-300 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{s.emoji}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{s.titre}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{s.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {s.delai}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process 4 étapes */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#FBBF24" }}>
              Comment ça marche
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1B4332" }}>
              De l&apos;appel à la résolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {etapes.map((e, i) => (
              <div key={e.num} className="relative">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-4"
                    style={{ backgroundColor: "#1B4332", color: "#FBBF24" }}
                  >
                    {e.num}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#1B4332" }}>{e.titre}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{e.desc}</p>
                </div>
                {i < etapes.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5" style={{ backgroundColor: "#D1D5DB" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 px-4" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { emoji: "🏅", t: "Techniciens certifiés", s: "Agrément phytosanitaire belge" },
              { emoji: "🛡️", t: "Garantie 30 jours", s: "Retour offert si réinfestation" },
              { emoji: "💶", t: "Devis gratuit", s: "Prix annoncé avant intervention" },
              { emoji: "🔒", t: "Discrétion totale", s: "Véhicules banalisés" },
            ].map((t) => (
              <div key={t.t}>
                <div className="text-3xl mb-2">{t.emoji}</div>
                <div className="font-bold text-sm mb-1" style={{ color: "#1B4332" }}>{t.t}</div>
                <div className="text-xs text-gray-500">{t.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA bold */}
      <section
        className="relative py-20 px-4 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{
          background: "radial-gradient(circle at 20% 50%, #FBBF24 0%, transparent 40%)",
        }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-sm font-medium">Ligne d&apos;urgence active</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            N&apos;attendez pas.<br />
            <span style={{ color: "#FBBF24" }}>Appelez maintenant.</span>
          </h2>

          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Plus vous attendez, plus l&apos;infestation s&apos;étend et plus le traitement coûte cher.
            Un simple appel suffit pour déclencher l&apos;intervention.
          </p>

          <a
            href="tel:+32466442454"
            className="inline-flex items-center gap-4 rounded-2xl font-bold px-10 py-6 text-xl transition-all hover:scale-[1.02] shadow-2xl"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          >
            <span className="text-3xl">📞</span>
            <span>+32 466 44 24 54</span>
          </a>

          <p className="mt-6 text-sm text-green-200">
            Ou <Link href="/contact" className="underline hover:text-white">demandez un rappel en ligne</Link>
          </p>
        </div>
      </section>
    </>
  );
}
