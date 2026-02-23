import { useState } from "react";
import "./SubscribeButton.css";

const SubscribeButton = ({ channel }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(1000000); // Mock subscriber count

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    setSubscriberCount((prev) => (isSubscribed ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleSubscribe}
      className={`subscribe-btn ${isSubscribed ? "subscribed" : ""}`}
    >
      {isSubscribed ? "Subscribed" : "Subscribe"}
      <span className="channel-name"> • {channel}</span>
      <span className="subscriber-count">
        {subscriberCount.toLocaleString()} subscribers
      </span>
    </button>
  );
};

export default SubscribeButton;
