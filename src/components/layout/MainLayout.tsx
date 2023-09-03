import { ReactNode } from 'react'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      <div className="mx-auto min-h-screen-content max-w-7xl p-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}
