import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { getModuleBySlug } from './data/modules'
import { HomePage } from './pages/HomePage'
import { FeaturesPage } from './pages/FeaturesPage'
import { ModulesPage } from './pages/ModulesPage'
import { ModuleDetailPage } from './pages/ModuleDetailPage'
import { PricingPage } from './pages/PricingPage'
import { WindowsAppPage } from './pages/WindowsAppPage'
import { UpdatesPage } from './pages/UpdatesPage'
import { DocumentationPage } from './pages/DocumentationPage'
import { CommunityPage } from './pages/CommunityPage'
import { VideoTutorialsPage } from './pages/VideoTutorialsPage'
import { DevBlogPage } from './pages/DevBlogPage'
import { ApiAccessPage } from './pages/ApiAccessPage'
import { HelpCenterPage } from './pages/HelpCenterPage'
import { ContactPage } from './pages/ContactPage'
import { ReportBugPage } from './pages/ReportBugPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { useHashPath, useScrollToTop } from './router/router'
import { routes } from './router/routes'

function renderPage(path: string) {
  if (path === routes.home) return <HomePage />
  if (path === routes.features) return <FeaturesPage />
  if (path === routes.modules) return <ModulesPage />
  if (path === routes.pricing) return <PricingPage />
  if (path === routes.windowsApp) return <WindowsAppPage />
  if (path === routes.updates) return <UpdatesPage />
  if (path === routes.documentation) return <DocumentationPage />
  if (path === routes.community) return <CommunityPage />
  if (path === routes.tutorials) return <VideoTutorialsPage />
  if (path === routes.devBlog) return <DevBlogPage />
  if (path === routes.apiAccess) return <ApiAccessPage />
  if (path === routes.helpCenter) return <HelpCenterPage />
  if (path === routes.contact) return <ContactPage />
  if (path === routes.reportBug) return <ReportBugPage />
  if (path === routes.privacy) return <PrivacyPage />
  if (path === routes.terms) return <TermsPage />

  if (path.startsWith('/modules/')) {
    const slug = path.slice('/modules/'.length)
    return getModuleBySlug(slug) ? <ModuleDetailPage slug={slug} /> : <NotFoundPage />
  }

  return <NotFoundPage />
}

export default function App() {
  const path = useHashPath()
  useScrollToTop(path)

  return (
    <div className="page-shell">
      <Header currentPath={path} />
      <main>{renderPage(path)}</main>
      <Footer />
    </div>
  )
}
