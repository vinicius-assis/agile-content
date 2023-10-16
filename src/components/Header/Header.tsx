import { IHeaderProps } from "../../protocols/header";
import "./style.css";

const Header: React.FC<IHeaderProps> = ({ children, className = "" }) => {
  return <header className={`header ${className}`}>{children}</header>;
};

export default Header;
