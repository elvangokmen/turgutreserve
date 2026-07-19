"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_URL =
  "https://1wyaxdj8oaerosqy.public.blob.vercel-storage.com/MARMARIS%20TURGUT%20KO%CC%88YU%CC%88%20177%20ADA%201%20PARSEL%20.mov";

const content = {
  en: {
    nav: ["Overview", "Opportunity", "Location", "Enquire"],
    eyebrow: "PRIVATE INVESTMENT OPPORTUNITY · MARMARIS",
    title: "TURGUT\nRESERVE",
    subtitle: "A private nature-led hospitality opportunity on the Marmaris peninsula.",
    cta: "REQUEST PRIVATE DETAILS",
    scroll: "DISCOVER",
    facts: [
      ["2,761 m²", "Landholding"],
      ["₺50,000,000", "Asking price"],
      ["Approx. 300 m", "To the coast"],
      ["177 / 1", "Block / Parcel"],
    ],
    overviewKicker: "THE OPPORTUNITY",
    overviewTitle: "A rare setting. A considered vision.",
    overviewBody:
      "Turgut Reserve is a privately presented landholding in Turgut Village, Marmaris. Positioned between forest, coast and established destinations, it offers a distinctive foundation for a refined, low-density hospitality concept, subject to all required official approvals.",
    overviewQuote: "Not simply land. A future destination shaped by nature.",
    pillars: [
      ["01", "Private Setting", "A discreet natural environment designed for privacy, calm and a strong sense of place."],
      ["02", "Strategic Position", "Access to the wider Marmaris, Bozburun and Selimiye destination network."],
      ["03", "Hospitality Potential", "A conceptual foundation for boutique accommodation, wellness and nature-led experiences."],
    ],
    offeringKicker: "PRIVATE OFFERING",
    offeringTitle: "₺50,000,000",
    offeringBody:
      "Details, title information and supporting project material are shared confidentially with qualified buyers.",
    locationKicker: "MARMARIS · TURGUT",
    locationTitle: "Where forest, coast and quiet luxury meet.",
    locationBody:
      "Turgut sits within one of the most distinctive coastal landscapes of the Marmaris peninsula, offering proximity to established marinas, secluded bays and internationally recognised destinations.",
    locationItems: ["Marmaris Peninsula", "Turgut Village", "Bozburun Region", "Southwest Türkiye"],
    contactKicker: "PRIVATE ENQUIRIES",
    contactTitle: "Request the confidential investment file.",
    contactBody:
      "For title documents, location details, conceptual material and direct owner communication, submit a private enquiry.",
    contactButton: "CONTACT VIA WHATSAPP",
    legal:
      "Conceptual statements are for presentation purposes only. Any development is subject to zoning, planning, technical and governmental approvals. Prospective buyers should conduct independent legal and technical due diligence.",
  },
  ar: {
    nav: ["نظرة عامة", "الفرصة", "الموقع", "التواصل"],
    eyebrow: "فرصة استثمارية خاصة · مرمريس",
    title: "TURGUT\nRESERVE",
    subtitle: "فرصة ضيافة خاصة مستوحاة من الطبيعة في شبه جزيرة مرمريس.",
    cta: "طلب الملف الخاص",
    scroll: "اكتشف",
    facts: [
      ["2,761 م²", "مساحة الأرض"],
      ["₺50,000,000", "السعر المطلوب"],
      ["حوالي 300 م", "إلى الساحل"],
      ["177 / 1", "البلوك / القطعة"],
    ],
    overviewKicker: "الفرصة",
    overviewTitle: "موقع نادر. رؤية مدروسة.",
    overviewBody:
      "Turgut Reserve أرض معروضة بشكل خاص في قرية تورغوت، مرمريس. تقع بين الغابة والساحل والوجهات المعروفة، وتوفر أساساً مميزاً لمفهوم ضيافة راقٍ منخفض الكثافة، مع خضوع أي تطوير للموافقات الرسمية المطلوبة.",
    overviewQuote: "ليست مجرد أرض، بل وجهة مستقبلية تصوغها الطبيعة.",
    pillars: [
      ["01", "خصوصية استثنائية", "بيئة طبيعية هادئة تمنح الخصوصية والسكينة وإحساساً قوياً بالمكان."],
      ["02", "موقع استراتيجي", "وصول إلى شبكة وجهات مرمريس وبوزبورون وسليمية."],
      ["03", "إمكانات ضيافة", "أساس تصوري لإقامة بوتيكية وتجارب عافية وطبيعة."],
    ],
    offeringKicker: "عرض خاص",
    offeringTitle: "₺50,000,000",
    offeringBody:
      "تتم مشاركة تفاصيل الملكية والمستندات والمواد الداعمة بسرية مع المشترين المؤهلين.",
    locationKicker: "مرمريس · تورغوت",
    locationTitle: "حيث تلتقي الغابة والساحل والفخامة الهادئة.",
    locationBody:
      "تقع تورغوت ضمن أحد أكثر المشاهد الساحلية تميزاً في شبه جزيرة مرمريس، بالقرب من المراسي والخلجان الهادئة والوجهات المعروفة دولياً.",
    locationItems: ["شبه جزيرة مرمريس", "قرية تورغوت", "منطقة بوزبورون", "جنوب غرب تركيا"],
    contactKicker: "استفسارات خاصة",
    contactTitle: "اطلب ملف الاستثمار السري.",
    contactBody:
      "للحصول على مستندات الملكية وتفاصيل الموقع والمواد التصورية والتواصل المباشر مع المالك، أرسل استفساراً خاصاً.",
    contactButton: "التواصل عبر واتساب",
    legal:
      "جميع التصورات لأغراض العرض فقط. يخضع أي تطوير لموافقات التخطيط والتنظيم والجهات الحكومية. يجب على المشتري إجراء الفحص القانوني والفني المستقل.",
  },
};

