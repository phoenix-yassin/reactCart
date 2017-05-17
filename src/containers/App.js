/**
 * Created by Administrator on 2017/5/16.
 */

import React from 'react';

import ListContainer from './ListContainer';
import CartAccountContainer from './CartAccountContainer';

import CartHeader from '../components/CartHeader'

const App = () => {
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
                                <ListContainer/>
                                <CartAccountContainer/>
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

export default App;