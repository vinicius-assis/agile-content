import { useState } from "react";
import { CloseIcon, SearchIcon } from "../Icons/Icons";
import "./style.css";

const SearchInputGroup = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target?.value);
  };

  const handleClearInput = () => setSearchValue("");

  return (
    <div className="input-group">
      <button>
        <SearchIcon />
      </button>
      <input type="text" value={searchValue} onChange={handleSearch} />
      <button className="clear-button" onClick={handleClearInput}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SearchInputGroup;
