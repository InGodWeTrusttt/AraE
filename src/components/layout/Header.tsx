import { primaryNavigation } from '../../data/navigation'
import { pathToHref } from '../../router/router'
import { routes } from '../../router/routes'
import { AraeMark, DownloadIcon } from '../ui/Icons'

const supportPaths: string[] = [
  routes.helpCenter,
  routes.contact,
  routes.reportBug,
  routes.privacy,
  routes.terms,
]

export function Header({ currentPath }: { currentPath: string }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={pathToHref(routes.home)} aria-label="AraE home">
          <AraeMark className="brand-mark" />
          <span className="brand-wordmark">AraE</span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const isSupportItem = item.path === routes.helpCenter
            const isActive = isSupportItem
              ? supportPaths.includes(currentPath)
              : currentPath === item.path || currentPath.startsWith(`${item.path}/`)

            return (
              <a key={item.label} className={isActive ? 'is-active' : undefined} href={pathToHref(item.path)}>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <a className="nav-link-icon" href={pathToHref(routes.windowsApp)}>
            <DownloadIcon className="inline-icon" />
            <span>Windows app</span>
          </a>
          <a className="button button-primary button-small" href={pathToHref(routes.pricing)}>
            Buy AraE — €10
          </a>
        </div>
      </div>
    </header>
  )
}
