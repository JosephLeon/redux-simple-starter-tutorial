import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import file from './variables.js';

// Create a variables file modeled after the sample-variables.js file.
const API_KEY = file.api_key;

class App extends Component {
	constructor (props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'dragonball super'}, (videos) => {
			console.log(videos);
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render () {
		return (	
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				/>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));