import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/cafards-herstal" },
  title: "Cafards Herstal — Élimination garantie, intervention rapide",
  description:
    "Infestation de cafards à Herstal ? Traitement professionnel par gel insecticide ou pulvérisation. Résultat garanti, devis gratuit sous 24h. Techniciens certifiés.",
};

const signes = [
  "Cafards visibles la nuit dans la cuisine ou la salle de bain",
  "Odeur huileuse et musquée persistante",
  "Excréments noirs en forme de grains de riz sur les plans de travail",
  "Mues (peaux translucides) dans les coins et derrière les appareils",
  "Traces graisseuses le long des plinthes et tuyauteries",
];

const faqs = [
  {
    q: "Comment savoir si j'ai des cafards dans mon logement à Herstal ?",
    a: "Le signe le plus fiable : allumer la lumière la nuit dans la cuisine et voir des insectes brun-rouille fuir rapidement. Autres indices : odeur huileuse caractéristique, petits points noirs (excréments) derrière le frigo ou sous l'évier, et mues transparentes dans les recoins.",
  },
  {
    q: "Pourquoi les cafards se propagent-ils à Herstal ?",
    a: "Les cités sociales de Vottem et Liers ont des gaines techniques partagées entre appartements, permettant aux cafards de se propager rapidement d'un logement à l'autre. Sayonarat peut coordonner une intervention avec la régie des logements pour traiter l'ensemble du bâtiment.",
  },
  {
    q: "Combien coûte un traitement cafards à Herstal ?",
    a: "Entre 120 € et 380 € selon la superficie et l'ampleur de l'infestation. Le gel insecticide professionnel est la méthode la plus courante : rapide, sans odeur, sans évacuation du logement. Devis gratuit sous 24h.",
  },
  {
    q: "Faut-il quitter le logement pendant le traitement ?",
    a: "Pour le traitement par gel insecticide : non, vous pouvez rester. Pour un traitement par pulvérisation : 2 à 4 heures d'absence suffisent. Le technicien vous précise les consignes lors de la prise en charge.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Élimination cafards à Herstal",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Herstal", postalCode: "4040", addressCountry: "BE" },
  },
  areaServed: "Herstal",
  description: "Service professionnel d'élimination de cafards à Herstal. Traitement par gel insecticide, résultat garanti.",
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

export default function CafardsHerstalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-herstal" className="hover:text-white">Désinsectisation Herstal</Link> ›{" "}
            Herstal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cafards à Herstal — Élimination garantie | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Une infestation de cafards s'étend vite et ne disparaît pas seule.
            Sayonarat vous met en contact avec un technicien certifié à Herstal,
            disponible sous 24h, pour un traitement efficace et durable.
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

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
          <Image
            src="/cuisine-desinsectisation.jpg"
            alt={"Traitement cafards à Herstal"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Traitement professionnel cafards — Herstal</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Cafards à Herstal : pourquoi agir vite ?
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Les grandes cités sociales de Herstal (Vottem, Liers) concentrent des immeubles collectifs anciens avec des gaines techniques partagées qui facilitent la propagation rapide des cafards entre appartements. La coordination entre locataires et la copropriété est souvent nécessaire pour un traitement efficace.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          La blatte germanique se reproduit à une vitesse alarmante : une femelle pond jusqu'à 40 œufs
          par oothèque, et une nouvelle génération éclôt toutes les 6 semaines. Un spray du commerce
          tue les individus visibles mais ne touche ni les œufs ni les cafards cachés dans les parois.
          Un traitement professionnel est indispensable pour éradiquer la colonie à la source.
        </p>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Signes d'une infestation de cafards
        </h2>
        <ul className="space-y-3 mb-10">
          {signes.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">⚠</span>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>


        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <div>
            <p className="font-bold text-sm" style={{ color: "#1B4332" }}>Garantie 30 jours incluse</p>
            <p className="text-xs text-gray-600">Si des cafards réapparaissent dans les 30 jours suivant le traitement, le technicien revient sans frais.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Gel insecticide professionnel</h3>
            <p className="text-sm text-gray-600 mb-3">
              Appâts en gel déposés dans les zones de vie des cafards. Ingéré et transmis entre individus,
              il détruit la colonie de l'intérieur. Sans odeur, sans évacuation, résultat en quelques jours.
            </p>
            <div className="text-sm font-medium text-green-700">Méthode privilégiée · Pas d'évacuation</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Pulvérisation insecticide</h3>
            <p className="text-sm text-gray-600 mb-3">
              Traitement en surface des zones infestées. Adapté aux grandes infestations ou aux locaux
              professionnels. Absence de 2 à 4h requise.
            </p>
            <div className="text-sm font-medium text-green-700">Efficace grandes surfaces · Locaux pro</div>
          </div>
        </div>


        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-8">
          <p className="font-semibold text-gray-800 mb-3">Tarifs indicatifs — Cafards Herstal</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { type: "Studio / 1 pièce", prix: "120 – 180 €" },
              { type: "Appartement 2-3 pièces", prix: "180 – 260 €" },
              { type: "Grand appartement / maison", prix: "260 – 380 €" },
              { type: "Local professionnel / HoReCa", prix: "Sur devis" },
            ].map((t) => (
              <div key={t.type} className="flex justify-between bg-white rounded-lg px-4 py-2 border border-yellow-200">
                <span className="text-gray-700">{t.type}</span>
                <span className="font-bold" style={{ color: "#1B4332" }}>{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Devis gratuit et précis sous 24h après diagnostic sur place.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
            Questions fréquentes — Cafards Herstal
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Traitement cafards dans les villes voisines
        </h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Cafards Liège", href: "/cafards-liege" },
            { label: "Cafards Ans", href: "/cafards-ans" },
            { label: "Cafards Oupeye", href: "/cafards-oupeye" },
            { label: "Cafards Saint-Nicolas", href: "/cafards-saint-nicolas" }
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Cafards à Herstal ? Agissez maintenant.</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Chaque semaine d'attente multiplie la colonie. Contactez-nous pour un devis gratuit et une intervention rapide.
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
