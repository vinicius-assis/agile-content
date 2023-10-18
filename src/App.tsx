import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";
import { SearchProvider } from "./context/SearchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

function App() {
  return (
    <SearchProvider>
      <RouterProvider router={router} />;
    </SearchProvider>
  );
}

export default App;
