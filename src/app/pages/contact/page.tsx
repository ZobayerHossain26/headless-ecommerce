'use client'

import { useCart } from "@/context/CartContext"

const Contact =()=>{

    const {cart}=useCart()
    console.log(cart)
    return(
        <div className="container">Contact</div>
    )
}

export default Contact