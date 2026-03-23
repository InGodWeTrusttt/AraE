import { routes } from '../router/routes'

export type NavItem = {
  label: string
  path: string
}

export type FooterGroup = {
  title: string
  links: NavItem[]
}

export const primaryNavigation: NavItem[] = [
  { label: 'Features', path: routes.features },
  { label: 'Modules', path: routes.modules },
  { label: 'Pricing', path: routes.pricing },
  { label: 'Support', path: routes.helpCenter },
]

export const footerGroups: FooterGroup[] = [
  {
    title: 'PRODUCT',
    links: [
      { label: 'Features', path: routes.features },
      { label: 'Modules', path: routes.modules },
      { label: 'Pricing', path: routes.pricing },
      { label: 'Windows App', path: routes.windowsApp },
      { label: 'Updates', path: routes.updates },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Documentation', path: routes.documentation },
      { label: 'Community', path: routes.community },
      { label: 'Video Tutorials', path: routes.tutorials },
      { label: 'Dev Blog', path: routes.devBlog },
      { label: 'API Access', path: routes.apiAccess },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Help Center', path: routes.helpCenter },
      { label: 'Contact Us', path: routes.contact },
      { label: 'Report a Bug', path: routes.reportBug },
      { label: 'Privacy Policy', path: routes.privacy },
      { label: 'Terms of Service', path: routes.terms },
    ],
  },
]
