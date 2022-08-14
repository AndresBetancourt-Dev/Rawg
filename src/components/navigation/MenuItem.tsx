import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React, { useContext } from "react";
import NavigationContext from "../../contexts/NavigationContext";
import { Ease, Transition } from "../../styles";
import { Circle, Content, Text } from "./MenuItem.styles";

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
  icon?: React.ElementType;
  name: string;
  url: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon: Icon, name, url }) => {

  const { isOpen } = useContext(NavigationContext);

  return (
    <motion.li className="navigation__list-item" variants={menuItemVariants} >
      <Link href={url}>
        <Content className="navigation__list-item-link" href={url} enabled={isOpen}>
          <Circle className="navigation__list-item-circle">
            {Icon && <Icon width={25} height={25} color={"white"} />}
          </Circle>
          <Text className="navigation__list-item-text">
            {name}
          </Text>
        </Content>
      </Link>
    </motion.li>
  );
};

export default MenuItem;
