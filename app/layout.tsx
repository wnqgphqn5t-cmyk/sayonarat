import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dératisation & Désinsectisation Belgique — Intervention rapide | Sayonarat",
    template: "%s | Sayonarat",
  },
  description:
    "Dératisation et désinsectisation partout en Belgique. Rats, souris, cafards, punaises de lit, guêpes, frelons. Techniciens certifiés, devis gratuit sous 24h, garantie 30 jours.",
  metadataBase: new URL("https://sayonarat.be"),
  openGraph: {
    siteName: "Sayonarat — Dératisation & Désinsectisation Belgique",
    locale: "fr_BE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
