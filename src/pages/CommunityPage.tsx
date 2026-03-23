import { PageHero } from '../components/ui/PageHero'

export function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Community layout included. Operational channel still required."
        description="This page is intentionally present so the footer contains no dead link, but you should connect it to a real Discord, forum, subreddit, or user group before treating it as production-ready."
      />

      <section className="section">
        <div className="shell cards-grid three-up">
          <article className="card compact-card">
            <h3>Recommended use</h3>
            <p>Explain where users can discuss workflows, share templates, or ask non-critical questions.</p>
          </article>
          <article className="card compact-card notice-card">
            <h3>Current status</h3>
            <p>This page is structurally complete, but the actual community channel is not hardcoded because no real destination was provided.</p>
          </article>
          <article className="card compact-card">
            <h3>What to wire in</h3>
            <p>Add your real invite link, moderation policy, and community expectations before launch.</p>
          </article>
        </div>
      </section>
    </>
  )
}
