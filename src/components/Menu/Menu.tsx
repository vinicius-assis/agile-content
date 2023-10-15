const Menu = () => {
  const items = new Array(9).fill("");
  return (
    <ul className="menu">
      {items.map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default Menu;
