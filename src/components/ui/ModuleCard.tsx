import { BookIcon, ClockIcon, GridIcon, MapIcon } from './Icons'
import type { ModuleDetail } from '../../data/modules'
import { pathToHref } from '../../router/router'

function resolveIcon(icon: ModuleDetail['icon']) {
  switch (icon) {
    case 'clock':
      return ClockIcon
    case 'map':
      return MapIcon
    case 'book':
      return BookIcon
    case 'grid':
      return GridIcon
  }
}

export function ModuleCard({ module }: { module: ModuleDetail }) {
  const Icon = resolveIcon(module.icon)

  return (
    <article className={`card module-card accent-${module.accent}`}>
      <div className="module-card-icon-wrap">
        <Icon className="module-card-icon" />
      </div>
      <h3>{module.title}</h3>
      <p>{module.shortDescription}</p>
      <ul className="bullet-list compact-list">
        {module.outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="text-link" href={pathToHref(`/modules/${module.slug}`)}>
        {module.title} details
      </a>
    </article>
  )
}
