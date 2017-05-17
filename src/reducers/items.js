/**
 * Created by Administrator on 2017/5/16.
 */

import {combineReducers} from 'redux';
import {ADD_TO_CART, RECEIVE_ITEMS} from '../constants/constants'

/**
 * 重新计算库存,返回该对象
 * @param state
 * @param action
 */
const products = (state, action) =>{
    switch (action.type){
        case ADD_TO_CART:
            return {
                ...state,
                inventory: state.inventory - 1
            }
        default:
            return state;
    }
}

// 将原来的对象数组，转换成 {id:item}形式，并重新计算库存. action包含新的对象，需要在原state基础上增加
const byId = (state={}, action)=>{
    switch (action.type){
        case RECEIVE_ITEMS:
            return {
                ...state,
                ...action.items.reduce((obj, item)=>{
                        obj[item.id] = item;
                        return obj;
                    },{})
            }
        default:
            const {itemId} = action;
            if(itemId){
                return {
                    ...state,
                    [itemId]: products(state[itemId],action)
                }
            }
            return state;
    }
}

//
const visibleIds = (state=[],action)=>{
    switch (action.type){
        case RECEIVE_ITEMS:
            return action.items.map(item=> item.id);
        default: return state;
    }
}

export default combineReducers({
    byId,
    visibleIds
}
)

export const getItem = (state, id)=>{
    return state.byId[id];
}

export const getVisibleItems = (state)=>{
    return state.visibleIds.map((id)=> getItem(state,id))
}