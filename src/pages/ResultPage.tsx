import Header from "../components/Header/Header";
import { GoogleIcon } from "../components/Icons/Icons";
import ResultSection from "../components/ResultSection/ResultSection";
import SearchInputGroup from "../components/SearchInputGroup/SearchInputGroup";

const ResultPage = () => {
  return (
    <>
      <Header className="-result-page">
        <GoogleIcon width="92" height="30" />
        <SearchInputGroup />
      </Header>
      <div className="container -result">
        <ResultSection />
      </div>
    </>
  );
};

export default ResultPage;
