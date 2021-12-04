import { render, screen } from '../test-utils'
import { Button } from '@components/ui/Button'

describe('Button Component', () => {
  it('Should render the button', () => {
    render(<Button>Button</Button>)

    const buttonText = screen.getByText(/Button/i)

    expect(buttonText).toBeInTheDocument()
  })
})
