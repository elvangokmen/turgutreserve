import './globals.css';

export const metadata = {
  title: 'Turgut Reserve | Private Coastal Land Opportunity in Marmaris',
  description: 'A private coastal land opportunity in Turgut, Marmaris, Türkiye. Request the confidential investment brochure.',
  metadataBase: new URL('https://turgutreserve.com'),
  openGraph: {
    title: 'Turgut Reserve',
    description: 'Private coastal land opportunity in Marmaris, Türkiye.',
    url: 'https://turgutreserve.com',
    siteName: 'Turgut Reserve',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
