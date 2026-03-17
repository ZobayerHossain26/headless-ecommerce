"use client"
import Button from "@/components/ui/Button"
import QuantitySelector from "@/components/ui/QuantitySelector"
import { useCart } from "@/context/CartContext"
import { ProductActionType } from "@/lib/types/type"


const ProductAction = ({ id, title, price, image }: ProductActionType) => {
    const { addToCart,quantity } = useCart()
    function handleBuyNow() {
        console.log('get:', JSON.parse(localStorage.getItem("cart") || "0"))
    }
  

    return (
        <div className="product-form">
            <div className="add-to-cart">
                <QuantitySelector />
                <Button label="add to cart" onClick={() => addToCart(id, title, quantity, price!, image!)} type="secondary" />
            </div>
            <Button label="Buy Now" onClick={handleBuyNow} />

        </div>
    )
}

export default ProductAction