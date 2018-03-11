import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Switch from './components/switch';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = ''; // Enter API_KEY here

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      youtubeVideos: [],
      selectedVideo: null,
      listColor: 'list-group-item list-group-item-dark'
    };

    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('body').style.color = '#fff';

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

  viewModeChanged(mode) {
    if (mode) {
      document.querySelector('body').style.backgroundColor = '#fff';
      document.querySelector('body').style.color = '#333';
      this.setState({ listColor: 'list-group-item list-group-item-light' });
    } else {
      document.querySelector('body').style.backgroundColor = '#333';
      document.querySelector('body').style.color = '#fff';
      this.setState({ listColor: 'list-group-item list-group-item-dark' });
    }
  }

  render() {
    // call this function after every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <Switch onNightModeChanged={mode => this.viewModeChanged(mode)} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videosList={this.state.youtubeVideos}
          listColor={this.state.listColor}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
