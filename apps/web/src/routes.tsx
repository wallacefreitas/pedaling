import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Pedals from "./pages/pedals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
])