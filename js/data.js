/* ------------------------------------------------------------------
   Edit the arrays below to update site content.
   No build step needed — just save and refresh the browser.
   ------------------------------------------------------------------ */

const SITE = {
  name: "Vaibhav Vinod Ingle",
  tagline: "Civil Engineer & Researcher — advanced cementitious composites, supplementary cementitious materials (SCMs), sustainable construction materials, ultra-high-performance fiber-reinforced concrete (UHPFRC), biochar- and hemp fiber-reinforced composites, soil–cement systems, additive manufacturing of concrete (3D concrete printing), and Acoustic Emission Technique (AET)",
  email: "inglevaibhav02@gmail.com",
  universityEmail: "inglev@oregonstate.edu",
  phone: "+1 (541) 908-4172",
  linkedin: "https://www.linkedin.com/in/vaibhav-ingle-bba5a920b/",
  github: "https://scholar.google.com/citations?user=o8SdbqoAAAAJ&hl=en",
  resumeFile: "assets/resume.pdf",
  resumeVersion: "2026-07-05",
  photo: "assets/images/profile.jpg",
  about: [
    "Civil Engineer with an M.S. in Civil and Construction Engineering (Research) from Oregon State University, USA (expected September 2026), an M.Tech. in Structural Engineering, and a B.E. in Civil Engineering, complemented by over two years of research and development experience in advanced construction materials and structural systems at CSIR-Structural Engineering Research Centre, India.",
    "Expertise includes the design, characterization, and performance evaluation of cementitious materials, supplementary cementitious materials (SCMs), ultra-high-performance fiber-reinforced concrete (UHPFRC), steel and natural fiber-reinforced composites, biochar-modified materials, soil–cement systems, and 3D concrete printing. Experienced in experimental testing and material characterization following ASTM, EN, and ISO standards, with proficiency in non-destructive testing (NDT) techniques and data-driven performance assessment.",
    "Passionate about translating research into practical engineering solutions that advance resilient, sustainable, and innovative construction and infrastructure.",
  ],
};

const EXPERIENCE = [
  {
    role: "Graduate Research Assistant",
    org: "Oregon State University — Civil & Construction Engineering, Corvallis, OR",
    period: "Sep 2024 — Present",
    points: [
      "Executing research on soil-cement-based 3D printing (extrusion additive construction), generating data on mix design, fresh-state rheology, and geotechnical performance.",
      "Developing and optimizing soil-binder mixture designs for 3D-printed infrastructure, funded by ERDC.",
      "Developing soil-binder-biochar and hemp fiber mixture designs and prototyping for improved acoustic/thermal performance of mass timber components using forestry waste.",
      "Formulating hypotheses, designing controlled experiments, and independently managing the full research pipeline from material selection to data analysis and scientific writing.",
      "Targeting 1 journal submission from MS thesis; expected graduation September 2026.",
    ],
  },
  {
    role: "Junior Research Fellow (JRF)",
    org: "CSIR-Structural Engineering Research Centre (CSIR-SERC), Chennai, India",
    period: "Nov 2022 — Aug 2024",
    points: [
      "Designed and evaluated multi-component UHPFRC systems (portland cement, silica fume, fly ash, limestone powder), studying pozzolanic reactivity, particle packing, and SCM effects on hydration kinetics and mechanical performance.",
      "Optimized superplasticizer dosage/type to control workability, setting behavior, open time, and buildability in UHPFRC mixes.",
      "Pioneered Acoustic Emission (AE) characterization of 3D-printed UHPFRC during fresh-to-hardened transitions — published in Journal of Building Engineering (2025).",
      "Conducted fresh- and hardened-state testing (compressive strength, flexural performance, fracture mechanics) per ASTM/EN standards.",
      "Generated 5 publications (3 first-authored) and 30 citations in ~2 years; presented at FraMCoS-XI international fracture mechanics conference.",
      "Supervised and coordinated junior lab staff during experimental work.",
    ],
  },
  {
    role: "Project Associate – I",
    org: "CSIR-Central Building Research Institute (CSIR-CBRI), Roorkee, India",
    period: "Aug 2022 — Oct 2022",
    points: ["Contributed to 3D concrete printing R&D at a leading national laboratory."],
  },
  {
    role: "Research Intern (during M.Tech)",
    org: "CSIR-Structural Engineering Research Centre (CSIR-SERC), Chennai, India",
    period: "Jan 2022 — Jul 2022",
    points: [
      "Developed and validated printable concrete mix designs, characterizing fresh and hardened-state performance to establish baseline cement system behavior (published in Structural Concrete, 2023/2024).",
      "Conducted ASTM/EN testing and communicated results and technical recommendations to senior scientists.",
    ],
  },
  {
    role: "Teaching Assistant — Strength of Materials",
    org: "SGGSIET Nanded, India",
    period: "Feb 2021 — Sep 2021",
    points: ["Designed and delivered instructional content for undergraduate civil engineering students."],
  },
];

