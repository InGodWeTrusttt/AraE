import { PageHero } from '../components/ui/PageHero'
import { tutorialTracks } from '../data/content'

export function VideoTutorialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Video tutorials"
        title="A starter index for structured tutorial content."
        description="Use this page if you plan to publish walkthrough videos, onboarding sequences, or workflow-specific teaching material."
      />

      <section className="section">
        <div className="shell cards-grid three-up">
          {tutorialTracks.map((track) => (
            <article className="card" key={track.title}>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
