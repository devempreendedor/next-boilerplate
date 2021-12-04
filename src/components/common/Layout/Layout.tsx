import { ReactNode } from 'react'
import { ThemeToogle, Container } from '../'

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Container>
          <div className="flex items-center justify-between py-4 md:py-8">
            <div>Boiler</div>
            <div>
              <ThemeToogle />
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1 h-full">{children}</main>
    </div>
  )
}

export default Layout
