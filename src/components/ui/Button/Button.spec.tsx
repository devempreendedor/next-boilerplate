import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button Component', () => {
  it('Should render the button', () => {
    render(<Button>Button</Button>)

    const buttonText = screen.getByText(/Button/i)

    expect(buttonText).toBeInTheDocument()
  })
})
