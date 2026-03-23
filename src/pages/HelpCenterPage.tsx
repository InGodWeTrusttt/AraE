import { PageHero } from '../components/ui/PageHero'
import { helpCenterQuestions } from '../data/content'

export function HelpCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="A focused support front door."
        description="This page is intended to answer the most common pre-support questions before a user needs direct assistance."
      />

      <section className="section">
        <div className="shell faq-stack">
          {helpCenterQuestions.map((item) => (
            <article className="card faq-card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
