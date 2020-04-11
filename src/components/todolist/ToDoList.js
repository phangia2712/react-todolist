import React, { Component } from 'react';
import Title from './Title';
import Control from './Control';
import Form from './Form';
import List from './List';
// import tasks from '../../mocks/tasks';
import lodash from 'lodash';
// import $ from 'jquery';
// import {filter, includes} from 'lodash';
// import './ToDoList.css';

const uuidv4 = require('uuid/v4');

class ToDoList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			// items: tasks,
			items: [],
			isShowForm: false,
			strSearch: '',
			orderBy: 'name',
			orderDir: 'asc',
			itemSelected: null
		};
		this.toggleForm = this.toggleForm.bind(this);
		this.showFormEle = this.showFormEle.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.onClickSearchGo = this.onClickSearchGo.bind(this);
		this.changeOrder = this.changeOrder.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	toggleForm () {
		this.setState({
			isShowForm: !this.state.isShowForm,
			itemSelected: null
		});
	}

	handleCancel () {
		this.setState({
			isShowForm: false
		});
	}

	showFormEle () {
		let FormEle = null;
		// if true
		if (this.state.isShowForm) {
			FormEle = <Form itemSelected={this.state.itemSelected} handleCancel={this.handleCancel} handleAdd={this.handleAdd} />
		}
		return FormEle
	}

	onClickSearchGo (value) {
		this.setState({
			strSearch: value
		});
	}

	changeOrder (orderBy, orderDir) {
		this.setState({
			orderBy: orderBy,
			orderDir: orderDir
		});
	}

	handleDeleteItem (id) {
		let {items} = this.state;
		let result = window.confirm("Ban co chac muon delete?");
		if (result) {
			lodash.remove(items, item => {
				return item.id === id;
			});
			this.setState({
				items: this.state.items
			});
		}

		localStorage.setItem("tasks", JSON.stringify(items));
	}

	handleAdd (item) {
		let {items} = this.state;
		let myId = null;
		console.log(item);
		if (item.name === '') {
			alert('Vui long nhap ten cong viec');
		} else {
			if (item.id === '') { // neu thuoc truong hop add
				myId =  uuidv4();

			} else { // nguoc lai la truong hop edit
				items = lodash.reject(items, { id: item.id });
				myId = item.id;
			}

			items.push({ 
				id: myId, 
				name: item.name, 
				level: item.level 
			});
			
			this.setState({
				items: items,
				isShowForm: false
			});
		}
		localStorage.setItem("tasks", JSON.stringify(items));
	}
	handleEdit (item) {
		console.log(item);
		this.setState({
			itemSelected: item,
			isShowForm: true
		});
	}

	componentWillMount () {
		let itemsMe = JSON.parse(localStorage.getItem("tasks")) || []; // neu co gia tri trong localStorage thi tra ve, con neu khong co thi tra ve mang rong~
		this.setState({
			items: itemsMe
		});
	}

	render () {
		// console.log(this.state.items);
		// let itemsOrigin = (this.state.items !== null) ? [...this.state.items] : [];
		// cach viet gon hon ben duoi ne:
		let itemsOrigin = [...this.state.items] || [];
		let items = [];
		let {isShowForm, strSearch, orderBy, orderDir} = this.state;
		// console.log(orderBy + " - " + orderDir);
		let strOrder = orderBy + " - " + orderDir;
		// let isShowForm = this.state.isShowForm;
		// let search = this.state.strSearch.toLowerCase();

		/* let search = this.state.strSearch.toLowerCase();
		if (search.length > 0) {
			itemsOrigin.forEach((item) => {
				if (item.name.toLowerCase().indexOf(search) !== -1) {
					items.push(item);
				}
			});
		} else {
			items = itemsOrigin;
		} */

		// SEARCH
		if (strSearch.length > 0) {
			items = lodash.filter(itemsOrigin, function(o) { 
				return (lodash.includes(o.name.toLowerCase(), strSearch.toLowerCase())); 
			});
		} else {
			items = itemsOrigin;
		}

		// SORT
		items = lodash.orderBy(items, [orderBy], [orderDir]);

		
		return (
			<div className="container">
				{/* TITLE : START */}
				<Title />
				{/* TITLE : END */}
				{/* CONTROL (SEARCH + SORT + ADD) : START */}
				<Control onClickToggleForm={this.toggleForm} isShowForm={isShowForm} onClickSearchGo={this.onClickSearchGo} strOrder={strOrder} changeOrder={this.changeOrder} />
				{/* CONTROL (SEARCH + SORT + ADD) : END */}
				{/* FORM : START */}
				{this.showFormEle()}
				{/* FORM : END */}
				{/* LIST : START */}
				<List items={items} handleDeleteItem={this.handleDeleteItem} handleEdit={this.handleEdit} />
				{/* LIST : END */}
			</div>
		);
	}
}

export default ToDoList;
