import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    //when the app first loads is gonna make a search for LIONS and show it on the screen
    componentDidMount() {
        this.onTermSubmit('Lions');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({ 
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
    };
        // object fecthed from the YouTube API
    onVideoSelect= (video) => {
        this.setState({ selectedVideo: video});
    };

    render() {
        return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row"> 
             <div className="eleven wide column">
             <VideoDetail video={this.state.selectedVideo} />
             </div>
             <div className="five wide column">
              <VideoList 
               onVideoSelect={this.onVideoSelect} 
               videos={ this.state.videos} 
              />
             </div>
            </div>
          </div> 
        </div>
        );
    }
}


export default App;