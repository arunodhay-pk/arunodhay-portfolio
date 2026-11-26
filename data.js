/* ===== EDIT ONLY THIS FILE to update your portfolio =====
   Add/remove items in any list; the website rebuilds itself.
   To update the resume: replace assets/Arunodhay_PK.pdf (or change `resume` below). */
window.PORTFOLIO = {
  name: "Arunodhay PK",
  location: "Bengaluru, India · Immediate Joiner",
  headline: "Business Analyst | Reporting Automation, Requirements & UAT | Oracle Enterprise Systems",
  subheadline: "Business Analyst with 3.5+ years turning stakeholder needs into BRDs, automated reporting, and scalable workflows across Oracle Fusion, Oracle Service Cloud, and analytics. Based in Bengaluru (Immediate Joiner).",
  resume: "assets/Arunodhay_PK.pdf",
  email_b64: "YXJ1bm9kaGF5cGtAZ21haWwuY29t",
  phone: "",
  linkedin: "https://linkedin.com/in/arunodhay-pk-14b205144",
  availability: "Available Immediately",

  metrics: [
    { value: "98%", title: "Faster Reporting", text: "Cut monthly Service Request (SR) dashboard prep from 105 mins to 2 mins." },
    { value: "300+", title: "Records Corrected", text: "Resolved data quality gaps via Oracle Service Cloud (OSVC) validation rules (out of ~350 flagged)." },
    { value: "~99%", title: "Ticket Closure", text: "Tracked & resolved 100 of 101 Jira & Help Desk escalations across order provisioning & integrations." },
    { value: "30+ Mins", title: "Saved Daily", text: "Automated SR, OUDDA/OEDP, and lead assignment workflows." }
  ],

  filters: [
    { key: "all", label: "All" },
    { key: "automation", label: "Automation" },
    { key: "data", label: "Data Quality" },
    { key: "enterprise", label: "Enterprise Systems" }
  ],

  projects: [
    {
      org: "Trigent / Oracle",
      categories: ["automation", "enterprise"],
      title: "End-to-End Service Request & Renewal Reporting Automation",
      problem: "Manual monthly, daily, and partner renewal reporting consumed up to 105 mins per monthly run and 80–90 mins daily.",
      solution: "Gathered user requirements, redesigned dashboards, and built automated Excel VBA & Power Query pipelines with output validation.",
      result: "Reduced monthly prep to 2 mins (98% reduction, saving ~20 hrs/yr), daily reporting to 4–5 mins, and partner renewal runs from 45 to 5 mins."
    },
    {
      org: "Trigent / Oracle",
      categories: ["data", "enterprise"],
      title: "OSVC Data Quality & Missing Entry Governance",
      problem: "Incomplete entries in OSVC caused downstream routing errors and reporting blind spots.",
      solution: "Defined validation rules, authored BRDs/SOPs, and instituted a weekly data-quality review workflow.",
      result: "Identified ~350 incomplete records and drove correction of 300+ records."
    },
    {
      org: "Trigent / Oracle",
      categories: ["automation", "enterprise"],
      title: "Automated Queue Routing & ELS Order-Form Workflow",
      problem: "Manual SR assignment, OUDDA/OEDP routing, lead retirement, and ELS order-form data entry caused delays and missed records.",
      solution: "Documented As-Is/To-Be workflows in BRDs/user stories, ran UAT, and launched 30-minute interval auto-assignment plus on-demand ELS order-form automation using Oracle Fusion Accounts Receivable (AR), Oracle Subscription Management (OSM), and Fusion Order Management (FOM) data.",
      result: "Saved 30+ mins/day on SR routing, 20–30 mins/day for a 4-user lead team, and streamlined 350+ invoice/order entries."
    },
    {
      org: "Trigent / Oracle",
      categories: ["automation", "enterprise"],
      title: "AI-Enabled Service Request Transformation Proposal",
      problem: "High manual triage effort across 50+ monthly JAPAC SRs and 100+ APAC lead queries.",
      solution: "Authored business case, BRD, As-Is/To-Be process maps, and SOPs for an Oracle AI Agent-assisted SR workflow.",
      result: "Projected 40–60% effort reduction (currently under business evaluation)."
    },
    {
      org: "WyzMindz Solutions",
      categories: ["automation", "data"],
      title: "Automotive CRM & Multi-Client KPI Reporting",
      problem: "Three automotive clients needed unified visibility across 5 CRM workflows and faster Monthly Business Reviews (MBRs).",
      solution: "Built 10–16 page MBRs using QlikView, SQL, and Excel macros; led functional/regression testing and trained 30+ executives.",
      result: "Cut macro report prep from 15+ mins to under 1 min and resolved 80% (4/5) of logged release defects pre-delivery."
    }
  ],

  experience: [
    {
      role: "Business Analyst",
      company: "Trigent Software Private Limited (Client: Oracle)",
      dates: "Nov 2024 – Nov 2026",
      place: "Bengaluru",
      highlights: [
        "Supported Oracle University service delivery for JAPAC: reporting, data analysis, process management, and stakeholder management.",
        "Wrote BRDs, user stories, and SOPs for 4 automation initiatives.",
        "Raised and tracked 101 tickets (77 Help Desk, 24 Jira) with 99% closure."
      ]
    },
    {
      role: "Business Analyst",
      company: "WyzMindz Solutions Private Limited",
      dates: "Apr 2023 – Nov 2024",
      place: "Bengaluru (Remote)",
      highlights: [
        "Led requirements gathering, functional/regression testing, and client training across automotive CRM workflows.",
        "Automated reporting with Power Query, Excel macros, and QlikView."
      ]
    },
    {
      role: "Graduate Engineer Trainee",
      company: "Tescar Equipment India Private Limited",
      dates: "Oct 2017 – Apr 2018",
      place: "Kochi",
      highlights: [
        "Managed Kerala client service operations, site maintenance, and operator supervision."
      ]
    }
  ],

  skills: [
    {
      group: "Business Analysis & Agile",
      items: ["Requirements Gathering", "BRD & FRD", "User Stories", "Acceptance Criteria", "Agile / Scrum", "As-Is / To-Be Mapping", "Gap & Root Cause Analysis", "UAT Planning & Execution", "SOP Documentation", "Stakeholder Management"]
    },
    {
      group: "Generative AI & Automation",
      items: ["Generative AI", "Gemini", "Claude", "ChatGPT", "OpenAI Codex", "Oracle AI Agent Studio", "Prompt Engineering", "Power Automate", "Excel VBA", "Power Query"]
    },
    {
      group: "Oracle Fusion & Enterprise Systems",
      items: ["Oracle Fusion Applications", "Configure, Price, Quote (CPQ)", "FEC", "DAS", "Accounts Receivable (AR)", "OSM", "FOM", "Oracle Service Cloud (OSVC)"]
    },
    {
      group: "Reporting, Analytics & Tools",
      items: ["Oracle Analytics Cloud (OAC)", "Advanced Excel", "QlikView", "Power BI", "SQL (Basic)", "ETL", "Jira", "Help Desk", "Confluence", "OpenProject", "Draw.io"]
    }
  ],

  certifications: [
    { name: "Oracle Fusion AI Agent Studio Certified Developer Professional – Rel 1", date: "Jan 2026", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" },
    { name: "Oracle Cloud Infrastructure (OCI) 2025 Certified AI Foundations Associate", date: "Dec 2025 · Valid to Dec 2027", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" },
    { name: "Oracle Fusion AI Agent Studio Certified Foundations Associate – Rel 1", date: "Sep 2025", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" },
    { name: "Atlassian Agile Project Management Professional Certificate", date: "Dec 2024", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" },
    { name: "Complete Agile Scrum Master Certification Training", date: "Jun 2024", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" },
    { name: "Microsoft Power BI Desktop for Business Intelligence", date: "Mar 2024", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" },
    { name: "SQL – MySQL for Data Analytics and Business Intelligence", date: "Jan 2024", url: "https://www.linkedin.com/in/arunodhay-pk-14b205144/details/certifications/" }
  ],

  education: [
    {
      degree: "B.E. Mechanical Engineering",
      institution: "Visvesvaraya Technological University (Coorg Institute of Technology)",
      dates: "2013 – 2017"
    }
  ],

  languages: ["English", "Hindi", "Malayalam"]
};
