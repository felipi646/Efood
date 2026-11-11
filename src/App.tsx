import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import { store } from "./store";
import Cart from "./components/Cart";

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
  return (
    <Provider store={store}>
      <RouterProvider router={rotas} />
      <Cart />
    </Provider>
  );
}

export default App;
