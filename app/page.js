"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://1wyaxdj8oaerosqy.public.blob.vercel-storage.com/MARMARIS%20TURGUT%20KO%CC%88YU%CC%88%20177%20ADA%201%20PARSEL%20.mov";

const copy = {
  en: {
    nav: ["Property", "Opportunity", "Vision", "Enquire"],
    heroEyebrow: "PRIVATE LAND OFFERING · MARMARIS",
    heroTitle: "TURGUT\nRESERVE",
    heroText:
      "A privately presented landholding in Turgut Village, shaped by forest, coastline and long-term hospitality potential.",
    heroCta: "REQUEST PRIVATE DETAILS",
    discover: "DISCOVER",
    facts: [
      ["2,761 m²", "Landholding"],
      ["₺50,000,000", "Asking price"],
      ["Approx. 300 m", "To the coast"],
      ["177 / 1", "Block / parcel"],
    ],
    propertyKicker: "THE PROPERTY",
    propertyTitle: "A distinctive parcel framed by nature.",
    propertyText:
      "The offering comprises a privately held 2,761 m² parcel in Turgut, Marmaris. Its elongated road frontage, forest-edge setting and proximity to the coast create a compelling basis for a carefully considered future use.",
    propertyPoints: [
      "Private title holding",
      "Direct asphalt road frontage",
      "Established forest backdrop",
      "Approx. 300 m coastal proximity",
    ],
    imageLabel: "ACTUAL PROPERTY · PARCEL BOUNDARY INDICATED",
    opportunityKicker: "THE OPPORTUNITY",
    opportunityTitle: "The value begins with the land.",
    opportunityText:
      "The site is marketed first and foremost as a land investment. Its setting, scale and access support a range of future possibilities that may be explored independently by the buyer.",
    pillars: [
      ["01", "Private Ownership", "A direct land acquisition presented through a confidential buyer process."],
      ["02", "Premium Setting", "A rare combination of forest character, road access and coastal proximity."],
      ["03", "Hospitality Potential", "A suitable foundation for evaluating a low-density, nature-led hospitality concept."],
      ["04", "Long-Term Value", "A scarce landholding within one of the Marmaris peninsula’s most distinctive areas."],
    ],
    visionKicker: "ILLUSTRATIVE DEVELOPMENT VISION",
    visionTitle: "One possible expression of the site’s potential.",
    visionText:
      "The following master vision is a conceptual design study prepared to demonstrate how a boutique hospitality experience could be organised on the parcel.",
    visionNote:
      "Illustrative concept only. Any future development, use, capacity or construction remains subject to the buyer’s own studies and all applicable planning, zoning, technical and governmental approvals.",
    atmosphereKicker: "ILLUSTRATIVE DESIGN ATMOSPHERE",
    atmosphereTitle: "A nature-led guest experience, imagined with restraint.",
    atmosphereText:
      "The interior study communicates a possible design language rather than a completed or approved project. Architectural design and implementation services may be quoted separately upon request.",
    offerKicker: "PRIVATE OFFERING",
    offerTitle: "₺50,000,000",
    offerText:
      "Supporting title documents, location information and selected technical material are available through a private enquiry process.",
    contactKicker: "PRIVATE ENQUIRIES",
    contactTitle: "Request the confidential property file.",
    contactText:
      "For direct owner communication, title documentation and further information, submit a private enquiry.",
    contactButton: "CONTACT VIA WHATSAPP",
    legal:
      "The property is offered as land. All concept imagery and planning material are illustrative and do not constitute a construction, zoning, licence, permit, revenue or return guarantee. Buyers should complete independent legal, technical and commercial due diligence.",
  },
  ar: {
    nav: ["الأرض", "الفرصة", "الرؤية", "التواصل"],
    heroEyebrow: "عرض أرض خاص · مرمريس",
    heroTitle: "TURGUT\nRESERVE",
    heroText:
      "أرض معروضة بشكل خاص في قرية تورغوت، تجمع بين الغابة والساحل وإمكانات ضيافة طويلة الأجل.",
    heroCta: "طلب التفاصيل الخاصة",
    discover: "اكتشف",
    facts: [
      ["2,761 م²", "مساحة الأرض"],
      ["₺50,000,000", "السعر المطلوب"],
      ["حوالي 300 م", "إلى الساحل"],
      ["177 / 1", "البلوك / القطعة"],
    ],
    propertyKicker: "الأرض",
    propertyTitle: "قطعة مميزة تحيط بها الطبيعة.",
    propertyText:
      "يشمل العرض قطعة أرض خاصة بمساحة 2,761 م² في تورغوت، مرمريس. واجهتها الممتدة على الطريق وموقعها بمحاذاة الغابة وقربها من الساحل تمنحها أساساً مميزاً للاستخدام المستقبلي المدروس.",
    propertyPoints: [
      "ملكية خاصة مباشرة",
      "واجهة على طريق أسفلتي",
      "خلفية غابية طبيعية",
      "حوالي 300 م من الساحل",
    ],
    imageLabel: "صورة فعلية للأرض · حدود القطعة موضحة",
    opportunityKicker: "الفرصة",
    opportunityTitle: "القيمة تبدأ من الأرض.",
    opportunityText:
      "يتم تسويق الموقع أولاً كاستثمار أرضي. ويمكن للمشتري دراسة خيارات الاستخدام المستقبلية بشكل مستقل وفقاً للأنظمة والموافقات المعمول بها.",
    pillars: [
      ["01", "ملكية خاصة", "استحواذ مباشر على الأرض من خلال عملية تواصل خاصة وسرية."],
      ["02", "موقع مميز", "مزيج نادر من الطبيعة والوصول المباشر والقرب من الساحل."],
      ["03", "إمكانات ضيافة", "أساس مناسب لدراسة مفهوم ضيافة منخفض الكثافة ومتصل بالطبيعة."],
      ["04", "قيمة طويلة الأجل", "ملكية نادرة ضمن إحدى أكثر مناطق شبه جزيرة مرمريس تميزاً."],
    ],
    visionKicker: "رؤية تطوير توضيحية",
    visionTitle: "تصور واحد محتمل لإمكانات الموقع.",
    visionText:
      "الرؤية التالية دراسة تصميمية مفاهيمية توضح كيف يمكن تنظيم تجربة ضيافة بوتيكية على قطعة الأرض.",
    visionNote:
      "تصور توضيحي فقط. أي تطوير أو استخدام أو سعة أو بناء مستقبلي يخضع لدراسات المشتري وجميع موافقات التخطيط والتنظيم والجهات المختصة.",
    atmosphereKicker: "أجواء تصميم توضيحية",
    atmosphereTitle: "تجربة ضيف مستوحاة من الطبيعة وبتصميم هادئ.",
    atmosphereText:
      "تعكس الدراسة الداخلية لغة تصميم محتملة وليست مشروعاً مكتملًا أو معتمداً. يمكن تقديم عرض منفصل لخدمات التصميم والتنفيذ عند الطلب.",
    offerKicker: "عرض خاص",
    offerTitle: "₺50,000,000",
    offerText:
      "تتوفر مستندات الملكية ومعلومات الموقع وبعض المواد الفنية من خلال تواصل خاص.",
    contactKicker: "استفسارات خاصة",
    contactTitle: "اطلب ملف الأرض السري.",
    contactText:
      "للتواصل المباشر مع المالك والحصول على المستندات والمعلومات الإضافية، أرسل استفساراً خاصاً.",
    contactButton: "التواصل عبر واتساب",
    legal:
      "العرض يتعلق بالأرض. جميع الصور والمخططات المفاهيمية توضيحية ولا تمثل ضماناً للبناء أو التنظيم أو الترخيص أو الدخل أو العائد. يجب على المشتري إجراء الفحص القانوني والفني والتجاري المستقل.",
  },
};

