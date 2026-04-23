import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment savoir si on a des rats chez soi ? Les 7 signes — Sayonarat Liège",
  description:
    "Bruits la nuit, traces, excréments, odeurs… Voici les 7 signes qui indiquent une infestation de rats ou souris. Et quand appeler un dératiseur à Liège.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment savoir si on a des rats chez soi ? Les 7 signes à ne pas ignorer",
  description:
    "Bruits la nuit, excréments, traces de morsures : comment identifier une infestation de rats ou souris avant qu'elle s'aggrave.",
  datePublished: "2026-04-23",
  dateModified: "2026-04-23",
  author: { "@type": "Person", name: "Victor F." },
  publisher: {
    "@type": "Organization",
    name: "Sayonarat",
    url: "https://sayonarat.be",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sayonarat.be/blog/comment-savoir-si-on-a-des-rats",
  },
};

const faq = [
  {
    q: "Comment savoir si j'ai des rats ou des souris ?",
    a: "Les rats laissent des excréments de 1,5 à 2 cm en forme de capsule, les souris des crottes de 3-6 mm en forme de riz. Les rats font plus de bruit et grignotent des matériaux plus durs (câbles, tuyaux). Si vous entendez des bruits lourds la nuit, c'est probablement des rats.",
  },
  {
    q: "Les rats peuvent-ils être présents sans qu'on les voie ?",
    a: "Oui, les rats sont nocturnes et très discrets. Une infestation peut durer plusieurs semaines sans observation directe. Les signes indirects (odeurs, traces, excréments) apparaissent bien avant que vous ne voyiez un rat.",
  },
  {
    q: "Combien de temps faut-il pour éliminer une infestation de rats ?",
    a: "Une intervention professionnelle prend généralement 1 à 3 passages sur 2 à 3 semaines. La durée dépend de l'ampleur de l'infestation et de l'accessibilité des zones traitées.",
  },
  {
    q: "Est-ce dangereux d'avoir des rats chez soi ?",
    a: "Oui. Les rats transmettent la leptospirose (via leur urine), la salmonellose et d'autres maladies. Ils rongent aussi les câbles électriques, ce qui peut provoquer des incendies. Il faut agir rapidement.",
  },
];

