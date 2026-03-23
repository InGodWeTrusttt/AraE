import { PageHero } from '../components/ui/PageHero'
import { blogPosts } from '../data/content'

export function DevBlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Dev blog"
        title="A product thinking and development journal."
        description="This page gives you a place to publish product rationale, design notes, and behind-the-scenes articles instead of keeping the site purely transactional."
      />

      <section className="section">
        <div className="shell cards-grid three-up">
          {blogPosts.map((post) => (
            <article className="card" key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
