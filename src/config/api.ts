const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const API_ENDPOINTS = {
  UPLOAD: `${API_BASE_URL}/api/upload`,
  STATS: `${API_BASE_URL}/api/stats`,
  DOWNLOAD: (filename: string) => `${API_BASE_URL}/downloads/${filename}`,
};
