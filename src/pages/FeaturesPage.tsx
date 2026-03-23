import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { featureColumns, workflowSteps } from '../data/content'
import { routes } from '../router/routes'
import { pathToHref } from '../router/router'

const coreFeatures = [
  {
    title: 'Fast live capture',
    description: 'Record what happened during play without shifting into a heavy note-taking workflow.',
  },
  {
    title: 'Structured post-session review',
    description: 'Turn rough entries into useful entities, summaries, and references once the game is over.',
  },
  {
    title: 'Cross-module linking',
    description: 'Connect sessions, world entities, rules, and prep material into one navigable product surface.',
  },
  {
    title: 'Search-first retrieval',
    description: 'Recover old information quickly instead of relying on memory or disconnected documents.',
  },
  {
    title: 'Long-arc continuity support',
    description: 'Preserve context across months of campaign history, unresolved threads, and returning characters.',
  },
  {
    title: 'Focused product boundaries',
    description: 'AraE is not trying to replace everything. It is built around campaign memory and operational clarity.',
  },
]

export function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product features"
        title="Features that reinforce continuity, not clutter."
        description="AraE is designed around the actual operating constraints of a game master: live capture speed, post-session structure, continuity retention, and reliable retrieval."
        actions={<a className="button button-primary" href={pathToHref(routes.modules)}>Explore the four modules</a>}
      />

      <section className="section">
        <div className="shell cards-grid three-up">
          {coreFeatures.map((feature) => (
            <article className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div>
            <span className="eyebrow">Workflow alignment</span>
            <h2 className="section-title-left">Feature design follows the GM workflow, not the other way around.</h2>
            <p className="section-copy-left">
              The product is intentionally centered on the lifecycle of a session: capture, clean-up, retrieval, and preparation for what comes next.
            </p>
          </div>
          <div className="cards-grid three-up">
            {workflowSteps.map((step) => (
              <article className="card workflow-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell cards-grid three-up">
          {featureColumns.map((column) => (
            <article className="card compact-card" key={column.title}>
              <h3>{column.title}</h3>
              <ul className="bullet-list compact-list">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Move from feature overview to module-level detail."
        description="The product only makes sense when each module has a clear boundary and a clear role in the overall workflow."
        primaryLabel="See all modules"
        primaryPath={routes.modules}
        secondaryLabel="Review pricing"
        secondaryPath={routes.pricing}
      />
    </>
  )
}
