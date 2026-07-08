import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/mentions-legales" },
  title: "Mentions légales",
  description: "Mentions légales du site Sayonarat — service de dératisation et désinsectisation en Belgique.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.sayonarat.be/" },
    { "@type": "ListItem", position: 2, name: "Mentions légales", item: "https://www.sayonarat.be/mentions-legales" },
  ],
};

export default function MentionsLegalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Mentions légales
          </p>
          <h1 className="text-3xl font-bold">Mentions légales</h1>
          <p className="text-green-200 text-sm mt-2">Dernière mise à jour : juillet 2026</p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-3xl mx-auto space-y-10 text-gray-700">

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>1. Éditeur du site</h2>
          <p className="leading-relaxed">
            Le site <strong>sayonarat.be</strong> (ci-après « le Site ») est édité par :<br /><br />
            <strong>Antinox SRL</strong>, société à responsabilité limitée de droit belge,
            exploitant le Site sous la marque commerciale « Sayonarat »<br />
            Siège social : Avenue Frans van Kalken 9, bte 8, 1070 Anderlecht, Belgique<br />
            TVA : BE 1039.714.690<br />
            RPM : tribunal de l&apos;entreprise francophone de Bruxelles<br />
            E-mail : <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>2. Activité et autorités de contrôle</h2>
          <p className="leading-relaxed">
            Le Site permet de demander une intervention de lutte contre les organismes nuisibles
            (dératisation, désinsectisation, traitement des punaises de lit et services connexes)
            en Belgique. Les interventions sont réalisées par Antinox SRL ou, le cas échéant, par
            un opérateur partenaire qualifié agissant sous sa responsabilité, conformément aux{" "}
            <Link href="/conditions-generales" className="underline" style={{ color: "#1B4332" }}>conditions générales</Link>.
          </p>
          <p className="leading-relaxed mt-3">
            Les produits biocides sont utilisés conformément à la réglementation applicable en
            Belgique, sous le contrôle du SPF Santé publique, Sécurité de la Chaîne alimentaire
            et Environnement. L&apos;activité commerciale est soumise au contrôle du SPF Économie,
            P.M.E., Classes moyennes et Énergie.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>3. Hébergement</h2>
          <p className="leading-relaxed">
            Le Site est hébergé par :<br /><br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site web : <a href="https://vercel.com" className="underline" style={{ color: "#1B4332" }} target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>4. Caractère informatif du contenu</h2>
          <p className="leading-relaxed">
            Les informations publiées sur le Site (notamment les fiches nuisibles, articles de
            blog, indications de prix et de délais) sont fournies à titre purement informatif et
            général. Elles ne constituent ni un diagnostic, ni un conseil professionnel
            personnalisé, ni une offre contractuelle. Seuls un diagnostic réalisé sur place et un
            devis écrit accepté engagent Antinox SRL. Les prix mentionnés sur le Site sont
            indicatifs et susceptibles de modification sans préavis.
          </p>
          <p className="leading-relaxed mt-3">
            L&apos;éditeur s&apos;efforce de maintenir les informations du Site à jour et exactes, sans
            toutefois garantir leur exhaustivité ou leur exactitude à tout moment, et se réserve
            le droit de corriger ou de modifier le contenu du Site à tout moment et sans préavis.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>5. Responsabilité</h2>
          <p className="leading-relaxed">
            Dans les limites autorisées par la loi, Antinox SRL ne saurait être tenue responsable
            des dommages directs ou indirects résultant de l&apos;accès au Site, de son utilisation,
            de l&apos;impossibilité d&apos;y accéder ou de la confiance accordée à une information qui y
            est publiée. L&apos;utilisateur reste seul responsable de l&apos;usage qu&apos;il fait des
            informations mises à disposition, en particulier de toute tentative de traitement
            d&apos;une infestation par ses propres moyens.
          </p>
          <p className="leading-relaxed mt-3">
            Antinox SRL ne garantit pas l&apos;accessibilité continue du Site et se réserve le droit
            d&apos;en suspendre ou d&apos;en interrompre l&apos;accès à tout moment, notamment pour des raisons
            de maintenance, sans que sa responsabilité puisse être engagée de ce fait. Le Site
            peut contenir des liens vers des sites tiers, sur lesquels l&apos;éditeur n&apos;exerce aucun
            contrôle et dont il décline toute responsabilité quant au contenu, à la disponibilité
            ou aux pratiques.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>6. Propriété intellectuelle</h2>
          <p className="leading-relaxed">
            L&apos;ensemble des éléments composant le Site (textes, structure, illustrations, logos,
            marques, mise en page, code) est protégé par le droit d&apos;auteur et le droit des
            marques, et demeure la propriété exclusive d&apos;Antinox SRL ou de ses concédants. Toute
            reproduction, représentation, extraction, distribution ou exploitation, totale ou
            partielle, sous quelque forme que ce soit, sans autorisation écrite et préalable
            d&apos;Antinox SRL, est interdite et constitue une contrefaçon susceptible de poursuites
            civiles et pénales.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>7. Conditions contractuelles et données personnelles</h2>
          <p className="leading-relaxed">
            Les prestations demandées via le Site sont régies par les{" "}
            <Link href="/conditions-generales" className="underline" style={{ color: "#1B4332" }}>conditions générales</Link>.
            Le traitement des données personnelles est décrit dans la{" "}
            <Link href="/politique-confidentialite" className="underline" style={{ color: "#1B4332" }}>politique de confidentialité</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>8. Litiges de consommation</h2>
          <p className="leading-relaxed">
            En cas de litige de consommation qui n&apos;aurait pas pu être résolu à l&apos;amiable, le
            consommateur peut s&apos;adresser au Service de Médiation pour le Consommateur,
            Boulevard du Roi Albert II 8 bte 1, 1000 Bruxelles —{" "}
            <a href="https://mediationconsommateur.be" className="underline" style={{ color: "#1B4332" }} target="_blank" rel="noopener noreferrer">mediationconsommateur.be</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>9. Droit applicable</h2>
          <p className="leading-relaxed">
            Le Site et les présentes mentions légales sont régis par le droit belge. Tout litige
            relatif au Site relève de la compétence des cours et tribunaux de l&apos;arrondissement
            judiciaire de Bruxelles, sans préjudice des règles de compétence impératives
            applicables aux consommateurs.
          </p>
        </div>

      </section>
    </>
  );
}
