import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cafards Liège — Élimination garantie, intervention rapide | Sayonarat",
  description:
    "Infestation de cafards à Liège ? Traitement professionnel par gel insecticide ou pulvérisation. Résultat garanti, devis gratuit sous 24h. Techniciens certifiés.",
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
    q: "Comment savoir si j'ai des cafards dans mon appartement à Liège ?",
    a: "Le signe le plus fiable : allumer la lumière la nuit dans la cuisine et voir des insectes brun-rouille fuir rapidement. Autres indices : odeur huileuse caractéristique, petits points noirs (excréments) derrière le frigo ou sous l'évier, et mues transparentes dans les recoins.",
  },
  {
    q: "Pourquoi le spray du commerce ne fonctionne pas contre les cafards ?",
    a: "Les sprays grand public tuent les individus visibles mais n'atteignent pas les œufs (oothèques) ni les cafards cachés dans les gaines, murs creux et joints de carrelage. Pire : ils dispersent la colonie dans d'autres pièces. Le gel insecticide professionnel, ingéré et transmis entre individus, est la seule méthode vraiment efficace.",
  },
  {
    q: "Combien coûte un traitement cafards à Liège ?",
    a: "Entre 120 € et 300 € selon la superficie et l'ampleur de l'infestation. Le gel insecticide professionnel est la méthode la plus courante : rapide, sans odeur, sans évacuation du logement. Devis gratuit sous 24h.",
  },
  {
    q: "Faut-il quitter le logement pendant le traitement ?",
    a: "Pour le traitement par gel insecticide : non, vous pouvez rester. Pour un traitement par pulvérisation : 2 à 4 heures d'absence suffisent. Le technicien vous précise les consignes lors de la prise en charge.",
  },
  {
    q: "Les cafards peuvent-ils venir de chez les voisins ?",
    a: "Oui, c'est fréquent dans les immeubles liégeois. Les cafards circulent par les gaines techniques, les tuyaux et les fissures entre appartements. Un traitement individuel sans coordination avec la copropriété risque de ne pas suffire. Sayonarat peut coordonner une intervention multi-logements si nécessaire.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Élimination cafards à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Liège",
  description: "Service professionnel d'élimination de cafards à Liège. Traitement par gel insecticide ou pulvérisation, résultat garanti.",
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

export default function CafardsLiegePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Cafards Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cafards à Liège — Élimination garantie | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Une infestation de cafards s&apos;étend vite et ne disparaît pas seule.
            Sayonarat vous met en contact avec un technicien certifié à Liège,
            disponible sous 24h, pour un traitement efficace et durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center"
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

      {/* Image + signes */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 mb-10">
          <Image
            src="/cuisine-desinsectisation.jpg"
            alt="Cuisine traitée contre les cafards à Liège"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Cuisine saine après traitement professionnel cafards — Sayonarat Liège</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Signes d&apos;une infestation de cafards
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Les cafards (blattes germanique ou orientale) sont nocturnes. Ils se cachent
          dans les zones chaudes et humides : derrière le frigo, sous l&apos;évier, dans les
          gaines électriques et les joints de carrelage. En journée, leur présence visible
          signale déjà une infestation avancée.
        </p>
        <ul className="space-y-3 mb-10">
          {signes.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-amber-500 mt-0.5">⚠️</span>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>

        {/* Pourquoi pro */}
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi un traitement professionnel ?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          La blatte germanique — espèce la plus répandue à Liège — se reproduit à une
          vitesse alarmante : une femelle pond jusqu&apos;à 40 œufs par oothèque, et une
          nouvelle génération éclôt toutes les 6 semaines. Un spray du commerce tue
          les individus visibles mais ne touche ni les œufs ni les cafards cachés dans
          les parois et gaines techniques.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          À Liège, les immeubles anciens des quartiers Outremeuse, Sainte-Marguerite
          et Bressoux présentent un risque élevé de propagation inter-logements via
          les gaines communes. Un traitement ciblé par un professionnel est indispensable
          pour éradiquer la colonie à la source.
        </p>

        {/* Méthodes */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
          Deux méthodes de traitement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border-2 border-green-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💚</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Gel insecticide professionnel</h3>
            <p className="text-sm text-gray-600 mb-3">
              Appâts en gel déposés dans les zones de vie des cafards. Ingéré et transmis
              entre individus, il détruit la colonie de l&apos;intérieur. Sans odeur, sans
              évacuation, résultat en quelques jours.
            </p>
            <div className="text-sm font-medium text-green-700">✅ Méthode privilégiée · Pas d&apos;évacuation · Sans résidu</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">💨</div>
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Pulvérisation insecticide</h3>
            <p className="text-sm text-gray-600 mb-3">
              Traitement en surface des zones infestées avec insecticide rémanent.
              Adapté aux grandes infestations ou aux locaux professionnels.
              Absence de 2 à 4h requise.
            </p>
            <div className="text-sm font-medium text-green-700">✅ Efficace grandes surfaces · Locaux pro · HoReCa</div>
          </div>
        </div>

        {/* Bloc info */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">🏢 Cafards dans un immeuble à Liège</p>
          <p className="text-sm text-gray-700 mt-1">
            Dans un immeuble collectif, la responsabilité du traitement dépend de
            l&apos;origine de l&apos;infestation. Si elle provient des parties communes, c&apos;est
            la copropriété qui doit agir. Sayonarat peut coordonner une intervention
            multi-logements pour éliminer la source définitivement.{" "}
            <Link href="/blog/cafards-immeuble-responsabilite" className="underline font-medium" style={{ color: "#1B4332" }}>
              En savoir plus sur les responsabilités
            </Link>
          </p>
        </div>

        {/* CTA */}
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
            Questions fréquentes — Cafards Liège
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

      {/* Liens communes */}
      <section className="py-10 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Désinsectisation dans les communes voisines
        </h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Désinsectisation Seraing", href: "/desinsectisation-seraing" },
            { label: "Désinsectisation Herstal", href: "/desinsectisation-herstal" },
            { label: "Désinsectisation Ans", href: "/desinsectisation-ans" },
            { label: "Désinsectisation Saint-Nicolas", href: "/desinsectisation-saint-nicolas" },
            { label: "Désinsectisation Flémalle", href: "/desinsectisation-flemalle" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Cafards à Liège ? Agissez maintenant.</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Chaque semaine d&apos;attente multiplie la colonie. Contactez-nous pour un devis gratuit et une intervention rapide.
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
