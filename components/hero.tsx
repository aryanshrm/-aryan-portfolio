'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-background via-background to-card relative overflow-hidden">
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
              I&apos;m a Computer Science undergraduate building AI security tools, video intelligence pipelines, and product-focused interfaces. My work combines backend engineering, validation-driven AI systems, and clean user experiences.
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

        {/* Right: Abstract technical card visual */}
        <div className="relative h-96 hidden md:flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Stacked cards background effect */}
            <div className="absolute inset-0 bg-card border border-border rounded-2xl shadow-xl transform -rotate-3 -translate-x-2 translate-y-2" />
            <div className="absolute inset-0 bg-card border border-border rounded-2xl shadow-lg transform rotate-2 translate-x-2 -translate-y-1" />

            {/* Main card */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl shadow-2xl p-8 flex flex-col justify-center">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:30px_30px] rounded-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Featured Projects</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">PromptShield</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Streamline AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">Veridian</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Capabilities</div>
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
                      Backend Focus
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-foreground/40" />
                      Semantic Review
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
