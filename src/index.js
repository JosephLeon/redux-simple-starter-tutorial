import React from 'react';
import ReactDom from 'react-dom';

// Create a new component and this component should produce some html
const App = () => {
	return <div>Hi!</div>;
}

// Take this components HTML and put it on the page
ReactDom.render(<App />, document.querySelector('.container'));