const PROJECTS = [
  {
    title: "Soil-Cement 3D Printing for Infrastructure",
    description: "ERDC-funded research developing and optimizing soil-binder mixture designs for extrusion-based additive construction of infrastructure.",
    tags: ["3D Printing", "Soil-Cement", "Mix Design"],
    link: "#",
  },
  {
    title: "Soil-Binder-Biochar & Hemp Fiber Mass Timber Components",
    description: "Prototype design using forestry waste (biochar, hemp fiber) to improve acoustic and thermal performance of mass timber components.",
    tags: ["Sustainable Materials", "Biochar", "Mass Timber"],
    link: "#",
  },
  {
    title: "Acoustic Emission Characterization of 3D-Printed UHPFRC",
    description: "Pioneered AE monitoring of 3D-printed UHPFRC during fresh-to-hardened transitions to characterize microcrack evolution and fracture energy.",
    tags: ["UHPFRC", "Acoustic Emission", "3D Printing"],
    link: "https://doi.org/10.1016/j.jobe.2025.113491",
  },
  {
    title: "3D Printable Concrete Without Chemical Admixtures",
    description: "Baseline characterization of fresh and hardened properties of admixture-free printable concrete, forming the foundation for later superplasticizer optimization work.",
    tags: ["Concrete", "Printable Mix Design"],
    link: "https://doi.org/10.1002/suco.202300267",
  },
];

const EDUCATION = [
  {
    degree: "MS in Civil and Construction Engineering (Research)",
    school: "Oregon State University, Corvallis, OR",
    period: "Sep 2024 — Expected Sep 2026",
    detail: "Supervisor: Dr. Pavan Akula | Focus: Sustainable construction materials, mix design, and additive construction (3D printing).",
  },
  {
    degree: "M.Tech in Structural Engineering — CGPA: 7.99/10",
    school: "Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded, India",
    period: "2020 — 2022",
    detail: "",
  },
  {
    degree: "B.E. in Civil Engineering — CGPA: 8.91/10",
    school: "Prof. Ram Meghe College of Engineering & Management, India",
    period: "2014 — 2018",
    detail: "",
  },
];

const PUBLICATIONS = [
  {
    title: "3D Printable Concrete Without Chemical Admixtures: Fresh and Hardened Properties",
    venue: "Structural Concrete, 2023/2024 · 16 citations",
    link: "https://doi.org/10.1002/suco.202300267",
    summary: "Developed and evaluated 3D printable concrete without chemical admixtures, testing slump, flow, extrudability, buildability, and open time in the fresh state, and compressive/flexural/splitting-tensile strength and modulus of elasticity in the hardened state. Found printed specimens showed higher strength in the longitudinal print direction than downward or lateral — establishing a chemical-admixture-free baseline for later UHPFRC optimization.",
  },
  {
    title: "Acoustic Emission Examination of 3D-Printed UHPC With and Without Coarse Aggregate Under Fresh and Hardened States",
    venue: "Journal of Building Engineering, 2025 · 9 citations",
    link: "https://doi.org/10.1016/j.jobe.2025.113491",
    summary: "Characterized plain and fibered 3D-printable UHPC mixes (with/without coarse aggregate) using Acoustic Emission testing through both fresh and hardened states — using AE parameters to detect the transition from printable to non-printable phase, and to characterize anisotropic fracture behavior across notch-to-depth ratios of 0.05, 0.2, and 0.5.",
  },
  {
    title: "Influence of Loading Rate on Flexural Performance and AE Characteristics of UHPC",
    venue: "Structural Engineering and Mechanics, 89(6), 2024 · 5 citations",
    link: "https://doi.org/10.12989/sem.2024.89.6.617",
    summary: "Examined how loading rate affects flexural strength and AE signatures in UHPC, linking mechanical response to underlying fracture behavior.",
  },
  {
    title: "Acoustic Emission Characterization of 3D-Printed Ultra-High Performance Concrete Beams Under Bending",
    venue: "FraMCoS-XI, 2023",
    link: "http://dx.doi.org/10.21012/FC11.092372",
    summary: "Investigated damage evolution and crack formation within the layers of 3D-printed UHPC prisms (with 2% micro steel fibers) using AE testing, in both lateral and perpendicular print orientations — showing print direction drives anisotropic AE behavior.",
  },
  {
    title: "Fracture Characterization of 3D-Printed Ultra-High Performance Fiber Concrete Beams Using Acoustic Emission",
    venue: "FraMCoS-XI, 2023",
    link: "http://dx.doi.org/10.21012/FC11.092368",
    summary: "Used AE testing to study fracture process zone and transition ligament length in 3D-printed UHPFRC beams (steel fiber-reinforced, notch depths 6mm/60mm) under three-point bending, determining both size-dependent and size-independent fracture energies via the Work-of-Fracture and Boundary Effect methods.",
  },
  {
    title: "Acoustic Emission Monitoring of Concrete during Printable and Non-Printable Phase",
    authors: "Prabhat Prem, Vijay Bhaskara, Vaibhav Vinod Ingle",
    venue: "14th Structural Engineering Convention (SEC-2024), NIT Tiruchirappalli · Paper ID 808 · Session: 3D Printed Concrete Structures",
    link: null, // accepted & presented (14 Dec 2024) — no DOI/PDF available yet
    summary: "Accepted and presented at SEC-2024. Uses Acoustic Emission monitoring to detect the transition of concrete from a printable to a non-printable phase during 3D printing.",
  },
];

