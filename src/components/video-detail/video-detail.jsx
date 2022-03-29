import React from 'react';
import styles from './video-detail.module.css'
const VideoDetail = ({video, video: {snippet}}) => (
  <section className={styles.detail}>
    <iframe  
      type="text/html" 
      width="100%" 
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullScreen
      >
    </iframe>
    <h2>{snippet.title}</h2>
    <h2>{snippet.chamelTitle}</h2>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;