import React, { Component } from 'react';

export default class CartAccount extends Component {
	constructor(props){
		super(props);
	}

	render(){
	  return (
			<tfoot>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<h5>Subtotal:</h5></td>
				<td className="text-right">
					<h5><strong>${this.props.state.subTotal.toFixed(2)}</strong></h5></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<h5>Tax</h5></td>
				<td className="text-right">
					<h5><strong>10%</strong></h5></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<h3>Total</h3></td>
				<td className="text-right">
					<h3><strong>${this.props.state.grandTotal.toFixed(2)}</strong></h3></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>
					<button disabled type="button" className="btn btn-default">
						<span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
					</button></td>
				<td>
					<button disabled type="button" className="btn btn-success">
						Checkout <span className="glyphicon glyphicon-play"></span>
					</button></td>
			</tr>
			</tfoot>
	  );
	}
}