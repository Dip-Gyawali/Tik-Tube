import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Home from "./Home";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home/>,
      }
    ]
  }
]);
export default function App() {
  return <RouterProvider router={route} />
}