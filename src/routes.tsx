import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Status } from "./pages/Status";
import { Timeline } from "./pages/Timeline";

export const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/status",
        element: <Status />,
      },
    ],
  },
]);

// https://reactrouter.com/en/main/start/tutorial
