import React, { useState } from "react";
import styled from "styled-components";
import { Common } from "styles";
import tw from "twin.macro";
import GameCard from "./GameCard";
import { Game } from "types/games/Game";
import InfiniteScroll from "react-infinite-scroll-component";
import { getGamesByPage } from "api/games";

export const Section = styled.section`
  ${Common.FullWidth}
  ${tw`items-center justify-center h-auto p-12`}
`;
interface GamesPageListProps {
  games: Game[];
}

const GamesPageList: React.FC<GamesPageListProps> = (props) => {
  const [games, setGames] = useState(props.games);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMoreGames = async () => {
    const { results, next } = await getGamesByPage(page + 1);

    setGames([...games, ...results]);
    setPage(page + 1);
    setHasMore(!!next);
  };

  return (
    <Section>
      <div className="flex flex-wrap w-full">
        <h2 className="gameslist-title text-4xl">All Games</h2>
        <InfiniteScroll
          className="flex flex-wrap w-full gap-5 pt-5 justify-center"
          dataLength={games.length}
          next={getMoreGames}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {games.map((game: Game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </InfiniteScroll>
      </div>
    </Section>
  );
};

export default GamesPageList;
