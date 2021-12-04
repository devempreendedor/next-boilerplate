import { Container, ThemeToggle } from '..'

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-4 md:py-8">
          <div>Boiler</div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
