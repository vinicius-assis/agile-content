import { Link } from "react-router-dom";
import SearchGroup from "../SearchGroup/SearchGroup";
import "./style.css";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const SearchForm = () => {
  const { inputSearch } = useContext(SearchContext);
  const handleSubmit = (event: React.FormEvent) => event?.preventDefault();

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <SearchGroup />
      <Link to={`/result?q=${inputSearch}`}>
        <button className="search-button">Buscar</button>
      </Link>
    </form>
  );
};

export default SearchForm;
