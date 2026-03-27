"use client"
import Button from "@/components/ui/Button"
import QuantitySelector from "@/components/ui/QuantitySelector"
import { useCart } from "@/context/CartContext"
import { ProductActionType } from "@/lib/types/type"
import { useState } from "react"


const ProductAction = ({ id, title, price, image }: ProductActionType) => {
    const { addToCart } = useCart()
    function handleBuyNow() {
        console.log('get:', JSON.parse(localStorage.getItem("cart") || "0"))
    }
    const [quantity, setQuantity] = useState<number>(1)
    return (
        <div className="product-form">
            <div className="add-to-cart">
                <QuantitySelector
                    value={quantity}
                    onIncrease={() => setQuantity((prev) => prev + 1)}
                    onDecrease={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                />
                <Button label="add to cart" onClick={() => addToCart(id, title, quantity, price!, image!)} type="secondary" />
            </div>
            <Button label="Buy Now" onClick={handleBuyNow} />

        </div>
    )
}

export default ProductAction