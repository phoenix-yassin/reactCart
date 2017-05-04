import React, { Component } from 'react';
import Item from './Item';


export default class List extends Component {
	renderItems() {
		const props = Object.assign({}, this.props, {items:undefined});
		const abc = this.props
		
		return this.props.items.map( (item, index) => <Item key={index} {...item} {...props} />);
	}	
	
	render(){
	  return (
	    <tbody>
				{this.renderItems()}
	    </tbody>
	  );
	}
}