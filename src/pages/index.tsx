import type { GetStaticProps, GetStaticPropsResult, NextPage, NextPageContext } from 'next'
import { Fragment } from 'react'
import { getGames } from '../api/games';
import HomeHero from '../components/hero/HomeHero'
import SEO from '../components/seo/SEO'

interface HomeProps {
  games : Array<object>
}

const Home: NextPage<HomeProps> = ({games}) => {
 
  return (
    <Fragment>
      <SEO title='Home' />
      <HomeHero />
      <HomeHero />
    </Fragment>
  )
};

export async function getStaticProps(){
  const games = await getGames();
  const props : GetStaticPropsResult<HomeProps> = { props: { games },  };
  return props;
};

export default Home;