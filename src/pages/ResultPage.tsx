import Avatar from "../components/Avatar/Avatar";
import Header from "../components/Header/Header";
import { GoogleIcon } from "../components/Icons/Icons";
import Menu from "../components/Menu/Menu";
import SearchInputGroup from "../components/SearchInputGroup/SearchInputGroup";

const ResultPage = () => {
  return (
    <Header className="-result-page">
      <GoogleIcon width="92" height="30" />
      <SearchInputGroup />
      <div className="nav-wrapper">
        <Menu />
        <Avatar />
      </div>
    </Header>
  );
};

export default ResultPage;
