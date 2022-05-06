import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Exercises from "../pages/exercises-page/Exercises"
import Plan from "../pages/plan-page/Plan"
import Settings from "../pages/settings-page/Settings"
import NotFound from "../pages/not-found-page/NotFound"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Navigate to="/login"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
