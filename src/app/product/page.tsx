import { getProducts } from '../lib/client'
import ProductList from '../components/ProductList'

export default async function ProductPage() {
  const products = await getProducts()

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8 mb-5">
        <h2 className="text-3xl font-bold font-family-roboto mb-10 text-center text-black">
          Select Products
        </h2>
        <ProductList products={products} />
      </div>
    </section>
  )
}

