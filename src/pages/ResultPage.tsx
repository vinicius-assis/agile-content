import Header from "../components/Header/Header";
import { GoogleIcon } from "../components/Icons/Icons";
import SearchInputGroup from "../components/SearchInputGroup/SearchInputGroup";

const ResultPage = () => {
  return (
    <Header className="-result-page">
      <GoogleIcon width="92" height="30" />
      <SearchInputGroup />
    </Header>
  );
};

export default ResultPage;
