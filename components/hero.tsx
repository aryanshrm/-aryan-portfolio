'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="space-y-8">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">AI/ML Engineering · AI Security · Full-Stack AI</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Aryan Sharma
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-6">
              Building applied AI systems for security, intelligence, and product workflows.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              I started in product/UI design and now build applied AI systems, using that design background to make AI tools explainable, usable, and validation-driven.
            </p>
          </div>

          {/* Credibility chips */}
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="inline-flex px-3 py-1.5 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium border border-border">
              Agentic AI Security
            </span>
            <span className="inline-flex px-3 py-1.5 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium border border-border">
              FastAPI + Next.js
            </span>
            <span className="inline-flex px-3 py-1.5 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium border border-border">
              400+ Backend Tests
            </span>
            <span className="inline-flex px-3 py-1.5 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium border border-border">
              Local Semantic Review
            </span>
            <span className="inline-flex px-3 py-1.5 bg-secondary/50 text-foreground/70 rounded-full text-xs font-medium border border-border">
              Product-minded Builder
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-6">
            <Link
              href="#projects"
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/30 transition-colors"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/aryanshrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/30 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aryanshrm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/30 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Status line */}
          <p className="text-sm text-foreground/50 pt-2">
            Currently seeking AI/ML, AI security, or applied AI product internships.
          </p>
        </div>

        {/* Right: Featured Builds visual */}
        <div className="relative mt-12 md:mt-0 w-full flex flex-col items-center justify-center">
          <div className="relative w-full max-w-sm md:max-w-md">
            {/* Stacked cards background effect */}
            <div className="absolute inset-0 bg-card border border-border rounded-2xl shadow-xl transform -rotate-2 -translate-x-1 translate-y-1" />
            
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col justify-center">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:30px_30px] rounded-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Featured Builds</div>
                  <div className="space-y-3">
                    
                    {/* CodeForge Preview */}
                    <Link href="/projects/codeforge" className="group flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-border bg-secondary/50 shrink-0 shadow-sm">
                        <Image src="/images/projects/codeforge/codeforge-dashboard.png" alt="CodeForge dashboard" fill className="object-cover object-top" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">CodeForge</div>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          Coding & Judge Platform
                        </div>
                      </div>
                    </Link>

                    {/* PromptShield Preview */}
                    <Link href="/projects/promptshield" className="group flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-border bg-secondary/50 shrink-0 shadow-sm">
                        <Image src="/projects/promptshield-block.png" alt="PromptShield dashboard" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">PromptShield</div>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          AI Security Scanner
                        </div>
                      </div>
                    </Link>

                    {/* Streamline AI Preview */}
                    <Link href="/projects/streamline-ai" className="group flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-border bg-secondary/50 shrink-0 shadow-sm">
                        <Image src="/projects/streamline-01-upload.png" alt="Streamline AI interface" fill className="object-cover object-top" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Streamline AI</div>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          Video Intelligence
                        </div>
                      </div>
                    </Link>

                    {/* NEXUS+ Preview */}
                    <Link href="/projects/nexus" className="group flex items-center gap-4 p-2 -mx-2 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-border bg-secondary/50 shrink-0 shadow-sm">
                        <Image src="/projects/nexus_results.png" alt="NEXUS+ AI Image Forensics dashboard" fill className="object-cover object-top" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">NEXUS+ AI Forensics</div>
                        <div className="text-xs text-foreground/60 mt-0.5">
                          11-Engine ML Pipeline
                        </div>
                      </div>
                    </Link>

                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-2 text-xs text-foreground/70">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/40" />
                      400+ Tests
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/40" />
                      AI Security
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/40" />
                      Semantic Review
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/40" />
                      Backend Focus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
