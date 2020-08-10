import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube.js'
import { SearchBar, VideoDetail, VideoList } from './components'
 // import SearchBar from './components/SearchBar'
 // import VideoDetail from './components/VideoDetail'



class App extends React.Component{
  state={
    videos:[],
    selectedVideo:null
  }
  handleSubmit=async (searchTerm)=>{
const response=await youtube.get('search',{
  params:{
    part:'snippet',
    maxResults:5,
    key:'AIzaSyDHw1kEkuo9_X4IcRKER87VG5m6cRGwcqg',
    q:searchTerm
  }
});

this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
  };
  componentDidMount(){
    this.handleSubmit('Test');
  }
  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video});
  };
  render(){
    const {selectedVideo,videos}=this.state;

    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
               <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

export default App;
