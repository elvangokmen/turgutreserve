import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Marmaris Private Land Offering",
  description:
    "A 2,671.63 m² private land offering in Marmaris Turgut, presented with luxury glamping and private mobile family-living concepts.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
