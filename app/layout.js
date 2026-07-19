import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Private Land Offering in Marmaris",
  description:
    "A privately presented 2,761 m² landholding in Turgut, Marmaris, offered at ₺50,000,000 with an illustrative boutique hospitality vision.",
  openGraph: {
    title: "Turgut Reserve | Private Land Offering",
    description:
      "2,761 m² private land offering in Turgut, Marmaris. Asking price ₺50,000,000.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AR"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
