import { Link, useParams } from 'react-router-dom';
import { useArticlesContext } from '../../hooks/useArticlesContext';
import './ArticlePage.scss';
import { ArticleContent } from './ArticleContent/ArticleContent';
import { ArrowBack } from '@mui/icons-material';

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

        <div className="article-footer">
          <Link
            to="/"
            className="article-button-back"
          >
            <ArrowBack className='article-button-arrow' />
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
