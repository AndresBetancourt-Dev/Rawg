import styled from "styled-components/macro";
import { Colors } from "styles";
import tw from "twin.macro";
import { Game } from "types/games/Game";

export const Container = styled.article<Partial<Game>>`
  min-height: 400px;
  background: #6600ff;
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

  ${tw`md:w-[47.5%] w-full xl:w-[30%]`}
`;

export const GameCardTitle = styled.h3`
  ${tw`p-5 text-2xl`}
  text-shadow: 2px 2px ${Colors.BLACK};
`;

export const GameCardContent = styled.div`
  ${tw`w-full absolute h-1/2 bottom-0 bg-darker grid grid-cols-2 opacity-95`}
`;

export const GameCardInformation = styled.div`
  ${tw``}
`;

export const GameCardHighlights = styled.div`
  ${tw`flex items-center justify-center`}
`;

export const GameCardRatingContainer = styled.div`
  ${tw`flex p-2 items-center font-title text-yellow-400`}

  & svg {
    ${tw`mx-0.5 w-4`}
  }

  & p {
    ${tw`pt-1 text-xl mr-2`}
  }
`;

export const GameCardDate = styled.div`
  ${tw`flex items-center space-x-2`}
`
export const GameCardMeta = styled.div`
${tw`flex flex-col items-center space-y-2 lg:flex-row lg:justify-evenly lg:space-x-2`}
`;