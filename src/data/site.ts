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
    title: "Ziemeļu villa",
    location: "Jūrmala, Latvija",
    category: "Residential",
    cover: projectResidential,
    gallery: [projectResidential, projectCabin, projectInterior],
    products: ["Termokoka apšuvums", "CLT paneļi"],
    year: 2024,
    summary:
      "Privātā villa ietīta vertikālā termokokā, veidota tā, lai skaisti novecotu Baltijas klimatā.",
  },
  {
    id: "riga-office",
    title: "Rīgas galvenā mītne",
    location: "Rīga, Latvija",
    category: "Commercial",
    cover: projectCommercial,
    gallery: [projectCommercial, projectOffice, projectInterior],
    products: ["CLT paneļi", "Pielāgoti risinājumi"],
    year: 2024,
    summary:
      "Daudzfunkcionāla komerciāla ēka ar CLT paneļu fasādes moduli, integrētu stikla aizkarsienā.",
  },
  {
    id: "lounge-interior",
    title: "Viesnīcas atpūtas zona",
    location: "Tallina, Igaunija",
    category: "Interior",
    cover: projectInterior,
    gallery: [projectInterior, projectOffice, projectSauna],
    products: ["Akustiskie paneļi", "CLT paneļi"],
    year: 2023,
    summary:
      "Akustiskie līstu paneļi un CLT griesti pārvērš viesnīcas atpūtas zonu siltā, skaņu absorbējošā vidē.",
  },
  {
    id: "forest-cabin",
    title: "Meža mājiņa",
    location: "Sigulda, Latvija",
    category: "Residential",
    cover: projectCabin,
    gallery: [projectCabin, projectResidential, projectInterior],
    products: ["Termokoka apšuvums"],
    year: 2023,
    summary:
      "Bezelektrības ģimenes mājiņa, pilnībā apšūta ar termokoku — minimāla apkope, maksimāls raksturs.",
  },
  {
    id: "wellness-sauna",
    title: "Privāta wellness telpa",
    location: "Viļņa, Lietuva",
    category: "Interior",
    cover: projectSauna,
    gallery: [projectSauna, projectInterior, projectCabin],
    products: ["Termokoka apšuvums", "Pielāgoti risinājumi"],
    year: 2024,
    summary:
      "Privāts spa, izklāts ar termoapsi — stabils, higiēnisks un skaisti zeltains siltā gaismā.",
  },
  {
    id: "cultural-center",
    title: "Kultūras centrs",
    location: "Helsinki, Somija",
    category: "Commercial",
    cover: projectOffice,
    gallery: [projectOffice, projectCommercial, projectInterior],
    products: ["CLT paneļi", "Akustiskie paneļi"],
    year: 2025,
    summary:
      "Sabiedrības ēka, kurā atklātā CLT konstrukcija un akustiskie paneļi dala uzmanības centru.",
  },
];

export const stats = [
  { value: "25+", label: "Gadu pieredze" },
  { value: "120+", label: "Realizēti projekti" },
  { value: "12", label: "Valstis" },
  { value: "100%", label: "Bez ķīmijas" },
];
