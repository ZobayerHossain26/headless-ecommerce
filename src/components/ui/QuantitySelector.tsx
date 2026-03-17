"use client"

import { useCart } from "@/context/CartContext"


const QuantitySelector = () => {
    const { quantity, handleDecrease, handleIncrease} = useCart()

    return (
        <div className="product-form--input">
            <button className="quantity-button" onClick={handleDecrease}>-</button>
            <div className="quantity--input">{quantity}</div>
            <button className="quantity-button" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantitySelector