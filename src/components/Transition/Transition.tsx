import { motion } from "framer-motion";
import { TransitionProps } from "./Transition.model";
const Transition = ({ style, children }: TransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
