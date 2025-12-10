import { useState } from "react";
import { Link } from "react-router-dom";
import videos from "../data/videos.json";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState("relevance");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    let filtered = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        ) ||
        video.description.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase())
    );

    // Sort results
    if (sortBy === "views") {
      filtered = filtered.sort((a, b) => b.views - a.views);
    } else if (sortBy === "date") {
      // Assuming newer videos have higher IDs for simplicity
      filtered = filtered.sort((a, b) => b.id - a.id);
    }

    setResults(filtered);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="views">Views</option>
          <option value="date">Date</option>
        </select>
      </form>
      <div className="results">
        {results.map((video) => (
          <Link key={video.id} to={`/watch/${video.id}`} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>
              {video.views.toLocaleString()} views • {video.duration}
            </p>
            <p>{video.tags.join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
