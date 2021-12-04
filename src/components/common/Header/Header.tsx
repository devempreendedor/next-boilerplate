import { Container, ThemeToogle } from '..'

const Header = () => {
  return (
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
  )
}

export default Header
