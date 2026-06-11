import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://feramil.uz"),
  title: "ФЕРАМИЛ — железо и витамины при анемии | капсулы 3×10",
  description:
    "ФЕРАМИЛ — комбинированный препарат для лечения и профилактики железодефицитной анемии. Содержит железа сульфат, фолиевую кислоту, витамины B1, B2, B6, C и цинк. Применяется у взрослых и детей старше 12 лет, при беременности и лактации.",
  keywords: [
    "Ферамил",
    "Ферамил капсулы",
    "железо для женщин",
    "витамины при анемии",
    "железодефицитная анемия",
    "препарат железа",
    "дефицит железа",
    "усталость слабость лечение",
    "капсулы с железом",
    "женское здоровье",
    "feramil capsules",
    "temir kapsulalar",
    "ayollar uchun temir",
    "kamqonlik davolash",
    "беременность анемия",
    "фолиевая кислота",
    "цинк витамины",
    "гиперменорея лечение",
    "homiladorlik davrida temir",
    "foliy kislota",
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
    google: "BlIdO3bCCKcKwTgzk3dSONGkfwNStgVcZHHcwzpfEFo",
  },
  alternates: {
    canonical: "https://feramil.uz",
  },
  openGraph: {
    type: "website",
    url: "https://feramil.uz",
    title: "ФЕРАМИЛ — железо и витамины при анемии | капсулы 3×10",
    description:
      "Препарат для лечения железодефицитной анемии. Содержит железо, фолиевую кислоту, витамины группы B, витамин C и цинк. Капсулы 3×10.",
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
    title: "ФЕРАМИЛ — железо и витамины при анемии | капсулы 3×10",
    description:
      "Препарат для лечения железодефицитной анемии. Содержит железо, фолиевую кислоту, витамины группы B, витамин C и цинк. Капсулы 3×10.",
    images: ["/feramil.webp"],
  },
  // other: {
  //   "telegram:channel": "@Milagro",
  //   "instagram:account": "@milagro_uz",
  //   "article:publisher": "https://www.facebook.com/milagro.uz/",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
