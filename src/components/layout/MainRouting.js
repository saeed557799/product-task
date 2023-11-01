import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import { PanelLayout } from "./PanelLayout";
import UserManagement from "../pages/user-management/UserManagement";

export const MainRouting = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/dashboard"
          errorElement={<ErrorPage />}
          element={<PanelLayout />}
        >
          <Route index element={<UserManagement />}></Route>
          <Route
            path="/dashboard/users-management"
            element={<UserManagement />}
          ></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};
