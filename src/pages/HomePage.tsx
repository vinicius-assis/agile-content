import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SearchForm from "../components/SearchForm/SearchForm";

const HomePage = () => {
  return (
    <div className="container -home">
      <NavBar />
      <SearchForm />
      <Footer />
    </div>
  );
};

export default HomePage;
