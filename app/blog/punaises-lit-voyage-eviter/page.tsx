import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/punaises-lit-voyage-eviter" },
  title: "Punaises de lit en voyage : comment éviter de les ramener ? — Sayonarat",
  description:
    "Hôtel, Airbnb, transports : comment détecter les punaises de lit en voyage et éviter de les ramener chez vous. Checklist pratique.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Punaises de lit en voyage : comment éviter de les ramener ?",
  description: "Détecter les punaises de lit à l'hôtel et éviter de les ramener chez soi. Checklist pratique pour voyageurs.",
  datePublished: "2026-01-22",
  dateModified: "2026-01-22",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://www.sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.sayonarat.be/blog/punaises-lit-voyage-eviter" },
};

const faq = [
  {
    q: "Les punaises de lit survivent-elles dans les bagages ?",
    a: "Oui. Les punaises de lit peuvent survivre plusieurs mois sans se nourrir. Elles s'installent dans les coutures des valises, les plis des vêtements et les interstices des bagages. Une valise posée sur un lit infesté pendant quelques heures suffit à transporter des punaises ou des œufs.",
  },
  {
    q: "Comment inspecter un hôtel à l'arrivée ?",
    a: "Posez votre valise dans la baignoire ou sur le porte-bagage (jamais sur le lit). Inspectez le matelas : soulevez les draps et examinez les coutures, les bords et la tête de lit. Cherchez des taches noires (excréments) ou des points rouges (sang séché). Une odeur sucrée et musquée dans la chambre est aussi un signal.",
  },
  {
    q: "Que faire si je ramène des punaises de lit chez moi ?",
    a: "Agissez immédiatement : lavez tous les vêtements du voyage à 60°C ou congelez-les 72h à -18°C. Passez l'aspirateur dans la valise et laissez-la en dehors du domicile. Inspectez votre chambre. Si vous trouvez des punaises, contactez un professionnel — les traitements DIY sont peu efficaces sur les œufs.",
  },
  {
    q: "Les hôtels classés sont-ils plus sûrs ?",
    a: "Non. Les punaises de lit ne distinguent pas les étoiles. Des hôtels 4 et 5 étoiles sont régulièrement touchés car le volume de clientèle internationale augmente le risque. La propreté visible n'est pas un indicateur fiable — les punaises se cachent dans les coutures et les recoins, pas dans la poussière.",
  },
  {
    q: "Les punaises de lit se transmettent-elles dans les transports ?",
    a: "Rarement, mais possible. Les sièges de train, bus ou avion peuvent héberger des punaises dans les coutures. Le risque est plus faible que dans un hébergement car les punaises préfèrent les endroits où elles peuvent se nourrir régulièrement (votre chambre). Évitez de poser vos bagages sur les sièges.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ArticlePunaisesVoyagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Punaises de lit voyage
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Punaises de lit</span>
            <span className="text-xs text-green-300">23 avril 2026 · 4 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Punaises de lit en voyage :<br />comment éviter de les ramener ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">Réponse rapide</p>
          <p>
            À l'hôtel : posez votre valise dans la baignoire (jamais sur le lit), inspectez
            les coutures du matelas avant de dormir. Au retour : lavez tout à 60°C.
            Ces deux réflexes réduisent drastiquement le risque de contamination.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Pourquoi le voyage est le principal vecteur de contamination
          </h2>
          <p className="mb-3">
            Les punaises de lit ne volent pas et ne sautent pas. Elles se déplacent uniquement
            en s'accrochant à ce qu'on transporte. Le voyage — hôtel, Airbnb, gîte, transport —
            est de loin la source numéro un d'infestation en Europe.
          </p>
          <p>
            Une chambre d'hôtel peut accueillir des centaines de clients par an. Il suffit
            qu'un seul d'entre eux transporte des punaises pour contaminer le lit. Les femelles
            pondent jusqu'à 5 œufs par jour — une chambre peut devenir un foyer actif en
            quelques semaines sans que le personnel s'en aperçoive.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Checklist à l'arrivée à l'hôtel
          </h2>
          <div className="space-y-3">
            {[
              { ok: true, texte: "Posez votre valise dans la baignoire ou sur le porte-bagage en métal — jamais sur le lit ou la moquette" },
              { ok: true, texte: "Soulevez les draps et inspectez les coutures du matelas (bords, tête de lit, coins)" },
              { ok: true, texte: "Cherchez des taches noires (excréments de 1 mm), des points rouges (sang séché) ou des mues (peaux translucides)" },
              { ok: true, texte: "Sniffez la chambre : une odeur sucrée, musquée ou de framboises écrasées est un signe d'infestation importante" },
              { ok: true, texte: "Vérifiez aussi la tête de lit, le cadre et les jointures du sommier" },
              { ok: false, texte: "Ne déposez jamais vos vêtements sur le lit ou dans les tiroirs de la chambre avant inspection" },
              { ok: false, texte: "Ne laissez pas votre valise ouverte sur le sol de la chambre pendant plusieurs heures" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border" style={{ borderColor: item.ok ? "#bbf7d0" : "#fecaca", backgroundColor: item.ok ? "#f0fdf4" : "#fff5f5" }}>
                <span className="flex-shrink-0 font-bold text-sm">{item.ok ? "✅" : ""}</span>
                <span className="text-sm">{item.texte}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Au retour du voyage : le protocole
          </h2>
          <div className="space-y-4">
            {[
              { num: "1", titre: "Déballer les bagages à l'extérieur ou dans le garage", texte: "Ne rentrez pas la valise directement dans la chambre. Déballez-la dans l'entrée, le couloir ou le garage. Laissez la valise en dehors de la maison si possible." },
              { num: "2", titre: "Laver tous les vêtements à 60°C", texte: "Tous les vêtements du voyage, portés ou non. 60°C pendant 30 minutes tue punaises et œufs. Pour les textiles délicats : congélateur à -18°C pendant 72h minimum." },
              { num: "3", titre: "Aspirer l'intérieur de la valise", texte: "Passez l'aspirateur dans toutes les poches et coutures. Videz immédiatement le sac d'aspirateur dans une poubelle extérieure. Rangez la valise dans un sac plastique fermé." },
              { num: "4", titre: "Inspecter les affaires non lavables", texte: "Chaussures, sacs, accessoires : examinez les coutures et interstices. En cas de doute, placez-les dans un sac hermétique au congélateur 72h." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: "#1B4332" }}>
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

        <div className="p-5 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="font-semibold text-gray-900 mb-2">Vous pensez avoir ramené des punaises à Liège ?</p>
          <p className="text-sm text-gray-600 mb-4">
            Agissez vite — une infestation double de taille toutes les 6 semaines. Diagnostic et devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/punaises-de-lit-liege" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Voir le service punaises de lit
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1B4332" }}>Questions fréquentes</h2>
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
            <li><Link href="/blog/reconnaitre-punaise-de-lit" className="underline font-medium" style={{ color: "#1B4332" }}>Comment reconnaître une punaise de lit ?</Link></li>
            <li><Link href="/blog/punaises-de-lit-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Punaises de lit : que faire ?</Link></li>
            <li><Link href="/punaises-de-lit-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Traitement punaises de lit Liège</Link></li>
          </ul>
        </section>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Liste des biocides autorisés en Belgique",
              href: "https://www.health.belgium.be/fr/liste-des-biocides-autorises-et-rapport-annuel",
            },
            {
              label: "Parlement Européen — Question parlementaire sur les punaises de lit (2023)",
              href: "https://www.europarl.europa.eu/doceo/document/E-9-2023-003026_EN.html",
            },
            {
              label: "OMS — Conseils aux voyageurs et hygiène",
              href: "https://www.who.int/news-room/fact-sheets/detail/food-safety",
            },
          ]}
        />

        <div className="border-t pt-6 text-sm text-gray-500 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{ backgroundColor: "#1B4332" }}>V</div>
          <div>
            <p className="font-semibold text-gray-800">Victor F.</p>
            <p>Fondateur de Sayonarat</p>
          </div>
        </div>

      </article>
    </>
  );
}
