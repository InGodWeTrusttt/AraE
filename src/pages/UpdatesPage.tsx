import { PageHero } from '../components/ui/PageHero'
import { updateItems } from '../data/content'

export function UpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Updates"
        title="A lightweight product update surface."
        description="Use this page as your public-facing changelog or release note index. The structure is already in place so you can replace starter entries with real release content."
      />

      <section className="section">
        <div className="shell update-stack">
          {updateItems.map((item) => (
            <article className="card update-card" key={item.version}>
              <div className="update-meta">
                <span>{item.version}</span>
                <span>{item.date}</span>
              </div>
              <h3>{item.summary}</h3>
              <ul className="bullet-list compact-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
