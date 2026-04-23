import Link from "next/link";

const services = [
  { label: "Dératisation Liège", href: "/deratisation-liege" },
  { label: "Désinsectisation Liège", href: "/desinsectisation-liege" },
  { label: "Punaises de lit Liège", href: "/punaises-de-lit-liege" },
  { label: "Guêpes et frelons Liège", href: "/guepes-frelons-liege" },
  { label: "Mites alimentaires Liège", href: "/mites-alimentaires-liege" },
  { label: "Urgence 7j/7", href: "/urgence" },
];

const villes = [
  { label: "Dératisation Seraing", href: "/deratisation-seraing" },
  { label: "Dératisation Herstal", href: "/deratisation-herstal" },
  { label: "Dératisation Ans", href: "/deratisation-ans" },
  { label: "Dératisation Saint-Nicolas", href: "/deratisation-saint-nicolas" },
  { label: "Dératisation Flémalle", href: "/deratisation-flemalle" },
  { label: "Désinsectisation Seraing", href: "/desinsectisation-seraing" },
  { label: "Désinsectisation Herstal", href: "/desinsectisation-herstal" },
  { label: "Désinsectisation Ans", href: "/desinsectisation-ans" },
  { label: "Désinsectisation Saint-Nicolas", href: "/desinsectisation-saint-nicolas" },
  { label: "Désinsectisation Flémalle", href: "/desinsectisation-flemalle" },
  { label: "Punaises de lit Seraing", href: "/punaises-de-lit-seraing" },
  { label: "Punaises de lit Herstal", href: "/punaises-de-lit-herstal" },
  { label: "Punaises de lit Ans", href: "/punaises-de-lit-ans" },
  { label: "Punaises de lit Saint-Nicolas", href: "/punaises-de-lit-saint-nicolas" },
  { label: "Punaises de lit Flémalle", href: "/punaises-de-lit-flemalle" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4332" }} className="text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">Sayonarat</h3>
          <p className="text-green-200 text-sm leading-relaxed">
            Entreprise spécialisée en dératisation et désinsectisation dans la région de Liège.
            Intervention rapide 7j/7.
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
          <ul className="space-y-2 text-sm text-green-200">
            {villes.map((v) => (
              <li key={v.href}>
                <Link href={v.href} className="hover:text-white transition-colors">
                  {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ backgroundColor: "#0f2d1e" }} className="text-center py-4 text-green-400 text-xs space-x-4">
        <span>© {new Date().getFullYear()} Sayonarat — Dératisation Liège. Tous droits réservés.</span>
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
