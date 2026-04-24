import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales | Sayonarat",
  description: "Mentions légales du site Sayonarat — service de dératisation et désinsectisation en Belgique.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Mentions légales
          </p>
          <h1 className="text-3xl font-bold">Mentions légales</h1>
        </div>
      </section>

      <section className="py-14 px-4 max-w-3xl mx-auto space-y-10 text-gray-700">

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>1. Éditeur du site</h2>
          <p className="leading-relaxed">
            Le site <strong>sayonarat.be</strong> est édité par :<br /><br />
            <strong>Sayonarat</strong><br />
            Responsable : Victor F.<br />
            Adresse : Bruxelles, Belgique<br />
            Email : <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a><br />
            Téléphone : <a href="tel:+32466442454" className="underline" style={{ color: "#1B4332" }}>+32 466 44 24 54</a><br />
            Numéro de TVA : en cours d&apos;enregistrement
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>2. Hébergement</h2>
          <p className="leading-relaxed">
            Ce site est hébergé par :<br /><br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site web : <a href="https://vercel.com" className="underline" style={{ color: "#1B4332" }} target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>3. Activité</h2>
          <p className="leading-relaxed">
            Sayonarat est une plateforme de mise en relation entre particuliers et entreprises
            en Belgique et des techniciens certifiés en lutte antiparasitaire
            (dératisation, désinsectisation, traitement punaises de lit).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>4. Propriété intellectuelle</h2>
          <p className="leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, structure) est la propriété
            exclusive de Sayonarat. Toute reproduction, même partielle, est interdite sans
            autorisation écrite préalable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>5. Protection des données personnelles</h2>
          <p className="leading-relaxed">
            Les données collectées via le formulaire de contact (nom, email, téléphone, message)
            sont utilisées exclusivement pour répondre à votre demande. Elles ne sont jamais
            vendues ni transmises à des tiers à des fins commerciales.
          </p>
          <p className="leading-relaxed mt-3">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous
            disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            Pour exercer ce droit, contactez-nous à{" "}
            <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>contact@sayonarat.be</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>6. Cookies</h2>
          <p className="leading-relaxed">
            Ce site n&apos;utilise pas de cookies publicitaires ou de tracking. Les seules données
            techniques enregistrées sont celles nécessaires au bon fonctionnement du site
            (logs serveur Vercel).
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>7. Responsabilité</h2>
          <p className="leading-relaxed">
            Sayonarat agit en tant qu&apos;intermédiaire de mise en relation. Les interventions
            sont réalisées par des techniciens indépendants certifiés. Sayonarat ne peut
            être tenu responsable des dommages directs ou indirects liés à une intervention.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>8. Droit applicable</h2>
          <p className="leading-relaxed">
            Le présent site est soumis au droit belge. Tout litige relatif à son utilisation
            relève de la compétence exclusive des tribunaux de Bruxelles, Belgique.
          </p>
        </div>

      </section>
    </>
  );
}
