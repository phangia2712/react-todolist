import React, { Component } from 'react';
// import './ControlSort.css';

class ControlSort extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	changeOrder (orderBy, orderDir) {
		console.log(orderBy + '?' + orderDir);
		this.props.changeOrder(orderBy, orderDir);
	}
	render () {
		let hrefLink = '#';
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="dropdown">
				<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					Sort by <span className="caret" />
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li><a href={hrefLink} role="button" onClick={() => this.changeOrder('name', 'asc')}>Name ASC</a></li>
					<li><a href={hrefLink} role="button" onClick={() => this.changeOrder('name', 'desc')}>Name DESC</a></li>
					<li role="separator" className="divider" />
					<li><a href={hrefLink} role="button" onClick={() => this.changeOrder('level', 'asc')}>Level ASC</a></li>
					<li><a href={hrefLink} role="button" onClick={() => this.changeOrder('level', 'desc')}>Level DESC</a></li>
				</ul>
				<span className="label label-success label-medium">{this.props.strOrder}</span>
				</div>
			</div>
		);
	}
}

export default ControlSort;
