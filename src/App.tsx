import Avatar from "./components/Avatar/Avatar";
import Header from "./components/Header/Header";
import MainIcon from "./components/MainIcon/MainIcon";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Header>
        <h1>
          <strong>Agile Content</strong> Frontend test
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Menu />
          <Avatar />
        </div>
      </Header>
      <MainIcon />
      <h1>Teste</h1>
    </>
  );
}

export default App;
