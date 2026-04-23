import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désinsectisation Seraing — Cafards, fourmis, guêpes | Sayonarat",
  description:
    "Désinsectisation professionnelle à Seraing. Traitement cafards, fourmis, blattes, guêpes et frelons. Intervention sous 48h, devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Seraing",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Seraing",
  description: "Service de désinsectisation professionnelle à Seraing. Cafards, fourmis, guêpes, frelons.",
  serviceType: "PestControl",
};

const faqs = [
  {
    q: "Pourquoi les cafards sont-ils fréquents à Seraing ?",
    a: "Seraing compte de nombreux immeubles anciens avec des gaines techniques et canalisations partagées. Les blattes germaniques se propagent facilement entre appartements via ces passages. La proximité des zones industrielles et de la Meuse crée aussi des conditions d'humidité favorables.",
  },
  {
    q: "Combien coûte une désinsectisation à Seraing ?",
    a: "Entre 120 € et 300 € pour un appartement ou une maison selon le type d'insecte et la superficie. Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Intervenez-vous pour les nids de guêpes à Seraing ?",
    a: "Oui. Sayonarat intervient pour la destruction de nids de guêpes et frelons à Seraing et dans toutes les communes voisines. Intervention nocturne sécurisée sous 48h.",
  },
];

export default function DesinsectisationSeraingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Seraing
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Seraing — Cafards, fourmis, guêpes
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Sayonarat met en relation les habitants de Seraing avec des techniciens certifiés
            en désinsectisation. Cafards, fourmis, blattes, guêpes, frelons — intervention sous 48h.
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
          Désinsectisation à Seraing : les insectes les plus fréquents
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Seraing présente un profil parasitaire spécifique lié à son histoire industrielle et à son bâti.
          Les immeubles ouvriers anciens, les caves humides et la proximité de la Meuse créent des
          conditions favorables à plusieurs espèces nuisibles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {[
            { icon: "🪲", titre: "Blattes et cafards", desc: "La blatte germanique est l'insecte le plus signalé à Seraing. Elle se propage via les gaines techniques des immeubles anciens. Traitement par gel professionnel, 2 passages garantis." },
            { icon: "🐜", titre: "Fourmis", desc: "Les fourmis pharaons (espèce tropicale) colonisent les immeubles chauffés. Les fourmis noires envahissent les cuisines et jardins. Traitement adapté selon l'espèce." },
            { icon: "🐝", titre: "Guêpes et frelons", desc: "Les nids se logent dans les combles, gouttières et arbres. Intervention nocturne sécurisée. Frelon asiatique signalé et traité selon protocole AFSCA." },
            { icon: "🦟", titre: "Moustiques et moucherons", desc: "Zones humides près de la Meuse propices aux moustiques. Traitement des points d'eau stagnante et des zones de repos." },
          ].map((s) => (
            <div key={s.titre} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{s.titre}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Pourquoi Seraing est particulièrement exposée aux insectes nuisibles
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Plusieurs facteurs structurels expliquent la fréquence des infestations à Seraing :
        </p>
        <ul className="space-y-3 text-sm text-gray-700 mb-10">
          {[
            "Bâti ouvrier du 19e siècle : caves humides, gaines non étanchéifiées, passages entre mitoyens",
            "Proximité de la Meuse : humidité ambiante élevée, favorable aux blattes et moustiques",
            "Friches industrielles en reconversion : végétation dense, débris, habitats favorables aux colonies de guêpes",
            "Immeubles collectifs anciens : propagation facile entre appartements via canalisations partagées",
            "Quartiers denses (Jemeppe, Ougrée) : concentration de logements et risque de propagation élevé",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-green-50 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Notre intervention à Seraing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Intervention sous 48h", desc: "Technicien certifié disponible rapidement à Seraing et communes voisines." },
              { icon: "🎯", titre: "Diagnostic complet", desc: "Identification de l'espèce, des zones infestées et des voies d'entrée." },
              { icon: "✅", titre: "Garantie 30 jours", desc: "Retour sans frais si les insectes réapparaissent dans le mois suivant." },
            ].map((item) => (
              <div key={item.titre} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{item.titre}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes autour de Seraing</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Jemeppe-sur-Meuse", "Ougrée", "Boncelles", "Rotheux-Rimière", "Ramet", "Ivoz-Ramet"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Un insecte nuisible à Seraing ?</h2>
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
          <p className="text-sm text-gray-500 mb-3">Autres services à Seraing et dans la région :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/deratisation-seraing" className="underline" style={{ color: "#1B4332" }}>Dératisation Seraing</Link>
            <Link href="/desinsectisation-liege" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Liège</Link>
            <Link href="/desinsectisation-herstal" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Herstal</Link>
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
          </div>
        </div>
      </section>
    </>
  );
}
