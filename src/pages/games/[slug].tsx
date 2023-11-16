import { getGame, getGames } from "api/games";
import GameInfo from "components/games/GameInfo";
import SEO from "components/seo/SEO";
import LayoutContext from "contexts/LayoutContext";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import React, { Fragment, useContext, useEffect, useLayoutEffect } from "react";
import { Game } from "types/games/Game";

export interface GamePageProps {
  game: Game;
}

const GamePage: NextPage<GamePageProps> = ({ game }) => {
  const { setBackground, cleanBackground } = useContext(LayoutContext);

  useEffect(() => {
    setBackground?.(game.background_image);

    return () => {
      cleanBackground?.();
    };
  }, [setBackground, cleanBackground, game.background_image]);

  return (
    <Fragment>
      <SEO title={game.name} />
      <GameInfo game={game} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const games = await getGames();
  const paths = games.map((game: Game) => ({ params: { slug: game.slug } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const gameSlug = context.params?.slug;
  const game = await getGame(gameSlug);

  return {
    props: {
      game,
    },
    revalidate: 30,
  };
};

export default GamePage;
