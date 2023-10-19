import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { GoogleIcon } from "../components/Icons/Icons";
import ResultSection from "../components/ResultSection/ResultSection";
import SearchInputGroup from "../components/SearchInputGroup/SearchInputGroup";
import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const ResultPage = () => {
  const { setInputSearch, inputSearch } = useContext(SearchContext);
  const [searchParams] = useSearchParams();
  const queryParams = searchParams?.get("q") || "";

  useEffect(() => {
    if (queryParams && !inputSearch) {
      setInputSearch(queryParams);
    }
  }, []);

  return (
    <>
      <Header className="-result-page">
        <Link to="/" onClick={() => setInputSearch("")}>
          <GoogleIcon width="92" height="30" />
        </Link>
        <SearchInputGroup />
      </Header>
      <div className="container -result">
        <ResultSection />
      </div>
    </>
  );
};

export default ResultPage;
