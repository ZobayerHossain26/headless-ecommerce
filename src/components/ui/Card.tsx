'use client'

import { useState } from "react"
import styles from "../../assets/card.module.css"
import { useRouter } from "next/navigation"

type Product = {
  id: string
  title: string
  handle: string
  featuredImage?: {
    url: string
    altText?: string | null
  }
  priceRange?: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
}

const Card = ({ product }: { product: Product }) => {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const variantColor = ['#3C5358', '#598F9B']
  function variantChange(id: number) {
    setActiveIndex(id)
  }

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.variant}>
          {variantColor.map((color, index) => (
            <div key={index} className={`${styles.variantwrapper} ${activeIndex == index ? styles.active : ""}`}
              onClick={() => variantChange(index)}>
              <div className={styles.color} style={{ backgroundColor: color }}>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.media}>
          <img
            src={product.featuredImage?.url}
            onClick={() => {
              const id = product.id.split('/').pop();
              router.push(`/product/${id}`)
            }}
            alt={product.featuredImage?.altText || product.title}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.price}>
            <span>{product.priceRange?.minVariantPrice.amount}</span>
            <span>{product.priceRange?.minVariantPrice.currencyCode}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
