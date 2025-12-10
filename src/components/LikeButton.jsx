import { useState } from "react";
import "./LikeButton.css";

const LikeButton = ({ videoId }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userAction, setUserAction] = useState(null); // 'like' or 'dislike'

  const handleLike = () => {
    if (userAction === "like") {
      setLikes(likes - 1);
      setUserAction(null);
    } else {
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setUserAction("like");
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setDislikes(dislikes - 1);
      setUserAction(null);
    } else {
      if (userAction === "like") {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setUserAction("dislike");
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
