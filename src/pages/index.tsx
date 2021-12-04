import { ThemeToogle } from '@components/common'
import { Button } from '@components/ui'

const HomePage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold bg-pink-500 px-8 text-white">
        Home Page
      </h1>
      <div className="mt-6">
        <div className="flex item mb-4">
          <p className="mr-4">Change theme:</p>
          <ThemeToogle />
        </div>
        <Button>Entrar</Button>
      </div>
    </main>
  )
}

export default HomePage
