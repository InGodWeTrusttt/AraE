import { useEffect, useState } from 'react'

export function normalizeHashLocation(hash: string): string {
  if (!hash || hash === '#') {
    return '/'
  }

  const raw = hash.startsWith('#') ? hash.slice(1) : hash
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`
  const trimmed = withSlash.replace(/\/+$/, '')

  return trimmed || '/'
}

export function pathToHref(path: string): string {
  return `#${path === '/' ? '/' : path}`
}

export function useHashPath(): string {
  const [path, setPath] = useState(() => normalizeHashLocation(window.location.hash))

  useEffect(() => {
    const handleHashChange = () => {
      setPath(normalizeHashLocation(window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return path
}

export function useScrollToTop(path: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [path])
}
