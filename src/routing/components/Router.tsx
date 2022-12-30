import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "src/pages/notFound/NotFoundPage";
import ProtectedRoute from "src/routing/components/ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";
import { routes } from "../routes";
import { RouteWithLayout } from "./RouteWithLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<RouteWithLayout />}>
            {routes.protectedRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  key={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
        </Route>
        <Route element={<UnprotectedRoute />}>
          {routes.unprotectedRoutes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                element={<route.element />}
              />
            );
          })}
        </Route>
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
