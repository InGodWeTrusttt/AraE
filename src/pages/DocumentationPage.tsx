import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { documentationSections } from '../data/content'
import { routes } from '../router/routes'

export function DocumentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="A documentation index that matches the product structure."
        description="This page is meant to become the front door for installation, workflows, module explanations, support guidance, and operational troubleshooting."
      />

      <section className="section">
        <div className="shell cards-grid two-up">
          {documentationSections.map((section) => (
            <article className="card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Documentation should connect the product, not mirror the navigation blindly."
        description="The best next step from docs is usually either support or a concrete module page."
        primaryLabel="Help center"
        primaryPath={routes.helpCenter}
        secondaryLabel="Modules"
        secondaryPath={routes.modules}
      />
    </>
  )
}
