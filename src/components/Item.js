import React, { Component } from 'react';
import img80 from '../images/img-80.png';

export default class Item extends Component {
	constructor(props) {
		super(props);
			this.state = {
				itemTotal: 0,
		};
    this.handleChange = this.handleChange.bind(this);
	}
	
	getInitialState(){
		this.setState({ itemTotal: this.props.quantity * this.props.price });
	}
	
	componentWillUnmount(){
		this.props.handleSubTotal();
	}
	
	handleChange(e){
	  debugger;
		this.props.modifyItem({id:this.props.item.id, qty: e.target.value});
	}

	render(){
        const itemVal = this.props.item;
	  return (
			<tr>
				<td className="col-sm-8 col-md-6">
					<div className="media">
						<a className="thumbnail pull-left" href="#"> 
							<img src={img80} alt="item" />
						</a>
						<div className="media-body">
							<h5 className="media-heading"><a href="#">{itemVal.name}</a></h5>
							<p className="media-heading"> by <a href="#">{itemVal.brand}</a></p>
						</div>
					</div>
				</td>
				<td className="col-sm-1 col-md-1">
					<input type="number" className="form-control" min="1" max={itemVal.limit}  value={itemVal.quantity} onChange={
					  this.handleChange
            //console.log('quantity: ' + e.target.value);
					}/>
				</td>
				<td className="col-sm-1 col-md-1 text-center">
					<strong className="itemPrice">{}</strong>
				</td>
				<td className="col-sm-1 col-md-1 text-center">
					<strong className="itemTotal"></strong>
				</td>
				<td className="col-sm-1 col-md-1">
					<button type="button" className="btn btn-danger" onClick={()=>{}}>
							<span className="glyphicon glyphicon-remove"></span> Remove
					</button>	
				</td>
			</tr>
	  );
	}	
}