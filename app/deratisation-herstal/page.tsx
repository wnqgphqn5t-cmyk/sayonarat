import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dératisation Herstal — Intervention rapide | Sayonarat",
  description:
    "Dératisation professionnelle à Herstal. Rats, souris, rongeurs. Intervention sous 24h, devis gratuit, techniciens certifiés.",
};

const faqs = [
  {
    q: "Intervenez-vous à Herstal et ses quartiers ?",
    a: "Oui. Nous couvrons tout Herstal : centre, Milmort, Vottem, Liers. Intervention possible le jour même selon disponibilités.",
  },
  {
    q: "Pourquoi Herstal est-elle exposée aux rongeurs ?",
    a: "La zone industrielle de Milmort et la proximité du port autonome de Liège créent des conditions favorables aux rongeurs. Les entrepôts et zones de stockage sont des foyers fréquents.",
  },
  {
    q: "Que faire en attendant le technicien ?",
    a: "Bloquez les accès visibles (fissures, espaces sous les portes), ne laissez pas de nourriture accessible, et évitez de déplacer les excréments sans protection.",
  },
  {
    q: "Quel est le prix d'une dératisation à Herstal ?",
    a: "Entre 150 € et 350 € selon la superficie. Devis gratuit sous 24h.",
  },
  {
    q: "Intervenez-vous aussi pour les entreprises à Herstal ?",
    a: "Oui. Nous traitons aussi bien les particuliers que les entreprises, restaurants et entrepôts de la zone industrielle de Herstal.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dératisation à Herstal",
  provider: { "@type": "LocalBusiness", name: "Sayonarat" },
  areaServed: "Herstal",
  serviceType: "PestControl",
};

export default function DeratisationHerstalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/deratisation-liege" className="hover:text-white">Dératisation Liège</Link> › Herstal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Dératisation Herstal — Intervention rapide | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Rats ou souris à Herstal ? Un technicien certifié intervient chez vous sous 24h.
            Diagnostic gratuit sur place, traitement adapté, garantie 30 jours.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
            className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
          Herstal : zone industrielle et rongeurs, un problème concret
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Herstal abrite la zone industrielle de Milmort et le port autonome de Liège —
          deux environnements qui concentrent entrepôts, stockages alimentaires et déchets
          industriels. Les rongeurs s&apos;y installent en masse, puis colonisent les quartiers
          résidentiels voisins : Vottem, Liers, Pontisse. La proximité du canal Albert
          facilite leur déplacement le long des berges jusqu&apos;aux habitations.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Les entreprises de la zone industrielle sont particulièrement vulnérables :
          une infestation non déclarée dans un entrepôt alimentaire peut entraîner
          une fermeture administrative. Nos techniciens établissent des rapports
          d&apos;intervention certifiés, conformes aux exigences AFSCA pour les professionnels.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Pour les particuliers, nous intervenons dans tout Herstal : centre,
          Milmort, Vottem, Liers, Pontisse, Wandre. Diagnostic complet, traitement
          et sécurisation des accès inclus.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-xl mb-10">
          <p className="font-semibold text-gray-800">📊 Bon à savoir</p>
          <p className="text-sm text-gray-700 mt-1">
            Un rat peut passer par un trou de la taille d&apos;une pièce de 2€, une souris par 5mm.
            Les passages de câbles, joints de porte et fissures de fondation sont les entrées
            les plus fréquentes à Herstal — la sécurisation est incluse dans chaque intervention.
          </p>
        </div>

        <p className="text-gray-600 text-sm mb-8">
          Autres communes :{" "}
          <Link href="/deratisation-seraing" className="underline" style={{ color: "#1B4332" }}>Seraing</Link>,{" "}
          <Link href="/deratisation-ans" className="underline" style={{ color: "#1B4332" }}>Ans</Link>,{" "}
          <Link href="/deratisation-saint-nicolas" className="underline" style={{ color: "#1B4332" }}>Saint-Nicolas</Link>,{" "}
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
            Questions fréquentes — Dératisation Herstal
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
        <h2 className="text-2xl font-bold mb-3">Rongeurs à Herstal ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Intervention sous 24h. Devis gratuit et sans engagement.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
          className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Demander un devis gratuit →
        </Link>
      </section>
    </>
  );
}
