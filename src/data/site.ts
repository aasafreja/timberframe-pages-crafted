import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectSauna from "@/assets/project-sauna.jpg";
import projectCabin from "@/assets/project-cabin.jpg";
import projectOffice from "@/assets/project-office.jpg";
import acousticPanel from "@/assets/products/acoustic-panel.jpg";
import cltThermo from "@/assets/products/clt-thermo.jpeg";
import cltPanel1 from "@/assets/products/clt-panel-1.jpeg";
import cltPanel2 from "@/assets/products/clt-panel-2.jpeg";
import thermowood from "@/assets/products/thermowood.jpeg";

export const company = {
  name: "Timber Smart Solution",
  short: "TSS",
  tagline: "Dekoratīvi mikro CLT paneļi",
  address: "Vienības gatve 20b, LV-1004, Rīga, Latvija",
  phones: ["+371 2929 5353", "+371 2920 6808"],
  email: "timbersmartsolution@gmail.com",
  hours: "Pirmd. – Piektd. · 09:00 – 18:00",
  ceo: "Elans Tomševičs — Tehniskais vadītājs un CEO",
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price?: string;
  image: string;
  gallery: string[];
  description: string;
  specs: { label: string; value: string }[];
  capabilities?: string[];
  process?: string[];
  moq?: string;
};

export const products: Product[] = [
  {
    slug: "clt-panels",
    name: "CLT panelis ar termokoku",
    tagline: "Dekoratīva mikro krustām līmēta koksne",
    price: "no € 37",
    image: cltPanel1,
    gallery: [cltPanel1, cltPanel2, cltThermo],
    description:
      "Augstas kvalitātes priedes dēlis, kas ideāli piemērots mēbeļu ražošanai. Augstas veiktspējas inženiertehniska koksne no vairākām perpendikulāri salīmētām koka kārtām, kombinēta ar termokoka virsslāni. Kalpo gan kā konstruktīvs, gan apdares materiāls modernā būvniecībā — ideāls dzīvojamām ēkām, interjeram un moduļu montāžai.",
    specs: [
      { label: "Slāņi", value: "3 / 5 / 7 krustām līmēti" },
      { label: "Biezums", value: "1 – 2 collas" },
      { label: "Platums", value: "līdz 1250 mm" },
      { label: "Garums", value: "līdz 5000 mm" },
      { label: "Koka suga", value: "Ziemeļu egle / priede" },
      { label: "Līme", value: "PUR, bez formaldehīda" },
    ],
  },
  {
    slug: "acoustic-panels",
    name: "Akustiskais panelis",
    tagline: "Eko priedes līstu paneļi izsmalcinātam interjeram",
    price: "€ 55,00 / panelis",
    image: acousticPanel,
    gallery: [acousticPanel, cltPanel1, cltThermo],
    description:
      "Līstoti akustiskie paneļi, kas apvieno dabīgu Ziemeļu priedi ar filca pamatni. Samazina atbalsi un piešķir telpai īsta koka siltumu. Iepriekš apdarināti un gatavi uzstādīšanai uz sienām vai griestiem — lieliski piemēroti birojiem, studijām, restorāniem un mājām.",
    specs: [
      { label: "Paneļa izmērs", value: "4×2 ft – 6×3 ft" },
      { label: "Līste", value: "12 × 24 mm" },
      { label: "Pamatne", value: "PET akustiskais filcs, melns" },
      { label: "NRC", value: "0.55" },
      { label: "Apdare", value: "dabīga / kūpināta / termo" },
      { label: "Stiprinājums", value: "skrūves / līme" },
    ],
  },
  {
    slug: "custom-solutions",
    name: "Pielāgoti risinājumi",
    tagline: "Arhitektu klases, izgatavoti pēc jūsu specifikācijas",
    price: "pēc piedāvājuma",
    image: cltPanel2,
    gallery: [cltPanel2, projectInterior, projectOffice],
    description:
      "Mēs ražojam nestandarta izmērus un specifikācijas atbilstoši jūsu projekta vajadzībām. Īpaši izgatavoti koksnes komponenti arhitektiem, dizaineriem un attīstītājiem — no fasāžu sistēmām un griestiem līdz mēbeļu klases paneļiem.",
    specs: [
      { label: "Min. pasūtījums", value: "Sazinieties ar mums" },
      { label: "Izpildes laiks", value: "3 – 8 nedēļas" },
      { label: "CAD atbalsts", value: "DWG / IFC / Revit" },
      { label: "Piegāde", value: "ES un AK, pasaulē pēc pieprasījuma" },
    ],
    capabilities: [
      "Jebkurš pielāgots izmērs",
      "Vairāku veidu koksne",
      "Īpašas apdares",
      "Akustiskie paneļi",
      "Slodzes nesošas specifikācijas",
      "Ugunsdrošas opcijas",
      "Laminēti dizaini",
    ],
    process: [
      "Atsūtiet mums savus rasējumus (PDF, CAD, attēli)",
      "Mēs analizējam un sniedzam ieteikumus",
      "Piedāvājums ar termiņu",
      "Ražošana un kvalitātes kontrole",
      "Piegāde",
    ],
    moq: "Sazinieties ar mums",
  },
];

