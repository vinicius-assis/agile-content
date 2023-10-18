import { ISearchGroup } from "../../protocols/search-group";
import { GoogleIcon } from "../Icons/Icons";
import SearchInputGroup from "../SearchInputGroup/SearchInputGroup";

const SearchGroup = ({ setSearchValue, searchValue }: ISearchGroup) => {
  return (
    <section className="search-group">
      <GoogleIcon />
      <SearchInputGroup
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
    </section>
  );
};

export default SearchGroup;
