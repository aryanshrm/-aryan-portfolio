import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/nav'
import { ProjectGallery, ProjectImage } from '@/components/project-gallery'

interface ValidationSnapshotItem {
  context: string
  result: string
}

interface ProjectData {
  title: string
  subtitle: string
  status?: string
  note?: string
  heroImage: string
  gallery?: ProjectImage[]
  problem: string
  solution: string
  role: string[]
  techStack: string[]
  features: string[]
  results?: string[]
  validationSnapshot?: ValidationSnapshotItem[]
  learnings: string[]
  links: { label: string; url: string; primary?: boolean }[]
  caveat?: string
  demoVideo?: {
    title: string
    description: string
    url: string
  }
}

const projects: Record<string, ProjectData> = {
  promptshield: {
    title: 'PromptShield — Agentic AI Security Scanner',
    subtitle: 'Security scanner for prompt injection, tool misuse, credential exfiltration, memory poisoning, HITL bypass, cross-agent abuse, and semantic prompt attacks.',
    status: 'Validation-backed MVP',
    note: 'Currently being hardened toward production-grade packaging.',
    heroImage: '/projects/promptshield-block.png',
    gallery: [
      { src: '/projects/promptshield-block.png', alt: 'PromptShield dashboard showing BLOCK verdict and 5.00 risk score', caption: 'Actual dashboard result for critical injection detection.' }
    ],
    problem: 'Agentic AI systems can follow malicious instructions hidden in prompts, documents, tool outputs, or cross-agent workflows.',
    solution: 'PromptShield combines deterministic rules, context-aware analysis, suspicion scoring, and optional semantic review to detect and explain agentic AI abuse.',
    role: [
      'Designed and built the detection engine',
      'Developed the FastAPI API and dashboard integration',
      'Created benchmark corpora and validation workflow',
      'Implemented the semantic review layer'
    ],
    techStack: ['Python', 'FastAPI', 'Next.js', 'Pytest', 'YAML', 'Ollama', 'AI Security'],
    features: [
      'Prompt injection and instruction override detection',
      'System/developer prompt extraction detection',
      'Credential exfiltration detection',
      'Tool misuse and agent workflow abuse detection',
      'Memory/context poisoning detection',
      'HITL bypass detection',
      'Context classifier for quoted/defensive near-miss handling',
      'Optional Ollama qwen2.5:7b semantic review',
      'Explainable verdicts and contributing signals'
    ],
    results: [
      '40+ executable rules',
      '400+ backend tests',
      'Recovered 19 deterministic false negatives with optional semantic review'
    ],
    validationSnapshot: [
      {
        context: 'InjecAgent External Agentic Benchmark',
        result: '64% deterministic recall → 100% with semantic review; 0 false positives'
      },
      {
        context: 'v2.48 Error Reduction',
        result: '81% recall, 89% benign safe rate, 78.8% near-miss safe rate; FPs reduced 31 → 4'
      },
      {
        context: 'v2.42 Local Hybrid Semantic',
        result: '100% malicious recall, 100% benign safe rate, 66.7% near-miss safe rate'
      },
      {
        context: 'JailbreakBench External Stress Test',
        result: '3% recall, 50% precision'
      }
    ],
    learnings: [
      'Architecting deterministic vs. semantic detection layers',
      'Building performant Python APIs for security workloads',
      'Creating robust test suites for AI vulnerability scanning'
    ],
    caveat: 'InjecAgent is the most aligned external benchmark currently integrated. Semantic review uses local Ollama qwen2.5:7b and adds latency. JailbreakBench is a broad generic jailbreak stress test outside PromptShield’s default agentic-security scope and remains a known generalization gap.',
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/promptshield', primary: true },
      { label: 'Watch Demo', url: 'https://youtu.be/liucb4vimkA', primary: false }
    ],
    demoVideo: {
      title: 'Demo Video',
      description: '74-second walkthrough of PromptShield detecting benign prompts, prompt injection, and zero-click credential exfiltration — with captions and a GitHub README overview.',
      url: 'https://www.youtube.com/embed/liucb4vimkA'
    }
  },
  codeforge: {
    title: 'CodeForge — Competitive Programming Platform',
    subtitle: 'LeetCode-style full-stack competitive programming platform with Docker-isolated judge, Monaco Editor, real-time leaderboard, AI hints, frosted glass UI.',
    status: 'Docker Sandbox Judge',
    note: 'Full-stack competitive programming platform built with React 18, FastAPI, and Docker.',
    heroImage: '/images/projects/codeforge/codeforge-dashboard.png',
    gallery: [
      {
        src: '/images/projects/codeforge/codeforge-dashboard.png',
        alt: 'CodeForge Home Dashboard',
        caption: 'Home Hero Dashboard with frosted glass UI, 3D beehive background, and navigation.'
      },
      {
        src: '/images/projects/codeforge/codeforge-editor.png',
        alt: 'Monaco Code Editor Workspace',
        caption: 'Split-screen workspace with Monaco Editor, problem statement, language selector, and submit actions.'
      },
      {
        src: '/images/projects/codeforge/codeforge-problems.png',
        alt: 'Interactive Problems List',
        caption: 'Problems index with difficulty tags (Easy/Medium/Hard), solved status indicators, and user progress bar.'
      },
      {
        src: '/images/projects/codeforge/codeforge-execution.png',
        alt: 'Docker Isolated Execution Console',
        caption: 'Execution Console verifying input, actual output, expected output, and execution status.'
      },
      {
        src: '/images/projects/codeforge/codeforge-submission-accepted.png',
        alt: 'Accepted Submission Analytics',
        caption: 'Submission Accepted view displaying 35ms runtime, Beats 98.4% execution ranking, test case details, and judge log.'
      },
      {
        src: '/images/projects/codeforge/codeforge-submission-details.png',
        alt: 'Submission Insights & Code View',
        caption: 'Submission detail view featuring Key Insight, Pro Tip, execution parameters, and submitted code viewer.'
      },
      {
        src: '/images/projects/codeforge/codeforge-leaderboard.png',
        alt: 'Global Leaderboard (Dark Mode)',
        caption: 'Global Leaderboard in dark theme displaying Champion podium, Silver/Bronze ranks, solved problems, and score points.'
      },
      {
        src: '/images/projects/codeforge/codeforge-leaderboard-light.png',
        alt: 'Global Leaderboard (Light Mode)',
        caption: 'Global Leaderboard in light mode showcasing responsive glassmorphism aesthetic.'
      },
      {
        src: '/images/projects/codeforge/codeforge-user-dashboard-light.png',
        alt: 'User Profile Dashboard (Light Mode)',
        caption: 'User Profile Dashboard with active streak tracking, practice counts, submission history, and progress stats.'
      },
      {
        src: '/images/projects/codeforge/codeforge-features.png',
        alt: 'Platform Architecture Highlights',
        caption: 'Core feature modules: Curated Problems, Lightning Fast Judge, and Global Leaderboard.'
      }
    ],
    problem: 'Traditional coding practice sites often suffer from clunky editor UI, insecure execution environments, lack of AI problem hints, and latency during peak leaderboard syncs.',
    solution: 'CodeForge delivers a LeetCode-style full-stack competitive programming platform built with a React 18 + Vite frontend, FastAPI backend, PostgreSQL database, and a Docker container sandbox for safe multi-language code judging (Python, C++, Java, JS) with real-time leaderboard filtering and AI hint generation.',
    role: [
      'Architected full-stack React 18 (Vite + TypeScript) frontend & FastAPI (Python 3.12) backend',
      'Engineered Docker sandbox execution engine for safe remote code judging across Python, C++, Java, and JavaScript',
      'Integrated Monaco Editor with multi-language syntax highlighting, dark mode styling, and custom execution console',
      'Built PostgreSQL + SQLite data access layer using SQLAlchemy, Alembic migrations, Pydantic, and JWT / Google OAuth2 authentication',
      'Designed frosted glass UI featuring 3D beehive background animations, responsive layouts, and streak tracking'
    ],
    techStack: [
      'React 18', 'Vite', 'TypeScript (70.7%)', 'Python 3.12 (24.6%)',
      'FastAPI', 'Docker & Docker Compose', 'Monaco Editor', 'PostgreSQL',
      'SQLite', 'SQLAlchemy', 'Alembic', 'Tailwind CSS', 'Framer Motion',
      'Groq / Gemini AI', 'JWT / OAuth2'
    ],
    features: [
      '💻 Monaco Code Editor — VS Code editor engine with multi-language support and execution controls',
      '⚡ Docker-Isolated Judge Sandbox — Isolated execution environment supporting Python, C++, Java, and JavaScript',
      '🤖 AI Problem Hints — AI-powered hints (Groq / Gemini) to guide users through complex algorithmic blocks',
      '🏆 Real-Time Leaderboard — Live rating updates with real-time filtering, user profiles, and streak counts',
      '🔐 Auth & Admin Control — Google OAuth + JWT auth, admin dashboard, and hidden test case verification',
      '🎨 Frosted Glass UI — Glassmorphism interface with 3D beehive canvas, light/dark mode, and responsive design'
    ],
    results: [
      'Verified Codebase Breakdown: TypeScript 70.7%, Python 24.6%, CSS 1.8%, JavaScript 1.1%, Dockerfile 0.7%, PowerShell 0.4%, Other 0.7%',
      'Multi-Language Judge Engine: Docker sandbox execution for Python, C++, Java, and JavaScript with hidden test case evaluation',
      'Quick Start Docker Orchestration: Single command deployment with docker-compose up -d --build (Frontend :3000, Backend API docs :8000/docs)',
      'Clean Git Repository: 49 commits from source, 1 main re-init commit by Aryan Sharma (@aryanshrm)'
    ],
    validationSnapshot: [
      { context: 'Primary Languages', result: 'TypeScript 70.7% | Python 24.6%' },
      { context: 'Supported Runtimes', result: 'Python, C++, Java, JavaScript' },
      { context: 'Sandbox Engine', result: 'Docker Container Isolated Sandbox' },
      { context: 'Stack', result: 'React 18 + Vite / FastAPI + PostgreSQL / Docker' },
      { context: 'Deployment', result: 'docker-compose up -d --build' }
    ],
    learnings: [
      'Designing low-latency Docker container sandboxes for untrusted code execution',
      'Structuring async FastAPI backend services with SQLAlchemy ORM, Alembic migrations, and JWT authentication',
      'Optimizing Monaco Editor reactivity and custom execution console UI in React 18 + Vite'
    ],
    links: [
      { label: 'Live Platform', url: 'https://hardened-sulfide-probiotic.ngrok-free.dev', primary: true },
      { label: 'GitHub', url: 'https://github.com/aryanshrm/Codeforge', primary: false }
    ]
  },
  'streamline-ai': {
    title: 'Streamline AI — Video Analysis Platform',
    subtitle: 'AI-powered video intelligence platform for object detection, transcription, scene analysis, and sentiment.',
    status: 'Prototype',
    heroImage: '/projects/streamline-01-upload.png',
    gallery: [
      { src: '/projects/streamline-01-upload.png', alt: 'Upload video drag and drop interface', caption: 'Video upload and analysis entry screen.' },
      { src: '/projects/streamline-02-processing.png', alt: 'Processing progress modal', caption: 'Real-time pipeline execution progress.' },
      { src: '/projects/streamline-03-results.png', alt: 'Results dashboard with scene detection', caption: 'Generated analysis dashboard with scenes, objects, and transcript.' },
      { src: '/projects/streamline-04-details.png', alt: 'Video intelligence metadata and object classes', caption: 'Detailed object classes and confidence scores.' }
    ],
    problem: 'Manual video review is slow and hard to search.',
    solution: 'Streamline AI extracts scenes, objects, transcript, and structured outputs from video.',
    role: [
      'Built the AI pipeline',
      'Developed FastAPI endpoints',
      'Created validation flows',
      'Designed and implemented the dashboard experience'
    ],
    techStack: ['FastAPI', 'YOLOv8', 'Whisper', 'NLP', 'Python'],
    features: [
      'Video upload workflow',
      'YOLOv8 object detection',
      'Whisper transcription',
      'Scene detection',
      'JSON output / Results dashboard',
      'Test suite covering end-to-end pipeline'
    ],
    results: [
      'Implemented end-to-end processing pipeline',
      'Integrated multiple ML models (YOLOv8, Whisper) into a unified API'
    ],
    learnings: [
      'Managing ML model lifecycle in web services',
      'Handling asynchronous video processing tasks',
      'Structuring complex JSON intelligence outputs'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/Streamline_Ai', primary: true }
    ]
  },
  nexus: {
    title: 'NEXUS+ AI Image Forensics',
    subtitle: 'Deployed AI image forensics dashboard for detecting AI-generated vs authentic profile images.',
    status: 'Live Deployed App',
    note: 'Streamlit-based machine learning & computer vision application hosted on Streamlit Cloud.',
    heroImage: '/projects/nexus_results.png',
    gallery: [
      { src: '/projects/nexus_results.png', alt: 'NEXUS+ Analysis Results Dashboard', caption: 'Instant verdict panel with threat score breakdown and human vs AI confidence scores.' },
      { src: '/projects/nexus_idle.png', alt: 'NEXUS+ Drag & Drop Forensic Scan UI', caption: 'Clean dark glassmorphism upload interface supporting JPG, PNG, JPEG, and WEBP.' },
      { src: '/projects/nexus_authentic_green.png', alt: 'AUTHENTIC Verdict Verification', caption: 'Authentic camera photograph verification with confidence breakdown.' },
      { src: '/projects/nexus_ai_fixed_red.png', alt: 'AI-GENERATED Verdict Result', caption: 'Synthetic media detection verdict panel with engine explanations.' },
      { src: '/projects/nexus_engines.png', alt: '11-Engine Forensics Breakdown', caption: 'Per-engine risk analysis badges, progress bars, and forensic explanations.' },
      { src: '/projects/nexus_comparison_banner.png', alt: 'Authentic vs AI Forensic Comparison Banner', caption: 'Side-by-side authentic photograph vs synthetic media inspection.' }
    ],
    problem: 'Profile images across social media, dating apps, and digital platforms are increasingly AI-generated or synthetically enhanced. Single-model detectors fail to capture the full spectrum of synthetic artifacts and facial manipulations across diverse generator architectures.',
    solution: 'NEXUS+ is a Streamlit-based machine learning and computer vision project built for AI-generated image detection. It uses multiple forensic engines including neural image classifiers, CLIP semantic analysis, texture smoothness checks, color and saturation analysis, frequency-domain FFT inspection, edge/background analysis, face symmetry detection, Error Level Analysis, watermark detection, and optional fine-tuned ViT inference. The app provides a clean glassmorphism dashboard, AI vs human confidence scores, per-engine explanations, and a downloadable forensic report.',
    role: [
      'Architected and built the multi-engine computer vision & machine learning detection pipeline',
      'Integrated PyTorch, OpenAI CLIP, OpenCV, HuggingFace Transformers, Pillow, and NumPy',
      'Designed clean responsive dark glassmorphism dashboard using Streamlit',
      'Deployed application live on Streamlit Cloud'
    ],
    techStack: [
      'Python', 'Streamlit', 'PyTorch', 'Transformers', 'OpenAI CLIP', 'OpenCV', 'Pillow', 'NumPy'
    ],
    features: [
      '🌐 Live AI image detection web app hosted on Streamlit Cloud',
      '🖼️ Upload JPG, PNG, JPEG, or WEBP images',
      '⚖️ AI-GENERATED vs AUTHENTIC verdict classification',
      '🔬 11-engine forensic analysis pipeline',
      '📊 Human vs AI confidence breakdown',
      '💡 Detailed per-engine explanations',
      '📄 Downloadable forensic report',
      '🎨 Responsive dark glassmorphism UI'
    ],
    results: [
      'Live Demo: Deployed on Streamlit Cloud at https://nexus-lfndahzcq587dhkuxqwrvoe.streamlit.app/',
      '11-Engine Forensic Analysis: Combines neural classifiers, CLIP semantic embeddings, FFT frequency inspection, ELA, texture smoothness, edge analysis, and face symmetry',
      'Explainable AI & Reporting: Generates detailed per-engine explanations and downloadable forensic report'
    ],
    validationSnapshot: [
      { context: 'Pipeline Architecture', result: '11 Parallel Forensic Engines' },
      { context: 'Supported Formats', result: 'JPG, PNG, JPEG, WEBP' },
      { context: 'Deployment Host', result: 'Streamlit Cloud' },
      { context: 'UI Design', result: 'Responsive Dark Glassmorphism' }
    ],
    learnings: [
      'Combining semantic neural embeddings (CLIP, ViT) with frequency domain signal processing (FFT, ELA)',
      'Building responsive glassmorphism ML web applications using Streamlit',
      'Designing explainable multi-engine forensic report pipelines'
    ],
    links: [
      { label: 'Live Demo', url: 'https://nexus-lfndahzcq587dhkuxqwrvoe.streamlit.app/', primary: true },
      { label: 'GitHub Repository', url: 'https://github.com/aryanshrm/ai-profile-detector', primary: false }
    ]
  },
  'ai-profile-detector': {
    title: 'NEXUS+ AI Image Forensics',
    subtitle: 'Deployed AI image forensics dashboard for detecting AI-generated vs authentic profile images.',
    status: 'Live Deployed App',
    note: 'Streamlit-based machine learning & computer vision application hosted on Streamlit Cloud.',
    heroImage: '/projects/nexus_results.png',
    gallery: [
      { src: '/projects/nexus_results.png', alt: 'NEXUS+ Analysis Results Dashboard', caption: 'Instant verdict panel with threat score breakdown and human vs AI confidence scores.' },
      { src: '/projects/nexus_idle.png', alt: 'NEXUS+ Drag & Drop Forensic Scan UI', caption: 'Clean dark glassmorphism upload interface supporting JPG, PNG, JPEG, and WEBP.' },
      { src: '/projects/nexus_authentic_green.png', alt: 'AUTHENTIC Verdict Verification', caption: 'Authentic camera photograph verification with confidence breakdown.' },
      { src: '/projects/nexus_ai_fixed_red.png', alt: 'AI-GENERATED Verdict Result', caption: 'Synthetic media detection verdict panel with engine explanations.' },
      { src: '/projects/nexus_engines.png', alt: '11-Engine Forensics Breakdown', caption: 'Per-engine risk analysis badges, progress bars, and forensic explanations.' },
      { src: '/projects/nexus_comparison_banner.png', alt: 'Authentic vs AI Forensic Comparison Banner', caption: 'Side-by-side authentic photograph vs synthetic media inspection.' }
    ],
    problem: 'Profile images across social media, dating apps, and digital platforms are increasingly AI-generated or synthetically enhanced. Single-model detectors fail to capture the full spectrum of synthetic artifacts and facial manipulations across diverse generator architectures.',
    solution: 'NEXUS+ is a Streamlit-based machine learning and computer vision project built for AI-generated image detection. It uses multiple forensic engines including neural image classifiers, CLIP semantic analysis, texture smoothness checks, color and saturation analysis, frequency-domain FFT inspection, edge/background analysis, face symmetry detection, Error Level Analysis, watermark detection, and optional fine-tuned ViT inference. The app provides a clean glassmorphism dashboard, AI vs human confidence scores, per-engine explanations, and a downloadable forensic report.',
    role: [
      'Architected and built the multi-engine computer vision & machine learning detection pipeline',
      'Integrated PyTorch, OpenAI CLIP, OpenCV, HuggingFace Transformers, Pillow, and NumPy',
      'Designed clean responsive dark glassmorphism dashboard using Streamlit',
      'Deployed application live on Streamlit Cloud'
    ],
    techStack: [
      'Python', 'Streamlit', 'PyTorch', 'Transformers', 'OpenAI CLIP', 'OpenCV', 'Pillow', 'NumPy'
    ],
    features: [
      '🌐 Live AI image detection web app hosted on Streamlit Cloud',
      '🖼️ Upload JPG, PNG, JPEG, or WEBP images',
      '⚖️ AI-GENERATED vs AUTHENTIC verdict classification',
      '🔬 11-engine forensic analysis pipeline',
      '📊 Human vs AI confidence breakdown',
      '💡 Detailed per-engine explanations',
      '📄 Downloadable forensic report',
      '🎨 Responsive dark glassmorphism UI'
    ],
    results: [
      'Live Demo: Deployed on Streamlit Cloud at https://nexus-lfndahzcq587dhkuxqwrvoe.streamlit.app/',
      '11-Engine Forensic Analysis: Combines neural classifiers, CLIP semantic embeddings, FFT frequency inspection, ELA, texture smoothness, edge analysis, and face symmetry',
      'Explainable AI & Reporting: Generates detailed per-engine explanations and downloadable forensic report'
    ],
    validationSnapshot: [
      { context: 'Pipeline Architecture', result: '11 Parallel Forensic Engines' },
      { context: 'Supported Formats', result: 'JPG, PNG, JPEG, WEBP' },
      { context: 'Deployment Host', result: 'Streamlit Cloud' },
      { context: 'UI Design', result: 'Responsive Dark Glassmorphism' }
    ],
    learnings: [
      'Combining semantic neural embeddings (CLIP, ViT) with frequency domain signal processing (FFT, ELA)',
      'Building responsive glassmorphism ML web applications using Streamlit',
      'Designing explainable multi-engine forensic report pipelines'
    ],
    links: [
      { label: 'Live Demo', url: 'https://nexus-lfndahzcq587dhkuxqwrvoe.streamlit.app/', primary: true },
      { label: 'GitHub Repository', url: 'https://github.com/aryanshrm/ai-profile-detector', primary: false }
    ]
  },
  fruityfizz: {
    title: 'FruityFizz — Beverage Brand Product Design',
    subtitle: 'Brand and product landing page design for a beverage concept.',
    status: 'Design Prototype',
    heroImage: '/projects/fruityfizz-01-overview.png',
    gallery: [
      { src: '/projects/fruityfizz-01-overview.png', alt: 'FruityFizz landing page hero section', caption: 'Product/brand landing page design overview.' },
      { src: '/projects/fruityfizz-02-features.png', alt: 'Product features breakdown', caption: 'Highlighting product benefits and flavor profiles.' },
      { src: '/projects/fruityfizz-03-products.png', alt: 'Product showcase of three cans', caption: 'Visualizing the core product variations.' }
    ],
    problem: 'New beverage concepts require bold, high-converting visual direction to stand out in a crowded market.',
    solution: 'FruityFizz is a product/brand design concept focused on bold visual direction, product storytelling, and conversion-oriented sections.',
    role: [
      'Led visual design and branding',
      'Designed layout direction',
      'Created product showcase sections',
      'Built high-fidelity mockups in Figma'
    ],
    techStack: ['Figma', 'Adobe InDesign', 'UI/UX', 'Branding'],
    features: [
      'Brand identity exploration',
      'Landing page design',
      'Product showcase',
      'Pricing/feature sections',
      'High-fidelity Figma prototype'
    ],
    results: [
      'Delivered a polished, high-fidelity design prototype',
      'Established a cohesive brand identity and visual language'
    ],
    learnings: [
      'Balancing bold brand colors with clean UI layout',
      'Designing conversion-focused product sections',
      'Creating interactive prototypes for stakeholder review'
    ],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/proto/ltS7Y3qf5mU3iSoZ930Xqv/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=23%2C440%2C0.09&t=2TlITqBePOKm2D9S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2', primary: true }
    ]
  },
  floweasy: {
    title: 'FlowEasy — SaaS Landing Page',
    subtitle: 'Workflow automation SaaS landing page concept.',
    status: 'Design Prototype',
    heroImage: '/projects/floweasy-01-landing.png',
    gallery: [
      { src: '/projects/floweasy-01-landing.png', alt: 'FlowEasy SaaS landing page hero', caption: 'SaaS landing page concept with features and pricing sections.' },
      { src: '/projects/floweasy-02-pricing.png', alt: 'How it works and pricing plans', caption: 'Simple steps and flexible pricing tiers.' },
      { src: '/projects/floweasy-03-footer.png', alt: 'Footer and newsletter signup', caption: 'Footer navigation and call to action.' }
    ],
    problem: 'SaaS products need to communicate complex workflow automation benefits simply and effectively to drive conversions.',
    solution: 'FlowEasy is a SaaS landing page concept for business workflow automation, designed to communicate product value, benefits, and pricing clearly.',
    role: [
      'Designed the landing page structure',
      'Created feature and benefits sections',
      'Designed pricing cards and comparison tiers',
      'Optimized conversion-focused layout'
    ],
    techStack: ['Figma', 'UI/UX', 'SaaS Design'],
    features: [
      'SaaS hero section',
      'Feature cards',
      'Benefits section',
      'Pricing plans',
      'Testimonials / social proof',
      'Footer and newsletter layout'
    ],
    results: [
      'Created a comprehensive, structured landing page design',
      'Established clear visual hierarchy for B2B SaaS audiences'
    ],
    learnings: [
      'Designing clear and compelling SaaS pricing structures',
      'Creating visual hierarchy for complex product features',
      'Applying modern B2B SaaS design patterns'
    ],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/design/H6EKk5vkugE5ga5QTQYVjh/Untitled?node-id=0-1&t=Knn3vycjfelYbrhi-1', primary: true }
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const project = projects[resolvedParams.slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <article className="py-20 px-4 md:px-8 lg:px-12 border-t border-border mt-16">
        <div className="max-w-6xl mx-auto mt-4">
          {/* Back Link */}
          <div className="mb-8">
            <Link href="/#projects" className="text-primary hover:underline inline-flex items-center gap-2 font-medium">
              <span>←</span> Back to Projects
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
                <p className="text-xl text-foreground/70 max-w-3xl">{project.subtitle}</p>
              </div>
              {project.status && (
                <div className="shrink-0 flex flex-col items-start md:items-end">
                  <span className="inline-flex px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold tracking-wide uppercase">
                    {project.status}
                  </span>
                  {project.note && (
                    <span className="text-sm text-foreground/60 mt-2 max-w-xs italic text-left md:text-right">
                      {project.note}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full text-sm font-medium border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 border-b border-border pb-12">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                    link.primary 
                      ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-sm' 
                      : 'border border-border text-foreground hover:bg-secondary/30'
                  }`}
                >
                  {link.label}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              ))}
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950/60 p-2 mb-16 border border-white/10 shadow-md">
            <a href={project.heroImage} target="_blank" rel="noreferrer" className="block group cursor-pointer relative" title="Click to open full size">
              <Image
                src={project.heroImage}
                alt={project.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-h-[720px] object-contain rounded-lg group-hover:opacity-90 transition-opacity"
                priority
              />
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 backdrop-blur-sm border border-white/20">
                <span>Click to expand</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Sidebar Data */}
            <div className="md:col-span-4 space-y-8 order-2 md:order-1">
              <section className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground uppercase tracking-wider text-sm">My Role / What I Built</h3>
                <ul className="space-y-4 text-foreground/80">
                  {project.role.map((r, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-0.5 text-lg leading-none">▹</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-card p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground uppercase tracking-wider text-sm">What I Learned</h3>
                <ul className="space-y-4 text-foreground/80">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-0.5 text-lg leading-none">▹</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Main Content */}
            <div className="md:col-span-8 space-y-16 order-1 md:order-2">
              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Problem</h2>
                <div className="text-foreground/80 leading-relaxed text-lg prose prose-invert">
                  <p>{project.problem}</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">The Solution</h2>
                <div className="text-foreground/80 leading-relaxed text-lg prose prose-invert">
                  <p>{project.solution}</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/80 text-lg">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-4 items-center bg-secondary/10 p-4 rounded-xl border border-border/50 h-full">
                      <div className="bg-primary/20 p-1.5 rounded-md text-primary shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {project.demoVideo && (
                <section id="demo-video">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">{project.demoVideo.title}</h2>
                  <div className="bg-card p-6 rounded-2xl border border-border">
                    <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                      {project.demoVideo.description}
                    </p>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                      <iframe
                        src={project.demoVideo.url}
                        title="PromptShield Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
                      />
                    </div>
                  </div>
                </section>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <ProjectGallery images={project.gallery} title="Screenshots" />
              )}

              {(project.results || project.validationSnapshot) && (
                <section id="validation">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Validation</h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 space-y-6">
                    {project.results && project.results.length > 0 && (
                      <ul className="space-y-4 text-foreground/90 text-lg">
                        {project.results.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start">
                            <span className="text-primary font-bold text-2xl leading-none mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.validationSnapshot && project.validationSnapshot.length > 0 && (
                      <div className="pt-2">
                        <h3 className="text-xl font-bold mb-4 text-foreground">Validation Snapshot</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {project.validationSnapshot.map((item, i) => (
                            <div key={i} className="bg-background/60 border border-border/60 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="font-semibold text-foreground">{item.context}</span>
                              <span className="text-sm font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg self-start sm:self-auto">
                                {item.result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.caveat && (
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-sm text-foreground/60 italic border-l-2 border-primary/40 pl-4 py-1">
                          {project.caveat}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>

      <footer className="py-8 px-4 md:px-8 lg:px-12 border-t border-border text-center mt-12">
        <p className="text-sm text-foreground/40">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </main>
  )
}
