import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import NotFound from "../pages/not-found-page/NotFound";
import ProtectedRoute from "./AuthElements/ProtectedRoute";
import { ProtectedRoutes } from "../model/Model";
import { protectedRoutes } from "../routes/routes";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
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
              {route.children && (
                <Route
                  path={route.children.path}
                  element={<route.children.element />}
                />
              )}
            </Route>
          );
        })}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
