import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/politique-confidentialite" },
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles du site Sayonarat.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Politique de confidentialité
          </p>
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
          <p className="text-green-200 text-sm mt-2">Dernière mise à jour : avril 2026</p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-3xl mx-auto space-y-10 text-gray-700">

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>1. Qui sommes-nous ?</h2>
          <p className="leading-relaxed">
            Sayonarat est une plateforme de mise en relation spécialisée dans la lutte
            antiparasitaire en Belgique. Responsable du traitement des données :
            Victor F., joignable à{" "}
            <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>
              contact@sayonarat.be
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>2. Données collectées</h2>
          <p className="leading-relaxed mb-3">
            Nous collectons uniquement les données que vous nous transmettez volontairement
            via le formulaire de contact :
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Nom complet</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Ville</li>
            <li>Type de nuisible</li>
            <li>Message libre</li>
          </ul>
          <p className="leading-relaxed mt-3">
            Nous ne collectons aucune donnée de navigation, aucun cookie publicitaire
            et n&apos;utilisons aucun outil de tracking (Google Analytics, Meta Pixel, etc.).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>3. Finalité du traitement</h2>
          <p className="leading-relaxed">
            Vos données sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm mt-2">
            <li>Répondre à votre demande de devis ou d&apos;information</li>
            <li>Mettre en relation avec un technicien certifié de notre réseau</li>
            <li>Assurer le suivi de votre demande</li>
          </ul>
          <p className="leading-relaxed mt-3">
            Vos données ne sont jamais vendues, louées ou transmises à des tiers
            à des fins commerciales ou publicitaires.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>4. Base légale</h2>
          <p className="leading-relaxed">
            Le traitement de vos données repose sur votre consentement explicite,
            exprimé lors de l&apos;envoi du formulaire de contact (Article 6.1.a du RGPD).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>5. Durée de conservation</h2>
          <p className="leading-relaxed">
            Vos données sont conservées pendant une durée maximale de <strong>12 mois</strong> à
            compter de votre demande, puis supprimées. Si une relation commerciale est établie,
            les données sont conservées conformément aux obligations légales belges (7 ans pour
            les documents comptables).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>6. Sous-traitants</h2>
          <p className="leading-relaxed">
            Les données soumises via le formulaire sont traitées par <strong>Formspree Inc.</strong>
            (États-Unis), notre prestataire technique de gestion des formulaires.
            Formspree est conforme au RGPD via les clauses contractuelles types de la Commission européenne.
          </p>
          <p className="leading-relaxed mt-3">
            Le site est hébergé par <strong>Vercel Inc.</strong> (États-Unis), conforme au RGPD
            via les mêmes mécanismes de transfert.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>7. Vos droits</h2>
          <p className="leading-relaxed mb-3">
            Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Droit d&apos;accès</strong> — obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
            <li><strong>Droit à l&apos;effacement</strong> — demander la suppression de vos données</li>
            <li><strong>Droit d&apos;opposition</strong> — vous opposer au traitement</li>
            <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format lisible</li>
          </ul>
          <p className="leading-relaxed mt-3">
            Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>
              contact@sayonarat.be
            </a>. Nous répondons dans un délai de 30 jours.
          </p>
          <p className="leading-relaxed mt-3">
            Vous avez également le droit d&apos;introduire une réclamation auprès de l&apos;
            <strong>Autorité de protection des données (APD)</strong> belge :{" "}
            <a href="https://www.autoriteprotectiondonnees.be" className="underline" style={{ color: "#1B4332" }}
              target="_blank" rel="noopener noreferrer">
              autoriteprotectiondonnees.be
            </a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>8. Cookies</h2>
          <p className="leading-relaxed">
            Ce site n&apos;utilise pas de cookies de tracking, publicitaires ou analytiques.
            Aucun bandeau cookie n&apos;est donc nécessaire. Les seuls cookies techniques
            éventuellement déposés sont ceux de l&apos;infrastructure Vercel, strictement
            nécessaires au fonctionnement du site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>9. Modifications</h2>
          <p className="leading-relaxed">
            Cette politique peut être mise à jour. La date de dernière modification
            est indiquée en haut de page. Nous vous encourageons à la consulter régulièrement.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 text-sm text-gray-500">
          Pour toute question : <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a>
          {" "}·{" "}
          <Link href="/mentions-legales" className="underline" style={{ color: "#1B4332" }}>Mentions légales</Link>
        </div>

      </section>
    </>
  );
}
