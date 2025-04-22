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

export const cartReducers = (
    state: CartState = initialState,
    action: CartActions
) => {

    if (action.type === 'add-to-cart') {
        return {
            ...state
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