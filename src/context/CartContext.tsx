'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { CartItemType } from "@/lib/types/type";

type CartContextType = {
    cart: CartItemType[],
    addToCart: (productId: string, title: string, quantity: number, price: string, image: string) => void,
    removeFromCart: (productId: string) => void,
    quantity: number,
    handleIncrease: () => void,
    handleDecrease: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<CartItemType[]>([])
    const [quantity, setQuantity] = useState<number>(1)

    const addToCart: CartContextType["addToCart"] = (productId, title, quantity, price, image) => {

        setCart((prevItem) => {
            let updateCart: CartItemType[] = []
            const existingItem = prevItem.find((item) => item.id === productId)
            if (existingItem) {
                updateCart = prevItem.map((item) => item.id == productId ?
                    {
                        ...item,
                        quantity: item.quantity + quantity,
                    } : item)
            }
            else {
                updateCart = [
                    ...prevItem,
                    {
                        id: productId,
                        title: title,
                        quantity: quantity,
                        price,
                        featuredImage: {
                            url: image || "",
                        }
                    }

                ]
            }
            localStorage.setItem("cart", JSON.stringify(updateCart))
            return updateCart
        })
    }

    const removeFromCart: CartContextType["removeFromCart"] = (productId) => {
        setCart((prevItems) => {
            const updatedCart = prevItems.filter((item) => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }

    function handleIncrease() {
        setQuantity(prev => prev + 1);
    }

    function handleDecrease() {
        setQuantity(prev => Math.max(prev - 1, 1));
    }
    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        setCart(cartData ? JSON.parse(cartData) : []);
    }, []);
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleIncrease, handleDecrease, quantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context
}