export type Project = {
  id: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Interior";
  cover: string;
  gallery: string[];
  products: string[];
  year: number;
  summary: string;
};

export const projects: Project[] = [
  {
    id: "nordic-villa",
    title: "Nordic Villa",
    location: "Jurmala, Latvia",
    category: "Residential",
    cover: projectResidential,
    gallery: [projectResidential, projectCabin, projectInterior],
    products: ["Thermowood Cladding", "CLT Panels"],
    year: 2024,
    summary:
      "A private villa wrapped in vertical thermowood, designed to age gracefully under the Baltic climate.",
  },
  {
    id: "riga-office",
    title: "Riga Headquarters",
    location: "Riga, Latvia",
    category: "Commercial",
    cover: projectCommercial,
    gallery: [projectCommercial, projectOffice, projectInterior],
    products: ["CLT Panels", "Custom Solutions"],
    year: 2024,
    summary:
      "Mixed-use commercial building with a CLT-panel façade module integrated into a glass curtain wall.",
  },
  {
    id: "lounge-interior",
    title: "Hotel Lounge",
    location: "Tallinn, Estonia",
    category: "Interior",
    cover: projectInterior,
    gallery: [projectInterior, projectOffice, projectSauna],
    products: ["Acoustic Panels", "CLT Panels"],
    year: 2023,
    summary:
      "Acoustic slat panels and CLT ceilings transform a hotel lounge into a warm, sound-absorbing retreat.",
  },
  {
    id: "forest-cabin",
    title: "Forest Cabin",
    location: "Sigulda, Latvia",
    category: "Residential",
    cover: projectCabin,
    gallery: [projectCabin, projectResidential, projectInterior],
    products: ["Thermowood Cladding"],
    year: 2023,
    summary:
      "Off-grid family cabin clad entirely in thermowood — minimal maintenance, maximum character.",
  },
  {
    id: "wellness-sauna",
    title: "Private Wellness Suite",
    location: "Vilnius, Lithuania",
    category: "Interior",
    cover: projectSauna,
    gallery: [projectSauna, projectInterior, projectCabin],
    products: ["Thermowood Cladding", "Custom Solutions"],
    year: 2024,
    summary:
      "A private spa lined in thermo-aspen — stable, hygienic and beautifully golden under warm light.",
  },
  {
    id: "cultural-center",
    title: "Cultural Center",
    location: "Helsinki, Finland",
    category: "Commercial",
    cover: projectOffice,
    gallery: [projectOffice, projectCommercial, projectInterior],
    products: ["CLT Panels", "Acoustic Panels"],
    year: 2025,
    summary:
      "A community building where exposed CLT structure and acoustic panels share the spotlight.",
  },
];

export const stats = [
  { value: "25+", label: "Years of expertise" },
  { value: "120+", label: "Projects delivered" },
  { value: "12", label: "Countries served" },
  { value: "100%", label: "Chemical-free" },
];
