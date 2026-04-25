import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit dératisation Belgique",
  description:
    "Contactez Sayonarat pour un devis gratuit de dératisation ou désinsectisation en Belgique. Réponse sous 24h, 7 jours sur 7.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sayonarat — Devis gratuit dératisation Belgique",
  url: "https://sayonarat.be/contact",
  description: "Demandez un devis gratuit pour une dératisation ou désinsectisation en Belgique. Réponse sous 24h, 7j/7.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Sayonarat",
    telephone: "+32466442454",
    email: "contact@sayonarat.be",
    address: { "@type": "PostalAddress", addressLocality: "Liège", postalCode: "4000", addressCountry: "BE" },
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero */}
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Demandez votre devis gratuit
          </h1>
          <p className="text-green-100 text-lg">
            Remplissez le formulaire ci-dessous. Nous vous répondons sous 24h, 7j/7.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Formulaire de contact
          </h2>
          <ContactForm />
        </div>

        {/* Info */}
        <div>
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1B4332" }}>
            Informations utiles
          </h2>
          <div className="space-y-5">
            {[
              { icon: "⏱️", title: "Réponse sous 24h", desc: "Nous répondons à toutes les demandes dans les 24h, même le week-end." },
              { icon: "📍", title: "Zone d'intervention", desc: "Toute la Belgique — intervention sous 24h partout en Wallonie et à Bruxelles." },
              { icon: "💶", title: "Devis gratuit", desc: "Aucun engagement. Le devis est gratuit et sans obligation de votre part." },
              { icon: "🔒", title: "Données protégées", desc: "Vos informations sont utilisées uniquement pour traiter votre demande." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#1B4332" }}>{item.title}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl text-white" style={{ backgroundColor: "#1B4332" }}>
            <p className="font-bold mb-1">Urgence nuisibles en Belgique ?</p>
            <p className="text-green-200 text-sm mb-4">
              Appelez-nous directement pour une intervention le jour même.
            </p>
            <a
              href="tel:+32466442454"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
              className="block text-center font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
