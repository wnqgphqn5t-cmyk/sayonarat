import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ — Questions fréquentes dératisation & nuisibles Belgique",
  description:
    "Toutes les réponses sur la dératisation, désinsectisation et punaises de lit en Belgique. Prix, délais, méthodes, garanties — sans jargon.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le délai d'intervention en Belgique ?",
      acceptedAnswer: { "@type": "Answer", text: "Sayonarat intervient généralement sous 48h partout en Belgique. Pour les situations urgentes (nid de frelons actif, infestation sévère), contactez-nous par téléphone — nous faisons le maximum pour intervenir le jour même selon les disponibilités." },
    },
    {
      "@type": "Question",
      name: "Combien coûte une dératisation à Liège ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 150 € et 450 € pour une maison unifamiliale à Liège, selon la superficie et l'ampleur de l'infestation. Pour un appartement, comptez entre 150 € et 320 €. Le devis est gratuit et sans engagement — vous recevez une estimation sous 24h." },
    },
    {
      "@type": "Question",
      name: "Le traitement est-il garanti ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Toutes les interventions sont couvertes par une garantie 30 jours. Si les nuisibles réapparaissent dans le mois suivant l'intervention, un technicien revient sans frais supplémentaires." },
    },
    {
      "@type": "Question",
      name: "Les produits utilisés sont-ils dangereux pour les enfants et les animaux ?",
      acceptedAnswer: { "@type": "Answer", text: "Non, après le temps de séchage recommandé (généralement 2 à 4 heures). Les produits utilisés sont homologués en Belgique par l'AFSCA. Pendant l'intervention, il est recommandé de quitter le logement avec les animaux de compagnie. Le technicien vous indique le délai précis avant réintégration." },
    },
    {
      "@type": "Question",
      name: "Dois-je préparer mon logement avant l'intervention ?",
      acceptedAnswer: { "@type": "Answer", text: "Dépend du type de traitement. Pour une dératisation : dégagez les accès aux zones infestées (caves, greniers, sous-éviers). Pour une désinsectisation cafards : videz les placards de cuisine. Pour un traitement punaises de lit thermique : retirez les plantes, médicaments et objets sensibles à la chaleur. Le technicien vous envoie une liste précise à la prise de rendez-vous." },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure une intervention ?",
      acceptedAnswer: { "@type": "Answer", text: "Entre 1h et 4h selon le type de nuisible et la superficie. Une dératisation standard dure 1h30 à 2h. Un traitement thermique punaises de lit dure 6 à 8h. Un traitement cafards par gel dure 1h à 2h. La durée exacte est communiquée lors de la prise de rendez-vous." },
    },
    {
      "@type": "Question",
      name: "Faut-il plusieurs interventions pour éliminer les nuisibles ?",
      acceptedAnswer: { "@type": "Answer", text: "Pas systématiquement. Le nombre de passages est déterminé après diagnostic selon l'ampleur de l'infestation. Dans la majorité des cas, une seule intervention suffit. La garantie 30 jours couvre un retour sans frais si nécessaire." },
    },
    {
      "@type": "Question",
      name: "Quelle est votre zone d'intervention ?",
      acceptedAnswer: { "@type": "Answer", text: "Sayonarat intervient partout en Belgique francophone — Liège, Bruxelles, Namur, Charleroi, Mons, Verviers et toutes les communes environnantes. Contactez-nous pour confirmer la disponibilité dans votre zone." },
    },
    {
      "@type": "Question",
      name: "Êtes-vous disponibles le week-end ?",
      acceptedAnswer: { "@type": "Answer", text: "Oui. Sayonarat est disponible 7j/7, y compris le samedi et le dimanche. Les urgences (nids de guêpes ou frelons en zone de passage, infestations sévères) sont traitées en priorité." },
    },
    {
      "@type": "Question",
      name: "Comment obtenir un devis ?",
      acceptedAnswer: { "@type": "Answer", text: "Par téléphone au +32 466 44 24 54 ou via le formulaire de contact. Décrivez votre situation (type de nuisible, superficie approximative, localisation) et vous recevez une estimation sous 24h. Aucun déplacement n'est requis pour établir le devis." },
    },
  ],
};

