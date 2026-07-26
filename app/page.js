"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/905316238737?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20private%20presentation%20and%20compliance-led%20concept%20options%20for%20Turgut%20Reserve.";

const COPY = {
  en: {
    nav: ["Property", "Shared Plan", "Glamping", "Tiny House", "Contact"],
    eyebrow: "PRIVATE LAND OFFERING · MARMARIS, TÜRKİYE",
    heroTitle: "Turgut Reserve",
    heroStatement:
      "Luxury Glamping in Marmaris Turgut & Tiny House Living for Larger Families",
    heroText:
      "A nature-first vision for a 2,671.63 m² single-title property with three co-owners, direct road access and existing utility connections.",
    cta: "Request Private Presentation",
    priceLabel: "ASKING PRICE",
    price: "₺50,000,000",
    propertyKicker: "ONE PARCEL · ONE TITLE · THREE CO-OWNERS",
    propertyTitle: "A shared landholding, planned as one coherent whole.",
    propertyText:
      "The property is one undivided rural parcel held under a single title by three co-owners. The zones shown here are operational concept areas only: they are not subdivisions, separate plots or independent title rights.",
    facts: [
      ["2,671.63 m²", "Single parcel area"],
      ["3", "Registered co-owners"],
      ["Approx. 300 m", "Coastal proximity"],
      ["Road · Power · Water", "Existing access & utilities"],
    ],
    principlesKicker: "COMPLIANCE-LED DEVELOPMENT",
    principlesTitle: "No concrete footprint. No artificial subdivision.",
    principlesText:
      "The concept avoids conventional reinforced-concrete construction and in-ground concrete pools. Movable units, reversible platforms and low-impact landscape elements are prioritised, with every application remaining subject to co-owner consent and the approvals of the competent authorities.",
    principles: [
      ["01", "Nature-first", "Raised timber platforms, permeable surfaces and reversible landscape interventions."],
      ["02", "Ready to activate", "Direct road, electricity and water access support a faster mobilisation path after required permissions."],
      ["03", "Future-facing", "The upper-scale Ecological Agriculture Tourism planning context is presented as medium- to long-term potential, not a present construction guarantee."],
    ],
    planKicker: "CONCEPTUAL INTERNAL USE PLAN",
    planTitle: "Two functional zones. One undivided title.",
    planText:
      "The forest-side portion is reserved for a shared low-density glamping operation. The road-side portion organises three equal-use family bays for road-legal tiny houses. A single entrance, service spine and landscape system serve the entire parcel.",
    planLabels: {
      glamping: "SHARED COMMERCIAL ZONE",
      glampingSub: "Low-density glamping · biological pond · wellness landscape",
      spine: "SHARED GREEN & UTILITY SPINE",
      bay: "FAMILY USE BAY",
      baySub: "Conceptual use allocation — not a cadastral division",
      road: "EXISTING ASPHALT ROAD · SHARED ENTRANCE",
    },
    planNotice:
      "A, B and C identify internal family-use bays only. They do not create separate ownership, exclusive title, independent units or an official subdivision.",
    conceptsKicker: "TWO COMPLEMENTARY USE VISIONS",
    conceptsTitle: "Commercial potential and family comfort, without concrete urbanisation.",
    conceptsText:
      "The two concepts operate inside one shared-property framework: a common glamping business zone and three internally coordinated family tiny-house bays.",
    models: [
      {
        number: "01",
        title: "Glamping & Eco‑Retreat",
        type: "Shared commercial activity zone",
        text: "Safari tents and domes on timber platforms, open-air wooden hot tubs, a biological nature pond and forest-led guest experiences.",
        link: "#glamping",
        action: "Explore glamping concept",
      },
      {
        number: "02",
        title: "Family Tiny House Living",
        type: "Three internal family-use bays",
        text: "Spacious loft tiny houses on registered road trailers, supported by the existing road, electricity and water infrastructure.",
        link: "#tiny-house",
        action: "Explore family living concept",
      },
    ],
    glampingKicker: "CONCEPT 01 · SHARED COMMERCIAL ZONE",
    glampingTitle: "Light-touch luxury glamping.",
    glampingText:
      "A low-density hospitality concept based on removable guest accommodation and reversible landscape infrastructure—planned as one shared operation rather than separately owned units.",
    glampingChapters: [
      ["01", "Forest master vision", "Safari tents and domes rest on raised timber platforms, preserving ground permeability and the pine-forest character."],
      ["02", "Reversible guest comfort", "Warm interiors, private bathrooms and pedestrian paths create a premium stay without conventional concrete guest blocks."],
      ["03", "Natural wellness landscape", "A biological pond, open-air wooden hot tubs, yoga and gathering spaces replace conventional in-ground concrete pools."],
    ],
    tinyKicker: "CONCEPT 02 · FAMILY LIVING ZONE",
    tinyTitle: "Spacious loft tiny houses for larger families.",
    tinyText:
      "Three coordinated family-use bays are aligned with the existing road. Each bay is conceived for a road-legal, registered trailer tiny house with visible chassis and wheels—without claiming a permanent building or separate title.",
    tinyFacts: [
      ["3", "Internal family-use bays"],
      ["1", "Shared road entrance"],
      ["Loft", "Family sleeping capacity"],
      ["Trailer", "Registered movable format"],
    ],
    tinyChapters: [
      ["01", "Road-ready arrival", "A large timber-clad tiny house sits on its registered trailer chassis beside the existing access road, on a reversible gravel pad."],
      ["02", "Real family comfort", "Double-height living, a full compact kitchen, safe loft access and flexible sleeping areas support everyday family life."],
      ["03", "Outdoor living, lightly placed", "A detachable timber deck and above-ground wooden hot tub extend daily life outdoors without an in-ground concrete pool."],
    ],
    conceptLabel: "ILLUSTRATIVE CONCEPT · NO LEGAL SUBDIVISION IMPLIED",
    activationKicker: "READY-INFRASTRUCTURE ADVANTAGE",
    activationTitle: "A shorter path from decision to use.",
    activationText:
      "Road frontage and existing electricity and water access reduce initial infrastructure work. Mobilisation can begin after a written co-owner operating agreement, parcel-specific professional review and all required public approvals.",
    activationCta: "Request implementation roadmap",
    offeringKicker: "PRIVATE OFFERING",
    offeringTitle: "One title. One shared vision. Two value paths.",
    offeringText:
      "Title, planning context, location information, co-owner structure and concept-development options can be shared with qualified prospective buyers through a private presentation.",
    contactTitle: "Request the private presentation.",
    contactText:
      "For confidential property details, documentation, a viewing appointment or a compliance-led implementation study, contact Elvan Gökmen directly.",
    whatsapp: "WhatsApp",
    email: "Email",
    name: "Elvan Gökmen",
    disclaimer:
      "The property is a single undivided rural parcel with three co-owners. All zones, family bays, unit counts and imagery are illustrative operational concepts and do not constitute subdivision, independent title, a building permit, a tourism licence or guaranteed development rights. Road registration of a trailer does not by itself authorise its placement or use on the parcel. Any use, installation, accommodation activity, landscape work or utility connection is subject to written co-owner consent, parcel-specific professional due diligence and the approvals of all competent authorities. The upper-scale Ecological Agriculture Tourism designation is stated as planning context and future potential only.",
  },
  ar: {
    nav: ["العقار", "المخطط المشترك", "التخييم الفاخر", "المنزل المتنقل", "التواصل"],
    eyebrow: "عرض خاص لأرض · مرمريس، تركيا",
    heroTitle: "Turgut Reserve",
    heroStatement:
      "تخييم فاخر في تورغوت مرمريس وحياة منزل متنقل للعائلات الكبيرة",
    heroText:
      "رؤية تحافظ على الطبيعة لأرض واحدة بمساحة 2,671.63 م²، بصك واحد وثلاثة ملاك، مع طريق مباشر وخدمات قائمة.",
    cta: "اطلب العرض الخاص",
    priceLabel: "السعر المطلوب",
    price: "₺50,000,000",
    propertyKicker: "قطعة واحدة · صك واحد · ثلاثة ملاك",
    propertyTitle: "ملكية مشتركة مخططة كوحدة واحدة متكاملة.",
    propertyText:
      "العقار قطعة ريفية واحدة غير مقسمة يملكها ثلاثة شركاء بصك واحد. المناطق المعروضة هي مناطق استخدام تشغيلية تصورية فقط، وليست إفرازاً أو قطعاً مستقلة أو حقوق ملكية منفصلة.",
    facts: [
      ["2,671.63 م²", "مساحة القطعة الواحدة"],
      ["3", "ملاك مسجلون"],
      ["حوالي 300 م", "القرب من الساحل"],
      ["طريق · كهرباء · ماء", "وصول وخدمات قائمة"],
    ],
    principlesKicker: "تطوير يقوده الامتثال",
    principlesTitle: "بلا بصمة خرسانية وبلا تقسيم مصطنع.",
    principlesText:
      "يتجنب التصور البناء الخرساني التقليدي والمسابح الخرسانية الغاطسة، ويعطي الأولوية للوحدات المتحركة والمنصات القابلة للإزالة والمناظر الطبيعية منخفضة الأثر، مع خضوع كل تطبيق لموافقة الملاك والجهات المختصة.",
    principles: [
      ["01", "الطبيعة أولاً", "منصات خشبية مرتفعة وأسطح نافذة للماء وتدخلات قابلة للإزالة."],
      ["02", "جاهز للتفعيل", "الطريق والكهرباء والماء تدعم بدءاً أسرع بعد الحصول على الموافقات المطلوبة."],
      ["03", "استثمار مستقبلي", "سياق السياحة الزراعية البيئية في المخطط الأعلى فرصة متوسطة وطويلة الأجل وليس ضمان بناء حالي."],
    ],
    planKicker: "مخطط استخدام داخلي تصوري",
    planTitle: "منطقتان وظيفيتان، وصك واحد غير مقسم.",
    planText:
      "يُخصص الجانب القريب من الغابة لنشاط تخييم مشترك منخفض الكثافة، بينما ينظم جانب الطريق ثلاث مناطق استخدام عائلي متساوية لمنازل متنقلة نظامية. ويخدم مدخل واحد ومسار خدمات واحد كامل العقار.",
    planLabels: {
      glamping: "منطقة تجارية مشتركة",
      glampingSub: "تخييم منخفض الكثافة · بركة طبيعية · عافية",
      spine: "محور أخضر وخدمات مشترك",
      bay: "منطقة استخدام عائلي",
      baySub: "توزيع استخدام تصوري — ليس إفرازاً عقارياً",
      road: "طريق أسفلتي قائم · مدخل مشترك",
    },
    planNotice:
      "الحروف A وB وC تحدد مناطق استخدام عائلي داخلية فقط، ولا تنشئ ملكية منفصلة أو صكاً مستقلاً أو وحدة مستقلة أو إفرازاً رسمياً.",
    conceptsKicker: "رؤيتان متكاملتان للاستخدام",
    conceptsTitle: "إمكانات تجارية وراحة عائلية من دون تمدد خرساني.",
    conceptsText:
      "يعمل التصوران ضمن إطار ملكية مشتركة واحدة: منطقة تخييم تجارية مشتركة وثلاث مناطق منسقة للمنازل العائلية المتنقلة.",
    models: [
      {
        number: "01",
        title: "التخييم الفاخر والمنتجع البيئي",
        type: "منطقة نشاط تجاري مشترك",
        text: "خيام سفاري وقباب على منصات خشبية وأحواض ساخنة خشبية وبركة طبيعية وتجارب مرتبطة بالغابة.",
        link: "#glamping",
        action: "استكشف تصور التخييم",
      },
      {
        number: "02",
        title: "حياة المنزل المتنقل للعائلة",
        type: "ثلاث مناطق استخدام عائلي داخلية",
        text: "منازل واسعة بطابق علوي على مقطورات مسجلة، يدعمها الطريق والكهرباء والماء القائمون.",
        link: "#tiny-house",
        action: "استكشف تصور الحياة العائلية",
      },
    ],
    glampingKicker: "التصور 01 · منطقة تجارية مشتركة",
    glampingTitle: "تخييم فاخر خفيف الأثر.",
    glampingText:
      "تصور ضيافة منخفض الكثافة قائم على وحدات قابلة للإزالة وبنية طبيعية قابلة للعكس، كنشاط واحد مشترك وليس وحدات مملوكة بشكل منفصل.",
    glampingChapters: [
      ["01", "رؤية الغابة", "خيام سفاري وقباب على منصات خشبية مرتفعة تحافظ على نفاذية الأرض وطابع غابة الصنوبر."],
      ["02", "راحة ضيوف قابلة للإزالة", "تصميمات داخلية دافئة وحمامات خاصة ومسارات مشاة تقدم إقامة راقية من دون مباني ضيافة خرسانية تقليدية."],
      ["03", "عافية طبيعية", "بركة بيولوجية وأحواض ساخنة خشبية في الهواء الطلق ومساحات يوغا وتجمع بدلاً من المسابح الخرسانية الغاطسة."],
    ],
    tinyKicker: "التصور 02 · منطقة الحياة العائلية",
    tinyTitle: "منازل متنقلة واسعة بطابق علوي للعائلات الكبيرة.",
    tinyText:
      "ثلاث مناطق استخدام عائلي منسقة بمحاذاة الطريق القائم. كل منطقة مخصصة تصوّرياً لمنزل على مقطورة مسجلة بعجلات وشاسيه ظاهر، من دون ادعاء مبنى دائم أو صك منفصل.",
    tinyFacts: [
      ["3", "مناطق استخدام عائلي"],
      ["1", "مدخل طريق مشترك"],
      ["طابق علوي", "سعة نوم عائلية"],
      ["مقطورة", "صيغة متحركة مسجلة"],
    ],
    tinyChapters: [
      ["01", "وصول مباشر من الطريق", "منزل خشبي عائلي على شاسيه مقطورته المسجلة بجانب طريق الوصول وعلى قاعدة حصوية قابلة للإزالة."],
      ["02", "راحة عائلية حقيقية", "معيشة مزدوجة الارتفاع ومطبخ متكامل وسلم آمن ومساحات نوم مرنة للحياة اليومية."],
      ["03", "حياة خارجية خفيفة الأثر", "سطح خشبي منفصل وحوض ساخن خشبي فوق الأرض يوسّعان الحياة الخارجية بلا مسبح خرساني غاطس."],
    ],
    conceptLabel: "تصور توضيحي · لا يعني إفرازاً قانونياً",
    activationKicker: "ميزة البنية التحتية الجاهزة",
    activationTitle: "مسار أقصر من القرار إلى الاستخدام.",
    activationText:
      "واجهة الطريق ووصول الكهرباء والماء يقللان أعمال البنية الأولية. يبدأ التنفيذ بعد اتفاق مكتوب بين الملاك ودراسة مهنية خاصة بالقطعة وكل الموافقات العامة المطلوبة.",
    activationCta: "اطلب خارطة طريق التنفيذ",
    offeringKicker: "عرض خاص",
    offeringTitle: "صك واحد، رؤية مشتركة، ومساران للقيمة.",
    offeringText:
      "يمكن مشاركة الصك والسياق التخطيطي والموقع وهيكل الملكية وخيارات تطوير التصور مع المشترين المؤهلين ضمن عرض خاص.",
    contactTitle: "اطلب الملف الخاص بالعقار.",
    contactText:
      "للحصول على تفاصيل العقار والوثائق أو ترتيب زيارة أو دراسة تنفيذ قائمة على الامتثال، تواصل مباشرة مع إلفان غوكمن.",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    name: "إلفان غوكمن",
    disclaimer:
      "العقار قطعة ريفية واحدة غير مقسمة بثلاثة ملاك. جميع المناطق وأماكن الاستخدام العائلي وأعداد الوحدات والصور تصورات تشغيلية توضيحية ولا تمثل إفرازاً أو صكاً مستقلاً أو رخصة بناء أو رخصة سياحية أو حقوق تطوير مضمونة. تسجيل المقطورة للطريق لا يمنح بمفرده حق وضعها أو استخدامها على الأرض. يخضع أي استخدام أو تركيب أو نشاط ضيافة أو عمل طبيعي أو توصيل خدمات لموافقة الملاك المكتوبة والدراسة المهنية الخاصة بالقطعة وموافقات جميع الجهات المختصة. ويُذكر تصنيف السياحة الزراعية البيئية في المخطط الأعلى كسياق تخطيطي وفرصة مستقبلية فقط.",
  },
};

