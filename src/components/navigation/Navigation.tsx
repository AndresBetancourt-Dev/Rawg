import { Variants } from "framer-motion";
import React, { useContext } from "react";
import NavigationContext from "../../contexts/NavigationContext";
import { Transition } from "../../styles";
import { Colors } from "../../styles/Colors";
import MenuToggler from "./MenuToggler";
import { Background, Nav } from "./Navigation.styles";
import NavigationList from "./NavigationList";

const sidebarVariants: Variants = {
  open:
  {
    clipPath: `circle(2000px at 82.5% 40px)`,
    transition: {
      duration: Transition.MEDIUM
    },
  },
  closed: {
    clipPath: `circle(30px at 82.5% 40px)`,
    transition: {
      duration: Transition.MEDIUM,
    },
  }
};

const Navigation = () => {

  const [open, closed] = Object.keys(sidebarVariants);
  const { isOpen, toggleOpen, exit, pages } = useContext(NavigationContext);

  return (
    <Nav className="navigation" initial={false} animate={isOpen ? open : closed} onMouseLeave={() => exit()}>
      <MenuToggler toggle={() => toggleOpen()} stroke={Colors.WHITE} isOpen={isOpen}/>
      <Background className="navigation__background" variants={sidebarVariants}>
        <NavigationList pages={pages} />
      </Background>
    </Nav>
  );
};

export default Navigation;