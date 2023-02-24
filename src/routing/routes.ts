import LogoutPage from "src/pages/logout/LogoutPage";
import { Route } from "./Routes.model";
import ExercisesPage from "src/pages/exercises/ExercisesPage";
import PlanPage from "../pages/plan/PlanPage";
import SettingsPage from "../pages/settings/SettingsPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import CataloguePage from "../pages/catalogue/CataloguePage";
import AddNewCatalogueExercisePage from "src/pages/add-new-catalogue-exercise/AddNewCatalogueExercisePage";
import SelectedExercisePage from "src/pages/selected-exercise/SelectedExercisePage";
import { NutritionPage } from "src/pages/nutrition/NutritionPage"; 

export const protectedRoutes: Route[] = [
  {
    path: "/dashboard",
    element: DashboardPage,
  },
  {
    path: "/catalogue",
    element: CataloguePage,
  },
  {
    path: "/catalogue/:selectedBodyPart",
    element: ExercisesPage,
  },
  {
    path: "/catalogue/:selectedBodyPart/:selectedExercise",
    element: SelectedExercisePage,
  },
  {
    path: "/catalogue/add-new-catalogue-exercise",
    element: AddNewCatalogueExercisePage,
  },
  {
    path: "/plan",
    element: PlanPage,
  },
  {
    path: "/nutrition",
    element: NutritionPage,
  },
  {
    path: "/settings",
    element: SettingsPage,
  },
  {
    path: "/logout",
    element: LogoutPage,
  },
];

export const unprotectedRoutes: Route[] = [
  {
    path: "/",
    element: LoginPage,
  },
  {
    path: "/login",
    element: LoginPage,
  },
  {
    path: "/register",
    element: RegisterPage,
  },
];

export const routes = {
  unprotectedRoutes: unprotectedRoutes,
  protectedRoutes: protectedRoutes,
};
