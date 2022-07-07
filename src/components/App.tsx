import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoutes, RouteInterface } from "../model/Model";
import { protectedRoutes, unprotectedRoutes } from "../routes/routes";
import { AnimatePresence } from "framer-motion";
import NotFound from "../pages/not-found-page/NotFound";
import UnprotectedRoutes from "./AuthElements/UnprotectedRoutes";
import ProtectedRoute from "./AuthElements/ProtectedRoute";
import "./App.css";

const App: React.FC = () => {
  const location = useLocation();

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
            <AnimatePresence>
              {route.children && (
                <Routes location={location} key={location.pathname}>
                  {route.children.map(
                    (route: RouteInterface, index: number) => {
                      return (
                        <Route
                          path={route.path}
                          key={index}
                          element={<route.element />}
                        />
                      );
                    }
                  )}
                </Routes>
              )}
            </AnimatePresence>
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
