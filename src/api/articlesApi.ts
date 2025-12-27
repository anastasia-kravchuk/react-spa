const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles';

export const getArticles = async (limit = 40) => {
  const response = await fetch(`${API_URL}?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await response.json();
  return data.results;
}