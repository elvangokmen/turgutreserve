import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Private Land Offering in Marmaris",
  description:
    "A privately presented 2,761 m² landholding in Turgut, Marmaris, offered with an illustrative boutique hospitality vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
