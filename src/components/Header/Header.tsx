import { IHeaderProps } from "../../protocols/header";

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
