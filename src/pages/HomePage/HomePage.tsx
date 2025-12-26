import { ArticleList } from '../../components/ArticleList/ArticleList';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { useArticles } from '../../hooks/useArticles';
import './HomePage.scss';
export const HomePage = () => {
  const { articles } = useArticles();

  return (
    <main className="home-page">
      <section className="filter-section">
        <h2 className='filter-section-header'>Filter by keywords</h2>

        <SearchInput />
      </section>

      <section className="result-section">
        <p className="result-count">Results: {articles.length}</p>
        <hr />
      </section>

      <section className="articles-section">
        <ArticleList articles={articles} />
      </section>
    </main>
  );
};
