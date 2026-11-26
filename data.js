/* ===== EDIT ONLY THIS FILE to update your portfolio =====
   Add/remove items in any list; the website rebuilds itself.
   To update the resume: replace assets/Arunodhay_PK.pdf (or change `resume` below). */
window.PORTFOLIO = {
  name: "Arunodhay PK",
  location: "Bengaluru, India · Immediate Joiner",
  headline: "Business Analyst | Requirements, UAT & Process Automation | Oracle Enterprise Systems",
  subheadline: "3+ years translating complex stakeholder needs into BRDs, automated reporting, and scalable workflows across Oracle Fusion ERP/CRM and automotive operations. Based in Bengaluru, India (Immediate Joiner).",
  resume: "assets/Arunodhay_PK.pdf",
  email_b64: "YXJ1bm9kaGF5cGtAZ21haWwuY29t",
  phone: "",
  linkedin: "https://linkedin.com/in/arunodhay-pk-14b205144",
  availability: "Available Immediately",

  metrics: [
    { value: "98%", title: "Faster Reporting", text: "Cut monthly Service Request dashboard prep from 105 mins to 2 mins." },
    { value: "300+", title: "Records Corrected", text: "Resolved data quality gaps via OSVC validation rules (out of ~350 flagged)." },
    { value: "~99%", title: "Ticket Closure", text: "Tracked & resolved 100 of 101 Jira & Help Desk escalations across order provisioning & integrations." },
    { value: "30+ Mins", title: "Saved Daily", text: "Automated Service Request, OUDDA/OEDP, and lead assignment workflows." }
  ],

  /* categories: any of "automation", "data", "enterprise" (or add your own + a filter below) */
  filters: [
    { key: "all", label: "All" },
    { key: "automation", label: "Automation" },
    { key: "data", label: "Data Quality" },
    { key: "enterprise", label: "Enterprise Systems" }
  ],
  projects: [
    { org: "Trigent / Oracle", categories: ["automation", "enterprise"],
      title: "End-to-End Service Request & Renewal Reporting Automation",
      problem: "Manual monthly, daily, and partner renewal reporting consumed up to 105 mins per monthly run and 80–90 mins daily.",
      solution: "Gathered user requirements, redesigned dashboards, and built automated Excel VBA & Power Query pipelines with output validation.",
      result: "Reduced monthly prep to 2 mins (98% reduction, saving ~20 hrs/yr), daily reporting to 4–5 mins, and partner renewal runs from 45 to 5 mins." },
    { org: "Trigent / Oracle", categories: ["data", "enterprise"],
      title: "OSVC Data Quality & Missing Entry Governance",
      problem: "Incomplete entries in Oracle Service Cloud caused downstream routing errors and reporting blind spots.",
      solution: "Defined validation rules, authored BRDs/SOPs, and instituted a weekly data-quality review routine.",
      result: "Identified ~350 incomplete records and drove correction of 300+ records." },
    { org: "Trigent / Oracle", categories: ["automation", "enterprise"],
      title: "Automated Queue Routing & ELS Order-Form Workflow",
      problem: "Manual SR assignment, OUDDA/OEDP routing, lead retirement, and ELS order-form data entry caused delays and missed records.",
      solution: "Documented As-Is/To-Be workflows in BRDs/user stories, ran UAT, and launched 30-minute interval auto-assignment plus on-demand ELS order-form automation using Oracle Fusion AR, OSM, and FOM data.",
      result: "Saved 30+ mins/day on SR routing, 20–30 mins/day for a 4-user lead team, and streamlined 350+ invoice/order entries." },
    { org: "Trigent / Oracle", categories: ["automation", "enterprise"],
      title: "AI-Enabled Service Request Transformation Proposal",
      problem: "High manual triage effort across 50+ monthly JAPAC SRs and 100+ APAC lead queries.",
      solution: "Authored business case, BRD, As-Is/To-Be workflows, and SOPs for an Oracle AI Agent-assisted SR workflow.",
      result: "Projected 40–60% effort reduction (currently under business evaluation)." },
    { org: "WyzMindz Solutions", categories: ["automation", "data"],
      title: "Automotive CRM & Multi-Client KPI Reporting",
      problem: "Three automotive clients needed unified visibility across 5 CRM workflows and faster monthly business reviews.",
      solution: "Built 10–16 page MBRs using QlikView, basic SQL, and Excel macros; led functional/regression testing and trained 30+ executives.",
      result: "Cut macro report prep from 15+ mins to under 1 min and resolved 80% (4/5) of logged release defects pre-delivery." }
  ],

  experience: [
    { role: "Business Analyst", company: "Trigent Software Private Limited (Client: Oracle)", dates: "Nov 2024 – Nov 2026", place: "Bengaluru" },
    { role: "Business Analyst", company: "WyzMindz Solutions Private Limited", dates: "Apr 2023 – Nov 2024", place: "Bengaluru (Remote)" },
    { role: "Graduate Engineer Trainee", company: "Tescar Equipment India Private Limited", dates: "Oct 2017 – Apr 2018", place: "Kochi" }
  ],

  skills: [
    { group: "Business Analysis & Agile", items: ["Requirements Gathering", "BRD/FRD", "User Stories", "As-Is/To-Be Process Mapping", "Gap & Root Cause Analysis", "UAT Planning & Execution", "SOP Documentation", "Stakeholder Management"] },
    { group: "Oracle Fusion & Enterprise Systems", items: ["Oracle Fusion Applications", "CPQ Jet", "FEC", "DAS", "Fusion AR", "OSM", "FOM", "OSVC", "Oracle AI Agent Studio"] },
    { group: "Reporting & Automation", items: ["Oracle Analytics Cloud (OAC)", "Advanced Excel", "Excel VBA", "Power Query", "Power Automate", "QlikView", "SQL (Basic)", "Power BI"] },
    { group: "Tools", items: ["Jira", "Help Desk", "Confluence", "OpenProject", "Draw.io", "Microsoft 365"] }
  ],

  certifications: [
    { name: "Oracle Fusion AI Agent Studio Certified Developer Professional – Rel 1", date: "Jan 2026" },
    { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", date: "Dec 2025" },
    { name: "Oracle Fusion AI Agent Studio Certified Foundations Associate – Rel 1", date: "Sep 2025" },
    { name: "Atlassian Agile Project Management Professional Certificate", date: "Dec 2024" },
    { name: "Complete Agile Scrum Master Certification", date: "Jun 2024" },
    { name: "Power BI", date: "Mar 2024" },
    { name: "SQL/MySQL", date: "Jan 2024" }
  ]
};
