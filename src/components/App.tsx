import { Routes, Route} from "react-router-dom";
import {
  PrimaryChildren,
  SecondaryChildren,
  RouteInterface,
} from "src/model/Routes.model";
import { protectedRoutes, unprotectedRoutes } from "../routes/routes";
import NotFound from "../pages/notFound-page/NotFound";
import UnprotectedRoutes from "./AuthElements/UnprotectedRoutes";
import ProtectedRoute from "./AuthElements/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <Routes>
      {protectedRoutes.map((route: RouteInterface, index: number) => {
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
            {route?.children?.map(
              (primaryChild: PrimaryChildren, index: number) => {
                return (
                  <Route
                    path={primaryChild.path}
                    key={index}
                    element={<primaryChild.element />}
                  >
                    {primaryChild?.children?.map(
                      (secondaryChildren: SecondaryChildren, index: number) => {
                        return (
                          <Route
                            path={secondaryChildren.path}
                            element={secondaryChildren.element}
                            key={index}
                          ></Route>
                        );
                      }
                    )}
                  </Route>
                );
              }
            )}
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
