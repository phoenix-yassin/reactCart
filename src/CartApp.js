import React, { Component } from 'react';
import List from './components/CartList';
import CartAccount from './components/CartAccount'
import CartHeader from './components/CartHeader'
import items from './data/items';


export default class CartApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: items,
			qtyTotal: 0,
			priceTotal: 0,
			subTotal: 0,
			tax: 0.10,
			grandTotal: 0
    };
	}
	
	componentDidMount(){
		this.handleSubTotal();
	}
	
	changeQty(itemId,qty) {
    let item = this.state.items.find( item => item.id === itemId );
		item.quantity = qty;
		this.setState({ qtyTotal: this.state.qtyTotal + item.quantity });
		this.setState({ priceTotal: this.state.priceTotal + item.price });
		
		this.handleSubTotal();
	}		
	
	removeItem(itemId) {
		var items = this.state.items.filter( item => item.id !== itemId )
		this.setState({ items: items });		
		this.handleSubTotal();
	}
	
	handleSubTotal = (itemTotal = 0) => {
    itemTotal = this.state.items.reduce( (itemTotal, item) => itemTotal += item.price * item.quantity , 0);

		this.setState({ subTotal: itemTotal });
		this.handleGrandTotal(itemTotal);
	}
	
	handleGrandTotal(subTotal) {
		this.setState({grandTotal: ( this.state.tax * subTotal ) + subTotal });
	}

  render() {
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
										handleSubTotal={this.handleSubTotal.bind(this)}
									/>
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
					<br/>
	      </div>
      </div>

    );
  }
}

