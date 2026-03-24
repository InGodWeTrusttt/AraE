import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function PageTransition({
  children,
  routeKey,
}: {
  children: ReactNode
  routeKey: string
}) {
  return (
    <motion.div
      key={routeKey}
      className="page-transition"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
