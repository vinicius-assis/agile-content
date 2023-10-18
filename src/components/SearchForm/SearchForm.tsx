import { Link } from "react-router-dom";
import SearchGroup from "../SearchGroup/SearchGroup";
import "./style.css";
import { useState } from "react";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => event?.preventDefault();

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <SearchGroup setSearchValue={setSearchValue} searchValue={searchValue} />
      <Link to={`/result?q=${searchValue}`}>
        <button className="search-button">Buscar</button>
      </Link>
    </form>
  );
};

export default SearchForm;
