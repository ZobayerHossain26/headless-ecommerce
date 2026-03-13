'use client'

import { createContext, useContext, useState } from "react";

type CartItemType = {
    id: string,
    title: string,
    quantity: number,
    price: number
}

type CartContextType = {
    cart: CartItemType[],
    setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<CartItemType[]>([])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context
}