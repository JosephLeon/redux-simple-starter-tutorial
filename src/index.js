import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'PLACE_YOUR_API_KEY_HERE';

// Create a new component and this component should produce some html
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this components HTML and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));