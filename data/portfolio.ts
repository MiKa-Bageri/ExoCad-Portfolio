export type CaseCategory =
  | "crown-bridge"
  | "implant-bar"
  | "smile-design"
  | "surgical-guide";

export interface PortfolioCase {
  id: string;
  title: string;
  category: CaseCategory;
  description: string;
  material: string;
  turnaround: string;
  beforeColor: string;
  afterColor: string;
  tags: string[];
  htmlUrl: string; // Optional HTML URL for 3D viewer
}

export const categoryLabels: Record<CaseCategory, string> = {
  "crown-bridge": "Crown & Bridge",
  "implant-bar": "Implant & Bar",
  "smile-design": "Smile Design / Veneer",
  "surgical-guide": "Surgical Guide",
};

export const portfolioCases: PortfolioCase[] = [
  {
    id: "cb-001",
    title: "Full-Arch Zirconia Bridge",
    category: "crown-bridge",
    description: "14-unit monolithic zirconia bridge with optimized occlusal scheme and verified proximal contacts.",
    material: "Multilayer Zirconia",
    turnaround: "6 hours",
    beforeColor: "from-slate-400 to-slate-600",
    afterColor: "from-teal-300 to-emerald-400",
    tags: ["Full Arch", "Zirconia", "CAD/CAM"],
    htmlUrl: "/Cases/zahra.delir/zahra.delir.html", // Added HTML URL for 3D viewer
  },
  {
    id: "cb-002",
    title: "Anterior E-max Crowns",
    category: "crown-bridge",
    description: "Central incisors with natural translucency mapping and precise margin line on prepped scans.",
    material: "Lithium Disilicate",
    turnaround: "4 hours",
    beforeColor: "from-stone-400 to-stone-600",
    afterColor: "from-sky-200 to-teal-300",
    tags: ["Anterior", "E-max", "Aesthetic"],
    htmlUrl: "/Cases/fatemeh.kateb.imp/fatemeh.kateb.imp.html", // Added HTML URL for 3D viewer
  },
  {
    id: "ib-001",
    title: "All-on-4 Titanium Bar",
    category: "implant-bar",
    description: "Passive-fit milled bar with screw channel optimization and implant platform alignment.",
    material: "Titanium Grade 5",
    turnaround: "8 hours",
    beforeColor: "from-zinc-400 to-zinc-600",
    afterColor: "from-cyan-300 to-blue-400",
    tags: ["All-on-4", "Bar", "Implant"],
    htmlUrl: "/Cases/mehdi.sotoudeh/mehdi.sotoudeh.html", // Added HTML URL for 3D viewer
  },
  {
    id: "ib-002",
    title: "Custom Abutment + Crown",
    category: "implant-bar",
    description: "Hybrid abutment design with emergence profile sculpting and anti-rotational indexing.",
    material: "Titanium + Zirconia",
    turnaround: "5 hours",
    beforeColor: "from-neutral-400 to-neutral-600",
    afterColor: "from-emerald-200 to-teal-400",
    tags: ["Abutment", "Single Implant"],
    htmlUrl: "/portfolio/ib-002.html", // Added HTML URL for 3D viewer
  },
  {
    id: "sd-001",
    title: "Smile Creator Mock-up",
    category: "smile-design",
    description: "Digital wax-up with proportional smile line, incisal edge positioning, and veneer prep guide.",
    material: "PMMA / Composite",
    turnaround: "3 hours",
    beforeColor: "from-amber-300 to-orange-400",
    afterColor: "from-white to-teal-100",
    tags: ["Smile Creator", "Veneer", "Mock-up"],
    htmlUrl: "/portfolio/sd-001.html", // Added HTML URL for 3D viewer
  },
  {
    id: "sd-002",
    title: "10-Unit Veneer Set",
    category: "smile-design",
    description: "Minimal-prep veneer design with inter-proximal contour refinement and shade mapping.",
    material: "Feldspathic Ceramic",
    turnaround: "6 hours",
    beforeColor: "from-yellow-200 to-amber-400",
    afterColor: "from-slate-100 to-teal-200",
    tags: ["Veneer", "Aesthetic Zone"],
    htmlUrl: "/portfolio/sd-002.html", // Added HTML URL for 3D viewer
  },
  {
    id: "sg-001",
    title: "Guided Implant Surgery",
    category: "surgical-guide",
    description: "Stackable surgical guide with sleeve positioning, bone reduction plan, and fixation pin channels.",
    material: "Biocompatible Resin",
    turnaround: "12 hours",
    beforeColor: "from-blue-400 to-indigo-500",
    afterColor: "from-sky-200 to-blue-300",
    tags: ["Guide", "Implant Planning"],
    htmlUrl: "/portfolio/sg-001.html", // Added HTML URL for 3D viewer
  },
  {
    id: "sg-002",
    title: "Sinus Lift Guide",
    category: "surgical-guide",
    description: "Precision osteotomy guide for lateral window approach with safety margin verification.",
    material: "Surgical Resin",
    turnaround: "10 hours",
    beforeColor: "from-indigo-400 to-violet-500",
    afterColor: "from-violet-200 to-indigo-300",
    tags: ["Sinus Lift", "Surgical"],
    htmlUrl: "/portfolio/sg-002.html", // Added HTML URL for 3D viewer
  },
];

