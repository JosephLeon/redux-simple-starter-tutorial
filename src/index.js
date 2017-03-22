import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import file from './variables.js';

// Rename the sample-variables.js to variables.js and place any variables you do
// not want pushed to the repo there.
const API_KEY = file.api_key;

class App extends Component {
	constructor (props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Dragon Ball Super');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
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
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
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