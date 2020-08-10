import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './videoItem'

const VideoList = ({videos,onVideoSelect})=>{
  const listOfVideos=videos.map((video,id)=>{
    return <VideoItem key={id}  video={video} onVideoSelect={onVideoSelect}></VideoItem>
  })
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}
export default VideoList;
