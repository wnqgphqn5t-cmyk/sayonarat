import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dératisation Liège — Intervention rapide | Sayonarat",
    template: "%s | Sayonarat",
  },
  description:
    "Entreprise de dératisation et désinsectisation à Liège. Intervention en 24h, devis gratuit, 7j/7. Rats, souris, cafards, punaises de lit, frelons.",
  metadataBase: new URL("https://deratisation-liege.be"),
  openGraph: {
    siteName: "Sayonarat — Dératisation Liège",
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
