import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://feramil.uz"),
  title: "ФЕРАМИЛ — капсулы с железом и витаминами для женщин | Milagro",
  description:
    "ФЕРАМИЛ — комбинированный препарат Milagro для восполнения дефицита железа и витаминов у женщин. Капсулы 3×10. Эффективно при железодефицитной анемии, усталости и слабости.",
  keywords: [
    "Ферамил",
    "Ферамил капсулы",
    "железо для женщин",
    "витамины при анемии",
    "железодефицитная анемия",
    "препарат железа",
    "Milagro",
    "дефицит железа",
    "усталость слабость лечение",
    "капсулы с железом",
    "женское здоровье",
    "feramil capsules",
    "temir kapsulalar",
    "ayollar uchun temir",
    "kamqonlik davolash",
    "Milagro preparati",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EeNrX_Vhd4bMEJnslGv6D89shImpFKT1eTXHeeqUF8I",
  },
  alternates: {
    canonical: "https://feramil.uz",
  },
  openGraph: {
    type: "website",
    url: "https://feramil.uz",
    title: "ФЕРАМИЛ — капсулы с железом и витаминами для женщин | Milagro",
    description:
      "Комбинированный препарат Milagro для восполнения дефицита железа и витаминов у женщин. Капсулы 3×10. Эффективно при железодефицитной анемии, усталости и слабости.",
    siteName: "ФЕРАМИЛ",
    images: [
      {
        url: "/feramil.webp",
        width: 900,
        height: 800,
        alt: "ФЕРАМИЛ",
      },
      {
        url: "/feramil-logo.svg",
        width: 800,
        height: 600,
        alt: "ФЕРАМИЛ логотип",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "ФЕРАМИЛ — капсулы с железом и витаминами для женщин | Milagro",
    description:
      "Комбинированный препарат Milagro для восполнения дефицита железа и витаминов у женщин. Капсулы 3×10.",
    images: ["/feramil.webp"],
  },
  other: {
    "telegram:channel": "@Milagro",
    "instagram:account": "@milagro_uz",
    "article:publisher": "https://www.facebook.com/milagro.uz/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
