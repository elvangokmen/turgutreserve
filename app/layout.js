import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Glamping & Geniş Aile Tiny House",
  description:
    "Marmaris Turgut’ta doğayla uyumlu lüks glamping ve geniş aile tiny house yaşam alanı.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
