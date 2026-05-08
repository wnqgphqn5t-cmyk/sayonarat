import type { Metadata } from "next";
import Link from "next/link";
import Sources from "@/components/Sources";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/cafards-immeuble-responsabilite" },
  title: "Cafards dans un immeuble : qui est responsable ? — Sayonarat Liège",
  description:
    "Propriétaire ou locataire : qui doit payer la dératisation en cas de cafards dans un appartement ou un immeuble ? Le droit belge expliqué.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cafards dans un immeuble : qui est responsable ?",
  description: "Responsabilités propriétaire et locataire face aux cafards. Droit belge, recours et démarches pratiques.",
  datePublished: "2026-01-16",
  dateModified: "2026-01-16",
  author: { "@type": "Person", name: "Victor F." },
  publisher: { "@type": "Organization", name: "Sayonarat", url: "https://www.sayonarat.be" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.sayonarat.be/blog/cafards-immeuble-responsabilite" },
};

const faq = [
  {
    q: "Le propriétaire est-il obligé de payer la désinsectisation ?",
    a: "En Belgique, le propriétaire est tenu de délivrer un logement en bon état d'habitabilité. Si l'infestation préexistait à l'entrée dans les lieux ou provient des parties communes, c'est à lui d'agir. Si l'infestation s'est développée pendant l'occupation du locataire, la responsabilité est partagée selon les circonstances.",
  },
  {
    q: "Que faire si le propriétaire refuse d'intervenir ?",
    a: "En Belgique, vous pouvez saisir le juge de paix via une mise en demeure. Avant cela, envoyez un courrier recommandé au propriétaire décrivant l'infestation et lui demandant d'intervenir dans un délai raisonnable (15 jours). Conservez toutes les preuves : photos, rapports de techniciens, témoignages.",
  },
  {
    q: "La syndic de copropriété est-il responsable des parties communes ?",
    a: "Oui. En immeuble collectif, le syndic est responsable du traitement des parties communes (caves, couloirs, locaux poubelles). Si les cafards viennent des parties communes, c'est la copropriété qui doit financer le traitement. Vous pouvez mettre en demeure le syndic par courrier recommandé.",
  },
  {
    q: "Un locataire peut-il retenir son loyer à cause de cafards ?",
    a: "Non directement. En droit belge, vous ne pouvez pas retenir votre loyer unilatéralement. Mais si le logement est rendu inhabitable par l'infestation, vous pouvez demander une résolution judiciaire du bail ou une réduction de loyer via le juge de paix.",
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

export default function ArticleCafardsResponsabilitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> ›{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> › Cafards responsabilité
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-700 text-white">Désinsectisation</span>
            <span className="text-xs text-green-300">23 avril 2026 · 4 min de lecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Cafards dans un immeuble :<br />qui est responsable ?
          </h1>
          <p className="text-green-100 text-lg">Par <strong>Victor F.</strong> — Fondateur de Sayonarat</p>
        </div>
      </section>

      <article className="py-12 px-4 max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

        <div className="bg-green-50 border-l-4 rounded-r-xl p-5" style={{ borderColor: "#1B4332" }}>
          <p className="font-semibold text-gray-800 mb-2">En bref</p>
          <p>
            Si l'infestation préexistait ou vient des parties communes : <strong>responsabilité du propriétaire</strong>.
            Si elle s'est développée pendant l'occupation : <strong>responsabilité partagée</strong>, souvent au locataire
            d'agir en premier. En pratique, mieux vaut agir vite et régler la question financière ensuite.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Le cadre légal en Belgique
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1B4332" }} className="text-white">
                  <th className="px-4 py-2 text-left">Situation</th>
                  <th className="px-4 py-2 text-left">Responsable</th>
                  <th className="px-4 py-2 text-left">Recours</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Infestation préexistante à l'entrée", "Propriétaire", "État des lieux d'entrée"],
                  ["Infestation parties communes", "Copropriété / syndic", "Mise en demeure syndic"],
                  ["Infestation développée pendant bail", "Locataire (en principe)", "À documenter"],
                  ["Infestation voisin d'appartement", "Partagée", "Médiation ou juge de paix"],
                  ["Logement vétuste favorisant l'infestation", "Propriétaire", "Rapport technique + juge de paix"],
                ].map(([situation, resp, recours], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2">{situation}</td>
                    <td className="px-4 py-2 font-medium">{resp}</td>
                    <td className="px-4 py-2 text-gray-500 text-xs">{recours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            La réalité pratique dans les immeubles liégeois
          </h2>
          <p className="mb-3">
            À Liège, la plupart des infestations de cafards (blattes germaniques) dans les immeubles
            anciens proviennent des gaines techniques et canalisations partagées — ce qui met
            la copropriété ou le propriétaire en première ligne.
          </p>
          <p className="mb-3">
            En pratique, les procédures légales prennent du temps. Une mise en demeure, une
            médiation et un passage devant le juge de paix peuvent durer plusieurs mois.
            Pendant ce temps, l'infestation s'étend — potentiellement à vos voisins et à
            tout l'immeuble.
          </p>
          <p>
            Notre conseil : <strong>agissez d'abord, facturez ensuite</strong>. Faites intervenir
            un professionnel, conservez la facture et le rapport d'intervention, puis engagez
            la procédure de remboursement. C'est plus efficace que d'attendre une décision
            judiciaire avec des cafards dans votre cuisine.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#1B4332" }}>
            Démarches pratiques étape par étape
          </h2>
          <div className="space-y-4">
            {[
              { num: "1", titre: "Documentez l'infestation", texte: "Photos avec date, description précise des zones touchées, estimation de la durée. Si possible, témoignages de voisins. Ce dossier servira en cas de litige." },
              { num: "2", titre: "Informez par écrit", texte: "Locataire → propriétaire ou syndic. Email ou courrier recommandé avec les photos. Demandez une intervention dans un délai de 15 jours. Gardez une copie de tout." },
              { num: "3", titre: "Faites intervenir un professionnel", texte: "N'attendez pas une réponse pour agir si l'infestation est avancée. Conservez le rapport d'intervention et la facture détaillée — ils serviront de preuve et de base pour le remboursement." },
              { num: "4", titre: "Recours si refus", texte: "Mise en demeure formelle par huissier, puis saisine du juge de paix. En Wallonie, vous pouvez aussi contacter la Direction de la Qualité de Logement (DQL) si le logement est non-conforme." },
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
          <p className="font-semibold text-gray-900 mb-2">Cafards dans votre immeuble à Liège ?</p>
          <p className="text-sm text-gray-600 mb-4">
            Sayonarat fournit un rapport d'intervention détaillé utilisable dans vos démarches.
            Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-gray-900" style={{ backgroundColor: "#FFD700" }}>
              Appeler — +32 466 44 24 54
            </a>
            <Link href="/desinsectisation-liege" className="inline-block px-5 py-3 rounded-lg font-bold text-center text-white" style={{ backgroundColor: "#1B4332" }}>
              Voir le service désinsectisation
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
            <li><Link href="/blog/cafards-cuisine-que-faire" className="underline font-medium" style={{ color: "#1B4332" }}>Cafards dans la cuisine : que faire ?</Link></li>
            <li><Link href="/blog/prix-desinsectisation-liege-2026" className="underline font-medium" style={{ color: "#1B4332" }}>Prix d'une désinsectisation à Liège en 2026</Link></li>
            <li><Link href="/desinsectisation-liege" className="underline font-medium" style={{ color: "#1B4332" }}>Désinsectisation Liège — service principal</Link></li>
          </ul>
        </section>

        <Sources
          sources={[
            {
              label: "SPF Santé Publique — Liste des biocides autorisés en Belgique",
              href: "https://www.health.belgium.be/fr/liste-des-biocides-autorises-et-rapport-annuel",
            },
            {
              label: "SPF Justice — Code civil belge",
              href: "https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=fr&la=F&cn=1804032132&table_name=loi",
            },
            {
              label: "Sciensano — Institut de santé publique belge",
              href: "https://www.sciensano.be/fr",
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
