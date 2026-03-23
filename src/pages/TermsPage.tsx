import { PageHero } from '../components/ui/PageHero'

const termsSections = [
  'License scope and usage restrictions.',
  'Refund or cancellation policy, if any.',
  'Support expectations and update policy.',
  'Warranty disclaimers and limitation of liability.',
  'Governing law and dispute handling.',
]

export function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Terms page structure included. Contract text still required."
        description="This page gives you a legal content frame, but it should not be treated as finished until the terms match your actual license, payment, support, and refund model."
      />

      <section className="section">
        <div className="shell cards-grid two-up">
          <article className="card compact-card notice-card">
            <h3>Publication warning</h3>
            <p>Replace this starter page with the real contractual text reviewed against your product and distribution setup.</p>
          </article>
          <article className="card compact-card">
            <h3>Minimum sections to define</h3>
            <ul className="bullet-list compact-list">
              {termsSections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
