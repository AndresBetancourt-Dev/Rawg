import type { GetStaticPropsResult , NextPage,  } from "next"
import { Fragment } from "react"
import { getGames } from "../api/games";
import HomeHero from "../components/hero/HomeHero"
import HomeGameList from "../components/home/HomeGamesList";
import SEO from "../components/seo/SEO"
import { Game } from "../types/games/Game";
import { Time } from "../utilities/constants";

interface HomeProps {
  games : Game[];
}

const Home: NextPage<HomeProps> = ({games}) => {
  console.log(games);
  return (
    <Fragment>
      <SEO title="Home" />
      <HomeHero />
      <HomeGameList games={games} />
    </Fragment>
  );
};

export async function getStaticProps(){
  const games = await getGames();
  const props : GetStaticPropsResult<HomeProps> = { props: { games }, revalidate: Time.HOUR };
  return props;
};

export default Home;