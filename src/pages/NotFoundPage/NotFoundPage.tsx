import './NotFoundPage.scss';
import { BackButton } from '../../components/BackButton/BackButton';

export const NotFoundPage = () => {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page not found</h2>

        <p className="not-found-text">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <BackButton />
      </div>
    </main>
  );
};
