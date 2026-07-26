"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const WHATSAPP =
  "https://wa.me/905316238737?text=Hello%2C%20I%20would%20like%20to%20receive%20the%20Turgut%20Reserve%20land%20presentation.";

const copy = {
  tr: {
    language: "Dil",
    nav: ["Arsa", "Ticari Glamping", "Aile Tiny House", "İletişim"],
    navLinks: ["#arsa", "#glamping", "#tiny-house", "#iletisim"],
    topEyebrow: "MARMARİS · TURGUT",
    topTitle: "Tek Arsa. İki Güçlü Gelecek Vizyonu.",
    topText:
      "2.671,63 m² büyüklüğündeki özel arsa; ticari lüks glamping yatırımı ve tek aileye özel mobil yaşam konseptiyle birlikte sunulmaktadır.",
    videoLabel: "GERÇEK PARSEL · ORİJİNAL DRONE GÖRÜNTÜSÜ",
    priceLabel: "ARSA SATIŞ BEDELİ",
    price: "₺50.000.000",
    priceNote:
      "Fiyat yalnızca arsa satış bedelidir. Gösterilen konsept projeler ve uygulama satış bedeline dahil değildir.",
    choose: "PROJE VİZYONLARI",
    chooseTitle: "Arsanın potansiyelini iki ayrı yönden keşfedin.",
    glampingCard: "Ticari Glamping Projesi",
    glampingCardText:
      "Premium konaklama, özel ahşap jakuziler ve butik eko-turizm deneyimi.",
    tinyCard: "Aile Tiny House Yaşamı",
    tinyCardText:
      "İki bağımsız mobil ünite ve mahrem bahçeyle tek aileye özel yaşam.",
    explore: "Projeyi İncele",
    glamping: {
      badge: "YÜKSEK GETİRİ POTANSİYELLİ TURİZM VE GAYRİMENKUL YATIRIMI",
      title:
        "Doğayla İç İçe Lüks Turizm Konsepti: Glamping & Eko-Turizm Yatırım Fırsatı",
      subtitle:
        "Bölgenin özgün doğasında, turizm ve konaklama geliri potansiyeli taşıyan arsa üzerinde tasarlanmış örnek lüks glamping projesiyle geleceğin turizm yatırımını keşfedin.",
      button1: "Yatırım Detaylarını İncele",
      button2: "Arsa Satış Bilgisi Al",
      whyTitle: "Neden Bu Arsa? Neden Glamping Yatırımı?",
      whyText:
        "Doğa turizmine olan talebin yükseldiği günümüzde Glamping, lüksü doğal çevreyle buluşturan güçlü bir turizm modeli sunuyor. Satışa sunulan arsa; konumu, topoğrafyası ve doğal atmosferiyle lüks çadır ve eko-turizm konseptinin profesyonel fizibilite kapsamında değerlendirilmesine uygun bir vizyon oluşturuyor.",
      whyText2:
        "Hazırlanan örnek konsept, arsanın ticari potansiyelini ve mimari yönünü alıcılara göstermek amacıyla tasarlanmıştır. Doluluk, gecelik fiyat ve geri dönüş süresi; işletme modeli, izinler, yatırım bütçesi ve bağımsız fizibilite çalışmasıyla ayrıca değerlendirilmelidir.",
      visionTitle: "Arsa Üzerinde Kurgulanan Örnek Proje Vizyonu",
      cards: [
        {
          title: "Lüks Jeodezik Dome Üniteler",
          text: "Panoramik açıklıklara, iklimlendirmeye ve dört mevsim konforuna göre tasarlanabilecek premium Dome konaklama alanları.",
        },
        {
          title: "Özel Ahşap Jakuzili Teraslar",
          text: "Her konaklama ünitesine özel, mahremiyeti peyzajla korunan ahşap jakuzi ve kişisel dinlenme deckleri.",
        },
        {
          title: "Ortak Yaşam & Sosyal Alan",
          text: "Olive House restoran-lounge, karşılama, wellness ve peyzaj alanları için verimli, düşük yoğunluklu kullanım.",
        },
        {
          title: "Premium Gelir Potansiyeli",
          text: "Lüks segment misafire hitap eden yüksek değerli konaklama modeli; gelir ve amortisman öngörüleri ayrı fizibiliteye tabidir.",
        },
      ],
      galleryTitle: "Lüks, doğanın önüne geçmeden tasarlandı.",
      galleryText:
        "Altı Safari ve dört Dome süitten oluşan örnek yerleşim; özel ahşap jakuziler, Olive House ve biyolojik peyzaj göletiyle birlikte düşünülmüştür.",
      ctaTitle: "Geleceğin Turizm Yatırımında Yerinizi Alın",
      ctaText:
        "Arsanın konumu, planlama ve kullanım bilgileri, satış fiyatı ve örnek proje vizyonunu incelemek için bizimle iletişime geçin.",
      cta: "Arsayı Yerinde Görmek İçin Randevu Alın",
      disclaimer:
        "Bu bölüm yalnızca tanıtım amaçlı örnek konsepttir. Turizm faaliyeti, kapasite, gelir, yapı ve peyzaj uygulamaları garanti edilmez. Uygulama; parsel özelinde fizibilite, ilgili kurum görüşleri, proje, izin ve ruhsat süreçleri ile ayrıca hazırlanacak ticari teklife tabidir.",
    },
    tiny: {
      badge: "MÜSTAKİL & DOĞAYLA İÇ İÇE AİLE YAŞAMI",
      title: "Aileniz İçin Güvenli, Müstakil ve Huzurlu Bir Doğa Yaşamı",
      subtitle:
        "Şehrin gürültüsünden uzak, yüksek mahremiyetli ve çocukların doğayla büyüyebileceği Twin Mobile Family Estate örnek yaşam vizyonuyla sunulan özel arsa fırsatı.",
      button1: "Yaşam Konseptini Keşfet",
      button2: "Arsa Satış Detayları",
      whyTitle: "Kendi Müstakil Cennetinizi Yaratın",
      whyText:
        "Doğada yaşamak, ailece daha sakin ve nitelikli bir yaşam için güçlü bir tercihtir. Satışa sunulan arsa; aile mahremiyetine önem veren ve doğanın içinde bütüncül bir özel yaşam alanı kurgulamak isteyen alıcılar için örnek bir mobil yaşam vizyonuyla sunulmaktadır.",
      whyText2:
        "Sitedeki Twin Mobile Family Estate konsepti; bir ana aile ünitesi, ayrı çocuk/misafir ünitesi, ortak Majlis verandası ve tek özel bahçeyle oluşturulabilecek korunaklı yaşam fikrini göstermektedir. Kesin yerleşim ve kullanım, seçilecek mobil araçlar ve parsel özelindeki izinlerle ayrıca doğrulanır.",
      visionTitle: "Örnek Yerleşim ve Arsanın Öne Çıkan Özellikleri",
      cards: [
        {
          title: "Yüksek Aile Mahremiyeti",
          text: "Katmanlı peyzaj ve ahşap seperatörlerle dış gözlerden uzak, tek aileye ait bütüncül bahçe düzeni.",
        },
        {
          title: "Geniş Müstakil Bahçe Kullanımı",
          text: "Majlis verandası, hobi bahçesi, çocuk oyun alanı, ahşap jakuzi ve doğa içinde dinlenme bölümleri.",
        },
        {
          title: "Çocuk Dostu & Güvenli Doğa",
          text: "Çocukların aile yaşam alanından izlenebildiği, yeşille iç içe doğa oyun ve çalışma alanları.",
        },
        {
          title: "Esnek ve Sürdürülebilir Yaşam",
          text: "İki bağımsız tekerlekli mobil üniteye dayanan, model ve parsel onaylarına tabi, düşük etkili konsept yaklaşımı.",
        },
      ],
      galleryTitle: "Tek aile için daha gerçekçi bir mobil yaşam.",
      galleryText:
        "10,5 metrelik ana aile ünitesi ile 8,5 metrelik çocuk/misafir ünitesi; sökülebilir Majlis decki çevresinde ayrı fakat bağlantılı bir yaşam sunar.",
      ctaTitle: "Hayalinizdeki Aile Yaşam Alanı Sizi Bekliyor",
      ctaText:
        "Arsanın konumunu görmek, doğrulanmış parsel bilgilerini öğrenmek veya özel bir ziyaret planlamak için bizimle iletişime geçin.",
      cta: "Arsa Bilgi Paketini İsteyin",
      disclaimer:
        "Bu bölüm yalnızca tanıtım amaçlı örnek konsepttir. Tekerlekli veya plakalı olmak parsel üzerinde yerleşim ve sürekli kullanım için otomatik izin oluşturmaz. Mobil araçların tip/ferdi onayı, tescili ve taşınması; yerleşim, deck, jakuzi, gölet ve altyapı ise ayrıca kurum görüşleri, izinler, profesyonel projeler ve uygulama teklifine tabidir.",
    },
    projectNoteTitle: "Konsept Proje ve Fiyat Açıklaması",
    projectNote:
      "Web sitesindeki tüm görseller ve yerleşimler tanıtım amaçlı örnek konseptlerdir. İlan edilen ₺50.000.000 fiyat yalnızca arsa satış bedelidir. Proje geliştirme, mimari ve mühendislik çalışmaları, mobil üniteler, nakliye, ekipman, peyzaj, ruhsat ve uygulama dahil değildir; talep halinde ayrıca tekliflendirilir.",
    contactTitle: "Turgut Reserve özel arsa sunumunu isteyin.",
    contactText:
      "Doğrulanmış arsa bilgileri, özel ziyaret veya konseptlerin ayrı uygulama teklifi için doğrudan iletişime geçin.",
    whatsapp: "WhatsApp ile İletişim",
    email: "E-posta Gönder",
    footer: "TURGUT RESERVE · PRIVATE LAND OFFERING",
  },
  en: {
    language: "Language",
    nav: ["Land", "Commercial Glamping", "Family Tiny House", "Contact"],
    navLinks: ["#arsa", "#glamping", "#tiny-house", "#iletisim"],
    topEyebrow: "MARMARIS · TURGUT",
    topTitle: "One Private Land. Two Distinct Future Visions.",
    topText:
      "A 2,671.63 m² private land offering presented through two separate concepts: a commercial luxury glamping investment and a private mobile family estate.",
    videoLabel: "REAL LAND · ORIGINAL DRONE FOOTAGE",
    priceLabel: "LAND ASKING PRICE",
    price: "₺50,000,000",
    priceNote:
      "The price relates to the land only. The illustrated concepts and implementation are not included.",
    choose: "PROJECT VISIONS",
    chooseTitle: "Explore the potential of the land in two distinct ways.",
    glampingCard: "Commercial Glamping Project",
    glampingCardText:
      "Premium stays, private wooden hot tubs and a boutique eco-tourism experience.",
    tinyCard: "Family Tiny House Living",
    tinyCardText:
      "A private family lifestyle with two independent mobile units and one secluded garden.",
    explore: "Explore Project",
    glamping: {
      badge: "HIGH-POTENTIAL TOURISM & REAL ESTATE INVESTMENT",
      title:
        "Luxury Tourism in Nature: A Glamping & Eco-Tourism Investment Opportunity",
      subtitle:
        "Discover a forward-looking tourism vision through an illustrative luxury glamping concept designed for private land with distinctive natural character and hospitality income potential.",
      button1: "Explore Investment Details",
      button2: "Request Land Sale Information",
      whyTitle: "Why This Land? Why Glamping?",
      whyText:
        "As demand for nature-led travel grows, glamping offers a strong model that combines premium hospitality with the natural environment. The location, topography and atmosphere of the land create a compelling basis for professionally assessing a luxury tent and eco-tourism concept.",
      whyText2:
        "This illustrative concept was prepared to communicate the land’s commercial potential and architectural direction. Occupancy, nightly rate and payback depend on the operating model, approvals, investment budget and an independent feasibility study.",
      visionTitle: "Illustrative Project Vision for the Land",
      cards: [
        {
          title: "Luxury Geodesic Dome Units",
          text: "Premium Dome accommodation areas envisioned with panoramic openings, climate control and four-season comfort.",
        },
        {
          title: "Private Wooden Hot-Tub Decks",
          text: "Individual timber hot tubs and personal relaxation decks screened by layered privacy landscaping.",
        },
        {
          title: "Shared Living & Social Space",
          text: "A low-density plan for the Olive House restaurant-lounge, welcome, wellness and landscape areas.",
        },
        {
          title: "Premium Revenue Potential",
          text: "A high-value hospitality model for luxury travellers; revenue and payback projections require separate feasibility.",
        },
      ],
      galleryTitle: "Luxury designed without overpowering nature.",
      galleryText:
        "The illustrative six-Safari and four-Dome plan combines private wooden hot tubs, the Olive House and a landscape-led biological pond.",
      ctaTitle: "Take Your Place in the Future of Tourism",
      ctaText:
        "Contact us to review the location, planning and use information, asking price and illustrative project vision.",
      cta: "Book a Private Land Viewing",
      disclaimer:
        "This section is an illustrative promotional concept only. Tourism activity, capacity, revenue, structures and landscape works are not guaranteed. Implementation requires parcel-specific feasibility, authority opinions, design, approvals and permits, plus a separate commercial quotation.",
    },
    tiny: {
      badge: "PRIVATE FAMILY LIVING IN NATURE",
      title: "A Safe, Private and Peaceful Nature-Led Life for Your Family",
      subtitle:
        "A private land opportunity presented with the illustrative Twin Mobile Family Estate vision—away from urban noise, highly secluded and shaped for children to grow close to nature.",
      button1: "Explore the Living Concept",
      button2: "View Land Sale Details",
      whyTitle: "Create Your Own Private Sanctuary",
      whyText:
        "Living in nature can be a powerful choice for a calmer, more considered family life. This land is presented with a mobile-living vision for buyers who value family privacy and want to explore a cohesive private setting within nature.",
      whyText2:
        "The Twin Mobile Family Estate concept combines a principal family unit, a separate children/guest unit, one Majlis veranda and one private garden. Final placement and use must be verified for the selected mobile vehicles and the parcel-specific permissions.",
      visionTitle: "Illustrative Layout & Key Land Qualities",
      cards: [
        {
          title: "High Family Privacy",
          text: "A unified private garden screened from outside views through layered planting and timber separators.",
        },
        {
          title: "Generous Private Garden",
          text: "Space for a Majlis veranda, edible garden, children’s play, wooden hot tub and nature-led relaxation.",
        },
        {
          title: "Child-Friendly Nature",
          text: "Green play and study areas that remain visible from the heart of the family living space.",
        },
        {
          title: "Flexible, Lower-Impact Living",
          text: "A concept based on two independent wheeled mobile units, subject to model and parcel approvals.",
        },
      ],
      galleryTitle: "A more credible mobile home for one family.",
      galleryText:
        "A 10.5 m principal family unit and an 8.5 m children/guest unit create separate but connected living around a removable Majlis deck.",
      ctaTitle: "Your Private Family-Living Vision Awaits",
      ctaText:
        "Contact us to see the location, request verified parcel information or arrange a private visit.",
      cta: "Request the Land Information Pack",
      disclaimer:
        "This section is an illustrative promotional concept only. Wheels or registration do not automatically authorise placement or continuous residential use. Vehicle approval, registration and transport, as well as decks, hot tub, pond, infrastructure and placement, require separate authority opinions, permissions, professional design and an implementation quotation.",
    },
    projectNoteTitle: "Concept Project & Price Clarification",
    projectNote:
      "All images and layouts on this website are illustrative promotional concepts. The advertised ₺50,000,000 price relates exclusively to the land. Project development, architectural and engineering services, mobile units, transport, equipment, landscaping, permits and implementation are excluded and may be quoted separately.",
    contactTitle: "Request the private Turgut Reserve land presentation.",
    contactText:
      "Contact us directly for verified land information, a private viewing or a separate implementation proposal for either concept.",
    whatsapp: "Contact via WhatsApp",
    email: "Send Email",
    footer: "TURGUT RESERVE · PRIVATE LAND OFFERING",
  },
  ar: {
    language: "اللغة",
    nav: ["الأرض", "مشروع الغلامبينغ", "منزل العائلة المتنقل", "التواصل"],
    navLinks: ["#arsa", "#glamping", "#tiny-house", "#iletisim"],
    topEyebrow: "مرمريس · تورغوت",
    topTitle: "أرض خاصة واحدة. رؤيتان مختلفتان للمستقبل.",
    topText:
      "فرصة لامتلاك أرض خاصة بمساحة 2,671.63 م²، مقدمة من خلال مفهومين منفصلين: استثمار غلامبينغ فاخر ومجال خاص لحياة عائلية متنقلة.",
    videoLabel: "الأرض الحقيقية · تصوير الدرون الأصلي",
    priceLabel: "سعر بيع الأرض",
    price: "₺50,000,000",
    priceNote:
      "السعر خاص بالأرض فقط. المشاريع التصورية والتنفيذ غير مشمولة في السعر.",
    choose: "رؤى المشروع",
    chooseTitle: "اكتشف إمكانات الأرض من خلال رؤيتين مستقلتين.",
    glampingCard: "مشروع غلامبينغ تجاري",
    glampingCardText:
      "إقامة فاخرة وأحواض جاكوزي خشبية خاصة وتجربة سياحة بيئية بوتيكية.",
    tinyCard: "حياة عائلية في منزل متنقل",
    tinyCardText:
      "حياة خاصة لعائلة واحدة بوحدتين متنقلتين مستقلتين وحديقة محمية.",
    explore: "استكشف المشروع",
    glamping: {
      badge: "استثمار سياحي وعقاري ذو إمكانات مرتفعة",
      title: "سياحة فاخرة وسط الطبيعة: فرصة استثمار في الغلامبينغ والسياحة البيئية",
      subtitle:
        "اكتشف رؤية سياحية مستقبلية من خلال مشروع غلامبينغ فاخر تصوري، أُعد لأرض خاصة ذات طبيعة مميزة وإمكانات في قطاع الضيافة.",
      button1: "استكشف تفاصيل الاستثمار",
      button2: "اطلب معلومات بيع الأرض",
      whyTitle: "لماذا هذه الأرض؟ ولماذا الغلامبينغ؟",
      whyText:
        "مع تزايد الطلب على السياحة الطبيعية، يقدم الغلامبينغ نموذجاً قوياً يجمع الضيافة الراقية بالبيئة. موقع الأرض وتضاريسها وأجواؤها الطبيعية توفر أساساً جذاباً لدراسة مشروع خيام فاخرة وسياحة بيئية بصورة مهنية.",
      whyText2:
        "أُعد هذا التصور لتوضيح الإمكانات التجارية والاتجاه المعماري للأرض. نسب الإشغال والأسعار والعائد تعتمد على نموذج التشغيل والموافقات وميزانية الاستثمار ودراسة جدوى مستقلة.",
      visionTitle: "الرؤية التصورية للمشروع على الأرض",
      cards: [
        {
          title: "وحدات قباب جيوديسية فاخرة",
          text: "مناطق إقامة بقِباب فاخرة يمكن تصميمها بإطلالات بانورامية وتكييف وراحة لأربعة فصول.",
        },
        {
          title: "تراسات بجاكوزي خشبي خاص",
          text: "حوض خشبي خاص ومنصة استرخاء لكل وحدة، مع حماية الخصوصية بالزراعة المتدرجة.",
        },
        {
          title: "مساحة اجتماعية مشتركة",
          text: "تخطيط منخفض الكثافة لمطعم وصالة Olive House والاستقبال والعافية والمناظر الطبيعية.",
        },
        {
          title: "إمكانات إيراد راقية",
          text: "نموذج ضيافة عالي القيمة للفئة الفاخرة؛ تقديرات الإيراد والاسترداد تتطلب دراسة جدوى منفصلة.",
        },
      ],
      galleryTitle: "فخامة لا تطغى على الطبيعة.",
      galleryText:
        "التصور يضم ست وحدات سفاري وأربع قباب مع جاكوزي خشبي خاص وOlive House وبركة طبيعية للمناظر.",
      ctaTitle: "احجز مكانك في مستقبل الاستثمار السياحي",
      ctaText:
        "تواصل معنا للاطلاع على الموقع ومعلومات التخطيط والاستخدام وسعر البيع ورؤية المشروع التصورية.",
      cta: "احجز زيارة خاصة للأرض",
      disclaimer:
        "هذا القسم تصور ترويجي توضيحي فقط. النشاط السياحي والسعة والإيرادات والمنشآت وأعمال التنسيق غير مضمونة. يتطلب التنفيذ دراسة خاصة بالأرض وآراء الجهات والمشاريع والموافقات والتراخيص، إضافة إلى عرض تجاري منفصل.",
    },
    tiny: {
      badge: "حياة عائلية خاصة وسط الطبيعة",
      title: "حياة آمنة وخاصة وهادئة لعائلتك في قلب الطبيعة",
      subtitle:
        "فرصة أرض خاصة مقدمة مع رؤية Twin Mobile Family Estate التصورية، بعيداً عن ضوضاء المدينة وبخصوصية عالية وبيئة ينمو فيها الأطفال بالقرب من الطبيعة.",
      button1: "استكشف مفهوم الحياة",
      button2: "تفاصيل بيع الأرض",
      whyTitle: "اصنع ملاذك العائلي الخاص",
      whyText:
        "العيش في الطبيعة خيار قوي لحياة عائلية أكثر هدوءاً وجودة. تُقدم هذه الأرض مع رؤية للحياة المتنقلة للمشترين الذين يقدرون خصوصية الأسرة ويرغبون في دراسة مساحة خاصة متكاملة وسط الطبيعة.",
      whyText2:
        "يجمع مفهوم Twin Mobile Family Estate وحدة رئيسية للعائلة ووحدة مستقلة للأطفال أو الضيوف وشرفة مجلس وحديقة خاصة واحدة. ويخضع الموقع والاستخدام النهائيان لمواصفات المركبات المختارة وموافقات الأرض.",
      visionTitle: "التخطيط التصوري وأبرز مزايا الأرض",
      cards: [
        {
          title: "خصوصية عائلية عالية",
          text: "حديقة خاصة متكاملة تحجب الرؤية الخارجية بواسطة الزراعة الكثيفة والفواصل الخشبية.",
        },
        {
          title: "حديقة خاصة واسعة",
          text: "مساحة لشرفة مجلس وحديقة زراعية ولعب الأطفال وجاكوزي خشبي والاسترخاء.",
        },
        {
          title: "طبيعة آمنة للأطفال",
          text: "مساحات خضراء للعب والدراسة تبقى مرئية من قلب منطقة المعيشة العائلية.",
        },
        {
          title: "حياة مرنة وأقل أثراً",
          text: "تصور يعتمد على وحدتين متنقلتين مستقلتين بعجلات، ويخضع لاعتماد الطراز والأرض.",
        },
      ],
      galleryTitle: "حل متنقل أكثر واقعية لعائلة واحدة.",
      galleryText:
        "وحدة رئيسية بطول 10.5 م ووحدة أطفال وضيوف بطول 8.5 م توفران حياة منفصلة ومتصلة حول منصة مجلس قابلة للإزالة.",
      ctaTitle: "رؤية حياتك العائلية الخاصة بانتظارك",
      ctaText:
        "تواصل معنا لرؤية الموقع أو طلب معلومات الأرض الموثقة أو ترتيب زيارة خاصة.",
      cta: "اطلب ملف معلومات الأرض",
      disclaimer:
        "هذا القسم تصور ترويجي توضيحي فقط. العجلات أو التسجيل لا تمنح تلقائياً حق الوضع أو السكن المستمر. اعتماد المركبات وتسجيلها ونقلها، وكذلك المنصات والجاكوزي والبركة والبنية التحتية والموقع، تخضع لآراء الجهات والموافقات والمشاريع المهنية وعرض تنفيذ منفصل.",
    },
    projectNoteTitle: "توضيح المشروع التصوري والسعر",
    projectNote:
      "جميع الصور والمخططات في هذا الموقع تصورات ترويجية توضيحية. السعر المعلن 50,000,000 ليرة تركية خاص بالأرض فقط. تطوير المشروع والخدمات المعمارية والهندسية والوحدات المتنقلة والنقل والمعدات والمناظر والتراخيص والتنفيذ غير مشمولة، ويمكن تسعيرها بشكل منفصل.",
    contactTitle: "اطلب العرض الخاص لأرض Turgut Reserve.",
    contactText:
      "تواصل معنا للحصول على معلومات الأرض الموثقة أو زيارة خاصة أو عرض تنفيذ مستقل لأي من التصورين.",
    whatsapp: "تواصل عبر واتساب",
    email: "إرسال بريد إلكتروني",
    footer: "TURGUT RESERVE · عرض أرض خاصة",
  },
};

