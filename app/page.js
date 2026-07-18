"use client";

import { useState } from "react";

const content = {
  en: {
    menu: ["Overview", "Property", "Vision", "Location", "Contact"],
    heroEyebrow: "TURGUT · MARMARIS · TÜRKİYE",
    heroTitleA: "A rare piece",
    heroTitleB: "of Marmaris.",
    heroText:
      "A private land opportunity surrounded by pine forest, with direct road access and close proximity to the coast.",
    request: "Request Private Presentation",
    scroll: "DISCOVER",
    stats: [
      ["2,671.63 m²", "Registered land area"],
      ["177 / 1", "Ada / parcel"],
      ["₺50,000,000", "Asking price"],
      ["Approx. 300 m", "Coastal proximity"]
    ],
    overviewTag: "THE OPPORTUNITY",
    overviewTitle: "Land, location and long-term optionality.",
    overviewText:
      "Turgut Reserve is a privately presented landholding in Turgut Village, Marmaris. Offered at ₺50,000,000, the property combines a distinctive forest-edge setting, asphalt road access and a carefully developed boutique hospitality vision.",
    feature1: "Asphalt road frontage",
    feature2: "Electricity and water nearby",
    feature3: "Forest-edge setting",
    feature4: "Boutique tourism potential",
    propertyTag: "THE PROPERTY",
    propertyTitle: "A singular parcel framed by nature.",
    propertyText:
      "The cadastral parcel measures 2,671.63 m². Official planning information currently identifies the wider area within the Datça–Bozburun Special Environmental Protection framework. Any future development remains subject to official approvals and independent legal and technical review.",
    facts: [
      ["Location", "Turgut Village, Marmaris"],
      ["Land", "2,671.63 m²"],
      ["Parcel", "177 / 1"],
      ["Title status", "Registered parcel"],
      ["Access", "Asphalt road"],
      ["Asking price", "₺50,000,000"],
      ["Planning", "Subject to official approvals"]
    ],
    visionTag: "ILLUSTRATIVE VISION",
    visionTitle: "One possible expression of the site.",
    visionText:
      "The following images are conceptual studies prepared solely to communicate one possible boutique eco-retreat and wellness scenario. They are not an approved project, construction commitment or guaranteed development right.",
    locationTag: "LOCATION",
    locationTitle: "Turgut, on the quieter side of Marmaris.",
    locationText:
      "A landscape of forested hills, small bays and low-density tourism destinations on Türkiye’s southwest coast.",
    contactTag: "PRIVATE ENQUIRY",
    contactTitle: "Request the confidential investment presentation.",
    contactText:
      "Qualified enquiries receive the property summary, location information and available supporting documents directly.",
    name: "Full name",
    email: "Email",
    phone: "Phone / WhatsApp",
    country: "Country",
    message: "Message",
    submit: "Send enquiry",
    whatsapp: "Contact on WhatsApp",
    legal:
      "This website is for introductory marketing purposes only and does not constitute a binding offer, planning confirmation or investment advice. All dimensions, planning matters, distances and development scenarios must be independently verified."
  },
  ar: {
    menu: ["نظرة عامة", "العقار", "الرؤية", "الموقع", "التواصل"],
    heroEyebrow: "تورغوت · مرمريس · تركيا",
    heroTitleA: "قطعة نادرة",
    heroTitleB: "من مرمريس.",
    heroText:
      "فرصة خاصة لامتلاك أرض تحيط بها غابات الصنوبر، مع وصول مباشر من الطريق وقرب من الساحل.",
    request: "اطلب العرض الخاص",
    scroll: "اكتشف",
    stats: [
      ["2,671.63 م²", "مساحة الأرض المسجلة"],
      ["177 / 1", "رقم القطعة"],
      ["₺50,000,000", "السعر المطلوب"],
      ["حوالي 300 م", "القرب من الساحل"]
    ],
    overviewTag: "الفرصة",
    overviewTitle: "الأرض والموقع والمرونة طويلة الأجل.",
    overviewText:
      "Turgut Reserve أرض معروضة بشكل خاص في قرية تورغوت، مرمريس، بسعر مطلوب قدره ₺50,000,000. تجمع بين موقع طبيعي بمحاذاة الغابة وطريق معبد ورؤية ضيافة بوتيكية مدروسة.",
    feature1: "واجهة على طريق معبد",
    feature2: "الكهرباء والمياه بالقرب من الموقع",
    feature3: "موقع بمحاذاة الغابة",
    feature4: "إمكانات سياحية بوتيكية",
    propertyTag: "العقار",
    propertyTitle: "قطعة واحدة تحتضنها الطبيعة.",
    propertyText:
      "تبلغ المساحة المسجلة 2,671.63 م². وتشير المعلومات الرسمية الحالية إلى وجود الموقع ضمن إطار الحماية البيئية الخاص بمنطقة داتشا–بوزبورون. أي تطوير مستقبلي يخضع للموافقات الرسمية والفحص القانوني والفني المستقل.",
    facts: [
      ["الموقع", "قرية تورغوت، مرمريس"],
      ["المساحة", "2,671.63 م²"],
      ["القطعة", "177 / 1"],
      ["الوضع", "قطعة مسجلة"],
      ["الوصول", "طريق معبد"],
      ["السعر المطلوب", "₺50,000,000"],
      ["التخطيط", "يخضع للموافقات الرسمية"]
    ],
    visionTag: "رؤية توضيحية",
    visionTitle: "تصور واحد ممكن للموقع.",
    visionText:
      "الصور التالية دراسات تصورية أُعدت فقط لعرض سيناريو ممكن لمنتجع بيئي بوتيكي. وهي لا تمثل مشروعاً معتمداً أو التزاماً بالبناء أو حق تطوير مضمون.",
    locationTag: "الموقع",
    locationTitle: "تورغوت، الجانب الأكثر هدوءاً من مرمريس.",
    locationText:
      "منطقة تتشكل من التلال الخضراء والخلجان الصغيرة والوجهات السياحية منخفضة الكثافة على الساحل الجنوبي الغربي لتركيا.",
    contactTag: "استفسار خاص",
    contactTitle: "اطلب العرض الاستثماري السري.",
    contactText:
      "يتلقى أصحاب الاستفسارات الجادة ملخص العقار ومعلومات الموقع والمستندات المتاحة بشكل مباشر.",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "الهاتف / واتساب",
    country: "الدولة",
    message: "الرسالة",
    submit: "إرسال الاستفسار",
    whatsapp: "التواصل عبر واتساب",
    legal:
      "هذا الموقع لأغراض التسويق التمهيدي فقط ولا يشكل عرضاً ملزماً أو تأكيداً للتخطيط أو نصيحة استثمارية. يجب التحقق بشكل مستقل من جميع المساحات والمسافات وأمور التخطيط وسيناريوهات التطوير."
  }
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = content[lang];
  const rtl = lang === "ar";

  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Turgut Reserve Private Enquiry");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Country: ${data.get("country")}

Message:
${data.get("message")}`
    );
    window.location.href = `mailto:elvangokmenn@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main dir={rtl ? "rtl" : "ltr"}>
      <header className="header">
        <a href="#top" className="logo">
          <span className="logoIcon">TR</span>
          <span><b>TURGUT</b><small>RESERVE</small></span>
        </a>

        <nav>
          {t.menu.map((item, i) => (
            <a key={item} href={["#overview", "#property", "#vision", "#location", "#contact"][i]}>
              {item}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <button onClick={() => setLang(lang === "en" ? "ar" : "en")}>
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <a className="headerCta" href="#contact">{t.request}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <video autoPlay muted loop playsInline poster="/parcel-aerial.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow pale">{t.heroEyebrow}</p>
          <h1>{t.heroTitleA}<br/><em>{t.heroTitleB}</em></h1>
          <p className="heroText">{t.heroText}</p>
          <a className="goldButton" href="#contact">{t.request}<span>↗</span></a>
        </div>
        <a href="#overview" className="scroll">{t.scroll}<span>↓</span></a>
      </section>

      <section className="stats">
        {t.stats.map(([number, label]) => (
          <div key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="overview" id="overview">
        <div className="overviewCopy">
          <p className="eyebrow">{t.overviewTag}</p>
          <h2>{t.overviewTitle}</h2>
          <p className="lead">{t.overviewText}</p>
          <div className="features">
            {[t.feature1, t.feature2, t.feature3, t.feature4].map((f, i) => (
              <div key={f}><span>0{i+1}</span><p>{f}</p></div>
            ))}
          </div>
        </div>
        <div className="overviewImage">
          <img src="/parcel-aerial.jpg" alt="Aerial view of Turgut Reserve land" />
          <div className="imageCaption">REGISTERED LAND · TURGUT / MARMARIS</div>
        </div>
      </section>

      <section className="priceBand">
        <div>
          <span>PRIVATE OFFERING</span>
          <strong>₺50,000,000</strong>
        </div>
        <p>Available to qualified buyers through a private enquiry process.</p>
        <a href="#contact">REQUEST CONFIDENTIAL DETAILS <span>↗</span></a>
      </section>

      <section className="property" id="property">
        <div className="propertyImage">
          <img src="/parcel-wide.jpg" alt="Aerial parcel boundary view" />
        </div>
        <div className="propertyCopy">
          <p className="eyebrow pale">{t.propertyTag}</p>
          <h2>{t.propertyTitle}</h2>
          <p className="lead lightLead">{t.propertyText}</p>
          <div className="factGrid">
            {t.facts.map(([k, v]) => (
              <div key={k}><span>{k}</span><strong>{v}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="vision" id="vision">
        <div className="visionIntro">
          <p className="eyebrow">{t.visionTag}</p>
          <h2>{t.visionTitle}</h2>
          <p>{t.visionText}</p>
        </div>

        <div className="visionGrid premiumVision">
          <figure className="visionHero">
            <img src="/vision-master.jpg" alt="Illustrative eco retreat master vision" />
            <figcaption>ILLUSTRATIVE ECO RETREAT MASTER VISION</figcaption>
          </figure>
          <figure className="visionWide">
            <img src="/vision-night.jpg" alt="Illustrative night ambience" />
            <figcaption>ILLUSTRATIVE NIGHT AMBIENCE</figcaption>
          </figure>
          <figure>
            <img src="/vision-suite.jpg" alt="Illustrative private suite concept" />
            <figcaption>ILLUSTRATIVE PRIVATE SUITE</figcaption>
          </figure>
        </div>
      </section>

      <section className="location" id="location">
        <div className="locationVisual">
          <img src="/parcel-road.jpg" alt="Road and forest surrounding the property" />
          <div className="coordinates">36°45'20.1"N<br/>28°06'49.8"E</div>
        </div>
        <div className="locationCopy">
          <p className="eyebrow">{t.locationTag}</p>
          <h2>{t.locationTitle}</h2>
          <p className="lead">{t.locationText}</p>
          <a
            className="textLink"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps?q=36.755583,28.113833"
          >
            OPEN LOCATION <span>↗</span>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactCopy">
          <p className="eyebrow pale">{t.contactTag}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="whatsapp" href="https://wa.me/905316238737" target="_blank" rel="noreferrer">
            <span>◉</span>{t.whatsapp}
          </a>
        </div>

        <form onSubmit={submit}>
          <div className="twoCols">
            <label>{t.name}<input name="name" required /></label>
            <label>{t.email}<input name="email" type="email" required /></label>
            <label>{t.phone}<input name="phone" required /></label>
            <label>{t.country}<input name="country" /></label>
          </div>
          <label>{t.message}<textarea name="message" rows="5" /></label>
          <button className="goldButton full" type="submit">{t.submit}<span>→</span></button>
        </form>
      </section>

      <footer>
        <div className="logo footerLogo">
          <span className="logoIcon">TR</span>
          <span><b>TURGUT</b><small>RESERVE</small></span>
        </div>
        <p>{t.legal}</p>
        <small>© 2026 TURGUT RESERVE · MARMARIS · TÜRKİYE</small>
      </footer>
    </main>
  );
}