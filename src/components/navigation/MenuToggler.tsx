import React from "react";
import { motion } from "framer-motion";
import { Colors } from "../../styles/Colors";
import { Transition } from "../../styles/Transition";
import { Burger, Toggler } from "./MenuToggler.styles";
import AllowKeyboardNavigation from "../accessibility/AllowKeyboardNavigation";

interface Bar {
    openPath: string;
    closedPath: string;
};

interface PathProps extends Bar {
    stroke?: string;
};

interface MenuTogglerProps {
    isOpen: boolean;
    toggle: () => void;
    stroke?: string;
};

const Path: React.FC<PathProps> = ({
    openPath,
    closedPath,
    stroke,
    ...rest
}) => {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke={stroke || Colors.DARK}
            strokeLinecap="round"
            variants={{
                open: { d: openPath, transition: { duration: Transition.SHORT } },
                closed: { d: closedPath, transition: { duration: Transition.SHORT } },
            }}
            {...rest}
        ></motion.path>
    );
};

export const Bars = [
    {
        openPath: "M 3 16.5 L 17 2.5",
        closedPath: "M 2 2.5 L 20 2.5",
    },
    {
        closedPath: "M 2 9.423 L 20 9.423",
        openPath: "",
    },
    {
        closedPath: "M 2 16.346 L 20 16.346",
        openPath: "M 3 2.5 L 17 16.346",
    },
];

const MenuToggler: React.FC<MenuTogglerProps> = ({ toggle, stroke, isOpen }) => {
    return (
        <Toggler className="navigation__menu-toggler menu-toggler" onClick={toggle} aria-expanded={isOpen}>
            <AllowKeyboardNavigation aria-label="Menu Toggler">
                <Burger className="navigation__burger-icon">
                    {Bars.map(({ openPath, closedPath }: Bar, index) => (
                        <Path openPath={openPath} closedPath={closedPath} key={index} stroke={stroke} />
                    ))}
                </Burger>
            </AllowKeyboardNavigation>
        </Toggler>
    );
};

export default MenuToggler;
