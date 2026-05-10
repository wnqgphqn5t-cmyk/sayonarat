import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/desinsectisation-saint-nicolas" },
  title: "Désinsectisation Saint-Nicolas — Cafards, fourmis, guêpes",
  description:
    "Désinsectisation professionnelle à Saint-Nicolas. Traitement cafards, fourmis, blattes, guêpes et frelons. Intervention sous 48h, devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Saint-Nicolas",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Saint-Nicolas",
  description: "Service de désinsectisation professionnelle à Saint-Nicolas. Cafards, fourmis, guêpes, frelons.",
  serviceType: "PestControl",
};

const faqs = [
  {
    q: "Quels insectes sont les plus fréquents à Saint-Nicolas ?",
    a: "Les blattes germaniques sont l'espèce la plus signalée à Saint-Nicolas, notamment dans les immeubles anciens de Tilleur et les zones proches de la Meuse. Les fourmis pharaons colonisent les bâtiments collectifs. Les guêpes sont très actives en été dans les jardins de Montegnée et Renory.",
  },
  {
    q: "Combien coûte une désinsectisation à Saint-Nicolas ?",
    a: "Entre 120 € et 400 € selon le type d'insecte et la superficie. Les nids de guêpes sont traités entre 90 € et 180 €. Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "La proximité de la Meuse influence-t-elle les infestations à Saint-Nicolas ?",
    a: "Oui. Les quartiers de Tilleur et Renory, en bordure de Meuse, présentent une humidité ambiante élevée favorable aux blattes et aux moustiques. Les berges sont également des zones de transit pour les rongeurs qui peuvent ensuite coloniser les habitations.",
  },
];

export default function DesinsectisationSaintNicolasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Saint-Nicolas
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Saint-Nicolas — Cafards, fourmis, guêpes
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Sayonarat met en relation les habitants de Saint-Nicolas avec des techniciens certifiés
            en désinsectisation. Cafards, fourmis, guêpes, frelons — intervention sous 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center">
              📞 +32 466 44 24 54
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Désinsectisation à Saint-Nicolas : contexte et spécificités
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Saint-Nicolas est une commune en bordure de Meuse, entre Liège et Seraing. Les quartiers
          de Tilleur et Renory, directement en bord de fleuve, présentent des conditions d&apos;humidité
          élevées favorables aux blattes et aux moustiques. Le bâti ouvrier ancien de la commune,
          avec ses caves communicantes et gaines non étanchéifiées, facilite la propagation des
          insectes entre logements mitoyens.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          La zone résidentielle de Montegnée, plus récente, est davantage touchée par les guêpes
          et frelons qui nichent dans les combles et jardins en été.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {[
            { icon: "🪲", titre: "Cafards", desc: "Traitement au gel professionnel dans les zones à risque : cuisine, cave, locaux techniques. Intervention ciblée, résultat garanti." },
            { icon: "🐜", titre: "Fourmis", desc: "Fourmis noires de jardin et fourmis pharaons dans les immeubles collectifs. Traitement adapté à l'espèce." },
            { icon: "🐝", titre: "Guêpes et frelons", desc: "Nids fréquents dans les combles et jardins de Montegnée et Saint-Nicolas-centre. Intervention nocturne garantie." },
            { icon: "🦟", titre: "Moustiques", desc: "Proximité de la Meuse favorable à la prolifération. Traitement larvicide des points d'eau stagnante." },
          ].map((s) => (
            <div key={s.titre} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{s.titre}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Notre intervention à Saint-Nicolas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Intervention sous 48h", desc: "Tilleur, Renory, Montegnée et Saint-Nicolas-centre couverts." },
              { icon: "🎯", titre: "Diagnostic complet", desc: "Identification de l'espèce, des zones infestées et des voies d'entrée." },
              { icon: "✅", titre: "Garantie 30 jours", desc: "Retour sans frais si les insectes réapparaissent dans le mois suivant l'intervention." },
            ].map((item) => (
              <div key={item.titre} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{item.titre}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
          Traitements spécialisés à Saint-Nicolas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <Link href="/cafards-saint-nicolas" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Cafards à Saint-Nicolas →</h3>
            <p className="text-sm text-gray-600">Gel insecticide professionnel sans évacuation. Colonie éliminée à la source, résultat en 72h.</p>
          </Link>
          <Link href="/fourmis-saint-nicolas" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Fourmis à Saint-Nicolas →</h3>
            <p className="text-sm text-gray-600">Traitement adapté à l&apos;espèce : fourmis noires, pharaons, charpentières.</p>
          </Link>
          <Link href="/guepes-frelons-saint-nicolas" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Guêpes &amp; frelons à Saint-Nicolas →</h3>
            <p className="text-sm text-gray-600">Destruction de nid garantie sous 24h. Intervention sécurisée.</p>
          </Link>
          <Link href="/mites-alimentaires-saint-nicolas" className="border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-green-300 transition-all block">
            <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Mites alimentaires à Saint-Nicolas →</h3>
            <p className="text-sm text-gray-600">Traitement des placards et denrées contaminées. Garantie 30 jours incluse.</p>
          </Link>
        </div>
      </section>
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes autour de Saint-Nicolas</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Tilleur", "Renory", "Montegnée", "Saint-Nicolas-centre", "Droixhe", "Seraing"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Un insecte nuisible à Saint-Nicolas ?</h2>
          <p className="text-green-200 mb-5 text-sm">Devis gratuit sous 24h. Intervention sous 48h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              📞 Appeler maintenant
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors">
              Demander un devis →
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Autres services dans la région :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/deratisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Dératisation Saint-Nicolas</Link>
            <Link href="/desinsectisation-liege" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Liège</Link>
            <Link href="/desinsectisation-seraing" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Seraing</Link>
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
          </div>
        </div>
      </section>
    </>
  );
}
