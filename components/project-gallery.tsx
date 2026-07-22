import Image from 'next/image'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

interface ProjectGalleryProps {
  images: ProjectImage[]
  title?: string
}

export function ProjectGallery({ images, title = "Visual Walkthrough" }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null

  return (
    <section className="mt-16 border-t border-border/50 pt-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-secondary/10 border border-border shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-in-out"
              />
            </div>
            {img.caption && (
              <p className="text-sm text-foreground/60 italic px-2">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
