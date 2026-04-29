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
    "nav.portfolio": "Portfolio",
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
    "home.hero.title": "Reconnecting nature\nwith architecture.",
    "home.hero.sub":
      "Cross-Laminated Timber and Thermowood — engineered in the Baltics for long-lasting, chemical-free building.",
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
    "home.products.title": "Four ways to bring real wood into your project.",
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

    // Portfolio
    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Selected projects",
    "portfolio.desc":
      "A small selection of buildings and interiors built with our timber. Filter by category to explore.",
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
    "process.s1.title": "Consultation",
    "process.s1.text":
      "Share your drawings, schedule or just an idea. We review feasibility, suggest products and outline lead times — usually within one business day.",
    "process.s1.dur": "1 – 3 days",
    "process.s2.title": "Design & specification",
    "process.s2.text":
      "Our technical team prepares CAD-ready specs, finish samples and a detailed quote. We collaborate directly with your architect or contractor.",
    "process.s2.dur": "1 – 2 weeks",
    "process.s3.title": "Production",
    "process.s3.text":
      "Manufacturing in our Baltic facilities — heat treatment, lamination, CNC and finishing. Quality controlled at every stage.",
    "process.s3.dur": "3 – 6 weeks",
    "process.s4.title": "Delivery & install",
    "process.s4.text":
      "Carefully packed, transported across the EU (worldwide on request) and supported with installation guides. On-site assistance available.",
    "process.s4.dur": "1 – 2 weeks",
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
  },
  lv: {
    "nav.products": "Produkti",
    "nav.process": "Kā tas notiek",
    "nav.portfolio": "Portfolio",
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
    "home.hero.title": "Savienojam dabu\nar arhitektūru.",
    "home.hero.sub":
      "Krustām līmēta koksne (CLT) un Thermowood — projektēti Baltijā ilgmūžīgai un ķīmiski tīrai būvniecībai.",
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
    "home.products.eyebrow": "Mūsu produkti",
    "home.products.title": "Četri veidi, kā ienest īstu koku jūsu projektā.",
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

    "stats.0": "Gadu pieredze",
    "stats.1": "Realizēti projekti",
    "stats.2": "Valstis",
    "stats.3": "Bez ķīmijas",

    "products.eyebrow": "Katalogs",
    "products.title": "Mūsu produkti",
    "products.desc":
      "Mērķtiecīgs CLT, Thermowood un akustisko paneļu klāsts — radīts Baltijā vērienīgai arhitektūrai.",

    "portfolio.eyebrow": "Portfolio",
    "portfolio.title": "Atlasītie projekti",
    "portfolio.desc":
      "Neliels ēku un interjeru izlases klāsts, būvēti ar mūsu koksni. Filtrējiet pēc kategorijas.",
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
    "process.s1.title": "Konsultācija",
    "process.s1.text":
      "Atsūtiet rasējumus, grafiku vai vienkārši ideju. Izvērtējam iespējamību, iesakām produktus un termiņus — parasti vienas darba dienas laikā.",
    "process.s1.dur": "1 – 3 dienas",
    "process.s2.title": "Dizains un specifikācija",
    "process.s2.text":
      "Mūsu tehniskā komanda sagatavo CAD specifikācijas, apdares paraugus un detalizētu piedāvājumu. Sadarbojamies tieši ar arhitektu vai būvnieku.",
    "process.s2.dur": "1 – 2 nedēļas",
    "process.s3.title": "Ražošana",
    "process.s3.text":
      "Ražošana mūsu Baltijas rūpnīcās — termoapstrāde, līmēšana, CNC un apdare. Kvalitātes kontrole katrā posmā.",
    "process.s3.dur": "3 – 6 nedēļas",
    "process.s4.title": "Piegāde un uzstādīšana",
    "process.s4.text":
      "Rūpīgi iepakots, piegādāts visā ES (pasaulē pēc pieprasījuma), pievienojot uzstādīšanas instrukcijas. Iespējama palīdzība uz vietas.",
    "process.s4.dur": "1 – 2 nedēļas",
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
  },
};
