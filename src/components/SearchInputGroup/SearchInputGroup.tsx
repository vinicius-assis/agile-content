import { ISearchGroup } from "../../protocols/search-group";
import { CloseIcon, SearchIcon } from "../Icons/Icons";
import "./style.css";

interface ISearchInputGroup extends ISearchGroup {
  className?: string;
}

const SearchInputGroup = ({
  className = "",
  setSearchValue,
  searchValue,
}: ISearchInputGroup) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target?.value);
  };

  const handleClearInput = () => setSearchValue("");

  return (
    <div className={`input-group ${className}`}>
      <button disabled>
        <SearchIcon />
      </button>
      <input
        aria-label="Search contacts"
        type="search"
        value={searchValue}
        onChange={handleSearch}
      />
      <button className="clear-button" onClick={handleClearInput}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SearchInputGroup;
