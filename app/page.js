"use client";

import { useEffect, useState } from "react";

const VIDEO_URL =
  "https://1wyaxdj8oaerosqy.public.blob.vercel-storage.com/MARMARIS%20TURGUT%20KO%CC%88YU%CC%88%20177%20ADA%201%20PARSEL%20.mov";

const WHATSAPP =
  "https://wa.me/905316238737?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20private%20presentation%20for%20Turgut%20Reserve.";

const COPY = {
  en: {
    nav: ["Property", "Vision", "Offering", "Contact"],
    eyebrow: "PRIVATE LAND OFFERING · MARMARIS, TÜRKİYE",
    heroTitle: "Turgut Reserve",
    heroText:
      "A privately presented 2,761 m² landholding in Turgut, Marmaris, offered with an illustrative boutique hospitality vision.",
    heroCta: "Request Private Presentation",
    priceLabel: "ASKING PRICE",
    price: "₺50,000,000",
    propertyKicker: "THE PROPERTY",
    propertyTitle: "A distinctive landholding between forest and coast.",
    propertyText:
      "The offering concerns the land itself. The outlined development imagery is presented separately as an illustrative vision intended to communicate one possible hospitality direction.",
    facts: [
      ["2,761 m²", "Parcel area"],
      ["Approx. 300 m", "Coastal proximity"],
      ["Asphalt road", "Direct access"],
      ["Title documents", "Available upon request"],
    ],
    actualLabel: "ACTUAL PROPERTY VIEW",
    actualCaption:
      "Drone view with an indicative parcel outline. Boundary representation is for presentation purposes; official records remain authoritative.",
    visionKicker: "ILLUSTRATIVE DEVELOPMENT VISION",
    visionTitle: "A possible boutique nature-retreat direction.",
    visionText:
      "The following studies demonstrate a potential design language and spatial approach. They do not represent an approved or completed development.",
    planLabel: "ILLUSTRATIVE SITE PLANNING STUDY",
    suiteLabel: "ILLUSTRATIVE SUITE CONCEPT",
    interiorLabel: "ILLUSTRATIVE INTERIOR ATMOSPHERE",
    serviceKicker: "OPTIONAL PROJECT DELIVERY",
    serviceTitle: "Design and implementation can be quoted separately.",
    serviceText:
      "Upon request, architectural development, detailed design and implementation services may be proposed under a separate commercial offer. Regulatory, planning and licensing processes remain subject to the relevant authorities and are not guaranteed as part of the land offering.",
    offeringKicker: "PRIVATE OFFERING",
    offeringTitle: "Acquire the land. Shape the vision.",
    offeringText:
      "Further title, location and technical information can be shared with qualified prospective buyers through a private presentation process.",
    contactTitle: "Request the private presentation.",
    contactText:
      "For confidential details, documentation or a viewing appointment, contact Elvan Gökmen directly.",
    whatsapp: "WhatsApp",
    email: "Email",
    contactName: "Elvan Gökmen",
    disclaimer:
      "All concept imagery is illustrative. Development potential, use, design, planning and implementation remain subject to due diligence and applicable official approvals.",
  },
  ar: {
    nav: ["العقار", "الرؤية", "العرض", "التواصل"],
    eyebrow: "عرض خاص لأرض · مرمريس، تركيا",
    heroTitle: "Turgut Reserve",
    heroText:
      "أرض بمساحة 2,761 م² معروضة بشكل خاص في تورغوت، مرمريس، ومرفقة برؤية توضيحية لمشروع ضيافة بوتيكي.",
    heroCta: "اطلب العرض الخاص",
    priceLabel: "السعر المطلوب",
    price: "₺50,000,000",
    propertyKicker: "العقار",
    propertyTitle: "أرض مميزة بين الغابة والساحل.",
    propertyText:
      "موضوع العرض هو الأرض نفسها. أما صور التطوير فتعرض بشكل منفصل كرؤية توضيحية لإبراز أحد الاتجاهات المحتملة لمشروع ضيافة.",
    facts: [
      ["2,761 م²", "مساحة الأرض"],
      ["حوالي 300 م", "القرب من الساحل"],
      ["طريق معبد", "وصول مباشر"],
      ["وثائق الملكية", "متاحة عند الطلب"],
    ],
    actualLabel: "صورة فعلية للعقار",
    actualCaption:
      "صورة جوية مع تحديد إرشادي لحدود القطعة. يبقى المرجع الرسمي هو السجلات والوثائق المعتمدة.",
    visionKicker: "رؤية تطوير توضيحية",
    visionTitle: "تصور محتمل لوجهة بوتيكية وسط الطبيعة.",
    visionText:
      "تعرض الدراسات التالية لغة تصميم وتوزيعاً مكانياً محتملاً، ولا تمثل مشروعاً معتمداً أو منفذاً.",
    planLabel: "دراسة تخطيط موقع توضيحية",
    suiteLabel: "تصور توضيحي للجناح",
    interiorLabel: "أجواء داخلية توضيحية",
    serviceKicker: "خدمات تنفيذ اختيارية",
    serviceTitle: "يمكن تقديم عرض منفصل للتصميم والتنفيذ.",
    serviceText:
      "عند الطلب، يمكن تقديم خدمات التطوير المعماري والتصميم التفصيلي والتنفيذ ضمن عرض تجاري مستقل. وتبقى إجراءات التخطيط والتراخيص والموافقات خاضعة للجهات الرسمية المختصة ولا تشكل ضماناً ضمن عرض الأرض.",
    offeringKicker: "عرض خاص",
    offeringTitle: "امتلك الأرض وصِغ الرؤية.",
    offeringText:
      "يمكن مشاركة وثائق الملكية والموقع والمعلومات الفنية مع المشترين الجادين ضمن عرض خاص.",
    contactTitle: "اطلب الملف الخاص بالعقار.",
    contactText:
      "للحصول على التفاصيل والوثائق أو ترتيب زيارة، تواصل مباشرة مع إلفان غوكمن.",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    contactName: "إلفان غوكمن",
    disclaimer:
      "جميع الصور المفاهيمية توضيحية. تخضع إمكانات التطوير والاستخدام والتصميم والتنفيذ للدراسة والموافقات الرسمية المعمول بها.",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = COPY[lang];

  useEffect(() => {
    const saved = localStorage.getItem("tr-lang");
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  const changeLang = (next) => {
    setLang(next);
    localStorage.setItem("tr-lang", next);
  };

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="nav">
        <a className="brand" href="#top">
          <span>TR</span>
          <div><b>TURGUT RESERVE</b><small>PRIVATE LAND OFFERING</small></div>
        </a>
        <nav>
          {t.nav.map((item, i) => (
            <a key={item} href={["#property", "#vision", "#offering", "#contact"][i]}>{item}</a>
          ))}
        </nav>
        <div className="language">
          <button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")}>EN</button>
          <i />
          <button className={lang === "ar" ? "active" : ""} onClick={() => changeLang("ar")}>العربية</button>
        </div>
      </header>

      <section className="hero" id="top">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={VIDEO_URL} type="video/quicktime" />
        </video>
        <div className="heroOverlay" />
        <div className="heroContent">
          <p>{t.eyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <div className="heroBottom">
            <span>{t.heroText}</span>
            <a href="#contact">{t.heroCta} ↗</a>
          </div>
        </div>
        <div className="priceTag"><small>{t.priceLabel}</small><strong>{t.price}</strong></div>
      </section>

      <section className="intro" id="property">
        <div>
          <p className="kicker">{t.propertyKicker}</p>
          <h2>{t.propertyTitle}</h2>
        </div>
        <p className="lead">{t.propertyText}</p>
      </section>

      <section className="facts">
        {t.facts.map(([value, label]) => (
          <div key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="mediaSection actual">
        <div className="mediaHead"><span>{t.actualLabel}</span><p>{t.actualCaption}</p></div>
        <figure className="fullImage lightFrame">
          <img src="/property-drone.jpg" alt={t.actualLabel} />
        </figure>
      </section>

      <section className="visionIntro" id="vision">
        <p className="kicker">{t.visionKicker}</p>
        <h2>{t.visionTitle}</h2>
        <p>{t.visionText}</p>
      </section>

      <section className="editorialGallery">
        <figure className="galleryLarge">
          <img src="/master-vision.png" alt={t.planLabel} />
          <figcaption>{t.planLabel}</figcaption>
        </figure>
        <figure>
          <img src="/suite-concept.png" alt={t.suiteLabel} />
          <figcaption>{t.suiteLabel}</figcaption>
        </figure>
        <figure>
          <img src="/interior-atmosphere.png" alt={t.interiorLabel} />
          <figcaption>{t.interiorLabel}</figcaption>
        </figure>
      </section>

      <section className="service">
        <p className="kicker">{t.serviceKicker}</p>
        <h2>{t.serviceTitle}</h2>
        <p>{t.serviceText}</p>
      </section>

      <section className="offering" id="offering">
        <div>
          <p className="kicker">{t.offeringKicker}</p>
          <h2>{t.offeringTitle}</h2>
          <p>{t.offeringText}</p>
        </div>
        <div className="offeringPrice">
          <small>{t.priceLabel}</small>
          <strong>{t.price}</strong>
          <a href="#contact">{t.heroCta} ↗</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="kicker">PRIVATE ENQUIRY</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contactCard">
          <span>{t.contactName}</span>
          <a className="primary" href={WHATSAPP} target="_blank" rel="noreferrer">{t.whatsapp} ↗</a>
          <a href="mailto:elvangokmenn@gmail.com">{t.email} ↗</a>
          <small>+90 531 623 87 37<br/>elvangokmenn@gmail.com</small>
        </div>
      </section>

      <footer>
        <div className="brand footerBrand"><span>TR</span><div><b>TURGUT RESERVE</b><small>MARMARIS · TÜRKİYE</small></div></div>
        <p>{t.disclaimer}</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
