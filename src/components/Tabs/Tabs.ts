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
    to: "/dashboard"
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
        name: "Modify",
        to: "modify"
      }
    ],
  },
  {
    id: 3,
    name: "Plan",
    icon: faCalendarDays,
    to: "/plan"
  },
  {
    id: 4,
    name: "Settings",
    icon: faGear,
    to: "/settings"
  },
  {
    id: 5,
    name: "Logout",
    icon: faRightFromBracket,
    to: "/logout"
  }
];
