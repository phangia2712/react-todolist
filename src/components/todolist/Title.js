import React, { Component } from 'react';
// import './Title.css';

class Title extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	render () {
		return (
		<div className="page-header title-area">
			<h1>Project 01 - ToDo List <small>ReactJS</small></h1>
		</div>
		);
	}
}

export default Title;
