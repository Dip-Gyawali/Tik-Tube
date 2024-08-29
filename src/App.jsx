import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Page/Navbar";
import Home from "./Home";
import Video from "./Page/Video";

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
  return <RouterProvider router={route} />
}