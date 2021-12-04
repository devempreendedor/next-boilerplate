import { Container } from '..'

const Header = () => {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            {`© ${new Date().getFullYear()} • `}
            <a href="https://github.com/devempreendedor">Lucas Couto</a>
          </div>
          <div>Made with &hearts;</div>
        </div>
      </Container>
    </footer>
  )
}

export default Header
