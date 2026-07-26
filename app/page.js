"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/905316238737?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20private%20presentation%20and%20compliance-led%20concept%20options%20for%20Turgut%20Reserve.";

const COPY = {
  tr: {
    nav: ["Arsa", "Yerleşim Planı", "Eko‑Turizm & Glamping", "Private Luxury Tiny House Estate", "İletişim"],
    eyebrow: "ÖZEL ARSA SUNUMU · MARMARİS, TURGUT",
    heroTitle: "Marmaris Turgut’ta İki Ayrı Lüks Proje: Eko‑Turizm Glamping & Private Tiny House Estate",
    heroStatement:
      "Ticari turizm yatırımı ile yüksek mahremiyetli özel aile yaşamını, betonlaşmadan uzak ve doğayla bütünleşen tek bir vizyonda buluşturan özel proje alanı.",
    heroText:
      "2.671,63 m² büyüklüğünde, üç hissedarlı tek tapu üzerinde; yol, elektrik ve su altyapısıyla doğaya saygılı iki tamamlayıcı kullanım vizyonu.",
    cta: "Özel Sunumu İsteyin",
    priceLabel: "SATIŞ BEDELİ",
    price: "₺50.000.000",
    propertyKicker: "TEK PARSEL · TEK TAPU · ÜÇ HİSSEDAR",
    propertyTitle: "Tek bir bütün olarak planlanan ortak mülkiyet.",
    propertyText:
      "Taşınmaz, üç hissedarlı ve ifraz edilmemiş tek bir tarla parselidir. Sitede gösterilen alanlar yalnızca ortak kullanım ve işletme organizasyonunu anlatır; ayrı parsel, bağımsız tapu veya resmi ifraz oluşturmaz.",
    facts: [
      ["2.671,63 m²", "Tek parsel alanı"],
      ["3", "Tapuda kayıtlı hissedar"],
      ["Yaklaşık 300 m", "Sahile yakınlık"],
      ["Yol · Elektrik · Su", "Hazır altyapı"],
    ],
    principlesKicker: "MEVZUAT ODAKLI YAKLAŞIM",
    principlesTitle: "Betonlaşmadan uzak, doğayla uyumlu.",
    principlesText:
      "Geleneksel betonarme yapılaşma ve gömme beton havuz yerine; plakalı mobil üniteler, sökülebilir ahşap platformlar, geçirgen zeminler ve düşük etkili peyzaj çözümleri esas alınır. Nihai uygulamalar hissedar mutabakatı ve yetkili kurum onaylarıyla yürütülür.",
    principles: [
      ["01", "Doğa dostu", "Ahşap platformlar, geçirgen yüzeyler ve doğal dokuyu koruyan geri döndürülebilir uygulamalar."],
      ["02", "Hemen kullanıma yakın", "Mevcut yol, elektrik ve su altyapısı gerekli izinlerden sonra hızlı kurulum avantajı sağlar."],
      ["03", "Geleceğe yatırım", "Ekolojik Tarım Turizmi planlama statüsü orta ve uzun vadeli değer artışı potansiyeli sunar."],
    ],
    planKicker: "KAVRAMSAL ORTAK KULLANIM PLANI",
    planTitle: "İki kullanım alanı. Tek ve bölünmemiş tapu.",
    planText:
      "Orman tarafında ortak işletilecek düşük yoğunluklu glamping alanı; yol tarafında ise üç hissedarın kullanımını koordine eden üç aile tiny house alanı planlanmıştır. Tek giriş, ortak altyapı ve ortak peyzaj omurgası bütün parsele hizmet eder.",
    planLabels: {
      glamping: "ORTAK TİCARİ GLAMPING ALANI",
      glampingSub: "Dome/Safari çadırları · biyolojik gölet · doğal wellness",
      spine: "ORTAK YEŞİL ALAN VE ALTYAPI OMURGASI",
      bay: "AİLE KULLANIM ALANI",
      baySub: "Kavramsal kullanım dağılımı — resmi ifraz değildir",
      road: "MEVCUT ASFALT YOL · ORTAK GİRİŞ",
    },
    planNotice:
      "A, B ve C alanları yalnızca iç kullanım organizasyonunu gösterir. Ayrı mülkiyet, bağımsız tapu, bağımsız bölüm veya resmi ifraz hakkı oluşturmaz.",
    conceptsKicker: "İKİ ANA PROJE DİKEYİ",
    conceptsTitle: "Ticari eko‑turizm yatırımı ve yüksek mahremiyetli VIP aile yaşamı.",
    conceptsText:
      "Turgut Reserve, aynı doğal çevrede iki ayrı yatırım vizyonu sunar: yüksek gecelik gelir odaklı ticari glamping tesisi ve Arap/üst düzey yatırımcıya yönelik özel tiny house estate.",
    models: [
      {
        number: "01",
        title: "Eko‑Turizm & Glamping",
        type: "Ticari Yatırım",
        text: "Ahşap platformlarda Dome/Safari çadırları, ekolojik bağ ve bostan alanları, zeytin peyzajı, açık hava ahşap jakuzileri ve biyolojik doğa göletiyle Airbnb/Boutique Otel gelirine odaklanan proje.",
        features: ["Dome / Safari", "Bağ & Bostan", "Biyolojik Gölet", "Yüksek Gecelik Gelir"],
        link: "#glamping",
        action: "Glamping projesini inceleyin",
      },
      {
        number: "02",
        title: "Private Luxury Tiny House Estate",
        type: "Özel Aile Yaşamı",
        text: "Arap ve üst düzey yatırımcı aileler için yüksek peyzaj çitleriyle izole; Maxi/Loft XL mobil ev, geniş Majlis verandası, özel ahşap deck ve doğal göletle tamamlanan VIP yaşam alanı.",
        features: ["High Privacy", "Maxi / Loft XL", "2 Banyo", "Majlis Veranda"],
        link: "#tiny-house",
        action: "Tiny house yaşamını inceleyin",
      },
    ],
    glampingKicker: "PROJE 01 · TİCARİ EKO‑TARIM TURİZMİ",
    glampingTitle: "Eko‑Turizm & Glamping.",
    glampingText:
      "Ekolojik Tarım Turizmi yaklaşımıyla kurgulanan Dome ve Safari çadırları; bağ, bostan ve zeytin peyzajı, biyolojik doğa göleti ve ahşap jakuzilerle lüks, doğal ve yüksek gecelik gelir odaklı bir konaklama projesi oluşturur.",
    glampingChapters: [
      ["01", "Dome/Safari çadır yerleşimi", "Lüks çadır üniteleri yükseltilmiş ahşap platformlara yerleşir; toprak geçirgenliği ve çam ormanı karakteri korunur."],
      ["02", "Bağ, bostan ve zeytin deneyimi", "Ekolojik üretim alanları, özel banyolar ve doğal yürüyüş yolları konaklamayı özgün bir tarım-turizmi deneyimine dönüştürür."],
      ["03", "Yüksek gelirli wellness", "Açık hava ahşap jakuzisi, biyolojik doğa göleti, yoga ve ateş çukuru alanları Airbnb ve butik otel gelir potansiyelini güçlendirir."],
    ],
    tinyKicker: "PROJE 02 · VIP MOBİL AİLE YAŞAMI",
    tinyTitle: "Private Luxury Tiny House Estate.",
    tinyText:
      "Geniş aileler ve mahremiyete önem veren Arap/üst düzey yatırımcılar için; yüksek peyzaj çitleri, doğal ahşap separatörler ve tamamen izole bahçeler içinde Maxi/Loft XL mobil ev yaşamı.",
    tinyFacts: [
      ["8–10 m+", "Maxi mobil ev uzunluğu"],
      ["Loft XL", "Yüksek tavanlı aile planı"],
      ["2 Banyo", "VIP aile konforu"],
      ["High Privacy", "İzole özel bahçe"],
    ],
    tinyChapters: [
      ["01", "Maksimum mahremiyet", "Yüksek zeytin ve herdem yeşil peyzaj çitleriyle doğal ahşap separatörler, dışarıdan görünmeyen tamamen izole özel bahçe oluşturur."],
      ["02", "Maxi/Loft XL aile evi", "8–10 metre üzeri plakalı mobil ev; çift banyo, yüksek tavan, geniş mutfak ve güvenli loftuyla büyük ailelere gerçek konfor sunar."],
      ["03", "Majlis veranda ve özel wellness", "Geniş ahşap deck üzerinde Majlis oturma düzeni, zemin üstü ahşap jakuzi ve biyolojik gölet tamamen özel açık hava yaşamı sağlar."],
    ],
    conceptLabel: "İLLÜSTRATİF KONSEPT · RESMİ İFRAZ ANLAMI TAŞIMAZ",
    activationKicker: "HAZIR ALTYAPI AVANTAJI",
    activationTitle: "Karardan kullanıma daha kısa yol.",
    activationText:
      "Mevcut asfalt yol, elektrik ve su bağlantıları ilk altyapı ihtiyacını azaltır. Yazılı hissedar mutabakatı, parsel bazlı teknik inceleme ve gerekli resmi izinlerden sonra kurulum süreci hızla başlatılabilir.",
    activationCta: "Uygulama yol haritasını isteyin",
    offeringKicker: "ÖZEL SATIŞ SUNUMU",
    offeringTitle: "Tek tapu. Ortak vizyon. İki değer alanı.",
    offeringText:
      "Tapu, planlama statüsü, konum bilgileri, hissedarlık yapısı ve proje geliştirme seçenekleri ciddi alıcılarla özel sunum kapsamında paylaşılır.",
    contactTitle: "Özel sunumu talep edin.",
    contactText:
      "Arsa detayları, belgeler, yer gösterimi veya mevzuat odaklı uygulama çalışması için Elvan Gökmen ile doğrudan iletişime geçin.",
    whatsapp: "WhatsApp",
    email: "E-posta",
    name: "Elvan Gökmen",
    disclaimer:
      "Taşınmaz üç hissedarlı, ifraz edilmemiş tek bir tarla parselidir. Gösterilen alanlar, ünite sayıları ve görseller kavramsaldır; resmi ifraz, bağımsız tapu, yapı ruhsatı, turizm işletme belgesi veya garanti edilmiş yapılaşma hakkı anlamına gelmez. Bir römorkun plakalı olması, tek başına parsel üzerinde yerleştirme ve kullanım izni sağlamaz. Tüm uygulamalar yazılı hissedar mutabakatına, parsel bazlı teknik ve hukuki incelemeye ve yetkili kurumların onaylarına tabidir.",
  },
  en: {
    nav: ["Property", "Shared Plan", "Eco‑Tourism & Glamping", "Private Luxury Tiny House Estate", "Contact"],
    eyebrow: "PRIVATE LAND OFFERING · MARMARIS, TÜRKİYE",
    heroTitle: "Two Distinct Luxury Visions in Marmaris Turgut",
    heroStatement:
      "Eco‑Tourism & Glamping Investment · Private Luxury Tiny House Estate",
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
    conceptsTitle: "Commercial eco‑tourism returns and high‑privacy VIP family living.",
    conceptsText:
      "Two clearly separated visions: a high nightly-rate eco‑agriculture glamping business and a private mobile estate created for large Arab and international investor families.",
    models: [
      {
        number: "01",
        title: "Eco‑Tourism & Glamping",
        type: "Commercial Investment",
        text: "Dome and Safari tents on timber platforms, ecological vineyard and kitchen gardens, olive landscaping, wooden hot tubs and a biological pond—positioned for Airbnb and boutique-hotel income.",
        features: ["Dome / Safari", "Vineyard & Gardens", "Biological Pond", "High Nightly Rate"],
        link: "#glamping",
        action: "Explore glamping concept",
      },
      {
        number: "02",
        title: "Private Luxury Tiny House Estate",
        type: "Private Family Living",
        text: "A high-privacy VIP mobile estate for large families: Maxi/Loft XL homes, screened gardens, Majlis-style verandas, private decks and natural wellness.",
        features: ["High Privacy", "Maxi / Loft XL", "2 Bathrooms", "Majlis Veranda"],
        link: "#tiny-house",
        action: "Explore family living concept",
      },
    ],
    glampingKicker: "PROJECT 01 · COMMERCIAL ECO‑AGRICULTURE TOURISM",
    glampingTitle: "Eco‑Tourism & Glamping.",
    glampingText:
      "A luxury nature-stay concept combining removable Dome/Safari accommodation with vineyards, productive gardens, olive landscaping, biological water and high nightly-rate hospitality positioning.",
    glampingChapters: [
      ["01", "Dome and Safari architecture", "Luxury tents rest on raised timber platforms, preserving ground permeability and the pine-forest character."],
      ["02", "Vineyard, gardens and olives", "Productive ecological landscapes, private bathrooms and nature paths create a distinctive agro-tourism guest journey."],
      ["03", "High-yield natural wellness", "Biological water, wooden hot tubs, yoga and gathering spaces strengthen Airbnb and boutique-hotel revenue potential."],
    ],
    tinyKicker: "PROJECT 02 · VIP MOBILE FAMILY ESTATE",
    tinyTitle: "Private Luxury Tiny House Estate.",
    tinyText:
      "Created for large families and privacy-focused Arab and international investors: fully screened private gardens, natural timber separators and the largest road-registered Maxi/Loft XL mobile-home format.",
    tinyFacts: [
      ["8–10 m+", "Maxi mobile-home length"],
      ["Loft XL", "High-volume family layout"],
      ["2 Baths", "VIP family comfort"],
      ["High Privacy", "Fully screened garden"],
    ],
    tinyChapters: [
      ["01", "Maximum privacy", "Tall olive and evergreen hedges with timber privacy screens create a fully isolated garden hidden from outside views."],
      ["02", "Maxi/Loft XL family home", "An 8–10 metre-plus registered mobile home offers two bathrooms, tall ceilings, a generous kitchen and secure loft sleeping."],
      ["03", "Majlis veranda and private wellness", "A large detached deck supports Majlis-style seating, an above-ground wooden hot tub and a natural biological pond."],
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
    nav: ["العقار", "المخطط المشترك", "السياحة البيئية والتخييم الفاخر", "مجمع المنازل المتنقلة الفاخرة الخاصة", "التواصل"],
    eyebrow: "عرض خاص لأرض · مرمريس، تركيا",
    heroTitle: "رؤيتان منفصلتان للفخامة في تورغوت مرمريس",
    heroStatement:
      "استثمار في السياحة البيئية والتخييم الفاخر · مجمع خاص للمنازل المتنقلة الفاخرة",
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
    conceptsTitle: "عوائد السياحة البيئية وحياة عائلية خاصة لكبار المستثمرين.",
    conceptsText:
      "رؤيتان واضحتان: مشروع تخييم زراعي بيئي بعائد يومي مرتفع، ومجمع متنقل خاص للعائلات العربية والدولية الكبيرة.",
    models: [
      {
        number: "01",
        title: "السياحة البيئية والتخييم الفاخر",
        type: "استثمار تجاري",
        text: "قباب وخيام سفاري على منصات خشبية، وكروم وحدائق إنتاجية وزيتون، وأحواض خشبية وبركة بيولوجية، مع تركيز على دخل Airbnb والفنادق البوتيكية.",
        features: ["قبة / سفاري", "كروم وبساتين", "بركة بيولوجية", "عائد ليلي مرتفع"],
        link: "#glamping",
        action: "استكشف تصور التخييم",
      },
      {
        number: "02",
        title: "مجمع المنازل المتنقلة الفاخرة الخاصة",
        type: "حياة عائلية خاصة",
        text: "مجمع VIP عالي الخصوصية للعائلات الكبيرة: منازل Maxi/Loft XL وحدائق معزولة وشرفات مجلس واسعة وأسطح خشبية وعافية طبيعية.",
        features: ["خصوصية عالية", "Maxi / Loft XL", "حمامان", "شرفة مجلس"],
        link: "#tiny-house",
        action: "استكشف تصور الحياة العائلية",
      },
    ],
    glampingKicker: "المشروع 01 · السياحة الزراعية البيئية التجارية",
    glampingTitle: "السياحة البيئية والتخييم الفاخر.",
    glampingText:
      "مشروع إقامة طبيعية فاخر يجمع قباب وخيام سفاري قابلة للإزالة مع الكروم والبساتين والزيتون والمياه البيولوجية، ومصمم لتحقيق سعر إقامة ليلي مرتفع.",
    glampingChapters: [
      ["01", "عمارة القباب وخيام السفاري", "تستقر الوحدات الفاخرة على منصات خشبية مرتفعة تحافظ على نفاذية الأرض وطابع غابة الصنوبر."],
      ["02", "الكروم والبساتين والزيتون", "الزراعة البيئية والحمامات الخاصة ومسارات الطبيعة تصنع تجربة سياحة زراعية أصيلة."],
      ["03", "عافية طبيعية بعائد مرتفع", "البركة البيولوجية والأحواض الخشبية واليوغا ومناطق التجمع تعزز إمكانات Airbnb والفندق البوتيكي."],
    ],
    tinyKicker: "المشروع 02 · مجمع عائلي متنقل VIP",
    tinyTitle: "مجمع المنازل المتنقلة الفاخرة الخاصة.",
    tinyText:
      "مصمم للعائلات الكبيرة والمستثمرين العرب والدوليين الباحثين عن الخصوصية: حدائق محجوبة بالكامل وفواصل خشبية طبيعية وأكبر صيغة منزل متنقل Maxi/Loft XL مسجلة للطريق.",
    tinyFacts: [
      ["+8–10 م", "طول المنزل المتنقل Maxi"],
      ["Loft XL", "تخطيط عائلي مرتفع السقف"],
      ["حمامان", "راحة عائلية VIP"],
      ["خصوصية عالية", "حديقة محجوبة بالكامل"],
    ],
    tinyChapters: [
      ["01", "أقصى درجات الخصوصية", "أسوار نباتية مرتفعة من الزيتون والأشجار دائمة الخضرة مع فواصل خشبية تصنع حديقة معزولة لا تُرى من الخارج."],
      ["02", "منزل عائلي Maxi/Loft XL", "وحدة متنقلة مسجلة بطول يزيد على 8–10 أمتار مع حمامين وسقف مرتفع ومطبخ واسع وطابق نوم علوي آمن."],
      ["03", "شرفة مجلس وعافية خاصة", "سطح خشبي واسع لجلسات المجلس، وحوض خشبي فوق الأرض وبركة بيولوجية لحياة خارجية خاصة بالكامل."],
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
  const [lang, setLang] = useState("tr");
  const t = COPY[lang];

  useEffect(() => {
    const saved = localStorage.getItem("tr-lang");
    if (saved === "tr" || saved === "en" || saved === "ar") setLang(saved);
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
          <button className={lang === "tr" ? "active" : ""} onClick={() => changeLang("tr")}>TR</button>
          <i />
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
                <div className="modelFeatures">
                  {model.features.map((feature) => <span key={feature}>{feature}</span>)}
                </div>
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
