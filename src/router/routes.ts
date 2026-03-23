export const routes = {
  home: '/',
  features: '/features',
  modules: '/modules',
  pricing: '/pricing',
  windowsApp: '/windows-app',
  updates: '/updates',
  documentation: '/documentation',
  community: '/community',
  tutorials: '/video-tutorials',
  devBlog: '/dev-blog',
  apiAccess: '/api-access',
  helpCenter: '/help-center',
  contact: '/contact',
  reportBug: '/report-bug',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
} as const

export type AppRoute = (typeof routes)[keyof typeof routes]
