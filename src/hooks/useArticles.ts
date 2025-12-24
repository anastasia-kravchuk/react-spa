import { useEffect, useState } from "react";
import type { Article } from "../types/Article";
import { getArticles } from "../api/articlesApi";

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    getArticles()
    .then((data) => {
      setIsLoading(true);
      setArticles(data)
    })
    .catch(error => setErrorMessage(error.message))
    .finally(() => setIsLoading(false));
  }, [])

  return { articles, isLoading, errorMessage };
}