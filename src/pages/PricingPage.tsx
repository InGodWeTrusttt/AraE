import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { routes } from '../router/routes'
import { pathToHref } from '../router/router'

const pricingPoints = [
  'One-time purchase instead of a subscription model.',
  'Windows desktop positioning kept explicit and simple.',
  'No artificial pricing tiers in the current public surface.',
  'Suitable as a compact premium entry point for individual GMs.',
]

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="A compact price point with a clear product boundary."
        description="AraE is currently positioned as a premium Windows desktop tool sold at a one-time price. The page stays intentionally simple: no inflated plan matrix, no fake urgency, no subscription gymnastics."
      />

      <section className="section">
        <div className="shell pricing-layout single-focus">
          <article className="card pricing-card-large focus-card">
            <div className="pricing-badge">Current public offer</div>
            <h3>€10 one-time</h3>
            <p>Includes the full four-module product surface presented in this site pack.</p>
            <ul className="bullet-list compact-list">
              {pricingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="pricing-actions">
              <a className="button button-primary" href={pathToHref(routes.windowsApp)}>
                View Windows install notes
              </a>
              <a className="button button-secondary" href={pathToHref(routes.helpCenter)}>
                Review support information
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell cards-grid two-up">
          <article className="card compact-card">
            <h3>Why this page is intentionally narrow</h3>
            <p>
              Early-stage product pages often degrade when pricing tries to simulate enterprise complexity that does not exist. This pack avoids that trap.
            </p>
          </article>
          <article className="card compact-card">
            <h3>What you should still replace</h3>
            <p>
              If your checkout flow, tax handling, platform policy, or refund terms differ from this public positioning, align this page before publishing at scale.
            </p>
          </article>
        </div>
      </section>

      <CtaBanner
        title="Pricing is only credible when installation and support are equally clear."
        description="The next logical pages for a buyer are the Windows app page and the support surface."
        primaryLabel="Windows app"
        primaryPath={routes.windowsApp}
        secondaryLabel="Help center"
        secondaryPath={routes.helpCenter}
      />
    </>
  )
}
