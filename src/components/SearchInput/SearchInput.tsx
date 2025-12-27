import { useArticlesContext } from '../../hooks/useArticlesContext';
import './SearchInput.scss';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = () => {
  const { search, setSearch } = useArticlesContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className="filter"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="search"
        className="visually-hidden"
      >
        Search articles
      </label>

      <div className="filter-input-wrapper">
        <SearchIcon className="filter-icon" />

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="The most successful IT companies in 2020"
          className="filter-input"
        />
      </div>
    </form>
  );
};
