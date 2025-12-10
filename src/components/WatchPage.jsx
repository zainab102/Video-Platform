import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getRecommendedVideos } from "../utils/recommendations";
import videos from "../data/videos.json";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import SubscribeButton from "./SubscribeButton";
import Comments from "./Comments";
import "./WatchPage.css";

const WatchPage = () => {
  const { id } = useParams();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const currentVideo = videos.find((v) => v.id === parseInt(id));
  const recommended = getRecommendedVideos(parseInt(id));

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (!currentVideo) return <div>Loading...</div>;

  return (
    <div className="watch-page">
      <div className={`main-video ${isFullScreen ? "fullscreen" : ""}`}>
        <div className="video-container">
          <iframe
            width="100%"
            height={isFullScreen ? "100vh" : "400"}
            src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={toggleFullScreen} className="fullscreen-btn">
            {isFullScreen ? "Exit Full Screen" : "Full Screen"}
          </button>
        </div>
        <h2>{currentVideo.title}</h2>
        <div className="video-meta">
          <p>
            {currentVideo.channel} • {currentVideo.views.toLocaleString()} views
            • {currentVideo.duration}
          </p>
          <SubscribeButton channel={currentVideo.channel} />
        </div>
        <div className="video-actions">
          <LikeButton videoId={currentVideo.id} />
          <ShareButton videoId={currentVideo.id} title={currentVideo.title} />
        </div>
        <p>{currentVideo.description}</p>
        <Comments videoId={currentVideo.id} />
      </div>
      <div className="sidebar">
        <h3>Recommended Videos</h3>
        {recommended.map((rec) => (
          <Link key={rec.id} to={`/watch/${rec.id}`} className="rec-video">
            <img src={rec.thumbnail} alt={rec.title} />
            <div>
              <h4>{rec.title}</h4>
              <p>{rec.views.toLocaleString()} views</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
