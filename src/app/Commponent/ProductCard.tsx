
'use client'

import { ProductType } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useCartStore from '../stores/cartStore'
import { toast} from 'react-toastify'

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    sizes: product.sizes[0],
    colors: product.colors[0],
  })

  const { addToCart } = useCartStore()

  const handleProductType = ({
    type,
    value,
  }: {
    type: 'sizes' | 'colors'
    value: string
  }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }))
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.sizes,
      selectedColor: productTypes.colors,
    });

    toast.success("Product added to cart")

  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={product.images[productTypes.colors]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">
          {product.shortDescription}
        </p>

        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Sizes:</span>
            <select
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({
                  type: 'sizes',
                  value: e.target.value,
                })
              }
              value={productTypes.sizes}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* COLORS */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Colors:</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer border rounded-full p-[1.2px] ${
                    productTypes.colors === color
                      ? 'border-gray-400'
                      : 'border-gray-200'
                  }`}
                  onClick={() =>
                    handleProductType({
                      type: 'colors',
                      value: color,
                    })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRICE & ADD TO CART */}
        <div className="flex items-center justify-between mt-2">
          <p className="font-medium text-lg">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="
              px-4 py-2 rounded-xl text-white font-semibold flex items-center gap-2
              bg-gradient-to-r from-black to-red-600
              transition-transform duration-300
              hover:scale-110
            "
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

