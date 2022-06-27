import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Exercises from "../pages/exercises-page/Exercises";
import SelectBodyPart from "../pages/SelectBodyPart-page/SelectBodyPart";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import NotFound from "../pages/not-found-page/NotFound";
import ProtectedRoute from "./AuthElements/ProtectedRoute";
import "./App.css";

const App: React.FC = () => {
  interface ChildrenRoute {
    path: string;
    element: () => JSX.Element;
  }

  interface ProtectedRoutes {
    path: string;
    element: () => JSX.Element;
    children?: ChildrenRoute | null;
  }

  const protectedRoutes: ProtectedRoutes[] = [
    {
      path: "/dashboard",
      element: Dashboard,
      children: null,
    },
    {
      path: "/exercises",
      element: SelectBodyPart,
      children: {
        path: ":bodyPart",
        element: Exercises,
      },
    },
    {
      path: "/plan",
      element: Plan,
      children: null,
    },
    {
      path: "/settings",
      element: Settings,
      children: null,
    },
  ];

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
