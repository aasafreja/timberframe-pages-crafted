export type Lang = "en" | "lv";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "lv", label: "LV" },
];

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  en: {
    // Header
    "nav.products": "Products",
    "nav.process": "How it works",
    "nav.portfolio": "Reference projects",
    "nav.about": "About",
    "nav.specs": "Tech specs",
    "nav.contact": "Contact",
    "nav.quote": "Request a quote",
    "nav.menu": "Menu",

    // Footer
    "footer.site": "Site",
    "footer.follow": "Follow",
    "footer.legal.privacy": "Privacy",
    "footer.legal.terms": "Terms",
    "footer.legal.shipping": "Shipping",
    "footer.legal.refund": "Refund",
    "footer.copyright": "© {year} {name}",

    // Common
    "common.comingSoon": "Coming soon",
    "common.viewAll": "View all products",
    "common.viewProduct": "View product",
    "common.viewPortfolio": "View portfolio",
    "common.exploreProducts": "Explore products",
    "common.continue": "Continue",
    "common.back.products": "All products",
    "common.back.projects": "All projects",
    "common.specifications": "Specifications",
    "common.emailUs": "Email us",
    "common.send": "Send message",

    // Home
    "home.hero.eyebrow": "Timber Smart Solution",
    "home.hero.title": "Premium CLT & Thermowood Panels",
    "home.hero.sub":
      "Manufacturing Excellence Since 1999.",
    "home.adv.eyebrow": "Why Timber Smart",
    "home.adv.title": "Built right. Delivered fast. Priced for business.",
    "home.adv.1.title": "ISO & FSC certified production",
    "home.adv.1.text":
      "Independently audited quality and chain-of-custody from sustainably managed forests.",
    "home.adv.2.title": "Custom designs & specifications",
    "home.adv.2.text":
      "Bespoke geometry, profiles and finishes engineered to your project drawings.",
    "home.adv.3.title": "Fast turnaround time (2–4 weeks)",
    "home.adv.3.text":
      "Predictable lead times for standard items — most orders ship within four weeks.",
    "home.adv.4.title": "Competitive pricing for bulk orders",
    "home.adv.4.text":
      "Volume-based pricing tiers for developers, contractors and resellers.",
    "home.adv.5.title": "Direct B2B partnership model",
    "home.adv.5.text":
      "Work directly with our team — no middlemen, transparent terms, long-term partnership.",
    "home.products.eyebrow": "Our products",
    "home.products.title": "Three ways to bring real wood into your project.",
    "home.portfolio.eyebrow": "Selected work",
    "home.portfolio.title": "Buildings that breathe wood.",
    "home.portfolio.text":
      "Architects across Europe choose us for façades, interiors and bespoke timber elements. Here's a glimpse of what's possible.",
    "home.cta.title": "Have a project on the table?",
    "home.cta.text":
      "Send us your drawings or a brief description — we'll come back with material recommendations, lead times and a quote.",
    "home.cta.b1": "No-pressure consultation",
    "home.cta.b2": "Reply within 1 business day",
    "home.cta.b3": "EU-wide delivery",
    "home.trusted.eyebrow": "Trusted partners",
    "home.trusted.title": "Trusted by leading construction companies",

    // Stats
    "stats.0": "Years of expertise",
    "stats.1": "Projects delivered",
    "stats.2": "Countries served",
    "stats.3": "Chemical-free",

    // Products page
    "products.eyebrow": "Catalogue",
    "products.title": "Our products",
    "products.desc":
      "A focused range of CLT, thermowood and acoustic panels — engineered in the Baltics, ready for ambitious architecture.",

    // Portfolio (reference projects)
    "portfolio.eyebrow": "Reference projects",
    "portfolio.title": "Where our timber has been built in.",
    "portfolio.desc":
      "A short list of recent projects across Europe that trusted our panels — credentials over imagery.",
    "portfolio.list.eyebrow": "Recent references",
    "portfolio.list.title": "Our panels have been used in:",
    "portfolio.list.area": "Area",
    "portfolio.list.materials": "Materials",
    "portfolio.list.footnote":
      "Full project documentation, drawings and references available on request.",
    "portfolio.filter.All": "All",
    "portfolio.filter.Residential": "Residential",
    "portfolio.filter.Commercial": "Commercial",
    "portfolio.filter.Interior": "Interior",

    // Project detail
    "project.location": "Location",
    "project.year": "Year",
    "project.products": "Products used",
    "project.caseSoon":
      "Detailed case study coming soon. In the meantime, reach out and we'll be happy to share drawings, material specs and lessons learned from this project.",
    "project.discuss": "Discuss a similar project",
    "project.next": "Next project",

    // Process
    "process.eyebrow": "How it works",
    "process.title": "From first sketch to installed timber.",
    "process.desc":
      "A transparent, four-step process designed around how architects and developers actually work.",
    "process.timeline.eyebrow": "Typical timeline",
    "process.timeline.title": "Most projects ship in 6 – 10 weeks.",
    "process.faq.eyebrow": "FAQ",
    "process.faq.title": "Process questions, answered.",
    "process.step": "Step",
    "process.s1.title": "You send your request",
    "process.s1.text":
      "Drawings, dimensions, material choice, deadline — in any format.",
    "process.s1.dur": "Any format",
    "process.s2.title": "We review",
    "process.s2.text":
      "Our team reviews the options and prepares an initial assessment.",
    "process.s2.dur": "24 – 48 hours",
    "process.s3.title": "You receive an offer",
    "process.s3.text":
      "A detailed quote with price, lead time and specifications.",
    "process.s3.dur": "Detailed quote",
    "process.s4.title": "Production & delivery",
    "process.s4.text":
      "Once you approve and pay 50% deposit, production begins.",
    "process.s4.dur": "After 50% deposit",
    "process.faq.q1": "Do you ship outside the EU?",
    "process.faq.a1":
      "Yes — we regularly deliver across the EU and UK, and quote worldwide shipments on request.",
    "process.faq.q2": "Can you work directly with my architect?",
    "process.faq.a2":
      "Absolutely. We exchange DWG / IFC / Revit files and join project calls when needed.",
    "process.faq.q3": "What's the minimum order?",
    "process.faq.a3":
      "There's no strict minimum — we ship from a single sample panel up to full façade systems.",
    "process.faq.q4": "Are samples available?",
    "process.faq.a4":
      "Yes, we send free A5-format samples of our standard finishes. Custom samples on request.",

    // About
    "about.eyebrow": "About",
    "about.title": "Crafted in the Baltics, for architects who care.",
    "about.desc":
      "We've spent over two decades turning Nordic timber into the kind of material people are proud to build with.",
    "about.story.eyebrow": "Our story",
    "about.story.title": "Two decades of Baltic timber.",
    "about.story.p1":
      "Founded in Riga, Timber Smart Solution started as a small workshop obsessed with one question: how do you make wood last longer without compromising it with chemicals?",
    "about.story.p2":
      "Twenty-five years later, we're still asking it. We work with CLT, thermo-treated softwoods and acoustic systems — supplying architects and developers across Northern Europe.",
    "about.mission.label": "Mission",
    "about.mission.text":
      "To make chemical-free, long-lasting timber the obvious choice for modern construction.",
    "about.vision.label": "Vision",
    "about.vision.text":
      "A built environment that ages beautifully and gives back to the forest it came from.",
    "about.values.eyebrow": "Values",
    "about.values.title": "What we hold ourselves to.",
    "about.value.1.title": "Sustainable",
    "about.value.1.text":
      "Heat-only treatment, FSC/PEFC sources, low-carbon production.",
    "about.value.2.title": "Quality",
    "about.value.2.text":
      "Tight tolerances, Nordic raw material, hand-finished surfaces.",
    "about.value.3.title": "Innovation",
    "about.value.3.text":
      "Continuous R&D in CLT geometry, finishing and acoustic systems.",
    "about.team.eyebrow": "Team",
    "about.team.title": "People behind the panels.",
    "about.team.soon": "Photos coming soon",
    "about.team.role.production": "Production Lead",
    "about.team.role.architect": "Architect Relations",
    "about.commit.eyebrow": "Our commitment",
    "about.commit.1": "Quality over quantity",
    "about.commit.2": "Sustainable practices",
    "about.commit.3": "Customer-first approach",
    "about.commit.4": "Innovation in timber technology",
    "about.commit.5": "Fair pricing for bulk orders",
    "about.ceo.exp1": "25+ years in timber manufacturing",
    "about.ceo.exp2": "Expert in CLT & Thermowood production",
    "about.ceo.exp3": "Speaks: Latvian, English, German",
    "about.facility.eyebrow": "Facility",
    "about.facility.title": "Where it's made.",
    "about.facility.location.label": "Location",
    "about.facility.location.value": "Riga, Latvia",
    "about.facility.capacity.label": "Production capacity",
    "about.facility.capacity.value": "200+ m² / day",
    "about.facility.equipment.label": "Equipment",
    "about.facility.equipment.value": "CNC cutting, laminating, grading",
    "about.facility.team.label": "Team",
    "about.facility.team.value": "15+ skilled craftsmen",
    "about.facility.storage.label": "Storage",
    "about.facility.storage.value": "Climate-controlled warehouse",
    "about.facility.logistics.label": "Logistics",
    "about.facility.logistics.value": "Own delivery vehicles",
    "about.cert.eyebrow": "Certifications & Awards",
    "about.cert.title": "Built to international standards.",
    // Product detail extras
    "product.capabilities": "Capabilities",
    "product.capabilities.title": "What we can build.",
    "product.process": "Process",
    "product.process.title": "How we work with you.",
    "product.moq": "Minimum order",
    "product.gallery.eyebrow": "Gallery",
    "product.gallery.title": "Project & finish references.",

    // Specs
    "specs.eyebrow": "Technical specs",
    "specs.title": "Numbers, drawings & datasheets.",
    "specs.desc":
      "Engineering documentation for our CLT and thermowood products. Reach out if you need anything specific to your project.",
    "specs.clt.title": "CLT panels",
    "specs.clt.desc":
      "Cross-laminated timber for structural and decorative use.",
    "specs.thermo.title": "Thermowood",
    "specs.thermo.desc":
      "Heat-treated timber for exterior cladding and interior finishes.",
    "specs.compare.eyebrow": "Comparison",
    "specs.compare.title": "Material comparison.",
    "specs.cert.eyebrow": "Certifications",
    "specs.cert.title": "Certified to international standards.",
    "specs.dl.eyebrow": "Downloads",
    "specs.dl.title": "PDF documents.",
    "specs.dl.soon": "Datasheets coming soon",
    "specs.dl.btn": "Download",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk timber.",
    "contact.desc":
      "Send a brief, drawings or just a question. We respond within one business day.",
    "contact.thanks.title": "Thanks for submitting!",
    "contact.thanks.text":
      "Your message is on its way to our team. We'll get back to you within one business day.",
    "contact.thanks.again": "Send another message",
    "contact.form.firstName": "First name",
    "contact.form.lastName": "Last name",
    "contact.form.email": "Email",
    "contact.form.company": "Company / studio (optional)",
    "contact.form.message": "Message",
    "contact.form.placeholder":
      "Tell us about your project — products, volumes, timeline.",
    "contact.info.title": "Get in touch",
    "contact.toast.title": "Thanks for submitting!",
    "contact.toast.desc":
      "We'll get back to you within one business day.",
    "contact.interested": "I'm interested in: {product}\n\n",
    "product.quotedNote":
      "All orders are quoted individually based on volume, finish and delivery terms.",

    // Privacy
    "privacy.eyebrow": "Legal",
    "privacy.title": "Privacy Policy",
    "privacy.desc":
      "How we collect, use and protect information when you interact with Timber Smart Solution.",
    "privacy.updated": "Last updated: April 2026",
    "privacy.s1.title": "1. Information we collect",
    "privacy.s1.text":
      "We collect information you provide directly — such as your name, company, email address, phone number and any project details you share through our contact forms or email.",
    "privacy.s2.title": "2. How we use information",
    "privacy.s2.text":
      "We use your information to respond to inquiries, prepare quotes, deliver products and services, and keep you updated about your project. We do not sell or rent personal data to third parties.",
    "privacy.s3.title": "3. Sharing of information",
    "privacy.s3.text":
      "We may share data with trusted partners (logistics, certified production partners, payment processors) strictly to fulfil your order. All partners are bound by confidentiality and data-protection obligations.",
    "privacy.s4.title": "4. Data retention",
    "privacy.s4.text":
      "We keep project and contact records for as long as needed to provide our services and to comply with legal, tax and accounting obligations under EU and Latvian law.",
    "privacy.s5.title": "5. Your rights",
    "privacy.s5.text":
      "Under the GDPR you may request access to, correction of, or deletion of your personal data, and object to certain processing. To exercise these rights, contact us at the email below.",
    "privacy.s6.title": "6. Cookies",
    "privacy.s6.text":
      "Our website uses essential cookies to function correctly and may use analytics cookies to help us improve. You can disable non-essential cookies in your browser settings.",
    "privacy.s7.title": "7. Contact",
    "privacy.s7.text":
      "Questions about this policy or your data? Reach us at:",

    "home.process.eyebrow": "How we work",
    "home.process.title": "Our Production Process",
    "home.process.desc":
      "From first consultation to delivery — a streamlined four-step workflow refined over 25 years of timber manufacturing.",
    "home.process.s1.title": "Consultation",
    "home.process.s1.text": "Project briefing, material guidance and budget framing.",
    "home.process.s2.title": "Design",
    "home.process.s2.text": "Engineering, layouts and shop drawings tailored to your spec.",
    "home.process.s3.title": "Production",
    "home.process.s3.text": "CNC cutting, lamination and quality-controlled finishing in our Riga facility.",
    "home.process.s4.title": "Delivery",
    "home.process.s4.text": "Climate-protected packaging and on-time freight across Europe.",
    "home.process.cta": "See how it works",
  },
  lv: {
    "nav.products": "Produkti",
    "nav.process": "Kā tas notiek",
    "nav.portfolio": "Atsauces projekti",
    "nav.about": "Par mums",
    "nav.specs": "Tehniskie dati",
    "nav.contact": "Kontakti",
    "nav.quote": "Pieprasīt piedāvājumu",
    "nav.menu": "Izvēlne",

    "footer.site": "Vietne",
    "footer.follow": "Seko",
    "footer.legal.privacy": "Privātums",
    "footer.legal.terms": "Noteikumi",
    "footer.legal.shipping": "Piegāde",
    "footer.legal.refund": "Atgriešana",
    "footer.copyright": "© {year} {name}",

    "common.comingSoon": "Drīzumā",
    "common.viewAll": "Skatīt visus produktus",
    "common.viewProduct": "Skatīt produktu",
    "common.viewPortfolio": "Skatīt portfolio",
    "common.exploreProducts": "Apskatīt produktus",
    "common.continue": "Turpināt",
    "common.back.products": "Visi produkti",
    "common.back.projects": "Visi projekti",
    "common.specifications": "Specifikācijas",
    "common.emailUs": "Rakstīt mums",
    "common.send": "Sūtīt ziņojumu",

    "home.hero.eyebrow": "Timber Smart Solution",
    "home.hero.title": "Augstākās klases CLT un termokoka paneļi",
    "home.hero.sub":
      "Ražošanas izcilība kopš 1999. gada.",
    "home.adv.eyebrow": "Kāpēc Timber Smart",
    "home.adv.title": "Kvalitatīvi izgatavots. Ātri piegādāts. Cena, kas der biznesam.",
    "home.adv.1.title": "ISO un FSC sertificēta ražošana",
    "home.adv.1.text":
      "Neatkarīgi auditēta kvalitāte un izsekojamība no ilgtspējīgi apsaimniekotiem mežiem.",
    "home.adv.2.title": "Pielāgots dizains un specifikācijas",
    "home.adv.2.text":
      "Īpaša ģeometrija, profili un apdare, izstrādāti pēc jūsu projekta rasējumiem.",
    "home.adv.3.title": "Ātrs izpildes laiks (2–4 nedēļas)",
    "home.adv.3.text":
      "Paredzami termiņi standarta produktiem — vairums pasūtījumu tiek nosūtīti 4 nedēļās.",
    "home.adv.4.title": "Konkurētspējīga cena lieliem pasūtījumiem",
    "home.adv.4.text":
      "Apjomam pielāgotas cenas attīstītājiem, būvniekiem un vairumtirgotājiem.",
    "home.adv.5.title": "Tieša B2B sadarbība",
    "home.adv.5.text":
      "Strādājiet tieši ar mūsu komandu — bez starpniekiem, caurspīdīgi nosacījumi, ilgtermiņa partnerība.",
    "home.products.eyebrow": "Mūsu produkti",
    "home.products.title": "Trīs veidi, kā ienest īstu koku jūsu projektā.",
    "home.portfolio.eyebrow": "Atlasītie darbi",
    "home.portfolio.title": "Ēkas, kas elpo koku.",
    "home.portfolio.text":
      "Arhitekti visā Eiropā mūs izvēlas fasādēm, interjeriem un īpaši pielāgotiem koka elementiem. Šeit ieskats iespējamajā.",
    "home.cta.title": "Vai jums ir projekts uz galda?",
    "home.cta.text":
      "Atsūtiet mums rasējumus vai īsu aprakstu — mēs sniegsim materiālu ieteikumus, izpildes termiņus un piedāvājumu.",
    "home.cta.b1": "Nesaistoša konsultācija",
    "home.cta.b2": "Atbilde 1 darba dienas laikā",
    "home.cta.b3": "Piegāde visā ES",
    "home.trusted.eyebrow": "Uzticami partneri",
    "home.trusted.title": "Mums uzticas vadošie būvniecības uzņēmumi",

    "stats.0": "Gadu pieredze",
    "stats.1": "Realizēti projekti",
    "stats.2": "Valstis",
    "stats.3": "Bez ķīmijas",

    "products.eyebrow": "Katalogs",
    "products.title": "Mūsu produkti",
    "products.desc":
      "Mērķtiecīgs CLT, Thermowood un akustisko paneļu klāsts — radīts Baltijā vērienīgai arhitektūrai.",

    "portfolio.eyebrow": "Atsauces projekti",
    "portfolio.title": "Kur izmantota mūsu koksne.",
    "portfolio.desc":
      "Īss saraksts ar nesenajiem projektiem Eiropā, kuri uzticējās mūsu paneļiem — pierādījumi, nevis attēli.",
    "portfolio.list.eyebrow": "Nesenās atsauces",
    "portfolio.list.title": "Mūsu paneļi izmantoti:",
    "portfolio.list.area": "Platība",
    "portfolio.list.materials": "Materiāli",
    "portfolio.list.footnote":
      "Pilna projektu dokumentācija, rasējumi un atsauces pieejamas pēc pieprasījuma.",
    "portfolio.filter.All": "Visi",
    "portfolio.filter.Residential": "Dzīvojamie",
    "portfolio.filter.Commercial": "Komerciālie",
    "portfolio.filter.Interior": "Interjers",

    "project.location": "Atrašanās vieta",
    "project.year": "Gads",
    "project.products": "Izmantotie produkti",
    "project.caseSoon":
      "Detalizēts gadījuma apraksts drīzumā. Tikmēr sazinieties — labprāt dalīsimies ar rasējumiem, materiālu specifikācijām un projekta pieredzi.",
    "project.discuss": "Apspriest līdzīgu projektu",
    "project.next": "Nākamais projekts",

    "process.eyebrow": "Kā tas notiek",
    "process.title": "No pirmā skices līdz uzstādītai koksnei.",
    "process.desc":
      "Caurspīdīgs četru soļu process, veidots tā, kā strādā arhitekti un attīstītāji.",
    "process.timeline.eyebrow": "Tipisks termiņš",
    "process.timeline.title": "Lielākā daļa projektu tiek piegādāti 6 – 10 nedēļās.",
    "process.faq.eyebrow": "BUJ",
    "process.faq.title": "Atbildes par procesu.",
    "process.step": "Solis",
    "process.s1.title": "Jūs nosūtāt savu pieprasījumu",
    "process.s1.text":
      "Rasējumi, izmēri, materiāla izvēle, termiņš — jebkurā formātā.",
    "process.s1.dur": "Jebkurā formātā",
    "process.s2.title": "Mēs izvērtējam",
    "process.s2.text":
      "Mūsu komanda izskata iespējas un sagatavo sākotnējo novērtējumu.",
    "process.s2.dur": "24 – 48 stundas",
    "process.s3.title": "Jūs saņemat piedāvājumu",
    "process.s3.text":
      "Detalizēts piedāvājums ar cenu, termiņu un specifikācijām.",
    "process.s3.dur": "Detalizēts piedāvājums",
    "process.s4.title": "Ražošana un piegāde",
    "process.s4.text":
      "Pēc jūsu apstiprinājuma un 50% avansa sākam ražošanu.",
    "process.s4.dur": "Pēc 50% avansa",
    "process.faq.q1": "Vai piegādājat ārpus ES?",
    "process.faq.a1":
      "Jā — regulāri piegādājam ES un AK, kā arī sagatavojam piedāvājumus pasaules sūtījumiem.",
    "process.faq.q2": "Vai varat strādāt tieši ar manu arhitektu?",
    "process.faq.a2":
      "Protams. Apmaināmies ar DWG / IFC / Revit failiem un piedalāmies projekta sanāksmēs pēc vajadzības.",
    "process.faq.q3": "Kāds ir minimālais pasūtījums?",
    "process.faq.a3":
      "Stingra minimuma nav — piegādājam no atsevišķa parauga līdz pilnām fasādes sistēmām.",
    "process.faq.q4": "Vai ir pieejami paraugi?",
    "process.faq.a4":
      "Jā, sūtām bezmaksas A5 izmēra mūsu standarta apdares paraugus. Pielāgoti paraugi pēc pieprasījuma.",

    "about.eyebrow": "Par mums",
    "about.title": "Radīts Baltijā arhitektiem, kuriem rūp.",
    "about.desc":
      "Vairāk nekā divas desmitgades pārvēršam Ziemeļu koksni materiālā, ar kuru cilvēki lepojas būvēt.",
    "about.story.eyebrow": "Mūsu stāsts",
    "about.story.title": "Divas desmitgades Baltijas koksnes.",
    "about.story.p1":
      "Dibināta Rīgā, Timber Smart Solution sākās kā maza darbnīca ar vienu jautājumu: kā padarīt koku ilgmūžīgāku, neapdraudot to ar ķīmiju?",
    "about.story.p2":
      "Divdesmit piecus gadus vēlāk mēs joprojām to jautājam. Strādājam ar CLT, termoapstrādātām skujkoku sugām un akustiskām sistēmām — apgādājam arhitektus un attīstītājus visā Ziemeļeiropā.",
    "about.mission.label": "Misija",
    "about.mission.text":
      "Padarīt ķīmiski tīru, ilgmūžīgu koksni par acīmredzamu izvēli mūsdienu būvniecībā.",
    "about.vision.label": "Vīzija",
    "about.vision.text":
      "Apbūvēta vide, kas skaisti noveco un atdod mežam, no kura nāk.",
    "about.values.eyebrow": "Vērtības",
    "about.values.title": "Pie kā mēs turamies.",
    "about.value.1.title": "Ilgtspējīgs",
    "about.value.1.text":
      "Tikai termoapstrāde, FSC/PEFC izejmateriāli, zema oglekļa ražošana.",
    "about.value.2.title": "Kvalitāte",
    "about.value.2.text":
      "Stingras tolerances, Ziemeļu izejviela, ar roku apdarinātas virsmas.",
    "about.value.3.title": "Inovācijas",
    "about.value.3.text":
      "Pastāvīga pētniecība CLT ģeometrijā, apdarē un akustiskās sistēmās.",
    "about.team.eyebrow": "Komanda",
    "about.team.title": "Cilvēki aiz paneļiem.",
    "about.team.soon": "Fotogrāfijas drīzumā",
    "about.team.role.production": "Ražošanas vadītājs",
    "about.team.role.architect": "Arhitektu attiecības",
    "about.commit.eyebrow": "Mūsu apņemšanās",
    "about.commit.1": "Kvalitāte pirms kvantitātes",
    "about.commit.2": "Ilgtspējīga prakse",
    "about.commit.3": "Klients pirmajā vietā",
    "about.commit.4": "Inovācijas koksnes tehnoloģijās",
    "about.commit.5": "Godīgas cenas lieliem pasūtījumiem",
    "about.ceo.exp1": "25+ gadu pieredze koksnes ražošanā",
    "about.ceo.exp2": "Eksperts CLT un Thermowood ražošanā",
    "about.ceo.exp3": "Valodas: latviešu, angļu, vācu",
    "about.facility.eyebrow": "Ražotne",
    "about.facility.title": "Kur tas tiek radīts.",
    "about.facility.location.label": "Atrašanās vieta",
    "about.facility.location.value": "Rīga, Latvija",
    "about.facility.capacity.label": "Ražošanas jauda",
    "about.facility.capacity.value": "200+ m² / dienā",
    "about.facility.equipment.label": "Aprīkojums",
    "about.facility.equipment.value": "CNC griešana, laminēšana, šķirošana",
    "about.facility.team.label": "Komanda",
    "about.facility.team.value": "15+ prasmīgi meistari",
    "about.facility.storage.label": "Noliktava",
    "about.facility.storage.value": "Klimata kontrolēta noliktava",
    "about.facility.logistics.label": "Loģistika",
    "about.facility.logistics.value": "Pašu transports",
    "about.cert.eyebrow": "Sertifikāti un balvas",
    "about.cert.title": "Atbilst starptautiskiem standartiem.",
    "product.capabilities": "Iespējas",
    "product.capabilities.title": "Ko mēs varam izgatavot.",
    "product.process": "Process",
    "product.process.title": "Kā mēs strādājam ar jums.",
    "product.moq": "Minimālais pasūtījums",
    "product.gallery.eyebrow": "Galerija",
    "product.gallery.title": "Projektu un apdares atsauces.",

    "specs.eyebrow": "Tehniskās specifikācijas",
    "specs.title": "Skaitļi, rasējumi un datu lapas.",
    "specs.desc":
      "Inženiertehniskā dokumentācija mūsu CLT un Thermowood produktiem. Sazinieties, ja nepieciešams kas konkrēts jūsu projektam.",
    "specs.clt.title": "CLT paneļi",
    "specs.clt.desc":
      "Krustām līmēta koksne strukturālai un dekoratīvai lietošanai.",
    "specs.thermo.title": "Thermowood",
    "specs.thermo.desc":
      "Termoapstrādāta koksne ārējām fasādēm un iekštelpu apdarei.",
    "specs.compare.eyebrow": "Salīdzinājums",
    "specs.compare.title": "Materiālu salīdzinājums.",
    "specs.cert.eyebrow": "Sertifikāti",
    "specs.cert.title": "Sertificēts pēc starptautiskiem standartiem.",
    "specs.dl.eyebrow": "Lejupielādes",
    "specs.dl.title": "PDF dokumenti.",
    "specs.dl.soon": "Datu lapas drīzumā",
    "specs.dl.btn": "Lejupielādēt",

    "contact.eyebrow": "Kontakti",
    "contact.title": "Parunāsim par koksni.",
    "contact.desc":
      "Atsūtiet aprakstu, rasējumus vai vienkārši jautājumu. Atbildam vienas darba dienas laikā.",
    "contact.thanks.title": "Paldies par ziņojumu!",
    "contact.thanks.text":
      "Jūsu ziņojums ir ceļā pie mūsu komandas. Atbildēsim vienas darba dienas laikā.",
    "contact.thanks.again": "Sūtīt vēl vienu ziņojumu",
    "contact.form.firstName": "Vārds",
    "contact.form.lastName": "Uzvārds",
    "contact.form.email": "E-pasts",
    "contact.form.company": "Uzņēmums / studija (neobligāti)",
    "contact.form.message": "Ziņojums",
    "contact.form.placeholder":
      "Pastāstiet par savu projektu — produkti, apjomi, termiņi.",
    "contact.info.title": "Sazinieties",
    "contact.toast.title": "Paldies par ziņojumu!",
    "contact.toast.desc":
      "Atbildēsim vienas darba dienas laikā.",
    "contact.interested": "Mani interesē: {product}\n\n",
    "product.quotedNote":
      "Visi pasūtījumi tiek piedāvāti individuāli, atkarībā no apjoma, apdares un piegādes nosacījumiem.",

    // Privacy
    "privacy.eyebrow": "Juridiskā informācija",
    "privacy.title": "Privātuma politika",
    "privacy.desc":
      "Kā mēs ievācam, izmantojam un aizsargājam informāciju, sazinoties ar Timber Smart Solution.",
    "privacy.updated": "Pēdējoreiz atjaunināts: 2026. gada aprīlis",
    "privacy.s1.title": "1. Informācija, ko ievācam",
    "privacy.s1.text":
      "Mēs ievācam informāciju, ko jūs sniedzat tieši — vārdu, uzņēmumu, e-pastu, tālruņa numuru un projekta detaļas, ko nododat ar kontaktu formām vai e-pastu.",
    "privacy.s2.title": "2. Kā izmantojam informāciju",
    "privacy.s2.text":
      "Informāciju izmantojam, lai atbildētu uz jautājumiem, sagatavotu piedāvājumus, piegādātu produktus un informētu jūs par projekta gaitu. Mēs nepārdodam un neiznomājam personas datus trešajām pusēm.",
    "privacy.s3.title": "3. Datu kopīgošana",
    "privacy.s3.text":
      "Datus varam dalīt ar uzticamiem partneriem (loģistika, sertificēti ražošanas partneri, maksājumu pakalpojumu sniedzēji) tikai jūsu pasūtījuma izpildei. Visi partneri ir saistīti ar konfidencialitātes un datu aizsardzības saistībām.",
    "privacy.s4.title": "4. Datu glabāšana",
    "privacy.s4.text":
      "Projektu un kontaktu ierakstus glabājam tik ilgi, cik nepieciešams pakalpojumu sniegšanai un atbilstoši ES un Latvijas juridiskajām, nodokļu un grāmatvedības prasībām.",
    "privacy.s5.title": "5. Jūsu tiesības",
    "privacy.s5.text":
      "Saskaņā ar GDPR jums ir tiesības piekļūt saviem personas datiem, tos labot vai dzēst, kā arī iebilst pret atsevišķu apstrādi. Lai izmantotu šīs tiesības, sazinieties ar mums e-pastā zemāk.",
    "privacy.s6.title": "6. Sīkdatnes",
    "privacy.s6.text":
      "Mūsu vietne izmanto nepieciešamās sīkdatnes pareizai darbībai un var izmantot analītikas sīkdatnes uzlabojumiem. Jūs varat atspējot neobligātās sīkdatnes pārlūka iestatījumos.",
    "privacy.s7.title": "7. Kontakti",
    "privacy.s7.text":
      "Jautājumi par šo politiku vai jūsu datiem? Sazinieties:",

    "home.process.eyebrow": "Kā mēs strādājam",
    "home.process.title": "Mūsu ražošanas process",
    "home.process.desc":
      "No pirmās konsultācijas līdz piegādei — vienkāršs četru soļu process, ko esam pilnveidojuši 25 gadu laikā.",
    "home.process.s1.title": "Jūs nosūtāt pieprasījumu",
    "home.process.s1.text": "Rasējumi, izmēri, materiāla izvēle, termiņš — jebkurā formātā.",
    "home.process.s2.title": "Mēs izvērtējam",
    "home.process.s2.text": "Komanda izskata iespējas un sagatavo sākotnējo novērtējumu 24–48 stundās.",
    "home.process.s3.title": "Jūs saņemat piedāvājumu",
    "home.process.s3.text": "Detalizēts piedāvājums ar cenu, termiņu un specifikācijām.",
    "home.process.s4.title": "Ražošana un piegāde",
    "home.process.s4.text": "Pēc apstiprinājuma un 50% avansa sākam ražošanu un piegādājam.",
    "home.process.cta": "Skatīt, kā tas notiek",
  },
};
