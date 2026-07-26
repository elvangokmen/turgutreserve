"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/905316238737?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20private%20presentation%20for%20Turgut%20Reserve.";

const COPY = {
  en: {
    nav: ["Property", "Concept Vision", "Offering", "Contact"],
    eyebrow: "PRIVATE LAND OFFERING · MARMARIS, TÜRKİYE",
    heroTitle: "Turgut Reserve",
    heroText:
      "A privately presented 2,761 m² landholding in Turgut, Marmaris, offered with an illustrative boutique hospitality vision.",
    cta: "Request Private Presentation",
    priceLabel: "ASKING PRICE",
    price: "₺50,000,000",
    propertyKicker: "THE PROPERTY",
    propertyTitle: "A private landholding between forest and coast.",
    propertyText:
      "The offering concerns the land itself. The hospitality imagery below is an illustrative concept prepared to communicate one possible investment direction; it does not represent an approved or completed development.",
    facts: [
      ["2,761 m²", "Parcel area"],
      ["Approx. 300 m", "Coastal proximity"],
      ["Asphalt road", "Direct access"],
      ["Marmaris", "Turgut, Türkiye"],
    ],
    visionKicker: "ILLUSTRATIVE CONCEPT VISION",
    visionTitle: "A boutique nature-retreat possibility.",
    visionText:
      "A complete presentation study exploring arrival, private suites, shared wellness and landscape experiences within a coherent premium hospitality language.",
    chapters: [
      ["01", "Master vision", "An illustrative arrangement following the curved road frontage and the forest character of the setting."],
      ["02", "Arrival & wellness", "Reception, lounge, shared pool and wellness spaces envisioned as a refined guest arrival experience."],
      ["03", "Private suites", "Day and evening suite studies with private pools, verandas and warm contemporary interiors."],
      ["04", "Nature experience", "Pedestrian paths, yoga and gathering areas designed around the surrounding pine landscape."],
    ],
    conceptLabel: "ILLUSTRATIVE CONCEPT · PRESENTATION PURPOSES ONLY",
    offeringKicker: "PRIVATE OFFERING",
    offeringTitle: "Acquire the land. Shape the vision.",
    offeringText:
      "Further title, location and technical information can be shared with qualified prospective buyers through a private presentation process.",
    contactTitle: "Request the private presentation.",
    contactText:
      "For confidential details, documentation or a viewing appointment, contact Elvan Gökmen directly.",
    whatsapp: "WhatsApp",
    email: "Email",
    name: "Elvan Gökmen",
    disclaimer:
      "All concept imagery is illustrative. Development potential, use, design, planning, licensing and implementation remain subject to professional due diligence and applicable official approvals.",
  },
  ar: {
    nav: ["العقار", "الرؤية التصورية", "العرض", "التواصل"],
    eyebrow: "عرض خاص لأرض · مرمريس، تركيا",
    heroTitle: "Turgut Reserve",
    heroText:
      "أرض خاصة بمساحة 2,761 م² في تورغوت، مرمريس، مع رؤية توضيحية لمشروع ضيافة بوتيكي.",
    cta: "اطلب العرض الخاص",
    priceLabel: "السعر المطلوب",
    price: "₺50,000,000",
    propertyKicker: "العقار",
    propertyTitle: "أرض خاصة بين الغابة والساحل.",
    propertyText:
      "موضوع العرض هو الأرض نفسها. أما صور الضيافة أدناه فهي تصور توضيحي لاتجاه استثماري محتمل، ولا تمثل مشروعاً معتمداً أو منفذاً.",
    facts: [
      ["2,761 م²", "مساحة الأرض"],
      ["حوالي 300 م", "القرب من الساحل"],
      ["طريق معبد", "وصول مباشر"],
      ["مرمريس", "تورغوت، تركيا"],
    ],
    visionKicker: "رؤية تصورية توضيحية",
    visionTitle: "إمكانية لوجهة بوتيكية وسط الطبيعة.",
    visionText:
      "دراسة عرض متكاملة تشمل الاستقبال والأجنحة الخاصة ومرافق العافية المشتركة وتجارب الطبيعة ضمن هوية ضيافة راقية.",
    chapters: [
      ["01", "الرؤية العامة", "توزيع توضيحي يتبع انحناءة الطريق ويحترم الطابع الطبيعي للغابة."],
      ["02", "الاستقبال والعافية", "تصور راقٍ لمنطقة الاستقبال والصالة والمسبح المشترك ومرافق العافية."],
      ["03", "الأجنحة الخاصة", "تصورات نهارية ومسائية للأجنحة مع مسابح خاصة وشرفات وتصاميم داخلية دافئة."],
      ["04", "تجربة الطبيعة", "مسارات للمشي ومنصات لليوغا ومناطق تجمع منسجمة مع غابة الصنوبر."],
    ],
    conceptLabel: "تصور توضيحي · لأغراض العرض فقط",
    offeringKicker: "عرض خاص",
    offeringTitle: "امتلك الأرض وصِغ الرؤية.",
    offeringText:
      "يمكن مشاركة وثائق الملكية والموقع والمعلومات الفنية مع المشترين الجادين ضمن عرض خاص.",
    contactTitle: "اطلب الملف الخاص بالعقار.",
    contactText:
      "للحصول على التفاصيل والوثائق أو ترتيب زيارة، تواصل مباشرة مع إلفان غوكمن.",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    name: "إلفان غوكمن",
    disclaimer:
      "جميع الصور المفاهيمية توضيحية. تخضع إمكانات التطوير والاستخدام والتصميم والتخطيط والتراخيص والتنفيذ للدراسة المهنية والموافقات الرسمية المعمول بها.",
  },
};

