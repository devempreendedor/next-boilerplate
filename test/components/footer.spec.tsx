import { render, screen } from '../test-utils'
import { Footer } from '@components/common'

describe('Footer Component', () => {
  it('Should render the Footer', () => {
    render(<Footer />)

    const FooterText = screen.getByText(/Made with ♥/i)

    expect(FooterText).toBeInTheDocument()
    expect(FooterText).toMatchSnapshot()
  })
})
