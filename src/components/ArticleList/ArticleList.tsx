import type { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import './ArticleList.scss';

type Props = {
  articles: Article[];
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="articles-grid">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};
