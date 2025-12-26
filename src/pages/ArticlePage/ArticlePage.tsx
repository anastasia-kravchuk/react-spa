import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../../hooks/useArticlesContext';

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { articles, isLoading } = useArticlesContext();

  if (isLoading) {
    return <p> Loading..</p>;
  }

  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <section className="article-hero">
      <img
        src={article.image_url}
        alt="Article photo"
        className="article-hero-image"
      />

      <div className="article-hero-overlay">
        <h1 className="article-title">{article.title}</h1>

        <div className="article-content">
          <p>{article.summary}</p>
        </div>
      </div>
    </section>
  );
};
