"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/905316238737?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20private%20presentation%20and%20development%20options%20for%20Turgut%20Reserve.";

const COPY = {
  en: {
    nav: ["Property", "Concepts", "Glamping", "Villas", "Contact"],
    eyebrow: "PRIVATE LAND OFFERING · MARMARIS, TÜRKİYE",
    heroTitle: "Turgut Reserve",
    heroText:
      "A privately presented 2,761 m² landholding in Turgut, Marmaris, explored through two distinct premium development visions.",
    cta: "Request Private Presentation",
    priceLabel: "ASKING PRICE",
    price: "₺50,000,000",
    propertyKicker: "THE PROPERTY",
    propertyTitle: "A private landholding between forest and coast.",
    propertyText:
      "The offering concerns the land itself. The two design studies below demonstrate alternative hospitality and residential directions; neither represents an approved or completed development.",
    facts: [
      ["2,761 m²", "Parcel area"],
      ["Approx. 300 m", "Coastal proximity"],
      ["Asphalt road", "Direct access"],
      ["Marmaris", "Turgut, Türkiye"],
    ],
    conceptsKicker: "TWO DISTINCT DEVELOPMENT VISIONS",
    conceptsTitle: "One exceptional setting. Two ways to shape its future.",
    conceptsText:
      "Explore a boutique glamping retreat and a private three-villa forest compound—each created around the site's curved road frontage and natural character.",
    models: [
      {
        number: "01",
        title: "Glamping & Eco‑Retreat",
        type: "Boutique hospitality vision",
        text: "Private suites, wellness, shared amenities and nature-led guest experiences.",
        link: "#glamping",
        action: "Explore hospitality concept",
      },
      {
        number: "02",
        title: "Three Private Forest Villas",
        type: "Residential nature-living vision",
        text: "Three secluded family villas with forest-facing pools, terraces and three-bedroom interiors.",
        link: "#villas",
        action: "Explore villa concept",
      },
    ],
    glampingKicker: "CONCEPT 01 · BOUTIQUE HOSPITALITY",
    glampingTitle: "Glamping & Eco‑Retreat.",
    glampingText:
      "A complete presentation study exploring arrival, private suites, shared wellness and landscape experiences within a coherent premium hospitality language.",
    glampingChapters: [
      ["01", "Master vision", "An illustrative arrangement following the curved road frontage and the forest character of the setting."],
      ["02", "Arrival & wellness", "Reception, lounge, shared pool and wellness spaces envisioned as a refined guest arrival experience."],
      ["03", "Private suites", "Day and evening suite studies with private pools, verandas and warm contemporary interiors."],
      ["04", "Nature experience", "Pedestrian paths, yoga and gathering areas designed around the surrounding pine landscape."],
    ],
    villaKicker: "CONCEPT 02 · PRIVATE RESIDENTIAL",
    villaTitle: "Three Private Forest Villas.",
    villaText:
      "A contemporary residential direction with controlled road-side arrival and private forest-side living. Each villa is envisioned with an approximately 60 m² ground footprint and up to three levels.",
    villaFacts: [
      ["3", "Detached villas"],
      ["≈60 m²", "Ground footprint / villa"],
      ["Up to 3", "Levels"],
      ["3 bedrooms", "Family programme / villa"],
    ],
    villaChapters: [
      ["01", "Masterplan & setting", "Three villas follow the land's long, curved and tapering form, with arrival from the road and private living toward the forest."],
      ["02", "Architecture & arrival", "Organic Mediterranean architecture pairs natural stone, warm timber and discreet privacy screens with controlled private entrances."],
      ["03", "Forest-side living", "Pools, shaded terraces, roof gardens and low Mediterranean landscaping create secluded outdoor family spaces."],
      ["04", "Three-bedroom interiors", "A principal suite, children's room and roof-floor guest suite complete a coherent multi-generational family programme."],
    ],
    conceptLabel: "ILLUSTRATIVE CONCEPT · PRESENTATION PURPOSES ONLY",
    villaProposalTitle: "From concept to project delivery.",
    villaProposalText:
      "A tailored proposal can be prepared for architectural development, official project coordination and turnkey construction.",
    villaProposalCta: "Request development proposal",
    offeringKicker: "PRIVATE OFFERING",
    offeringTitle: "Acquire the land. Choose the vision.",
    offeringText:
      "Further title, location, technical information and project-development options can be shared with qualified prospective buyers through a private presentation process.",
    contactTitle: "Request the private presentation.",
    contactText:
      "For confidential land details, documentation, a viewing appointment or a development proposal, contact Elvan Gökmen directly.",
    whatsapp: "WhatsApp",
    email: "Email",
    name: "Elvan Gökmen",
    disclaimer:
      "All imagery represents illustrative concept design. Development potential, area assumptions, use, planning, licensing, design and implementation remain subject to professional due diligence, measured surveys and applicable official approvals.",
  },
  ar: {
    nav: ["العقار", "التصورات", "التخييم الفاخر", "الفلل", "التواصل"],
    eyebrow: "عرض خاص لأرض · مرمريس، تركيا",
    heroTitle: "Turgut Reserve",
    heroText:
      "أرض خاصة بمساحة 2,761 م² في تورغوت، مرمريس، مع رؤيتين مختلفتين للتطوير الراقي.",
    cta: "اطلب العرض الخاص",
    priceLabel: "السعر المطلوب",
    price: "₺50,000,000",
    propertyKicker: "العقار",
    propertyTitle: "أرض خاصة بين الغابة والساحل.",
    propertyText:
      "موضوع العرض هو الأرض نفسها. وتوضح الدراستان أدناه اتجاهين بديلين للضيافة والسكن، ولا تمثلان مشروعاً معتمداً أو منفذاً.",
    facts: [
      ["2,761 م²", "مساحة الأرض"],
      ["حوالي 300 م", "القرب من الساحل"],
      ["طريق معبد", "وصول مباشر"],
      ["مرمريس", "تورغوت، تركيا"],
    ],
    conceptsKicker: "رؤيتان مختلفتان للتطوير",
    conceptsTitle: "موقع استثنائي واحد، ورؤيتان لمستقبله.",
    conceptsText:
      "اكتشف منتجع تخييم بوتيكياً ومجمعاً خاصاً من ثلاث فلل، صُمم كل منهما وفق انحناءة الطريق والطابع الطبيعي للموقع.",
    models: [
      {
        number: "01",
        title: "التخييم الفاخر والمنتجع البيئي",
        type: "رؤية ضيافة بوتيكية",
        text: "أجنحة خاصة وعافية ومرافق مشتركة وتجارب ضيافة مرتبطة بالطبيعة.",
        link: "#glamping",
        action: "استكشف تصور الضيافة",
      },
      {
        number: "02",
        title: "ثلاث فلل خاصة وسط الغابة",
        type: "رؤية سكنية مرتبطة بالطبيعة",
        text: "ثلاث فلل عائلية خاصة مع مسابح وتراسات باتجاه الغابة وتصميم داخلي من ثلاث غرف نوم.",
        link: "#villas",
        action: "استكشف تصور الفلل",
      },
    ],
    glampingKicker: "التصور 01 · ضيافة بوتيكية",
    glampingTitle: "التخييم الفاخر والمنتجع البيئي.",
    glampingText:
      "دراسة عرض متكاملة تشمل الاستقبال والأجنحة الخاصة ومرافق العافية المشتركة وتجارب الطبيعة ضمن هوية ضيافة راقية.",
    glampingChapters: [
      ["01", "الرؤية العامة", "توزيع توضيحي يتبع انحناءة الطريق ويحترم الطابع الطبيعي للغابة."],
      ["02", "الاستقبال والعافية", "تصور راقٍ لمنطقة الاستقبال والصالة والمسبح المشترك ومرافق العافية."],
      ["03", "الأجنحة الخاصة", "تصورات نهارية ومسائية للأجنحة مع مسابح خاصة وشرفات وتصاميم داخلية دافئة."],
      ["04", "تجربة الطبيعة", "مسارات للمشي ومنصات لليوغا ومناطق تجمع منسجمة مع غابة الصنوبر."],
    ],
    villaKicker: "التصور 02 · سكن خاص",
    villaTitle: "ثلاث فلل خاصة وسط الغابة.",
    villaText:
      "رؤية سكنية معاصرة تجمع بين وصول منظم من جهة الطريق وحياة خاصة باتجاه الغابة. صُممت كل فيلا بمساحة بناء أرضية تقارب 60 م² وحتى ثلاثة طوابق.",
    villaFacts: [
      ["3", "فلل مستقلة"],
      ["≈60 م²", "مساحة الطابق الأرضي لكل فيلا"],
      ["حتى 3", "طوابق"],
      ["3 غرف نوم", "برنامج عائلي لكل فيلا"],
    ],
    villaChapters: [
      ["01", "المخطط والموقع", "تتبع الفلل الثلاث الشكل الطويل والمنحني والمتدرج للأرض، مع الوصول من الطريق والحياة الخاصة باتجاه الغابة."],
      ["02", "العمارة والوصول", "عمارة متوسطية عضوية تجمع الحجر الطبيعي والخشب الدافئ وشاشات الخصوصية مع مداخل خاصة."],
      ["03", "الحياة باتجاه الغابة", "مسابح وتراسات مظللة وحدائق أسطح ومناظر متوسطية منخفضة توفر مساحات عائلية خاصة."],
      ["04", "تصميم داخلي بثلاث غرف", "جناح رئيسي وغرفة أطفال وجناح ضيوف في الطابق العلوي ضمن برنامج عائلي متكامل."],
    ],
    conceptLabel: "تصور توضيحي · لأغراض العرض فقط",
    villaProposalTitle: "من الفكرة إلى تنفيذ المشروع.",
    villaProposalText:
      "يمكن إعداد عرض خاص للتطوير المعماري وتنسيق المشاريع الرسمية والتنفيذ المتكامل.",
    villaProposalCta: "اطلب عرض تطوير المشروع",
    offeringKicker: "عرض خاص",
    offeringTitle: "امتلك الأرض واختر الرؤية.",
    offeringText:
      "يمكن مشاركة وثائق الملكية والموقع والمعلومات الفنية وخيارات تطوير المشروع مع المشترين الجادين ضمن عرض خاص.",
    contactTitle: "اطلب الملف الخاص بالعقار.",
    contactText:
      "للحصول على تفاصيل الأرض والوثائق أو ترتيب زيارة أو طلب عرض تطوير، تواصل مباشرة مع إلفان غوكمن.",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    name: "إلفان غوكمن",
    disclaimer:
      "جميع الصور تصورات توضيحية. تخضع إمكانات التطوير وافتراضات المساحات والاستخدام والتخطيط والتراخيص والتصميم والتنفيذ للدراسة المهنية والقياسات والموافقات الرسمية المعمول بها.",
  },
};

