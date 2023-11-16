import React, { Fragment } from "react";
import type { GetStaticPropsResult, NextPage } from "next";
import SEO from "components/seo/SEO";
import { getGames } from "api/games";
import { Time } from "utilities/constants";
import { Game } from "types/games/Game";
import GamesPageList from "components/games/GamesPageList";

interface GamesPageProps {
  games: Game[];
}

const GamesPage: NextPage<GamesPageProps> = ({ games }) => {
  console.log(games)
  return (
    <Fragment>
      <SEO title="Games" />
      <GamesPageList games={games} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const games = await getGames();
  const props: GetStaticPropsResult<GamesPageProps> = {
    props: { games },
    revalidate: Time.HOUR,
  };
  return props;
}

export default GamesPage;
