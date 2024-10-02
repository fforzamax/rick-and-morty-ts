import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/", //TODO: сделать редирект на /characters
    element: <div>Home</div>, 
  },
  {
    path: "/characters",
    element: <div>About</div>,
  },
  {
    path: "/locations",
    element: <div>Locations</div>,
  },
  {
    path: "/episodes",
    element: <div>Episodes</div>,
  },
])