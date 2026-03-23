import { CtaBanner } from '../components/ui/CtaBanner'
import { ModuleCard } from '../components/ui/ModuleCard'
import { PageHero } from '../components/ui/PageHero'
import { modules } from '../data/modules'
import { routes } from '../router/routes'
import { pathToHref } from '../router/router'

export function ModulesPage() {
  return (
    <>
      <PageHero
        eyebrow="Modules"
        title="Four modules. Four responsibilities. One coherent product."
        description="AraE is intentionally split into sessions, world, rules, and GM Toolbox so each concern stays legible. The modules are connected, but they are not blurred together."
        actions={<a className="button button-primary" href={pathToHref(routes.features)}>Product features</a>}
      />

      <section className="section">
        <div className="shell cards-grid module-grid">
          {modules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell comparison-board">
          <div className="comparison-row comparison-head">
            <span>Module</span>
            <span>Primary role</span>
            <span>Best used for</span>
          </div>
          {modules.map((module) => (
            <div className="comparison-row" key={module.slug}>
              <span>{module.title}</span>
              <span>{module.tagline}</span>
              <span>{module.useCases.join(' · ')}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Start with the module index, then go deeper where needed."
        description="Each module page in this pack is designed as a standalone product surface with its own narrative, value proposition, and workflow detail."
        primaryLabel="See pricing"
        primaryPath={routes.pricing}
        secondaryLabel="Read documentation"
        secondaryPath={routes.documentation}
      />
    </>
  )
}
