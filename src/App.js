import React, { Component } from 'react';
import ToDoList from './components/todolist/ToDoList';
// import './App.css';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	render () {
		return (
		<div className="App">
			<ToDoList />
		</div>
		);
	}
}

export default App;
