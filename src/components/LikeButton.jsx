import { useState } from "react";
import "./LikeButton.css";

const LikeButton = ({ videoId }) => {
  const [likes, setLikes] = useState(() => {
    const storedLikes = localStorage.getItem(`likes:${videoId}`);
    return storedLikes ? Number(storedLikes) : 0;
  });
  const [dislikes, setDislikes] = useState(() => {
    const storedDislikes = localStorage.getItem(`dislikes:${videoId}`);
    return storedDislikes ? Number(storedDislikes) : 0;
  });
  const [userAction, setUserAction] = useState(
    () => localStorage.getItem(`userAction:${videoId}`) || null,
  ); // 'like' or 'dislike'

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1);
      setUserAction(null);
      localStorage.setItem(`likes:${videoId}`, String(likes - 1));
      localStorage.setItem(`userAction:${videoId}`, "");
    } else {
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
        localStorage.setItem(`dislikes:${videoId}`, String(dislikes - 1));
      }
      setLikes(likes + 1);
      setUserAction("like");
      localStorage.setItem(`likes:${videoId}`, String(likes + 1));
      localStorage.setItem(`userAction:${videoId}`, "like");
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
      setUserAction(null);
      localStorage.setItem(`dislikes:${videoId}`, String(dislikes - 1));
      localStorage.setItem(`userAction:${videoId}`, "");
    } else {
      if (userAction === "like") {
        setLikes(likes - 1);
        localStorage.setItem(`likes:${videoId}`, String(likes - 1));
      }
      setDislikes(dislikes + 1);
      setUserAction("dislike");
      localStorage.setItem(`dislikes:${videoId}`, String(dislikes + 1));
      localStorage.setItem(`userAction:${videoId}`, "dislike");
    }
  };

  return (
    <div className="like-buttons">
      <button
        className={`like-btn ${userAction === "like" ? "active" : ""}`}
        onClick={handleLike}
      >
        👍 {likes}
      </button>
      <button
        className={`dislike-btn ${userAction === "dislike" ? "active" : ""}`}
        onClick={handleDislike}
      >
        👎 {dislikes}
      </button>
    </div>
  );
};

export default LikeButton;