const GLAMPING_GALLERIES = [
  ["/concept/01_gunduz_genel_proje_gorunumu.webp", "/concept/01_genel_proje_yerlesimi.webp"],
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

const VILLA_GALLERIES = [
  [
    "/villas/01_masterplan_landscape.webp",
    "/villas/02_aerial_day.webp",
    "/villas/03_aerial_blue_hour.webp",
  ],
  [
    "/villas/04_road_arrival.webp",
    "/villas/05_forest_pool_facade_day.webp",
    "/villas/06_forest_pool_facade_evening.webp",
  ],
  [
    "/villas/07_private_pool_terrace.webp",
    "/villas/14_roof_terrace.webp",
    "/villas/15_landscape_privacy_detail.webp",
  ],
  [
    "/villas/08_living_room.webp",
    "/villas/09_kitchen_dining.webp",
    "/villas/10_master_bedroom.webp",
    "/villas/11_child_bedroom.webp",
    "/villas/12_roof_floor_guest_suite.webp",
    "/villas/13_master_bathroom.webp",
  ],
];

function GallerySection({ sectionClass, id, kicker, title, text, chapters, galleries, label, extra }) {
  return (
    <section className={`vision ${sectionClass}`} id={id}>
      <div className="visionIntro">
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {extra}
      {galleries.map((images, chapterIndex) => {
        const [number, chapterTitle, chapterText] = chapters[chapterIndex];
        return (
          <div className="chapter" key={number}>
            <div className="chapterHead">
              <div><span>{number}</span><h3>{chapterTitle}</h3></div>
              <p>{chapterText}</p>
            </div>
            <div className={`gallery gallery${chapterIndex + 1}`}>
              {images.map((src, imageIndex) => (
                <figure className={imageIndex === 0 ? "featured" : ""} key={src}>
                  <img src={src} alt={`${chapterTitle} — ${label}`} loading="lazy" decoding="async" />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

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
            <a key={item} href={["#property", "#concepts", "#glamping", "#villas", "#contact"][index]}>{item}</a>
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

      <section className="concepts" id="concepts">
        <div className="conceptsIntro">
          <p className="kicker">{t.conceptsKicker}</p>
          <h2>{t.conceptsTitle}</h2>
          <p>{t.conceptsText}</p>
        </div>
        <div className="modelGrid">
          {t.models.map((model, index) => (
            <a className="modelCard" href={model.link} key={model.number}>
              <img
                src={index === 0 ? "/concept/01_gunduz_genel_proje_gorunumu.webp" : "/villas/02_aerial_day.webp"}
                alt={model.title}
              />
              <div className="modelShade" />
              <div className="modelContent">
                <div><span>{model.number}</span><small>{model.type}</small></div>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                <b>{model.action} ↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <GallerySection
        sectionClass="glampingVision"
        id="glamping"
        kicker={t.glampingKicker}
        title={t.glampingTitle}
        text={t.glampingText}
        chapters={t.glampingChapters}
        galleries={GLAMPING_GALLERIES}
        label={t.conceptLabel}
      />

      <GallerySection
        sectionClass="villaVision"
        id="villas"
        kicker={t.villaKicker}
        title={t.villaTitle}
        text={t.villaText}
        chapters={t.villaChapters}
        galleries={VILLA_GALLERIES}
        label={t.conceptLabel}
        extra={
          <div className="villaFacts">
            {t.villaFacts.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        }
      />

      <section className="proposal">
        <div><p className="kicker">{t.villaKicker}</p><h2>{t.villaProposalTitle}</h2></div>
        <div><p>{t.villaProposalText}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">{t.villaProposalCta} ↗</a></div>
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
