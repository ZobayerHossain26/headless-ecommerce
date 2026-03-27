'use client'

import { useCart } from "@/context/CartContext"
import Arrow from "@/components/ui/icons/Arrow";
import TrashIcon from "@/components/ui/icons/TrashIcon";
import QuantitySelector from "@/components/ui/QuantitySelector";


const Cart = () => {

    const { cart, removeFromCart, increaseCartItem, decreaseCartItem } = useCart()

    return (
        <section>
            <div className="container">
                <div>
                    <h1>Shopping Cart</h1>
                </div>
                <div className="breadcrumb">
                    <a href="/" className="breadcrumb--item">home</a>
                    <span aria-hidden="true" className="breadcrumb--separator">
                        <Arrow />
                    </span>
                    <span className="breadcrumb--item">your shopping cart</span>
                </div>
                <div className="cart-wrapper">
                    {
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="product-item">
                                    <div className="product-image">
                                        <img src={item.featuredImage?.url} alt={item.title} />
                                    </div>
                                    <div>
                                        <h4 className="product-price">{item.title}</h4>

                                        <div className="icon"
                                            onClick={() => removeFromCart(item.id)}>
                                            <span>remove</span>
                                            <TrashIcon />
                                        </div>

                                    </div>
                                </div>
                                <div> {item.price}</div>
                                <QuantitySelector
                                    value={item.quantity}
                                    onIncrease={() => increaseCartItem(item.id)}
                                    onDecrease={() => decreaseCartItem(item.id)}
                                />
                                <div>{(parseFloat(item.price!) * item.quantity).toFixed(2).toString()}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Cart