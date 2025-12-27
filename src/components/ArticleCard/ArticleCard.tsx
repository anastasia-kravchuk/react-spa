import type { Article } from '../../types/Article';
import './ArticleCard.scss';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { truncateText } from '../../utils/truncateText';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { highlightText } from '../../utils/highlightText';
import { useArticlesContext } from '../../hooks/useArticlesContext';

type Props = {
  article: Article;
};

export const ArticleCard: React.FC<Props> = ({ article }) => {
  const { search } = useArticlesContext();

  const truncatedSummary = truncateText(article.summary, 100);
  return (
    <article className="card">
      <div className="card-image">
        <img
          src={article.image_url}
          className="card-image__img"
          alt="Article photo"
        />
      </div>

      <div className="card-content">
        <div className="card-date">
          <CalendarTodayIcon sx={{ fontSize: 14 }} />
          <p>{formatDate(article.published_at)}</p>
        </div>

        <h2 className="card-title">{highlightText(article.title, search)}</h2>

        <div className="card-summary">
          {highlightText(truncatedSummary, search)}
        </div>
        <div className="card-button">
          <Link
            to={`/article/${article.id}`}
            className="button-read-more"
          >
            Read more
            <ArrowForwardIcon sx={{ fontWeight: 200 }} />
          </Link>
        </div>
      </div>
    </article>
  );
};
