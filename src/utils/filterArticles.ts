import type { Article } from "../types/Article";


export const filterArticles = (
  articles: Article[],
  search: string,
) => {
  if (!search) {
    return articles;
  }

  const keywords = search.toLowerCase().split(' ').filter(Boolean);

  return articles
    .map(article => {
      const titleText = article.title.toLowerCase();
      const summaryText = article.summary.toLowerCase();

      const titleMatches = keywords.filter(word => titleText.includes(word)).length;

      const summaryMatches = keywords.filter(word => summaryText.includes(word)).length;

      return {
        article,
        score: titleMatches * 2 + summaryMatches,
      }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.article)
}