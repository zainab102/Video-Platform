import videos from '../data/videos.json';

// Simple recommendation based on views (trending) and tags
export const getTrendingVideos = () => {
  return videos.sort((a, b) => b.views - a.views);
};

export const getRecommendedVideos = (currentVideoId, userHistory = []) => {
  const currentVideo = videos.find(v => v.id === currentVideoId);
  if (!currentVideo) return getTrendingVideos().slice(0, 5);

  // Recommend based on tags and exclude current video
  const related = videos.filter(v => v.id !== currentVideoId && v.tags.some(tag => currentVideo.tags.includes(tag)));
  const trending = getTrendingVideos().filter(v => v.id !== currentVideoId);

  // Combine related and trending, limit to 5
  const combined = [...related, ...trending].slice(0, 5);
  return combined;
};

// For user-based recommendations (using Firebase history)
export const getUserRecommendations = async (userId, db) => {
  // Placeholder: In real app, fetch user history from Firebase
  // For now, return trending
  return getTrendingVideos().slice(0, 10);
};
