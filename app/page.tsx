import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { ProjectCard } from '@/components/project-card'
import { SkillsSection } from '@/components/skills-section'
import { Hero } from '@/components/hero'

const projectsData = [
  {
    title: 'Streamline AI — Video Analysis Platform',
    description:
      'Full-stack video intelligence platform using YOLOv8 object detection, Whisper transcription, scene analysis, and NLP sentiment analysis.',
    image: '/projects/streamline-upload.png',
    imageAlt: 'Streamline AI video upload dashboard',
    technologies: ['FastAPI', 'YOLOv8', 'Whisper', 'NLP', 'Python'],
    buttons: [
      {
        label: 'View Case Study',
        href: '/projects/streamline-ai',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/aryanshrm/Streamline_Ai',
      },
    ],
  },
  {
    title: 'Veridian — AI Profile Detector',
    description:
      'AI profile analysis interface for detecting suspicious or synthetic identities using image, metadata, and heuristic signals.',
    image: '/projects/veridian-dashboard.png',
    imageAlt: 'Veridian identity verification dashboard',
    technologies: ['AI Detection', 'Metadata Analysis', 'UI/UX', 'Product Design'],
    buttons: [
      {
        label: 'View Case Study',
        href: '/projects/veridian',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/aryanshrm/ai-profile-detector',
      },
    ],
  },
  {
    title: 'FruityFizz — Beverage Brand Product Design',
    description:
      'Brand and product landing page design for a beverage concept with bold visual direction and conversion-focused layouts.',
    image: '/projects/fruityfizz-overview.png',
    imageAlt: 'FruityFizz beverage brand product design',
    technologies: ['Figma', 'Adobe InDesign', 'UI/UX', 'Branding'],
    buttons: [
      {
        label: 'View Design',
        href: '/projects/fruityfizz',
      },
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/ltS7Y3qf5mU3iSoZ930Xqv/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=23%2C440%2C0.09&t=2TlITqBePOKm2D9S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2',
      },
    ],
  },
  {
    title: 'FlowEasy — SaaS Landing Page',
    description:
      'SaaS landing page concept for workflow automation with benefit sections, pricing cards, and conversion-focused layout.',
    image: '/projects/floweasy-landing.png',
    imageAlt: 'FlowEasy SaaS landing page design',
    technologies: ['Figma', 'UI/UX', 'SaaS Design'],
    buttons: [
      {
        label: 'View Design',
        href: '/projects/floweasy',
      },
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/H6EKk5vkugE5ga5QTQYVjh/Untitled?node-id=0-1&t=Knn3vycjfelYbrhi-1',
      },
    ],
  },
]

export const metadata = {
  title: 'Aryan Sharma — AI/ML Engineering & AI Security',
  description: 'Portfolio of Aryan Sharma. AI/ML engineer building applied AI systems, agentic AI security tools, and full-stack AI products.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* Featured PromptShield Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Featured Project</h2>
          </div>

          {/* Featured Card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 lg:h-auto bg-secondary/20">
                <Image
                  src="/projects/promptshield-block.png"
                  alt="PromptShield security scanner dashboard"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground mb-3">PromptShield</h3>
                <p className="text-lg text-foreground/60 mb-2">Agentic AI Security Scanner</p>
                <p className="text-base text-foreground/70 leading-relaxed mb-6">
                  Security scanner for prompt injection, tool misuse, credential exfiltration, memory poisoning, HITL bypass, cross-agent abuse, and semantic prompt attacks.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-3 mb-8 py-6 border-y border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">40+</div>
                    <div className="text-xs text-foreground/50">Rules</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">400+</div>
                    <div className="text-xs text-foreground/50">Tests</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">19</div>
                    <div className="text-xs text-foreground/50">Recovered FNs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-foreground/50">Local Recall</div>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Python', 'FastAPI', 'Next.js', 'Pytest', 'Ollama', 'AI Security'].map((tech) => (
                    <span key={tech} className="inline-flex px-3 py-1 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Caveat */}
                <p className="text-xs text-foreground/40 mb-6 italic">
                  Local validation result, not a third-party audit.
                </p>

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/projects/promptshield"
                    className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    View Case Study
                  </Link>
                  <a
                    href="https://github.com/aryanshrm/aegis-ai/tree/main/promptshield"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-4 py-2 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-secondary/30 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Selected Work</h2>
            <p className="text-lg text-foreground/60">Applied AI systems, security tools, and product-focused interfaces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8">About</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            I&apos;m a Computer Science undergraduate at JECRC University building applied AI systems across AI security, computer vision, and full-stack product engineering. I enjoy turning ambiguous AI risks into measurable systems, usable dashboards, and validated engineering workflows.
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Currently focused on:</h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Agentic AI security</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Applied AI products</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Evaluation and benchmark design</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">→</span>
                <span>Product-focused engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-12 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-8">Let&apos;s build something useful.</h2>
          <p className="text-lg text-foreground/60 mb-12">Reach out for AI/ML, AI security, or applied AI product opportunities.</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:aryan.sharma.sde@gmail.com"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Email
            </a>
            <a
              href="https://github.com/aryanshrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/30 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aryanshrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/30 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/30 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-12 border-t border-border text-center">
        <p className="text-sm text-foreground/40">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </main>
  )
}
