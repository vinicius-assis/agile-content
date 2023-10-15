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
        <Menu />
      </Header>
      <MainIcon />
      <h1>Teste</h1>
    </>
  );
}

export default App;
