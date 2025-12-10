import { useState } from "react";
import "./Comments.css";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([
    { id: 1, user: "User1", text: "Great video!", timestamp: "2 hours ago" },
    {
      id: 2,
      user: "User2",
      text: "Thanks for sharing!",
      timestamp: "1 hour ago",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: "You",
        text: newComment,
        timestamp: "Just now",
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          rows="3"
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.user}</strong>{" "}
            <span className="timestamp">{comment.timestamp}</span>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
