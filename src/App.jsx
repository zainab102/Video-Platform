import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import WatchPage from "./components/WatchPage";
import Trending from "./components/Trending";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h1>Video Platform</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/search">Search</Link>
            <DarkModeToggle />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<WatchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
