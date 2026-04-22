import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Liège — Élimination rats & souris | Sayonarat",
  description:
    "Dératisation professionnelle à Liège. Élimination rats, souris, campagnols. Intervention sous 24h, devis gratuit. Traitement garanti 30 jours.",
};

const faqs = [
  {
    q: "Comment savoir si j'ai des rats chez moi à Liège ?",
    a: "Signes typiques : bruits de grattement la nuit, excréments noirs de 1 à 2 cm, traces de morsures sur câbles ou aliments, trous dans les murs ou planchers.",
  },
  {
    q: "Combien de temps dure une intervention de dératisation ?",
    a: "Entre 1h et 3h selon la superficie. Nous réalisons un diagnostic, posons les appâts et pièges, puis revenons 10 jours plus tard pour vérifier l'efficacité.",
  },
  {
    q: "Les produits utilisés sont-ils dangereux ?",
    a: "Nos techniciens utilisent des rodenticides homologués en Belgique. Ils sont sécurisés dans des boîtiers anti-enfants et anti-animaux de compagnie.",
  },
  {
    q: "Quel est le prix d'une dératisation à Liège ?",
    a: "Entre 90 € et 200 € selon la taille du logement et le degré d'infestation. Devis gratuit et sans engagement sous 24h.",
  },
  {
    q: "La dératisation fonctionne-t-elle dès la première intervention ?",
    a: "Dans la majorité des cas, oui. Nous offrons un suivi de 30 jours avec retour sans frais si les nuisibles réapparaissent.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Liège",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Liège",
      postalCode: "4000",
      addressCountry: "BE",
    },
  },
  areaServed: "Liège",
  description: "Service de dératisation professionnelle à Liège. Élimination de rats et souris.",
  serviceType: "PestControl",
};

export default function DeratisationLiegePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Dératisation Liège
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Liège — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Vous avez des rats ou des souris à Liège ? Sayonarat vous met en contact avec un
            dératiseur certifié disponible sous 24h. Traitement efficace, produits homologués,
            résultat garanti 30 jours.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Dératisation à Liège : ce que les produits du commerce ne règlent pas
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          La plupart des gens essaient d&apos;abord seuls — raticide en supermarché, pièges à colle.
          Résultat : les rats évitent les zones traitées, se déplacent dans d&apos;autres pièces et
          continuent à se reproduire. Une femelle rat produit jusqu&apos;à 60 petits par an.
          Sans traiter les points d&apos;entrée et les nids, le problème empire.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          À Liège, le réseau d&apos;égouts dense le long de la Meuse, les caves des habitations
          du 19e siècle (Outremeuse, Saint-Léonard, Guillemins) et les friches industrielles
          créent des conditions idéales pour les rongeurs. Les rats bruns remontent par les
          canalisations — c&apos;est le vecteur d&apos;entrée n°1 dans les maisons liégeoises.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Un technicien certifié identifie les points d&apos;entrée exacts, sécurise les accès
          et pose des boîtiers homologués inaccessibles aux enfants et animaux. C&apos;est la
          différence entre une solution temporaire et une élimination définitive.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Chiffres Liège</p>
          <p className="text-sm text-gray-700 mt-1">
            Les signalements de rongeurs à Liège ont progressé chaque année depuis 2020,
            avec un pic en automne (octobre–novembre) quand les rats cherchent la chaleur des habitations.
            Les quartiers les plus touchés : Outremeuse, Bressoux, Saint-Nicolas et les abords du canal.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Comment se déroule une intervention à Liège ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { step: "1", title: "Diagnostic sur place", desc: "Le technicien inspecte caves, combles, canalisations et extérieur. Il identifie les traces fraîches, nids et couloirs de passage." },
            { step: "2", title: "Traitement ciblé", desc: "Pose de boîtiers à appâts sécurisés aux points stratégiques. Sécurisation des entrées pour empêcher de nouveaux rongeurs." },
            { step: "3", title: "Suivi J+10", desc: "Retour obligatoire 10 jours après pour contrôler l'efficacité. Garantie 30 jours : on revient sans frais si nécessaire." },
          ].map((s) => (
            <div key={s.step} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-2xl font-bold mb-2" style={{ color: "#1B4332" }}>Étape {s.step}</div>
              <div className="font-semibold mb-1">{s.title}</div>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Zones d&apos;intervention à Liège
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Nous intervenons dans tous les quartiers de Liège : Outremeuse, Guillemins, Saint-Léonard,
          Bressoux, Grivegnée, Jupille, Herstal, ainsi que dans les communes de{" "}
          <Link href="/deratisation-seraing" className="underline" style={{ color: "#1B4332" }}>Seraing</Link>,{" "}
          <Link href="/deratisation-herstal" className="underline" style={{ color: "#1B4332" }}>Herstal</Link>,{" "}
          <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>Ans</Link>,{" "}
          <Link href="/deratisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Saint-Nicolas</Link> et{" "}
          <Link href="/deratisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Flémalle</Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
            Questions fréquentes — Dératisation Liège
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

      {/* CTA */}
      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rats ou souris détectés à Liège ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>
          Agissez vite. Un technicien certifié peut intervenir chez vous dès demain.
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
