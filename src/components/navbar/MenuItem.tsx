import { motion, Variants } from "framer-motion";
import React from "react";
import { Ease, Transition } from "../../styles";
import { Circle, Li, Text } from "./MenuItem.styles";

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

interface MenuItemProps { 
  icon?: React.ElementType,
  text?: string,
};

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, text }) => {
  return (
    <Li className="navigation__list-item" variants={menuItemVariants}>
      <Circle className="navigation__list-item-circle">
        {Icon && <Icon />}
      </Circle>
      <Text className="navigation__list-item-text">
        {text}
      </Text>
    </Li>
  );
};

export default MenuItem;
