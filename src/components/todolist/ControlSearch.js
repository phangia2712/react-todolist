import React, { Component } from 'react';
// import './ControlSearch.css';

class ControlSearch extends Component {
	constructor (props) {
		super(props);
		this.state = {
			strSearch: ''
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearchEnter = this.handleSearchEnter.bind(this);
		
		// prop onClickSearchGo
	}
	handleSearch () {
		this.props.onClickSearchGo(this.state.strSearch);
		// console.log(this.state.strSearch);
		// this.setState({strSearch: 'abc'});
	}
	handleSearchEnter (e) {
		if (e.key === 'Enter') {
			// Trigger the button element with a click
			this.props.onClickSearchGo(this.state.strSearch);
		  }
	}
	handleClear () {
		this.setState({strSearch: ''});
		this.props.onClickSearchGo('');
		this.refs.inputSearch.focus();
	}
	handleChange (e) {
		this.setState({strSearch: e.target.value});
	  }
	render () {
		return (
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<div className="input-group">
				<input type="text" value={this.state.strSearch} onChange={this.handleChange} ref="inputSearch" onKeyPress={this.handleSearchEnter} className="form-control" placeholder="Search for..." />
				<span className="input-group-btn">
					<button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
					<button onClick={this.handleClear} className="btn btn-warning" type="button">Clear!</button>
				</span>
				</div>
			</div>
		);
	}
}

export default ControlSearch;
