"use client"

import { QuantitySelectorType } from "@/lib/types/type"
const QuantitySelector = ({ value, onIncrease, onDecrease }: QuantitySelectorType) => {
    return (
        <div className="product-form--input">
            <button className="quantity-button" onClick={onDecrease}>-</button>
            <div className="quantity--input">{value}</div>
            <button className="quantity-button" onClick={onIncrease}>+</button>
        </div>
    )
}

export default QuantitySelector