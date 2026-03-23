import { PageHero } from '../components/ui/PageHero'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact page structure included. Real contact channels still need wiring."
        description="This page prevents a dead footer link and gives you a clean layout for support, business, and press contact paths. Replace the operational placeholders before launch."
      />

      <section className="section">
        <div className="shell cards-grid three-up">
          <article className="card compact-card">
            <h3>Support</h3>
            <p>Add your real support inbox or ticket form here.</p>
          </article>
          <article className="card compact-card">
            <h3>Business inquiries</h3>
            <p>Add your actual partnership or sales contact route here.</p>
          </article>
          <article className="card compact-card notice-card">
            <h3>Required before production</h3>
            <p>Do not publish this page with fake or missing contact channels. It should either work or be removed temporarily.</p>
          </article>
        </div>
      </section>
    </>
  )
}
