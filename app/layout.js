import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Glamping & Family Tiny House Living",
  description:
    "A private 2,671.63 m² single-title landholding in Turgut, Marmaris, presented through compliance-led glamping and family tiny house concepts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
