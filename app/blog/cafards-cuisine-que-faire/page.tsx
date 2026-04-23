import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cafards dans la cuisine : que faire ? Guide complet — Sayonarat Liège",
  description:
    "Vous avez trouvé des cafards dans votre cuisine à Liège ? Voici les étapes immédiates, les erreurs à éviter et quand appeler un professionnel.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cafards dans la cuisine : que faire ? Guide complet pour Liège",
  description:
    "Étapes immédiates, erreurs à éviter et traitement professionnel contre les cafards à Liège.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://sayonarat.be" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sayonarat.be/blog/cafards-cuisine-que-faire",
  },
};

const faq = [
  {
    q: "D'où viennent les cafards dans une cuisine propre ?",
    a: "Les cafards arrivent le plus souvent via les cartons d'emballage (livraisons, déménagement), les sacs de courses venant de magasins infestés, ou par les canalisations et gaines techniques depuis un voisin ou les parties communes. Une cuisine propre n'est pas à l'abri — les blattes cherchent la chaleur et l'humidité, pas la saleté.",
  },
  {
    q: "Les cafards disparaissent-ils seuls ?",
    a: "Non. Une infestation de cafards ne se résorbe jamais spontanément. Une blatte germanique pond 4 à 8 oothèques dans sa vie, chacune contenant 30 à 40 œufs. Sans traitement, la colonie double en quelques semaines.",
  },
  {
    q: "Les produits du supermarché sont-ils efficaces contre les cafards ?",
    a: "Partiellement. Les sprays du commerce tuent les individus visibles mais n'atteignent pas les œufs ni les blattes cachées dans les recoins. Pire : ils peuvent disperser la colonie dans d'autres pièces. Pour une infestation établie, seul un gel insecticide professionnel appliqué aux bons endroits est réellement efficace.",
  },
  {
    q: "Combien coûte un traitement cafards à Liège ?",
    a: "Entre 120 € et 280 € pour un appartement ou une maison, selon la superficie et l'ampleur de l'infestation. En général 2 passages sont nécessaires à 2 semaines d'intervalle. Devis gratuit chez Sayonarat sous 24h.",
  },
  {
    q: "Les cafards sont-ils dangereux pour la santé ?",
    a: "Oui. Les blattes contaminent les aliments et surfaces avec leurs excréments et mues, pouvant provoquer des salmonelloses, gastro-entérites et réactions allergiques. Les enfants et personnes asthmatiques sont particulièrement sensibles aux allergènes de cafards.",
  },
];

