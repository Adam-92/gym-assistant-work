import { motion } from "framer-motion";
import { TransitionProps } from "./Transition.model";

const Transition = ({ children, style, duration }: TransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
