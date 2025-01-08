import { createBrowserRouter } from "react-router";
import { Layout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "characters",
        lazy: async () => {
          const { CharactersPage } = await import("../pages");
          return { element: <CharactersPage /> };
        },
      },
    ],
  },
]);
