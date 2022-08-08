import { motion, Variants } from "framer-motion";
import React from "react";
import { Ease, Transition } from "../../styles";

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: Transition.SHORT,
      ease: Ease.DEFAULT,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: Transition.SHORT,
      ease: Ease.DEFAULT,
    },
  },
};

const MenuItem = () => {
  return (
    <motion.li variants={menuItemVariants}>
      <span className="icon-placeholder"></span>
      <span className="text-placeholder"></span>
    </motion.li>
  );
};

export default MenuItem;
