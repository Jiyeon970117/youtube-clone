import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './components/video-list/video-list';

function App() {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD2zU-YWHwa2KRiWcRHep28nevAuz6FN7c", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));  
  }, [])

  return (
    <>
      <VideoList videos={videos}/>
    </>
  );
}

export default App;
