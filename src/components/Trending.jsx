import { Link } from "react-router-dom";
import videos from "../data/videos.json";
import "./Home.css";

const Trending = () => {
  // Sort videos by views for trending
  const trendingVideos = [...videos].sort((a, b) => b.views - a.views);

  return (
    <div className="home">
      <h1>Trending Videos</h1>
      <div className="video-grid">
        {trendingVideos.map((video) => (
          <Link key={video.id} to={`/watch/${video.id}`} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <p>
                {video.views.toLocaleString()} views • {video.duration}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
