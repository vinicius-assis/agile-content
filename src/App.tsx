import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import HomePage from "./pages/HomePage";

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
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
