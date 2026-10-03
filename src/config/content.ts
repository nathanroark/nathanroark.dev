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

const Tools = {
  textEditor: { name: "neovim", link: "https://neovim.io/" },
  terminalMultiplexer: { name: "tmux", link: "https://tmux.app/" },
  theme: { name: "sora", link: "https://soratheme.com/" },
  noteTaker: { name: "Notion", link: "https://www.notion.com/" },
  whiteboard: { name: "Excalidraw", link: "https://excalidraw.com/" },
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

// TODO: Break Content into sections

export const Content = {
  general: General,
  certifications: Certifications,
  education: Education,
  skills: [
    {
      group: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "C++"],
    },
    {
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
    // {
    //   group: "Computer Vision",
    //   items: [
    // "Object Detection",
    // "Image Segmentation",
    // "MOSSE",
    // "KCF",
    // "CSRT',
    // "YOLO",
    // "ONNX",
    // "CUDA",
    //   ],
    // },
    {
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
    // {
    //   group: "Visualization",
    //   items: [
    // "D3",
    // "Matplotlib",
    // , "Canvas"
    //   ],
    // },
    {
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
    {
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
  ],
  project_groups: [
    {
      group: "Full Stack Projects",
      projects: [
        {
          title: "Cosmos",
          description:
            "A space knowledge explorer. Browse planets, moons, galaxies, and space missions. All with beautiful images from NASA.",
          techStack: ["Tanstack Start", "React", "TypeScript", "Tailwind"],
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
            "Tanstack Start",
            "React",
            "D3",
            "TypeScript",
            "Tailwind",
          ],
          link: {
            label: "data-viz.nathanroark.dev",
            href: "https://data-viz.nathanroark.dev",
          },
        },
        {
          title: "Audio Visualizer",
          description:
            "Visualize audio input into the browser with various graphs.",
          techStack: ["React", "TypeScript", "Tailwind"],
          link: {
            label: "audio-visualizer.nathanroark.dev",
            href: "https://voice.nathanroark.dev",
          },
        },
        {
          title: "Pong Wars",
          description: "Pong Wars rendered on Canvas.",
          techStack: ["Svelte", "TypeScript", "Tailwind"],
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
            "Various neural networks for modulation classification constructed, trained, and compared against each other",
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
          description: "Static blog for media and sometimes thoughts about it",
          techStack: ["Astro", "TypeScript", "Tailwind", "Markdown"],
          link: {
            label: "nathanroark.com",
            href: "https://nathanroark.com",
          },
        },
        {
          title: "Developer Portfolio",
          description: "This website ༼ つ ◕_◕ ༽つ",
          techStack: ["Astro", "TypeScript", "Tailwind"],
          link: {
            label: "nathanroark.dev",
            href: "https://nathanroark.dev",
          },
        },
      ],
    },
  ],
  tools: Tools,
};
