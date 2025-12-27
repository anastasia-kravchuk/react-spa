import { ArticleList } from '../../components/ArticleList/ArticleList';
import { Loader } from '../../components/Loader/Loader';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { useArticlesContext } from '../../hooks/useArticlesContext';
import { useDebounce } from '../../hooks/useDebounce';
import { filterArticles } from '../../utils/filterArticles';
import './HomePage.scss';
export const HomePage = () => {
  const { articles, isLoading, search } = useArticlesContext();

  const debouncedSearch = useDebounce(search, 400);

  const filteredArticles = filterArticles(articles, debouncedSearch)

  return (
    <main className="home-page">
      <section className="filter-section">
        <h2 className="filter-section-header">Filter by keywords</h2>

        <SearchInput />
      </section>

      <section className="result-section">
        <p className="result-count">Results: {filteredArticles.length}</p>
        <hr />
      </section>

      <section className="articles-section">
        {(isLoading || search !== debouncedSearch) ?
          <div className="articles-loader">
            <Loader />
          </div>
        : <ArticleList articles={filteredArticles} />}
      </section>
    </main>
  );
};
