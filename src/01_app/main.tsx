import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./providers/appRouter";
import { store } from "./providers/appStore";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
