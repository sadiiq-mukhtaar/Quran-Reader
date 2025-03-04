import { createBrowserRouter } from "react-router-dom";

import App from "../../App";

export const routes = createBrowserRouter([
  { index: true, element: <App /> },
  { path: "/:id", element: <App /> },
]);
