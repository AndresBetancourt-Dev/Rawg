import styled from "styled-components/macro";
import tw from "twin.macro";

export const Toggler = styled.button`
    ${tw`border-0 outline-none focus:outline-none fixed w-[50px] h-[50px] right-[26px] top-[18px] rounded-full`}
    ${tw`flex items-center justify-center`}
`;

const BURGER_WIDTH = "25";

export const Burger = styled.svg.attrs(() => ({
    width: BURGER_WIDTH,
    height: BURGER_WIDTH,
    viewBox: `0 0 ${BURGER_WIDTH} ${BURGER_WIDTH}`
}))``;