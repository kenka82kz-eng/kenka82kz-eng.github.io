/* ============================================
   SAMGA-NIITS — main.js
   i18n: KK · RU · EN · TR · ZH · MN
   Form animation · Scroll effects
   ============================================ */

// ── TRANSLATIONS ──────────────────────────────
const T = {
  kk: {
    nav_about:"Компания", nav_market:"Нарық", nav_partnership:"Серіктестік", nav_team:"Команда", nav_contact:"Байланыс",
    hero_badge:"🇰🇿 Қазақстан · Орта Азия",
    hero_title_1:"Қазақстан нарығына —", hero_title_2:"стратегиялық серіктес",
    hero_sub:"Эксклюзивті дистрибьюция · Жергілікті брендинг · 12 000+ сату арнасы",
    stat_channels:"Сату арналары", stat_years:"Жыл тәжірибе", stat_ttm:"Нарыққа шығу",
    hero_cta1:"Кеңес алу", hero_cta2:"Серіктестік форматтары",
    about_eyebrow:"Компания туралы", about_title:"SAMGA-NIITS кім?",
    about_sub:"ТОО «SAMGA-NIITS» — Қазақстан нарығындағы стратегиялық дистрибьютор",
    about_c1_title:"Kasipker серіктесі", about_c1_text:"Орта Азия кәсіпкерлер одағының мүшесі.",
    about_c2_title:"Халықаралық тәжірибе", about_c2_text:"16+ жыл: Қытай, Түркия, ритейл, e-commerce, WMS.",
    about_c3_title:"Блогерлер желісі", about_c3_text:"Макро және микро инфлюенсерлермен желілік инфрақұрылым.",
    about_c4_title:"IT & E-commerce", about_c4_text:"CRM, ERP, WMS жүйелерін енгізу.",
    market_eyebrow:"Нарық мүмкіндіктері", market_title:"Неге Қазақстан? Неге қазір?",
    market_growth:"жылдық өсім", market_note:"Қазақстан косметика нарығы",
    fact1_title:"2 300+ сату нүктесі", fact1_text:"Тек Алматыда оффлайн және онлайн нүктелер",
    fact2_title:"Сенім артуда", fact2_text:"Орта Азиядa Қытай тауарына деген сұраныс жоғарылауда",
    fact3_title:"Жергілікті брендинг", fact3_text:"Сертификация + KZ брендинг = бәсекеге қабілетті баға",
    fact4_title:"600–1 200 белсенді нүкте", fact4_text:"12 000 арнаның 5–10% — ең консервативті бағалау",
    partner_eyebrow:"Серіктестік форматтары", partner_title:"Ынтымақтастық жолдары",
    partner_sub:"Сіздің бизнес-мақсатыңызға сай форматты таңдаңыз",
    pc_best:"Ең танымал",
    pc_badge_a:"Формат A", pc_title_a:"Эксклюзивті Дистрибьюция",
    pc_text_a:"Сіздің брендіңізді ҚР бойынша ресми таратушы. MOQ келісімі бойынша.",
    pc_a1:"ҚР аумағы бойынша эксклюзивті құқық", pc_a2:"Кеден және сертификаттау қолдауы", pc_a3:"3 айдан аз нарыққа шығу",
    pc_badge_b:"Формат Б", pc_title_b:"Жергілікті Өндіріс",
    pc_text_b:"Қазақстанда өндіру немесе буып-түю. KZ сертификациясымен нарыққа шығу.",
    pc_b1:"Контракт-буып-түю", pc_b2:"KZ сертификациясы", pc_b3:"Толық маркетинг қолдауы",
    pc_badge_c:"Формат В", pc_title_c:"OEM / Private Label",
    pc_text_c:"Біздің бренд астында Сіздің формуланы шығару.",
    pc_c1:"Өз брендіңізбен өнім", pc_c2:"Блогерлер желісі арқылы жарнама", pc_c3:"Серіктестік сертификаты",
    pc_cta:"Байланысу",
    steps_eyebrow:"Келесі қадамдар", steps_title:"Серіктестік жолы",
    step1_title:"Алғашқы кеңес", step1_text:"30 мин бейне-кеңес — нарық, MOQ, шарттарды талқылау",
    step2_title:"NDA қол қою", step2_text:"Конфиденциалдылық келісімі",
    step3_title:"Техникалық шарттар", step3_text:"Аумақ және дистрибьюция шарттары",
    step4_title:"Pilot жеткізілім", step4_text:"1 ай ішінде нарық реакциясы",
    step5_title:"Ресми келісімшарт", step5_text:"Серіктестік сертификаты",
    team_eyebrow:"Команда", team_title:"Жауапты тұлғалар",
    team_role1:"Жоба авторы, негізін қалаушы", team_bio1:"16+ жыл: ритейл, e-commerce, WMS, HoReCa, авто-бизнес. Қытай, Түркия нарықтарындағы тәжірибе.",
    team_role2:"Компания директоры", team_bio2:"Kasipker бизнес қауымдастығы. Байтақ жасылдар партиясы — Алматы филиалы директорының орынбасары.",
    contact_eyebrow:"Байланыс", contact_title:"Бізбен хабарласыңыз",
    contact_sub:"Сұрақтарыңызды жіберіңіз — 24 сағат ішінде жауап береміз",
    ci_phone:"Телефон", ci_city:"Қала",
    form_name:"Аты-жөні", form_company:"Компания", form_phone:"Телефон / WeChat",
    form_format:"Серіктестік форматы", form_select:"Таңдаңыз...",
    form_opt_a:"Формат A — Эксклюзивті Дистрибьюция", form_opt_b:"Формат Б — Жергілікті Өндіріс",
    form_opt_c:"Формат В — OEM / Private Label", form_opt_other:"Басқа сұрақ",
    form_message:"Хабарлама", form_placeholder:"Сіздің сұрақтарыңыз немесе өнім туралы ақпарат...",
    form_send:"Жіберу", form_success:"Хабарлама жіберілді! Жақын арада хабарласамыз.",
    footer_copy:"© 2025 SAMGA-NIITS LLP · samganiits.kz · Алматы, Қазақстан",
    footer_member:"Kasipker · Орта Азия кәсіпкерлер одағы мүшесі"
  },
  ru: {
    nav_about:"Компания", nav_market:"Рынок", nav_partnership:"Партнёрство", nav_team:"Команда", nav_contact:"Контакты",
    hero_badge:"🇰🇿 Казахстан · Центральная Азия",
    hero_title_1:"На рынок Казахстана —", hero_title_2:"стратегический партнёр",
    hero_sub:"Эксклюзивная дистрибуция · Локальный брендинг · 12 000+ каналов продаж",
    stat_channels:"Каналы продаж", stat_years:"Лет опыта", stat_ttm:"Выход на рынок",
    hero_cta1:"Получить консультацию", hero_cta2:"Форматы партнёрства",
    about_eyebrow:"О компании", about_title:"Кто такой SAMGA-NIITS?",
    about_sub:"ТОО «SAMGA-NIITS» — стратегический дистрибьютор на рынке Казахстана",
    about_c1_title:"Партнёр Kasipker", about_c1_text:"Член Союза предпринимателей Центральной Азии.",
    about_c2_title:"Международный опыт", about_c2_text:"16+ лет: Китай, Турция, ритейл, e-commerce, WMS.",
    about_c3_title:"Сеть блогеров", about_c3_text:"Активная инфраструктура с макро и микро-инфлюенсерами.",
    about_c4_title:"IT & E-commerce", about_c4_text:"Внедрение CRM, ERP, WMS систем.",
    market_eyebrow:"Возможности рынка", market_title:"Почему Казахстан? Почему сейчас?",
    market_growth:"ежегодный рост", market_note:"Рынок косметики Казахстана",
    fact1_title:"2 300+ точек продаж", fact1_text:"Только в Алматы офлайн и онлайн точки",
    fact2_title:"Доверие растёт", fact2_text:"Спрос на китайские товары в Центральной Азии растёт",
    fact3_title:"Локальный брендинг", fact3_text:"Сертификация + KZ брендинг = конкурентная цена",
    fact4_title:"600–1 200 активных точек", fact4_text:"5–10% от 12 000 каналов — консервативная оценка",
    partner_eyebrow:"Форматы партнёрства", partner_title:"Пути сотрудничества",
    partner_sub:"Выберите формат, соответствующий вашим бизнес-целям",
    pc_best:"Самый популярный",
    pc_badge_a:"Формат A", pc_title_a:"Эксклюзивная дистрибуция",
    pc_text_a:"Официальный дистрибьютор вашего бренда по всему Казахстану.",
    pc_a1:"Эксклюзивные права на территории РК", pc_a2:"Поддержка таможни и сертификации", pc_a3:"Выход на рынок менее чем за 3 месяца",
    pc_badge_b:"Формат Б", pc_title_b:"Локальное производство",
    pc_text_b:"Производство или упаковка в Казахстане. Выход с KZ сертификацией.",
    pc_b1:"Контрактная упаковка", pc_b2:"KZ сертификация", pc_b3:"Полная маркетинговая поддержка",
    pc_badge_c:"Формат В", pc_title_c:"OEM / Private Label",
    pc_text_c:"Выпуск вашей формулы под нашим брендом.",
    pc_c1:"Продукт под вашим брендом", pc_c2:"Реклама через сеть блогеров", pc_c3:"Сертификат партнёрства",
    pc_cta:"Связаться",
    steps_eyebrow:"Следующие шаги", steps_title:"Путь к партнёрству",
    step1_title:"Первая консультация", step1_text:"30 мин видео-консультация — рынок, MOQ, условия",
    step2_title:"Подписание NDA", step2_text:"Соглашение о конфиденциальности",
    step3_title:"Технические условия", step3_text:"Территория и условия дистрибуции",
    step4_title:"Пилотная поставка", step4_text:"Реакция рынка в течение 1 месяца",
    step5_title:"Официальный договор", step5_text:"Сертификат партнёрства",
    team_eyebrow:"Команда", team_title:"Ответственные лица",
    team_role1:"Автор проекта, основатель", team_bio1:"16+ лет: ритейл, e-commerce, WMS, HoReCa, авто-бизнес. Опыт на рынках Китая и Турции.",
    team_role2:"Директор компании", team_bio2:"Бизнес-ассоциация Kasipker. Заместитель директора филиала партии «Байтак» в Алматы.",
    contact_eyebrow:"Контакты", contact_title:"Свяжитесь с нами",
    contact_sub:"Отправьте запрос — ответим в течение 24 часов",
    ci_phone:"Телефон", ci_city:"Город",
    form_name:"Имя и фамилия", form_company:"Компания", form_phone:"Телефон / WeChat",
    form_format:"Формат партнёрства", form_select:"Выберите...",
    form_opt_a:"Формат A — Эксклюзивная дистрибуция", form_opt_b:"Формат Б — Локальное производство",
    form_opt_c:"Формат В — OEM / Private Label", form_opt_other:"Другой вопрос",
    form_message:"Сообщение", form_placeholder:"Ваши вопросы или информация о продукте...",
    form_send:"Отправить", form_success:"Сообщение отправлено! Свяжемся с вами в ближайшее время.",
    footer_copy:"© 2025 ТОО SAMGA-NIITS · samganiits.kz · Алматы, Казахстан",
    footer_member:"Kasipker · Член Союза предпринимателей Центральной Азии"
  },
  en: {
    nav_about:"Company", nav_market:"Market", nav_partnership:"Partnership", nav_team:"Team", nav_contact:"Contact",
    hero_badge:"🇰🇿 Kazakhstan · Central Asia",
    hero_title_1:"Your gateway to", hero_title_2:"the Kazakhstan market",
    hero_sub:"Exclusive Distribution · Local Branding · 12,000+ Sales Channels",
    stat_channels:"Sales Channels", stat_years:"Years Experience", stat_ttm:"Time to Market",
    hero_cta1:"Book a Consultation", hero_cta2:"Partnership Formats",
    about_eyebrow:"About Us", about_title:"Who is SAMGA-NIITS?",
    about_sub:"SAMGA-NIITS LLP — strategic distributor and trade partner for Kazakhstan",
    about_c1_title:"Kasipker Partner", about_c1_text:"Member of the Central Asian Entrepreneurs Union.",
    about_c2_title:"International Experience", about_c2_text:"16+ years: China, Turkey, retail, e-commerce, WMS.",
    about_c3_title:"Influencer Network", about_c3_text:"Active macro and micro-influencer infrastructure.",
    about_c4_title:"IT & E-commerce", about_c4_text:"CRM, ERP, WMS system implementation.",
    market_eyebrow:"Market Opportunities", market_title:"Why Kazakhstan? Why now?",
    market_growth:"annual growth", market_note:"Kazakhstan cosmetics market",
    fact1_title:"2,300+ sales points", fact1_text:"Online and offline points in Almaty alone",
    fact2_title:"Rising demand", fact2_text:"Chinese goods gaining trust across Central Asia",
    fact3_title:"Local branding", fact3_text:"Certification + KZ branding = competitive pricing",
    fact4_title:"600–1,200 active points", fact4_text:"5–10% of 12,000 channels — conservative estimate",
    partner_eyebrow:"Partnership Formats", partner_title:"Ways to Collaborate",
    partner_sub:"Choose the format that fits your business goals",
    pc_best:"Most Popular",
    pc_badge_a:"Format A", pc_title_a:"Exclusive Distribution",
    pc_text_a:"Official distributor of your brand across Kazakhstan.",
    pc_a1:"Exclusive rights across Kazakhstan", pc_a2:"Customs and certification support", pc_a3:"Market entry in under 3 months",
    pc_badge_b:"Format B", pc_title_b:"Local Production",
    pc_text_b:"Manufacturing or packaging in Kazakhstan with KZ certification.",
    pc_b1:"Contract packaging", pc_b2:"KZ certification", pc_b3:"Full marketing support",
    pc_badge_c:"Format C", pc_title_c:"OEM / Private Label",
    pc_text_c:"Your formula released under our brand.",
    pc_c1:"Product under your brand", pc_c2:"Advertising through influencer network", pc_c3:"Partnership certificate",
    pc_cta:"Get in Touch",
    steps_eyebrow:"Next Steps", steps_title:"Path to Partnership",
    step1_title:"Initial Consultation", step1_text:"30-min video call — market, MOQ, terms",
    step2_title:"Sign NDA", step2_text:"Confidentiality agreement",
    step3_title:"Technical Terms", step3_text:"Territory and distribution conditions",
    step4_title:"Pilot Delivery", step4_text:"Market response within 1 month",
    step5_title:"Official Contract", step5_text:"Partnership certificate",
    team_eyebrow:"Team", team_title:"Key People",
    team_role1:"Project Author & Founder", team_bio1:"16+ years: retail, e-commerce, WMS, HoReCa, automotive. China and Turkey markets.",
    team_role2:"Company Director", team_bio2:"Kasipker Business Association. Deputy Director, Baytaq Greens Party — Almaty Branch.",
    contact_eyebrow:"Contact", contact_title:"Get in Touch",
    contact_sub:"Send us a message — we respond within 24 hours",
    ci_phone:"Phone", ci_city:"City",
    form_name:"Full Name", form_company:"Company", form_phone:"Phone / WeChat",
    form_format:"Partnership Format", form_select:"Select...",
    form_opt_a:"Format A — Exclusive Distribution", form_opt_b:"Format B — Local Production",
    form_opt_c:"Format C — OEM / Private Label", form_opt_other:"Other Question",
    form_message:"Message", form_placeholder:"Your questions or product information...",
    form_send:"Send Message", form_success:"Message sent! We'll get back to you soon.",
    footer_copy:"© 2025 SAMGA-NIITS LLP · samganiits.kz · Almaty, Kazakhstan",
    footer_member:"Kasipker · Member of Central Asian Entrepreneurs Union"
  },
  tr: {
    nav_about:"Şirket", nav_market:"Pazar", nav_partnership:"Ortaklık", nav_team:"Ekip", nav_contact:"İletişim",
    hero_badge:"🇰🇿 Kazakistan · Orta Asya",
    hero_title_1:"Kazakistan pazarına —", hero_title_2:"stratejik ortağınız",
    hero_sub:"Özel Dağıtım · Yerel Markalama · 12.000+ Satış Kanalı",
    stat_channels:"Satış Kanalları", stat_years:"Yıl Deneyim", stat_ttm:"Pazara Çıkış",
    hero_cta1:"Danışmanlık Al", hero_cta2:"Ortaklık Formatları",
    about_eyebrow:"Şirket Hakkında", about_title:"SAMGA-NIITS Kimdir?",
    about_sub:"SAMGA-NIITS LLP — Kazakistan pazarında stratejik distribütör",
    about_c1_title:"Kasipker Ortağı", about_c1_text:"Orta Asya Girişimciler Birliği üyesi.",
    about_c2_title:"Uluslararası Deneyim", about_c2_text:"16+ yıl: Çin, Türkiye, perakende, e-ticaret, WMS.",
    about_c3_title:"Influencer Ağı", about_c3_text:"Makro ve mikro influencer'larla aktif ağ.",
    about_c4_title:"IT & E-ticaret", about_c4_text:"CRM, ERP, WMS sistemleri entegrasyonu.",
    market_eyebrow:"Pazar Fırsatları", market_title:"Neden Kazakistan? Neden şimdi?",
    market_growth:"yıllık büyüme", market_note:"Kazakistan kozmetik pazarı",
    fact1_title:"2.300+ satış noktası", fact1_text:"Sadece Almatı'da çevrimiçi ve çevrimdışı noktalar",
    fact2_title:"Güven artıyor", fact2_text:"Orta Asya'da Çin ürünlerine talep artıyor",
    fact3_title:"Yerel markalama", fact3_text:"Sertifikasyon + KZ markalama = rekabetçi fiyat",
    fact4_title:"600–1.200 aktif nokta", fact4_text:"12.000 kanalın %5–10'u — muhafazakar tahmin",
    partner_eyebrow:"Ortaklık Formatları", partner_title:"İş Birliği Yolları",
    partner_sub:"İş hedeflerinize uygun formatı seçin",
    pc_best:"En Popüler",
    pc_badge_a:"Format A", pc_title_a:"Özel Dağıtım",
    pc_text_a:"Markanızın Kazakistan genelinde resmi distribütörü.",
    pc_a1:"Kazakistan genelinde özel haklar", pc_a2:"Gümrük ve sertifikasyon desteği", pc_a3:"3 aydan kısa sürede pazara giriş",
    pc_badge_b:"Format B", pc_title_b:"Yerel Üretim",
    pc_text_b:"Kazakistan'da üretim veya ambalajlama. KZ sertifikasyonu ile pazar girişi.",
    pc_b1:"Sözleşmeli ambalajlama", pc_b2:"KZ sertifikasyonu", pc_b3:"Tam pazarlama desteği",
    pc_badge_c:"Format C", pc_title_c:"OEM / Özel Marka",
    pc_text_c:"Formülünüzü markamız altında üretiyoruz.",
    pc_c1:"Kendi markanızla ürün", pc_c2:"Influencer ağı ile reklam", pc_c3:"Ortaklık sertifikası",
    pc_cta:"İletişime Geç",
    steps_eyebrow:"Sonraki Adımlar", steps_title:"Ortaklık Yolu",
    step1_title:"İlk Görüşme", step1_text:"30 dk video görüşme — pazar, MOQ, koşullar",
    step2_title:"NDA İmzalama", step2_text:"Gizlilik sözleşmesi",
    step3_title:"Teknik Koşullar", step3_text:"Bölge ve dağıtım koşulları",
    step4_title:"Pilot Teslimat", step4_text:"1 ay içinde pazar tepkisi",
    step5_title:"Resmi Sözleşme", step5_text:"Ortaklık sertifikası",
    team_eyebrow:"Ekip", team_title:"Sorumlu Kişiler",
    team_role1:"Proje Yazarı & Kurucu", team_bio1:"16+ yıl: perakende, e-ticaret, WMS, HoReCa, otomotiv. Çin ve Türkiye pazarları.",
    team_role2:"Şirket Direktörü", team_bio2:"Kasipker İş Derneği. Baytaq Yeşiller Partisi Almatı Şubesi Direktör Yardımcısı.",
    contact_eyebrow:"İletişim", contact_title:"Bizimle İletişime Geçin",
    contact_sub:"Mesaj gönderin — 24 saat içinde yanıtlıyoruz",
    ci_phone:"Telefon", ci_city:"Şehir",
    form_name:"Ad Soyad", form_company:"Şirket", form_phone:"Telefon / WeChat",
    form_format:"Ortaklık Formatı", form_select:"Seçin...",
    form_opt_a:"Format A — Özel Dağıtım", form_opt_b:"Format B — Yerel Üretim",
    form_opt_c:"Format C — OEM / Özel Marka", form_opt_other:"Diğer Soru",
    form_message:"Mesaj", form_placeholder:"Sorularınız veya ürün bilgileri...",
    form_send:"Gönder", form_success:"Mesaj gönderildi! En kısa sürede iletişime geçeceğiz.",
    footer_copy:"© 2025 SAMGA-NIITS LLP · samganiits.kz · Almatı, Kazakistan",
    footer_member:"Kasipker · Orta Asya Girişimciler Birliği Üyesi"
  },
  zh: {
    nav_about:"公司", nav_market:"市场", nav_partnership:"合作", nav_team:"团队", nav_contact:"联系我们",
    hero_badge:"🇰🇿 哈萨克斯坦 · 中亚",
    hero_title_1:"进入哈萨克斯坦市场——", hero_title_2:"您的战略合作伙伴",
    hero_sub:"独家分销 · 本地品牌化 · 12,000+ 销售渠道",
    stat_channels:"销售渠道", stat_years:"年经验", stat_ttm:"市场准入",
    hero_cta1:"预约咨询", hero_cta2:"合作模式",
    about_eyebrow:"关于我们", about_title:"SAMGA-NIITS 是谁？",
    about_sub:"SAMGA-NIITS 有限责任公司——哈萨克斯坦市场战略分销商",
    about_c1_title:"Kasipker 合作伙伴", about_c1_text:"中亚企业家联盟成员。",
    about_c2_title:"国际经验", about_c2_text:"16年以上：中国、土耳其、零售、电商、WMS。",
    about_c3_title:"网红网络", about_c3_text:"与宏观和微观网络红人建立了活跃的营销基础设施。",
    about_c4_title:"IT & 电商", about_c4_text:"CRM、ERP、WMS系统部署。",
    market_eyebrow:"市场机遇", market_title:"为什么选择哈萨克斯坦？为什么是现在？",
    market_growth:"年增长率", market_note:"哈萨克斯坦化妆品市场",
    fact1_title:"2,300+ 销售网点", fact1_text:"仅阿拉木图就有线上和线下网点",
    fact2_title:"信任度提升", fact2_text:"中亚对中国商品的需求持续增长",
    fact3_title:"本地品牌化", fact3_text:"认证 + KZ 品牌化 = 有竞争力的定价",
    fact4_title:"600–1,200 活跃网点", fact4_text:"12,000 渠道的 5–10%——保守估计",
    partner_eyebrow:"合作模式", partner_title:"合作方式",
    partner_sub:"选择符合您业务目标的模式",
    pc_best:"最受欢迎",
    pc_badge_a:"模式 A", pc_title_a:"独家分销",
    pc_text_a:"成为您品牌在哈萨克斯坦全境的官方分销商。",
    pc_a1:"哈萨克斯坦全境独家权利", pc_a2:"海关和认证支持", pc_a3:"3个月内快速进入市场",
    pc_badge_b:"模式 B", pc_title_b:"本地生产",
    pc_text_b:"在哈萨克斯坦生产或包装，通过KZ认证进入市场。",
    pc_b1:"合同包装", pc_b2:"KZ 认证", pc_b3:"全面营销支持",
    pc_badge_c:"模式 C", pc_title_c:"OEM / 自有品牌",
    pc_text_c:"以我们的品牌推出您的配方产品。",
    pc_c1:"以您的品牌生产产品", pc_c2:"通过网红网络推广", pc_c3:"合作伙伴证书",
    pc_cta:"联系我们",
    steps_eyebrow:"后续步骤", steps_title:"合作路径",
    step1_title:"初步咨询", step1_text:"30分钟视频会议——市场、最低订购量、条款",
    step2_title:"签署保密协议", step2_text:"保密协议",
    step3_title:"技术条款", step3_text:"区域和分销条件",
    step4_title:"试点交付", step4_text:"1个月内获得市场反馈",
    step5_title:"正式合同", step5_text:"合作伙伴证书",
    team_eyebrow:"团队", team_title:"核心人员",
    team_role1:"项目创始人", team_bio1:"16年以上：零售、电商、WMS、餐饮、汽车行业。中国和土耳其市场经验。",
    team_role2:"公司总经理", team_bio2:"Kasipker 商业协会。拜塔克绿党阿拉木图分部副主任。",
    contact_eyebrow:"联系我们", contact_title:"与我们取得联系",
    contact_sub:"发送消息——24小时内回复",
    ci_phone:"电话", ci_city:"城市",
    form_name:"姓名", form_company:"公司", form_phone:"电话 / 微信",
    form_format:"合作模式", form_select:"请选择...",
    form_opt_a:"模式 A — 独家分销", form_opt_b:"模式 B — 本地生产",
    form_opt_c:"模式 C — OEM / 自有品牌", form_opt_other:"其他问题",
    form_message:"消息", form_placeholder:"您的问题或产品信息...",
    form_send:"发送", form_success:"消息已发送！我们将尽快与您联系。",
    footer_copy:"© 2025 SAMGA-NIITS LLP · samganiits.kz · 阿拉木图，哈萨克斯坦",
    footer_member:"Kasipker · 中亚企业家联盟成员"
  },
  mn: {
    nav_about:"Компани", nav_market:"Зах зээл", nav_partnership:"Түншлэл", nav_team:"Баг", nav_contact:"Холбоо барих",
    hero_badge:"🇰🇿 Казахстан · Төв Ази",
    hero_title_1:"Казахстаны зах зээлд —", hero_title_2:"стратегийн түнш",
    hero_sub:"Эксклюзив дистрибьюц · Орон нутгийн брэнд · 12,000+ борлуулалтын суваг",
    stat_channels:"Борлуулалтын суваг", stat_years:"Жилийн туршлага", stat_ttm:"Зах зээлд гарах",
    hero_cta1:"Зөвлөгөө авах", hero_cta2:"Түншлэлийн форматууд",
    about_eyebrow:"Компанийн тухай", about_title:"SAMGA-NIITS хэн бэ?",
    about_sub:"SAMGA-NIITS ХХК — Казахстаны зах зээл дэх стратегийн дистрибьютор",
    about_c1_title:"Kasipker түнш", about_c1_text:"Төв Азийн Бизнес Эрхлэгчдийн Холбооны гишүүн.",
    about_c2_title:"Олон улсын туршлага", about_c2_text:"16+ жил: Хятад, Турк, жижиглэн худалдаа, е-коммерс.",
    about_c3_title:"Блогерийн сүлжээ", about_c3_text:"Макро ба микро инфлюенсерүүдтэй идэвхтэй сүлжээ.",
    about_c4_title:"IT & Э-коммерс", about_c4_text:"CRM, ERP, WMS системийн нэвтрүүлэлт.",
    market_eyebrow:"Зах зээлийн боломжууд", market_title:"Яагаад Казахстан? Яагаад одоо?",
    market_growth:"жилийн өсөлт", market_note:"Казахстаны гоо сайхны зах зээл",
    fact1_title:"2,300+ борлуулалтын цэг", fact1_text:"Алматы хотод онлайн болон офлайн цэгүүд",
    fact2_title:"Итгэлцэл нэмэгдэж байна", fact2_text:"Төв Азид Хятадын бүтээгдэхүүнд итгэлцэл нэмэгдэж байна",
    fact3_title:"Орон нутгийн брэнд", fact3_text:"Гэрчилгээ + KZ брэнд = өрсөлдөхүйц үнэ",
    fact4_title:"600–1,200 идэвхтэй цэг", fact4_text:"12,000 сувгийн 5–10% — хамгийн бага тооцоо",
    partner_eyebrow:"Түншлэлийн форматууд", partner_title:"Хамтын ажиллагааны арга замууд",
    partner_sub:"Бизнесийн зорилгодоо тохирох форматыг сонгоно уу",
    pc_best:"Хамгийн алдартай",
    pc_badge_a:"Формат A", pc_title_a:"Эксклюзив Дистрибьюц",
    pc_text_a:"Таны брэндийн Казахстан даяарх албан ёсны дистрибьютор.",
    pc_a1:"Казахстан даяарх эксклюзив эрх", pc_a2:"Гааль ба сертификатчлалын дэмжлэг", pc_a3:"3 сараас бага хугацаанд зах зээлд гарах",
    pc_badge_b:"Формат Б", pc_title_b:"Орон нутгийн Үйлдвэрлэл",
    pc_text_b:"Казахстанд үйлдвэрлэл эсвэл савлагаа. KZ гэрчилгээтэй.",
    pc_b1:"Гэрээт савлагаа", pc_b2:"KZ гэрчилгээ", pc_b3:"Бүрэн маркетингийн дэмжлэг",
    pc_badge_c:"Формат В", pc_title_c:"OEM / Хувийн Брэнд",
    pc_text_c:"Таны томьёог манай брэндийн нэрэмжит гаргах.",
    pc_c1:"Таны брэндийн нэрэмжит бүтээгдэхүүн", pc_c2:"Блогерийн сүлжээгээр сурталчилгаа", pc_c3:"Түншлэлийн гэрчилгээ",
    pc_cta:"Холбоо барих",
    steps_eyebrow:"Дараагийн алхамууд", steps_title:"Түншлэлийн зам",
    step1_title:"Эхний зөвлөлдөлт", step1_text:"30 мин видео зөвлөлдөлт — зах зээл, MOQ, нөхцөлүүд",
    step2_title:"NDA гарын үсэг", step2_text:"Нууцлалын гэрээ",
    step3_title:"Техникийн нөхцөлүүд", step3_text:"Нутаг дэвсгэр ба дистрибьюцийн нөхцөлүүд",
    step4_title:"Туршилтын нийлүүлэлт", step4_text:"1 сарын дотор зах зээлийн хариу үйлдэл",
    step5_title:"Албан ёсны гэрээ", step5_text:"Түншлэлийн гэрчилгээ",
    team_eyebrow:"Баг", team_title:"Хариуцлагатай хүмүүс",
    team_role1:"Төслийн зохиогч ба үүсгэн байгуулагч", team_bio1:"16+ жил: жижиглэн худалдаа, э-коммерс, WMS, HoReCa.",
    team_role2:"Компанийн захирал", team_bio2:"Kasipker Бизнесийн Холбоо. Байтак Ногоон Намын Алматы салбарын захирлын орлогч.",
    contact_eyebrow:"Холбоо барих", contact_title:"Бидэнтэй холбоо барих",
    contact_sub:"Мессеж илгээнэ үү — 24 цагийн дотор хариу өгнө",
    ci_phone:"Утас", ci_city:"Хот",
    form_name:"Овог нэр", form_company:"Компани", form_phone:"Утас / WeChat",
    form_format:"Түншлэлийн формат", form_select:"Сонгоно уу...",
    form_opt_a:"Формат A — Эксклюзив Дистрибьюц", form_opt_b:"Формат Б — Орон нутгийн Үйлдвэрлэл",
    form_opt_c:"Формат В — OEM / Хувийн Брэнд", form_opt_other:"Бусад асуулт",
    form_message:"Мессеж", form_placeholder:"Таны асуулт эсвэл бүтээгдэхүүний мэдээлэл...",
    form_send:"Илгээх", form_success:"Мессеж илгээгдлээ! Тун удахгүй холбоо барина.",
    footer_copy:"© 2025 SAMGA-NIITS ХХК · samganiits.kz · Алматы, Казахстан",
    footer_member:"Kasipker · Төв Азийн Бизнес Эрхлэгчдийн Холбооны гишүүн"
  }
};

