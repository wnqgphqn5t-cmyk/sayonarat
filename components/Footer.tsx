import Link from "next/link";

const services = [
  { label: "Dératisation Liège", href: "/deratisation-liege" },
  { label: "Désinsectisation Liège", href: "/desinsectisation-liege" },
  { label: "Punaises de lit Liège", href: "/punaises-de-lit-liege" },
  { label: "Guêpes et frelons Liège", href: "/guepes-frelons-liege" },
  { label: "Fourmis Liège", href: "/fourmis-liege" },
  { label: "Mites alimentaires Liège", href: "/mites-alimentaires-liege" },
  { label: "Urgence 7j/7", href: "/urgence" },
];

const communes = [
  "Liège", "Seraing", "Herstal", "Ans",
  "Saint-Nicolas", "Flémalle", "Grâce-Hollogne",
  "Beyne-Heusay", "Awans", "Oupeye",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4332" }} className="text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Sayonarat</h3>
          <p className="text-green-200 text-sm leading-relaxed">
            Dératisation et désinsectisation partout en Belgique. Techniciens certifiés,
            intervention rapide 7j/7.
          </p>
          <p className="mt-4 text-yellow-300 font-semibold text-sm">📞 Devis gratuit en 24h</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Nos services</h3>
          <ul className="space-y-2 text-sm text-green-200">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Zones d'intervention</h3>
          <p className="text-green-200 text-sm leading-relaxed mb-3">
            {communes.join(" · ")}
          </p>
          <p className="text-green-400 text-xs">Et toutes les communes de Belgique — contactez-nous pour vérifier.</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#0f2d1e" }} className="text-center py-4 text-green-400 text-xs space-x-4">
        <span>© {new Date().getFullYear()} Sayonarat — Dératisation & Désinsectisation Belgique. Tous droits réservés.</span>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        <Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link>
        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
        <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
      </div>
    </footer>
  );
}
