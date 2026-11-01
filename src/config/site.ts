// Central portfolio config — edit links, projects, and contact details here.
import coverNotion from "@/assets/cover-notion.jpg";
import coverCro from "@/assets/cover-cro.jpg";
import coverProcess from "@/assets/cover-process.jpg";
import coverAtlas from "@/assets/cover-atlas.jpg";

// Replace "#" placeholders with real URLs. Placeholders render as "Coming soon" instead of a broken link.
export const site = {
  name: "Maitreya Pathak",
  email: "YOUR_EMAIL@example.com", // TODO: replace
  linkedin: "#", // TODO: replace with your LinkedIn URL
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
};

export const projects: Project[] = [
  {
    category: "Product Strategy / Product Teardown",
    title: "Notion's Activation Gap",
    subtitle: "Designing an AI-First Path from Sign-Up to Meaningful Usage",
    description:
      "An independent product strategy case study examining the gap between signing up for Notion and reaching meaningful product usage. Explores onboarding friction and opportunities to make the first experience more intuitive through AI-assisted setup.",
    tags: ["Product Strategy", "User Activation", "Onboarding", "AI-First UX"],
    cover: coverNotion,
    url: "#", // TODO: NOTION_PDF_LINK
    linkLabel: "View deck",
  },
  {
    category: "Growth / Conversion Rate Optimization",
    title: "Finding the Conversion Gap",
    subtitle: "A Product Page CRO Teardown",
    description:
      "A conversion optimization case study examining the Wellbeing Nutrition product detail page. Identifies potential shopping friction and explores opportunities to improve product discovery and purchasing.",
    tags: ["CRO", "E-commerce", "User Experience", "Experimentation"],
    cover: coverCro,
    url: "#", // TODO: CRO_PDF_LINK
    linkLabel: "View deck",
  },
  {
    category: "Business Strategy / Process Design",
    title: "Untangling the Workflow",
    subtitle: "Identifying Bottlenecks and Designing Better Business Processes",
    description:
      "A process-flow teardown exploring how an existing workflow can be examined, simplified, and redesigned. Focuses on bottlenecks, clarifying ownership, and improving operational visibility.",
    tags: ["Business Analysis", "Process Design", "Workflow Optimization", "BizOps"],
    cover: coverProcess,
    url: "#", // TODO: PROCESS_FLOW_PDF_LINK
    linkLabel: "View deck",
  },
  {
    category: "Build / Product Execution",
    title: "ATLAS — Job Discovery & Intelligence Engine",
    subtitle: "Building a Better Way to Discover Relevant Opportunities",
    description:
      "A self-initiated, vibe-coded job discovery tool that collects opportunities from multiple platforms, identifies relevant roles, and ranks them by resume fit.",
    tags: ["Product Thinking", "Automation", "Data", "Execution"],
    cover: coverAtlas,
    url: "https://github.com/MaitreyaPathak/ATLAS",
    linkLabel: "View on GitHub",
  },
];

export const experience = [
  {
    org: "DigiBima",
    role: "Product & Business Strategy",
    period: "Oct 2025 – Present",
    body: "Working on business processes, KPI frameworks, digital transition, and improving operational visibility.",
  },
  {
    org: "Axxela",
    role: "Analyst",
    period: "Jul 2025 – Nov 2025",
    body: "Worked on analytical frameworks using macroeconomic, geopolitical, and supply-demand signals. Ranked #1 among analysts.",
  },
  {
    org: "iMumz",
    role: "Growth Intern",
    period: "May 2024 – Jul 2024",
    body: "Worked across performance marketing, product, and analytics. Managed performance marketing execution and identified an opportunity that helped reduce CAC by ~18% over three months.",
  },
  {
    org: "TEDx IIT Indore",
    role: "Curator / Head of Operations",
    period: "",
    body: "Led a 45+ member team and contributed to organising an event with 2,000+ attendees.",
  },
];

export const principles = [
  { n: "01", title: "Understand the problem.", body: "Start with the user, business context, and available evidence instead of jumping to solutions." },
  { n: "02", title: "Find the opportunity.", body: "Identify bottlenecks, prioritize opportunities, and understand which changes are likely to matter most." },
  { n: "03", title: "Turn thinking into action.", body: "Translate analysis into experiments, workflows, recommendations, and tangible outputs." },
];