// ── CURRENT LANGUAGE ──────────────────────────
let currentLang = 'kk';

// ── SET LANGUAGE ──────────────────────────────
function setLang(lang) {
  currentLang = lang;
  const t = T[lang] || T.kk;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const active = document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`);
  if (active) active.classList.add('active');

  document.documentElement.lang = lang;
}

// ── NAVBAR SCROLL ─────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ──────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ── FORM SUBMIT ──────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const t       = T[currentLang] || T.kk;

  // Loading state
  btn.classList.add('loading');
  btn.disabled = true;

  // Simulate async send (replace with real API call)
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.classList.add('success');

    // Update button text
    const btnText = btn.querySelector('.btn-text');
    if (btnText) btnText.textContent = '✓ ' + (t.form_send || 'Sent');
    btn.querySelector('.btn-icon').style.display = 'none';

    // Show success message
    success.classList.remove('hidden');
    success.classList.add('flex');

    // Reset form
    document.getElementById('contactForm').reset();

    // Restore button after delay
    setTimeout(() => {
      btn.classList.remove('success');
      btn.disabled = false;
      btn.querySelector('.btn-icon').style.display = '';
      if (btnText) btnText.textContent = t.form_send || 'Жіберу';
      success.classList.add('hidden');
      success.classList.remove('flex');
    }, 5000);

  }, 1800);
}

// ── SCROLL REVEAL ────────────────────────────
// Skip animation for prefers-reduced-motion users; content stays visible by default (CSS)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('will-animate');
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('will-animate');
    revealObserver.observe(el);
  });
}

// ── STAGGER GRID ITEMS ───────────────────────
document.querySelectorAll('.about-card, .partner-card, .team-card, .step-item').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

// ── INIT ─────────────────────────────────────
setLang('kk');
