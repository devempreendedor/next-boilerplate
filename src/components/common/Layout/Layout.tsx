import { ReactNode } from 'react'
import { Header, Footer } from '../'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 h-full">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
