import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { routes } from '../router/routes'

export function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="Not found"
        title="This route does not exist in the current site map."
        description="The product site pack includes a not-found state so broken hashes or outdated links do not collapse into a blank screen."
      />
      <CtaBanner
        title="Return to a valid product page."
        description="The homepage, modules index, pricing page, and support pages are all wired and available."
        primaryLabel="Go home"
        primaryPath={routes.home}
        secondaryLabel="See modules"
        secondaryPath={routes.modules}
      />
    </>
  )
}
