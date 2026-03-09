'use client'

import { useState } from "react"
import styles from "../../assets/card.module.css"
import { useRouter } from "next/navigation"

const Card = () => {
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
                    <img src="/product_1.png" onClick={() => router.push('/product/1')} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>Gazelle Ami C7 HMS</h3>
                    <p className="price">€ 2.599,00</p>
                </div>
            </div>
        </div>
    )
}

export default Card