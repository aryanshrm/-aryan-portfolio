import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/nav'

interface ProjectData {
  title: string
  subtitle: string
  heroImage: string
  additionalImage?: string
  overview: string
  role: string
  techStack: string[]
  features: string[]
  validation?: string[]
  links: { label: string; url: string }[]
  caveat?: string
}

const projects: Record<string, ProjectData> = {
  promptshield: {
    title: 'PromptShield — Agentic AI Security Scanner',
    subtitle: 'Security scanner for prompt injection, tool misuse, credential exfiltration, memory poisoning, HITL bypass, cross-agent abuse, and semantic prompt attacks.',
    heroImage: '/projects/promptshield-block.png',
    overview: 'PromptShield is an agentic AI security scanner designed to evaluate LLM and agent workflow inputs before they reach tools, memory, or model execution. It combines deterministic detection, context-aware analysis, and optional local semantic review.',
    role: 'Designed and built the detection engine, FastAPI API, dashboard integration, benchmark corpora, validation workflow, and semantic review layer.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'Pytest', 'YAML', 'Ollama', 'AI Security'],
    features: [
      'prompt injection and instruction override detection',
      'system/developer prompt extraction detection',
      'credential exfiltration detection',
      'tool misuse and agent workflow abuse detection',
      'memory/context poisoning detection',
      'HITL bypass detection',
      'context classifier for quoted/defensive near-miss handling',
      'optional Ollama qwen2.5:7b semantic review',
      'explainable verdicts and contributing signals'
    ],
    validation: [
      '40+ executable rules',
      '400+ backend tests',
      'optional semantic review recovered 19 deterministic false negatives',
      'v2.42 local hybrid semantic validation reached 100% malicious recall and 100% benign safe rate'
    ],
    caveat: 'caveat: local validation corpus, not third-party audit',
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/aegis-ai/tree/main/promptshield' }
    ]
  },
  'streamline-ai': {
    title: 'Streamline AI — Video Analysis Platform',
    subtitle: 'AI-powered video intelligence platform for object detection, transcription, scene analysis, and sentiment.',
    heroImage: '/projects/streamline-upload.png',
    additionalImage: '/projects/streamline-results.png',
    overview: 'Streamline AI processes uploaded videos and extracts structured intelligence using computer vision, transcription, and NLP.',
    role: 'Built the AI pipeline, FastAPI endpoints, validation flows, and dashboard experience.',
    techStack: ['FastAPI', 'YOLOv8', 'Whisper', 'NLP', 'Python'],
    features: [
      'video upload workflow',
      'YOLOv8 object detection',
      'Whisper transcription',
      'scene detection',
      'transcript/results view',
      'JSON output/export',
      'test suite covering end-to-end pipeline'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/Streamline_Ai' }
    ]
  },
  veridian: {
    title: 'Veridian — AI Profile Detector',
    subtitle: 'AI profile analysis interface for detecting suspicious or synthetic identities.',
    heroImage: '/projects/veridian-dashboard.png',
    overview: 'Veridian is an AI identity verification and profile analysis concept that combines image input, profile metadata, and heuristic risk indicators to estimate whether a profile may be synthetic or suspicious.',
    role: 'Designed and built the UI/UX flow, risk panel, metadata inputs, and explainable result structure.',
    techStack: ['AI Detection', 'Metadata Analysis', 'UI/UX', 'Product Design'],
    features: [
      'image upload / preview',
      'suspicion score',
      'profile metadata fields',
      'AI-generated indicator',
      'explainable risk reasons',
      'clean investigation-style UI'
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanshrm/ai-profile-detector' }
    ]
  },
  fruityfizz: {
    title: 'FruityFizz — Beverage Brand Product Design',
    subtitle: 'Brand and product landing page design for a beverage concept.',
    heroImage: '/projects/fruityfizz-overview.png',
    overview: 'FruityFizz is a product/brand design concept focused on bold visual direction, product storytelling, and conversion-oriented sections.',
    role: 'Led visual design, layout direction, product sections, and high-fidelity mockups.',
    techStack: ['Figma', 'Adobe InDesign', 'UI/UX', 'Branding'],
    features: [
      'brand identity exploration',
      'landing page design',
      'product showcase',
      'pricing/feature sections',
      'high-fidelity Figma prototype'
    ],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/proto/ltS7Y3qf5mU3iSoZ930Xqv/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=23%2C440%2C0.09&t=2TlITqBePOKm2D9S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2' }
    ]
  },
  floweasy: {
    title: 'FlowEasy — SaaS Landing Page',
    subtitle: 'Workflow automation SaaS landing page concept.',
    heroImage: '/projects/floweasy-landing.png',
    overview: 'FlowEasy is a SaaS landing page concept for business workflow automation, designed to communicate product value, benefits, and pricing clearly.',
    role: 'Designed the landing page structure, feature sections, pricing cards, and conversion-focused layout.',
    techStack: ['Figma', 'UI/UX', 'SaaS Design'],
    features: [
      'SaaS hero section',
      'feature cards',
      'benefits section',
      'pricing plans',
      'testimonials / social proof',
      'footer and newsletter layout'
    ],
    links: [
      { label: 'Figma', url: 'https://www.figma.com/design/H6EKk5vkugE5ga5QTQYVjh/Untitled?node-id=0-1&t=Knn3vycjfelYbrhi-1' }
    ]
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      
      <article className="py-20 px-4 md:px-8 lg:px-12 border-t border-border mt-16">
        <div className="max-w-4xl mx-auto mt-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link href="/#projects" className="text-primary hover:underline inline-flex items-center gap-2">
              <span>←</span> Back to Projects
            </Link>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-foreground/70">{project.subtitle}</p>
          </header>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-muted mb-16 border border-border">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Overview</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">{project.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">My Role / What I Built</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">{project.role}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 text-lg">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>

              {project.validation && (
                <section>
                  <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Validation & Results</h2>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 text-lg">
                    {project.validation.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.additionalImage && (
                <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-muted mb-16 border border-border mt-16">
                  <Image
                    src={project.additionalImage}
                    alt={`${project.title} additional view`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <section className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold mb-4 uppercase text-sm tracking-wider text-foreground/60">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary/50 text-foreground/80 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section className="bg-card p-6 rounded-xl border border-border">
                <h3 className="font-bold mb-4 uppercase text-sm tracking-wider text-foreground/60">Links</h3>
                <div className="flex flex-col gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </section>

              {project.caveat && (
                <section>
                  <p className="text-sm text-foreground/50 italic border-l-2 border-primary/50 pl-4 py-1">
                    {project.caveat}
                  </p>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>

      <footer className="py-8 px-4 md:px-8 lg:px-12 border-t border-border text-center">
        <p className="text-sm text-foreground/40">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </main>
  )
}
