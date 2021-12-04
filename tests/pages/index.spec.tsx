import { render, screen } from '../test-utils'
import HomePage from '@pages/index'

describe('HomePage', () => {
  it('Should render the heading', () => {
    render(<HomePage />)

    const heading = screen.getByText(/Home Page/i)

    expect(heading).toBeInTheDocument()
  })
})
