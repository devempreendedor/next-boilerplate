import { ReactNode } from 'react'
import { Header, Footer } from '../'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
