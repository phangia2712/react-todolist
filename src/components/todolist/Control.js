import React, { Component } from 'react';
import ControlSearch from './ControlSearch';
import ControlSort from './ControlSort';
// import './Control.css';

class Control extends Component {
	constructor (props) {
		super(props);
		this.state = {};
		this.handleForm = this.handleForm.bind(this);
		// prop onClickSearchGo
	}
	handleForm () {
		this.props.onClickToggleForm();
	}
	showButton (statusForm) {
		// ko can khai bao ham nay trong constructor vi trong ham nay ko xai this
		let buttonEle = <button onClick={this.handleForm} type="button" className="btn btn-info btn-block">Add Task</button>;
		if(statusForm) {
			buttonEle = <button onClick={this.handleForm} type="button" className="btn btn-info btn-block">Close Task</button>
		}
		return buttonEle;
	}
	render () {

		return (
			<div className="row control-area">
				{/* SEARCH : START */}
				<ControlSearch onClickSearchGo={this.props.onClickSearchGo} />
				{/* SEARCH : END */}
				{/* SORT : START */}
				<ControlSort strOrder={this.props.strOrder} changeOrder={this.props.changeOrder} />
				{/* SORT : END */}
				{/* ADD : START */}
				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
					
					{this.showButton(this.props.isShowForm)}
				</div>
				{/* ADD : END */}
			</div>
		);
	}
}

export default Control;
