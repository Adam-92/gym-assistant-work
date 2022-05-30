import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Exercises from "../pages/exercises-page/Exercises";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import NotFound from "../pages/not-found-page/NotFound";
import ProtectedRoute from "./AuthComponents/ProtectedRoute";
import "./App.css";

const App: React.FC = () => {
  const protectedRoutes = [
    {
      path: "/dashboard",
      component: Dashboard,
    },
    {
      path: "/exercises",
      component: Exercises,
    },
    {
      path: "/plan",
      component: Plan,
    },
    {
      path: "/settings",
      component: Settings,
    },
  ];

  return (
    <Router>
      <Routes>
        {protectedRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              key={index}
              element={
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>
              }
            />
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
