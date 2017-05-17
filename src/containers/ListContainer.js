/**
 * Created by Administrator on 2017/5/16.
 */
import React from "react";
import {connect} from "react-redux";

import CartList from "../components/CartList";
import Item from "../components/Item";
import {getVisibleItems} from "../reducers/items";
import {modifyCart} from "../actions";

const ListContainer = ({ items, modifyCart }) => {
    return (
        <CartList>
        { items.map( item =>
            <Item key={item.id} item={item} modifyItem={
                (qty)=> modifyCart(item.id,qty) } />
          )}
        </CartList>
    );
}

const mapStateToProps = state => {
    return {
        items: getVisibleItems(state.items)
    }
}

export default connect(
    mapStateToProps,
    {modifyCart}
)(ListContainer);