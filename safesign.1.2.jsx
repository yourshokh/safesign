import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Menu, Globe, Zap, FolderArchive, ShieldCheck, UploadCloud, Search, MessageSquare, Briefcase, TrendingUp, User, FileText, Lock, DollarSign, Users, BookOpen, Clock, Linkedin, Code, UserCheck, CheckCircle, ExternalLink, Paperclip
} from 'lucide-react';

// --- Gemini API Configuration ---
const AI_API_KEY = ""; // Placeholder for Canvas environment
const AI_MODEL = "gemini-2.5-flash-preview-09-2025";
const AI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent?key=${AI_API_KEY}`;
// --- End API Config ---

// Define NAV_LINKS globally
const NAV_LINKS = [
    { name: 'Problem & Solution', href: '#muammo' },
    { name: 'Features', href: '#features' },
    { name: 'AI Analyst', href: '#analyst' }, // Added new section
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
];

// --- Translation Dictionary (DICTIONARY) ---

const DICTIONARY = {
  en: {
    // Nav & General
    nav_problem_solution: 'Problem & Solution',
    nav_features: 'Features',
    nav_roadmap: 'Roadmap',
    nav_team: 'Team',
    nav_analyst: 'AI Analyst', // Added
    request_access: 'Request Access',
    // Hero
    hero_tagline: 'The New Standard in Legal Intelligence.',
    hero_title: 'Professional SafeSignAI for Uzbekistan’s Legal Sector.',
    hero_subtitle: 'Automate document review, organize chaotic case files, and access expert legal consultation—all in one secure platform.',
    hero_trial_cta: 'Start Free Trial',
    hero_demo_cta: 'Watch Demo',
    hero_scanning: 'Scanning Document...',
    hero_processing: 'Processing: Corporate Merger Agreement 2024',
    // Problem & Solution
    ps_title: 'Problem & Solution',
    ps_subtitle: "Addressing the core inefficiencies in Uzbekistan's legal ecosystem for both lawyers and entrepreneurs.",
    ps_problem_card_title: 'The Problem',
    ps_problem_dilemma_title: "Entrepreneur's Dilemma: Cost & Speed",
    ps_problem_dilemma_text: "Small business owners are forced to sign risky commercial contracts without proper legal help because hiring a traditional lawyer is often too expensive and time-consuming, exposing their ventures to unnecessary risk.",
    ps_problem_bottleneck_title: "Lawyer's Bottleneck: Capacity",
    ps_problem_bottleneck_text: "Experienced lawyers are limited to just 1–2 cases a day due to spending up to 8 hours manually reviewing a single lengthy document. This prevents them from scaling their practice or profitably serving the mass market.",
    ps_solution_card_title: 'The SafeSign AI Solution',
    ps_solution_vetting_title: 'AI-Powered Risk Vetting',
    ps_solution_vetting_text: "SafeSign AI instantly analyzes complex contracts, highlighting risk clauses, non-compliance issues, and required adjustments, reducing the 8-hour manual review to minutes.",
    ps_solution_access_title: 'Scalable Legal Access',
    ps_solution_access_text: "We empower lawyers to handle 10x more documents while offering entrepreneurs affordable, high-speed legal verification, bridging the gap between demand and capacity in the market.",
    // Features
    feat_title: 'Architected for Precision.',
    feat_subtitle: 'Integrate tradition with technology. Three core pillars for enterprise-level legal operations.',
    feat_analysis_title: 'Intelligent Analysis',
    feat_analysis_desc: 'Upload contracts and get instant summaries, risk detection, and clause breakdowns. Reduce review time by 80%.',
    feat_classification_title: 'Auto-Classification',
    feat_classification_desc: 'Drag & drop 100+ files. Our AI sorts them into Civil, Commercial, Tax, and Corporate folders automatically.',
    feat_verification_title: 'Expert Verification',
    feat_verification_desc: 'AI is just the start. Connect with verified lawyers for final review directly in the app.',
    // AI Analyst Section
    ai_title: 'AI Legal Analyst',
    ai_subtitle: 'Ask any legal or contractual question regarding Uzbek law, or about an uploaded document. Powered by Gemini.',
    ai_placeholder: 'E.g., What are the key compliance requirements for a limited liability company (LLC) in Uzbekistan?',
    ai_file_placeholder: 'Upload Document (PDF, PNG, JPG) for analysis', // NEW
    ai_file_selected: 'File selected: ', // NEW
    ai_cta: 'Analyze Question',
    ai_loading: 'Analyzing legal documents and current legislation...',
    ai_results: 'Analysis Results',
    ai_sources: 'Sources Used',
    ai_error: 'An error occurred during analysis. Please try again.',
    // Roadmap
    rm_title: 'Roadmap',
    rm_subtitle: "A clear plan for market penetration and scaling across Uzbekistan's legal landscape.",
    rm_step1_title: "Product Validation & MVP Release",
    rm_step1_desc: "Successful testing and ongoing partnership with Premium Legal LLC. Establishing core product stability and legal compliance.",
    rm_step2_title: "Strategic Partnership Expansion",
    rm_step2_desc: "Expand current partnerships to 5+ key corporate entities and law firms to diversify use cases and gather critical feedback.",
    rm_step3_title: "Mass Market Scaling",
    rm_step3_desc: "Expand services to 50+ companies and onboard 100+ paid users, leveraging simplified pricing for small business access.",
    rm_step4_title: "Full Regional Integration",
    rm_step4_desc: "Integrating with key government and commercial registers for real-time data verification and legal context.",
    rm_current_partner: 'Current Validation Partner:',
    // Team
    team_title: 'Our Team',
    team_subtitle: 'A blend of legal expertise, technological innovation, and executive leadership.',
    team_role_ceo: 'Chief Executive Officer (CEO)',
    team_role_cfo: 'Chief Financial Officer (CFO)',
    team_role_cto: 'Chief Technology Officer (CTO)',
    team_role_legal: 'Legal Counsel (TBD)',
    team_desc_doston: 'Driving the strategic vision and market penetration of SafeSign AI in the Uzbekistan legal sector.',
    team_desc_rustamxon: 'Expert in financial modeling and managing growth capital, ensuring the company\'s fiscal health and scalability.',
    team_desc_shohjahon: 'Leading the development of the proprietary legal LLM and secure cloud infrastructure.',
    team_desc_sardor: 'Ensuring AI output adheres to Uzbek legal standards and provides critical domain expertise. (Role currently pending).',
    team_linkedin: 'LinkedIn Profile',
    team_pending: 'Profile Pending',
    // Footer
    footer_mission: 'The professional standard for legal intelligence, built for the rapidly evolving Uzbekistan market.',
    footer_product: 'Product',
    footer_company: 'Company',
    footer_legal: 'Legal',
    footer_about: 'About Us',
    footer_careers: 'Careers',
    footer_partnerships: 'Partnerships',
    footer_contact: 'Contact',
    footer_terms: 'Terms of Service',
    footer_privacy: 'Privacy Policy',
    footer_security: 'Security Disclosure',
    footer_copyright: '© 2025 SafeSign AI. Built for the Future of Uzbekistan.',
  },
  // Russian Translations
  ru: {
    // Nav & General
    nav_problem_solution: 'Проблема и Решение',
    nav_features: 'Возможности',
    nav_roadmap: 'Дорожная Карта',
    nav_team: 'Команда',
    nav_analyst: 'ИИ Аналитик', // Added
    request_access: 'Запросить Доступ',
    // Hero
    hero_tagline: 'Новый Стандарт в Юридическом Интеллекте.',
    hero_title: 'SafeSignAI для Юридического Сектора Узбекистана.',
    hero_subtitle: 'Автоматизируйте проверку документов, систематизируйте хаотичные дела и получите доступ к экспертной юридической консультации — всё на одной защищенной платформе.',
    hero_trial_cta: 'Начать Бесплатный Тест',
    hero_demo_cta: 'Посмотреть Демо',
    hero_scanning: 'Сканирование Документа...',
    hero_processing: 'Обработка: Корпоративное Соглашение о Слиянии 2024',
    // Problem & Solution
    ps_title: 'Проблема и Решение',
    ps_subtitle: 'Решение основных проблем неэффективности в правовой экосистеме Узбекистана как для юристов, так и для предпринимателей.',
    ps_problem_card_title: 'Проблема',
    ps_problem_dilemma_title: 'Дилемма Предпринимателя: Стоимость и Скорость',
    ps_problem_dilemma_text: 'Владельцы малого бизнеса вынуждены подписывать рискованные коммерческие контракты без юридической помощи, поскольку наем традиционного юриста часто слишком дорог и занимает много времени, что подвергает их предприятия ненужному риску.',
    ps_problem_bottleneck_title: 'Узкое Место Юриста: Пропускная Способность',
    ps_problem_bottleneck_text: 'Опытные юристы ограничены 1–2 делами в день из-за того, что тратят до 8 часов на ручную проверку одного длинного документа. Это мешает им масштабировать свою практику или прибыльно обслуживать массовый рынок.',
    ps_solution_card_title: 'Решение SafeSign AI',
    ps_solution_vetting_title: 'ИИ-Проверка Рисков',
    ps_solution_vetting_text: 'SafeSign AI мгновенно анализирует сложные контракты, выявляя рискованные положения, проблемы с соблюдением требований и необходимые корректировки, сокращая ручную проверку с 8 часов до минут.',
    ps_solution_access_title: 'Масштабируемый Юридический Доступ',
    ps_solution_access_text: 'Мы даем юристам возможность обрабатывать в 10 раз больше документов, предлагая предпринимателям доступную, быструю юридическую проверку, устраняя разрыв между спросом и предложением на рынке.',
    // Features
    feat_title: 'Создано для Точности.',
    feat_subtitle: 'Объединение традиций с технологиями. Три ключевых столпа для юридических операций корпоративного уровня.',
    feat_analysis_title: 'Интеллектуальный Анализ',
    feat_analysis_desc: 'Загружайте контракты и мгновенно получайте резюме, обнаружение рисков и анализ положений. Сократите время проверки на 80%.',
    feat_classification_title: 'Автоматическая Классификация',
    feat_classification_desc: 'Перетащите 100+ файлов. Наш ИИ автоматически сортирует их по папкам: Гражданские, Коммерческие, Налоговые и Корпоративные.',
    feat_verification_title: 'Экспертная Проверка',
    feat_verification_desc: 'ИИ — это только начало. Свяжитесь с проверенными юристами для окончательной проверки прямо в приложении.',
    // AI Analyst Section
    ai_title: 'ИИ Юридический Аналитик',
    ai_subtitle: 'Задайте любой юридический или договорной вопрос, касающийся законодательства Узбекистана, или об загруженном документе. На базе Gemini.',
    ai_placeholder: 'Например, Каковы основные требования соответствия для ООО в Узбекистане?',
    ai_file_placeholder: 'Загрузить Документ (PDF, PNG, JPG) для анализа', // NEW
    ai_file_selected: 'Выбранный файл: ', // NEW
    ai_cta: 'Анализировать Вопрос',
    ai_loading: 'Анализ юридических документов и текущего законодательства...',
    ai_results: 'Результаты Анализа',
    ai_sources: 'Используемые Источники',
    ai_error: 'Произошла ошибка при анализе. Пожалуйста, попробуйте снова.',
    // Roadmap
    rm_title: 'Дорожная Карта',
    rm_subtitle: 'Четкий план выхода на рынок и масштабирования в правовом пространстве Узбекистана.',
    rm_step1_title: "Проверка Продукта и Выпуск MVP",
    rm_step1_desc: "Успешное тестирование и текущее партнерство с Premium Legal LLC. Обеспечение основной стабильности продукта и соответствия законодательству.",
    rm_step2_title: "Расширение Стратегического Партнерства",
    rm_step2_desc: "Расширение текущего партнерства до 5+ ключевых корпоративных структур и юридических фирм для диверсификации вариантов использования и сбора критических отзывов.",
    rm_step3_title: "Массовое Масштабирование Рынка",
    rm_step3_desc: "Расширение услуг до 50+ компаний и привлечение 100+ платных пользователей, используя упрощенное ценообразование для доступа малого бизнеса.",
    rm_step4_title: "Полная Региональная Интеграция",
    rm_step4_desc: "Интеграция с ключевыми государственными и коммерческими реестрами для проверки данных в реальном времени и юридического контекста.",
    rm_current_partner: 'Текущий Партнер по Валидации:',
    // Team
    team_title: 'Наша Команда',
    team_subtitle: 'Сочетание юридической экспертизы, технологических инноваций и исполнительного руководства.',
    team_role_ceo: 'Главный Исполнительный Директор (CEO)',
    team_role_cfo: 'Главный Финансовый Директор (CFO)',
    team_role_cto: 'Главный Технический Директор (CTO)',
    team_role_legal: 'Юрисконсульт (Ожидается)',
    team_desc_doston: 'Определение стратегического видения и проникновения SafeSign AI на юридический рынок Узбекистана.',
    team_desc_rustamxon: 'Эксперт в финансовом моделировании и управлении капиталом роста, обеспечивающий финансовое здоровье и масштабируемость компании.',
    team_desc_shohjahon: 'Руководство разработкой проприетарной юридической LLM и защищенной облачной инфраструктуры.',
    team_desc_sardor: 'Обеспечение соответствия результатов работы ИИ узбекским правовым стандартам и предоставление критического отраслевого опыта. (Роль в настоящее время не заполнена).',
    team_linkedin: 'Профиль LinkedIn',
    team_pending: 'Профиль Ожидается',
    // Footer
    footer_mission: 'Профессиональный стандарт юридического интеллекта, созданный для быстро развивающегося рынка Узбекистана.',
    footer_product: 'Продукт',
    footer_company: 'Компания',
    footer_legal: 'Юридический Отдел',
    footer_about: 'О Нас',
    footer_careers: 'Карьера',
    footer_partnerships: 'Партнерство',
    footer_contact: 'Контакты',
    footer_terms: 'Условия Обслуживания',
    footer_privacy: 'Политика Конфиденциальности',
    footer_security: 'Раскрытие Информации о Безопасности',
    footer_copyright: '© 2025 SafeSign AI. Создано для Будущего Узбекистана.',
  },
  // Uzbek Translations (Latin Script, for consistency)
  uz: {
    // Nav & General
    nav_problem_solution: 'Muammo va Yechim',
    nav_features: 'Imkoniyatlar',
    nav_roadmap: 'Yo\'l Xaritasi',
    nav_team: 'Jamoa',
    nav_analyst: 'AI Tahlilchi', // Added
    request_access: 'Kirish So\'rash',
    // Hero
    hero_tagline: 'Yuridik Aqlning Yangi Standarti.',
    hero_title: 'O\'zbekistonning Yuridik Sektori Uchun SafeSignAI.',
    hero_subtitle: 'Hujjatlarni ko\'rib chiqishni avtomatlashtiring, tartibsiz ishlarni tartibga soling va ekspert yuridik maslahatiga ega bo\'ling — barchasi bitta xavfsiz platformada.',
    hero_trial_cta: 'Bepul Sinovni Boshlash',
    hero_demo_cta: 'Demoni Ko\'rish',
    hero_scanning: 'Hujjat Skanerlanmoqda...',
    hero_processing: 'Qayta Ishlanmoqda: Korporativ Birlashish Shartnomasi 2024',
    // Problem & Solution
    ps_title: 'Muammo va Yechim',
    ps_subtitle: 'O\'zbekistonning huquqiy ekotizimidagi ham advokatlar, ham tadbirkorlar uchun asosiy samarasizlik muammolarini hal qilish.',
    ps_problem_card_title: 'Muammo',
    ps_problem_dilemma_title: 'Tadbirkor Dilemmasi: Narx va Tezlik',
    ps_problem_dilemma_text: 'Kichik biznes egalari an\'anaviy advokatni yollash juda qimmat va uzoq vaqt talab qilgani sababli, yuridik yordamisiz xavfli tijorat shartnomalarini imzolashga majbur bo\'lmoqdalar, bu esa ularning korxonalarini keraksiz xavf ostiga qo\'yadi.',
    ps_problem_bottleneck_title: 'Advokatning Cheklovi: Imkoniyat',
    ps_problem_bottleneck_text: 'Tajribali advokatlar bitta uzun hujjatni qo\'lda ko\'rib chiqishga 8 soatgacha vaqt sarflagani uchun kuniga atigi 1–2 ta ish bilan cheklanadi. Bu ularning amaliyotini kengaytirishga yoki ommaviy bozorga foyda bilan xizmat ko\'rsatishga to\'sqinlik qiladi.',
    ps_solution_card_title: 'SafeSign AI Yechimi',
    ps_solution_vetting_title: 'AI Yordamida Xavfni Tekshirish',
    ps_solution_vetting_text: 'SafeSign AI murakkab shartnomalarni bir zumda tahlil qiladi, xavfli bandlarni, mos kelmaslik muammolarini va zarur tuzatishlarni ko\'rsatadi, 8 soatlik qo\'lda ko\'rib chiqish vaqtini daqiqalarga qisqartiradi.',
    ps_solution_access_title: 'Miqyosli Yuridik Kirish',
    ps_solution_access_text: 'Biz advoktlarga 10 barobar ko\'p hujjatlarni ko\'rib chiqish imkoniyatini beramiz, shu bilan birga tadbirkorlarga arzon, yuqori tezlikdagi yuridik tekshiruvni taklif qilib, bozordagi talab va imkoniyatlar o\'rtasidagi tafovutni bartaraf etamiz.',
    // Features
    feat_title: 'An\'anaviy va Zamonaviy Texnologiyalar Integratsiyasi.',
    feat_subtitle: 'Korporativ darajadagi yuridik operatsiyalar uchun uchta asosiy ustun.',
    feat_analysis_title: 'Intellektual Tahlil',
    feat_analysis_desc: 'Shartnomalarni yuklang va bir zumda xulosalar, xavfni aniqlash va bandlar tahlilini oling. Ko\'rib chiqish vaqtini 80% ga qisqartiring.',
    feat_classification_title: 'Avto-Tasiflash',
    feat_classification_desc: '100+ faylni torting va tashlang. Bizning AI ularni avtomatik ravishda Fuqarolik, Tijorat, Soliq va Korporativ jildlarga ajratadi.',
    feat_verification_title: 'Ekspert Tekshiruvi',
    feat_verification_desc: 'AI faqat boshlanishi. Ilovada to\'g\'ridan-to\'g\'ri tasdiqlangan advokatlar bilan yakuniy ko\'rib chiqish uchun bog\'laning.',
    // AI Analyst Section
    ai_title: 'AI Yuridik Tahlilchi',
    ai_subtitle: 'O\'zbekiston qonunchiligiga oid har qanday yuridik yoki shartnoma savolini bering, yoki yuklangan hujjat bo\'yicha. Gemini yordamida.',
    ai_placeholder: 'Masalan, O\'zbekistonda MChJ uchun asosiy muvofiqlik talablari qanday?',
    ai_file_placeholder: 'Tahlil uchun Hujjatni Yuklang (PDF, PNG, JPG)', // NEW
    ai_file_selected: 'Tanlangan fayl: ', // NEW
    ai_cta: 'Savolni Tahlil Qilish',
    ai_loading: 'Yuridik hujjatlar va joriy qonunchilik tahlil qilinmoqda...',
    ai_results: 'Tahlil Natijalari',
    ai_sources: 'Foydalanilgan Manbalar',
    ai_error: 'Tahlil jarayonida xato yuz berdi. Iltimos, qayta urinib ko\'ring.',
    // Roadmap
    rm_title: 'Yo\'l Xaritasi',
    rm_subtitle: 'O\'zbekistonning huquqiy makonida bozorga kirish va kengayish uchun aniq reja.',
    rm_step1_title: "Mahsulotni Tasdiqlash va MVP Chiqarish",
    rm_step1_desc: "Premium Legal MChJ bilan muvaffaqiyatli sinov va davom etayotgan hamkorlik. Asosiy mahsulot barqarorligi va qonuniy muvofiqligini ta\'minlash.",
    rm_step2_title: "Strategik Hamkorlikni Kengaytirish",
    rm_step2_desc: "Foydalanish holatlarini diversifikatsiya qilish va muhim fikr-mulohazalarni yig\'ish uchun joriy hamkorlikni 5+ asosiy korporativ tuzilmalar va yuridik firmalarga kengaytirish.",
    rm_step3_title: "Ommaviy Bozorni Miqyoslash",
    rm_step3_desc: "Kichik biznes kirishi uchun soddalashtirilgan narxlashdan foydalanib, xizmatlarni 50+ kompaniyaga kengaytirish va 100+ pullik foydalanuvchini jalb qilish.",
    rm_step4_title: "To\'liq Mintaqaviy Integratsiya",
    rm_step4_desc: "Haqiqiy vaqt rejimida ma\'lumotlarni tekshirish va yuridik kontekst uchun asosiy davlat va tijorat reestrlariga integratsiya qilish.",
    rm_current_partner: 'Joriy Tasdiqlash Hamkori:',
    // Team
    team_title: 'Bizning Jamoamiz',
    team_subtitle: 'Yuridik ekspertiza, texnologik innovatsiyalar va ijro etuvchi rahbarlikning uyg\'unligi.',
    team_role_ceo: 'Bosh Ijrochi Direktor (CEO)',
    team_role_cfo: 'Bosh Moliyaviy Direktor (CFO)',
    team_role_cto: 'Bosh Texnologiya Direktori (CTO)',
    team_role_legal: 'Yuriskonsult (Kutilmoqda)',
    team_desc_doston: 'SafeSign AI ning O\'zbekiston yuridik sektoridagi strategik ko\'rinishi va bozorga kirishini boshqarish.',
    team_desc_rustamxon: 'Moliyaviy modellashtirish va o\'sish kapitalini boshqarish bo\'yicha ekspert, kompaniyaning moliyaviy sog\'lig\'i va miqyosini ta\'minlash.',
    team_desc_shohjahon: 'Xususiy yuridik LLM va xavfsiz bulut infratuzilmasini ishlab chiqishga rahbarlik qilish.',
    team_desc_sardor: 'AI natijasining O\'zbekiston huquqiy standartlariga mos kelishini ta\'minlash va muhim domen tajribasini taqdim etish. (Rol hozirda kutilmoqda).',
    team_linkedin: 'LinkedIn Profili',
    team_pending: 'Profil Kutilmoqda',
    // Footer
    footer_mission: 'Tez rivojlanayotgan O\'zbekiston bozori uchun yaratilgan yuridik aqlning professional standarti.',
    footer_product: 'Mahsulot',
    footer_company: 'Kompaniya',
    footer_legal: 'Yuridik',
    footer_about: 'Biz Haqimizda',
    footer_careers: 'Karyera',
    footer_partnerships: 'Hamkorliklar',
    footer_contact: 'Aloqa',
    footer_terms: 'Xizmat Ko\'rsatish Shartlari',
    footer_privacy: 'Maxfiylik Siyosati',
    footer_security: 'Xavfsizlik Ma\'lumoti',
    footer_copyright: '© 2025 SafeSign AI. O\'zbekiston Kelajagi Uchun Yaratilgan.',
  },
};

// Simple translation function
const useTranslation = (lang) => (key) => {
    return DICTIONARY[lang][key] || DICTIONARY['en'][key] || key;
};

// --- Framer Motion Variants ---

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- Custom Components ---

const Navbar = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const LanguageSelector = ({ mobile = false }) => (
    <div className={`flex items-center space-x-2 ${mobile ? 'justify-start' : 'justify-center'}`}>
        <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${lang === 'en' ? 'bg-amber-500 text-slate-950' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
        >
            EN
        </button>
        <button
            onClick={() => setLang('ru')}
            className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${lang === 'ru' ? 'bg-amber-500 text-slate-950' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
        >
            RU
        </button>
        <button
            onClick={() => setLang('uz')}
            className={`px-3 py-1 rounded-full text-sm font-bold transition-colors ${lang === 'uz' ? 'bg-amber-500 text-slate-950' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
        >
            UZ
        </button>
    </div>
  );

  const getNavLinkText = (key) => {
    const map = {
        '#muammo': t('nav_problem_solution'),
        '#features': t('nav_features'),
        '#analyst': t('nav_analyst'), // New link
        '#roadmap': t('nav_roadmap'),
        '#team': t('nav_team'),
    };
    // Find the link object based on href and return the translated name
    return map[key] || key;
  };

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/70 border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-2xl font-bold font-playfair text-white tracking-wider"
          variants={itemVariants}
        >
          SafeSign AI
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-8 items-center text-sm font-inter">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href} // Use href as key for stability
              href={link.href}
              className="text-white/70 hover:text-amber-500 transition duration-300"
            >
              {getNavLinkText(link.href)}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
            {/* Language Switcher */}
            <LanguageSelector />
            {/* CTA Button */}
            <motion.button
              className="px-5 py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-950 transition duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('request_access')}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white/80" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-slate-950/90 border-b border-white/10 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-8 py-3 text-white/80 hover:bg-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {getNavLinkText(link.href)}
            </a>
          ))}
          <div className="mt-4 px-8 space-y-4">
            <div className='flex items-center space-x-2 pt-3'>
              <Globe className="w-5 h-5 text-white/70" />
              <LanguageSelector mobile={true} />
            </div>
            <motion.button
              className="w-full px-5 py-2 border border-amber-500 text-amber-500 rounded-lg hover:bg-amber-500 hover:text-slate-950 transition duration-300 font-medium"
              whileTap={{ scale: 0.98 }}
            >
              {t('request_access')}
            </motion.button>
          </div>
        </div>
      )}
    </motion.header>
  );
};

