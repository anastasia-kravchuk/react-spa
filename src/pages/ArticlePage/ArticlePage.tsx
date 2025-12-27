import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../../hooks/useArticlesContext';
import './ArticlePage.scss';
import { ArticleContent } from './ArticleContent/ArticleContent';
import { BackButton } from '../../components/BackButton/BackButton';
import { Loader } from '../../components/Loader/Loader';

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { articles, isLoading } = useArticlesContext();

  if (isLoading) {
    return <Loader />;
  }

  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return <p className="article-not-found">Article not found</p>;
  }

  return (
    <section className="article-container">
      <div className="article-hero">
        <img
          src={article.image_url}
          alt="Article photo"
          className="article-hero-image"
        />
      </div>

      <div className="article-body-wrapper">
        <ArticleContent article={article} />

        <BackButton />
      </div>
    </section>
  );
};
