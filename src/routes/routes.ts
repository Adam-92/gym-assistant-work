import { RouteInterface } from "./Routes.model";
import Exercises from "src/pages/exercises-page/Exercises";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Catalogue from "../pages/catalogue-page/Catalogue";
import AddNew from "../pages/add-new-page/AddNew";

export const protectedRoutes: RouteInterface[] = [
  {
    path: "/dashboard",
    element: Dashboard,
  },
  {
    path: "/catalogue",
    element: Catalogue,
    children: [
      {
        path: ":selectedBodyPart",
        element: Exercises,
      },
      {
        path: "add-new",
        element: AddNew,
      },
    ],
  },
  {
    path: "/plan",
    element: Plan,
  },
  {
    path: "/settings",
    element: Settings,
  },
];

export const unprotectedRoutes: RouteInterface[] = [
  {
    path: "/",
    element: Login,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
];
