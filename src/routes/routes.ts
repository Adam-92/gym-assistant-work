import { ProtectedRoutes } from "../model/Model";
import Exercises from "../pages/exercises-page/Exercises";
import SelectBodyPart from "../pages/SelectBodyPart-page/SelectBodyPart";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import Dashboard from "../pages/dashboard-page/Dashboard";

export const protectedRoutes: ProtectedRoutes[] = [
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
