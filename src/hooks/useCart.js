import { useContext } from "react";
import { CartContext } from "../context/cart";


export function useCart(){
    const cartContext = useContext(CartContext)

    if(cartContext === undefined){
        throw new Error('useCart must be whitin a CartProvider')
    }

    return cartContext
}