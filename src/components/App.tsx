import { Routes, Route } from "react-router-dom";
import { RouteInterface, ChildrenRoute } from "src/routes/Routes.model";
import { protectedRoutes, unprotectedRoutes } from "../routes/routes";
import NotFound from "../pages/notFound-page/NotFound";
import UnprotectedRoutes from "./AuthElements/UnprotectedRoutes";
import ProtectedRoute from "./AuthElements/ProtectedRoute";
import Container from "./Container/Container";
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
              <Container>
                <ProtectedRoute>
                  <route.element />
                </ProtectedRoute>
              </Container>
            }
          >
            {route?.children?.map((child: ChildrenRoute, index: number) => {
              return (
                <Route
                  path={child.path}
                  key={index}
                  element={<child.element />}
                ></Route>
              );
            })}
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
