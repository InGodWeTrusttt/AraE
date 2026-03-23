import { PageHero } from '../components/ui/PageHero'

export function ApiAccessPage() {
  return (
    <>
      <PageHero
        eyebrow="API access"
        title="An API surface should only be advertised if the contract is real."
        description="This page is included so the footer resolves correctly, but it deliberately avoids inventing endpoints, authentication flows, or platform guarantees that do not exist yet."
      />

      <section className="section">
        <div className="shell cards-grid two-up">
          <article className="card compact-card">
            <h3>Use this page when ready</h3>
            <p>Document read and write capabilities, authentication, rate limits, and the intended integration audience.</p>
          </article>
          <article className="card compact-card notice-card">
            <h3>Current status</h3>
            <p>This is a structured placeholder. Replace it only when the API contract, support model, and security posture are defined.</p>
          </article>
        </div>
      </section>
    </>
  )
}
