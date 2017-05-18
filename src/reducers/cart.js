/**
 * Created by Administrator on 2017/5/16.
 */


import {ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_FAILURE} from '../constants/constants'

const initialState = {
    addedIds:[],
    quantityById: {}
}
//加入购物车的物品id
const addedIds = (state = initialState.addedIds, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            if(state.indexOf(action.id)> -1){
                return state;
            }
            return [
                ...state,
                action.id
            ]
        default:
            return state;
    }
}

const  quantityById = (state = initialState.quantityById, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            const {itemId} = action;
            return {
                ...state,
                [id]: {qty: state[id].qty || 0, inventory: 0 }
            }
        default:
            return state;
    }
}

export const getQuantity = (state, itemId) => state.quantityById[itemId] || 0;

export const getAddedIds = (state ) => state.addedIds;


const Cart = (state = initialState, action)=>{
    switch (action.type){
        case CHECKOUT_REQUEST:
            return initialState;
        case CHECKOUT_FAILURE:
            return action.cart;
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
    }
}
export default Cart;