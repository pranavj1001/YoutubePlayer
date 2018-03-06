import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { youtubeVideos: [] };
    YTSearch({ key: API_KEY, term: 'pewdewpie' },
      youtubeVideos => this.setState({ youtubeVideos }));
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videosList={this.state.youtubeVideos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
