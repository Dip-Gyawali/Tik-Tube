import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Home from "./Home";
import Video from "./Page/Video";
import Context from "./context/context";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/video/:categoryID/:videoID',
        element: <Video/>
      }
    ]
  }
]);
export default function App() {
  return (
    <Context>
      <RouterProvider router={route} />
    </Context>
  );
}