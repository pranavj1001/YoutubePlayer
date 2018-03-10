import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      youtubeVideos: [],
      selectedVideo: null
    };

    this.videoSearch('youtube');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term },
      (youtubeVideos) => {
        this.setState({
          youtubeVideos,
          selectedVideo: youtubeVideos[0]
        });
      });
  }

  render() {
    // call this function after every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videosList={this.state.youtubeVideos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
