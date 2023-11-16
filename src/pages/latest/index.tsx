import type { GetStaticPropsResult, NextPage } from "next";
import React from "react";
import SEO from "../../components/seo/SEO";
import { Game } from "types/games/Game";
import { Time } from "utilities/constants";
import { getLatestGames } from "api/games";
import LatestPageList from "components/latest/LatestPageList";

interface LatestPageProps {
  games: Game[];
}

const LatestPage: NextPage<LatestPageProps> = ({ games }) => {
  return (
    <div>
      <SEO title="Latest" />
      <LatestPageList games={games} />
    </div>
  );
};

export async function getStaticProps() {
  const games = await getLatestGames();
  const props: GetStaticPropsResult<LatestPageProps> = {
    props: { games },
    revalidate: Time.HOUR,
  };
  return props;
}

export default LatestPage;
