import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { routes } from '../router/routes'

const installSteps = [
  'Download the current Windows build from your chosen distribution channel.',
  'Run the installer and allow the application to complete first-run setup.',
  'Open AraE and configure your campaign structure before your first live session.',
  'Use the documentation and help center pages to align your initial workflow.',
]

export function WindowsAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Windows app"
        title="A dedicated desktop app, not a browser-first compromise."
        description="This page establishes the product as a Windows desktop application and gives you a clean place to explain installation, updates, and support expectations."
      />

      <section className="section">
        <div className="shell cards-grid two-up">
          <article className="card compact-card">
            <h3>Recommended page contents</h3>
            <ul className="bullet-list compact-list">
              {installSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
          <article className="card compact-card">
            <h3>What to add before full launch</h3>
            <p>
              Replace this starter copy with your actual distribution channel, minimum requirements, update mechanism, installer signature details, and troubleshooting notes.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell comparison-board">
          <div className="comparison-row comparison-head">
            <span>Area</span>
            <span>Current template status</span>
            <span>Needed before production</span>
          </div>
          <div className="comparison-row">
            <span>Distribution</span>
            <span>Starter layout included</span>
            <span>Insert your real download source and release channel</span>
          </div>
          <div className="comparison-row">
            <span>System requirements</span>
            <span>Not hardcoded intentionally</span>
            <span>Add the exact Windows version, memory, and storage requirements</span>
          </div>
          <div className="comparison-row">
            <span>Update policy</span>
            <span>Positioned but not operationalized</span>
            <span>Document your patch cadence and delivery flow</span>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Installation pages should always lead into documentation and support."
        description="This keeps the buyer journey operational instead of decorative."
        primaryLabel="Documentation"
        primaryPath={routes.documentation}
        secondaryLabel="Help center"
        secondaryPath={routes.helpCenter}
      />
    </>
  )
}
