export const siteConfig = {
  name: "NeuraFlow Studio",
  description:
    "Premium software and AI engineering for brands building intelligent products, automations, and scalable systems.",
  url: "https://neuraflow.studio",
  ctaEmail: "hello@neuraflow.studio",
  locale: "en-US",
  authors: [
    {
      name: "NeuraFlow Studio",
      url: "https://neuraflow.studio"
    }
  ],
  keywords: [
    "AI agency",
    "software development agency",
    "AI agents",
    "automation engineering",
    "Next.js development",
    "cloud architecture",
    "technical content creation"
  ],
  socialLinks: {
    github: "https://github.com/neuraflowstudio",
    linkedin: "https://www.linkedin.com"
  }
};

export const services = [
  {
    title: "AI Agents",
    description:
      "Task-driven copilots, internal assistants, and customer-facing AI systems with measurable operational impact."
  },
  {
    title: "Automation",
    description:
      "Workflow orchestration that removes repetitive work, standardizes delivery, and shortens response time."
  },
  {
    title: "Web & Mobile Apps",
    description:
      "High-performance product experiences built with modern frontend architecture and maintainable backends."
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable infrastructure, observability, and deployment systems designed to support sustained product growth."
  }
] as const;

export const portfolioProjects = [
  {
    title: "SignalOps",
    category: "AI Operations Platform",
    description:
      "A workflow command center for triaging incidents, syncing runbooks, and routing actions through AI agents.",
    image: "/projects/signalops.svg"
  },
  {
    title: "Lattice Commerce",
    category: "Composable Retail App",
    description:
      "A conversion-focused commerce stack with unified checkout, search intelligence, and content-driven merchandising.",
    image: "/projects/lattice-commerce.svg"
  },
  {
    title: "PulseBoard",
    category: "Analytics SaaS",
    description:
      "A real-time dashboard suite for product, growth, and finance teams that need reliable executive reporting.",
    image: "/projects/pulseboard.svg"
  }
] as const;
