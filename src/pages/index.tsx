import type { GetStaticPropsResult , NextPage,  } from "next"
import { Fragment } from "react"
import { getGames } from "../api/games";
import HomeHero from "../components/hero/HomeHero"
import SEO from "../components/seo/SEO"
import { Time } from "../utilities/constants";

interface HomeProps {
  games : Array<object>;
}

const Home: NextPage<HomeProps> = ({games}) => {
 
  return (
    <Fragment>
      <SEO title="Home" />
      <HomeHero />
    </Fragment>
  );
};

export async function getStaticProps(){
  const games = await getGames();
  const props : GetStaticPropsResult<HomeProps> = { props: { games }, revalidate: Time.HOUR };
  return props;
};

export default Home;