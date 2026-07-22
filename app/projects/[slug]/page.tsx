import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/nav'
import { ProjectGallery, ProjectImage } from '@/components/project-gallery'

interface ProjectData {
  title: string
  subtitle: string
  status?: string
  heroImage: string
  gallery?: ProjectImage[]
  problem: string
  solution: string
  role: string[]
  techStack: string[]
  features: string[]
  results?: string[]
  learnings: string[]
  links: { label: string; url: string; primary?: boolean }[]
  caveat?: string
}

const projects: Record<string, ProjectData> = {
  promptshield: {
    title: 'PromptShield — Agentic AI Security Scanner',
    subtitle: 'Security scanner for prompt injection, tool misuse, credential exfiltration, memory poisoning, HITL bypass, cross-agent abuse, and semantic prompt attacks.',
    status: 'Research MVP',
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
      'Recovered 19 deterministic false negatives with optional semantic review',
      '100% malicious recall on v2.42 local hybrid semantic validation'
    ],
    learnings: [
      'Architecting deterministic vs. semantic detection layers',
      'Building performant Python APIs for security workloads',
      'Creating robust test suites for AI vulnerability scanning'
    ],
    caveat: 'Local validation, not third-party audit. Optional semantic review adds latency and is intended for deep review mode.',
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/aegis-ai/tree/main/promptshield', primary: true }
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
  veridian: {
    title: 'Veridian — AI Profile Detector',
    subtitle: 'AI identity verification prototype for reviewing suspicious or synthetic online profiles.',
    status: 'Prototype',
    heroImage: '/projects/veridian-01-dashboard.png',
    gallery: [
      { src: '/projects/veridian-01-dashboard.png', alt: 'Veridian identity verification dashboard', caption: 'AI profile detector interface with suspicion score and metadata signals.' },
      { src: '/projects/veridian-02-wide.png', alt: 'Veridian image and heuristics view', caption: 'Image analysis and detection accuracy metrics.' },
      { src: '/projects/veridian-03-metadata.png', alt: 'Profile metadata input form', caption: 'Metadata input for holistic risk profiling.' }
    ],
    problem: 'Online profiles can be synthetic, low-trust, or suspicious, but many detection tools are difficult to interpret. Reviewers need a clear interface that combines image, metadata, and explainable risk signals.',
    solution: 'Veridian presents image input, profile metadata, suspicion scoring, and heuristic risk indicators in a clean investigation-style dashboard.',
    role: [
      'Designed and built the UI/UX flow',
      'Created metadata input section',
      'Developed suspicion score panel',
      'Implemented explainable result structure'
    ],
    techStack: ['AI Detection', 'Metadata Analysis', 'UI/UX', 'Product Design'],
    features: [
      'Image upload and preview workflow',
      'Suspicion score with confidence indicator',
      'Profile metadata inputs for account-level signals',
      'AI-generated profile indicator',
      'Explainable risk reasons and heuristic flags',
      'Investigation-style UI for reviewing suspicious profiles'
    ],
    results: [
      'Designed an intuitive, high-signal layout for trust & safety reviewers',
      'Created a framework for surfacing opaque AI risk signals as explainable flags'
    ],
    learnings: [
      'Designing explainable risk interfaces',
      'Presenting AI/metadata signals without overwhelming users',
      'Creating reviewer-friendly layouts for trust and safety workflows'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/ai-profile-detector', primary: true }
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
                <div className="shrink-0">
                  <span className="inline-flex px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold tracking-wide uppercase">
                    {project.status}
                  </span>
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

              {project.gallery && project.gallery.length > 0 && (
                <ProjectGallery images={project.gallery} title="Screenshots" />
              )}

              {project.results && project.results.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Validation</h2>
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                    <ul className="space-y-5 text-foreground/90 text-lg">
                      {project.results.map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span className="text-primary font-bold text-2xl leading-none mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {project.caveat && (
                      <div className="mt-8 pt-6 border-t border-primary/20">
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
