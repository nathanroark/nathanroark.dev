import avatar from "@/assets/it-me.jpeg";
import securityPlusBadge from "@/assets/certs/comptia-security-ce-certification.png";
import azureFundamentalsBadge from "@/assets/certs/ms-azure-fundamentals.png";

const General = {
  name: "Nathan Roark",
  initials: "NR",
  location: "Seattle, WA",
  locationLink: "https://www.google.com/maps/place/Seattle,+WA",
  about: "Full Stack Software Engineer",
  summary:
    "Software engineer living in Seattle. I create things I want to exist and work on problems I find interesting.",
  avatar,
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
  icon?: string;
  link?: string;
};

type ToolGroup = {
  group: string;
  tools: Record<string, Tool>;
};

const Tools: Record<string, ToolGroup> = {
  development: {
    group: "Development",
    tools: {
      textEditor: {
        label: "Editor",
        name: "Neovim",
        icon: "simple-icons:neovim",
        link: "https://neovim.io/",
      },
      terminalMultiplexer: {
        label: "Terminal Multiplexer",
        name: "Tmux",
        icon: "simple-icons:tmux",
        link: "https://tmux.app/",
      },
      tmuxConfig: {
        label: "Tmux Config",
        name: "Oh My Tmux",
        icon: "ohmytmux",
        link: "https://github.com/gpakosz/.tmux",
      },
      gitClient: {
        label: "Git",
        name: "LazyGit",
        icon: "simple-icons:git",
        link: "https://github.com/jesseduffield/lazygit",
      },
      ls: {
        label: "Better ls",
        name: "lsd",
        icon: "lucide:folder-tree",
        link: "https://github.com/lsd-rs/lsd",
      },
      dotfiles: {
        label: "Dotfiles",
        name: "GNU Stow",
        icon: "lucide:link",
        link: "https://www.gnu.org/software/stow/",
      },
    },
  },
  terminal: {
    group: "Terminal",
    tools: {
      terminal: {
        label: "Terminal",
        name: "WezTerm",
        icon: "simple-icons:wezterm",
        link: "https://wezterm.org/",
      },
      shell: {
        label: "Shell",
        name: "Zsh",
        icon: "simple-icons:zsh",
        link: "https://www.zsh.org/",
      },
      prompt: {
        label: "Prompt",
        name: "Oh My Posh",
        icon: "ohmyposh",
        link: "https://ohmyposh.dev/",
      },
      shellHistory: {
        label: "History",
        name: "Atuin",
        icon: "atuin",
        link: "https://atuin.sh/",
      },
      font: {
        label: "Font",
        name: "Maple Mono Nerd Font",
        icon: "maple",
        link: "https://font.subf.dev/",
      },
      theme: {
        label: "Theme",
        name: "Sora",
        icon: "lucide:palette",
        link: "https://soratheme.com/",
      },
    },
  },
  notes: {
    group: "Notes & Diagrams",
    tools: {
      noteTaker: {
        label: "Notes",
        name: "Notion",
        icon: "simple-icons:notion",
        link: "https://www.notion.com/",
      },
      localNotes: {
        label: "Local Notes",
        name: "Obsidian",
        icon: "simple-icons:obsidian",
        link: "https://obsidian.md/",
      },
      whiteboard: {
        label: "Whiteboard",
        name: "Excalidraw",
        icon: "simple-icons:excalidraw",
        link: "https://excalidraw.com/",
      },
      diagrams: {
        label: "UML Diagrams",
        name: "PlantUML",
        icon: "plantuml",
        link: "https://plantuml.com/",
      },
    },
  },
  hosting: {
    group: "Hosting",
    tools: {
      hosting: {
        label: "Hosting",
        name: "Cloudflare",
        icon: "simple-icons:cloudflare",
        link: "https://www.cloudflare.com/",
      },
      domains: {
        label: "Domains",
        name: "Porkbun",
        icon: "simple-icons:porkbun",
        link: "https://porkbun.com/",
      },
    },
  },
  hardware: {
    group: "Hardware",
    tools: {
      laptop: {
        label: "Laptop",
        name: "MacBook Pro M2 Max",
        icon: "simple-icons:apple",
      },
      keyboard: {
        label: "Keyboard",
        name: "Moonlander",
        icon: "moonlander",
        link: "https://www.zsa.io/moonlander",
      },
    },
  },
};

const Education = {
  csMasters: {
    id: "uah-mscs-2025",
    school: "University of Alabama in Huntsville",
    logo: "uah",
    degree: "Masters in Computer Science",
    year: "December 2025",
    extra: "GPA 4.0",
  },
  cpeBachelors: {
    id: "uah-bsce-2020",
    school: "University of Alabama in Huntsville",
    logo: "uah",
    degree: "Bachelors in Computer Engineering",
    year: "December 2020",
    extra: "GPA 3.6",
  },
};

const Certifications = {
  securityPlus: {
    name: "CompTIA Security+",
    image: securityPlusBadge,
    link: "https://www.credly.com/badges/56b33a6d-2577-4fea-ba33-2c463e140be2/public_url",
  },
  azureFundamentals: {
    // name: "Microsoft Certified: Azure Fundamentals",
    name: "Azure Fundamentals",
    image: azureFundamentalsBadge,
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
      // "Matplotlib",
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
      "PostgreSQL",
      "Prisma",
      // "REST",
      // "gRPC",
      // "Websockets",
      "Unity",
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
      // "Cloudflare",
      // "Azure",
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
        description: "Blog for media and my thoughts about it",
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
          "Space knowledge explorer. Browse planets, moons, galaxies, and space missions. All with beautiful images from NASA.",
        techStack: ["Tanstack Start", "React", "TypeScript", "Tailwind"],
        link: {
          label: "cosmos.foo",
          href: "https://cosmos.foo",
        },
      },
      dataVizDemos: {
        title: "Data Visualization Demos",
        description:
          "Collection of interactive demos, each self-contained and custom-built.",
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
          // "Styled Components",
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
          // "Styled Components",
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
