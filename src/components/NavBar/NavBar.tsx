import Avatar from "../Avatar/Avatar";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./style.css";

const NavBar = () => {
  return (
    <Header>
      <h1>
        <span className="stronger-text">Agile Content</span> Frontend test
      </h1>
      <div className="nav-wrapper">
        <Menu />
        <Avatar />
      </div>
    </Header>
  );
};

export default NavBar;
