import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Seraing — Intervention rapide",
  description:
    "Dératisation professionnelle à Seraing. Élimination rats et souris sous 24h. Devis gratuit, techniciens certifiés, résultat garanti 30 jours.",
};

const faqs = [
  {
    q: "Intervenez-vous rapidement à Seraing ?",
    a: "Oui. Seraing fait partie de notre zone d'intervention principale. Nous intervenons généralement le jour même ou le lendemain de votre demande.",
  },
  {
    q: "Quels nuisibles traitez-vous à Seraing ?",
    a: "Rats, souris, cafards, punaises de lit, frelons, guêpes et fourmis. Pour chaque type, nous adaptons le traitement.",
  },
  {
    q: "Le traitement est-il adapté aux maisons avec jardin ?",
    a: "Oui. Nous intervenons aussi bien à l'intérieur qu'à l'extérieur. Les jardins et remises sont souvent des points d'entrée pour les rongeurs.",
  },
  {
    q: "Quel est le prix d'une dératisation à Seraing ?",
    a: "Entre 150 € et 450 € selon la superficie. Devis gratuit sous 24h, sans engagement.",
  },
  {
    q: "Y a-t-il plus de rongeurs à Seraing qu'ailleurs ?",
    a: "Les zones industrielles et les bords de Meuse à Seraing favorisent la présence de rats. Les quartiers résidentiels proches de ces zones sont plus exposés.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Seraing",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Seraing",
  serviceType: "PestControl",
};

export default function DeratisationSeraingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Seraing
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Seraing — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Problème de rongeurs à Seraing ? Un dératiseur professionnel intervient chez vous
            sous 24h. Traitement certifié, produits homologués, suivi garanti 30 jours.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi Seraing est particulièrement exposée aux rongeurs
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Seraing concentre deux facteurs majeurs d&apos;infestation : les friches des anciennes
          aciéries ArcelorMittal le long de la Meuse, et un parc immobilier dense avec de
          nombreuses caves communicantes. Les rats bruns colonisent les friches industrielles
          en été, puis migrent vers les habitations dès octobre quand les températures chutent.
          Les quartiers d&apos;Ougrée et de Jemeppe, proches des anciens sites sidérurgiques,
          sont les plus touchés.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le réseau d&apos;égouts de Seraing, vieilli et mal entretenu par endroits, est l&apos;autoroute
          des rats vers les habitations. Les remontées par les canalisations WC sont fréquentes
          dans les maisons de rangée du centre de Seraing et de Ramioul. Un bruit de grattement
          la nuit dans les murs ou les plafonds est souvent le premier signe.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nos techniciens interviennent dans tout Seraing : centre-ville, Jemeppe-sur-Meuse,
          Ougrée, Ramioul, Boncelles et Esneux. Diagnostic complet sur place, traitement
          adapté et sécurisation des points d&apos;entrée pour éviter les récidives.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Friches industrielles et rongeurs</p>
          <p className="text-sm text-gray-700 mt-1">
            Les friches industrielles de Seraing abritent des colonies de rats estimées à
            plusieurs milliers d&apos;individus. En automne, ces colonies migrent massivement
            vers les habitations voisines. Une intervention préventive en septembre–octobre
            réduit significativement le risque d&apos;infestation hivernale.
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-8">
          Vous êtes à Liège ?{" "}
          <Link href="/deratisation-liege" className="underline" style={{ color: "#1B4332" }}>
            Voir notre service dératisation Liège
          </Link>. Autres communes :{" "}
          <Link href="/deratisation-herstal" className="underline" style={{ color: "#1B4332" }}>Herstal</Link>,{" "}
          <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>Ans</Link>,{" "}
          <Link href="/deratisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Saint-Nicolas</Link>,{" "}
          <Link href="/deratisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Flémalle</Link>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>
            Questions fréquentes — Dératisation Seraing
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

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Seraing ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
