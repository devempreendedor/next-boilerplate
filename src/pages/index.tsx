import { Layout } from '@components/common'
import { Button } from '@components/ui'

const HomePage = () => {
  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="text-6xl font-semibold bg-pink-500 px-8 text-white">
          NextJS Boilerplate
        </h1>
        <p>A boilerplate built with NextJs, Typescript and TailwindCss</p>
        <div className="mt-6">
          <Button
            onClick={() =>
              (window.location.href =
                'https://github.com/devempreendedor/next-boilerplate')
            }
          >
            Access Repository
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
