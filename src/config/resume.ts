export const Resume = {
  name: "Nathan Roark",
  initials: "NR",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/Seattle,+WA",
  about: "Full Stack Software Engineer",
  summary:
    "Software engineer with 5+ years of professional experience building mission-critical applications, simulations, and tools. I work primarily with TypeScript/React and C++/Rust",
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
      name: "MS Azure Fundamentals",
      image: "/certs/ms-azure-fundamentals.png",
      link: "https://www.credly.com/badges/your-badge-id",
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
  work: [
    {
      company: "Ignite",
      link: "https://www.intrepidcontrol.com/ignite/",
      badges: ["Full Stack Software Development"],
      title: "Full Stack Software Engineer",
      start: "October 2025",
      end: "Present",
      bullets: [
        "Updated tooling and software libraries used by several applications to set up the future of development for success (React, Java, SQL).",
      ],
    },
    {
      company: "UAH",
      link: "https://www.uah.edu/",
      badges: ["Game Design", "Research", "Geospatial"],
      title: "Researcher",
      start: "May 2025",
      end: "December 2025",
      bullets: [
        "Engineered a high-fidelity immersive 3D visualization application using NASA Earthdata to create an accurate retelling of events of different natural disasters using real-time acquisition data (Unity, C#, Python, Bash).",
      ],
    },
    {
      company: "Trideum",
      link: "https://www.trideum.com/",
      badges: ["Full Stack Software Development", "Modeling and Simulation", "AI/ML"],
      title: "Software Engineer",
      start: "March 2021",
      end: "September 2025",
      bullets: [
        "Architected and led a team in the development of a comprehensive AI testing application supporting operational testing of advanced military systems (TypeScript, React, gRPC, REST, PostgreSQL).",
        "Architected and developed a visualization application displaying complex flight data from an AI-controlled FPGA-based aircraft simulation system (TypeScript, React, Tailwind).",
        "Designed and developed a visualization application to assist Systems Engineers to examine and understand complex system designs such as an Apache AH-64E through an interactive medium (TypeScript, Svelte, D3, Tailwind).",
        "Architected and developed a protocol translation application enabling interoperability between JREAP, Link16, and VMF military communication standards (C++, React, TypeScript).",
        "Built robust translation software converting military protocols (JREAP, Link16, VMF) into DIS formats for simulation interoperability, used in multiple distributed test events involving hundreds of people across the world (C++, Qt).",
        "Implemented radar message translation capabilities into simulation systems, enhancing realism for large-scale networked training exercises involving 2,000+ participants (C++, Qt).",
        "Architected and developed a streamlined note-taking tool designed for cybersecurity tabletop exercises, improving efficiency and collaboration (TypeScript, React, Tailwind).",
        "Developed intuitive UI components for cybersecurity risk assessments and mission planning, enhancing usability and productivity (Unity, C#).",
      ],
    },
    {
      company: "a.i. Solutions",
      link: "https://ai-solutions.com/",
      badges: ["Internship"],
      title: "Computer Engineer Intern",
      start: "Summer 2016",
      // end: "Summer 2016",
      bullets: [
        "Designed an internal inventory management tool for hardware tracking, achieving a 100% reduction in asset discrepancies during quarterly audits (C++, Qt, SQL).",
      ],
    },
  ],
  skills: {
    languages: ["TypeScript", "C++", "Python", "JavaScript"],
    frameworks: ["React", "Astro", "Svelte", "Next.js", "Tailwind", "Vite", "Qt"],
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
  projects: [
    {
      title: "Deep Learning Signal Classifier",
      description:
        "Implemented CNN, LSTM, and hybrid neural networks in PyTorch for automatic modulation classification.",
      techStack: ["PyTorch", "NumPy", "Python"],
      link: {
        label: "github.com",
        href: "https://github.com/nathanroark/deep-learning-signal-classifier",
      },
    },
    {
      title: "SeattleSafeEats",
      description:
        "Designed and built the frontend for all pages, animations, and components.",
      techStack: ["TypeScript", "Svelte", "Tailwind"],
      link: {
        label: "seattlesafeeats.com",
        href: "https://seattlesafeeats.com",
      },
    },
    {
      title: "TypeHero",
      description:
        "Built the browser code editor and authored several type challenges.",
      techStack: ["TypeScript", "Next.js", "React", "Tailwind"],
      link: {
        label: "typehero.dev",
        href: "https://typehero.dev",
      },
    },
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
        "TypeScript",
        "Tailwind",
        "immer",
        "Styled Components",
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
      description: "Agent-based modeling simulation.",
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
      techStack: ["Astro", "TypeScript", "Tailwind"],
      link: {
        label: "nathanroark.dev",
        href: "https://nathanroark.dev",
      },
    },
  ],
} as const;

export default Resume;
