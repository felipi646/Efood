import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurante/:id",
    element: <Restaurant />,
  },
]);

function App() {
  return <RouterProvider router={rotas} />;
}

export default App;
