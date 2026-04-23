import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désinsectisation Ans — Cafards, fourmis, guêpes | Sayonarat",
  description:
    "Désinsectisation professionnelle à Ans. Traitement cafards, fourmis, blattes, guêpes et frelons. Intervention sous 48h, devis gratuit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Désinsectisation à Ans",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
  areaServed: "Ans",
  description: "Service de désinsectisation professionnelle à Ans. Cafards, fourmis, guêpes, frelons.",
  serviceType: "PestControl",
};

const faqs = [
  {
    q: "Quels insectes sont les plus fréquents à Ans ?",
    a: "Les blattes germaniques sont fréquentes dans les immeubles du centre d'Ans et de Loncin. Les fourmis pharaons colonisent les bâtiments chauffés. Les guêpes germaniques nichent chaque été dans les jardins et combles des maisons résidentielles.",
  },
  {
    q: "Combien coûte une désinsectisation à Ans ?",
    a: "Entre 120 € et 300 € selon le type d'insecte et la superficie. Les nids de guêpes sont traités entre 80 € et 180 €. Devis gratuit sous 24h chez Sayonarat.",
  },
  {
    q: "Intervenez-vous dans toute la commune d'Ans ?",
    a: "Oui. Sayonarat intervient dans tous les quartiers d'Ans : Loncin, Alleur, Xhendremael, Ghlin et le centre-ville. Délai d'intervention sous 48h.",
  },
];

export default function DesinsectisationAnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/desinsectisation-liege" className="hover:text-white">Désinsectisation Liège</Link> › Ans
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Désinsectisation Ans — Cafards, fourmis, guêpes
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Sayonarat met en relation les habitants et entreprises d&apos;Ans avec des techniciens
            certifiés en désinsectisation. Intervention sous 48h, devis gratuit.
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
          Désinsectisation à Ans : contexte et spécificités
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Ans est une commune résidentielle en bordure de Liège, avec un tissu mixte de maisons
          individuelles et d&apos;immeubles collectifs. Les quartiers de Loncin et d&apos;Alleur concentrent
          une part importante du bâti ancien, propice aux infestations de blattes et de fourmis.
          La zone commerciale de Loncin attire également des rongeurs et insectes nuisibles liés
          aux stocks alimentaires.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Les jardins résidentiels d&apos;Ans (Xhendremael, Ghlin) voient chaque été une forte activité
          de guêpes germaniques, dont les nids se logent dans les combles, gouttières et haies denses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {[
            { icon: "🪲", titre: "Cafards", desc: "Traitement au gel professionnel dans les zones à risque : cuisine, cave, locaux techniques. 2 passages garantis à 2 semaines d'intervalle." },
            { icon: "🐜", titre: "Fourmis", desc: "Fourmis noires de jardin et fourmis pharaons dans les immeubles. Traitement adapté à l'espèce et à l'environnement." },
            { icon: "🐝", titre: "Guêpes et frelons", desc: "Nombreux nids chaque été dans les jardins résidentiels d'Ans. Intervention nocturne, destruction garantie." },
            { icon: "🦟", titre: "Moustiques", desc: "Traitement larvicide des points d'eau stagnante dans les jardins et espaces verts." },
          ].map((s) => (
            <div key={s.titre} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>{s.titre}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1B4332" }}>Notre intervention à Ans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", titre: "Intervention sous 48h", desc: "Particuliers et professionnels. Loncin, Alleur, Xhendremael, Ghlin couverts." },
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

        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Zones couvertes autour d&apos;Ans</h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {["Loncin", "Alleur", "Xhendremael", "Ghlin", "Ans-centre", "Juprelle"].map((v) => (
            <span key={v} className="bg-green-50 border border-green-200 px-4 py-1 rounded-full text-sm font-medium" style={{ color: "#1B4332" }}>{v}</span>
          ))}
        </div>

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Un insecte nuisible à Ans ?</h2>
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
            <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>Dératisation Ans</Link>
            <Link href="/desinsectisation-liege" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Liège</Link>
            <Link href="/desinsectisation-seraing" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Seraing</Link>
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
          </div>
        </div>
      </section>
    </>
  );
}
