import { Link } from 'react-router-dom'
import { useApp } from '../../context'
import { generateSlug } from '../../utils'

export const Product = () => {
  const app = useApp()

  // console.log(auth.products)
  const products = app.products.slice(100, 114)

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 lg:px-8">
      <div className="text-center">
        <h1 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          List of Product
        </h1>
        <ul className="text-left">
          {products.map((product) => (
            <li key={product.id} className="underline text-indigo-300">
              <Link to={generateSlug(product.title)}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
