export const Resume = {
  name: "Nathan Roark",
  initials: "NR",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/Seattle,+WA",
  about: "Full Stack Software Engineer",
  summary:
    "Software engineer with 5+ years of professional experience building mission-critical applications, simulations, and tools. I work primarily with TypeScript, React and C++",
  avatarUrl: "/it-me.jpeg",
  personalWebsiteUrl: "https://nathanroark.dev",
  contact: {
    social: [
      {
        name: "GitHub",
        url: "https://github.com/NathanRoark",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathan-roark/",
        icon: "linkedin",
      },
    ],
  },
  certifications: [
    {
      name: "CompTIA Security+",
      image: "/certs/comptia-security-ce-certification.png",
      link: "https://www.credly.com/badges/56b33a6d-2577-4fea-ba33-2c463e140be2/public_url",
    },
    {
      // name: "Microsoft Certified: Azure Fundamentals",
      name: "Azure Fundamentals",
      image: "/certs/ms-azure-fundamentals.png",
      link: "https://learn.microsoft.com/en-us/users/nathanroark/transcript/vnmx3szej6owgn3",
    },
  ],
  education: [
    {
      id: "uah-mscs-2025",
      school: "University of Alabama in Huntsville",
      degree: "Masters in Computer Science",
      year: "December 2025",
      extra: "GPA 4.0",
    },
    {
      id: "uah-bsce-2020",
      school: "University of Alabama in Huntsville",
      degree: "Bachelors in Computer Engineering",
      year: "December 2020",
      extra: "GPA 3.6",
    },
  ],
  skills: {
    languages: ["TypeScript", "C++", "Python", "JavaScript"],
    frameworks: [
      "React",
      "Astro",
      "Svelte",
      "Next.js",
      "Tailwind",
      "Vite",
      "Qt",
      "D3",
    ],
    tools: [
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Git",
      "Unity",
      "FPGA",
      "Verilog",
      "Unix",
    ],
    protocols: [
      "REST",
      "gRPC",
      "Websockets",
      "XML",
      "JSON",
      "Link16",
      "JREAP",
      "VMF",
      "DIS",
    ],
  },
  publications: [
    {
      authors:
        "E. Michael Bearss, Nathan Roark, Juan G. Alonso Guzman, Vi Dang, Suraj Regmi, Mikel D. Petty",
      title: "Using Machine Learning to Win Strike Force One",
      venue: "Peer-reviewed paper presented at AlaSim 2022",
    },
  ],
  project_groups: [
    {
      group: "Full Stack Projects",
      projects: [
        {
          title: "Cosmos",
          description:
            "A space knowledge explorer. Browse planets, moons, galaxies, missions, and more, backed by NASA imagery.",
          techStack: ["TypeScript", "React", "Tailwind", "Tanstack Start"],
          link: {
            label: "cosmos.foo",
            href: "https://cosmos.foo",
          },
        },
        {
          title: "Data Viz Demos",
          description:
            "A small collection of interactive demos, each self-contained and custom-built.",
          techStack: [
            "TypeScript",
            "React",
            "D3",
            "Tailwind",
            "Tanstack Start",
          ],
          link: {
            label: "data-viz.nathanroark.dev",
            href: "https://data-viz.nathanroark.dev",
          },
        },
        {
          title: "Open Data",
          description:
            "Access and visualize federal spending, public health metrics, economic indicators, and more—all from publically available cited sources.",
          techStack: [
            "Tanstack Start",
            "TypeScript",
            "React",
            "Tailwind",
            "D3",
          ],
          link: {
            label: "opendata.foo",
            href: "https://opendata.foo",
          },
        },
        {
          title: "Audio Visualizer",
          description:
            "Visualize audio input into the browser with various graphs.",
          techStack: ["TypeScript", "React", "Tailwind"],
          link: {
            label: "audio-visualizer.nathanroark.dev",
            href: "https://voice.nathanroark.dev",
          },
        },
        {
          title: "Pong Wars",
          description: "Pong Wars rendered on Canvas.",
          techStack: ["Svelte", "SvelteKit", "TypeScript", "Tailwind"],
          link: {
            label: "pong-wars.nathanroark.dev",
            href: "https://github.com/nathanroark/pong-wars",
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
            href: "https://github.com/nathanroark/coverflow",
          },
        },
      ],
    },
    {
      group: "Artificial Intelligence Projects",
      projects: [
        {
          title: "Deep Learning Signal Classifier",
          description:
            "Implemented, trained, and evaluated multiple variants of neural networks in PyTorch for automatic modulation classification.",
          techStack: ["PyTorch", "NumPy", "Python"],
          link: {
            label: "github.com",
            href: "https://github.com/nathanroark/deep-learning-signal-classifier",
          },
        },
      ],
    },
    {
      group: "Modeling and Simulation Projects",
      projects: [
        {
          title: "Life",
          description: "Conway's Game of Life.",
          techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind",
            "immer",
            "Styled Components",
          ],
          link: {
            label: "life.nathanroark.dev",
            href: "https://github.com/nathanroark/life-next",
          },
        },
        {
          title: "Wolf Sheep Predation",
          description: "Agent-based modeling simulation.",
          techStack: ["Next.js", "React", "TypeScript"],
          link: {
            label: "wolf-sheep-predation.nathanroark.dev",
            href: "https://github.com/nathanroark/wolf-sheep-predation",
          },
        },
      ],
    },
    {
      group: "Basic Projects",
      projects: [
        {
          title: "Media Blog",
          description: "Static blog for media and notes.",
          techStack: ["Astro", "TypeScript", "Tailwind", "Markdown"],
          link: {
            label: "nathanroark.com",
            href: "https://nathanroark.com",
          },
        },
        {
          title: "Developer Portfolio",
          description: "This website — my developer portfolio.",
          techStack: ["Astro", "TypeScript", "Tailwind"],
          link: {
            label: "nathanroark.dev",
            href: "https://nathanroark.dev",
          },
        },
      ],
    },
  ],
} as const;

export default Resume;
