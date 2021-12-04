import { render, screen } from '../test-utils'
import { ThemeToggle } from '@components/common'

describe('Header Component', () => {
  it('Should render the title on Header', () => {
    render(<ThemeToggle />)

    const themeToggle = screen.getByTestId('theme-toggle')
    expect(themeToggle).toBeInTheDocument()
    expect(themeToggle).toHaveClass('focus:outline-none')
    expect(themeToggle.firstChild.nodeName).toBe('svg')
    expect(themeToggle.lastChild.nodeName).toBe('svg')
    expect(themeToggle).toMatchSnapshot()
  })
})
