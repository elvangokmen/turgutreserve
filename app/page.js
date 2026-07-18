'use client';

import { useMemo, useState } from 'react';

const copy = {
  en: {
    nav: ['Overview', 'Location', 'Opportunity', 'Gallery'],
    request: 'Request Private Brochure',
    eyebrow: 'MARMARIS · TÜRKİYE',
    title1: 'A rare piece',
    title2: 'of the Aegean.',
    intro: 'A private coastal land opportunity in Turgut, Marmaris — presented for discerning international buyers.',
    cta: 'Explore the opportunity',
    confidential: 'Confidential presentation · Qualified enquiries',
    stats: [
      ['Turgut', 'Marmaris'],
      ['Aegean', 'Coastal setting'],
      ['Private', 'Direct offering'],
      ['Upon request', 'Investment details']
    ],
    storyEyebrow: 'THE SETTING',
    storyTitle: 'Where pine-covered hills meet the Aegean.',
    storyText: 'Turgut is positioned within the natural landscape of the Marmaris peninsula. Turgut Reserve is presented as a singular landholding for buyers seeking privacy, scarcity and long-term optionality.',
    detailsEyebrow: 'THE OPPORTUNITY',
    detailsTitle: 'A considered acquisition, presented privately.',
    detailsText: 'Full property information, title documentation, planning status and location files are shared with qualified buyers following an initial enquiry.',
    cards: [
      ['01', 'Private offering', 'Direct communication with the ownership side.'],
      ['02', 'Coastal location', 'A natural setting within the Marmaris peninsula.'],
      ['03', 'Due diligence ready', 'Legal and technical files available for review.']
    ],
    locationEyebrow: 'LOCATION',
    locationTitle: 'Turgut, Marmaris',
    locationText: 'A destination shaped by green hills, quiet bays and the enduring appeal of Türkiye’s southwest coast.',
    galleryEyebrow: 'VISUAL JOURNAL',
    galleryTitle: 'The landscape speaks first.',
    formEyebrow: 'PRIVATE ENQUIRY',
    formTitle: 'Request the confidential presentation.',
    formText: 'Share your details and our representative will contact you directly.',
    fields: ['Full name', 'Email address', 'Phone / WhatsApp', 'Country'],
    message: 'Message',
    submit: 'Request brochure',
    disclaimer: 'Information on this website is introductory and does not constitute a binding offer. All property, planning and legal information is subject to independent verification.',
    footer: 'TURGUT RESERVE · MARMARIS · TÜRKİYE',
    whatsapp: 'WhatsApp'
  },
  ar: {
    nav: ['نظرة عامة', 'الموقع', 'الفرصة', 'الصور'],
    request: 'اطلب الملف الاستثماري',
    eyebrow: 'مرمريس · تركيا',
    title1: 'قطعة نادرة',
    title2: 'من بحر إيجة.',
    intro: 'فرصة خاصة لامتلاك أرض ساحلية في تورغوت، مرمريس — مقدمة للمشترين الدوليين الباحثين عن التميز.',
    cta: 'اكتشف الفرصة',
    confidential: 'عرض سري · للاستفسارات الجادة',
    stats: [
      ['تورغوت', 'مرمريس'],
      ['بحر إيجة', 'موقع ساحلي'],
      ['عرض خاص', 'تواصل مباشر'],
      ['عند الطلب', 'تفاصيل الاستثمار']
    ],
    storyEyebrow: 'الموقع الطبيعي',
    storyTitle: 'حيث تلتقي التلال الخضراء ببحر إيجة.',
    storyText: 'تقع تورغوت ضمن الطبيعة المميزة لشبه جزيرة مرمريس. تُقدَّم Turgut Reserve كفرصة أرض فريدة للمشترين الباحثين عن الخصوصية والندرة والمرونة الاستثمارية طويلة الأجل.',
    detailsEyebrow: 'الفرصة',
    detailsTitle: 'استحواذ مدروس، يُعرض بشكل خاص.',
    detailsText: 'تتم مشاركة معلومات العقار ووثائق الملكية وحالة التخطيط وملفات الموقع مع المشترين المؤهلين بعد التواصل الأولي.',
    cards: [
      ['01', 'عرض خاص', 'تواصل مباشر مع جهة الملكية.'],
      ['02', 'موقع ساحلي', 'بيئة طبيعية ضمن شبه جزيرة مرمريس.'],
      ['03', 'جاهز للفحص', 'الملفات القانونية والفنية متاحة للمراجعة.']
    ],
    locationEyebrow: 'الموقع',
    locationTitle: 'تورغوت، مرمريس',
    locationText: 'وجهة تتميز بالتلال الخضراء والخلجان الهادئة وجاذبية الساحل الجنوبي الغربي لتركيا.',
    galleryEyebrow: 'المشهد',
    galleryTitle: 'الطبيعة تتحدث أولاً.',
    formEyebrow: 'استفسار خاص',
    formTitle: 'اطلب العرض السري.',
    formText: 'أرسل بياناتك وسيتواصل معك ممثلنا مباشرة.',
    fields: ['الاسم الكامل', 'البريد الإلكتروني', 'الهاتف / واتساب', 'الدولة'],
    message: 'الرسالة',
    submit: 'اطلب الملف',
    disclaimer: 'المعلومات الواردة في هذا الموقع تمهيدية ولا تشكل عرضاً ملزماً. تخضع جميع معلومات العقار والتخطيط والوضع القانوني للتحقق المستقل.',
    footer: 'TURGUT RESERVE · مرمريس · تركيا',
    whatsapp: 'واتساب'
  }
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => copy[lang], [lang]);
  const rtl = lang === 'ar';

  const onSubmit = (e) => {
    e.preventDefault();
    alert(lang === 'ar'
      ? 'سيتم ربط النموذج بالبريد الإلكتروني في خطوة الإعداد التالية.'
      : 'The form will be connected to your email in the next setup step.');
  };

  return (
    <main dir={rtl ? 'rtl' : 'ltr'}>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Turgut Reserve home">
          <span className="brandMark">TR</span>
          <span><b>TURGUT</b><i>RESERVE</i></span>
        </a>
        <nav>
          {t.nav.map((item, i) => <a key={item} href={['#overview','#location','#opportunity','#gallery'][i]}>{item}</a>)}
        </nav>
        <div className="navActions">
          <button className="lang" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>{lang === 'en' ? 'AR' : 'EN'}</button>
          <a className="outline" href="#contact">{t.request}</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="heroImage" />
        <div className="grain" />
        <div className="heroContent">
          <p className="eyebrow light">{t.eyebrow}</p>
          <h1>{t.title1}<br/><em>{t.title2}</em></h1>
          <p className="heroIntro">{t.intro}</p>
          <div className="heroActions">
            <a className="primary" href="#overview">{t.cta} <span>↘</span></a>
            <span className="confidential">{t.confidential}</span>
          </div>
        </div>
        <div className="scroll">SCROLL <span>↓</span></div>
      </section>

      <section className="stats" id="overview">
        {t.stats.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
      </section>

      <section className="story">
        <div className="storyVisual visualOne"><span>01</span></div>
        <div className="storyCopy">
          <p className="eyebrow">{t.storyEyebrow}</p>
          <h2>{t.storyTitle}</h2>
          <p>{t.storyText}</p>
          <div className="signature">Turgut Reserve</div>
        </div>
      </section>

      <section className="opportunity" id="opportunity">
        <div className="sectionHead">
          <p className="eyebrow light">{t.detailsEyebrow}</p>
          <h2>{t.detailsTitle}</h2>
          <p>{t.detailsText}</p>
        </div>
        <div className="cards">
          {t.cards.map(([n,title,body]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="location" id="location">
        <div className="locationCopy">
          <p className="eyebrow">{t.locationEyebrow}</p>
          <h2>{t.locationTitle}</h2>
          <p>{t.locationText}</p>
          <a href="#contact">{t.request} <span>→</span></a>
        </div>
        <div className="mapArt">
          <div className="mapLines" />
          <div className="pin"><i /><span>TURGUT RESERVE</span></div>
          <b>36.7° N<br/>28.1° E</b>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="sectionHead darkText">
          <p className="eyebrow">{t.galleryEyebrow}</p>
          <h2>{t.galleryTitle}</h2>
        </div>
        <div className="galleryGrid">
          <div className="g1"><span>AEGEAN COAST</span></div>
          <div className="g2"><span>NATURAL LANDSCAPE</span></div>
          <div className="g3"><span>PRIVATE SETTING</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactIntro">
          <p className="eyebrow light">{t.formEyebrow}</p>
          <h2>{t.formTitle}</h2>
          <p>{t.formText}</p>
          <a className="whatsapp" href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noreferrer">
            <span>◉</span> {t.whatsapp}
          </a>
        </div>
        <form onSubmit={onSubmit}>
          <div className="formGrid">
            {t.fields.map((field, i) => (
              <label key={field}>{field}<input required={i < 3} type={i === 1 ? 'email' : 'text'} /></label>
            ))}
          </div>
          <label>{t.message}<textarea rows="4" /></label>
          <button className="primary wide" type="submit">{t.submit} <span>→</span></button>
        </form>
      </section>

      <footer>
        <div className="brand footerBrand">
          <span className="brandMark">TR</span>
          <span><b>TURGUT</b><i>RESERVE</i></span>
        </div>
        <p>{t.disclaimer}</p>
        <small>{t.footer}</small>
      </footer>
    </main>
  );
}
