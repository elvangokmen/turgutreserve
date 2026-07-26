import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Private Land Offering in Marmaris",
  description:
    "A privately presented 2,761 m² landholding in Turgut, Marmaris, explored through boutique glamping and private forest-villa concepts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
