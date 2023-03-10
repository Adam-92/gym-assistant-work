import { ReactNode } from "react";
import { MotionStyle } from "framer-motion";

export interface TransitionProps {
  children: ReactNode;
  duration?: number;
  style?: MotionStyle;
}
