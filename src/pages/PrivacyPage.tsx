import { PageHero } from '../components/ui/PageHero'

const privacySections = [
  'What data the product collects or does not collect.',
  'Whether analytics, telemetry, or error reporting are enabled.',
  'How support emails or contact forms are processed and retained.',
  'What third-party services are involved in payments, hosting, or distribution.',
  'How users can request deletion, correction, or export where applicable.',
]

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy policy template included. Legal text still required."
        description="This page exists to remove dead footer links and give you a proper structure, but it is not a substitute for a real privacy policy aligned with your actual product behavior."
      />

      <section className="section">
        <div className="shell cards-grid two-up">
          <article className="card compact-card notice-card">
            <h3>Do not publish as final legal text</h3>
            <p>Replace this template with a policy that reflects the real data handling, support flows, analytics, and payment setup of your product.</p>
          </article>
          <article className="card compact-card">
            <h3>Minimum topics to cover</h3>
            <ul className="bullet-list compact-list">
              {privacySections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  )
}
