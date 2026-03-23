import { CtaBanner } from '../components/ui/CtaBanner'
import { ModuleCard } from '../components/ui/ModuleCard'
import { PageHero } from '../components/ui/PageHero'
import { getModuleBySlug, modules } from '../data/modules'
import { routes } from '../router/routes'

export function ModuleDetailPage({ slug }: { slug: string }) {
  const module = getModuleBySlug(slug)

  if (!module) {
    return null
  }

  const siblingModules = modules.filter((item) => item.slug !== module.slug)

  return (
    <>
      <PageHero eyebrow="Module detail" title={module.title} description={module.longDescription} />

      <section className="section">
        <div className="shell split-section module-detail-top">
          <div>
            <span className="eyebrow">Positioning</span>
            <h2 className="section-title-left">{module.tagline}</h2>
            <p className="section-copy-left">{module.ctaLabel}</p>
          </div>
          <div className="card metric-card">
            <h3>Core outcomes</h3>
            <ul className="bullet-list compact-list">
              {module.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell cards-grid three-up">
          {module.featurePillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div>
            <span className="eyebrow">Typical workflow</span>
            <h2 className="section-title-left">How {module.title} fits into the campaign lifecycle.</h2>
          </div>
          <div className="cards-grid three-up">
            {module.workflow.map((item, index) => (
              <article className="card workflow-card" key={item.step}>
                <span className="step-number">0{index + 1}</span>
                <h3>{item.step}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div>
            <span className="eyebrow">Use cases</span>
            <h2 className="section-title-left">Common situations where this module earns its place.</h2>
          </div>
          <div className="cards-grid two-up">
            {module.useCases.map((useCase) => (
              <article className="card compact-card" key={useCase}>
                <h3>{useCase}</h3>
                <p>{module.title} keeps this area structured, searchable, and connected to the rest of the campaign.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-center-copy">
            <span className="eyebrow">Adjacent modules</span>
            <h2>Related modules in the wider system.</h2>
            <p>{module.title} works best when it stays focused and interoperates cleanly with the other modules instead of absorbing their responsibilities.</p>
          </div>
          <div className="cards-grid three-up top-gap">
            {siblingModules.map((item) => (
              <ModuleCard key={item.slug} module={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Continue from ${module.title} into pricing or documentation.`}
        description="The page structure is already wired so you can keep expanding content without creating dead-end routes."
        primaryLabel="Pricing"
        primaryPath={routes.pricing}
        secondaryLabel="Documentation"
        secondaryPath={routes.documentation}
      />
    </>
  )
}
