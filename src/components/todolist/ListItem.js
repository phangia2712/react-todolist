import React, { Component } from 'react';
// import './ListItem.css';

class ListItem extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	showLevelEle (value) {
		let levelEle = <span className="label label-danger">High</span>;
		if (value === 0) {
			levelEle = <span className="label label-default">Small</span>;
		} else if (value === 1) {
			levelEle = <span className="label label-info">Medium</span>;
		}
		return levelEle;
	}
	handleDelete (id) {
		this.props.handleDeleteItem(id);
	}
	handleEdit (item) {
		console.log(item);
		this.props.handleEdit(item);
	}
	componentDidMount () {
		
	}
	render () {
		let {item} = this.props;
		let {index} = this.props;
		// let index = this.props.index
		// console.log(index);

		return (
			<tr className="list-item">
				<td className="text-center">{index + 1}</td>
				<td>{item.name}</td>
				<td className="text-center">{this.showLevelEle(item.level)}</td>
				<td>
				<button type="button" onClick={() => this.handleEdit(item)} className="btn btn-warning">Edit</button>
				<button type="button" className="btn btn-danger" onClick={() => this.handleDelete(item.id)}>Delete</button>

{/* 					<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">Confirm Delete</h4>
						</div>
						<div className="modal-body">
							Do you want to delete this????
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" onClick={() => this.handleDelete(item.id)}>Delete</button>
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
						</div>
					</div>
					</div> */}
				</td>
			</tr>
		);
	}
}

export default ListItem;
