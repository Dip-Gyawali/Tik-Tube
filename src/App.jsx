import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Home from "./Home";
import Video from "./Page/Video";
import Context from "./context/context";
import SearchResult from "./Page/SearchResult";

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
      },
      {
        path: '/search',
        element:<SearchResult/>
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