const HeroSection = ({ t }) => (
  <motion.section
    className="pt-24 pb-16 md:pt-36 md:pb-24 text-center max-w-7xl mx-auto px-6 lg:px-8"
    variants={staggerContainer}
    initial="hidden"
    animate="visible"
  >
    <motion.p className="text-sm uppercase tracking-[0.3em] font-inter text-amber-500 mb-4" variants={itemVariants}>
      {t('hero_tagline')}
    </motion.p>
    <motion.h1 className="font-playfair text-5xl md:text-7xl font-extrabold text-white mb-6 max-w-4xl mx-auto" variants={itemVariants}>
      {t('hero_title')}
    </motion.h1>
    <motion.p className="text-xl md:text-2xl font-inter text-white/70 mb-10 max-w-3xl mx-auto" variants={itemVariants}>
      {t('hero_subtitle')}
    </motion.p>
    <motion.div className="flex justify-center space-x-6 mb-20" variants={itemVariants}>
      <motion.button
        className="px-8 py-3 text-lg bg-amber-500 text-slate-950 rounded-lg font-bold shadow-lg shadow-amber-500/30 hover:bg-amber-600 transition duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('hero_trial_cta')}
      </motion.button>
      <motion.button
        className="px-8 py-3 text-lg border border-white/30 text-white/90 rounded-lg font-medium hover:bg-white/10 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('hero_demo_cta')}
      </motion.button>
    </motion.div>

    {/* Placeholder Visual (Abstract UI Dashboard) */}
    <motion.div
      className="max-w-5xl mx-auto border border-white/10 rounded-xl shadow-2xl shadow-slate-900/50 bg-slate-900 overflow-hidden"
      variants={itemVariants}
    >
      <div className="p-4 border-b border-white/10 flex justify-between items-center text-white/50 text-sm">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="font-mono">safesign.ai/dashboard</span>
        <div></div>
      </div>
      <div className="aspect-[16/9] p-10 flex items-center justify-center relative">
        <div className="w-full h-full bg-slate-950/50 rounded-lg border border-white/5 backdrop-blur-sm relative">
          {/* Mock Document/Scanning Area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FileText className="w-16 h-16 text-white/10" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500/50" style={{ transformOrigin: 'left', animation: 'scan 3s infinite linear' }}></div>
          </div>
          <div className="p-8 text-left">
            <h3 className="text-3xl font-playfair text-white/80">{t('hero_scanning')}</h3>
            <p className="text-white/50 mt-2">{t('hero_processing')}</p>
          </div>
        </div>
      </div>
    </motion.div>
    {/* Keyframe for scanning animation (CSS in JS) */}
    <style>{`
      @keyframes scan {
        0% { transform: scaleX(0); opacity: 0.5; }
        50% { transform: scaleX(1); opacity: 1; }
        100% { transform: scaleX(0); opacity: 0.5; }
      }
    `}</style>
  </motion.section>
);

