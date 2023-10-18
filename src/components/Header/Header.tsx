import Avatar from "../Avatar/Avatar";
import Menu from "../Menu/Menu";
import "./style.css";

const Header: React.FC<IHeaderProps> = ({ children, className = "" }) => {
  return (
    <header className={`header ${className}`}>
      {children}
      <div className="nav-wrapper">
        <Menu />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