const glampingImages = [
  "/media/glamping/01-luxury-safari-suite-hot-tub.webp",
  "/media/glamping/02-luxury-dome-suite-dusk.webp",
  "/media/glamping/03-olive-house-lounge.webp",
  "/media/glamping/04-approved-ultralux-masterplan.webp",
];

const tinyImages = [
  "/media/tiny/01-twin-mobile-family-estate-exterior.webp",
  "/media/tiny/02-main-family-unit-interior.webp",
  "/media/tiny/03-children-guest-unit-interior.webp",
  "/media/tiny/04-twin-mobile-family-estate-masterplan.webp",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectSection({ id, project, images, tone }) {
  return (
    <section className={`project project-${tone}`} id={id}>
      <div className="projectHero">
        <img src={images[0]} alt="" />
        <div className="projectOverlay" />
        <div className="projectHeroContent shell">
          <span className="badge">{project.badge}</span>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
          <div className="actions">
            <a className="button buttonLight" href={`#${id}-details`}>
              {project.button1} <Arrow />
            </a>
            <a className="button buttonGhostLight" href="#iletisim">
              {project.button2}
            </a>
          </div>
        </div>
      </div>

      <div className="projectBody shell" id={`${id}-details`}>
        <div className="editorial">
          <span className="sectionNumber">01</span>
          <div>
            <h3>{project.whyTitle}</h3>
            <p>{project.whyText}</p>
            <p>{project.whyText2}</p>
          </div>
        </div>

        <div className="featureHeading">
          <span className="sectionNumber">02</span>
          <h3>{project.visionTitle}</h3>
        </div>
        <div className="featureGrid">
          {project.cards.map((card, index) => (
            <article key={card.title}>
              <span>0{index + 1}</span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="galleryIntro">
          <span className="sectionNumber">03</span>
          <div>
            <h3>{project.galleryTitle}</h3>
            <p>{project.galleryText}</p>
          </div>
        </div>
        <div className="gallery">
          <figure className="galleryWide">
            <img src={images[1]} alt="" />
          </figure>
          <figure>
            <img src={images[2]} alt="" />
          </figure>
          <figure>
            <img src={images[3]} alt="" />
          </figure>
        </div>

        <aside className="disclaimer">{project.disclaimer}</aside>

        <div className="projectCta">
          <div>
            <span className="sectionNumber">04</span>
            <h3>{project.ctaTitle}</h3>
            <p>{project.ctaText}</p>
          </div>
          <a className="button buttonDark" href={WHATSAPP} target="_blank" rel="noreferrer">
            {project.cta} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [lang, setLang] = useState("tr");
  const heroVideo = useRef(null);
  const t = useMemo(() => copy[lang], [lang]);
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const video = heroVideo.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <main dir={dir} className={lang === "ar" ? "rtl" : ""}>
      <header className="siteHeader">
        <a className="brand" href="#arsa" aria-label="Turgut Reserve">
          <span>TR</span>
          <b>TURGUT RESERVE<small>PRIVATE LAND OFFERING</small></b>
        </a>
        <nav aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={t.navLinks[index]}>{item}</a>
          ))}
        </nav>
        <div className="language" aria-label={t.language}>
          {["tr", "en", "ar"].map((item) => (
            <button
              key={item}
              type="button"
              className={lang === item ? "active" : ""}
              onClick={() => setLang(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <section className="landHero" id="arsa">
        <div className="shell landIntro">
          <span className="eyebrow">{t.topEyebrow}</span>
          <h1>{t.topTitle}</h1>
          <p>{t.topText}</p>
        </div>
        <div className="videoFrame">
          <video
            ref={heroVideo}
            src="/media/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
            aria-label={t.videoLabel}
          />
          <span>{t.videoLabel}</span>
        </div>
        <div className="shell landFacts">
          <div>
            <small>2.671,63 m²</small>
            <span>MARMARİS · TURGUT</span>
          </div>
          <div className="priceBlock">
            <small>{t.priceLabel}</small>
            <strong>{t.price}</strong>
            <p>{t.priceNote}</p>
          </div>
        </div>
      </section>

      <section className="selector shell">
        <span className="eyebrow">{t.choose}</span>
        <h2>{t.chooseTitle}</h2>
        <div className="selectorGrid">
          <a href="#glamping">
            <img src={glampingImages[0]} alt="" />
            <div />
            <span>01</span>
            <h3>{t.glampingCard}</h3>
            <p>{t.glampingCardText}</p>
            <b>{t.explore} <Arrow /></b>
          </a>
          <a href="#tiny-house">
            <img src={tinyImages[0]} alt="" />
            <div />
            <span>02</span>
            <h3>{t.tinyCard}</h3>
            <p>{t.tinyCardText}</p>
            <b>{t.explore} <Arrow /></b>
          </a>
        </div>
      </section>

      <ProjectSection
        id="glamping"
        project={t.glamping}
        images={glampingImages}
        tone="gold"
      />
      <ProjectSection
        id="tiny-house"
        project={t.tiny}
        images={tinyImages}
        tone="olive"
      />

      <section className="projectNote shell">
        <span className="eyebrow">{t.projectNoteTitle}</span>
        <p>{t.projectNote}</p>
      </section>

      <section className="contact" id="iletisim">
        <div className="shell">
          <span className="eyebrow">PRIVATE ENQUIRY</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="actions">
            <a className="button buttonLight" href={WHATSAPP} target="_blank" rel="noreferrer">
              {t.whatsapp} <Arrow />
            </a>
            <a className="button buttonGhostLight" href="mailto:elvangokmenn@gmail.com">
              {t.email}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <span>{t.footer}</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
