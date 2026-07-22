'use client'

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity">
            Aryan Sharma
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Indicator */}
          <div className="md:hidden flex gap-2">
            <a
              href="/resume.pdf"
              className="inline-flex px-3 py-2 bg-primary text-primary-foreground rounded text-xs font-medium hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
