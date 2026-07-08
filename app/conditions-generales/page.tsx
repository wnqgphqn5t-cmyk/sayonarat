import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/conditions-generales" },
  title: "Conditions générales",
  description: "Conditions générales des prestations de dératisation et désinsectisation demandées via le site Sayonarat.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.sayonarat.be/" },
    { "@type": "ListItem", position: 2, name: "Conditions générales", item: "https://www.sayonarat.be/conditions-generales" },
  ],
};

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3" style={{ color: "#1B4332" }}>{title}</h2>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </div>
  );
}

const EMAIL = (
  <a href="mailto:contact@sayonarat.be" className="underline" style={{ color: "#1B4332" }}>
    contact@sayonarat.be
  </a>
);

export default function ConditionsGeneralesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Conditions générales
          </p>
          <h1 className="text-3xl font-bold">Conditions générales</h1>
          <p className="text-green-200 text-sm mt-2">Dernière mise à jour : juillet 2026</p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-3xl mx-auto space-y-10 text-gray-700">

        <Article title="Article 1 — Objet et champ d'application">
          <p>
            Les présentes conditions générales (ci-après « les Conditions ») régissent toute
            prestation de services de lutte contre les organismes nuisibles (dératisation,
            désinsectisation, traitement des punaises de lit et services connexes) demandée via
            le site sayonarat.be et fournie par Antinox SRL, société à responsabilité limitée de
            droit belge exploitant le site sous la marque commerciale « Sayonarat », dont le
            siège social est établi Avenue Frans van Kalken 9, bte 8, 1070 Anderlecht, Belgique,
            TVA BE 1039.714.690 (ci-après « le Prestataire »), à tout client, consommateur ou
            professionnel (ci-après « le Client »).
          </p>
          <p>
            Elles s&apos;appliquent à l&apos;exclusion de toute autre condition, notamment les conditions
            générales d&apos;achat du Client, sauf dérogation expresse et écrite acceptée par le
            Prestataire. L&apos;acceptation d&apos;un devis emporte adhésion sans réserve aux Conditions,
            dont le Client reconnaît avoir pris connaissance avant la conclusion du contrat.
            Pour l&apos;application des présentes Conditions, les termes « écrit » et « par écrit »
            désignent tout support durable, en ce compris l&apos;e-mail.
          </p>
        </Article>

        <Article title="Article 2 — Devis et formation du contrat">
          <p>
            Toute intervention fait l&apos;objet d&apos;un devis écrit, transmis par e-mail ou remis sur
            place, établi après diagnostic ou sur la base des informations communiquées par le
            Client. Sauf mention contraire, le devis est valable 30 jours calendrier à compter
            de son émission.
          </p>
          <p>
            Le contrat est conclu à la date d&apos;acceptation écrite du devis par le Client (y
            compris par e-mail). Les prix, indications de délai et fourchettes tarifaires
            publiés sur le site sayonarat.be sont indicatifs et ne constituent pas une offre
            contractuelle.
          </p>
          <p>
            Si le diagnostic sur place révèle une situation substantiellement différente de
            celle décrite par le Client (ampleur de l&apos;infestation, espèce en cause,
            accessibilité des lieux), le Prestataire soumet un devis rectificatif. Le Client est
            libre de l&apos;accepter ou de le refuser sans frais, à l&apos;exception des frais de
            diagnostic éventuellement convenus.
          </p>
        </Article>

        <Article title="Article 3 — Prix">
          <p>
            Les prix s&apos;entendent en euros. Pour les consommateurs, les prix communiqués sont TVA
            comprise ; pour les professionnels, hors TVA sauf mention contraire. Le devis
            précise les prestations incluses, le nombre de passages prévus et, le cas échéant,
            les frais de déplacement.
          </p>
          <p>
            Toute prestation supplémentaire non prévue au devis (passage additionnel, extension
            de la zone traitée, nuisible supplémentaire) fait l&apos;objet d&apos;un accord préalable du
            Client et d&apos;une facturation distincte.
          </p>
        </Article>

        <Article title="Article 4 — Exécution des prestations">
          <p>
            Le Prestataire exécute les prestations conformément aux règles de l&apos;art, à la
            réglementation applicable aux produits biocides et aux prescriptions des fiches
            techniques des produits utilisés, par du personnel formé à cet effet.
          </p>
          <p>
            Sauf engagement exprès et écrit figurant au devis, les obligations du Prestataire
            sont des obligations de moyens : le résultat d&apos;un traitement dépend de facteurs
            biologiques, structurels et environnementaux (pression d&apos;infestation du voisinage,
            état du bâtiment, hygiène et coopération du Client) qui échappent partiellement au
            contrôle du Prestataire.
          </p>
          <p>
            Les délais d&apos;intervention communiqués sont des délais indicatifs, sauf lorsqu&apos;un
            délai ferme est expressément stipulé au devis. Un dépassement de délai indicatif ne
            peut donner lieu ni à indemnité ni à résolution du contrat, sauf faute prouvée du
            Prestataire.
          </p>
          <p>
            Le Prestataire peut confier l&apos;exécution de tout ou partie des prestations à des
            sous-traitants ou opérateurs partenaires qualifiés ; il demeure seul responsable de
            l&apos;exécution à l&apos;égard du Client.
          </p>
          <p>
            Le technicien peut suspendre ou interrompre une intervention lorsque les conditions
            sur place ne permettent pas de l&apos;exécuter en sécurité ou conformément à la
            réglementation (notamment danger structurel, insalubrité grave, comportement
            agressif ou lieux non préparés malgré les instructions communiquées). Les frais
            réellement exposés peuvent alors être facturés dans les conditions de l&apos;article 6.
          </p>
          <p>
            Le Prestataire peut photographier les zones concernées avant, pendant et après
            l&apos;intervention, aux seules fins de documentation, de preuve et de suivi du
            traitement (notamment le rapport d&apos;intervention). Ces images sont traitées
            conformément à la politique de confidentialité et ne sont pas diffusées sans
            l&apos;accord écrit du Client.
          </p>
        </Article>

        <Article title="Article 5 — Obligations du Client">
          <p>Le Client s&apos;engage à :</p>
          <p>
            • fournir des informations exactes et complètes sur la situation (espèce suspectée,
            zones touchées, présence d&apos;enfants, d&apos;animaux domestiques, de personnes vulnérables
            ou allergiques) ;<br />
            • donner accès aux locaux concernés aux dates et heures convenues ;<br />
            • préparer les lieux conformément aux instructions communiquées avant
            l&apos;intervention ;<br />
            • respecter strictement les consignes de sécurité et de réintégration des lieux
            communiquées après l&apos;intervention (délais d&apos;aération, éloignement des enfants et
            animaux, non-nettoyage des zones traitées, manipulation des dispositifs) ;<br />
            • mettre en œuvre les mesures correctives recommandées (hygiène, colmatage, gestion
            des déchets) qui conditionnent l&apos;efficacité durable du traitement.
          </p>
          <p>
            Le Prestataire ne répond pas des conséquences d&apos;informations inexactes ou
            incomplètes, du non-respect des consignes, ni du retrait, du déplacement ou de la
            manipulation des dispositifs posés (postes d&apos;appâtage, pièges, filets, pics) par le
            Client ou par des tiers.
          </p>
          <p>
            Sauf stipulation contraire au devis, les dispositifs posés à titre temporaire ou
            dans le cadre d&apos;un contrat d&apos;entretien (notamment postes d&apos;appâtage, pièges et
            dispositifs de monitoring) demeurent la propriété du Prestataire. Le Client en
            assure la garde, ne les déplace pas et permet leur récupération en fin de prestation
            ou de contrat ; les dispositifs perdus ou détériorés de son fait peuvent lui être
            facturés à leur valeur de remplacement.
          </p>
        </Article>

        <Article title="Article 6 — Annulation et report de rendez-vous">
          <p>
            Chaque partie peut reporter ou annuler un rendez-vous sans frais moyennant un
            préavis d&apos;au moins 24 heures. En cas d&apos;annulation tardive par le Client ou
            d&apos;impossibilité d&apos;accéder aux lieux au moment convenu du fait du Client, le
            Prestataire peut facturer les frais réellement exposés (déplacement, temps
            mobilisé), dûment justifiés.
          </p>
          <p>
            Si le Prestataire annule un rendez-vous sans respecter ce préavis et sans motif
            légitime (notamment force majeure, maladie ou accident du technicien, ou
            intervention sanitaire urgente ne pouvant être différée), le Client consommateur a
            droit à une indemnisation équivalente aux frais directs qu&apos;il justifie avoir exposés
            de ce fait, à l&apos;exclusion de tout autre préjudice, sans préjudice des dispositions
            légales impératives.
          </p>
        </Article>

        <Article title="Article 7 — Droit de rétractation du consommateur">
          <p>
            Lorsque le contrat est conclu à distance ou hors établissement au sens du Code de
            droit économique, le Client consommateur dispose d&apos;un délai de 14 jours calendrier à
            compter de la conclusion du contrat pour se rétracter sans motif et sans frais,
            conformément aux articles VI.47 et suivants du Code de droit économique. La
            rétractation s&apos;exerce par déclaration dénuée d&apos;ambiguïté adressée à {EMAIL} ou par
            courrier au siège social, le cas échéant au moyen du formulaire type reproduit
            ci-dessous.
          </p>
          <p>
            Si le Client demande expressément que l&apos;intervention commence avant l&apos;expiration du
            délai de rétractation, il reste redevable, en cas de rétractation, d&apos;un montant
            proportionnel aux prestations déjà fournies. Il reconnaît perdre son droit de
            rétractation une fois la prestation entièrement exécutée avec son accord préalable
            exprès. Le droit de rétractation ne s&apos;applique pas non plus aux travaux d&apos;entretien
            ou de réparation urgents expressément sollicités par le consommateur, dans les
            limites prévues par le Code de droit économique.
          </p>
          <p>
            Formulaire type de rétractation — à compléter et renvoyer uniquement si vous
            souhaitez vous rétracter : « À l&apos;attention d&apos;Antinox SRL (Sayonarat), Avenue Frans
            van Kalken 9, bte 8, 1070 Anderlecht, contact@sayonarat.be : Je/nous (*) vous
            notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant
            sur la prestation de services ci-dessous : — Commandé le (*) : — Nom du/des
            consommateur(s) : — Adresse du/des consommateur(s) : — Date : — Signature
            (uniquement en cas de notification sur papier). (*) Biffez la mention inutile. »
          </p>
        </Article>

        <Article title="Article 8 — Garantie de réintervention">
          <p>
            Sauf mention contraire au devis, le Prestataire garantit pendant 3 mois à compter de
            la fin du traitement une réintervention gratuite en cas de réapparition avérée, dans
            les locaux traités, du nuisible visé par le traitement.
          </p>
          <p>La garantie est subordonnée aux conditions cumulatives suivantes :</p>
          <p>
            • le signalement écrit de la réapparition à {EMAIL} pendant la période de
            garantie ;<br />
            • le respect par le Client des consignes post-traitement et des mesures correctives
            recommandées (article 5) ;<br />
            • l&apos;absence de traitement intermédiaire réalisé par le Client ou par un tiers sur
            les zones concernées ;<br />
            • l&apos;accès donné au Prestataire pour la réintervention dans un délai raisonnable.
          </p>
          <p>
            La garantie ne couvre pas les nouvelles infestations d&apos;origine extérieure
            indépendantes du traitement initial (notamment lorsque les travaux d&apos;étanchéité ou
            mesures structurelles recommandés n&apos;ont pas été réalisés), ni les espèces autres que
            celle visée au devis. La garantie de réintervention s&apos;ajoute aux droits que le
            Client consommateur tire de la loi et ne les restreint pas.
          </p>
        </Article>

        <Article title="Article 9 — Paiement">
          <p>
            Sauf mention contraire au devis, les factures sont payables dans les 14 jours
            calendrier suivant leur émission, par virement sur le compte indiqué sur la facture.
            Aucun escompte n&apos;est accordé pour paiement anticipé. Toute contestation de facture
            doit être notifiée par écrit dans les 8 jours calendrier de sa réception ; à défaut,
            la facture est réputée acceptée, sans préjudice des droits que la loi reconnaît au
            consommateur.
          </p>
        </Article>

        <Article title="Article 10 — Retard de paiement">
          <p>
            <strong style={{ color: "#1B4332" }}>Client consommateur.</strong> En cas d&apos;impayé à
            l&apos;échéance, le Prestataire adresse un premier rappel gratuit. À défaut de paiement
            dans les 14 jours calendrier suivant l&apos;envoi de ce rappel, le solde est majoré,
            conformément au livre XIX du Code de droit économique : (i) d&apos;intérêts de retard au
            taux prévu par la loi du 2 août 2002 concernant la lutte contre le retard de
            paiement dans les transactions commerciales, calculés sur le solde restant dû, et
            (ii) d&apos;une indemnité forfaitaire de maximum 20 € si le solde est inférieur ou égal à
            150 €, 30 € augmentés de 10 % du montant dû sur la tranche comprise entre 150,01 €
            et 500 €, ou 65 € augmentés de 5 % du montant dû sur la tranche supérieure à 500 €,
            avec un plafond de 2 000 €.
          </p>
          <p>
            <strong style={{ color: "#1B4332" }}>Client professionnel.</strong> Toute facture
            impayée à l&apos;échéance produit de plein droit et sans mise en demeure des intérêts de
            retard au taux prévu par la loi du 2 août 2002, ainsi qu&apos;une indemnité forfaitaire
            de 40 € pour frais de recouvrement, sans préjudice d&apos;une indemnisation raisonnable
            complémentaire pour les frais dépassant ce montant.
          </p>
          <p>
            Le défaut de paiement autorise en outre le Prestataire à suspendre toute prestation
            en cours ou à venir, y compris la garantie de réintervention, jusqu&apos;à complet
            paiement.
          </p>
        </Article>

        <Article title="Article 11 — Responsabilité">
          <p>
            La responsabilité du Prestataire est limitée aux dommages directs et prévisibles
            causés par une faute prouvée dans l&apos;exécution des prestations. Elle est plafonnée,
            toutes causes confondues, au montant total payé par le Client pour la prestation en
            cause, sauf lorsque la loi interdit une telle limitation.
          </p>
          <p>
            Le Prestataire ne répond pas des dommages indirects, notamment la perte
            d&apos;exploitation, le manque à gagner, le préjudice commercial ou d&apos;image, ni des
            dommages résultant du non-respect par le Client de ses obligations (article 5).
          </p>
          <p>
            Les dommages causés par les nuisibles eux-mêmes (notamment dégradation de câbles,
            d&apos;isolants, de cloisons ou de stocks, contamination de denrées et pertes qui en
            découlent), que ce soit avant, pendant ou après l&apos;intervention, ne sont pas
            imputables au Prestataire, sauf faute prouvée du Prestataire dans l&apos;exécution des
            prestations. La présence et le comportement des nuisibles relèvent de facteurs
            multiples indépendants de la volonté du Prestataire ; la protection des biens, le
            stockage des denrées et la mise en conformité des locaux, notamment la réalisation
            des travaux recommandés (colmatage des accès, étanchéité, hygiène), demeurent de la
            responsabilité du Client.
          </p>
          <p>
            Aucune stipulation des Conditions n&apos;exclut ou ne limite la responsabilité du
            Prestataire en cas de dol ou de faute lourde, en cas de décès ou de dommage corporel
            causé par sa faute, ni ne prive le Client consommateur des droits qu&apos;il tire des
            dispositions légales impératives.
          </p>
          <p>
            Le Client signale au Prestataire tout dommage apparent au plus tard 8 jours
            calendrier après l&apos;intervention concernée, par écrit et de manière circonstanciée,
            afin de permettre les constatations utiles. Ce signalement ne conditionne pas les
            droits du consommateur, mais tout retard non justifié pourra être pris en compte
            dans l&apos;établissement des responsabilités.
          </p>
        </Article>

        <Article title="Article 12 — Produits biocides et sécurité">
          <p>
            Les produits utilisés sont mis en œuvre conformément à la réglementation belge et
            européenne applicable et aux prescriptions de leurs autorisations. Les consignes de
            sécurité communiquées au Client (délais de réintégration, aération, protection des
            enfants, des animaux et des denrées) font partie intégrante de la prestation ; leur
            respect relève de la seule responsabilité du Client après le départ du technicien.
            Les fiches de données de sécurité des produits utilisés sont tenues à la disposition
            du Client et communiquées sur simple demande.
          </p>
          <p>
            Lorsque la réglementation impose une dérogation, une autorisation ou l&apos;intervention
            d&apos;une autorité (notamment pour les espèces protégées), l&apos;intervention est
            conditionnée à son obtention et les délais en résultant ne sont pas imputables au
            Prestataire.
          </p>
        </Article>

        <Article title="Article 13 — Force majeure">
          <p>
            Aucune partie ne répond d&apos;un manquement causé par un événement de force majeure au
            sens de l&apos;article 5.226 du Code civil (notamment conditions météorologiques rendant
            le traitement impossible ou inefficace, indisponibilité réglementaire d&apos;un produit,
            épidémie, décision administrative). Les obligations affectées sont suspendues
            pendant la durée de l&apos;événement ; chaque partie peut résoudre le contrat sans
            indemnité si l&apos;empêchement excède 60 jours.
          </p>
        </Article>

        <Article title="Article 14 — Données personnelles">
          <p>
            Le traitement des données personnelles du Client est décrit dans la{" "}
            <Link href="/politique-confidentialite" className="underline" style={{ color: "#1B4332" }}>
              politique de confidentialité
            </Link>, qui fait partie intégrante de l&apos;information précontractuelle.
          </p>
        </Article>

        <Article title="Article 15 — Nullité partielle et non-renonciation">
          <p>
            Si une clause des Conditions est déclarée nulle ou inopposable, les autres clauses
            demeurent pleinement applicables ; la clause concernée est remplacée par la
            stipulation licite la plus proche de l&apos;intention initiale des parties. Le fait pour
            le Prestataire de ne pas se prévaloir d&apos;un manquement du Client n&apos;emporte pas
            renonciation à s&apos;en prévaloir ultérieurement.
          </p>
        </Article>

        <Article title="Article 16 — Réclamations, médiation et droit applicable">
          <p>
            Toute réclamation est adressée en premier lieu à {EMAIL} ; le Prestataire y répond
            dans un délai raisonnable et recherche prioritairement une solution amiable. Le
            Client consommateur peut également s&apos;adresser au Service de Médiation pour le
            Consommateur, Boulevard du Roi Albert II 8 bte 1, 1000 Bruxelles —{" "}
            <a href="https://mediationconsommateur.be" className="underline" style={{ color: "#1B4332" }} target="_blank" rel="noopener noreferrer">
              mediationconsommateur.be
            </a>.
          </p>
          <p>
            Les Conditions et tout contrat conclu avec le Prestataire sont régis par le droit
            belge. Tout litige relève des cours et tribunaux de l&apos;arrondissement judiciaire de
            Bruxelles, sans préjudice des règles de compétence impératives, notamment celles
            applicables aux consommateurs.
          </p>
          <p>
            Les Conditions sont rédigées en français. Toute traduction est fournie à titre de
            convenance ; en cas de divergence, la version française prévaut.
          </p>
        </Article>

      </section>
    </>
  );
}
