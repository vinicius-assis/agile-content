import { useContext } from "react";
import { CloseIcon, SearchIcon } from "../Icons/Icons";
import "./style.css";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchInputGroup = ({ className = "" }) => {
  const { setInputSearch, inputSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event?.target?.value);
  };

  const handleClearInput = () => setInputSearch("");

  const handleSearchSubmit = (event: React.KeyboardEvent) => {
    if (event?.key === "Enter") {
      navigate(`/result?q=${inputSearch}`);
    }
  };

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
        onKeyDown={handleSearchSubmit}
      />
      <button className="clear-button" onClick={handleClearInput}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SearchInputGroup;
