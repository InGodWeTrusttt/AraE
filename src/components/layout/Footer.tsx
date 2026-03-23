import { footerGroups } from '../../data/navigation'
import { pathToHref } from '../../router/router'
import { routes } from '../../router/routes'
import { AraeMark } from '../ui/Icons'

function FooterColumn({ title, links }: { title: string; links: { label: string; path: string }[] }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={pathToHref(link.path)}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href={pathToHref(routes.home)}>
            <AraeMark className="brand-mark" />
            <span className="brand-wordmark">AraE</span>
          </a>
          <p>The premium desktop companion for long-form tabletop RPG campaigns.</p>
          <small>© 2026 ARAE SOFTWARE. ALL RIGHTS RESERVED.</small>
        </div>

        {footerGroups.map((group) => (
          <FooterColumn key={group.title} title={group.title} links={group.links} />
        ))}
      </div>
    </footer>
  )
}