const GALLERIES = [
  [
    "/concept/01_gunduz_genel_proje_gorunumu.webp",
    "/concept/01_genel_proje_yerlesimi.webp",
  ],
  [
    "/concept/02_giris_ve_resepsiyon.webp",
    "/concept/02_resepsiyon_ve_lounge_ic_mekan.webp",
    "/concept/03_ortak_havuz_ve_wellness.webp",
    "/concept/03_wellness_ic_mekan.webp",
  ],
  [
    "/concept/04_gunduz_suit_ve_ozel_havuz.webp",
    "/concept/05_ozel_havuzlu_glamping_suit.webp",
    "/concept/08_ozel_veranda_ve_havuz.webp",
    "/concept/06_glamping_suit_ic_mekan.webp",
    "/concept/07_glamping_suit_banyo.webp",
  ],
  [
    "/concept/09_doga_ve_yuruyus_yolu.webp",
    "/concept/10_yoga_ve_wellness_alani.webp",
    "/concept/04_ates_cukuru_ve_dinlenme_alani.webp",
  ],
];

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = COPY[lang];

  useEffect(() => {
    const saved = localStorage.getItem("tr-lang");
    if (saved === "en" || saved === "ar") setLang(saved);
  }, []);

  function changeLang(next) {
    setLang(next);
    localStorage.setItem("tr-lang", next);
  }

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="nav">
        <a className="brand" href="#top">
          <span>TR</span>
          <div><b>TURGUT RESERVE</b><small>PRIVATE LAND OFFERING</small></div>
        </a>
        <nav>
          {t.nav.map((item, index) => (
            <a key={item} href={["#property", "#vision", "#offering", "#contact"][index]}>{item}</a>
          ))}
        </nav>
        <div className="language">
          <button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button>
          <i />
          <button className={lang === "ar" ? "active" : ""} onClick={() => changeLang("ar")}>العربية</button>
        </div>
      </header>

      <section className="hero" id="top">
        <video autoPlay muted loop playsInline preload="metadata" poster="">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="heroShade" />
        <div className="heroContent">
          <p>{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <div className="heroBottom">
            <span>{t.heroText}</span>
            <a href="#contact">{t.cta} ↗</a>
          </div>
        </div>
        <div className="priceTag"><small>{t.priceLabel}</small><strong>{t.price}</strong></div>
      </section>

      <section className="property" id="property">
        <div className="propertyIntro">
          <div><p className="kicker">{t.propertyKicker}</p><h2>{t.propertyTitle}</h2></div>
          <p>{t.propertyText}</p>
        </div>
        <div className="facts">
          {t.facts.map(([value, label]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="vision" id="vision">
        <div className="visionIntro">
          <p className="kicker">{t.visionKicker}</p>
          <h2>{t.visionTitle}</h2>
          <p>{t.visionText}</p>
        </div>

        {GALLERIES.map((images, chapterIndex) => {
          const [number, title, text] = t.chapters[chapterIndex];
          return (
            <div className="chapter" key={number}>
              <div className="chapterHead">
                <div><span>{number}</span><h3>{title}</h3></div>
                <p>{text}</p>
              </div>
              <div className={`gallery gallery${chapterIndex + 1}`}>
                {images.map((src, imageIndex) => (
                  <figure className={imageIndex === 0 ? "featured" : ""} key={src}>
                    <img src={src} alt={`${title} — ${t.conceptLabel}`} loading="lazy" decoding="async" />
                    <figcaption>{t.conceptLabel}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="offering" id="offering">
        <div><p className="kicker">{t.offeringKicker}</p><h2>{t.offeringTitle}</h2><p>{t.offeringText}</p></div>
        <div className="offerPrice"><small>{t.priceLabel}</small><strong>{t.price}</strong><a href="#contact">{t.cta} ↗</a></div>
      </section>

      <section className="contact" id="contact">
        <div><p className="kicker">PRIVATE ENQUIRY</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div>
        <div className="contactCard">
          <span>{t.name}</span>
          <a className="primary" href={WHATSAPP} target="_blank" rel="noreferrer">{t.whatsapp} ↗</a>
          <a href="mailto:elvangokmenn@gmail.com">{t.email} ↗</a>
          <small>+90 531 623 87 37<br />elvangokmenn@gmail.com</small>
        </div>
      </section>

      <footer>
        <div className="brand"><span>TR</span><div><b>TURGUT RESERVE</b><small>MARMARIS · TÜRKİYE</small></div></div>
        <p>{t.disclaimer}</p><span>© 2026</span>
      </footer>
    </main>
  );
}
