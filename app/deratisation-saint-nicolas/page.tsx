import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Saint-Nicolas — Intervention rapide",
  description:
    "Dératisation professionnelle à Saint-Nicolas. Rats, souris. Intervention sous 24h, devis gratuit, résultat garanti 30 jours.",
};

const faqs = [
  {
    q: "Intervenez-vous rapidement à Saint-Nicolas ?",
    a: "Oui. Saint-Nicolas est dans notre zone principale. Nous intervenons en moins de 24h dans toute la commune.",
  },
  {
    q: "Saint-Nicolas est-elle une zone à risque pour les rongeurs ?",
    a: "La commune est traversée par plusieurs cours d'eau secondaires, ce qui favorise la présence de rats musqués et de rats d'égout. Les abords de la Meuse sont particulièrement concernés.",
  },
  {
    q: "Traitez-vous aussi les jardins ?",
    a: "Oui. Les jardins, terrasses et remises sont souvent des zones de refuge pour les rongeurs. Nous intervenons aussi bien en intérieur qu'en extérieur.",
  },
  {
    q: "Quel est le prix d'une dératisation à Saint-Nicolas ?",
    a: "Entre 150 € et 450 € selon la superficie. Devis gratuit sous 24h.",
  },
  {
    q: "Proposez-vous des contrats de prévention pour les professionnels ?",
    a: "Oui. Pour les restaurants, épiceries et entrepôts, nous proposons des contrats de prévention avec des visites régulières et un rapport d'intervention certifié.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Saint-Nicolas",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Saint-Nicolas",
  serviceType: "PestControl",
};

export default function DeratisationSaintNicolasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Saint-Nicolas
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Saint-Nicolas — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rongeurs à Saint-Nicolas ? Sayonarat vous met en contact avec un technicien certifié
            disponible sous 24h. Traitement professionnel, résultat garanti.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Saint-Nicolas : entre Liège et Seraing, une position à risque
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Saint-Nicolas est coincée entre deux communes industrielles lourdes — Liège et Seraing.
          Les rongeurs des friches et des berges de la Meuse circulent librement d&apos;une commune
          à l&apos;autre. Les quartiers de Tilleur et Montegnée, proches des anciens sites industriels,
          sont les plus exposés. Les zones maraîchères et jardins potagers de la commune
          attirent également les rats en été.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Le profil des habitations à Saint-Nicolas est mixte : maisons ouvrières anciennes
          avec caves profondes, immeubles des années 70 et lotissements récents. Dans les
          maisons anciennes de Tilleur, les caves communicantes entre voisins permettent
          aux rongeurs de se déplacer sans jamais sortir à l&apos;air libre — ce qui rend
          l&apos;élimination plus complexe sans traitement de l&apos;ensemble du bâtiment.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Nous intervenons dans toute la commune : Tilleur, Montegnée, Saint-Nicolas-centre,
          et les quartiers résidentiels périphériques. Pour les copropriétés, un traitement
          collectif coordonné est possible et recommandé.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Bon à savoir</p>
          <p className="text-sm text-gray-700 mt-1">
            Les rongeurs parcourent jusqu&apos;à 3 km par nuit. Une infestation non traitée
            à Saint-Nicolas peut contaminer les habitations voisines de Seraing et Liège
            en quelques semaines — d&apos;où l&apos;importance d&apos;agir rapidement.
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-8">
          Autres communes :{" "}
          <Link href="/deratisation-seraing" className="underline" style={{ color: "#1B4332" }}>Seraing</Link>,{" "}
          <Link href="/deratisation-herstal" className="underline" style={{ color: "#1B4332" }}>Herstal</Link>,{" "}
          <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>Ans</Link>,{" "}
          <Link href="/deratisation-flemalle" className="underline" style={{ color: "#1B4332" }}>Flémalle</Link>,{" "}
          <Link href="/deratisation-liege" className="underline" style={{ color: "#1B4332" }}>Liège</Link>.
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
            Questions fréquentes — Dératisation Saint-Nicolas
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
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Saint-Nicolas ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
