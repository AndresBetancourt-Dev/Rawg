import { motion } from "framer-motion";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Colors, ZIndex } from "../../styles";

interface MainProps {
    background: string;
};

export const Main = styled(motion.main) <MainProps>`
    ${tw`w-full h-auto`}
    position: relative;

    &::before, &::after {
        ${tw`absolute w-full h-full`}
        content: "";
        z-index: ${ZIndex.HIDDEN};
    }

    &::after {
        top: 0;
    }

    ${(props) => props.background ? 
    `&:before{
        background-image: url(${props.background});
        background-size: 100% auto, cover;
        max-height: 100vh;
        background-repeat: no-repeat;
    }

    &:after{
        top: 0;
        background: linear-gradient(to top, ${Colors.DARK}, rgba(0,0,0,.90));
    }`: ""}
`;