import { createContext } from 'react';
import type { Article } from '../types/Article';

type ArticleContextType = {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
};

export const ArticleContext = createContext<ArticleContextType | undefined>(undefined);


