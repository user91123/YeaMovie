import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts/BaseLayout";
import { MainPage, MoviePage, SearchPage } from "@/02_pages/main/ui";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Сделать элемент ошибки</div>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