const ProblemSolutionSection = ({ t }) => (
  <section id="muammo" className="py-24 md:py-32 bg-slate-950/90 border-t border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <motion.h2
        className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        {t('ps_title')}
      </motion.h2>
      <p className="text-xl font-inter text-white/60 mb-16 text-center max-w-3xl mx-auto">
        {t('ps_subtitle')}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* The Problem Card */}
        <motion.div
          className="bg-slate-900/80 border border-red-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-red-900/20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Clock className="w-8 h-8 text-red-500 flex-shrink-0" />
            <h3 className="font-playfair text-3xl font-bold text-white">{t('ps_problem_card_title')}</h3>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-red-500/50 pl-4">
              <h4 className="text-lg font-bold text-white mb-2">{t('ps_problem_dilemma_title')}</h4>
              <p className="text-white/70">
                {t('ps_problem_dilemma_text')}
              </p>
            </div>
            <div className="border-l-4 border-red-500/50 pl-4">
              <h4 className="text-lg font-bold text-white mb-2">{t('ps_problem_bottleneck_title')}</h4>
              <p className="text-white/70">
                {t('ps_problem_bottleneck_text')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Solution Card */}
        <motion.div
          className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-amber-900/20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <BookOpen className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <h3 className="font-playfair text-3xl font-bold text-white">{t('ps_solution_card_title')}</h3>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-amber-500/50 pl-4">
              <h4 className="text-lg font-bold text-white mb-2">{t('ps_solution_vetting_title')}</h4>
              <p className="text-white/70">
                {t('ps_solution_vetting_text')}
              </p>
            </div>
            <div className="border-l-4 border-amber-500/50 pl-4">
              <h4 className="text-lg font-bold text-white mb-2">{t('ps_solution_access_title')}</h4>
              <p className="text-white/70">
                {t('ps_solution_access_text')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureGrid = ({ t }) => {
    // Re-create the data locally to use the translation function
    const localFeaturesData = [
        { title: t('feat_analysis_title'), description: t('feat_analysis_desc'), icon: Zap, size: "col-span-2 row-span-2 p-10", delay: 0.1 },
        { title: t('feat_classification_title'), description: t('feat_classification_desc'), icon: FolderArchive, size: "col-span-1 row-span-1 p-6", delay: 0.3 },
        { title: t('feat_verification_title'), description: t('feat_verification_desc'), icon: ShieldCheck, size: "col-span-1 row-span-1 p-6", delay: 0.4 },
    ];

    return (
        <section id="features" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    {t('feat_title')}
                </motion.h2>
                <motion.p
                    className="text-xl font-inter text-white/60 mb-16 text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    {t('feat_subtitle')}
                </motion.p>

                <motion.div
                    className="grid grid-cols-2 grid-rows-2 gap-6 h-[700px] md:h-[500px]"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {localFeaturesData.map((feature, index) => {
                    const isLarge = index === 0;
                    // Destructure the icon component
                    const IconComponent = feature.icon;
                    return (
                        <motion.div
                        key={feature.title}
                        className={`${feature.size} ${isLarge ? 'bg-slate-900/80' : 'bg-slate-900/60'} border border-white/10 rounded-3xl backdrop-blur-sm flex ${isLarge ? 'flex-col justify-between' : 'flex-col space-y-4'}`}
                        variants={itemVariants}
                        transition={{ delay: feature.delay }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                        >
                        <div className={isLarge ? '' : 'flex-shrink-0'}>
                            {/* Render the Icon component */}
                            <IconComponent className={`w-10 h-10 ${isLarge ? 'text-amber-500' : 'text-amber-500/70'} mb-4`} />
                        </div>
                        <div>
                            <h3 className="font-playfair text-3xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className={`font-inter ${isLarge ? 'text-xl' : 'text-base'} text-white/70`}>
                            {feature.description}
                            </p>
                        </div>
                        </motion.div>
                    );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const AILegalAnalystSection = ({ t }) => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(null);
    const [sources, setSources] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // NEW State for file handling
    const [file, setFile] = useState(null);
    const [base64File, setBase64File] = useState(null);

    const SYSTEM_INSTRUCTION = "You are an expert AI legal analyst specializing in the laws and regulations of Uzbekistan. Provide concise, accurate, and grounded answers to legal and compliance queries. If an uploaded document is provided, prioritize analyzing the document content. Your tone should be professional and informative. If you use external information, ensure you cite the source. Start your answer directly without preamble.";

    // Function to handle file input
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            setFile(null);
            setBase64File(null);
            return;
        }

        // Simple validation for allowed types
        const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedTypes.includes(selectedFile.type)) {
            setError("Unsupported file type. Please upload PDF, PNG, or JPG.");
            setFile(null);
            setBase64File(null);
            return;
        }

        setError(null);
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setBase64File({
                data: base64String,
                mimeType: selectedFile.type,
            });
        };
        reader.onerror = (error) => {
            console.error("Error reading file:", error);
            setFile(null);
            setBase64File(null);
            setError("Could not read file.");
        };
        reader.readAsDataURL(selectedFile);
    };

    const fetchWithRetry = async (url, options, maxRetries = 5) => {
        let lastError = null;
        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    // Try to read error body if available
                    const errorBody = await response.text();
                    console.error("API Error Body:", errorBody);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response;
            } catch (error) {
                lastError = error;
                const delay = Math.pow(2, i) * 1000; // Exponential backoff: 1s, 2s, 4s, 8s, 16s
                if (i < maxRetries - 1) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        throw lastError;
    };

    const handleAnalyze = async () => {
        // Validation: Must have a prompt OR a file
        if (!prompt.trim() && !file) return;

        setIsLoading(true);
        setError(null);
        setResponse(null);
        setSources([]);

        const userQuery = prompt;
        let contentsParts = [];

        // 1. Add file data if present
        if (base64File) {
            contentsParts.push({
                inlineData: {
                    mimeType: base64File.mimeType,
                    data: base64File.data,
                }
            });
        }
        
        // 2. Add the text query
        contentsParts.push({ text: userQuery });


        const payload = {
            contents: [{ parts: contentsParts }],
            // Only use Google Search grounding if NO file is attached or if the prompt is very general
            // We use grounding by default unless otherwise specified, but LLM will prioritize file analysis.
            tools: [{ "google_search": {} }], 
            systemInstruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }]
            },
        };

        try {
            const fetchOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            };

            const apiResponse = await fetchWithRetry(AI_API_URL, fetchOptions);
            const result = await apiResponse.json();

            const candidate = result.candidates?.[0];

            if (candidate && candidate.content?.parts?.[0]?.text) {
                const text = candidate.content.parts[0].text;
                setResponse(text);

                // Extract grounding sources
                let extractedSources = [];
                const groundingMetadata = candidate.groundingMetadata;
                if (groundingMetadata && groundingMetadata.groundingAttributions) {
                    extractedSources = groundingMetadata.groundingAttributions
                        .map(attribution => ({
                            uri: attribution.web?.uri,
                            title: attribution.web?.title,
                        }))
                        .filter(source => source.uri && source.title);
                }
                setSources(extractedSources);

            } else {
                setError(t('ai_error'));
            }
        } catch (e) {
            console.error("Gemini API Error:", e);
            setError(t('ai_error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="analyst" className="py-24 md:py-32 bg-slate-900/50 border-t border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    {t('ai_title')}
                </motion.h2>
                <p className="text-xl font-inter text-white/60 mb-10 text-center max-w-3xl mx-auto">
                    {t('ai_subtitle')}
                </p>

                <div className="max-w-4xl mx-auto p-8 bg-slate-950 rounded-xl shadow-2xl border border-amber-500/20">
                    {/* Input Area */}
                    <div className="flex flex-col space-y-4">
                        {/* Text Prompt */}
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder={t('ai_placeholder')}
                            rows={3}
                            className="w-full p-4 bg-slate-800 border border-white/10 rounded-lg text-white placeholder-white/50 focus:ring-amber-500 focus:border-amber-500 transition duration-300 resize-none"
                            disabled={isLoading}
                        />

                        {/* File Upload and Analyze Button */}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-stretch">
                            {/* File Upload Button/Display */}
                            <label className={`w-full md:w-4/5 flex items-center p-3 rounded-lg border-2 transition duration-300 cursor-pointer ${
                                file ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-white/20 bg-slate-800 hover:border-amber-500/50 text-white/70'
                            }`}>
                                <Paperclip className="w-5 h-5 mr-3 flex-shrink-0" />
                                <span className="truncate text-sm">
                                    {file ? `${t('ai_file_selected')}${file.name}` : t('ai_file_placeholder')}
                                </span>
                                <input
                                    type="file"
                                    accept="application/pdf,image/png,image/jpeg"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    disabled={isLoading}
                                />
                            </label>

                            {/* Analyze Button */}
                            <motion.button
                                onClick={handleAnalyze}
                                disabled={isLoading || (!prompt.trim() && !file)}
                                className={`w-full md:w-1/5 flex items-center justify-center px-4 py-3 text-lg rounded-lg font-bold transition duration-300 ${
                                    isLoading || (!prompt.trim() && !file)
                                        ? 'bg-amber-500/30 text-white/50 cursor-not-allowed'
                                        : 'bg-amber-500 text-slate-950 hover:bg-amber-600 shadow-md shadow-amber-500/30'
                                }`}
                                whileHover={!isLoading && (prompt.trim() || file) ? { scale: 1.02 } : {}}
                                whileTap={!isLoading && (prompt.trim() || file) ? { scale: 0.98 } : {}}
                            >
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <>{t('ai_cta')}</>
                                )}
                            </motion.button>
                        </div>
                    </div>


                    {/* Output/Results Area */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                        {isLoading && (
                            <div className="text-center text-amber-500 flex items-center justify-center space-x-2">
                                <Zap className="w-5 h-5 animate-pulse" />
                                <p>{t('ai_loading')}</p>
                            </div>
                        )}

                        {error && (
                            <div className="text-center text-red-500 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
                                <p>{error}</p>
                            </div>
                        )}

                        {response && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="font-playfair text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                                    <MessageSquare className="w-6 h-6 text-amber-500" />
                                    <span>{t('ai_results')}</span>
                                </h3>
                                <div className="p-4 bg-slate-800/80 rounded-lg border border-white/10 text-white/90 whitespace-pre-wrap">
                                    {response}
                                </div>

                                {sources.length > 0 && (
                                    <div className="mt-6">
                                        <h4 className="text-lg font-bold text-white/70 mb-3 flex items-center space-x-2">
                                            <Search className="w-4 h-4" />
                                            <span>{t('ai_sources')} ({sources.length})</span>
                                        </h4>
                                        <ul className="space-y-2">
                                            {sources.map((source, index) => (
                                                <li key={index} className="text-sm text-white/50 flex items-start">
                                                    <ExternalLink className="w-3 h-3 mt-1 mr-2 flex-shrink-0" />
                                                    <a href={source.uri} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition duration-300">
                                                        {source.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};


const RoadmapSection = ({ t }) => {
    // Re-create the data locally to use the translation function
    const localRoadmapSteps = [
        { quarter: "Q4 2024", title: t('rm_step1_title'), description: t('rm_step1_desc'), icon: UserCheck, status: "completed" },
        { quarter: "Q1 2025", title: t('rm_step2_title'), description: t('rm_step2_desc'), icon: Users, status: "current" },
        { quarter: "Q2 2025", title: t('rm_step3_title'), description: t('rm_step3_desc'), icon: TrendingUp, status: "upcoming" },
        { quarter: "Q3 2025+", title: t('rm_step4_title'), description: t('rm_step4_desc'), icon: Globe, status: "upcoming" },
    ];

    return (
        <section id="roadmap" className="py-24 md:py-32 bg-slate-950/90 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    {t('rm_title')}
                </motion.h2>
                <p className="text-xl font-inter text-white/60 mb-16 text-center max-w-3xl mx-auto">
                    {t('rm_subtitle')}
                </p>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-white/10 hidden md:block"></div>

                    {localRoadmapSteps.map((step, index) => {
                        // Destructure the icon component
                        const IconComponent = step.icon;
                        return (
                            <motion.div
                                key={index}
                                className="mb-8 flex justify-between items-center w-full odd:flex-row-reverse"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="w-full md:w-5/12">
                                    {/* Content Card */}
                                    <div className={`bg-slate-900/80 border ${step.status === 'current' ? 'border-amber-500/50' : 'border-white/10'} rounded-xl p-6 relative shadow-lg`}>
                                        <span className={`text-sm font-bold uppercase tracking-wider ${step.status === 'current' ? 'text-amber-500' : 'text-white/50'}`}>{step.quarter}</span>
                                        <h4 className="font-playfair text-xl font-bold text-white mt-2 mb-2">{step.title}</h4>
                                        <p className="text-white/70 text-sm">{step.description}</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-center items-center w-2/12">
                                    {/* Icon Circle */}
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                                        step.status === 'completed' ? 'bg-green-600 border-green-800' :
                                        step.status === 'current' ? 'bg-amber-500 border-amber-700' :
                                        'bg-slate-800 border-white/20'
                                    } shadow-xl`}>
                                        {/* Render the Icon component */}
                                        {step.status === 'completed' ? (
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        ) : (
                                            <IconComponent className={`w-5 h-5 ${step.status === 'current' ? 'text-slate-950' : 'text-white/50'}`} />
                                        )}
                                    </div>
                                </div>
                                <div className="hidden md:block w-5/12"></div> {/* Spacer */}
                            </motion.div>
                        );
                    })}
                </div>
                <div className="text-center mt-12">
                    <motion.p
                        className="text-white/50 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        {t('rm_current_partner')} <span className="text-amber-500 font-bold">Premium Legal LLC.</span>
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

const TeamSection = ({ t }) => {
    // Re-create the data locally to use the translation function
    const localTeamMembers = [
        {
            name: "Doston Isoyev",
            role: t('team_role_ceo'),
            description: t('team_desc_doston'),
            icon: Briefcase,
            linkedin: "https://www.linkedin.com/in/doston-isoyev-a6a59525b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bix8hIqUjS4mrBQLlCqUIxg%3D%3D",
        },
        {
            name: "Rustamxon Imamov",
            role: t('team_role_cfo'),
            description: t('team_desc_rustamxon'),
            icon: DollarSign,
            linkedin: "https://www.linkedin.com/in/rustamxonimamov?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJO7AkUcaSvaLOV0wFwVKWA%3D%3D",
        },
        {
            name: "Shohjahon Zikirov",
            role: t('team_role_cto'),
            description: t('team_desc_shohjahon'),
            icon: Code,
            linkedin: "https://www.linkedin.com/in/zikirov/",
        },
        {
            name: "Sardor Zoirov",
            role: t('team_role_legal'),
            description: t('team_desc_sardor'),
            icon: UserCheck,
            linkedin: null,
        },
    ];

    return (
        <section id="team" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.h2
                    className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    {t('team_title')}
                </motion.h2>
                <p className="text-xl font-inter text-white/60 mb-16 text-center max-w-3xl mx-auto">
                    {t('team_subtitle')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {localTeamMembers.map((member, index) => {
                        // Destructure the icon component
                        const IconComponent = member.icon;
                        return (
                        <motion.div
                            key={member.name}
                            className="bg-slate-900/60 border border-white/10 rounded-xl p-6 text-center flex flex-col items-center shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 border-2 border-amber-500/50">
                                {/* Render the Icon component */}
                                <IconComponent className="w-10 h-10 text-amber-500/80" />
                            </div>
                            <h3 className="font-playfair text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-amber-500 text-sm font-medium mb-4">{member.role}</p>
                            <p className="text-white/70 text-sm flex-grow mb-4">{member.description}</p>
                            {member.linkedin ? (
                                <motion.a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-white/70 hover:text-amber-500 transition duration-300"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Linkedin className="w-4 h-4 mr-2" />
                                    {t('team_linkedin')}
                                </motion.a>
                            ) : (
                                <span className="inline-flex items-center text-white/40 cursor-not-allowed">
                                    <Lock className="w-4 h-4 mr-2" />
                                    {t('team_pending')}
                                </span>
                            )}
                        </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


const Footer = ({ t }) => (
  <footer className="bg-slate-950/90 border-t border-white/10 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & Mission */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-bold font-playfair text-white mb-4">SafeSign AI</h3>
          <p className="text-white/60 text-sm font-inter">
            {t('footer_mission')}
          </p>
        </div>

        {/* Column 2: Product */}
        <div>
          <h4 className="text-md font-bold text-amber-500 mb-4 font-inter uppercase tracking-widest">{t('footer_product')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#muammo" className="text-white/70 hover:text-amber-500">{t('nav_problem_solution')}</a></li>
            <li><a href="#features" className="text-white/70 hover:text-amber-500">{t('nav_features')}</a></li>
            <li><a href="#analyst" className="text-white/70 hover:text-amber-500">{t('nav_analyst')}</a></li>
            <li><a href="#roadmap" className="text-white/70 hover:text-amber-500">{t('nav_roadmap')}</a></li>
            <li><a href="#team" className="text-white/70 hover:text-amber-500">{t('nav_team')}</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-md font-bold text-amber-500 mb-4 font-inter uppercase tracking-widest">{t('footer_company')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#team" className="text-white/70 hover:text-amber-500">{t('footer_about')}</a></li>
            <li><a href="#" className="text-white/70 hover:text-amber-500">{t('footer_careers')}</a></li>
            <li><a href="#" className="text-white/70 hover:text-amber-500">{t('footer_partnerships')}</a></li>
            <li><a href="#" className="text-white/70 hover:text-amber-500">{t('footer_contact')}</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-md font-bold text-amber-500 mb-4 font-inter uppercase tracking-widest">{t('footer_legal')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-white/70 hover:text-amber-500">{t('footer_terms')}</a></li>
            <li><a href="#" className="text-white/70 hover:text-amber-500">{t('footer_privacy')}</a></li>
            <li><a href="#" className="text-white/70 hover:text-amber-500">{t('footer_security')}</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center">
        <p className="text-sm text-white/50 font-inter">
          {t('footer_copyright')}
        </p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  const [lang, setLang] = useState('en');
  const t = useTranslation(lang);

  // Use a style block to reliably load Google Fonts and define custom classes
  const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
    .font-playfair {
      font-family: 'Playfair Display', serif;
    }
    .font-inter {
      font-family: 'Inter', sans-serif;
    }
    html {
      scroll-behavior: smooth;
    }
  `;

  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <style>{fontStyles}</style>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <HeroSection t={t} />
        {/* Section 1: Problem and Solution */}
        <ProblemSolutionSection t={t} />
        {/* Section 2: Core Features */}
        <FeatureGrid t={t} />
        {/* New Section 3: AI Legal Analyst (LLM Demo) */}
        <AILegalAnalystSection t={t} />
        {/* Section 4: Roadmap */}
        <RoadmapSection t={t} />
        {/* Section 5: Team */}
        <TeamSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;