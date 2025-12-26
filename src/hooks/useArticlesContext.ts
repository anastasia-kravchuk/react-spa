import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

export const useArticlesContext = () => {
  const context = useContext(ArticleContext);

  if (!context) {
    throw new Error(
      'useArticlesContext must be used within ArticlesProvider'
    );
  }

  return context;
}