const REVIEW_SERVICE = [
  {
    role: "Peer Reviewer — Results in Engineering (Elsevier)",
    detail: `Reviewed 3 papers · Reviewer ID VIngle-694 · <a href="https://www.editorialmanager.com/rineng/PersonInfo.aspx" target="_blank" rel="noopener">Editorial Manager profile</a> · <a href="https://orcid.org/0009-0001-9131-5379" target="_blank" rel="noopener">ORCID</a>`,
  },
];

const SKILLS = {
  Technical: [
    "Cement Chemistry",
    "SCM Systems (Silica Fume, Fly Ash, Limestone Powder, GGBS)",
    "Pozzolanic Reactivity & Blended Binder Design",
    "Chemical Admixture Science",
    "UHPFRC / UHPC Mix Design",
    "Fresh & Hardened-State Testing (Compressive, Flexural, Fracture Mechanics)",
    "Acoustic Emission Technique (AET)",
    "ASTM / EN / ISO Standards",
    "3D Concrete Printing",
    "Soil-Cement Characterization",
    "XRD, TGA, FTIR (in progress)",
    "AutoCAD",
    "Origin Pro",
    "Overleaf (LaTeX)",
  ],
  Professional: [
    "Independent Research Design & Execution",
    "Technical Report Writing & Scientific Publication",
    "Data Analysis & Communication",
    "Lab Team Coordination & Supervision",
    "Cross-functional Collaboration",
    "Conference Presentation",
  ],
  Languages: ["English (Fluent)", "Hindi (Fluent)", "Marathi (Native)"],
};

const ACTIVITIES = [
  {
    title: "Travel Fellowship — ASU-Swinburne Workshop on Advances in Concrete 3D Printing",
    period: "Jun 2025",
    detail: "Jointly awarded by Arizona State University & Swinburne University of Technology (NSF AccelNet / 3DConcrete). Competitively selected to present research at an international workshop in Hawthorn, Victoria, Australia; awarded USD $2,750 travel fellowship.",
  },
  {
    title: "Kiewit Center Fellowship",
    period: "Sep 2024",
    detail: "Awarded the 2024-2025 Kiewit Center Fellowship (School of Civil & Construction Engineering, Oregon State University) for academic excellence and research potential — covers full Year-1 tuition, monthly stipend, and medical insurance.",
  },
  {
    title: "GATE Post-Graduate Stipend (AICTE-MoE Scholarship)",
    period: "Jan 2021",
    detail: "National GATE Post Graduate Scholarship awarded to GATE-qualified M.Tech students at recognized institutions (AICTE & Ministry of Education).",
  },
  {
    title: "ASCE Membership",
    period: "Ongoing",
    detail: "Society Student Membership (Member No. 000012639707) and Structural Engineering Institute (SEI) Membership.",
  },
];

const GALLERY = [
  { src: "assets/images/gallery/3d-print-workshop-demo.jpg", caption: "Presenting 3D printing demo and samples at the OSU Engineering Expo, October 2025" },
  { src: "assets/images/gallery/swinburne-university.jpg", caption: "ASU–Swinburne Workshop on Advances in Concrete 3D Printing, Hawthorn, Australia" },
  { src: "assets/images/gallery/workshop-dinner.jpg", caption: "With fellow researchers at the workshop dinner — Swinburne University, Australia" },
];
