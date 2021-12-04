import { render, screen } from '../test-utils'
import { Layout } from '@components/common'

describe('Layout Component', () => {
  it('Should render the Layout', () => {
    render(
      <Layout>
        <h1>Layout</h1>
      </Layout>
    )

    const layout = screen.getByText(/Layout/i)

    expect(layout).toBeInTheDocument()
    expect(layout).toMatchSnapshot()
  })
})