export default function ArticleCafardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Cafards cuisine
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">
              Désinsectisation
            </span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Cafards dans la cuisine :<br />que faire ?
          </h1>
          <p className="text-green-100 text-lg">
            Par <strong>Victor F.</strong> — Expert en lutte antiparasitaire à Liège
          </p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Si vous trouvez des cafards dans votre cuisine : <strong>1)</strong> ne vaporisez pas
            de spray — ça disperse la colonie, <strong>2)</strong> retirez toute nourriture accessible,
            <strong> 3)</strong> identifiez les zones chaudes et humides infestées,
            <strong> 4)</strong> appelez un professionnel. Les blattes se reproduisent très vite —
            chaque semaine d&apos;attente aggrave la situation.
          </p>
        </div>

        <p>
          La blatte germanique (<em>Blattella germanica</em>) est l&apos;espèce la plus fréquente dans
          les cuisines liégeoises. Elle mesure 1,5 cm, est brun clair avec deux bandes sombres sur
          le thorax, et ne sort presque jamais en plein jour. Si vous en voyez une le matin,
          c&apos;est qu&apos;il y en a des dizaines cachées dans vos appareils électroménagers.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les 5 cachettes préférées des cafards dans une cuisine
          </h2>
          <div className="space-y-4">
            {[
              { lieu: "Derrière et sous le réfrigérateur", raison: "Chaleur constante du moteur, obscurité, souvent humide" },
              { lieu: "Dans et autour du lave-vaisselle", raison: "Humidité permanente, restes alimentaires dans les joints" },
              { lieu: "Derrière les plaques de cuisson", raison: "Chaleur, graisse accumulée, recoins inaccessibles" },
              { lieu: "Joints de carrelage et plinthes", raison: "Fissures parfaites pour pondre les oothèques" },
              { lieu: "Gaines électriques et prises", raison: "Chaleur, obscurité, passage entre appartements" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 border-l-4 pl-4" style={{ borderColor: "#1B4332" }}>
                <div>
                  <p className="font-bold text-gray-900">{item.lieu}</p>
                  <p className="text-sm text-gray-600">{item.raison}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Ce qu&apos;il faut faire immédiatement
          </h2>
          <div className="space-y-4">
            {[
              {
                num: "1",
                titre: "Stocker tous les aliments dans des boîtes hermétiques",
                texte: "Farines, céréales, pain, fruits — tout ce qui est accessible en vrac doit être mis à l'abri. C'est la première mesure pour couper la source alimentaire.",
              },
              {
                num: "2",
                titre: "Ne pas utiliser de spray aérosol",
                texte: "Les sprays dispersent les blattes dans d'autres pièces sans tuer la colonie. Vous risquez de contaminer le salon, les chambres ou d'autres appartements si vous êtes en immeuble.",
              },
              {
                num: "3",
                titre: "Photographier les zones infestées",
                texte: "Notez où vous les avez vus et à quelle heure. Ces informations aident le technicien à cibler précisément le traitement — et à estimer l'ampleur de la colonie.",
              },
              {
                num: "4",
                titre: "Contacter un professionnel rapidement",
                texte: "Un gel insecticide professionnel, posé aux bons endroits (joints, recoins d'appareils), agit en 48–72h. C'est la seule méthode vraiment efficace sur une infestation établie.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.titre}</h3>
                  <p className="text-sm">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Pourquoi les blattes résistent-elles aux produits du commerce ?
          </h2>
          <p className="mb-3">
            La blatte germanique a développé des résistances génétiques à de nombreux insecticides
            courants. Certaines populations à Liège sont résistantes aux pyréthrinoïdes — la famille
            chimique la plus utilisée dans les sprays du supermarché. Elles le détectent et l&apos;évitent.
          </p>
          <p>
            Les gels professionnels utilisent des principes actifs différents (fipronil, indoxacarbe,
            imidaclopride) en micro-doses ciblées. La blatte ingère le gel, retourne dans son nid
            et contamine les autres via ses excréments — c&apos;est l&apos;effet &quot;cascade&quot; qui élimine
            la colonie entière, y compris les individus qui n&apos;ont pas touché l&apos;appât directement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Cafards en immeuble : qui est responsable ?
          </h2>
          <p className="mb-3">
            À Liège, de nombreux immeubles anciens (Féronstrée, Saint-Léonard, Outremeuse) ont des
            gaines techniques partagées entre appartements. Une infestation peut venir du voisin,
            de la cave commune ou des parties communes.
          </p>
          <p>
            En Belgique, si l&apos;infestation provient des parties communes ou d&apos;un vice du bâtiment,
            le propriétaire est légalement responsable de la prise en charge. Signalez par écrit
            à votre propriétaire ou syndic. Si vous êtes propriétaire, une intervention rapide
            évite la propagation aux autres appartements — et les complications légales qui suivent.
          </p>
        </section>

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Traitement cafards à Liège</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat intervient pour la désinsectisation (cafards, blattes, fourmis) dans toute
            la région liégeoise. Gel professionnel, 2 passages garantis, devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+32466442454"
              className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900"
              style={{ backgroundColor: "#FFD700" }}
            >
              Appeler — +32 466 44 24 54
            </a>
            <Link
              href="/desinsectisation-liege"
              className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white"
              style={{ backgroundColor: "#1B4332" }}
            >
              Voir le service désinsectisation
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Questions fréquentes
          </h2>
          <div className="space-y-5">
            {faq.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>Articles liés</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/comment-savoir-si-on-a-des-rats" className="underline font-medium" style={{ color: "#1B4332" }}>
                Comment savoir si on a des rats chez soi ?
              </Link>
            </li>
            <li>
              <Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>
                Prix d&apos;une dératisation à Liège en 2026
              </Link>
            </li>
            <li>
              <Link href="/blog/punaises-de-lit-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>
                Punaises de lit : que faire en cas d&apos;infestation ?
              </Link>
            </li>
          </ul>
        </section>

        <div className="border-t pt-6 text-sm text-gray-500 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
            style={{ backgroundColor: "#1B4332" }}
          >
            V
          </div>
          <div>
            <p className="font-semibold text-gray-800">Victor F.</p>
            <p>Fondateur de Sayonarat — Spécialiste en lutte antiparasitaire à Liège depuis 2022.</p>
          </div>
        </div>

      </article>
    </>
  );
}
