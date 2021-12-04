import { render, screen } from '../test-utils'
import { Container } from '@components/common'

describe('Container Component', () => {
  it('Should render the container', () => {
    render(
      <Container>
        <h1>Container</h1>
      </Container>
    )

    const container = screen.getByText(/Container/i)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
