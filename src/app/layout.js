import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://mediren.uz"),
  title: "МЕДИРЕН® — Растительный урологический препарат | Таблетки №60",
  description:
    "МЕДИРЕН® — комбинированный растительный препарат для лечения заболеваний почек и мочевыводящих путей. Мочегонное, спазмолитическое, противовоспалительное действие. Производитель: Spring Pharmaceutic.",
  keywords: [
    "МЕДИРЕН",
    "медирен таблетки",
    "урологический препарат",
    "лечение почек",
    "мочевыводящие пути",
    "цистит лечение",
    "пиелонефрит",
    "растительный препарат",
    "Spring Pharmaceutic",
    "фитопрепарат",
    "мочекаменная болезнь",
    "mediren",
    "buyrak dorisi",
    "siydik yo'llari",
    "o'simlik preparati",
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
    canonical: "https://mediren.uz",
  },
  openGraph: {
    type: "website",
    url: "https://mediren.uz",
    title: "МЕДИРЕН® — Растительный урологический препарат",
    description:
      "Комбинированный растительный препарат для лечения заболеваний почек и мочевыводящих путей. Мочегонное, спазмолитическое, противовоспалительное действие.",
    siteName: "МЕДИРЕН",
    images: [
      {
        url: "/mediren.webp",
        width: 900,
        height: 800,
        alt: "МЕДИРЕН® таблетки",
      },
      {
        url: "/mediren-logo.svg",
        width: 800,
        height: 600,
        alt: "МЕДИРЕН логотип",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "МЕДИРЕН® — Растительный урологический препарат",
    description:
      "Комбинированный растительный препарат для лечения заболеваний почек и мочевыводящих путей.",
    images: ["/mediren.webp"],
  },
  other: {
    "telegram:channel": "@SpringPharmaceutic",
    "instagram:account": "@springpharmaceutic",
    "article:publisher": "https://www.facebook.com/spring.pharm.3/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
