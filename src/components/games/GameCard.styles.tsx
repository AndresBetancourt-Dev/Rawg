import styled from "styled-components/macro";
import { Colors } from "styles";
import tw from "twin.macro";
import { Game } from "types/games/Game";

export const Container = styled.a<Partial<Game>>`
  min-height: 400px;
  border-radius: 1rem;
  background-image: url(${(props) => props.background_image});
  background-size: cover;
  background-position: center;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  transition: 1s ease;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 1s ease;
    background-color: #${(props) => props.dominant_color};
    opacity: 0.25;
  }

  &:hover {
    transform: scale(1.1, 1.1);
  }

  & h1 {
    margin-left: 1em;
  }

  ${tw`md:w-[47.5%] w-full lg:w-[30%] xl:w-[22.5%]`}
`;

export const GameCardTitle = styled.h3`
  ${tw`p-5 text-2xl`}
  text-shadow: 2px 2px ${Colors.BLACK};
`;

export const GameCardContent = styled.div`
  ${tw`w-full absolute bottom-0 bg-darker grid opacity-95 h-auto`}
`;

export const GameCardInformation = styled.div`
  ${tw`w-full grid items-center justify-items-center`}
  grid-template-columns: 1.5fr repeat(2,1fr);
`;

export const GameCardHighlights = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const GameCardRatingContainer = styled.div`
  ${tw`flex p-2 items-center font-title text-yellow-400`}

  & svg {
    ${tw`mx-0.5 w-2 h-2 sm:w-3 sm:h-3`}
  }

  & p {
    ${tw`pt-1 text-xl mr-2`}
  }
`;

export const GameCardDate = styled.div`
  ${tw`flex w-auto`}

  & time{
    ${tw`text-xs text-center font-bold`}
  }
`