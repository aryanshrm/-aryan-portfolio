interface SkillCategoryProps {
  category: string
  skills: string[]
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-bold text-foreground mb-4">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

const skillCategories: SkillCategoryProps[] = [
  {
    category: 'AI/ML',
    skills: [
      'Computer Vision',
      'YOLOv8',
      'OpenCV',
      'Whisper',
      'NLP',
      'Prompt Engineering',
      'LLM Evaluation',
      'AI Security',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Python',
      'FastAPI',
      'REST APIs',
      'Pydantic',
      'Pytest',
      'YAML Rule Systems',
      'Git/GitHub',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Dashboard UI',
      'API Integration',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Design/Product',
    skills: [
      'Figma',
      'Adobe InDesign',
      'Wireframing',
      'High-Fidelity Prototyping',
      'User-Centric Design',
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Skills</h2>
          <p className="text-lg text-foreground/60">Core competencies across AI, backend, frontend, and design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.category}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
