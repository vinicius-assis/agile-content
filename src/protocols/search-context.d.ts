interface ISearchContextProvider {
  children?: React.ReactNode;
}

interface ISearchContextProps {
  inputSearch: string;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
}
