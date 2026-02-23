import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import videos from "../data/videos.json";
import "./Home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const trendingVideos = useMemo(
    () => [...videos].sort((a, b) => b.views - a.views).slice(0, 10),
    [],
  );

  const categories = useMemo(() => {
    const allTags = videos.flatMap((video) => video.tags);
    return [...new Set(allTags)];
  }, []);

  const filteredVideos =
    selectedCategory === "all"
      ? trendingVideos
      : trendingVideos.filter((video) => video.tags.includes(selectedCategory));

  return (
    <div className="home">
      <h1>Trending Videos</h1>
      <div className="category-filter">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="video-grid">
        {filteredVideos.map((video) => (
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

export default Home;
