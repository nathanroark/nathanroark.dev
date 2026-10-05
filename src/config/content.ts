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

type Project = {
  name: string;
  description: string;
  link?: string;
  icon?: string;
  techStack: string[];
};

type ProjectGroup = {
  group: string;
  projects: Record<string, Project>;
};

const Projects: Record<string, ProjectGroup> = {
  websites: {
    group: "Websites",
    projects: {
      cosmos: {
        name: "Cosmos",
        description:
          "Space knowledge explorer. Browse planets, moons, galaxies, and space missions",
        link: "https://cosmos.foo",
        techStack: ["Tanstack Start", "React", "TypeScript", "Tailwind"],
      },
      dataVizDemos: {
        name: "Data Visualization Demos",
        description:
          "Collection of interactive demos, each self-contained and custom-built.",
        link: "https://data-viz.nathanroark.dev",
        techStack: ["Tanstack Start", "React", "D3", "TypeScript", "Tailwind"],
      },
      mediaBlog: {
        name: "Media Blog",
        description: "Blog for media and my thoughts about it",
        link: "https://nathanroark.com",
        techStack: ["Astro", "TypeScript", "Tailwind", "Markdown"],
      },
      developerPortfolio: {
        name: "Developer Portfolio",
        description: "This website ༼ つ ◕_◕ ༽つ",
        link: "https://nathanroark.dev",
        techStack: ["Astro", "TypeScript", "Tailwind"],
      },
    },
  },
  interactiveDemos: {
    group: "Interactive Demos",
    projects: {
      audioVisualizer: {
        name: "Audio Visualizer",
        description:
          "Visualize audio input into the browser with various graphs.",
        link: "https://voice.nathanroark.dev",
        techStack: ["React", "TypeScript", "Tailwind"],
      },
      pongWars: {
        name: "Pong Wars",
        description: "Pong Wars rendered on Canvas.",
        link: "https://github.com/nathanroark/pong-wars",
        techStack: ["Svelte", "TypeScript", "Tailwind"],
      },
      coverflow: {
        name: "Coverflow",
        description: "Demo site for a smooth coverflow UI.",
        link: "https://github.com/nathanroark/coverflow",
        techStack: [
          "Next.js",
          "TypeScript",
          "React",
          "SASS",
          // "Styled Components",
        ],
      },
    },
  },

  machineLearning: {
    group: "Machine Learning",
    projects: {
      signalClassifier: {
        name: "Deep Learning Signal Classifier",
        description:
          "Various neural networks for modulation classification constructed, trained, and compared against each other",
        link: "https://github.com/nathanroark/deep-learning-signal-classifier",
        techStack: ["PyTorch", "NumPy", "Python"],
      },
    },
  },
  simulations: {
    group: "Simulations",
    projects: {
      life: {
        name: "Life",
        description: "Conway's Game of Life.",
        link: "https://github.com/nathanroark/life-next",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "immer",
          // "Styled Components",
        ],
      },
      wolfSheepPredation: {
        name: "Wolf Sheep Predation",
        description: "Agent-based modeling simulation.",
        link: "https://github.com/nathanroark/wolf-sheep-predation",
        techStack: ["Next.js", "React", "TypeScript"],
      },
    },
  },
  developerTools: {
    group: "Developer Tools",
    projects: {
      soraTheme: {
        name: "Sora Theme",
        description:
          "Dark VS Code theme ported from my Neovim colorscheme. Ethereal cyan, cool silver, deep OLED blacks.",
        link: "https://github.com/nathanroark/sora-theme-vscode",
        techStack: ["VS Code", "JSON"],
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

type Tool = {
  label: string;
  name: string;
  icon?: string;
  link?: string;
};

type ToolGroup = {
  group: string;
  tools: Tool[];
};

const Tools: ToolGroup[] = [
  {
    group: "Development",
    tools: [
      {
        label: "Editor",
        name: "Neovim",
        icon: "simple-icons:neovim",
        link: "https://neovim.io/",
      },
      {
        label: "Terminal Multiplexer",
        name: "Tmux",
        icon: "simple-icons:tmux",
        link: "https://tmux.app/",
      },
      {
        label: "Tmux Config",
        name: "Oh My Tmux",
        icon: "ohmytmux",
        link: "https://github.com/gpakosz/.tmux",
      },
      {
        label: "Git",
        name: "LazyGit",
        icon: "simple-icons:git",
        link: "https://github.com/jesseduffield/lazygit",
      },
      {
        label: "Better ls",
        name: "lsd",
        icon: "lucide:folder-tree",
        link: "https://github.com/lsd-rs/lsd",
      },
      {
        label: "Dotfiles",
        name: "GNU Stow",
        icon: "lucide:link",
        link: "https://www.gnu.org/software/stow/",
      },
    ],
  },
  {
    group: "Terminal",
    tools: [
      {
        label: "Terminal",
        name: "WezTerm",
        icon: "simple-icons:wezterm",
        link: "https://wezterm.org/",
      },
      {
        label: "Shell",
        name: "Zsh",
        icon: "simple-icons:zsh",
        link: "https://www.zsh.org/",
      },
      {
        label: "Prompt",
        name: "Oh My Posh",
        icon: "ohmyposh",
        link: "https://ohmyposh.dev/",
      },
      {
        label: "History",
        name: "Atuin",
        icon: "atuin",
        link: "https://atuin.sh/",
      },
      {
        label: "Font",
        name: "Maple Mono Nerd Font",
        icon: "maple",
        link: "https://font.subf.dev/",
      },
      {
        label: "Theme",
        name: "Sora",
        icon: "lucide:palette",
        link: "https://soratheme.com/",
      },
    ],
  },
  {
    group: "Notes & Diagrams",
    tools: [
      {
        label: "Notes",
        name: "Notion",
        icon: "simple-icons:notion",
        link: "https://www.notion.com/",
      },
      {
        label: "Local Notes",
        name: "Obsidian",
        icon: "simple-icons:obsidian",
        link: "https://obsidian.md/",
      },
      {
        label: "Whiteboard",
        name: "Excalidraw",
        icon: "simple-icons:excalidraw",
        link: "https://excalidraw.com/",
      },
      {
        label: "UML Diagrams",
        name: "PlantUML",
        icon: "plantuml",
        link: "https://plantuml.com/",
      },
    ],
  },
  {
    group: "Hosting",
    tools: [
      {
        label: "Hosting",
        name: "Cloudflare",
        icon: "simple-icons:cloudflare",
        link: "https://www.cloudflare.com/",
      },
      {
        label: "Domains",
        name: "Porkbun",
        icon: "simple-icons:porkbun",
        link: "https://porkbun.com/",
      },
    ],
  },
  {
    group: "Hardware",
    tools: [
      {
        label: "Laptop",
        name: "MacBook Pro M2 Max",
        icon: "simple-icons:apple",
      },
      {
        label: "Keyboard",
        name: "Moonlander",
        icon: "moonlander",
        link: "https://www.zsa.io/moonlander",
      },
    ],
  },
];

export const Content = {
  general: General,
  projects: Projects,
  education: Education,
  certifications: Certifications,
  skills: Skills,
  tools: Tools,
};

export type Content = typeof Content;
