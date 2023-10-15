import { GoogleIcon } from "../Icons/Icons";
import SearchInputGroup from "../SearchInputGroup/SearchInputGroup";
import "./style.css";

const SearchGroup = () => {
  return (
    <section className="search-group">
      <GoogleIcon />
      <SearchInputGroup />
    </section>
  );
};

export default SearchGroup;
