import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog dératisation & nuisibles — Conseils pratiques",
  description:
    "Conseils pratiques sur la dératisation, désinsectisation et punaises de lit en Belgique. Reconnaître une infestation, prix, méthodes de traitement.",
};

const articles = [
  {
    slug: "frelon-asiatique-liege",
    titre: "Frelon asiatique à Liège : comment le reconnaître et que faire ?",
    desc: "Présent dans toute la province, le frelon asiatique est plus agressif et plus difficile à traiter que le frelon commun. Guide identification + conduite à tenir.",
    date: "23 avril 2026",
    temps: "6 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "cafards-appartement-que-faire",
    titre: "Cafards dans un appartement : que faire ? Guide complet",
    desc: "En appartement, les cafards circulent entre logements via les gaines. Pourquoi le spray aggrave tout, et la seule méthode qui fonctionne en immeuble.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "prix-punaises-lit-liege-2026",
    titre: "Prix traitement punaises de lit Liège 2026 — Tarifs réels",
    desc: "Thermique ou chimique ? Les vrais tarifs par superficie, les 5 facteurs qui font varier le prix, et comment éviter les arnaques.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Tarifs",
  },
  {
    slug: "fourmis-pharaon-traitement",
    titre: "Fourmis pharaon : pourquoi c'est si difficile à éliminer ?",
    desc: "La fourmi pharaon est l'insecte le plus résistant aux traitements classiques. Un spray aggrave l'infestation. Voici la seule méthode qui fonctionne.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "comment-savoir-si-on-a-des-rats",
    titre: "Comment savoir si on a des rats chez soi ? Les 7 signes à ne pas ignorer",
    desc: "Bruits la nuit, traces, excréments… Voici comment identifier une infestation de rats ou souris avant qu'elle s'aggrave.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Dératisation",
  },
  {
    slug: "prix-deratisation-liege-2026",
    titre: "Prix d'une dératisation à Liège en 2026 : ce qu'il faut vraiment savoir",
    desc: "Tarifs réels, facteurs qui font varier le prix, ce que comprend une intervention professionnelle. Sans surprise et sans frais cachés.",
    date: "23 avril 2026",
    temps: "4 min",
    categorie: "Tarifs",
  },
  {
    slug: "punaises-de-lit-que-faire",
    titre: "Punaises de lit : que faire en cas d'infestation à Liège ?",
    desc: "Vous avez trouvé des punaises de lit ? Voici les étapes à suivre immédiatement, ce qu'il ne faut surtout pas faire, et quand appeler un professionnel.",
    date: "23 avril 2026",
    temps: "6 min",
    categorie: "Punaises de lit",
  },
  {
    slug: "cafards-cuisine-que-faire",
    titre: "Cafards dans la cuisine : que faire ? Guide complet",
    desc: "Ne vaporisez surtout pas de spray — ça disperse la colonie. Voici les étapes correctes, les cachettes à inspecter et la seule méthode vraiment efficace.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "deratisation-seraing-zones-risque",
    titre: "Dératisation Seraing : pourquoi cette commune est particulièrement exposée",
    desc: "Friches ArcelorMittal, bords de Meuse, caves communicantes… Seraing cumule les facteurs de risque. Voici comment protéger votre logement.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Dératisation",
  },
  {
    slug: "fourmis-maison-que-faire",
    titre: "Fourmis dans la maison : que faire ? Guide complet",
    desc: "Ne vaporisez surtout pas de spray — ça disperse la colonie. Identifiez l'espèce d'abord : fourmi noire, pharaon ou charpentière. Chaque cas a son traitement.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "reconnaitre-punaise-de-lit",
    titre: "Comment reconnaître une punaise de lit ? Les signes à ne pas ignorer",
    desc: "Piqûres en ligne, taches brun-rouille sur le matelas, points noirs dans les coutures : les 5 signes qui confirment une infestation de punaises de lit.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Punaises de lit",
  },
  {
    slug: "prix-desinsectisation-liege-2026",
    titre: "Prix d'une désinsectisation à Liège en 2026",
    desc: "Tarifs réels par type d'insecte (cafards, fourmis, guêpes, mites), facteurs qui font varier le prix et ce que comprend une intervention professionnelle.",
    date: "23 avril 2026",
    temps: "4 min",
    categorie: "Tarifs",
  },
  {
    slug: "souris-ou-rat-difference",
    titre: "Souris ou rat : comment faire la différence ?",
    desc: "Taille des crottes, type de bruit, comportement : voici comment identifier avec certitude quel rongeur vous avez. Ça change tout pour le traitement.",
    date: "23 avril 2026",
    temps: "4 min",
    categorie: "Dératisation",
  },
  {
    slug: "deratisation-erreurs-a-eviter",
    titre: "Dératisation : les 6 erreurs qui aggravent l'infestation",
    desc: "Colmater trop tôt, poser des pièges sans diagnostic, arrêter le traitement trop vite — les erreurs classiques qui font durer une infestation de rats pendant des mois.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Dératisation",
  },
  {
    slug: "mites-alimentaires-que-faire",
    titre: "Mites alimentaires : que faire ? Guide complet",
    desc: "Des larves dans la farine, des papillons dans les placards ? Voici les étapes immédiates, les erreurs à éviter et quand appeler un professionnel.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "frelons-guepes-liege-que-faire",
    titre: "Frelons et guêpes à Liège : que faire en cas de nid ?",
    desc: "Ne l'approchez pas, ne l'arrosez pas — voici ce qu'il faut vraiment faire face à un nid de frelons ou guêpes. Et pourquoi le frelon asiatique est une urgence.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "punaises-lit-voyage-eviter",
    titre: "Punaises de lit en voyage : comment éviter de les ramener ?",
    desc: "Hôtel, Airbnb, transports : checklist pratique pour détecter les punaises de lit sur place et éviter de les ramener chez vous.",
    date: "23 avril 2026",
    temps: "4 min",
    categorie: "Punaises de lit",
  },
  {
    slug: "cafards-immeuble-responsabilite",
    titre: "Cafards dans un immeuble : qui est responsable ?",
    desc: "Propriétaire ou locataire ? Le droit belge expliqué clairement, les démarches pratiques et comment agir vite sans attendre une décision judiciaire.",
    date: "23 avril 2026",
    temps: "4 min",
    categorie: "Désinsectisation",
  },
  {
    slug: "traitement-thermique-vs-chimique-punaises",
    titre: "Traitement thermique vs chimique : lequel choisir contre les punaises ?",
    desc: "Comparatif complet des deux méthodes : efficacité, prix, durée, contraintes. Pour choisir la bonne option selon votre situation.",
    date: "23 avril 2026",
    temps: "5 min",
    categorie: "Punaises de lit",
  },
];

export default function BlogPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Conseils dératisation & nuisibles en Belgique
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Reconnaître une infestation, comprendre les prix, choisir le bon traitement.
            Tout ce qu&apos;il faut savoir avant d&apos;appeler un professionnel.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#1B4332" }}>
                  {a.categorie}
                </span>
                <span className="text-xs text-gray-400">{a.date} · {a.temps} de lecture</span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-green-800 transition-colors" style={{ color: "#1B4332" }}>
                {a.titre}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              <span className="inline-block mt-4 text-sm font-semibold" style={{ color: "#1B4332" }}>
                Lire l&apos;article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
