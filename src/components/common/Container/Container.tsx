import { ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-5xl px-4 xl:px-0 md:mx-auto">{children}</div>
}

export default Container
