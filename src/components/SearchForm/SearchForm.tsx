import SearchGroup from "../SearchGroup/SearchGroup";
import "./style.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <SearchGroup />
      <button className="search-button" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
