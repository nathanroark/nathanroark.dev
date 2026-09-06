/* logos:* are full-color brand SVGs; brands whose logo is black (Next.js, Unity,
   JSON) and local:astro (the stock mark's glyph is near-black) and the lucide glyphs stay monochrome so they render in currentColor.

   Prefer square-ish marks: these render at a fixed height with width auto, so
   a wordmark like logos:nvidia (512x98) comes out a sliver next to a 1:1 mark.
   simple-icons carries icon-only versions of most of them. */
export const TECH_ICONS: Record<string, string> = {
  // Languages
  TypeScript: "logos:typescript-icon",
  "C++": "logos:c-plusplus",
  Python: "logos:python",
  JavaScript: "logos:javascript",
  // Machine learning
  PyTorch: "logos:pytorch-icon",
  NumPy: "logos:numpy",
  Pandas: "local:pandas",
  "scikit-learn": "simple-icons:scikitlearn",
  SciPy: "simple-icons:scipy",
  Jupyter: "logos:jupyter",
  CNNs: "lucide:brain-circuit",
  RNNs: "lucide:repeat",
  "Transfer Learning": "lucide:brain",
  // Computer vision
  OpenCV: "simple-icons:opencv",
  "Object Detection": "lucide:scan-box",
  "Image Segmentation": "lucide:layers",
  YOLO: "simple-icons:ultralytics",
  ONNX: "simple-icons:onnx",
  TensorRT: "local:nvidia",
  CUDA: "local:nvidia",
  // Frameworks & libraries
  React: "logos:react",
  Astro: "local:astro",
  Svelte: "logos:svelte-icon",
  "Tanstack Start": "local:tanstack",
  "Next.js": "simple-icons:nextdotjs",
  Tailwind: "logos:tailwindcss-icon",
  Vite: "logos:vitejs",
  SvelteKit: "logos:svelte-icon",
  SASS: "logos:sass",
  "Styled Components": "simple-icons:styledcomponents",
  immer: "logos:immer-icon",
  Markdown: "simple-icons:markdown",
  Qt: "logos:qt",
  D3: "logos:d3",
  Matplotlib: "logos:matplotlib-icon",
  Canvas: "lucide:frame",
  // Tools
  PostgreSQL: "logos:postgresql",
  Docker: "logos:docker-icon",
  Kubernetes: "logos:kubernetes",
  Git: "logos:git-icon",
  Unity: "simple-icons:unity",
  FPGA: "lucide:cpu",
  Verilog: "lucide:cpu",
  Unix: "lucide:terminal",
  Azure: "logos:microsoft-azure",
  // Protocols & APIs
  REST: "lucide:webhook",
  gRPC: "lucide:network",
  Websockets: "lucide:cable",
  XML: "lucide:code-xml",
  JSON: "simple-icons:json",
  Link16: "lucide:radio",
  JREAP: "lucide:radio-tower",
  VMF: "lucide:radio",
  DIS: "lucide:antenna",
  "Signal Processing": "lucide:audio-waveform",
};

export default TECH_ICONS;
