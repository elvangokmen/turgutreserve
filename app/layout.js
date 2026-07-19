import "./globals.css";

export const metadata = {
  title: "Turgut Reserve | Private Investment Opportunity",
  description:
    "A privately presented 2,761 m² hospitality and nature investment opportunity in Turgut, Marmaris.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
