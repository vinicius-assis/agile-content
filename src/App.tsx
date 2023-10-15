import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div className="container">
      <NavBar />
      <SearchForm />
      <Footer />
    </div>
  );
}

export default App;
