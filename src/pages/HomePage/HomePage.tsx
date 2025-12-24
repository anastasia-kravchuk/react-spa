import { ArticleList } from "../../components/ArticleList/ArticleList";
import { useArticles } from "../../hooks/useArticles";

export const HomePage = () => {
  const { articles, isLoading, errorMessage } = useArticles();

  return <ArticleList articles={articles} />
}