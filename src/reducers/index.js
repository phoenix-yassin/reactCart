import { combineReducers} from 'redux';

import cart, *  as fromCart from './cart'
import items, * as fromItems from './items'


export default combineReducers({
    cart,
    items
})

const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getItem = ( state , id) =>  fromItems.getItem( state.items , id);

// 价格*数量 以及 items列表
export const getTotal = state => {
    getAddedIds(state).reduce((total,id) => {
       return total+ getQuantity(state, id) * getItem(state,id).price
    },0)
        .toFixed(2)
}

export const getCartItems = state => {
    getAddedIds(state).map( id => ({
        ...getItem(state,id),
        quantity:getQuantity(state,id)}
    ))
}