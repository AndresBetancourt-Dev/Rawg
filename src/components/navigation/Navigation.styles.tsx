import styled from "styled-components/macro";
import tw from "twin.macro";
import { motion } from "framer-motion";
import { ZIndex } from "../../styles";

export const Nav = styled(motion.nav)`
    ${tw`flex justify-center fixed top-0 right-0 bottom-0 w-[300px]`}
    z-index: ${ZIndex.FRONT};
`;

export const Background = styled(motion.div)`
    ${tw`bg-dark top-0 right-0 bottom-0 w-[inherit] flex justify-center items-center`}
`;