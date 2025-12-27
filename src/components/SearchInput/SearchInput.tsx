import { useRef } from 'react';
import { useArticlesContext } from '../../hooks/useArticlesContext';
import './SearchInput.scss';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export const SearchInput = () => {
  const { search, setSearch } = useArticlesContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    inputRef.current?.blur();
  };

  const handleClear = () => {
    setSearch('');
    inputRef.current?.focus();
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
          ref={inputRef}
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="The most successful IT companies in 2020"
          className="filter-input"
        />
        {search && (
          <button
            type="button"
            className="filter-clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <ClearIcon fontSize="small" />
          </button>
        )}
      </div>
    </form>
  );
};
