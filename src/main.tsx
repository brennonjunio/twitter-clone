import React from "react";
import ReactDOM from "react-dom/client";
import "./components/global.css"; // importacao do css <<<<-----
import { RouterProvider } from "react-router-dom";
import { rotas } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
