import { useContext } from "react";
import { CloseIcon, SearchIcon } from "../Icons/Icons";
import "./style.css";
import { SearchContext } from "../../context/SearchContext";

const SearchInputGroup = ({ className = "" }) => {
  const { setInputSearch, inputSearch } = useContext(SearchContext);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event?.target?.value);
  };

  const handleClearInput = () => setInputSearch("");

  return (
    <div className={`input-group ${className}`}>
      <button disabled>
        <SearchIcon />
      </button>
      <input
        aria-label="Search contacts"
        type="search"
        value={inputSearch}
        onChange={handleSearch}
      />
      <button className="clear-button" onClick={handleClearInput}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SearchInputGroup;
