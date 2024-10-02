import { createBrowserRouter } from "react-router-dom";
import { CharactersPage } from "../pages/CharactersPage";
import { Layout } from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/", //TODO: сделать редирект на /characters
    element: <Layout />,
    children: [
      {
        path: "characters",
        element: <CharactersPage />,
      },
      {
        path: "locations",
        element: <div>Locations</div>,
      },
      {
        path: "episodes",
        element: <div>Episodes</div>,
      },
    ],
  },
]);
