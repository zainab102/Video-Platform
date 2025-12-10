import { useState } from "react";
import "./ShareButton.css";

const ShareButton = ({ videoId, title }) => {
  const [showShare, setShowShare] = useState(false);

  const shareUrl = `${window.location.origin}/watch/${videoId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  const shareToSocial = (platform) => {
    const text = `Check out this video: ${title}`;
    let url = "";

    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(
          text + " " + shareUrl
        )}`;
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="share-container">
      <button onClick={() => setShowShare(!showShare)} className="share-btn">
        Share
      </button>
      {showShare && (
        <div className="share-options">
          <button onClick={copyToClipboard} className="share-option">
            Copy Link
          </button>
          <button
            onClick={() => shareToSocial("twitter")}
            className="share-option"
          >
            Twitter
          </button>
          <button
            onClick={() => shareToSocial("facebook")}
            className="share-option"
          >
            Facebook
          </button>
          <button
            onClick={() => shareToSocial("whatsapp")}
            className="share-option"
          >
            WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
