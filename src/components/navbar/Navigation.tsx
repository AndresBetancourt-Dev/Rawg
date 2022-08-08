import { motion, Variants } from "framer-motion";
import React from "react";
import MenuItem from "./MenuItem";

const navigationVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: -1,
    },
  },
};

const Navigation = () => {
  return (
    <motion.ul variants={navigationVariants}>
      {[...Array(5)].map((_, index) => (
        <MenuItem key={index} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
