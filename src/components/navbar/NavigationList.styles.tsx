import { motion } from "framer-motion";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { COLOR_VALUES } from "../../utilities/functions/colors";

export const MenuList = styled(motion.ul)<{items : any[]}>`
   ${tw`px-5 absolute top-[20%] w-[95%]`}
   ${(props) => {
      const maxColor: number = COLOR_VALUES.length - 1;
      return props.items.reduce((itemsStyles, _, position) => {
         const red: string =  COLOR_VALUES[maxColor - (position * 2 > maxColor ? maxColor : position * 2 )];
         const blue: string = COLOR_VALUES[Math.floor(maxColor / (position > 1 ? 1 : 2))];

         itemsStyles += 
         `
         & li:nth-child(${position+1}) span {
            border: 2.5px solid #${red+red}00${blue+blue};
         }
         `;
         return itemsStyles;
      },"");
   }}
`;