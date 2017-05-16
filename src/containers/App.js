/**
 * Created by Administrator on 2017/5/16.
 */

import React from 'react';

import List from './List';
import CartAccount from './CartAccount';

import CartHeader from '../components/CartHeader'

export default  App = () => {
    return (
        <div className="Cart">
            <div className="container">
                <header className="cart-header">
                    <strong>React</strong>Cart
                    <div className="text-muted">ECMAScript 6</div>
                </header>
                <div className="card container">
                    <div className="row">
                        <div className="">
                            <table className="table table-hover">
                                <CartHeader/>
                                <List
                                    items={this.state.items}
                                    removeItem={this.removeItem.bind(this)}
                                    changeQty={this.changeQty.bind(this)}
                                    handleSubTotal={this.handleSubTotal.bind(this)}/>
                                <CartAccount state={this.state}/>
                            </table>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="text-center">
                    <a className="text-muted" href="https://github.com/abudayah/reactCart">github</a>
                </div>
                <br/>
            </div>
        </div>
    );
}