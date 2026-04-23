import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Guêpes et frelons Herstal — Destruction nid rapide | Sayonarat",
  description:
    "Nid de guêpes ou frelons à Herstal ? Destruction professionnelle sous 48h. Intervention nocturne sécurisée, garantie résultat. Devis gratuit.",
};

const faqs = [
  {
    q: "Combien coûte la destruction d'un nid de guêpes à Herstal ?",
    a: "Entre 90 € et 180 € pour un nid accessible. Les nids en toiture haute ou en espace confiné peuvent nécessiter un supplément selon les conditions d'accès. Devis gratuit sous 24h.",
  },
  {
    q: "Pourquoi y a-t-il autant de nids de guêpes à Herstal ?",
    a: "Herstal cumule plusieurs facteurs favorables : zones industrielles en friches, berges de Meuse boisées, et nombreuses habitations avec combles anciens non isolés. Les guêpes germaniques s'y installent massivement chaque été entre juin et septembre.",
  },
  {
    q: "Comment savoir si c'est un frelon asiatique ou commun ?",
    a: "Le frelon asiatique est plus petit (25-30 mm), à abdomen noir avec une bande jaune-orangé étroite, et pattes jaunes à l'extrémité. Le frelon commun est plus grand (25-35 mm), brun-roux avec des rayures jaunes. Dans tous les cas, ne cherchez pas à identifier seul : appelez un professionnel.",
  },
  {
    q: "Quelle est la meilleure période pour détruire un nid à Herstal ?",
    a: "Le plus tôt est le mieux. Un nid traité en juin ou juillet (encore petit) est moins risqué et moins cher à traiter qu'un nid de septembre qui peut abriter plusieurs milliers d'individus. En automne, le nid meurt naturellement mais les reines fondatrices survivent et cherchent un abri pour l'hiver.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Destruction nid guêpes et frelons à Herstal",
  provider: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    address: { "@type": "PostalAddress", addressLocality: "Herstal", postalCode: "4040", addressCountry: "BE" },
  },
  areaServed: "Herstal",
  description: "Service de destruction de nids de guêpes et frelons à Herstal. Intervention nocturne sécurisée, résultat garanti.",
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

export default function GuepesHerstalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/guepes-frelons-liege" className="hover:text-white">Guêpes & frelons Liège</Link> › Herstal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guêpes et frelons à Herstal — Destruction nid | Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Nid de guêpes ou frelon détecté à Herstal ? Nos techniciens interviennent
            sous 48h, de nuit, avec l&apos;équipement adapté. Garantie 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Devis gratuit sous 24h →
            </Link>
            <a href="tel:+32466442454" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-72 mb-10">
          <Image src="/nid-guepes.jpg" alt="Nid de guêpes traité à Herstal" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-5">
            <p className="text-white text-sm font-medium">Intervention nocturne sur nid de guêpes — Herstal</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-10">
          <p className="font-bold text-red-800 mb-1">⚠️ N&apos;approchez pas le nid</p>
          <p className="text-sm text-red-700">Une guêpe dérangée libère des phéromones d&apos;alarme : toute la colonie peut attaquer en quelques secondes. Maintenez vos distances et appelez un professionnel.</p>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Herstal et les guêpes : un risque élevé en été</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          La configuration de Herstal — zones industrielles en reconversion, berges de Meuse, nombreuses maisons mitoyennes avec combles anciens — crée des conditions idéales pour l&apos;installation de nids de guêpes chaque été. Les guêpes germaniques investissent les charpentes dès avril, et le nid peut atteindre la taille d&apos;un ballon de football en août.
        </p>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Le frelon asiatique est également signalé à Herstal depuis plusieurs années. Contrairement au frelon commun, il construit souvent son nid en hauteur (arbres, toitures), ce qui complique l&apos;accès et nécessite un équipement spécialisé.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { emoji: "🌙", t: "Intervention nocturne", d: "Quand les guêpes sont au nid. Sécurité maximale pour tous." },
            { emoji: "🛡️", t: "Équipement intégral", d: "Protection certifiée. Aucun risque de piqûre pour le technicien." },
            { emoji: "✅", t: "Garantie 30 jours", d: "Retour offert si reprise d'activité du nid." },
          ].map((c) => (
            <div key={c.t} className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="text-3xl mb-2">{c.emoji}</div>
              <h3 className="font-bold mb-1" style={{ color: "#1B4332" }}>{c.t}</h3>
              <p className="text-sm text-gray-600">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" style={{ backgroundColor: "#1B4332", color: "white" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            Demander un devis gratuit →
          </Link>
          <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
            📞 Appeler maintenant
          </a>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1B4332" }}>Questions fréquentes — Guêpes Herstal</h2>
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
        <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>Destruction nid guêpes dans les communes voisines</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            { label: "Guêpes et frelons Liège", href: "/guepes-frelons-liege" },
            { label: "Guêpes et frelons Seraing", href: "/guepes-frelons-seraing" },
            { label: "Guêpes et frelons Ans", href: "/guepes-frelons-ans" },
            { label: "Guêpes et frelons Saint-Nicolas", href: "/guepes-frelons-saint-nicolas" },
            { label: "Guêpes et frelons Flémalle", href: "/guepes-frelons-flemalle" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline font-medium" style={{ color: "#1B4332" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: "#1B4332" }} className="py-14 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Nid de guêpes à Herstal ?</h2>
        <p className="mb-6" style={{ color: "#bbf7d0" }}>Plus le nid est traité tôt, plus c&apos;est simple et économique. Contactez-nous maintenant.</p>
        <Link href="/contact" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
          Devis gratuit →
        </Link>
      </section>
    </>
  );
}
