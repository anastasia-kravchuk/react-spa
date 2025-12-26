import type { Article } from '../../types/Article';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import './ArticleList.scss';

type Props = {
  articles: Article[];
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  return (
    <section className="articles-container">
      <ul className="articles-grid">
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard
              article={article}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
