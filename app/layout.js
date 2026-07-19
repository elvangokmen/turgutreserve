import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Private Land Offering",
  description:
    "A privately presented 2,761 m² landholding in Turgut, Marmaris with an illustrative hospitality development vision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
