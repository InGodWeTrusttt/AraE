import { featureColumns, workflowSteps } from '../data/content'
import { modules } from '../data/modules'
import { routes } from '../router/routes'
import { pathToHref } from '../router/router'
import { CtaBanner } from '../components/ui/CtaBanner'
import { ModuleCard } from '../components/ui/ModuleCard'
import { ArrowRightIcon, CheckIcon, DownloadIcon, SearchIcon } from '../components/ui/Icons'

export function HomePage() {
  return (
    <>
      <section className="hero-section section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Premium desktop software for GMs</span>
            <h1>
              Campaign memory, <span>without chaos.</span>
            </h1>
            <p className="hero-description">
              AraE helps game masters capture what happened during play, structure what matters after the session, and retrieve the right information instantly months later.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={pathToHref(routes.pricing)}>
                Buy AraE — €10
              </a>
              <a className="button button-secondary" href={pathToHref(routes.modules)}>
                Explore modules
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <DownloadIcon className="meta-icon" />
                Windows desktop app
              </span>
              <span>
                <CheckIcon className="meta-icon" />
                One-time purchase
              </span>
              <span>
                <SearchIcon className="meta-icon" />
                Search-first workflow
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="mockup-card hero-mockup large">
              <div className="mockup-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-mockup-grid">
                <div className="mockup-panel primary-panel">
                  <div className="mockup-kicker">Live session capture</div>
                  <h3>Session 18 — The Drowned Embassy</h3>
                  <ul className="mockup-list">
                    <li>Lord Kael exposed the harbor contract.</li>
                    <li>Mira secured the ledger from the customs tower.</li>
                    <li>The Glass Choir escaped through the lower vaults.</li>
                  </ul>
                </div>
                <div className="mockup-stack">
                  <div className="mockup-panel soft-panel">
                    <div className="mockup-kicker">Linked entities</div>
                    <p>Harbor Ward, Glass Choir, Mira Valen</p>
                  </div>
                  <div className="mockup-panel soft-panel">
                    <div className="mockup-kicker">Rules reference</div>
                    <p>Smuggling, pursuit, social leverage</p>
                  </div>
                  <div className="mockup-panel soft-panel">
                    <div className="mockup-kicker">Next prep focus</div>
                    <p>Interrogation scene, ledger fallout, council vote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section-center-copy">
          <span className="eyebrow">Three-part operating model</span>
          <h2>From live table chaos to durable campaign intelligence.</h2>
          <p>
            AraE is not a generic notebook. It is a structured workflow for capture, consolidation, and retrieval across long-form tabletop campaigns.
          </p>
        </div>
        <div className="shell cards-grid three-up top-gap">
          {workflowSteps.map((step) => (
            <article className="card workflow-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell split-section">
          <div>
            <span className="eyebrow">What makes it distinct</span>
            <h2 className="section-title-left">Designed for long campaigns, not generic note volume.</h2>
            <p className="section-copy-left">
              AraE is optimized around continuity, relationships, references, and post-session structure. The product boundary is intentionally narrow: it serves the operating reality of a game master.
            </p>
          </div>
          <div className="cards-grid feature-columns-grid">
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
        </div>
      </section>

      <section className="section">
        <div className="shell modules-intro">
          <div>
            <span className="eyebrow">Four connected modules</span>
            <h2 className="section-title-left">One product, four distinct responsibilities.</h2>
          </div>
          <a className="text-link" href={pathToHref(routes.modules)}>
            View all modules
            <ArrowRightIcon className="inline-icon" />
          </a>
        </div>
        <div className="shell cards-grid module-grid top-gap">
          {modules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell deepwork-panel">
          <div>
            <span className="eyebrow">Deep work for game masters</span>
            <h2 className="section-title-left">Keep prep, world state, and memory in one controlled system.</h2>
            <p className="section-copy-left">
              Over time, AraE compounds in value because sessions, entities, rules, and prep assets stop living in isolated documents. The system becomes more useful as the campaign becomes more complex.
            </p>
          </div>
          <div className="deepwork-grid">
            <article className="card compact-card">
              <h3>Continuity resilience</h3>
              <p>Recover obscure details quickly when players revisit an old lead, faction, or location.</p>
            </article>
            <article className="card compact-card">
              <h3>Prep efficiency</h3>
              <p>Start from templates, connected references, and recent consequences instead of from a blank page.</p>
            </article>
            <article className="card compact-card">
              <h3>Decision traceability</h3>
              <p>Understand where a ruling, reveal, or relationship came from and what it affects.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell pricing-layout">
          <div className="pricing-copy">
            <span className="eyebrow">Pricing</span>
            <h2>Simple pricing. Clear scope.</h2>
            <p>
              AraE is positioned as a premium Windows desktop tool with a one-time purchase model. No subscription complexity. No overbuilt pricing matrix.
            </p>
          </div>
          <article className="card pricing-card-large">
            <div className="pricing-badge">Windows desktop license</div>
            <h3>€10 one-time</h3>
            <p>Single-product purchase focused on campaign structure, continuity, and prep operations.</p>
            <ul className="bullet-list compact-list">
              <li>All four core modules</li>
              <li>Updates delivered through the desktop app lifecycle</li>
              <li>No subscription lock-in</li>
            </ul>
            <div className="pricing-actions">
              <a className="button button-primary" href={pathToHref(routes.pricing)}>
                See pricing details
              </a>
              <a className="button button-secondary" href={pathToHref(routes.windowsApp)}>
                Installation & Windows notes
              </a>
            </div>
          </article>
        </div>
      </section>

      <CtaBanner
        title="Build a product site that no longer contains dead ends."
        description="This pack turns the original landing page into a navigable product surface with real routes and consistent page templates."
        primaryLabel="Explore documentation"
        primaryPath={routes.documentation}
        secondaryLabel="See support"
        secondaryPath={routes.helpCenter}
      />
    </>
  )
}
