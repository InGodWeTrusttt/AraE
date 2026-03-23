import { routes } from '../../router/routes'
import { pathToHref } from '../../router/router'

type CtaBannerProps = {
  title: string
  description: string
  primaryLabel: string
  primaryPath?: string
  secondaryLabel?: string
  secondaryPath?: string
}

export function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryPath = routes.pricing,
  secondaryLabel,
  secondaryPath,
}: CtaBannerProps) {
  return (
    <section className="section">
      <div className="shell">
        <div className="cta-slab">
          <div>
            <span className="eyebrow">Ready to continue</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cta-slab-actions">
            <a className="button button-primary" href={pathToHref(primaryPath)}>
              {primaryLabel}
            </a>
            {secondaryLabel && secondaryPath ? (
              <a className="button button-secondary" href={pathToHref(secondaryPath)}>
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