export default function ArticleRatsPage() {
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
            <Link href="/blog" className="hover:text-white">Blog</Link> › Rats chez soi
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">
              Dératisation
            </span>
            <span className="text-xs text-green-300">23 avril 2026 · 5 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Comment savoir si on a des rats chez soi ?<br />
            Les 7 signes à ne pas ignorer
          </h1>
          <p className="text-green-100 text-lg">
            Par <strong>Victor F.</strong> — Expert en lutte antiparasitaire à Liège
          </p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        {/* Réponse directe — snippet Google */}
        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            Les 7 signes qui indiquent la présence de rats sont : bruits nocturnes dans les murs ou plafonds,
            excréments noirs de 1,5 à 2 cm, traces de morsures sur câbles ou aliments, odeur d&apos;urine
            persistante, traces de pattes dans la poussière, terriers dans le jardin, et fuites dans les
            aliments stockés. Si vous observez plusieurs de ces signes, une infestation est probable.
          </p>
        </div>

        <p>
          En Belgique, le rat brun (<em>Rattus norvegicus</em>) est le rongeur le plus fréquent dans les
          habitations. À Liège, les quartiers anciens comme <strong>Outremeuse, Bressoux ou Saint-Léonard</strong>
          — avec leurs caves communicantes et leurs bâtiments du 19e siècle — sont particulièrement exposés.
          Le problème : les rats sont nocturnes et discrets. Une infestation peut s&apos;installer pendant des
          semaines avant qu&apos;on la détecte.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Les 7 signes d&apos;une infestation de rats
          </h2>

          <div className="space-y-6">
            {[
              {
                num: "1",
                titre: "Des bruits nocturnes dans les murs ou le plafond",
                texte:
                  "Les rats sont actifs entre 22h et 4h du matin. Vous entendrez des grattements, couinements ou bruits de course dans les combles, les murs creux ou sous le plancher. Contrairement aux souris qui font des bruits légers, les rats produisent des sons plus lourds, parfois comparables à des pas rapides.",
              },
              {
                num: "2",
                titre: "Des excréments caractéristiques",
                texte:
                  "Les crottes de rat mesurent 1,5 à 2 cm, sont de couleur brun-noir et en forme de capsule arrondie aux extrémités. On les trouve généralement le long des murs, derrière les appareils électroménagers, dans les placards bas ou au sous-sol. Des excréments frais (brillants et mous) indiquent une activité récente.",
              },
              {
                num: "3",
                titre: "Des traces de morsures",
                texte:
                  "Le rat ronge pour user ses incisives qui poussent en permanence. Il s&apos;attaque aux câbles électriques (danger incendie), aux tuyaux, aux coins de portes en bois, aux sacs d&apos;aliments et même aux murs. Des copeaux de plastique ou de bois au sol sont un signe révélateur.",
              },
              {
                num: "4",
                titre: "Une odeur d&apos;urine persistante",
                texte:
                  "L&apos;urine de rat dégage une odeur d&apos;ammoniac forte et persistante, notamment dans les espaces confinés (cave, sous-sol, placard). Cette odeur s&apos;intensifie avec la chaleur. Si vous sentez une odeur étrange que vous n&apos;identifiez pas, c&apos;est un signal d&apos;alarme.",
              },
              {
                num: "5",
                titre: "Des traces de pattes ou de queue dans la poussière",
                texte:
                  "Les rats suivent toujours les mêmes chemins (on parle de &quot;coulées&quot;). Dans les zones poussiéreuses (cave, grenier), vous pouvez voir leurs empreintes de 4 doigts à l&apos;avant et 5 à l&apos;arrière, ainsi que la trace de leur queue.",
              },
              {
                num: "6",
                titre: "Des terriers dans le jardin",
                texte:
                  "Le rat brun est fouisseur. Il creuse des terriers de 6 à 9 cm de diamètre, généralement le long des murs, sous une terrasse ou près d&apos;un compost. Une entrée nette avec de la terre fraîche indique un terrier actif. À Liège, les rives de la Meuse et les jardins près des friches sont des zones à risque.",
              },
              {
                num: "7",
                titre: "Des aliments rongés ou emballages troués",
                texte:
                  "Un rat adulte consomme 20 à 30g d&apos;aliments par jour. Il s&apos;attaque aux placards bas, aux sacs de farine, de riz ou de croquettes pour animaux. Des sacs percés, des aliments éparpillés ou des emballages grignotés sont des preuves directes.",
              },
            ].map((s) => (
              <div key={s.num} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.titre}</h3>
                  <p className="text-sm">{s.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Rats ou souris : comment faire la différence ?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Critère</th>
                  <th className="px-4 py-2 text-left">Rat brun</th>
                  <th className="px-4 py-2 text-left">Souris grise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Taille", "20–25 cm (corps)", "7–10 cm (corps)"],
                  ["Excréments", "1,5–2 cm, capsule", "3–6 mm, allongé"],
                  ["Bruits", "Lourds, course", "Légers, grattements"],
                  ["Terriers", "Oui, jardin/cave", "Non (se cache)"],
                  ["Danger", "Leptospirose, incendie", "Salmonellose, ronge"],
                ].map(([c, r, s], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2 font-medium text-gray-900">{c}</td>
                    <td className="px-4 py-2">{r}</td>
                    <td className="px-4 py-2">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Quand appeler un professionnel ?
          </h2>
          <p className="mb-4">
            Si vous observez <strong>2 signes ou plus</strong> parmi les 7 listés ci-dessus, appelez
            un dératiseur professionnel. Les pièges du commerce sont peu efficaces sur une infestation
            établie et peuvent donner une fausse impression de contrôle.
          </p>
          <p>
            À Liège, les infestations de rats se déclarent souvent en automne (octobre–novembre) quand
            les temperatures baissent et que les rats cherchent chaleur et nourriture. Les zones comme
            <strong> Seraing, Herstal</strong> (proches des zones industrielles et de la Meuse) sont
            particulièrement exposées aux migrations saisonnières.
          </p>
          <div className="mt-6 p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="font-semibold text-gray-900 mb-2">Vous avez détecté plusieurs signes ?</p>
            <p className="text-sm text-gray-600 mb-4">
              Sayonarat intervient dans toute la région liégeoise. Devis gratuit sous 24h, intervention sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+32466442454"
                className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900"
                style={{ backgroundColor: "#FFD700" }}
              >
                Appeler maintenant — +32 466 44 24 54
              </a>
              <Link
                href="/contact"
                className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white"
                style={{ backgroundColor: "#1B4332" }}
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </section>

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
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Nos autres services à Liège
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/deratisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Dératisation Liège — tarifs et méthodes
              </Link>
            </li>
            <li>
              <Link href="/desinsectisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Désinsectisation Liège — blattes, fourmis, guêpes
              </Link>
            </li>
            <li>
              <Link href="/punaises-de-lit-liege" className="underline font-medium" style={{ color: "#1B4332" }}>
                Traitement punaises de lit Liège
              </Link>
            </li>
            <li>
              <Link href="/blog/prix-deratisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>
                Prix d&apos;une dératisation à Liège en 2026
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
            <p>Fondateur de Sayonarat</p>
          </div>
        </div>

      </article>
    </>
  );
}
