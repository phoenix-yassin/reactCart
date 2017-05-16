/**
 * Created by Administrator on 2017/5/16.
 */
import shop from '../data/shop'
import * as type from '../constants/constants'

const receiveItems = (items) =>{
    type: type.RECEIVE_ITEMS
    items: items
}

export const getAllItems = () => (dispatch) => {
    shop.getItems( items => {
        dispatch(receiveItems(items));
    }, 1000)
}

const addToCartUnsafe = itemId => ({
    type: type.ADD_TO_CART,
    itemId
})

export const addToCart = (itemId) => (dispatch, getState) => {
    if(getState().items.byId[itemId].inventory > 0){
        dispatch(addToCart(itemId))
    }
}

export const checkout = items => (dispatch, getState) => {
    dispatch({
        type: type.CHECKOUT_REQUEST
    })
    shop.buyItems(items, ()=>{
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
    })
}