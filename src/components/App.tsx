import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes, RouteInterface } from "../model/Model";
import { protectedRoutes, unprotectedRoutes } from "../routes/routes";
import NotFound from "../pages/not-found-page/NotFound";
import UnprotectedRoutes from "./AuthElements/UnprotectedRoutes";
import ProtectedRoute from "./AuthElements/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <Routes>
      {protectedRoutes.map((route: ProtectedRoutes, index: number) => {
        return (
          <Route
            path={route.path}
            key={index}
            element={
              <ProtectedRoute>
                <route.element />
              </ProtectedRoute>
            }
          >
            {route.children &&
              route.children.map((route: RouteInterface, index: number) => {
                return (
                  <Route
                    path={route.path}
                    key={index}
                    element={<route.element />}
                  />
                );
              })}
            )
          </Route>
        );
      })}
      {unprotectedRoutes.map((route: RouteInterface, index: number) => {
        return (
          <Route
            path={route.path}
            key={index}
            element={
              <UnprotectedRoutes>
                <route.element />
              </UnprotectedRoutes>
            }
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
