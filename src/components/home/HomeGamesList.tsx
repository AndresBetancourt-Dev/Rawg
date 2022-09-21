import Image from "next/image";
import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { Common } from "styles";
import { Game } from "types/games/Game";
import GameCard from "../games/GameCard";

export const Section = styled.section`
    ${Common.FullWidth}
    ${tw`items-center justify-center h-auto p-12`}
    backgroung: red;
    z-index: 500;
    .home__gameslist {
      &-title {
        font-size: clamp(1.5rem, 5vw, 3rem);
      }
    }
`;

export const KratosContainer = styled.div`
    ${tw`hidden flex-wrap w-1/4 relative lg:flex h-auto`}
`;

export const Kratos = styled(Image)`
`;

interface HomeGameListProps {
  games: Game[];
}

const HomeGameList: React.FC<HomeGameListProps> = ({games}) => {
  return (
    <Section className="home__gameslist">
      <KratosContainer>
        <Kratos src={"/images/powerful-characters.png"} width={450} height={1000} objectFit={"cover"} alt={"Kratos Image"}/>
      </KratosContainer>
      <div className="flex flex-wrap w-4/5">
        <h2 className="home__gameslist-title">Best Games</h2>
        <div className="flex flex-wrap w-full gap-5">
        {games.map((game: Game) => (
          <GameCard game={game} key={game.id}/>
        ))}
        </div>
      </div>
    </Section>
  );
};

export default HomeGameList;