const sections = [
  {
    titre: "Généralités",
    questions: [
      {
        q: "Quel est le délai d'intervention en Belgique ?",
        a: "Sayonarat intervient généralement sous 48h partout en Belgique. Pour les situations urgentes (nid de frelons actif, infestation sévère), contactez-nous par téléphone — nous faisons le maximum pour intervenir le jour même selon les disponibilités.",
      },
      {
        q: "Êtes-vous disponibles le week-end ?",
        a: "Oui. Sayonarat est disponible 7j/7, y compris le samedi et le dimanche. Les urgences (nids de guêpes ou frelons en zone de passage, infestations sévères) sont traitées en priorité.",
      },
      {
        q: "Quelle est votre zone d'intervention ?",
        a: "Sayonarat intervient partout en Belgique francophone — Liège, Bruxelles, Namur, Charleroi, Mons, Verviers et toutes les communes environnantes. Contactez-nous pour confirmer la disponibilité dans votre zone.",
      },
      {
        q: "Comment obtenir un devis ?",
        a: "Par téléphone au +32 466 44 24 54 ou via le formulaire de contact. Décrivez votre situation (type de nuisible, superficie approximative, localisation) et vous recevez une estimation sous 24h. Aucun déplacement n'est requis pour établir le devis.",
      },
      {
        q: "Êtes-vous certifiés pour intervenir en Belgique ?",
        a: "Oui. Nos partenaires techniciens disposent de la certification phytosanitaire obligatoire en Belgique (agréation AFSCA) pour l'application de produits antiparasitaires. Tous les produits utilisés sont homologués conformément à la réglementation belge.",
      },
    ],
  },
  {
    titre: "Prix et garanties",
    questions: [
      {
        q: "Combien coûte une dératisation à Liège ?",
        a: "Entre 150 € et 450 € pour une maison unifamiliale, selon la superficie et l'ampleur de l'infestation. Pour un appartement, comptez entre 150 € et 320 €. Le devis est gratuit et sans engagement.",
      },
      {
        q: "Combien coûte une désinsectisation (cafards, fourmis) ?",
        a: "Entre 120 € et 400 € selon le type d'insecte et la superficie. Les fourmis pharaons nécessitent un traitement plus complexe (200 € à 450 €). Les nids de guêpes accessibles sont traités entre 90 € et 180 €.",
      },
      {
        q: "Combien coûte un traitement punaises de lit ?",
        a: "Entre 150 € et 450 € selon la méthode (thermique ou chimique) et la superficie. Le traitement thermique est plus cher mais donne un résultat complet en une seule intervention. Le traitement chimique est moins coûteux.",
      },
      {
        q: "Le traitement est-il garanti ?",
        a: "Oui. Toutes les interventions sont couvertes par une garantie 30 jours. Si les nuisibles réapparaissent dans le mois suivant l'intervention, un technicien revient sans frais supplémentaires.",
      },
      {
        q: "Y a-t-il des frais cachés ?",
        a: "Non. Le tarif annoncé comprend le déplacement, le diagnostic complet, les produits professionnels et le rapport d'intervention. Aucun supplément ne s'applique sur les prestations décrites dans le devis.",
      },
      {
        q: "Peut-on payer en plusieurs fois ?",
        a: "Contactez-nous pour discuter des modalités de paiement selon votre situation. Nous acceptons les paiements par virement bancaire et en espèces.",
      },
    ],
  },
  {
    titre: "Avant et pendant l'intervention",
    questions: [
      {
        q: "Dois-je préparer mon logement avant l'intervention ?",
        a: "Dépend du type de traitement. Pour une dératisation : dégagez les accès aux zones infestées (caves, greniers, sous-éviers). Pour les cafards : videz les placards de cuisine. Pour un traitement thermique punaises de lit : retirez plantes, médicaments et objets sensibles à la chaleur. Le technicien vous envoie une liste précise à la prise de rendez-vous.",
      },
      {
        q: "Dois-je quitter mon logement pendant l'intervention ?",
        a: "Pour la plupart des traitements chimiques : oui, pendant 2 à 4 heures. Pour le traitement thermique punaises de lit : pendant toute la durée (6 à 8h). Pour certains traitements légers (gel anti-cafards) : non obligatoire, mais recommandé. Le technicien précise le délai selon les produits utilisés.",
      },
      {
        q: "Les produits utilisés sont-ils dangereux pour les enfants et les animaux ?",
        a: "Non, après le temps de séchage recommandé (2 à 4 heures selon le produit). Les animaux et enfants ne doivent pas être présents pendant l'intervention. Après ventilation et séchage, le logement est parfaitement sûr.",
      },
      {
        q: "Combien de temps dure une intervention ?",
        a: "Entre 1h et 8h selon le type de nuisible. Dératisation standard : 1h30 à 2h. Désinsectisation cafards : 1h à 2h. Traitement thermique punaises de lit : 6 à 8h. Destruction nid de guêpes : 30 min à 1h (de nuit).",
      },
      {
        q: "Faut-il plusieurs interventions ?",
        a: "Pas systématiquement. Le nombre de passages est déterminé après diagnostic. Dans la majorité des cas, une seule intervention suffit. La garantie 30 jours couvre un retour sans frais si nécessaire.",
      },
    ],
  },
  {
    titre: "Rats et souris",
    questions: [
      {
        q: "Comment savoir si j'ai des rats ou des souris ?",
        a: "Les rats laissent des excréments de 10 à 20 mm (taille d'une olive), font des bruits lourds la nuit et rongent les câbles et structures. Les souris laissent des excréments de 3 à 6 mm (grain de riz) et font des grattements légers et rapides. Les rats sont plus méfiants — ils évitent les nouveaux objets plusieurs jours.",
        lien: { label: "Guide complet : souris ou rat ?", href: "/blog/souris-ou-rat-difference" },
      },
      {
        q: "Les rats peuvent-ils rentrer par les canalisations ?",
        a: "Oui. Le rat brun (Rattus norvegicus) est un excellent nageur et peut remonter les canalisations. C'est l'une des voies d'entrée les plus fréquentes dans les immeubles liégeois, notamment via les WC et siphons non entretenus. Le technicien inspecte et préconise la pose de clapets anti-retour si nécessaire.",
      },
      {
        q: "Les produits de dératisation sont-ils dangereux pour mes animaux ?",
        a: "Les appâts rodenticides sont placés dans des boîtiers sécurisés anti-enfants et anti-animaux de compagnie. Ils sont inaccessibles aux chiens et chats. En cas d'ingestion accidentelle, contactez immédiatement un vétérinaire.",
      },
    ],
  },
  {
    titre: "Cafards et insectes",
    questions: [
      {
        q: "Pourquoi les sprays du commerce ne fonctionnent-ils pas contre les cafards ?",
        a: "Un spray tue les cafards visibles (5 à 10% de la colonie). Le reste se cache dans les joints, faux plafonds et gaines techniques. Les survivants se reproduisent : une femelle pond jusqu'à 300 œufs par an. Le gel insecticide professionnel est rapporté au nid par les ouvrières et empoisonne toute la colonie.",
        lien: { label: "Guide cafards cuisine", href: "/blog/cafards-cuisine-que-faire" },
      },
      {
        q: "Comment distinguer un frelon d'une guêpe ?",
        a: "Le frelon commun mesure 2,5 à 3,5 cm, avec une tête rousse. La guêpe germanique mesure 1,2 à 1,7 cm avec des rayures jaune vif. Le frelon asiatique est brun-noir avec une bande orangée — c'est une espèce invasive à signaler obligatoirement à l'AFSCA.",
        lien: { label: "Service guêpes et frelons Liège", href: "/guepes-frelons-liege" },
      },
      {
        q: "Les fourmis pharaons sont-elles dangereuses ?",
        a: "Pas directement pour l'homme, mais elles peuvent contaminer des milieux médicaux (hôpitaux, maisons de repos) et transporter des bactéries. En immeuble, elles sont extrêmement difficiles à éliminer sans professionnel car un traitement amateur déclenche la scissiparité — la colonie se divise et colonise tout le bâtiment.",
      },
    ],
  },
  {
    titre: "Punaises de lit",
    questions: [
      {
        q: "Comment savoir si j'ai des punaises de lit ?",
        a: "Signes principaux : piqûres en ligne de 3 à 5 points sur les zones découvertes au réveil, taches brun-rouille sur le matelas, petits points noirs dans les coutures (excréments), odeur sucrée et musquée dans la chambre. Les punaises mesurent 4 à 5 mm et sont visibles à l'œil nu dans les coutures.",
        lien: { label: "Guide : reconnaître une punaise de lit", href: "/blog/reconnaitre-punaise-de-lit" },
      },
      {
        q: "Faut-il jeter son matelas en cas de punaises de lit ?",
        a: "Non, dans la plupart des cas. Jeter le matelas ne résout pas le problème car les punaises se logent aussi dans le cadre de lit, les plinthes et les prises électriques. Un traitement professionnel est indispensable — et suffit à éliminer l'infestation sans remplacer le mobilier.",
      },
      {
        q: "Quelle est la différence entre traitement thermique et chimique ?",
        a: "Le traitement thermique (60°C+) élimine punaises et œufs en une seule intervention, le logement est réintégrable le soir même. Plus cher (250–500€). Le traitement chimique utilise des insecticides rémanents sur plusieurs semaines, moins coûteux (150–380€). Les deux sont efficaces entre les mains d'un professionnel.",
        lien: { label: "Comparatif thermique vs chimique", href: "/blog/traitement-thermique-vs-chimique-punaises" },
      },
      {
        q: "Les punaises de lit se propagent-elles aux voisins ?",
        a: "Oui, en immeuble collectif. Les punaises migrent via les prises électriques, les fissures et les murs mitoyens. Si vous êtes en appartement, informez votre syndic — un traitement coordonné avec les voisins est souvent nécessaire pour éviter la recontamination.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Questions fréquentes — Nuisibles en Belgique
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-6">
            Prix, délais, méthodes, garanties — toutes les réponses sur la dératisation,
            désinsectisation et punaises de lit en Belgique, sans jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block text-center">
              📞 +32 466 44 24 54
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors text-center">
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 bg-green-50 border-b border-green-100">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 text-sm">
          {sections.map((s) => (
            <a key={s.titre} href={`#${s.titre.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-").replace(/é/g, "e").replace(/è/g, "e")}`}
              className="font-medium hover:underline" style={{ color: "#1B4332" }}>
              {s.titre}
            </a>
          ))}
        </div>
      </section>

      <div className="py-12 px-4 max-w-4xl mx-auto space-y-16">
        {sections.map((section) => (
          <section key={section.titre} id={section.titre.toLowerCase().replace(/'/g, "").replace(/\s+/g, "-").replace(/é/g, "e").replace(/è/g, "e")}>
            <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2" style={{ color: "#1B4332", borderColor: "#1B4332" }}>
              {section.titre}
            </h2>
            <div className="space-y-5">
              {section.questions.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  {"lien" in item && item.lien && (
                    <Link href={item.lien.href} className="inline-block mt-3 text-xs font-semibold underline" style={{ color: "#1B4332" }}>
                      → {item.lien.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="p-6 rounded-2xl text-white text-center" style={{ backgroundColor: "#1B4332" }}>
          <h2 className="text-xl font-bold mb-2">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-green-200 mb-5 text-sm">Appelez-nous ou envoyez un message — réponse sous 24h.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+32466442454" style={{ backgroundColor: "#FBBF24", color: "#14532d" }} className="font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
              📞 Appeler maintenant
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-900 transition-colors">
              Envoyer un message →
            </Link>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Nos services :</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/deratisation-liege" className="underline" style={{ color: "#1B4332" }}>Dératisation Liège</Link>
            <Link href="/desinsectisation-liege" className="underline" style={{ color: "#1B4332" }}>Désinsectisation Liège</Link>
            <Link href="/punaises-de-lit-liege" className="underline" style={{ color: "#1B4332" }}>Punaises de lit Liège</Link>
            <Link href="/guepes-frelons-liege" className="underline" style={{ color: "#1B4332" }}>Guêpes et frelons Liège</Link>
            <Link href="/mites-alimentaires-liege" className="underline" style={{ color: "#1B4332" }}>Mites alimentaires Liège</Link>
          </div>
        </div>
      </div>
    </>
  );
}
