"use client";
import { useState } from "react";

const services = [
  "Dératisation (rats/souris)",
  "Désinsectisation (cafards, fourmis…)",
  "Punaises de lit",
  "Frelons / guêpes",
  "Autre",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xjgjprbo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
      form.reset();
    }
  }

  if (sent) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="font-bold text-lg mb-2" style={{ color: "#1B4332" }}>
          Message envoyé !
        </h3>
        <p className="text-gray-600 text-sm">
          Nous avons bien reçu votre demande. Vous recevrez une réponse sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
        <input
          type="text"
          name="nom"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          placeholder="Jean Dupont"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          placeholder="jean@exemple.be"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
        <input
          type="tel"
          name="telephone"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          placeholder="+32 4XX XX XX XX"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
        <input
          type="text"
          name="ville"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          placeholder="Liège, Seraing…"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Type de nuisible *</label>
        <select
          name="service"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        >
          <option value="">Sélectionnez…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none"
          placeholder="Décrivez votre problème (depuis quand, superficie du logement, etc.)"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: "#1B4332" }}
        className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {loading ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Réponse garantie sous 24h · Devis gratuit et sans engagement
      </p>
    </form>
  );
}
