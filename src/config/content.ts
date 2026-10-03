const General = {
  name: "Nathan Roark",
  initials: "NR",
  location: "Seattle, Washington",
  locationLink: "https://www.google.com/maps/place/Seattle,+WA",
  about: "Software Engineer",
  summary:
    "Software engineer living in Seattle. Creating things I want to exist. Working on things I find intesting.",
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
        name: "atproto",
        url: "https://bsky.app/profile/nathanroark.bsky.social",
        icon: "bluesky",
      },
    ],
  },
};

type Tool = {
  label: string;
  name: string;
  link?: string;
};

const Tools: Record<string, Tool> = {
  textEditor: {
    label: "Editor",
    name: "Neovim",
    link: "https://neovim.io/",
  },
  terminalMultiplexer: {
    label: "Multiplexer",
    name: "Tmux",
    link: "https://tmux.app/",
  },
  theme: {
    label: "Theme",
    name: "Sora",
    link: "https://soratheme.com/",
  },
  noteTaker: {
    label: "Notes",
    name: "Notion",
    link: "https://www.notion.com/",
  },
  whiteboard: {
    label: "Whiteboard",
    name: "Excalidraw",
    link: "https://excalidraw.com/",
  },
  laptop: {
    label: "Laptop",
    name: "MacBook Pro M2 Max",
  },
};

const Education = {
  csMasters: {
    id: "uah-mscs-2025",
    school: "University of Alabama in Huntsville",
    degree: "Masters in Computer Science",
    year: "December 2025",
    extra: "GPA 4.0",
  },
  cpeBachelors: {
    id: "uah-bsce-2020",
    school: "University of Alabama in Huntsville",
    degree: "Bachelors in Computer Engineering",
    year: "December 2020",
    extra: "GPA 3.6",
  },
};

const Certifications = {
  securityPlus: {
    name: "CompTIA Security+",
    image: "/certs/comptia-security-ce-certification.png",
    link: "https://www.credly.com/badges/56b33a6d-2577-4fea-ba33-2c463e140be2/public_url",
  },
  azureFundamentals: {
    // name: "Microsoft Certified: Azure Fundamentals",
    name: "Azure Fundamentals",
    image: "/certs/ms-azure-fundamentals.png",
    link: "https://learn.microsoft.com/en-us/users/nathanroark/transcript/vnmx3szej6owgn3",
  },
};

const Skills = {
  languages: {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  machineLearning: {
    group: "Machine Learning",
    items: [
      "PyTorch",
      "OpenCV",
      "Pandas",
      "CUDA",
      "NumPy",
      "Matplotlib",
      // "scikit-learn",
      // "SciPy",
      // "Jupyter",
      // "CNNs",
      // "RNNs",
      // "Transfer Learning",
      // "TensorRT",
    ],
  },
  // computerVision: {
  //   group: "Computer Vision",
  //   items: [
  //     "Object Detection",
  //     "Image Segmentation",
  //     "MOSSE",
  //     "KCF",
  //     "CSRT",
  //     "YOLO",
  //     "ONNX",
  //     "CUDA",
  //   ],
  // },
  frontend: {
    group: "Frontend",
    items: [
      "React",
      "Astro",
      "Tanstack Start",
      "Tailwind",
      "Vite",
      "D3",
      // "Svelte",
      // "Next.js",
    ],
  },
  // visualization: {
  //   group: "Visualization",
  //   items: ["D3", "Matplotlib", "Canvas"],
  // },
  backendAndData: {
    group: "Backend & Data",
    items: [
      "FastAPI",
      "Hono",
      "Qt",
      "Unity",
      "PostgreSQL",
      "Prisma",
      "REST",
      "gRPC",
      "Websockets",
    ],
  },
  infrastructure: {
    group: "Infrastructure",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Git",
      "Unix",
      "Cloudflare",
      "Azure",
    ],
  },
};

const Projects = {
  basic: {
    group: "Basic Projects",
    projects: {
      developerPortfolio: {
        title: "Developer Portfolio",
        description: "This website ༼ つ ◕_◕ ༽つ",
        techStack: ["Astro", "TypeScript", "Tailwind"],
        link: {
          label: "nathanroark.dev",
          href: "https://nathanroark.dev",
        },
      },
      mediaBlog: {
        title: "Media Blog",
        description: "Static blog for media and sometimes my thoughts about it",
        techStack: ["Astro", "TypeScript", "Tailwind", "Markdown"],
        link: {
          label: "nathanroark.com",
          href: "https://nathanroark.com",
        },
      },
    },
  },
  fullStack: {
    group: "Full Stack Projects",
    projects: {
      cosmos: {
        title: "Cosmos",
        description:
          "A space knowledge explorer. Browse planets, moons, galaxies, and space missions. All with beautiful images from NASA.",
        techStack: ["Tanstack Start", "React", "TypeScript", "Tailwind"],
        link: {
          label: "cosmos.foo",
          href: "https://cosmos.foo",
        },
      },
      dataVizDemos: {
        title: "Data Viz Demos",
        description:
          "A small collection of interactive demos, each self-contained and custom-built.",
        techStack: ["Tanstack Start", "React", "D3", "TypeScript", "Tailwind"],
        link: {
          label: "data-viz.nathanroark.dev",
          href: "https://data-viz.nathanroark.dev",
        },
      },
      audioVisualizer: {
        title: "Audio Visualizer",
        description:
          "Visualize audio input into the browser with various graphs.",
        techStack: ["React", "TypeScript", "Tailwind"],
        link: {
          label: "audio-visualizer.nathanroark.dev",
          href: "https://voice.nathanroark.dev",
        },
      },
      pongWars: {
        title: "Pong Wars",
        description: "Pong Wars rendered on Canvas.",
        techStack: ["Svelte", "TypeScript", "Tailwind"],
        link: {
          label: "pong-wars.nathanroark.dev",
          href: "https://github.com/nathanroark/pong-wars",
        },
      },
      coverflow: {
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
    },
  },
  artificialIntelligence: {
    group: "Artificial Intelligence Projects",
    projects: {
      signalClassifier: {
        title: "Deep Learning Signal Classifier",
        description:
          "Various neural networks for modulation classification constructed, trained, and compared against each other",
        techStack: ["PyTorch", "NumPy", "Python"],
        link: {
          label: "github.com",
          href: "https://github.com/nathanroark/deep-learning-signal-classifier",
        },
      },
    },
  },
  modelingAndSimulation: {
    group: "Modeling and Simulation Projects",
    projects: {
      life: {
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
      wolfSheepPredation: {
        title: "Wolf Sheep Predation",
        description: "Agent-based modeling simulation.",
        techStack: ["Next.js", "React", "TypeScript"],
        link: {
          label: "wolf-sheep-predation.nathanroark.dev",
          href: "https://github.com/nathanroark/wolf-sheep-predation",
        },
      },
    },
  },
};

export const Content = {
  general: General,
  education: Education,
  certifications: Certifications,
  skills: Skills,
  projects: Projects,
  tools: Tools,
};

export type Content = typeof Content;