const GLAMPING_GALLERIES = [
  ["/concept/glamping-biological-pond.webp"],
  [
    "/concept/06_glamping_suit_ic_mekan.webp",
    "/concept/07_glamping_suit_banyo.webp",
    "/concept/09_doga_ve_yuruyus_yolu.webp",
  ],
  [
    "/concept/glamping-wooden-hot-tub.webp",
    "/concept/10_yoga_ve_wellness_alani.webp",
    "/concept/04_ates_cukuru_ve_dinlenme_alani.webp",
  ],
];

const TINY_GALLERIES = [
  ["/tiny/tiny-house-family-exterior.webp"],
  ["/tiny/tiny-house-family-interior.webp"],
  ["/tiny/tiny-house-evening-hot-tub.webp"],
];

function Brand() {
  return (
    <span className="brand">
      <span>TR</span>
      <span><b>TURGUT RESERVE</b><small>PRIVATE LAND OFFERING</small></span>
    </span>
  );
}

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

  const hrefs = ["#property", "#shared-plan", "#glamping", "#tiny-house", "#contact"];

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="nav">
        <a href="#top"><Brand /></a>
        <nav>
          {t.nav.map((item, index) => <a key={item} href={hrefs[index]}>{item}</a>)}
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
          <h2>{t.heroStatement}</h2>
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

      <section className="principles">
        <div className="principlesIntro">
          <p className="kicker">{t.principlesKicker}</p>
          <h2>{t.principlesTitle}</h2>
          <p>{t.principlesText}</p>
        </div>
        <div className="principleGrid">
          {t.principles.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="sharedPlan" id="shared-plan">
        <div className="planIntro">
          <div><p className="kicker">{t.planKicker}</p><h2>{t.planTitle}</h2></div>
          <p>{t.planText}</p>
        </div>
        <div className="parcelPlan" role="img" aria-label={t.planTitle}>
          <div className="forestEdge">PINE FOREST EDGE</div>
          <div className="glampingZone">
            <b>{t.planLabels.glamping}</b><span>{t.planLabels.glampingSub}</span>
          </div>
          <div className="utilitySpine">{t.planLabels.spine}</div>
          <div className="familyBays">
            {["A", "B", "C"].map((letter) => (
              <div key={letter}><em>{letter}</em><b>{t.planLabels.bay}</b><span>{t.planLabels.baySub}</span></div>
            ))}
          </div>
          <div className="roadBand">{t.planLabels.road}</div>
        </div>
        <p className="planNotice">{t.planNotice}</p>
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
                src={index === 0 ? "/concept/glamping-biological-pond.webp" : "/tiny/tiny-house-family-exterior.webp"}
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
        sectionClass="tinyVision"
        id="tiny-house"
        kicker={t.tinyKicker}
        title={t.tinyTitle}
        text={t.tinyText}
        chapters={t.tinyChapters}
        galleries={TINY_GALLERIES}
        label={t.conceptLabel}
        extra={
          <div className="tinyFacts">
            {t.tinyFacts.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        }
      />

      <section className="activation">
        <div><p className="kicker">{t.activationKicker}</p><h2>{t.activationTitle}</h2></div>
        <div><p>{t.activationText}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">{t.activationCta} ↗</a></div>
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
        <Brand />
        <p>{t.disclaimer}</p>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
