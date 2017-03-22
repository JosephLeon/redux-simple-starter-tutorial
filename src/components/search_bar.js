import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="col-md-8 search-bar">
				<h1>Youtube video search</h1>
				Search: <input 
					value={this.state.term} 
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

export default SearchBar;