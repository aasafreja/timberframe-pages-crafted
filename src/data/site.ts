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
  tagline: "Decorative Micro CLT Panels",
  address: "Vienības gatve 20b, LV-1004, Riga, Latvia",
  phones: ["+371 2929 5353", "+371 2920 6808"],
  email: "timbersmartsolution@gmail.com",
  hours: "Mon – Fri · 09:00 – 18:00",
  ceo: "Elans Tomsevics — Technical Manager & CEO",
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
    name: "CLT Panel with Thermal Wood",
    tagline: "Decorative micro cross-laminated timber",
    price: "from € 37",
    image: cltPanel1,
    gallery: [cltPanel1, cltPanel2, cltThermo],
    description:
      "High-quality pine tree board ideal for furniture making. High-performance engineered wood made from multiple layers of timber glued perpendicularly, paired with thermal wood facing. Serves as both a structural and finishing material in modern construction — ideal for residential buildings, interiors and modular assembly.",
    specs: [
      { label: "Layers", value: "3 / 5 / 7 cross-laminated" },
      { label: "Thickness", value: "1 – 2 inch" },
      { label: "Width", value: "up to 1250 mm" },
      { label: "Length", value: "up to 5000 mm" },
      { label: "Wood species", value: "Nordic spruce / pine" },
      { label: "Adhesive", value: "PUR, formaldehyde-free" },
    ],
  },
  {
    slug: "acoustic-panels",
    name: "Acoustic Panel",
    tagline: "Eco pine slat panels for refined interiors",
    price: "€ 55,00 / panel",
    image: acousticPanel,
    gallery: [acousticPanel, cltPanel1, cltThermo],
    description:
      "Slatted acoustic panels combining natural Nordic pine with a felt backing. Reduce echo and elevate any room with the warmth of real wood. Pre-finished and ready to install on walls or ceilings — perfect for offices, studios, restaurants and homes.",
    specs: [
      { label: "Panel size", value: "4×2 ft – 6×3 ft" },
      { label: "Slat", value: "12 × 24 mm" },
      { label: "Backing", value: "PET acoustic felt, black" },
      { label: "NRC", value: "0.55" },
      { label: "Finish", value: "natural / smoked / thermo" },
      { label: "Mounting", value: "screws / adhesive" },
    ],
  },
  {
    slug: "custom-solutions",
    name: "Custom Solutions",
    tagline: "Architect-grade, made to your spec",
    price: "by quote",
    image: cltPanel2,
    gallery: [cltPanel2, projectInterior, projectOffice],
    description:
      "We manufacture non-standard sizes and specifications tailored to your project needs. Bespoke timber components for architects, designers and developers — from façade systems and ceilings to furniture-grade panels.",
    specs: [
      { label: "MOQ", value: "Contact us" },
      { label: "Lead time", value: "3 – 8 weeks" },
      { label: "CAD support", value: "DWG / IFC / Revit" },
      { label: "Delivery", value: "EU & UK, worldwide on request" },
    ],
    capabilities: [
      "Any custom size",
      "Multiple wood types",
      "Special finishes",
      "Acoustic panels",
      "Load-bearing specifications",
      "Fire-rated options",
      "Laminated designs",
    ],
    process: [
      "Send us your drawings (PDF, CAD, images)",
      "We analyze and provide recommendation",
      "Quote with timeline",
      "Production & quality control",
      "Delivery",
    ],
    moq: "Contact us",
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
