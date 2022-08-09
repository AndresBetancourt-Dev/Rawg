import { motion } from "framer-motion";
import styled from "styled-components/macro";
import tw from "twin.macro";

export const Li = styled(motion.li)`
  ${tw`flex items-center mb-5 space-x-6 cursor-pointer`}
`;

export const Circle = styled.span`
    ${tw`w-[45px] h-[45px] rounded-full`}
`;

export const Text = styled.span`
    ${tw`flex-1 h-8 rounded-lg`}
`;