import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDays,
  faDumbbell,
  faGear,
  faBurger
} from "@fortawesome/free-solid-svg-icons";
import { Tab } from "./Sidebar.model";

export const tabs: Tab[] = [
  {
    name: "Dashboard",
    icon: faWindows,
    to: "/dashboard",
  },
  {
    name: "Catalogue",
    icon: faDumbbell,
    to: "/catalogue",
    childTabs: [
      {
        name: "Exercises",
        to: "../catalogue",
      },
      {
        name: "Add New",
        to: "/catalogue/add-new-catalogue-exercise",
      },
    ],
  },
  {
    name: "Plan",
    icon: faCalendarDays,
    to: "/plan",
  },
  {
    name: "Nutrition",
    icon: faBurger,
    to: "/nutrition"
  },
  {
    name: "Settings",
    icon: faGear,
    to: "/settings",
  },
];
