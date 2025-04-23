import { db } from "../data/db";
import { Guitar, CartItem } from "../types";

export type CartActions =
    { type: 'add-to-cart', payload: { item: Guitar } } |
    { type: 'remove-from-cart', payload: { id: Guitar['id'] } } |
    { type: 'decrease-quantity', payload: { id: Guitar['id'] } } |
    { type: 'increase-quantity', payload: { id: Guitar['id'] } } |
    { type: 'clear-cart' }

export type CartState = {
    data: Guitar[]
    cart: CartItem[]
}

export const initialState = {
    data: db,
    cart: []
}

const MIN_ITEMS = 1
const MAX_ITEMS = 5

export const cartReducers = (
    state: CartState = initialState,
    action: CartActions
) => {

    if (action.type === 'add-to-cart') {

        const itemExists = state.cart.findIndex(guitar => guitar.id === action.payload.item.id)

        let updatedCart: CartItem[] = []
        if (itemExists >= 0) { // existe en el carrito
            if (state.cart[itemExists].quantity >= MAX_ITEMS) return
            updatedCart = [...state.cart]
            updatedCart[itemExists].quantity++
        } else {
            const newItem: CartItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {
        return {
            ...state
        }
    }

    if (action.type === 'decrease-quantity') {
        return {
            ...state
        }
    }

    if (action.type === 'increase-quantity') {
        return {
            ...state
        }
    }

    if (action.type === 'clear-cart') {
        return {
            ...state
        }
    }
}