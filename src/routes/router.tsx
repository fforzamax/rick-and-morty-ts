import { createBrowserRouter } from "react-router";
import { CharactersPage } from "../pages/CharactersPage";
import { Layout } from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <CharactersPage /> }, // При index:true компонент загружается по умолчанию при данном пути
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
