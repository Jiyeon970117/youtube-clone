import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search-header';
import VideoDetail from './components/video-detail/video-detail';
import VideoList from './components/video-list/video-list';

function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback((query) => {
    youtube
    .Search(query)//
    .then(videos => {
      setVideos(videos)
      setSelectedVideo(null)
    })
  }, [youtube]);
  useEffect(() => {
    youtube
    .mostPopular()//
    .then(videos => setVideos(videos))
  }, [youtube])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {
          selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video ={selectedVideo} />
          </div>
          )         
        }
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
