import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Exercises from "../pages/exercises-page/Exercises";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import NotFound from "../pages/not-found-page/NotFound";
import RequireAuth from "./AuthComponents/AuthComponents";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
