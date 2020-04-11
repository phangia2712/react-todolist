import React, { Component } from 'react';
// import './Form.css';

class Form extends Component {
	constructor (props) {
		super(props);
		this.state = {
			task_id: '',
			task_name: '',
			task_level: 1
		};
		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleCancel () {
		this.props.handleCancel();
	}
	handleChange (event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
		[name]: value
		});
	}
	handleSubmit (event) {
		let items = {
			id: this.state.task_id,
			name: this.state.task_name,
			level: Number(this.state.task_level) // + la ep sang kieu number
		}
		this.props.handleAdd(items);
		console.log(this.state);
		event.preventDefault();
	}

	updateItem (item) {
		if (item != null) {
			this.setState({
				task_id: item.id,
				task_name: item.name,
				task_level: item.level
			});
		}
	}

	componentWillMount () {
		let {itemSelected} = this.props;
		console.log(itemSelected);
		this.updateItem(itemSelected);
		/* if (itemSelected != null) {
			this.setState({
				task_id: itemSelected.id,
				task_name: itemSelected.name,
				task_level: itemSelected.level
			});
		} */
	}

	componentWillReceiveProps (nextProps) {
		console.log("nextProps", nextProps);
		let itemSelected = nextProps.itemSelected
		this.updateItem(itemSelected);
		/* if (itemSelected != null) {
			this.setState({
				task_id: itemSelected.id,
				task_name: itemSelected.name,
				task_level: itemSelected.level
			});
		} */
		
	}

	render () {
		
		return (
			<div className="row form-area">
				<div className="col-md-offset-7 col-md-5">
					<form onSubmit={this.handleSubmit} className="form-inline">
					<div className="form-group">
						<label className="sr-only" htmlFor="true">label</label>
						<input name="task_name" value={this.state.task_name} onChange={this.handleChange} type="text" className="form-control" placeholder="Task Name" ref="task_name" />
					</div>
					<div className="form-group">
						<label className="sr-only" htmlFor="true">label</label>
						<select name="task_level" value={this.state.task_level} onChange={this.handleChange} className="form-control" required="required" ref="task_level">
						<option value={0}>Small</option>
						<option value={1}>Medium</option>
						<option value={2}>High</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
					<button type="button" onClick={this.handleCancel} className="btn btn-default">Cancel</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;
