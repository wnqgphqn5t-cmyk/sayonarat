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
  metadataBase: new URL("https://www.sayonarat.be"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Sayonarat — Dératisation & Désinsectisation Belgique",
    locale: "fr_BE",
    type: "website",
    url: "https://www.sayonarat.be",
    images: [
      {
        url: "/hero-technicien.jpg",
        width: 1200,
        height: 630,
        alt: "Sayonarat — Dératisation & Désinsectisation Belgique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dératisation & Désinsectisation Belgique — Sayonarat",
    description:
      "Techniciens certifiés partout en Belgique. Devis gratuit sous 24h, garantie 30 jours.",
    images: ["/hero-technicien.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