function Header({ lang, setLang, open, setOpen, t }) {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Turgut Reserve home">
        <span className="monogram">TR</span>
        <span className="brandWords">
          <strong>TURGUT RESERVE</strong>
          <small>PRIVATE LAND OFFERING</small>
        </span>
      </a>

      <nav className={open ? "nav open" : "nav"}>
        {t.nav.map((item, index) => (
          <a
            key={item}
            href={["#property", "#opportunity", "#vision", "#contact"][index]}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <button className="language" onClick={() => setLang(lang === "en" ? "ar" : "en")}> 
          {lang === "en" ? "عربي" : "EN"}
        </button>
        <button className={open ? "menu active" : "menu"} onClick={() => setOpen(!open)} aria-label="Menu">
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const t = copy[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <main id="top" className={rtl ? "site rtl" : "site"} dir={rtl ? "rtl" : "ltr"}>
      <Header lang={lang} setLang={setLang} open={open} setOpen={setOpen} t={t} />

      <section className="hero">
        <video
          ref={videoRef}
          className={videoReady ? "heroVideo ready" : "heroVideo"}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
        >
          <source src={VIDEO_URL} type="video/quicktime" />
        </video>
        <div className="heroFallback" />
        <div className="heroOverlay" />

        <div className="heroContent">
          <p className="kicker">{t.heroEyebrow}</p>
          <h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="heroText">{t.heroText}</p>
          <a className="outlineButton" href="#contact">{t.heroCta}<span>↗</span></a>
        </div>

        <a className="discover" href="#property"><span>{t.discover}</span><i /></a>
      </section>

      <section className="facts">
        {t.facts.map(([value, label]) => (
          <div className="fact" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="property section" id="property">
        <div className="sectionIndex">01</div>
        <div className="sectionHeading">
          <p className="kicker dark">{t.propertyKicker}</p>
          <h2>{t.propertyTitle}</h2>
        </div>
        <div className="sectionText">
          <p>{t.propertyText}</p>
          <ul>{t.propertyPoints.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <figure className="fullImage actualImage">
        <img src="/property-drone.jpg" alt="Actual aerial view of the Turgut parcel" />
        <figcaption>{t.imageLabel}</figcaption>
      </figure>

      <section className="opportunity" id="opportunity">
        <div className="opportunityIntro">
          <p className="kicker">{t.opportunityKicker}</p>
          <h2>{t.opportunityTitle}</h2>
          <p>{t.opportunityText}</p>
        </div>
        <div className="pillars">
          {t.pillars.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visionIntro section" id="vision">
        <div className="sectionIndex">02</div>
        <div className="sectionHeading">
          <p className="kicker dark">{t.visionKicker}</p>
          <h2>{t.visionTitle}</h2>
        </div>
        <div className="sectionText">
          <p>{t.visionText}</p>
          <p className="note">{t.visionNote}</p>
        </div>
      </section>

      <figure className="fullImage planImage">
        <img src="/master-vision.png" alt="Illustrative master vision" />
      </figure>

      <section className="atmosphereCopy">
        <p className="kicker">{t.atmosphereKicker}</p>
        <h2>{t.atmosphereTitle}</h2>
        <p>{t.atmosphereText}</p>
      </section>

      <figure className="fullImage atmosphereImage">
        <img src="/interior-atmosphere.png" alt="Illustrative interior atmosphere" />
      </figure>

      <section className="offering">
        <div className="verticalLine" />
        <p className="kicker">{t.offerKicker}</p>
        <h2>{t.offerTitle}</h2>
        <p>{t.offerText}</p>
        <a href="#contact">{t.heroCta}<span>↗</span></a>
      </section>

      <section className="contact" id="contact">
        <p className="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>
        <a className="outlineButton" href="https://wa.me/" target="_blank" rel="noreferrer">
          {t.contactButton}<span>↗</span>
        </a>
        <div className="contactMeta"><span>MARMARIS · TÜRKİYE</span><span>PRIVATE PRESENTATION</span></div>
      </section>

      <footer>
        <strong>TURGUT RESERVE</strong>
        <p>{t.legal}</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
