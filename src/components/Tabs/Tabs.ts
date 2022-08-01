import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faDumbbell,
  faGear,
  faRightFromBracket,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { TabInterface } from "src/model/Tabs.model";

export const tabs: TabInterface[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: faWindows,
    to: "/dashboard",
    children: null
  },
  {
    id: 2,
    name: "Catalogue",
    icon: faDumbbell,
    to: "/catalogue",
    children: [
      {
        name: "Exercises",
        to: "../catalogue"
      },
      {
        name: "Add New",
        to: "add-new",
      }
    ],
  },
  {
    id: 3,
    name: "Plan",
    icon: faCalendarDays,
    to: "/plan",
    children: null
  },
  {
    id: 4,
    name: "Settings",
    icon: faGear,
    to: "/settings",
    children: null
  },
  {
    id: 5,
    name: "Logout",
    icon: faRightFromBracket,
    to: "/logout",
    children: null
  },
];
