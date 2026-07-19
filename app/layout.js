import Script from "next/script";
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body>
        {gtmId && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({
                      'gtm.start': new Date().getTime(),
                      event:'gtm.js'
                    });
                    var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />

            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        {children}
      </body>
    </html>
  );
}
