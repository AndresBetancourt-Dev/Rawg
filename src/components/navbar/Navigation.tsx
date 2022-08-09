import { useCycle, Variants } from "framer-motion";
import React from "react";
import { Transition } from "../../styles";
import { Colors } from "../../styles/Colors";
import MenuToggler from "./MenuToggler";
import { Background, Nav } from "./Navigation.styles";
import NavigationList from "./NavigationList";

const sidebarVariants: Variants = {
  open:
  {
    clipPath: `circle(1000px at 82.5% 40px)`,
    transition: {
      duration: Transition.SHORT
    },
  },
  closed: {
    clipPath: `circle(30px at 82.5% 40px)`,
    transition: {
      duration: Transition.SHORT,
      delay: Transition.SHORT
    },
  }
};

const Navigation = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [open, closed] = Object.keys(sidebarVariants);

  return (
    <Nav className="navigation" initial={false} animate={isOpen ? open : closed}>
      <Background className="navigation__background" variants={sidebarVariants} />
      <MenuToggler toggle={() => toggleOpen()} stroke={Colors.WHITE} />
      <NavigationList />
    </Nav>
  );
};

export default Navigation;