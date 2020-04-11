import React, { Component } from 'react';
import ListItem from './ListItem';
// import './List.css';

class List extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	render () {
		const eleItems = this.props.items.map((item, index) => {
			return (
				<ListItem key={index} item={item} index={index} handleDeleteItem={this.props.handleDeleteItem} handleEdit={this.props.handleEdit} />
			);
		});
		// console.log(this.props.items);
		return (
			<div className="panel panel-success list-area">
				<div className="panel-heading">List Task</div>
				<table className="table table-hover ">
					<thead>
					<tr>
						<th style={{width: '10%'}} className="text-center">#</th>
						<th>Task</th>
						<th style={{width: '20%'}} className="text-center">Level</th>
						<th style={{width: '20%'}}>Action</th>
					</tr>
					</thead>
					<tbody>
						{eleItems}
					</tbody>
				</table>
			</div>
		);
	}
}

export default List;
