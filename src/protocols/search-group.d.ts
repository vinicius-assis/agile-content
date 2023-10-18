import { Dispatch } from "react";

interface ISearchGroup {
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue?: string;
}
