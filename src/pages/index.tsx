import { Layout } from '@components/common'
import { Button } from '@components/ui'

const HomePage = () => {
  return (
    <Layout>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold bg-pink-500 px-8 text-white">
          Home Page
        </h1>
        <div className="mt-6">
          <Button>Entrar</Button>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
