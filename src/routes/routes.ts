import { RouteInterface } from "../model/Routes.model";
import Exercises from "src/pages/exercises-page/Exercises";
import Plan from "../pages/plan-page/Plan";
import Settings from "../pages/settings-page/Settings";
import Dashboard from "../pages/dashboard-page/Dashboard";
import Login from "../pages/login-page/Login";
import Register from "../pages/register-page/Register";
import AddNewExercise from "../pages/addNewExercise-page/AddNewExercise";
import Catalogue from "../pages/catalogue-page/Catalogue";

export const protectedRoutes: RouteInterface[] = [
  {
    path: "/dashboard",
    element: Dashboard,
    children: null,
  },
  {
    path: "/catalogue",
    element: Catalogue,
    children: [
      {
        path: ":bodyPart",
        element: Exercises,
        children: null,
      },
      {
        path: "add-new",
        element: AddNewExercise,
        children: null,
      },
    ],
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
