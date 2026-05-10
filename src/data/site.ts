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
    slug: "lvl-sijas",
    name: "LVL sijas",
    tagline: "Uzticams konstrukcijas materiāls bez vai ar dekoratīvu apdari",
    price: "pēc piedāvājuma",
    image: thermowood,
    gallery: [thermowood, cltThermo, cltPanel1],
    description:
      "LVL (Laminated Veneer Lumber) sijas ir augstas veiktspējas inženierijas koks, kas izgatavots no vairākām koksnes kārtām, salīmētām vienā virzienā. Tas nodrošina izcilu stiprību un stabilitāti — piemērots gan vienkāršām konstrukcijām, gan sarežģītiem arhitektūras projektiem. Mūsu LVL koka sijas ir ražotas Latvijā un pieejamas gan standarta izpildījumā, gan ar dekoratīvu apvilkumu — ozolu, termokoku vai citiem dekoratīviem koka veidiem.",
    specs: [
      { label: "Sertifikācija", value: "CE14080" },
      { label: "Ražots", value: "Latvijā" },
      { label: "Apvilkums", value: "ozols / termokoks / pēc pieprasījuma" },
      { label: "Pielietojums", value: "griesti, jumti, pārsegumi, sienas" },
    ],
    capabilities: [
      "Standarta LVL sija",
      "LVL sija ar ozola dekoratīvo apvilkumu",
      "LVL sija ar termokoka apvilkumu",
      "LVL sija ar citu dekoratīvo koku (pēc pieprasījuma)",
    ],
    process: [
      "Griestu un jumta konstrukcijas",
      "Stāvu pārsegumi",
      "Sienu elementi",
    ],
  },
  {
    slug: "clt-mini-paneli",
    name: "CLT Mini paneļi",
    tagline: "Dekoratīvais koka panelis iekštelpu un āra apdarei",
    price: "pēc piedāvājuma",
    image: cltPanel1,
    gallery: [cltPanel1, cltPanel2, cltThermo],
    description:
      "CLT Mini ir krusteniskā koka panelis (Cross-Laminated Timber), kas paredzēts apdares vajadzībām — gan iekštelpu koka apdarei, gan āra fasādes risinājumiem. Ražots Latvijā pēc individuālām specifikācijām. Pirms ražošanas uzsākšanas svarīgi saprast: vai tas ir apdares materiāls eksterjeram vai interjeram, vai nosegts konstrukciju materiāls. Produkts pieejams standarta, termokoka un akustiskajā variantā.",
    specs: [
      { label: "3 kārtas", value: "18–60 mm biezums" },
      { label: "5 kārtas", value: "30–100 mm (Mini — līdz 50 mm)" },
      { label: "Platums", value: "līdz 1300 mm" },
      { label: "Garums", value: "līdz 12 000 mm" },
      { label: "Ražots", value: "Latvijā" },
    ],
    capabilities: [
      "CLT Mini standarts — dabīgs koks",
      "CLT Mini Termo — termokoka apdare, ārā un iekštelpās",
      "CLT Mini Acoustic — skaņas absorbcija iekštelpu projektiem",
    ],
    process: [
      "Sienu un griestu apdare iekštelpās",
      "Āra fasādes apdare",
      "Starpstāvu pārsegumi",
      "Dizaina elementi un arhitektūras akcenti",
    ],
  },
  {
    slug: "akustiskie-paneli",
    name: "Akustiskie paneļi",
    tagline: "Skaista telpa ar labu skanējumu",
    price: "pēc piedāvājuma",
    image: acousticPanel,
    gallery: [acousticPanel, cltPanel1, cltThermo],
    description:
      "Akustiskie koka paneļi no dabīgas priedes sloksnēm uz PET akustiskā filca pamatnes. Samazina atbalsi un skaņas absorbciju telpā, vienlaikus piešķirot iekštelpai siltu, dabīgu izskatu. Ražoti Latvijā, pieejami vairākos apdares variantos.",
    specs: [
      { label: "Izmēri", value: "1200×3000 mm (standarts), 1200×5000 mm, pēc pasūtījuma" },
      { label: "Sloksnes", value: "biezums 24 mm (priede)" },
      { label: "Pamatne", value: "PET akustiskais filcs (melns)" },
      { label: "NRC", value: "0.55" },
      { label: "Apdare", value: "dabīga / dūmota / termoapstrādāta" },
      { label: "Montāža", value: "skrūves vai līme" },
    ],
    process: [
      "Biroji un atklātās darba telpas",
      "Ierakstu studijas un mediju telpas",
      "Restorāni, viesnīcas, sabiedriskās telpas",
      "Mājas studijas un mūzikas telpas",
    ],
  },
  {
    slug: "evelets-zagmaterials",
    name: "Ēvelēts zāģmateriāls un profilēti dēļi",
    tagline: "Apdares risinājumi iekštelpām un ārai",
    price: "pēc piedāvājuma",
    image: cltPanel2,
    gallery: [cltPanel2, thermowood, cltPanel1],
    description:
      "Piedāvājam ēvelētu zāģmateriālu un profilētus dēļus iekštelpu un āra apdares vajadzībām — vagonīte, blokhauss, terase un citi profili. Visi produkti ražoti Latvijā un pieejami pēc klienta specifikācijām — bez minimālā pasūtījuma apjoma.",
    specs: [
      { label: "Profili", value: "vagonīte, blokhauss, terase u.c." },
      { label: "Ražots", value: "Latvijā" },
      { label: "MOQ", value: "Bez minimālā pasūtījuma" },
    ],
    process: [
      "Iekštelpu sienu un griestu apdare",
      "Grīdas dēļi un terase",
      "Āra fasādes apdare",
      "Dekoratīvie elementi",
    ],
  },
  {
    slug: "dupleks-panelis",
    name: "Dupleks panelis",
    tagline: "Specializēts koka panelis taras ražošanai",
    price: "pēc piedāvājuma",
    image: cltThermo,
    gallery: [cltThermo, cltPanel1, cltPanel2],
    description:
      "Dupleks panelis ir salīmēts divu kārtu produkts no 4–5 mm plāniem dēlīšiem ar kopējo biezumu 8–10 mm. Izstrādāts speciāli vīna kastu un koka taras ražotājiem. Eksportējam uz ES un ārpus tās — wine crate panels manufacturer with export across Europe.",
    specs: [
      { label: "Kārtas", value: "2 salīmētas kārtas" },
      { label: "Vienas kārtas biezums", value: "4–5 mm" },
      { label: "Kopējais biezums", value: "8–10 mm" },
      { label: "Pielietojums", value: "vīna kastes, koka tara, iepakojums" },
    ],
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
