"use client"
import Button from "@/components/ui/Button"
import { useState } from "react"
const ProductAction = ({id}:{id:string}) => {
    const [quantity, setQuantity] = useState<number>(1)

    function handleAddToCard() {
        localStorage.setItem(id,JSON.stringify(quantity))
    }
    function handleBuyNow() {
       console.log('get:', JSON.parse(localStorage.getItem(id)|| "0"))
    }
    function handleIncrease() {
        setQuantity(prev => prev += 1)
    }
    function handleDecrease() {

        setQuantity((prev) => {
            if (prev > 1) {
                prev -= 1
            }
            return prev
        })
    }

    return (
        <div className="product-form">
            <div className="add-to-cart">
                <div className="product-form--input">
                    <button className="quantity-button" onClick={handleDecrease}>-</button>
                    <div className="quantity--input">{quantity}</div>
                    <button className="quantity-button" onClick={handleIncrease}>+</button>
                </div>
                <Button label="add to cart" onClick={handleAddToCard} type="secondary" />
            </div>
            <Button label="Buy Now" onClick={handleBuyNow} />
        </div>
    )
}

export default ProductAction