import { useEffect, useState } from "react";
import type { Article } from "../types/Article";
import { getArticles } from "../api/articlesApi";
import { ArticleContext } from "./ArticleContext";

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setIsLoading(true);
        setArticles(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, isLoading, error }} >
      {children}
    </ArticleContext.Provider>
  );
};