export const stats = {
  successfulCases: 2840,
  avgTurnaround: "4.2h",
  marginalFitRate: 99.2,
  yearsExperience: 8,
};

export const modules = [
  {
    name: "Smile Creator",
    description: "Digital smile design with 2D/3D integration and patient preview.",
    icon: "Smile",
  },
  {
    name: "Full Denture",
    description: "Complete denture workflows with gingiva characterization and teeth setup.",
    icon: "Denture",
  },
  {
    name: "Model Creator",
    description: "Die models, articulator mounting, and removable die generation.",
    icon: "Model",
  },
  {
    name: "Implant Module",
    description: "Abutment design, crown-on-abutment, and implant library integration.",
    icon: "Implant",
  },
  {
    name: "Bar Module",
    description: "All-on-X bar design with passive fit verification and screw channel planning.",
    icon: "Bar",
  },
];

export const outputFormats = ["STL", "PLY", "OBJ", "ConstructionInfo"];

export const workflowSteps = [
  {
    step: 1,
    title: "Scan Intake",
    description: "Receive intraoral scans, CBCT, or impression STL files via secure upload or messaging.",
    duration: "15 min",
  },
  {
    step: 2,
    title: "Occlusion & Margin Review",
    description: "Verify bite alignment, margin integrity, undercuts, and implant positioning before design.",
    duration: "30–45 min",
  },
  {
    step: 3,
    title: "ExoCad Design & QC",
    description: "Full CAD design with contact checks, emergence profile tuning, and internal quality review.",
    duration: "2–6 hours",
  },
  {
    step: 4,
    title: "Milling / Print Delivery",
    description: "Export production-ready files in your preferred format with construction info included.",
    duration: "Instant",
  },
];

export const slaItems = [
  { type: "Single Crown", time: "4 hours" },
  { type: "3-Unit Bridge", time: "6 hours" },
  { type: "Full-Arch Prosthesis", time: "12 hours" },
  { type: "Surgical Guide", time: "10 hours" },
  { type: "Smile Design Mock-up", time: "3 hours" },
  { type: "Implant Bar (All-on-4)", time: "8 hours" },
];

export const contactInfo = {
  name: "Dina Shad",
  role: "ExoCad Dental CAD Designer",
  email: "studio@dinashad.design",
  phone: "+98 912 000 0000",
  whatsapp: "https://wa.me/989120000000",
  telegram: "https://t.me/dinashad_cad",
  location: "Tehran, Iran — Remote worldwide",
  hours: "Mon–Sat, 8:00 AM – 10:00 PM (IRST)",
};
