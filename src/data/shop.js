/**
 * Created by Administrator on 2017/5/16.
 */

import _items from './items'

const TIMEOUT = 200

export default {
    getItems: (cb, timeout)=> {setTimeout(()=>cb(_items), timeout || TIMEOUT )},
    buyItems: (items, cb, timeout) => setTimeout(()=>cb(), timeout || TIMEOUT)
}