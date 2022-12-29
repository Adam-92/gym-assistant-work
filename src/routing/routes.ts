import Logout  from "src/pages/logout-page/Logout";
import { Route } from "./Routes.model";
import Exercises from "src/pages/exercises-page/Exercises";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import Catalogue from "../pages/catalogue-page/Catalogue";
import AddNew from "../pages/add-new-page/AddNew";
import SelectedExercise from "src/pages/selectedExercise-page/SelectedExercise";

export const protectedRoutes: Route[] = [
  {
    path: "/dashboard",
    element: Dashboard,
  },
  {
    path: "/catalogue",
    element: Catalogue,
  },
  {
    path: "/catalogue/:selectedBodyPart",
    element: Exercises,
  },
  {
    path: "/catalogue/:selectedBodyPart/:selectedExercise",
    element: SelectedExercise,
  },
  {
    path: "/catalogue/add-new",
    element: AddNew,
  },
  {
    path: "/plan",
    element: Plan,
  },
  {
    path: "/settings",
    element: Settings,
  },
  {
    path: "/logout",
    element: Logout,
  },
];

export const unprotectedRoutes: Route[] = [
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

export const routes = {
  unprotectedRoutes: unprotectedRoutes,
  protectedRoutes: protectedRoutes,
};