function Header({ lang, setLang, menuOpen, setMenuOpen, t }) {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Turgut Reserve home">
        <span className="brandMark">TR</span>
        <span className="brandText">
          <strong>TURGUT RESERVE</strong>
          <small>PRIVATE INVESTMENT</small>
        </span>
      </a>

      <nav className={menuOpen ? "nav navOpen" : "nav"}>
        {t.nav.map((item, index) => (
          <a
            key={item}
            href={["#overview", "#opportunity", "#location", "#contact"][index]}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <button className="language" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
          {lang === "en" ? "عربي" : "EN"}
        </button>
        <button
          className={menuOpen ? "menuButton active" : "menuButton"}
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const t = content[lang];
  const rtl = lang === "ar";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attemptPlay = () => video.play().catch(() => {});
    attemptPlay();
    document.addEventListener("visibilitychange", attemptPlay);
    return () => document.removeEventListener("visibilitychange", attemptPlay);
  }, []);

  return (
    <main id="top" dir={rtl ? "rtl" : "ltr"} className={rtl ? "site rtl" : "site"}>
      <Header
        lang={lang}
        setLang={setLang}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />

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
        <div className="videoFallback" aria-hidden="true" />
        <div className="heroOverlay" />
        <div className="heroGrain" />

        <div className="heroContent">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="heroSubtitle">{t.subtitle}</p>
          <a className="primaryButton" href="#contact">
            {t.cta}<span>↗</span>
          </a>
        </div>

        <a className="scrollCue" href="#overview">
          <span>{t.scroll}</span><i />
        </a>
      </section>

      <section className="facts" aria-label="Investment highlights">
        {t.facts.map(([value, label]) => (
          <div className="fact" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="overview section" id="overview">
        <div className="sectionNumber">01</div>
        <div className="sectionIntro">
          <p className="kicker">{t.overviewKicker}</p>
          <h2>{t.overviewTitle}</h2>
        </div>
        <div className="overviewBody">
          <p>{t.overviewBody}</p>
          <blockquote>{t.overviewQuote}</blockquote>
        </div>
      </section>

      <section className="pillars" id="opportunity">
        {t.pillars.map(([number, title, body]) => (
          <article className="pillar" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="offering">
        <div className="offeringLine" />
        <p className="kicker">{t.offeringKicker}</p>
        <h2>{t.offeringTitle}</h2>
        <p>{t.offeringBody}</p>
        <a href="#contact">{t.cta}<span>↗</span></a>
      </section>

      <section className="location section" id="location">
        <div className="sectionNumber">02</div>
        <div className="locationCopy">
          <p className="kicker">{t.locationKicker}</p>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationBody}</p>
        </div>
        <div className="locationList">
          {t.locationItems.map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactTopline" />
        <p className="kicker">{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p className="contactText">{t.contactBody}</p>
        <a
          className="contactButton"
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
        >
          {t.contactButton}<span>↗</span>
        </a>
        <div className="contactMeta">
          <span>MARMARIS · TÜRKİYE</span>
          <span>PRIVATE & CONFIDENTIAL</span>
        </div>
      </section>

      <footer>
        <div className="footerBrand">TURGUT RESERVE</div>
        <p>{t.legal}</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
