import type { Article } from '../../types/Article';
import './ArticleCard.scss';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { truncateText } from '../../utils/truncateText';

type Props = {
  article: Article;
};

export const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <div className="card">
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
          <p>{article.publishedAt} June 29th, 2021</p>
        </div>

        <h2 className="card-title">{article.title}</h2>

        <div className="card-summary">{truncateText(article.summary, 100)}</div>
        <div className="card-button">
          <a
            href="#"
            className="button-read-more"
          >
            Read more
            <ArrowForwardIcon sx={{ fontWeight: 200 }} />
          </a>
        </div>
      </div>
    </div>
  );
};
