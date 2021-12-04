import { render, screen } from '../test-utils'
import { Header } from '@components/common'

describe('Header Component', () => {
  it('Should render the title on Header', () => {
    render(<Header />)

    const title = screen.getByText(/Boiler/i)

    expect(title).toBeInTheDocument()
    expect(title).toMatchSnapshot()
  })
})
