import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/politique-confidentialite" },
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles du site Sayonarat.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.sayonarat.be/" },
    { "@type": "ListItem", position: 2, name: "Politique de confidentialité", item: "https://www.sayonarat.be/politique-confidentialite" },
  ],
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Politique de confidentialité
          </p>
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
          <p className="text-green-200 text-sm mt-2">Dernière mise à jour : juillet 2026</p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-3xl mx-auto space-y-10 text-gray-700">

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>1. Responsable du traitement</h2>
          <p className="leading-relaxed">
            <strong>Antinox SRL</strong>, société de droit belge exploitant le site sayonarat.be
            sous la marque « Sayonarat », dont le siège social est établi Avenue Frans van
            Kalken 9, bte 8, 1070 Anderlecht, Belgique (TVA BE 1039.714.690), est responsable du
            traitement de vos données personnelles au sens du Règlement (UE) 2016/679 (« RGPD »)
            et de la loi belge du 30 juillet 2018. Pour toute question relative à vos données :{" "}
            <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>2. Données collectées et bases légales</h2>
          <p className="leading-relaxed mb-3">
            <strong>Formulaire de contact</strong> — nom, adresse e-mail, numéro de téléphone
            (facultatif), ville, type de nuisible et description du problème. Base légale :
            mesures précontractuelles prises à votre demande (art. 6, §1, b) RGPD).
          </p>
          <p className="leading-relaxed mb-3">
            <strong>Relation contractuelle</strong> — si une intervention est réalisée, les
            données nécessaires à l&apos;exécution du contrat, à la facturation et au respect des
            obligations comptables et fiscales. Bases légales : exécution du contrat
            (art. 6, §1, b)) et obligations légales (art. 6, §1, c)).
          </p>
          <p className="leading-relaxed">
            Le Site n&apos;utilise aucun outil de mesure d&apos;audience ni de publicité (pas de Google
            Analytics, pas de pixel publicitaire). Aucune donnée de navigation n&apos;est collectée
            à des fins de profilage. Aucune décision automatisée produisant des effets
            juridiques n&apos;est prise sur la base de vos données.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>3. Destinataires, opérateur d&apos;intervention et sous-traitants</h2>
          <p className="leading-relaxed mb-3">
            Vos données sont accessibles au personnel habilité d&apos;Antinox SRL. Lorsque cela est
            nécessaire au traitement de votre demande, elles peuvent être communiquées à
            l&apos;opérateur chargé de réaliser l&apos;intervention (Antinox SRL elle-même ou un opérateur
            partenaire qualifié agissant pour son compte), dans la seule mesure utile à la prise
            de contact, au diagnostic et à l&apos;exécution de la prestation.
          </p>
          <p className="leading-relaxed mb-3">
            Vos données ne sont jamais vendues et ne sont jamais transmises à des tiers à des
            fins de prospection commerciale ou publicitaire.
          </p>
          <p className="leading-relaxed">
            Sous-traitants techniques : <strong>Formspree Inc.</strong> (États-Unis) —
            acheminement des messages du formulaire de contact ; <strong>Vercel Inc.</strong>{" "}
            (États-Unis) — hébergement du Site. Ces prestataires établis en dehors de l&apos;Espace
            économique européen interviennent dans le cadre des mécanismes prévus au chapitre V
            du RGPD (décision d&apos;adéquation, notamment le cadre UE–États-Unis de protection des
            données, ou clauses contractuelles types de la Commission européenne).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>4. Durées de conservation</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Demandes de contact sans suite : supprimées au plus tard 12 mois après le dernier échange</li>
            <li>Données contractuelles et de facturation : conservées pendant les durées imposées par les législations comptable et fiscale belges (jusqu&apos;à 10 ans)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>5. Cookies</h2>
          <p className="leading-relaxed">
            Le Site n&apos;utilise pas de cookies de mesure d&apos;audience, publicitaires ou de
            tracking ; aucun bandeau de consentement n&apos;est donc nécessaire. Les seuls cookies
            techniques éventuellement déposés sont ceux de l&apos;infrastructure d&apos;hébergement,
            strictement nécessaires au fonctionnement du Site. Si des outils de mesure
            d&apos;audience devaient être introduits, cette politique serait mise à jour et votre
            consentement préalable serait recueilli.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>6. Vos droits</h2>
          <p className="leading-relaxed mb-3">
            Conformément aux articles 15 à 22 du RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement, de limitation du traitement, de portabilité et
            d&apos;opposition. Pour exercer ces droits, adressez votre demande à{" "}
            <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a>{" "}
            ; une preuve d&apos;identité pourra être demandée. Une réponse vous sera apportée dans un
            délai d&apos;un mois.
          </p>
          <p className="leading-relaxed">
            Vous pouvez à tout moment introduire une réclamation auprès de l&apos;
            <strong>Autorité de protection des données</strong>, Rue de la Presse 35, 1000
            Bruxelles —{" "}
            <a href="https://www.autoriteprotectiondonnees.be" className="underline" style={{ color: "#1B4332" }} target="_blank" rel="noopener noreferrer">
              autoriteprotectiondonnees.be
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>7. Sécurité</h2>
          <p className="leading-relaxed">
            Antinox SRL met en œuvre des mesures techniques et organisationnelles appropriées
            pour protéger vos données contre la perte, l&apos;accès non autorisé et la divulgation,
            notamment le chiffrement des communications (HTTPS) et la limitation des accès aux
            seules personnes habilitées.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>8. Modifications</h2>
          <p className="leading-relaxed">
            La présente politique peut être mise à jour, notamment en cas d&apos;évolution légale ou
            de changement de prestataire. La version en vigueur est celle publiée sur cette
            page, avec sa date de dernière mise à jour indiquée en haut.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 text-sm text-gray-500">
          Pour toute question : <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a>
          {" "}·{" "}
          <Link href="/mentions-legales" className="underline" style={{ color: "#1B4332" }}>Mentions légales</Link>
          {" "}·{" "}
          <Link href="/conditions-generales" className="underline" style={{ color: "#1B4332" }}>Conditions générales</Link>
        </div>

      </section>
    </>
  );
}
