import { Variants } from "framer-motion";
import React from "react";
import { ZIndex } from "../../styles";
import MenuItem from "./MenuItem";
import { MenuList } from "./NavigationList.styles";

const navigationVariants: Variants = {
  open: {
    zIndex: ZIndex.FRONT,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.25,
    },
  },
  closed: {
    zIndex: ZIndex.HIDDEN,
    transition: {
      staggerChildren: 0.05,
      delayChildren: -1,
    },
  },
};

export interface MenuListProps {
  items: Object[]
}

const NavigationList = () => {

  const items = [...Array(7)];

  return (
    <MenuList variants={navigationVariants} items={items} >
      {items.map((_, index) => (
        <MenuItem key={index} />
      ))}
    </MenuList>
  );
};

export default NavigationList;
