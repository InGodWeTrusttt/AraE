import { PageHero } from '../components/ui/PageHero'

export function ReportBugPage() {
  const reportChecklist = [
    'What happened and what you expected instead.',
    'The exact steps to reproduce the issue.',
    'The AraE version and Windows version involved.',
    'Whether the issue is blocking, intermittent, or cosmetic.',
  ]

  return (
    <>
      <PageHero
        eyebrow="Report a bug"
        title="A proper bug report page should reduce support noise."
        description="This page gives you a clear place to describe the reporting process and the information you need from users. The reporting channel itself still needs to be connected."
      />

      <section className="section">
        <div className="shell cards-grid two-up">
          <article className="card compact-card">
            <h3>Recommended report checklist</h3>
            <ul className="bullet-list compact-list">
              {reportChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card compact-card notice-card">
            <h3>Channel not hardcoded intentionally</h3>
            <p>Wire this page to your real bug intake process: GitHub Issues, a dedicated form, or a ticketing system.</p>
          </article>
        </div>
      </section>
    </>
  )
}
