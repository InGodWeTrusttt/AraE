import type { SVGProps } from 'react'

export function AraeMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="arae-gradient" x1="6" y1="5" x2="30" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cabfff" />
          <stop offset="1" stopColor="#7d67ff" />
        </linearGradient>
      </defs>
      <path
        d="M18 3.5 30 10.4v15.2L18 32.5 6 25.6V10.4L18 3.5Z"
        stroke="url(#arae-gradient)"
        strokeWidth="2"
        fill="rgba(125,103,255,0.12)"
      />
      <path d="M18 8.7 25.1 12.7v8.6L18 25.4l-7.1-4.1v-8.6L18 8.7Z" stroke="url(#arae-gradient)" strokeWidth="1.8" />
      <path d="M18 8.7v16.7" stroke="url(#arae-gradient)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.5 10.5 12 14l3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18.5h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M13 6.8 18.2 12 13 17.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12.1 10.7 14.3 15.5 9.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.2l2.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function MapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 6.3 9 4.3l6 2 5-2v13.4l-5 2-6-2-5 2V6.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 4.3v13.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 6.3v13.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.5 5.5h9a3 3 0 0 1 3 3V18h-10a3 3 0 0 0-3 3V8.5a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 18h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4.5" y="4.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="4.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4.5" y="14.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="14.5" width="5" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 15.5 19.2 19.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
