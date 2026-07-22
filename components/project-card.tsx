'use client'

import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  buttons: Array<{
    label: string
    href: string
  }>
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  technologies,
  buttons,
  featured = false,
}: ProjectCardProps) {
  if (featured) {
    return (
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Side */}
          <div className="relative overflow-hidden bg-muted h-96 lg:h-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Content Side */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-base text-foreground/70 mb-8 leading-relaxed">
                {description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {buttons.map((button) => {
                const isExternal = button.href.startsWith('http')
                const isAnchor = button.href.startsWith('#')
                return (
                  <Link
                    key={button.label}
                    href={button.href}
                    {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    {button.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-foreground/70 mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          {buttons.map((button) => {
            const isExternal = button.href.startsWith('http')
            return (
              <Link
                key={button.label}
                href={button.href}
                {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                className="inline-flex px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {button.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
