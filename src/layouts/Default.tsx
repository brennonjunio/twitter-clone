import { Outlet, RouterProvider } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
export const homeBlue = true;
export function Default() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
