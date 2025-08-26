import { GitHubIcon, LinkedInIcon } from "@/components/icons"

export const RESUME_DATA = {
  name: "Nathan Roark",
  initials: "NR",
  location: "Huntsville, AL",
  locationLink: "https://www.google.com/maps/place/Huntsville",
  about: "Software Engineer • Full‑Stack Developer • Embedded Systems",
  summary:
    "Full‑stack and systems engineer with 4+ years of professional experience building mission‑critical apps and simulations. I work primarily with TypeScript/React and C++/Rust, and I hold an active Secret security clearance.",
  avatarUrl: "it-me.png",
  personalWebsiteUrl: "https://nathanroark.dev",
  contact: {
    email: "nathanroark@protonmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/NathanRoark",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathan-roark/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      id: "uah-mscs-2025",
      school: "University of Alabama in Huntsville",
      degree: "M.S. in Computer Science",
      year: "Expected Winter 2025",
      extra: "GPA 4.0",
    },
    {
      id: "uah-bsce-2020",
      school: "University of Alabama in Huntsville",
      degree: "B.S. in Computer Engineering",
      year: "Winter 2020",
      extra: "GPA 3.6",
    },
  ],
  work: [
    {
      company: "UAH",
      link: "https://www.uah.edu/",
      badges: ["Research", "Modeling & Sim", "Geospatial"],
      title: "Researcher",
      start: "May 2025",
      end: "Present",
      bullets: [
        "Engineered a high‑fidelity 3D visualization platform integrating NASA Earthdata with cellular automata modeling to reconstruct natural disasters in near‑real time (Rust, Unity, C#, Bash).",
      ],
    },
    {
      company: "Trideum",
      link: "https://www.trideum.com/",
      badges: ["Modeling & Sim", "AI/ML", "Embedded Systems"],
      title: "Software Engineer",
      start: "March 2021",
      end: "Present",
      bullets: [
        "Architected and led frontend for an AI testing application used in operational testing (TypeScript, React, gRPC, REST, PostgreSQL).",
        "Built a visualization app for AI‑controlled FPGA‑based aircraft simulations, rendering complex flight telemetry (TypeScript, React, Tailwind).",
        "Developed a protocol translation system enabling interoperability between JREAP, Link16, and VMF standards (C++, React, TypeScript).",
        "Created robust translation software converting JREAP/Link16/VMF to DIS for simulation interoperability, used in worldwide distributed test events (C++, Qt).",
        "Implemented radar message translation capabilities to enhance realism for large‑scale networked training exercises with 2,000+ participants (C++, Qt).",
        "Built a streamlined note‑taking and sharing tool for cybersecurity tabletop exercises to improve efficiency at scale (TypeScript, React, Tailwind).",
        "Developed intuitive UI components for cybersecurity risk assessments and mission planning workflows (Unity, C#).",
      ],
    },
  ],
  skills: [
    // Languages
    "TypeScript",
    "JavaScript",
    "C++",
    "Rust",
    "Python",
    "Go",
    "R",
    "Julia",

    // Web / Backend
    "React",
    "Svelte",
    "Next.js",
    "Node.js",
    "Tailwind",
    "Vite",
    "gRPC",
    "REST",
    "PostgreSQL",

    // Tools & Platforms
    "Docker",
    "Kubernetes",
    "Git",
    "Qt",
    "Unity",
    "FPGA",
    "Verilog",

    // Protocols
    // "DIS",
    // "Link16",
    // "JREAP",
    // "VMF",
    // "MIL‑STD‑1553",
  ],
  projects: [
    // Open‑source / public projects first
    {
      title: "SeattleSafeEats",
      description:
        "Built the frontend for all pages, animations, and components.",
      techStack: ["TypeScript", "Svelte", "Tailwind"],
      link: {
        label: "seattlesafeeats.com",
        href: "https://seattlesafeeats.com",
      },
    },
    {
      title: "TypeHero",
      description:
        "Implemented the browser code editor and authored several type challenges.",
      techStack: ["TypeScript", "Next.js", "React", "Tailwind"],
      link: {
        label: "typehero.dev",
        href: "https://typehero.dev",
      },
    },

    // Existing demos
    {
      title: "Pong Wars",
      description: "Pong Wars rendered on Canvas.",
      techStack: ["Svelte", "SvelteKit", "TypeScript", "Tailwind"],
      link: {
        label: "pong-wars.nathanroark.dev",
        href: "https://pong-wars.nathanroark.dev",
      },
    },
    {
      title: "Coverflow",
      description: "Demo site for a smooth coverflow UI.",
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "SASS",
        "Styled Components",
      ],
      link: {
        label: "coverflow.nathanroark.dev",
        href: "https://coverflow.nathanroark.dev",
      },
    },
    {
      title: "Life",
      description: "Conway's Game of Life.",
      techStack: [
        "Next.js",
        "React",
        "immer",
        "Styled Components",
        "TypeScript",
        "Tailwind",
      ],
      link: {
        label: "life.nathanroark.dev",
        href: "https://life.nathanroark.dev",
      },
    },
    {
      title: "Data Viz Demos",
      description: "Custom D3 visualizations.",
      techStack: ["Next.js", "TypeScript", "React", "D3", "Tailwind"],
      link: {
        label: "data-viz.nathanroark.dev",
        href: "https://data-viz.nathanroark.dev",
      },
    },
    {
      title: "Wolf Sheep Predation",
      description: "Agent‑based modeling simulation.",
      techStack: ["Next.js", "React", "TypeScript"],
      link: {
        label: "wolf-sheep-predation.nathanroark.dev",
        href: "https://wolf-sheep-predation.nathanroark.dev",
      },
    },
    {
      title: "Blog",
      description: "Static blog for media and notes.",
      techStack: ["Astro", "TypeScript", "Tailwind", "Markdown"],
      link: {
        label: "nathanroark.com",
        href: "https://nathanroark.com",
      },
    },
    {
      title: "CV",
      description: "This website — my developer portfolio.",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      link: {
        label: "nathanroark.dev",
        href: "https://nathanroark.dev",
      },
    },
  ],
} as const
