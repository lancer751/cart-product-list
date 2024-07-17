/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext()

function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer ,cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        playload: product
    })

    const incrementQuantity = product => dispatch({
        type: 'INCREMENT_QUANTITY',
        playload: product
    })

    const decrementQuantity = product => dispatch({
        type: 'DECREMENT_QUANTITY',
        playload: product
    })


    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        playload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART',
    })

    return {state, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart}
}

export function CartProvider({children}){
    const {state, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart} = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}