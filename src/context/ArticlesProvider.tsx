import { useEffect, useState } from 'react';
import type { Article } from '../types/Article';
import { getArticles } from '../api/articlesApi';
import { ArticleContext } from './ArticleContext';

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ArticleContext.Provider
      value={{ articles, isLoading, error, search, setSearch }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
