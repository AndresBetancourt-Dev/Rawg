import { motion } from "framer-motion";
import styled, { css } from "styled-components/macro";
import tw from "twin.macro";
import { COLOR_VALUES } from "../../utilities/functions/colors";
import { MenuListProps } from "./NavigationList";

export const MenuList = styled(motion.ul)<MenuListProps>`
   ${tw`px-5 fixed top-[20%] w-[calc(300px - 20px)]`}
   ${(props) => {
      const maxColor: number = COLOR_VALUES.length - 1;
      return props.pages.reduce((itemsStyles, _, position) => {
         const red: string = COLOR_VALUES[maxColor - (position * 2 > maxColor ? maxColor : position * 2)];
         const blue: string = COLOR_VALUES[Math.floor(maxColor / (position > 1 ? 1 : 2))];

         itemsStyles +=
         `
         & li:nth-child(${position + 1}) span {
            background-image: linear-gradient(45deg, #${red + red}00${blue + blue},#${red + red}66${blue + blue});
            transition: 0.5s ease;
         }

         & li:nth-child(${position + 1}):hover span {
            background-image: linear-gradient(45deg, #${red + red}00${blue + blue},#${red + red}66${blue + blue});
            transform: scale(1.075,1.075);
         }
         `;

         return itemsStyles;
      }, "");
   }}
`;