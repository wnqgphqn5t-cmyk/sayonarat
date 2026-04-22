import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit dératisation Liège | Sayonarat",
  description:
    "Contactez Sayonarat pour un devis gratuit de dératisation ou désinsectisation à Liège. Réponse sous 24h, 7 jours sur 7.",
};

export default function ContactPage() {
  return (
    <>
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
              { icon: "📍", title: "Zone d'intervention", desc: "Liège, Seraing, Herstal, Ans, Saint-Nicolas, Flémalle et communes voisines." },
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
            <p className="font-bold mb-1">Urgence nuisibles à Liège ?</p>
            <p className="text-green-200 text-sm">
              Remplissez le formulaire en indiquant &quot;URGENT&quot; dans le message.
              Nous priorisons votre demande.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
