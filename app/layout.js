import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Private Land Opportunity in Marmaris",
  description:
    "A private 2,671.63 m² land opportunity in Turgut, Marmaris, Türkiye. Request the confidential investment presentation.",
  metadataBase: new URL("https://turgutreserve.com"),
  openGraph: {
    title: "Turgut Reserve",
    description: "Private land opportunity in Turgut, Marmaris.",
    url: "https://turgutreserve.com",
    siteName: "Turgut Reserve",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}