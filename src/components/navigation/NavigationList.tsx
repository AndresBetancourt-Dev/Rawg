import { Variants } from "framer-motion";
import React from "react";
import { ZIndex } from "../../styles";
import { Page } from "../../types/navigation";
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
  pages: Object[]
}

const NavigationList = ({pages = [...Array(6)]}) => {

  return (
    <MenuList variants={navigationVariants} pages={pages} >
      {pages.map((page: Page) => (
        <MenuItem key={page.name} {...page} />
      ))}
    </MenuList>
  );
};

export default NavigationList;
