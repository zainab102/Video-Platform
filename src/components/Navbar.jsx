import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="nav-icon">▶</span>
          VideoPlatform
        </Link>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/trending" className="nav-link">
            Trending
          </Link>
          <Link to="/search" className="nav-link">
            Search
          </Link>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
