import './SearchInput.scss';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = () => {
  return (
    <form className="filter">
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
          placeholder="The most successful IT companies in 2020"
          className="filter-input"
        />
      </div>
    </form>
  );
};
