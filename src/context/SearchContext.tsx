import { createContext, useState } from "react";

const DEFAULT_VALUE = {
  inputSearch: "",
  setInputSearch: () => {},
};

export const SearchContext = createContext<ISearchContextProps>(DEFAULT_VALUE);

export const SearchProvider = ({ children }: ISearchContextProvider) => {
  const [inputSearch, setInputSearch] = useState(DEFAULT_VALUE.inputSearch);

  return (
    <SearchContext.Provider value={{ inputSearch, setInputSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
