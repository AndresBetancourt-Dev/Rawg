import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Game } from "types/games/Game";

export interface GameInfoProps {
  game: Game;
}

const Container = styled.div`
  ${tw`w-full h-[100vh] flex flex-col items-center py-6`}

  & h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
  }

  & .game__description{
    ${tw`flex flex-col items-center mb-6`}
  }

  p {
    max-width: 50%;
    margin-bottom: 1em;
  }
`;
const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  return (
    <Container>
      <h1>{game.name}</h1>
      <div className="game__description" dangerouslySetInnerHTML={{__html: game.description}}></div>
    </Container>
  );
};

export default GameInfo;
