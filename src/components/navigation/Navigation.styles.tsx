import styled from "styled-components/macro";
import tw from "twin.macro";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
    ${tw`bg-dark fixed top-0 right-0 bottom-0 w-[300px]`}
`;

export const Nav = styled(motion.nav)`
    ${tw`flex justify-center absolute top-0 right-0 bottom-0 w-[300px]`}
`;