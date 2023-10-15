import { IHeaderProps } from "../../protocols/header";
import "./style.css";

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
