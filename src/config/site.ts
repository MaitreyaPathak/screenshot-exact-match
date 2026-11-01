// Central portfolio config — edit links, projects, and contact details here.
import coverNotion from "@/assets/cover-notion.jpg";
import coverCro from "@/assets/cover-cro.jpg";
import coverProcess from "@/assets/cover-process.jpg";
import coverAtlas from "@/assets/cover-atlas-concept.jpg";

// Replace "#" placeholders with real URLs. Placeholders render as "Coming soon" instead of a broken link.
export const site = {
  name: "Maitreya Pathak",
  email: "maitreyapath@gmail.com",
  linkedin: "https://linkedin.com/in/maitreyapathak",
  github: "https://github.com/MaitreyaPathak",
  resumeUrl: "#", // TODO: replace with resume PDF URL (e.g. /resume.pdf in public/)
};

export const isPlaceholder = (url: string) => !url || url === "#";

export type Project = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  cover: string;
  url: string;
  linkLabel: string;
  context: string;
  problem: string;
  approach: string;
};

export const projects: Project[] = [
  {
    category: "Product Strategy / Product Teardown",
    title: "Notion's Activation Gap",
    subtitle: "Designing an AI-First Path from Sign-Up to Meaningful Usage",
    description:
      "An independent product strategy case study examining the gap between signing up for Notion and reaching meaningful product usage. Explores onboarding friction and opportunities to make the first experience more intuitive through AI-assisted setup.",
    tags: ["Product Strategy", "User Activation", "Onboarding"],
    cover: coverNotion,
    url: "#", // TODO: NOTION_PDF_LINK
    linkLabel: "View Case Study",
    context: "An independent examination of Notion's first-use experience, from sign-up to meaningful usage.",
    problem: "The gap between creating an account and finding a meaningful starting point in the product.",
    approach: "Examines onboarding friction and explores AI-assisted setup as a potential path to a more intuitive first experience.",
  },
  {
    category: "Growth / Conversion Rate Optimization",
    title: "Finding the Conversion Gap",
    subtitle: "A Product Page CRO Teardown",
    description:
      "A conversion optimization case study examining the Wellbeing Nutrition product detail page. Identifies potential shopping friction and explores opportunities to improve product discovery and purchasing.",
    tags: ["CRO", "E-commerce", "Experimentation"],
    cover: coverCro,
    url: "#", // TODO: CRO_PDF_LINK
    linkLabel: "View Case Study",
    context: "An independent conversion optimisation teardown of a Wellbeing Nutrition product detail page.",
    problem: "Potential shopping friction across product discovery and the purchasing journey.",
    approach: "Examines the product page experience to identify opportunities for clearer discovery and purchasing.",
  },
  {
    category: "Business Strategy / Process Design",
    title: "Untangling the Workflow",
    subtitle: "Identifying Bottlenecks and Designing Better Business Processes",
    description:
      "A process-flow teardown exploring how an existing workflow can be examined, simplified, and redesigned. Focuses on bottlenecks, clarifying ownership, and improving operational visibility.",
    tags: ["Business Analysis", "Process Design", "BizOps"],
    cover: coverProcess,
    url: "#", // TODO: PROCESS_FLOW_PDF_LINK
    linkLabel: "View Case Study",
    context: "A process-flow teardown examining how an existing business workflow could be simplified and redesigned.",
    problem: "Bottlenecks, unclear ownership and limited operational visibility in a business workflow.",
    approach: "Examines the process flow with a focus on clarifying ownership, reducing bottlenecks and improving visibility. Recommendations are proposals, not claims of company implementation.",
  },
  {
    category: "Build / Product Execution",
    title: "ATLAS — Job Discovery & Intelligence Engine",
    subtitle: "Building a Better Way to Discover Relevant Opportunities",
    description:
      "A self-initiated, vibe-coded job discovery tool that collects opportunities from multiple platforms, identifies relevant roles, and ranks them by resume fit.",
    tags: ["Product Thinking", "Automation", "Execution"],
    cover: coverAtlas,
    url: "https://github.com/MaitreyaPathak/ATLAS",
    linkLabel: "View Project",
    context: "A self-initiated build focused on discovering relevant job opportunities across multiple platforms.",
    problem: "Relevant opportunities are spread across platforms and need to be evaluated against a candidate's resume.",
    approach: "Built a job discovery tool that collects opportunities, identifies relevant roles and ranks them by resume fit.",
  },
];

export const experience = [
  {
    org: "DigiBima",
    role: "Product & Business Strategy",
    period: "Oct 2025 – Present",
    body: "Working on business processes, KPI frameworks, digital transition, and improving operational visibility.",
    highlight: "Structure for unclear workflows",
    detail: "Bringing structure to unclear workflows and helping establish better business visibility.",
  },
  {
    org: "Axxela",
    role: "Analyst",
    period: "Jul 2025 – Nov 2025",
    body: "Worked on analytical frameworks using macroeconomic, geopolitical, and supply-demand signals. Ranked No. 1 among a joining cohort of 28 analysts.",
    highlight: "No. 1 / 28 analysts",
    detail: "Ranked first among the joining cohort.",
  },
  {
    org: "iMumz",
    role: "Growth Intern",
    period: "May 2024 – Jul 2024",
    body: "Worked across performance marketing, product, and analytics. Managed performance marketing execution and identified an opportunity that helped reduce CAC by approximately 18% over three months.",
    highlight: "≈18% lower CAC / 3 months",
    detail: "Performance marketing execution across an approximately ₹30 lakh monthly marketing budget.",
  },
  {
    org: "TEDx IIT Indore",
    role: "Curator / Head of Operations",
    period: "",
    body: "Led a 45+ member team and contributed to organising an event with more than 2,000 attendees.",
    highlight: "45+ team / 2,000+ attendees",
    detail: "Team leadership and event operations.",
  },
];

export const capabilities = [
  { title: "Product", items: ["Product teardowns", "User activation and onboarding", "Product research", "Opportunity identification", "Prioritisation"] },
  { title: "Growth", items: ["Conversion rate optimisation", "Performance marketing", "Customer acquisition analysis", "Growth experimentation", "CAC analysis"] },
  { title: "Business Strategy", items: ["Business analysis", "Market and competitor research", "Process design", "KPI frameworks", "Operational visibility"] },
  { title: "Execution", items: ["Cross-functional coordination", "Dashboard and reporting workflows", "Structured problem-solving", "Research and documentation", "Workflow improvement"] },
];

export const problemInterests = [
  "Why are users signing up but not reaching meaningful product usage?",
  "Where are customers dropping off in a purchase journey?",
  "How can an unclear business workflow become a structured process?",
  "Which opportunities should a small team prioritise first?",
];

export const principles = [
  { n: "01", title: "Understand the problem.", body: "Start with the user, business context, and available evidence instead of jumping to solutions." },
  { n: "02", title: "Find the opportunity.", body: "Identify bottlenecks, prioritize opportunities, and understand which changes are likely to matter most." },
  { n: "03", title: "Turn thinking into action.", body: "Translate analysis into experiments, workflows, recommendations, and tangible outputs." },
];
