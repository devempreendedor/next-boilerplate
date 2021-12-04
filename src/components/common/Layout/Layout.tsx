import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
