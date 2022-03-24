import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search-header';
import VideoList from './components/video-list/video-list';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
    .Search(query)//
    .then(videos => setVideos(videos))
  }
  useEffect(() => {
    youtube
    .mostPopular()//
    .then(videos => setVideos(videos))
  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
