"use client"
import Button from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"

import { useState } from "react"
const ProductAction = ({ id }: { id: string }) => {
    const { cart, setCart } = useCart()
    const [quantity, setQuantity] = useState<number>(1)

    function handleAddToCard() {
        setCart((prevItem) => {
            const existingItem = prevItem.find((item) => item.id == id)
            let updateCart
            if (existingItem) {
                updateCart = prevItem.map((item) => item.id == id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            else {
                updateCart = [
                    ...prevItem,
                    {
                        id,
                        title: "test",
                        quantity: 1,
                        price: 10
                    }
                ]
            }
            localStorage.setItem(id, JSON.stringify(updateCart))
            return updateCart
        })

        
    }
    function handleBuyNow() {
        console.log('get:', JSON.parse(localStorage.getItem(id) || "0"))
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