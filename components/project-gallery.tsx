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
            <div className="relative w-full rounded-xl overflow-hidden bg-neutral-950/60 p-2 border border-white/10 shadow-md">
              <a href={img.src} target="_blank" rel="noreferrer" className="block group cursor-pointer relative" title="Click to open full size">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-contain rounded-lg group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 backdrop-blur-sm border border-white/20">
                  <span>Open full size</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
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
