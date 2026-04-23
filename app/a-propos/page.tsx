import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos de Sayonarat — Experts dératisation Liège",
  description:
    "Sayonarat est une équipe d'experts de la lutte antiparasitaire à Liège. Notre mission : mettre en relation les particuliers et entreprises avec les meilleurs techniciens certifiés de la région.",
};

export default function AProposPage() {
  return (
    <>
      <section style={{ backgroundColor: "#1B4332" }} className="text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-300 text-sm mb-2">
            <Link href="/" className="hover:text-white">Accueil</Link> › À propos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de Sayonarat
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Une équipe d&apos;experts de la lutte antiparasitaire au service des habitants
            et entreprises de Liège et sa région.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 max-w-4xl mx-auto">

        {/* Photo technicien */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 md:h-96 mb-14">
          <Image
            src="/pexels-tima-miroshnichenko-6196234.jpg"
            alt="Technicien Sayonarat prêt à intervenir à Liège"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white font-semibold text-lg">Nos techniciens certifiés, prêts à intervenir sous 24h</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
              Notre mission
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sayonarat a été fondé par Victor F. et une équipe d&apos;experts de la lutte
              antiparasitaire avec un constat simple : trouver un technicien certifié
              et disponible rapidement à Liège est souvent un parcours du combattant.
              Les délais sont longs, les prix peu transparents, et la qualité variable.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Notre réponse : créer une plateforme de mise en relation qui connecte
              les particuliers et entreprises de Liège avec des techniciens certifiés
              phytosanitaires, disponibles sous 24h, aux tarifs clairs et avec une
              garantie de résultat.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nous connaissons le terrain liégeois — ses quartiers, son bâti ancien,
              ses zones industrielles et les spécificités de chaque commune. Cette
              connaissance locale fait la différence dans la qualité des interventions
              que nous coordonnons.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Notre engagement</h3>
              <p className="text-sm text-gray-600">
                Chaque technicien de notre réseau est certifié phytosanitaire,
                conforme à la réglementation belge et évalué après chaque intervention.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Ancrage local</h3>
              <p className="text-sm text-gray-600">
                Nous opérons exclusivement dans la région liégeoise : Liège, Seraing,
                Herstal, Ans, Saint-Nicolas et Flémalle. La proximité garantit
                des interventions rapides et un suivi sérieux.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>Transparence</h3>
              <p className="text-sm text-gray-600">
                Devis gratuit, prix annoncés avant intervention, aucun frais caché.
                Garantie 30 jours incluse dans chaque prestation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 border-t border-b border-gray-100">
          {[
            { val: "+500", label: "Interventions réalisées" },
            { val: "98%", label: "Clients satisfaits" },
            { val: "24h", label: "Délai d'intervention" },
            { val: "6", label: "Communes couvertes" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold mb-1" style={{ color: "#1B4332" }}>{s.val}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#1B4332" }}>
            Un problème de nuisibles à Liège ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contactez-nous pour un devis gratuit. Un technicien certifié intervient
            chez vous sous 24h dans toute la région liégeoise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{ backgroundColor: "#1B4332", color: "white" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Demander un devis gratuit →
            </Link>
            <a
              href="tel:+32466442454"
              style={{ backgroundColor: "#FBBF24", color: "#14532d" }}
              className="font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              📞 Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
