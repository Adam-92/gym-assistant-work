import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faDumbbell,
  faGear,
  faRightFromBracket,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarTabs } from "../../model/Model";

export const tabs: SidebarTabs[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: faWindows,
    to: "/dashboard",
  },
  {
    id: 2,
    name: "Exercises",
    icon: faDumbbell,
    to: "",
    children: [
      {
        name: "Catalogue",
        to: "/select-body-part",
      },
      {
        name: "Add New",
        to: "/add-new",
      },
    ],
  },
  {
    id: 3,
    name: "Plan",
    icon: faCalendarDays,
    to: "/plan",
  },
  {
    id: 4,
    name: "Settings",
    icon: faGear,
    to: "/settings",
  },
  {
    id: 5,
    name: "Logout",
    icon: faRightFromBracket,
    to: "/logout",
  },
];
