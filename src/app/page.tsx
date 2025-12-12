import Image from 'next/image'
import ProductList from './Commponent/ProductList'

const Homepage  = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) => {
    const category = (await searchParams).category
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="featured Product" fill />
      </div>
      <ProductList category={category} params="products" />
    </div>
  )
}

export default Homepage
