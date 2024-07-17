export const cartInitialState = JSON.parse(window.localStorage.getItem('cart-list')) || []

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
    DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
    CLEAR_CART: "CLEAR_CART",
}

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart-list', JSON.stringify(state))
}



export const cartReducer = (state, action) => {
    const {type: actionType, playload: actionPlayload} = action

    switch(actionType){
        case CART_ACTIONS_TYPES.ADD_TO_CART: {
            const {id} = actionPlayload
            

            const newState = [
                ...state,
                {
                    ...actionPlayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS_TYPES.INCREMENT_QUANTITY: {
            const newState = structuredClone(state)
            const {id} = actionPlayload
            const itemIndexInCart = state.findIndex(item => item.id === id)
            
            if(itemIndexInCart >= 0){
                newState[itemIndexInCart].quantity += 1
                updateLocalStorage(newState)
            }

            return newState

        }

        case CART_ACTIONS_TYPES.DECREMENT_QUANTITY: {
            const {id} = actionPlayload
            const newState = structuredClone(state)
            const itemIndexInCart = state.findIndex(item => item.id === id)
            
            if(state[itemIndexInCart].quantity > 1){
                newState[itemIndexInCart].quantity -= 1
                updateLocalStorage(newState)
            }
                
            return newState
        }

        case CART_ACTIONS_TYPES.REMOVE_FROM_CART : {
            const {id} = actionPlayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTIONS_TYPES.CLEAR_CART : {
            updateLocalStorage([])
            return []
        }

    }

    return state
}